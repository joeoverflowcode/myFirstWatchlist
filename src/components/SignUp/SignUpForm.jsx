
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'



export default function SignUpForm() {


    return (


<Container>
    <h4>Sign Up Form</h4>
      
      <Form className="form-row col-md-4 mb-3">
      
        <Form.Group controlId='username'>
          <Form.Label > Create a Username: </Form.Label>
          <Form.Control type="text" placeholder="Username" required/>
        </Form.Group>

        <Form.Group controlId='email'>
          <Form.Label> Provide a valid email:</Form.Label>
          <Form.Control type="text" placeholder='email' required></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
        <Form.Label> Create a Password:</Form.Label>
        <Form.Control type="text" placeholder='password' required></Form.Control>
        </Form.Group>

<br></br>

      <Button variant="primary" type="submit"> Submit Form </Button>
    
      </Form>


{/* 


      <Form>
      <Form.Group fluid className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

<Form>

<Form.Group>
          <Form.Label>Enter your full name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Enter your full name" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your email address:</Form.Label>
          <Form.Control type="email" 
                        placeholder="Enter your your email address" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Enter your age:</Form.Label>
          <Form.Control type="number" placeholder="Enter your age" />
        </Form.Group>
        <Button variant="primary" type="submit">
           Click here to submit form
        </Button>

</Form>



<form className="form-inline">
  <div className="form-group">
    <label htmlFor="inputPassword6">Password</label>
    <input type="password" id="inputPassword6" className="form-control mx-sm-3" aria-describedby="passwordHelpInline"/>
    <small id="passwordHelpInline" className="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>


<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServer01">First name</label>
      <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServer02">Last name</label>
      <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required/>
      <div className="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationServerUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend3">@</span>
        </div>
        <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
        <div className="invalid-feedback">
          Please choose a username.
        </div>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationServer03">City</label>
      <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required/>
      <div className="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationServer04">State</label>
      <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required/>
      <div className="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationServer05">Zip</label>
      <input type="text" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required/>
      <div className="invalid-feedback">
        Please provide a valid zip.
      </div>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
      <label className="form-check-label" htmlFor="invalidCheck3">
        Agree to terms and conditions
      </label>
      <div className="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form>


<form>
  <div className="form-row">
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault01">First name</label>
      <input type="text" className="form-control" id="validationDefault01" placeholder="First name" value="Mark" required/>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefault02">Last name</label>
      <input type="text" className="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required/>
    </div>
    <div className="col-md-4 mb-3">
      <label htmlFor="validationDefaultUsername">Username</label>
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroupPrepend2">@</span>
        </div>
        <input type="text" className="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required/>
      </div>
    </div>
  </div>
  <div className="form-row">
    <div className="col-md-6 mb-3">
      <label htmlFor="validationDefault03">City</label>
      <input type="text" className="form-control" id="validationDefault03" placeholder="City" required/>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationDefault04">State</label>
      <input type="text" className="form-control" id="validationDefault04" placeholder="State" required/>
    </div>
    <div className="col-md-3 mb-3">
      <label htmlFor="validationDefault05">Zip</label>
      <input type="text" className="form-control" id="validationDefault05" placeholder="Zip" required/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Submit form</button>
</form> */}
        </Container>


    )
  }