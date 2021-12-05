
import './App.css';
import { useState } from "react";
import FormInput from "./components/FormInput";

function App() {
 const [values, setValues] = useState({
   username:"",
   email:"",
   birthday:"",
   password:"",
   confirmPassword:""
})

const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 characters and shouldn't include any special characters",
    label:"Username",
    patter:"^[A-Za-z0-9]{3,16}$",
    required:true
  },
  {
    id:2,
    name:"email",
    type:"text",
    placeholder:"Email",
    errorMessage:"It should be a valid email address",
    label:"Email",
    required:true
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    label:"Birthday"
  },
  {
    id:4,
    name:"password",
    type:"password",
    placeholder:"Password",
    errorMessage:"Password should be 8-20 characters and include atleast 1 letter, 1 number and 1 special character ",
    label:"Password",
    pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,

    required:true
  },
  {
    id:5,
    name:"confirmPassword",
    type:"password",
    placeholder:"Confirm Password",
    errorMessage:"Password don't match",
    label:"Confirm Password",
    patter:values.password,
    required:true
  }
  
]
    
  console.log("re-rendered")

  const handleSubmit = (e) =>{
      e.preventDefault();
    };

    const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
    }

    console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1> Register </h1>
       {inputs.map((input) => (
        <FormInput key={input.id} 
        {...input} 
        values={values[input.name]}
         onChange={onChange}/>
       ))}
        <button>Submit</button>
        </form>
    </div>
  );
}

export default App;
