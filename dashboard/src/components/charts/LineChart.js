import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import axios from 'axios'



const LineChart = () => {

    const [opid, setOpid] = useState([])
  
    useEffect(() => {
        const fetch= async()=>{
             try {
  
                 const res = await axios.get('http://localhost:5000/operations');
                 
                     console.log(res);
                     setOpid(res.data);
                    
                }
            catch(err) { console.log(err) }
        }
        fetch();
    }, []); 

    let tab1 = []
    let tab2 = []

    for (const dataobj of opid) {
      tab1.push(dataobj.OP)
      tab2.push(dataobj.DURATION)
    }
  
  const data = {
    labels: tab1,
    datasets: [
      {
        label: 'Op_Duration',
        data: tab2,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      y: {
        beginAtZero: true, min : 0, max : 10
      }
    }
  };

  return (
    <>
    <div className='header'>
      {/* <h1 className='title'>Duration</h1> */}
    </div>
    <Line data={data} options={options} />
  </>
  )
}

export default LineChart
