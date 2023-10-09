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
    
    //SWITCH THIS BACK IF TEST DOESN'T WORK this added to try to have more stock>>
    // const stockSymbols = ['AAPL', 'GOOG', 'MSFT', 'TSLA', 'ZOOM']

    const sampleStock = [
      {
        symbol: 'AAPL',
        price: 150.25,
        dollarChange: 2.50,
        percentageChange: '1.69%',
      },
      {
        symbol: 'GOOG',
        price: 2700.75,
        dollarChange: -5.25,
        percentageChange: '0.19%',
      },
      {
        symbol: 'MSFT',
        price: 305.50,
        dollarChange: 1.20,
        percentageChange: '0.39%',
      },
      {
        symbol: 'TSLA',
        price: 750.80,
        dollarChange: -3.75,
        percentageChange: '-0.50%',
      },
      {
        symbol: 'ZOOM',
        price: 250.00,
        dollarChange: 0.00,
        percentageChange: '0.00%',
      },
    ];


    // for (const symbol of stockSymbols) {
    //   await stockList.createStock({ ticker: symbol });
    // }

    for (const stock of sampleStock){
      await stockList.createStock({
        ticker: stock.symbol,
        price: stock.price,
        dollarChange: stock.dollarChange,
        percentChange: stock.percentageChange
      })
    }
    // console.log(`User: ${user.username} - StockList ID: ${stockList.stockListId}`);

    console.log(`User: ${user.username} - StockList ID: ${stockList.stockListId}`)
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
      console.log(`  - Price: $${stock.price}`);
      console.log(`  - Dollar Change: $${stock.dollarChange}`);
      console.log(`  - Percent Change: ${stock.percentChange}%`);
    }
  }
//^^^^^^^^^^^^^^^^^^^^^^^^^^


await db.close()
console.log('Finished seeding database!')