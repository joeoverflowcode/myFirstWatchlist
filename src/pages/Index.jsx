import MainNav from "../components/MainNav/MainNav.jsx";
import LandingChart from "../components/charts/landingChart.jsx"
import Container from 'react-bootstrap/Container'
import SignUpPage from "./SignUpPage.jsx";
import LoginPage from "./LoginPage.jsx";
import UserProfilePage from "./UserProfilePage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import NavLink from "react-bootstrap/esm/NavLink.js";




export default function IndexPage() {

// const loginSuccess = useSelector((state) => state.user.)
// const logOut = useSelector((state) => state.)




    return (
      <>
      <MainNav
            logo = {<i className="bi bi-rocket-takeoff" style={{ fontSize: '5rem', color: 'white' }}></i>}
            header= " WatchList Navigation Bar 🚀"              
            Links={[
              {url: '/signup', text:'Sign up'},
              {url: '/login', text:'Login'},
            ]}
      />

    
      <Container fluid className="text-center py-5 bg-light">



        <h1>Index Page</h1>
        <p></p>



        {/* <LandingChart

                /> */}



        <SignUpPage
        />

        <LoginPage
        />



        <UserProfilePage
        />

        <ErrorPage
        />

       </Container>



      </>
    );
  }
  