import MainNav from "../components/MainNav/MainNav.jsx"
import Hero from '../components/Hero/Hero.jsx'
import LogoutButton from '../components/Login/LogoutButton.jsx'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Watchlist from "../components/charts/watchList.jsx"
import LandingChart from "../components/charts/landingChart.jsx"

export default function UserProfilePage() {

    const navigate = useNavigate()
    
    const handleLogout = async (event) => {
      event.preventDefault()
      const res = await axios.post('/api/logout')
      if (res.data.success) {
        navigate('/')
      }
    }

  return (
    <>
    <MainNav
        logo = {<i className="bi bi-person-circle" style={{ fontSize: '5rem', color: 'white' }}></i>}
        header= "👤 UserProfile 👤"
        Links={[
          {url: '/', text:'Home'},
        ]}


    />


    <Hero
      timeStamp="Watchlist"
      watchList="Leo in vitae turpis massa sed elementum tempus. Tristique senectus et netus et malesuada fames ac. Odio facilisis mauris sit amet massa vitae tortor. Felis imperdiet proin fermentum leo vel orci porta non. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aenean pharetra magna ac placerat vestibulum lectus."
    />

    <LandingChart />
    
      <Watchlist />

      
        <LogoutButton
        onLogout={handleLogout}
        />


  </>
  ) 
}
