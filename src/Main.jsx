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

    {/* Landing Chart */}
    {/* <Route
    
    element={<LandingChart />}
    loader={async () => {
      const res = await axios.get('/stock')
      console.log(res.data)
      return {stock: res.data}
    }}
    /> */}


    <Route 
    path='login' 
    element={<LoginPage />} 
    />

    <Route
    path='me'
    element={<UserProfilePage />}
    />


    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)