//Grab tickers from db
//await Promise.all()
//Loop over stock
      //get API data for each ticker 

import { useState, useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import axios from 'axios'




export default function Watchlist() {

  // const [watchlist, setWatchlist] = useState([])

  // useEffect(()=>
  // const getWatchlist = 
  // )
  async function getWatchList (){ 
    const response = await axios.get('/api/watchlist')
    const watchList = response.data
  }

  return (
    <>

    <h1>Watchlist Chart</h1>
    <Container>

    </Container>
    </>
  )
}
