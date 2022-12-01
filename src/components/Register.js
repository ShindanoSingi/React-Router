import { useRef } from "react";
import { useNavigate } from "react-router-dom";


export default function Register() {
  const emailRef = useRef(null);
  const fNameRef = useRef(null);
  const lNameRef = useRef(null);



  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Form Submitted')
    console.log(event)
    navigate('/confirmation', {state: {email:emailRef.current.value, firstName:fNameRef.current.value, lastName:lNameRef.current.value}})
  }

  console.log(emailRef);

  return (
    <div className="container">
      <h1>Register for Red30 Tech</h1>
      <p>
        Make sure to grab your spot for this year's conference! We love
        technology and consistently work towards being the premier provider of
        technology solutions and events that connect the world.
      </p>
      <form onSubmit={handleSubmit} autoComplete='off' >
      <label>
          First Name:
          <input type="text" name="firstName" ref={fNameRef} />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" ref={lNameRef} />
        </label>
        <label>
          Email:
          <input type="text" name="email" ref={emailRef} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
