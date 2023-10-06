//Grab tickers from db
//await Promise.all()
//Loop over stock
      //get API data for each ticker 


import {useLoaderData} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'





export default function Watchlist() {
const {myStock} = useLoaderData()
console.log(myStock)

// const watchlistRows = watchlist.map((stock)=> (
//   <tr key={stock.ticker}>
//   <th scope='row'>{stock.ticker}</th>
//   <td>{stock.price}</td>
//   <td>{stock.change_amount}</td>
//   <td>{stock.change_percentage}</td>
// </tr>

// ))


  // async function getWatchList (user){ 
  //   const response = await axios.get('/api/watchlist')
  //   const watchList = response.data
  // }

  return (
    <>

    <h1>Watchlist Chart</h1>
    <Container>
    <h4>landing chart</h4>
                <Table className='table table-striped'>
                    <thead>
                        <tr>

                            <th scope="col">Stock Symbol</th>
                            <th scope="col">Price</th>
                            <th scope="col">$ Change</th>
                            <th scope="col">% Change</th>
                            <th scope="col"> Add to Watchlist </th>
                        </tr>
                    </thead>

                    <tbody>
                        
                    {/* {watchlistRows} */}

                    </tbody>
                </Table>
    </Container>
    </>
  )
}
