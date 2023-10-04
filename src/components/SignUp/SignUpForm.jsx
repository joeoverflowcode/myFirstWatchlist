import { useState } from 'react'
import axios from 'axios'

import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'




export default function SignUpForm() {
  
  const[formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })

  // const data = {
  //   username: e.target.name.value,
  //   email: e.target.email.value,
  //   password: e.target.email.value
  // }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const response = await axios.post('/api/signup', formData)
  }


    return (

<Container>
    <h4>Sign Up Form</h4>
      
      <Form 
      className="form-row col-md-4 mb-3" 
      onSubmit={handleSubmit}>
      
        <Form.Group controlId='username'>
          <Form.Label > Create a Username: </Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Username" 
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            required
            />

        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label> Provide a valid email:</Form.Label>
          <Form.Control 
            type="text" 
            placeholder='email' 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required>
                
          </Form.Control>
        </Form.Group>

        <Form.Group 
        controlId='password'>
        <Form.Label> Create a Password:</Form.Label>
        <Form.Control 
        type="text" 
        placeholder='password' 
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required>

        </Form.Control>
        </Form.Group>

        <br></br>

      <Button 
        variant="primary" 
        type="submit"> Submit Form 
      </Button>
    
      </Form>

        </Container>


    )
  }