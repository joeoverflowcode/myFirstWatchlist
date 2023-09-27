import Column from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'

import LandingChart from '../charts/landingChart.jsx'


export default function Hero({ timeStamp, watchList }) {
    return (
        <Container fluid className='text-center py-5 bg-light'>
            <Row className='py-lg-5'>
                <Column lg='6' md='6' className="mx-auto">
                    <h1 className='fw-light'> {timeStamp} </h1>
                    <p className='lead text-muted'>{watchList}</p>
                </Column>
            </Row>
        </Container>
    )
}