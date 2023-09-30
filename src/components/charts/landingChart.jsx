import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import { useLoaderData } from 'react-router-dom'


export default function LandingChart() {
    const {stock} = useLoaderData()
    console.log(stock)

        const stockListItems = stock.map((stock) => (

                        <tr key={stock.ticker}>
                            <th scope='row'>{stock.ticker}</th>
                            <td>{stock.price}</td>
                            <td>{stock.change_amount}</td>
                            <td>{stock.change_percentage}</td>
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
                        </tr>
                    </thead>

                    <tbody>
                        
                    {stockListItems}

                    </tbody>
                </Table>
                {/* <ul>
                    {stockListItems}
                </ul> */}




                
        </Container>
    )
}