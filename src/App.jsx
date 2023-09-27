import {NavLink, Outlet} from 'react-router-dom'

import MainNav from "./components/MainNav/MainNav.jsx"
import Hero from './components/Hero/Hero.jsx'


export default function App() {
  return (
    <>
    <MainNav
        logo = {<i className="bi bi-rocket-takeoff" style={{ fontSize: '5rem', color: 'white' }}></i>}
        header= " WatchList Navigation Bar 🚀"
        rightLinks={[
          {url: '#', text:'Sign up'},
          {url: '#', text:'Login'},
        ]}
    />

    <Hero
    timeStamp="Tuesday September 19th 15:17:38"
    watchList="MSFT $329.06 +2.96 +1.69%"
    />

        <main>
          <Outlet />
        </main>

  </>
  ) 
}
