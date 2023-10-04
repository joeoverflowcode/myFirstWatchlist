import { User, StockList, Stock, db } from '../database/model.js'
import stockData from './data/stock.json' assert { type: 'json' }

console.log('Syncing database...')

await db.sync ({force: true})

console.log('Seeding database...')


const usersToCreate = []
for(let i = 0; i < 10; i++){
    
    let user = await User.create({
        username:`sampleUser${i}`,
        email: `test${i}@email.com`,
        password:'test'
    })

    usersToCreate.push(user)
    let stockList = await user.createStockList()
    
    //this added to try to have more stock>>
    const stockSymbols = ['AAPL', 'GOOG', 'MSFT', 'TSLA', 'ZOOM']; // Add more symbols as needed

    for (const symbol of stockSymbols) {
      await stockList.createStock({ ticker: symbol });
    }
    console.log(`User: ${user.username} - StockList ID: ${stockList.stockListId}`);
    //^^^^
    //Lukas code:
    // await stockList.createStock({ stockSymbol: "AAPL" })

    // console.log(`User: ${user.username} - StockList ID: ${stockList.stockListId}`)
    //I want to find a way to print the username and see the stock that are in their stockList
}

const usersInDB = await Promise.all(usersToCreate)
console.log(usersInDB)
// console.log(stockList)
// console.log(stockData[4])

//This added to view more stock in seed
for (const user of usersInDB) {
    console.log(`User: ${user.username}`);
    const stockList = await user.getStockList();
    const stocks = await stockList.getStocks();
    for (const stock of stocks) {
      console.log(`- Stock Symbol: ${stock.ticker}`);
    }
  }
//^^^^^^^^^^^^^^^^^^^^^^^^^^


await db.close()
console.log('Finished seeding database!')