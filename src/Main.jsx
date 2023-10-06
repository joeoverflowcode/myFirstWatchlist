import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import App from './App.jsx';
import ErrorPage from './pages/ErrorPage.jsx'
import IndexPage from './pages/Index.jsx';
import LandingChart from './components/charts/landingChart.jsx';
import LoginPage from './pages/LoginPage.jsx';
import UserProfilePage from './pages/UserProfilePage.jsx';
import axios from 'axios'
import SignUpPage from './pages/SignUpPage.jsx';

import store from './store.js'
import { Provider } from 'react-redux';



const router = createBrowserRouter(
  createRoutesFromElements(

    <Route
    path='/'
    element={<App />}
    errorElement={<ErrorPage />}
    >

    {/* Index Page */}
      <Route
    index element={<IndexPage />}
    loader={ async () => {
      const res = await axios.get('/stock')
      console.log(res.data)
      return {stock: res.data}
    
    }
  }
      />

    {/* Login Page  */}
    <Route 
    path='login' 
    element={<LoginPage />} 
    />

    {/* Signup Page  */}
    <Route
    path='signup'
    element={<SignUpPage />}
    />


    {/* User Profile page  */}
    <Route
    path='me'
    element={<UserProfilePage />}
    loader={ async () => {
      const res = await axios.get('/stock')
      const stocks = await axios.get('/api/watchlist')
      console.log(res.data)
      return {stock: res.data, myStock: stocks.data}


    }}
    
    />
    {/* User Profile page  */}
    {/* <Route
    path='me'
    element={<UserProfilePage />}
    loader={ async () => {
      
      console.log(res.data)
      return {stock: res.data}
      
    }}    
    /> */}

{/* <Route
  path="me"
  element={<UserProfilePage />}
  loader={async () => {
    const [stockResponse, watchlistResponse] = await Promise.all([
      axios.get('/stock'),
      axios.get('/api/watchlist')
    ]);

    const stockData = stockResponse.data;
    const watchlistData = watchlistResponse.data;

    console.log('Stock Data:', stockData);
    console.log('Watchlist Data:', watchlistData);

    return { stock: stockData, watchlist: watchlistData };
  }}
/> */}

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)