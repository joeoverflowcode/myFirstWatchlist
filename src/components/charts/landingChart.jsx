import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

export default function LandingChart({ stockSymbol, stockName, dollarChange, percentChange }) {
    return (
        <Container>
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
                        <tr>
                            <th scope='row'>{stockSymbol}</th>
                            <td>{stockName}</td>
                            <td>{dollarChange}</td>
                            <td>{percentChange}</td>
                        </tr>
                    </tbody>
                </Table>
        </Container>
    )
}