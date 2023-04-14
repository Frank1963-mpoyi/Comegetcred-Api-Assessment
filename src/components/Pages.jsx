import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'


const Pages = () => {

    return (
        <Routes>
            <Route path='/' exact element={<HomePage/>} />
        </Routes>
    )
}

export default Pages