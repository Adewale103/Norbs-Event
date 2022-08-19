import React, {useState} from 'react'
import { BsFillSlashSquareFill } from 'react-icons/bs'
import Input from '../../reusable/Input'

const CreateEventDetails = (props) => {
    const { setEventDetails, eventDetails } = props
    const [fieldError, setFieldError] = useState(
        {
            eventName: {message: "", error: false},
            location: {message: "", error: false},
            description: {message: "", error: false}
        }
    )

    const handleChange = (e) => {
        setEventDetails({...eventDetails, [e.target.name]: e.target.value})
    }
  return (
    <>
        <Input text="event-name" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color='white'/>}
        label="event-name" fieldError={fieldError}/>

        <Input text="description" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color='white'/>}
        label="description" fieldError={fieldError}/>

        <Input text="location" handleChange={handleChange}
        icon={<BsFillSlashSquareFill color='white'/>}
        label="location" fieldError={fieldError}/>
        
        
    </>
  )
}

export default CreateEventDetails