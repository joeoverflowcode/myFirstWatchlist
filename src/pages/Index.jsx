import MainNav from "../components/MainNav/MainNav.jsx";
import LandingChart from "../components/charts/landingChart.jsx"
import Container from 'react-bootstrap/Container'
import SignUpPage from "./SignUpPage.jsx";
import LoginPage from "./LoginPage.jsx";
import UserProfilePage from "./UserProfilePage.jsx";
import ErrorPage from "./ErrorPage.jsx";
import NavLink from "react-bootstrap/esm/NavLink.js";
import abstractChart from '../../assets/abstractCharts.webp'
import abstract2 from '../../assets/abstract2chart.jpg'
import './style/index.css'
import Hero from "../components/Hero/Hero.jsx";
import teenTrade from '../../assets/teentrading.jpg'
import SignUpForm from "../components/SignUp/SignUpForm.jsx";
import LoginForm from "../components/Login/LoginForm.jsx";



export default function IndexPage() {

// const loginSuccess = useSelector((state) => state.user.)
// const logOut = useSelector((state) => state.)




    return (
      <>
      <MainNav
            logo = {<i className="bi bi-rocket-takeoff" style={{ fontSize: '5rem', color: 'white' }}></i>}
            header= " myFirst Watchlist 🚀"              
            Links={[
              {url: '/signup', text:'Sign up'},
              {url: '/login', text:'Login'},
              {url:'/me', text:'Sample Stock List'},
              {url:'/', text:'myWatchlist'}
            ]}
      />

    
      <Container fluid className="text-center py-5 bg-light">

        <h1 class="h1">Learning About Finance Can Be Scary... </h1>
        <h2 class="h2"> 🧟 Graphs! Charts! Stock! 🧟</h2>
          <br/>
            <div class="indexImage">

            <img class="background" src={abstractChart} />
            <div class="box">

            <div class="text">The list of topics goes on and for a young person learning about money and how invessting works, the information can be overwhelming...</div>
            </div>

            </div>

<Hero
timeStamp={"myFirst Watchlist was designed with the youth in mind to help empower the future generations with the knowledge they need to obtain confidence in their financial futures."}
watchList={"With adult supervision, we currently ask young learners to sign up with a username, email, and password."}
/>
<h3 class="centered-h3">YOUR FIRST STOCK MARKET EXPERIENCE IS JUST A FEW CLICKS AWAY</h3>



<div class="styledimg"></div>


        
        <SignUpForm/>

        <LoginForm/>


       </Container>



      </>
    );
  }
  