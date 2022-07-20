import { useState } from "react"
import Input from "../../components/reusable/Input"
import emailIcon from "../../assets/email.svg"
import passwordIcon from "../../assets/password.svg"
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
         phoneNumber: { message: "", error: false},
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
                <span style={{color: 'var(--primary_green)',
            marginLeft: '4px'}}>
                    Login
                </span>
            </a>
            <div className="welcome-text">
                <h1>Welcome to Norbs</h1>
                <p>We are an event management platform,
                    aimed at helping you facilitate and run a smooth event
                </p>
                </div>
                {step === 1 &&<StepContainer step={1} headerTitle="Let us know you">
                <Input text="text" handleChange={handleChange} icon={emailIcon} label = "firstName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={passwordIcon} label = "lastName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={passwordIcon} label = "email" fieldError={fieldError}/>
                </StepContainer>}

                {step === 2 &&<StepContainer step={2} headerTitle="Let's Secure Your Details">
                <Input text="text" handleChange={handleChange} icon={emailIcon} label = "firstName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={passwordIcon} label = "lastName" fieldError={fieldError}/>
                <Input text="text" handleChange={handleChange} icon={passwordIcon} label = "email" fieldError={fieldError}/>
                </StepContainer>}

            { step === 1 && <button style = {{width: '65%'}} className ="authentication-button" onClick = {handleClick}>Next Step</button>}
                { step ===2 && <div style={{display : "flex", justifyContent: "space-between"}}>
                <button style = {{width: '35%'}} className ="authentication-button-alternate" onClick = {handleClick}>Go Back</button>
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