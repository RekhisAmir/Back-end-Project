// import React, {useState, useEffect} from 'react'
// import { Bar } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns'
// import 'date-fns'
// import './barchart.css'
// import axios from 'axios'




// const Barchart = () => {
//   const [info, setInfo] = useState([]);

//   useEffect(() => {
    
//     const fetchData= async()=>{
//          try {

//              const res = await axios.get('http://localhost:5000/operations');
             
//                  console.log(res);
//                  setInfo(res.data);
              
//             }
//         catch(err) { console.log(err) }
//     }
//     fetchData();
// }, []); 



// let tab1=[]
// let tab2=[]
// for (const i in info){
//    tab1=[]
//    tab1.push(info[i].TS,info[i].TE)
//    tab2.push(tab1)
//   console.log(tab1)
// }
// console.log(tab2)
  

// let tab3=[]
//   for (const dataobj of info) {
//     tab3.push(dataobj.OP)
//   }

// const data = {
//   labels:tab3,
//   datasets: [
//     {
//       label: 'Gantt Chart',
//       data: [{x:'2021-11-30',y:10}],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255, 99, 132, 1)'
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// const options = {
//   indexAxis: 'y',
//   // Elements options apply to all of the options unless overridden in a dataset
//   // In this case, we are setting the border of each horizontal bar to be 2px wide
//   scales: {
//         y: {crossAlign:'far'},
//         x: {type: 'time',time:{unit:'day'}}
// },
  
//   elements: {
//     bar: {
//       borderWidth: 2,
//     },
//   },
//   responsive: true,
//   plugins: {
//     legend: {
//       position: 'right',
//     },
//     title: {
//       display: true,
//       text: 'Operations Duration Chart',
//     },
//   },
// };



//     return (
//       <>
//       <div className='header'>
//         <h1 className='title'>Operations Gantt Chart</h1>
//         <div className='links'>
//                links
//         </div>
//       </div>
//       <Bar data={data} options={options} />
//     </>
//     )
// }

// export default Barchart
