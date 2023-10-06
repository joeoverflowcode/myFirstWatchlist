import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useLoaderData } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'



export default function LandingChart() {

    const [watchlist, setWatchlist] = useState([])

    const handleAddToWatchlist = async (ticker) => {

        let {data} = await axios.post('/api/watchlist', {ticker})
        console.log(data)
        let {stocks} = data 
        setWatchlist(stocks)
    }


    const {stock} = useLoaderData()
    console.log(stock)
    console.log(watchlist)
    const stockListItems = stock.map((stock) => (

            <tr key={stock.ticker}>
                <th scope='row'>{stock.ticker}</th>
                <td>{stock.price}</td>
                <td>{stock.change_amount}</td>
                <td>{stock.change_percentage}</td>
                <td> <Button onClick={(e)=>handleAddToWatchlist(stock.ticker)}> add </Button></td>
            </tr>
   
    ))

    
    return (
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
                        
                    {stockListItems}

                    </tbody>
                </Table>





                
        </Container>
    )
}