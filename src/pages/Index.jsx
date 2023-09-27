import LandingChart from "../components/charts/landingChart.jsx"
import Container from 'react-bootstrap/Container'
import { useLoaderData } from 'react-router-dom'

export default function IndexPage() {
    const {stock} = useLoaderData()
    console.log(stock)

    const stockListItems = stock.map((stock) => (
        <li key={stock.ticker}>
            {stock.ticker}
        </li>
    ))


    return (
      <>
      <Container fluid className="text-center py-5 bg-light">

        <h1>WatchList</h1>
        <p>IndexPage</p>



        <LandingChart
                stockSymbol="META"
                stockName="META Inc."
                dollarChange="$1.95"
                percentChange="2.1%"
                />


                <ul>
                  {stockListItems}
                </ul>

       </Container>



      </>
    );
  }
  