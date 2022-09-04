import "./App.css";
import { Form, FormGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function App() {
  return (
    <div className="App">
      <h1>
        <span className="font-weight-bold">mywebsite</span>.com
      </h1>
      <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </FormGroup>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="dark" size="lg" type="login">
          Log in
        </Button>
      </div>
      <div className="text-center pt-3">
        Or continue with your social account
      </div>
      <div className="d-grid gap-2">
        <Button className="mt-3 mb-3" variant="primary" size="lg">
          Login with Facebook
        </Button>
      </div>
      <div className="text-center">
        <a href="/sign-up">Sign up</a>
        <span className="p-2">|</span>
        <a href="/sign-up">Forget password</a>
      </div>
    </div>
  );
}

export default App;
