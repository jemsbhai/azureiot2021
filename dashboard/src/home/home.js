import React from 'react';
import '../app.css'
import { FaChevronCircleRight } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';
import { VscTriangleUp } from 'react-icons/vsc';
import { BiTimeFive } from 'react-icons/bi';
import Chart from '../assets/chart.png';
import { Link } from 'react-router-dom';


export default function Home() {
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
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:50, textAlign:'right'}}>Office atmosphere </div>
       </div>
     </div>
     <div style={{position:'absolute', top:'20%'}}>
       <div style={{color:"#FFF", fontFamily:'Lato', fontWeight:'bold', fontSize:20}}>On this screen, you can control thermostatic values such as humidity, air pressure, temperature and more. </div>
       <div>
         <div style={{position:'absolute', top:30}}>
         {/*People*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="people">
           <div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold', fontSize:90}}>{peopleCount}</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>People on this floor</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5 in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'5%', marginTop:'5%', width:330, borderStyle:'double', borderWidth:2, borderColor:"#444"}}>
            <Link to="/door"><div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold',  fontSize:30, textAlign:'center', marginBottom:'5%'}}>See Doorways <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right', fontSize:20, marginTop:'5%'}}/>  </div></Link>        
         </div>
         {/*PM 2.5*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="temp">
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', fontSize:90}}>{peopleCount}</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>PM 2.5 Air Quality</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         </div>
         <div style={{position:'absolute', top:30, left:385}}>
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
                  
         </div>



         <div style={{position:'absolute', top:50, left:700}}>
             {/*Temp*/}
             <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="temp">
           <div style={{fontFamily:'Lato', color:"#FFFFFF", fontWeight:'bold', fontSize:90}}>{peopleCount}°F</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>Average Floor Temperature</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
                  {/*PM 5*/}
         <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="temp">
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', fontSize:90}}>{peopleCount}</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>PM 5 Air Quality</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'red', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'gold'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         </div>
         <div style={{position:'absolute', top:50, left:1075}}>
             {/*VoC Levels*/}
             <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:125}} className="temp">
             <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>VoC Levels</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'gold', fontWeight:'bold', fontSize:90}}>{peopleCount}</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'gold', fontWeight:'bold', marginTop:'0%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
                  {/*Temp*/}
                  <div style={{borderRadius:20, backgroundColor:'#222222', padding:'15%', marginTop:'5%', width:275, height:175}} className="temp">
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'gold', fontWeight:'bold', fontSize:90}}>{peopleCount}°F</div>
           <div style={{fontFamily:'Lato', color:"#DDDDDD", fontWeight:'bold'}}>CO2 Levels</div>
           <div style={{fontFamily:'Lato', color:parseInt(peopleCount)>85?'green':'gold', fontWeight:'bold', marginTop:'5%'}}>{parseInt(peopleCount)>85? <VscTriangleDown style={{color:'green'}}/>:<VscTriangleUp style={{color:'red'}}/>}{parseInt(peopleCount)>85?'-':'+'}5°F in the last hour</div>
           <FaChevronCircleRight style={{color:"#DDD", textAlign:'right', float:'right'}}/>
         </div>
         </div>







       </div>
     </div>
    
    </div>
  );
}

