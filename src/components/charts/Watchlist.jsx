//Grab tickers from db
//await Promise.all()
//Loop over stock
      //get API data for each ticker 


import {useLoaderData} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'



export default function Watchlist() {

  const {myStock} = useLoaderData()
  // console.log(myStock)
  
  const [watchlist, setWatchlist] = useState(myStock)
  // const updateWatchlist = (stock) => {
  //   setWatchlist(...watchlist,stock)
  // }
  
  

  const deleteStock = async (ticker) =>{

    let {data} = await axios.post('/api/deleteStock', {ticker})
    console.log(data)


  //   const newWatchlist = [...watchlist]
  //   console.log(ticker)
  //   console.log(watchlist)
    
  //   const index = newWatchlist.findIndex((stock) => stock.ticker ===ticker)
  //   console.log(index)
  // newWatchlist.splice(index,1)

  setWatchlist(data.stocks)
  }

  // const deleteStock = (ticker) => {
  //   const newWatchlist = watchlist.filter((stock) => stock.ticker !== ticker);
  //   setWatchlist(newWatchlist);
  // };


const myList = watchlist.map((stock) => (
  <tr key={stock.ticker}> 
  <th scope='row'>{stock.ticker}</th>
<th scope='row'> {stock.price}</th>
<th scope='row'>{stock.dollarChange}</th>
<th scope='row'>{stock.percentChange}</th>



  <td><Button onClick={(e) => {
    e.preventDefault()
    deleteStock(stock.ticker)}}>Delete</Button></td>
  </tr>


))


  return (
    <>

    <Container>
      <h1>Watchlist Chart</h1>

          <Table className='table table-striped'>
             <thead>
                  <tr>

                    <th scope="col">Stock Symbol</th>
                    <th scope="col">Price</th>
                    <th scope='col'> $ Change</th>
                    <th scope='col'> % Change</th>
                    <th scope='col'>Delete from Watchlist</th>
                    </tr>
                    </thead>

                    <tbody>
                        
                    {myList}

              </tbody>
        </Table>
    </Container>
    </>
  )
}
