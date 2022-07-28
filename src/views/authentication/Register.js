import { useState } from "react"
import { Link } from "react-router-dom"
import Input from "../../components/reusable/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
import userIcon from "../../assets/user.svg"
import phoneIcon from "../../assets/phone.svg"
import "./authentication.css"
import StepContainer from "../../components/authentication/register/StepContainer"


const Register = () => {
    const [userInput, setUserInput] = useState({})
    const [step,setStep] = useState(1)
    const [fieldError, setFieldError] = useState(
        {
         firstName : {message :"",error: false},
         lastName: { message: "", error: false},
         email: { message: "", error: false},
         phone: { message: "", error: false},
         password: { message: "", error: false},
         confirmPassword: { message: "", error: false}
    }
)

    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name] :  e.target.value})
        checkIfFieldIsEmpty(e)
    }
const handleClick = () => {
    console.log(userInput)
}
const checkIfFieldIsEmpty = (e) =>{
    switch (e.target.name){
        case "email":
            if(e.target.value === ""){
             setFieldError({...fieldError, [e.target.name] :{
                message: "Please enter a valid email",
                error: true}})
            } else{
                setFieldError({...fieldError, [e.target.name] :{
                    message: "",
                    error: false}})
                
            }
            break;

        case "password":
            if(e.target.value === ""){
                 setFieldError({
                    ...fieldError, [e.target.name] :
                    {
                        message: "Please enter a password",
                    error: true}})
                }else{
                    setFieldError({...fieldError, [e.target.name] :{
                        message: "",
                        error: false}})
                    
                }
                break;

        default:
            break;
    }
}


const checkIfItIsEmail = () =>{
    
}
    return(
        <div className="authenticationContainer">
        <div className="leftSide">
            <div className="leftSide-container">
            <a>Have an account?
                <span>
                    <Link to="/login" style={{color: 'var(--primary_green)',
            marginLeft: '4px'}}> Login</Link>
                </span>
            </a>
            <div className="welcome-text">
                <h1>Welcome to Norbs</h1>
                <p>We are an event management platform,
                    aimed at helping you facilitate and run a smooth event
                </p>
                </div>
                {step === 1 &&<StepContainer step={1} headerTitle="Let us know you">
                <Input text="text" handleChange={handleChange} icon={userIcon} label = "firstName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={userIcon} label = "lastName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={emailIcon} label = "email" fieldError={fieldError}/>
                </StepContainer>}

                {step === 2 &&<StepContainer step={2} headerTitle="Let's Secure Your Details">
                <Input text="text" handleChange={handleChange} icon={phoneIcon} label = "phone" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={passwordIcon} label = "password" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={passwordIcon} label = "confirmPassword" fieldError={fieldError}/>
                </StepContainer>}

            { step === 1 && 
                <button onClick={() => setStep(2)} style = {{width: '65%'}} className ="authentication-button" >
                    Next Step</button>}
                
            { step ===2 && 
                <div style={{display : "flex", justifyContent: "space-between", width: "65%"}}>
                     <button onClick={()=> setStep(1)} style = {{width: '35%'}} className ="authentication-button-alternate">Go Back</button>
                <button style = {{width: '35%'}} className ="authentication-button" onClick = {handleClick}>Register</button>
                </div>}
        <div className="social-media">
            <a>
                <div className="social-media-icon"></div>
            </a>
           </div>
        </div>
    </div>
    <div className="rightSide">

    </div>
    </div>
    )
}

export default Register