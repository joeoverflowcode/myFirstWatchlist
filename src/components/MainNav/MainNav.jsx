import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import "bootstrap-icons/font/bootstrap-icons.css"

export default function MainNav ({logo, header, Links}){
    return(
        <Navbar expand ="lg" className="bg-success navbar-dark">
            <Container fluid>
                <Navbar.Brand href= '/'> {logo}</Navbar.Brand>

                <h1 className='text-white'> {header}</h1>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav className='mx-auto'>
                    {Links.map(({url, text}, index) =>(
                        <Nav.Link key={index} href={url}>
                            {text}
                        </Nav.Link>
                    ))}
                </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>

    )
}