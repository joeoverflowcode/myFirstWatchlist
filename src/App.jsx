import MainNav from "./components/MainNav/MainNav.jsx"
import Hero from './components/Hero/Hero.jsx'


export default function App() {
  return (
    <>
    <MainNav
header = "WatchList"
rightLinks={[
  {url: '#', text:'Sign up'},
  {url: '#', text:'Login'},
]}
    />

    <Hero
    timeStamp="Tuesday September 19th 15:17:38"
    watchList="MSFT $329.06 +2.96 +1.69%"
    />

  </>
  ) 
}
