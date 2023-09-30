import LoginForm from '../components/Login/LoginForm.jsx'
import Container from 'react-bootstrap/Container'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



export default function LoginPage() {
    const navigate = useNavigate()
    const handleLogin = async (event, formData) =>{

        const res = await axios.post('/api/auth', formData)
        console.log(res)
            if (res.data.success) {
                navigate('/me')
            }
    }

    return (


<Container>
<h1>Login Page</h1>

 <LoginForm onLogin={handleLogin} />


        </Container>


    )
  }