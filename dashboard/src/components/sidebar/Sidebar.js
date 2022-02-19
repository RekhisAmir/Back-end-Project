import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarwrapper">
            <h1>ISA TEX</h1>

                  <div className="sidebarmenu">
                      <h3 className="title">Production</h3>
                      <div className="list">
                          <div className="listitem"><Link exact to ='/' className="main-nav">Production Report</Link></div>
                          <div className="listitem"><Link exact to ='/ganttchart' className="main-nav">Pack Timeline</Link></div>
                         
                      </div>
                     <h3 className="title">Quality Control</h3>
                      <div className="list">
                          <div className="listitem">Quality Report</div>
                          
                      </div>
                  </div>
            </div>
            
        </div>
    )
}

export default Sidebar
