import MainNav from "./components/MainNav/MainNav.jsx"
import Hero from './components/Hero/Hero.jsx'

import LandingChart from "./components/charts/landingChart.jsx"

export default function UserProfilePage() {
  return (
    <>
    <MainNav
logo = {<i className="bi bi-person-circle" style={{ fontSize: '5rem', color: 'white' }}></i>}
header= " UserProfile "
rightLinks={[
  {url: '#', text:'Log Out'},
]}
    />
    <Hero

    />
                <LandingChart
                stockSymbol="APPL"
                stockName="Apple Inc."
                dollarChange="$0.45"
                percentChange="5.1%"
                />


  </>
  ) 
}
