import MainNav from "../components/MainNav/MainNav.jsx"
import Hero from '../components/Hero/Hero.jsx'
import LogoutButton from '../components/Login/LogoutButton.jsx'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
// import Watchlist from "../components/charts/watchList.jsx"
import LandingChart from "../components/charts/landingChart.jsx"
import { Container } from "react-bootstrap"
// import teenTrade from '../../assets/fatherSon.jpg'
import './style/UserProfilePage.css'
import Button from "react-bootstrap/Button"



export default function UserProfilePage() {

    const navigate = useNavigate()
    
    const handleLogout = async (event) => {
      event.preventDefault()
      const res = await axios.post('/api/logout')
      if (res.data.success) {
        navigate('/')
      }
    }



    const handleGoToWatchlist = () => {
      navigate('/watchlist')
    }
  return (
    <>
    <MainNav
        logo = {<i className="bi bi-person-circle" style={{ fontSize: '5rem', color: 'white' }}></i>}
        header= "👤 UserProfile 👤"
        Links={[
          {url: '/', text:'Home'},
          {url:'watchlist', text:'myWatchlist'},
          { url:'/', text:'Logout',
          onclick: handleLogout
          }
        ]}

    />


    <Hero
      timeStamp="Welcome Username!"
      watchList="Below is a list of stock with the highest trading volume for the previous day. This list has no merit on the company's performance, it is just a sample list of different stock to help you get started."

  />

      <div className="image-container">
          <div className="image"></div>
      </div>


    <LandingChart />
    <Button onClick={handleGoToWatchlist}> Go to my Watchlist</Button>

        <LogoutButton
        onLogout={handleLogout}
        />



  </>
  ) 
}
