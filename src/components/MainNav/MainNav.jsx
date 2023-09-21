import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function MainNav ({header, rightLinks}){
    return(
        <Navbar expand ="lg" className="bg-success navbar-dark">
            <Container fluid>
                <Navbar.Brand href= '/'> {header}</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                <Nav className='mx-auto'>
                    {rightLinks.map(({url, text}, index) =>(
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