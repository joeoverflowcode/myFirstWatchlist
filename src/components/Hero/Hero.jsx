import Column from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'


export default function Hero({timeStamp, watchList, stockSymbol, stockName, dollarChange, percentChange }) {
    return (
        <Container fluid className='text-center py-5 bg-light'>
            <Row className='py-lg-5'>
                <Column lg='6' md='6' className="mx-auto">
                    <h1 className='fw-light'> {timeStamp} </h1>
                    <p className='lead text-muted'>{watchList}</p>

                <Table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col">Stock Symbol</th>
                            <th scope="col">Stock Name</th>
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
                </Column>
            </Row>
        </Container>
    )
}