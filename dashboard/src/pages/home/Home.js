
import React from 'react'
import './home.css'
import Grid from '../../components/grid/Grid'
import Topbar from '../../components/topbar/Topbar'

const Home = () => {
    return (
        <div className="home">
            <Topbar/><br/><br/>
            <Grid />
        </div>
    )
}

export default Home
