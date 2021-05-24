import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import '../app.css'
import { FaChevronCircleRight } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';
import { VscTriangleUp } from 'react-icons/vsc';
import { BiTimeFive } from 'react-icons/bi';
import Chart from '../assets/chart.png';


function Dash() {
  const location = "Microsoft Headquarters, Redmond"
  const peopleCount = "85"
  return (
    <div className="App">
     <div>
       <div style={{float:'left', borderRadius:20, backgroundColor:"#222222"}} className="location">
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:25, textAlign:'right'}}>Location</div>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#98EDFF', fontSize:20, textAlign:'right'}}>{location}</div>
       </div>
       <div style={{float:'right'}}>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:25, textAlign:'right'}}>Smart HVAC Dashboard</div>
         <div style={{display:'inline'}}>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:20, textAlign:'right', float:'left'}}>Powered by</div>
 
         <div style={{display:'inline', marginLeft:'2.5%', float:'right', fontFamily:'Poppins', fontWeight:'bold', color:'#B6B9FF', fontSize:25, textAlign:'right'}}>azura</div>
         </div>
       </div>
     </div>
     <div style={{position:'absolute', top:'20%'}}>
       <Link to="/home"><div style={{color:"#FFF", fontFamily:'Lato', fontWeight:'bold', fontSize:20}}>Office atmosphere <FaChevronCircleRight style={{verticalAlign:'center'}}/></div></Link>
       <div>
         <div style={{position:'absolute', top:30}}>
         {/*People*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="people">
           <div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold', fontSize:90}}>{peopleCount}</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>People on this floor</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5 in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         {/*Temp*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="temp">
           <div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold', fontSize:90}}>{peopleCount}°F</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>Average Floor Temperature</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         </div>
         <div style={{position:'absolute', top:30, left:400}}>
         {/*Humidity*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'5%', marginTop:'5%', width:275, height:175}} className="air">
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold', marginTop:'5%', marginLeft:'5%'}}>Humidity</div>
           <div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold', fontSize:80}}>{peopleCount}°F</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         {/*Air Pressure*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'5%', marginTop:'5%', width:275, height:175}} className="air">
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold', marginTop:'5%', marginLeft:'5%'}}>Air Pressure</div>
           <div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold', fontSize:80}}>{peopleCount}°F</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'5%', marginTop:'5%', width:275}}>
            <BiTimeFive style={{color:"#DDD", textAlign:'left', float:'left'}}/><div style={{fontFamily:'VT323', color:"#FFFFFF",  fontSize:70, textAlign:'center'}}>10:23 PM</div>          
         </div>
         </div>



         <div style={{position:'absolute', top:50, left:1050}}>
            {/*Light*/}
         <div style={{borderRadius:20, backgroundColor:'#383808', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#919131", borderStyle:'double'}} className="light">
           <FaChevronCircleRight style={{color:"yellow", textAlign:'right', float:'right', fontSize:30}}/>
           <Link to="/light"><div style={{fontFamily:'Lato', color:"yellow", fontWeight:'bold', fontSize:50}}>Lights</div></Link>
           <div style={{fontFamily:'Lato', color:"#CECECE", fontSize:15, marginTop:'5%'}}>Light controls for power, brightness, colors in specific rooms, and more</div>
         </div>
         {/*Doors*/}
         <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:200, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <FaChevronCircleRight style={{color:"#B3FEB1", textAlign:'right', float:'right', fontSize:30}}/>
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Doors</div>
           <div style={{fontFamily:'Lato', color:"#CECECE", fontSize:15, marginTop:'5%'}}>Check what doors are locked/unlocked or closed/open on your floor</div>
         </div>
         </div>
         <div style={{position:'absolute', top:50, left:1400}}>
            {/*Speaker*/}
         <div style={{borderRadius:20, backgroundColor:'#27464d', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#38646e", borderStyle:'double'}} className="speak">
           <FaChevronCircleRight style={{color:"#B1F0FE", textAlign:'right', float:'right', fontSize:30}}/>
           <div style={{fontFamily:'Lato', color:"#B1F0FE", fontWeight:'bold', fontSize:50}}>Speakers</div>
           <div style={{fontFamily:'Lato', color:"#CECECE", fontSize:15, marginTop:'5%'}}>Audio broadcasting in specific rooms, audio signage for visually impaired, and more.</div>
         </div>
         {/*Power*/}
         <div style={{borderRadius:20, backgroundColor:'#23142e', padding:'7.5%', marginTop:'5%', width:275, height:200, borderWidth:3, borderColor:"#422657", borderStyle:'double'}} className="power">
           <FaChevronCircleRight style={{color:"#DFB6FF", textAlign:'right', float:'right', fontSize:30}}/>
           <Link to="/power"><div style={{fontFamily:'Lato', color:"#DFB6FF", fontWeight:'bold', fontSize:50}}>Power</div></Link>
           <img src={Chart} style={{width:'117%', margin:'-8%', marginBottom:'-10%', marginTop:'10%'}}></img>
         </div>
         </div>







       </div>
     </div>
    
    </div>
  );
}


export default Dash;
