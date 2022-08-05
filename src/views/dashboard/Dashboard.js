import './dashboard.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Container from '../../components/dashboard/Container'
import MyEvents from './pages/MyEvents'

const Dashboard = () => {
  return (
    <div className='dashboardContainer'>
        <Container>
            <Routes>
                <Route path='/' element={<MyEvents/>}/>
            </Routes>
        </Container>

    </div>
  )
}

export default Dashboard