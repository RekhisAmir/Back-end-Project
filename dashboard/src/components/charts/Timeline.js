import React, {useState, useEffect} from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'
import './timeline.css'

function Timeline() {

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

    const columns = [
        { type: "string", id: "President" },
        { type: "datetime", id: "Start" },
        { type: "datetime", id: "End" },
      ];
      
    //   const rows = [
    //     ["Washington", new Date(2021, 11, 30, 6, 30), new Date(2021, 11, 30, 8, 30)],
    //     ["Si Adam", new Date(2021, 11, 30, 8, 45), new Date(2021, 11, 30, 11, 15)],
    //     ["Jefferson", new Date(2021, 11, 30, 11, 30), new Date(2021, 11, 30, 14, 45)],
    //     ["Si Amir", new Date(2021, 11, 30, 15, 1), new Date(2021, 11, 30, 16, 45)]
    //   ];
      let rows = []

      for (let i=0; i<info.length; i++){
          let ts=info[i]?.TS;let te=info[i]?.TE;let d=info[i]?.date
          let y = Number(d.substr(0,4)); let mon=Number(d.substr(5,2));let day=Number(d.substr(8,2))
          let hs = Number(ts.substr(0,2));let ms=Number(ts.substr(3,2));
          let he = Number(te.substr(0,2));let me = Number(te.substr(3,2))
          rows.push([info[i]?.Operation_name,new Date(y,mon,day,hs,ms),new Date(y,mon,day,he,me)])
        }
      
          console.log(rows)
      const data = [columns, ...rows];

    return (
        <div>
            <Chart chartType="Timeline" data={data} width="100%" height="400px" />;
        </div>
    )
}

export default Timeline
