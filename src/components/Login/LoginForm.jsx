
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'


export default function LoginForm({ onLogin }) {

    const [emailValue, setEmailValue] = useState("") 
    const [passwordValue, setPasswordValue] = useState('')
    console.log(emailValue)
    console.log(passwordValue)
    
    return (


<Container>
    <h4>Login Form</h4>
      
      <Form 
      className="form-row col-md-4 mb-3"
      onSubmit={(event) => {
        event.preventDefault()
        onLogin(event, {
          email: emailValue,
          password: passwordValue,
        })
      }}
      >
      

        <Form.Group controlId='email'>
          <Form.Label> Enter your email:</Form.Label>
          <Form.Control 
          value={emailValue} 
          onChange={(evt)=> setEmailValue(evt.target.value)} 
          type="text" 
          placeholder='email' 
          required>

          </Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
        <Form.Label>Password:</Form.Label>
        <Form.Control 
        value={passwordValue} 
        onChange={(event) => setPasswordValue(event.target.value)}
        type="text" 
        placeholder='password' 
        required>

        </Form.Control>
        </Form.Group>

<br></br>

      <Button variant="primary" type="submit"> Click to Login </Button>
    
      </Form>



        </Container>


    )
  }