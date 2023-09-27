import { User } from './database/model.js'
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
    //API call goes here
    const { data } = await axios.get(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=T76N7RFQYS9CGP9F`) 
    res.status(200).send(data.most_actively_traded)
})


app.post('/api/auth', async ( req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ where: { email: email}})

    if(user && user.password === password) {
        req.session.userId = user.userId
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }
})


app.post('/api/logout', ( req, res ) => {
    if (!req.session.userId) {
        res.status(401).json({ error: 'Unauthorized'})
    } else {
        req.session.destroy()
        res.json({ success: true})
    }
})

ViteExpress.listen(app, port, () => console.log(`Server is listening on http://localhost:${port}`));

