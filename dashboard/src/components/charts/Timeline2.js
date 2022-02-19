import React, {useState, useEffect} from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'


function Timeline2() {

    const [info, setInfo] = useState([]);

  useEffect(() => {
    
    const fetchData= async()=>{
         try {

             const res = await axios.get('http://localhost:5000/operations');
             
                 console.log(res);
                 setInfo(res.data);
              
            }
        catch(err) { console.log(err) }
    }
    fetchData();
}, []); 

 const data=[
    [
      { type: 'string', id: 'Room' },
      { type: 'string', id: 'Name' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
    ['1ère opération','En prod', new Date(0, 0, 0, 8, 0, 0), new Date(0, 0, 0, 8, 24, 0)],
    ['1ère opération','Aléas', new Date(0, 0, 0, 8, 24, 0), new Date(0, 0, 0, 8, 38, 0)],
    ['1ère opération','Reprise', new Date(0, 0, 0, 8, 38, 0), new Date(0, 0, 0, 8, 55, 0)],
    ['2ème opération','En Prod', new Date(0, 0, 0, 9, 4, 0), new Date(0, 0, 0, 9, 30, 0)],
    ['2ème opération','Aléas', new Date(0, 0, 0, 9, 30, 0), new Date(0, 0, 0, 9, 40, 0)],
    ['2ème opération','Reprise', new Date(0, 0, 0, 9, 40, 0), new Date(0, 0, 0, 9, 56, 0)]
]
  const options={
    timeline: {
      singleColor: '#8d8',
      boublecolor: ' #808080'
    }
  }; 

    return (
        <div>
            <Chart chartType="Timeline" data={data} options={options} width="100%" height="100%" />;
        </div>
    )

    }
export default Timeline2