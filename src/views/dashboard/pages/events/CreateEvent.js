import React, { useState } from "react";
import CreateEventDetails from "../../../../components/dashboard/events/CreateEventDetails";
import Preview from './Preview'

const CreateEvent = () => {
    const [eventDetails, setEventDetails] = useState({})
    return (
        <div className="createEventContainer">
            <div>
                <CreateEventDetails setEventDetails = {setEventDetails}/>
            </div>
            <Preview eventDetails = {eventDetails}/>
        </div>
    )
}

export default CreateEvent