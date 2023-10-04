import { User, StockList, Stock } from './database/model.js'
import dotenv from 'dotenv'
import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import ViteExpress from 'vite-express';
import axios from 'axios';

dotenv.config()
//T76N7RFQYS9CGP9F

const app = express();
const port = '8000';
ViteExpress.config({ printViteDevServerHost: true });

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({ secret: 'ssshhhhh', saveUninitialized: true, resave: false }));



app.get('/stock', async (req,res) => {
    const { data } = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo`) 
    console.log(data)
    res.status(200).send(data.most_actively_traded)
})


app.post('/api/signup'), async (req, res) => {
    const {username, email, password } = req.body
    //create new user
    //create new stocklist for user created
    res.status(200).json({message:'user created'})
    
}




app.post('/api/auth', async ( req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email}})
    console.log(user,password,email)
    if(user && user.password === password) {
        req.session.userId = user.userId
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
})




// app.get('/', async (req, res) => {
//     req.session.userId = user.userId
//     if(req.session.userId) {
//         res.status(200).json({loggedIn: true})
//     } else {

//     }
// }) 


app.post('/api/logout', ( req, res ) => {
    if (!req.session.userId) {
        res.status(401).json({ error: 'Unauthorized'})
    } else {
        req.session.destroy()
        res.json({ success: true})
    }
})


// app.post('/api/watchlist', (req, res) => {

// })

app.get('/api/watchlist', async ( req, res) => {
    const {userId} = req.session
    if(!userId) {
        res.status(401).json({error: 'Unauthorized'})
    } else {
        const watchlist = await StockList.findOne(
            {
                where: {
                    userId: userId
                },
                include: {
                    model: Stock,
                    attributes: ['ticker']
                }
            }
        )
        let {stocks} = watchlist 
        let stockData = await Promise.all(
            stocks.map( async (stock) => {
                let res = await axios.get(`https://api.polygon.io/v2/aggs/ticker/${stock.ticker}/prev?adjusted=true&apiKey=demo`)
                return res.data
            }
            )
        )
console.log(stockData)
        res.json(stockData)

    }
})



app.post('/api/watchlist', async ( req, res ) => {
    const { userId } = req.session 
    if(!userId) {
        res.status(401).json({ error: 'Unauthorized'})
    } else {
        const { ticker } = req.body

        const stocklist = await StockList.findOne(
            {where:
            {userId:userId},
            include: {
                model: Stock,
                attributes: ['ticker']
            }
        })
        let {stocks} = stocklist
        const stockCheck = stocks.filter(stock=> stock.ticker === ticker)
        if(stockCheck.length >= 1){
            res.status(401)
            return
        }

        await stocklist.createStock({ 
            ticker:ticker
        })
        const watchlist = await StockList.findOne(
            {
                where: {
                    userId: userId
                },
                include: {
                    model: Stock,
                    attributes: ['ticker']
                }
            }
        )
        res.json(watchlist)
    }
})


ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));

