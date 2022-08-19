import './dashboard.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Container from '../../components/dashboard/Container'
import MyEvents from './pages/events/MyEvents'
import CreateEvent from './pages/events/CreateEvent'

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container>
            <Routes>
                <Route path='/' element={<MyEvents/>}/>
                <Route path='/create-event' element={<CreateEvent/>}/>
            </Routes>
        </Container>

    </div>
  )
}

export default Dashboard