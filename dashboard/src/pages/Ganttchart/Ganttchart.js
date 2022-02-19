import React from 'react'
import './Ganttchart.css'
import Timeline2 from '../../components/charts/Timeline2'
import Topbar from '../../components/topbar/Topbar'
import Timeline from '../../components/charts/Timeline'






const Ganttchart = () => {
  return (
    <div className="ganttchart">
      <Topbar/>
      <div className="timeline">
           <Timeline/>
      </div>     
    </div>
  )
}

export default Ganttchart

