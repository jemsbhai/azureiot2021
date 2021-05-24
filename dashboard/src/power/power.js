import React, { useState } from 'react';
import '../app.css'
import { FaChevronCircleRight } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';
import { VscTriangleUp } from 'react-icons/vsc';
import { BiTimeFive } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import Chart from '../assets/chart.png';
import Switch from "react-switch";
import { HexColorPicker } from "react-colorful";
import {XYPlot, LineSeries, AreaSeries} from 'react-vis';



export default function Power() {
  const location = "Microsoft Headquarters, Richmond"
  const peopleCount = "85"
  const [fg, setFg] = useState(false);
  const [ show, setShow ] = useState(false);
  const [color, setColor] = useState("#aabbcc");
  const [battery, setBattery] = useState(false);
  const handleChange = () => {
      setBattery(!battery);
  }
  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];
  return (
    <div className="App">
     <div>
       <div style={{float:'left', borderRadius:20, backgroundColor:"#222222"}} className="location">
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:25, textAlign:'right'}}>Location</div>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#98EDFF', fontSize:20, textAlign:'right'}}>{location}</div>
       </div>
       <div style={{float:'right'}}>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:50, textAlign:'right'}}>Power Controls </div>
       </div>
     </div>
     <div style={{position:'absolute', top:'20%'}}>
       <div>
       <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:40, textAlign:'right'}}>Solar Panels </div>
         <div style={{position:'absolute', top:50}}>
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#301d40', padding:'7.5%', marginTop:'5%', width:275, height:200}} >
           <div style={{fontFamily:'Lato', color:"#B75CFF", fontWeight:'bold', fontSize:50}}>Panel-S101</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Switch  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Status  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Color  </div>
           <BsCircleFill style={{marginTop:'0.5%', fontSize:30, color:color}} onClick={()=>setShow(!show)}/>
           </div>
           {!show && <HexColorPicker color={color} onChange={setColor} />}
         </div>
      
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#301d40', padding:'7.5%', marginTop:'5%', width:275, height:200,}} >
           <div style={{fontFamily:'Lato', color:"#B75CFF", fontWeight:'bold', fontSize:50}}>Panel-S102</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Switch  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Status  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Color  </div>
           <BsCircleFill style={{marginTop:'0.5%', fontSize:30, color:color}} onClick={()=>setShow(!show)}/>
           </div>
           {!show && <HexColorPicker color={color} onChange={setColor} />}
         </div>
         </div>
        
         <div style={{position:'absolute', top:0, left:340}}>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:40, textAlign:'left'}}>Batteries </div>
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#301d40', padding:'7.5%', marginTop:'5%', width:300, height:280}} >
           <div style={{fontFamily:'Lato', color:"#B75CFF", fontWeight:'bold', fontSize:50}}>Battery A</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Switch  </div>
           <Switch onChange={handleChange} checked={battery} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>{battery?"Active":"Inactive"}  </div>
           
           </div>
           <XYPlot height={175} width={300} color="#6c458c" fill="#6c458c">
          <AreaSeries data={data} />
        </XYPlot>
         </div>
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#301d40', padding:'7.5%', marginTop:'5%', width:300, height:275}} >
           <div style={{fontFamily:'Lato', color:"#B75CFF", fontWeight:'bold', fontSize:50}}>Battery B</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Switch  </div>
           
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Status  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <XYPlot height={175} width={300} color="#6c458c" fill="#6c458c">
          <AreaSeries data={data} />
        </XYPlot>
         </div>
                  
         </div>
         
         <div style={{position:'absolute', top:10, left:1030}}>
             {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#301d40', padding:'7.5%', marginTop:'5%', width:600, height:150}} >
           <div style={{fontFamily:'Lato', color:"#B75CFF", fontWeight:'bold', fontSize:50}}>Master Switch</div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Switch  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Emergency power shut down. Admin verifcation required.    </div>
         </div>

         {/*Power*/}
         <div style={{borderRadius:20, backgroundColor:'#301d40', padding:'7.5%', marginTop:'5%', width:600, height:310}} className="power">
           <div style={{fontFamily:'Lato', color:"#B75CFF", fontWeight:'bold', fontSize:50}}>Power</div>
           <XYPlot height={250} width={600} color="#6c458c" fill="#6c458c">
          <AreaSeries data={data} />
        </XYPlot>
        <div style={{fontFamily:'Lato', color:"#B75CFF",  fontSize:15}}>This graph shows the power usage by the lights over time during the day. You can monitor and check for each light separately as well.   </div>
         </div>
         

         
      

         </div>







       </div>
       
       
     </div>
    
    </div>
  );
}

