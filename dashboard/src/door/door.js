import React, { useState } from 'react';
import '../app.css'
import { FaChevronCircleRight } from 'react-icons/fa';
import { VscTriangleDown } from 'react-icons/vsc';
import { VscTriangleUp } from 'react-icons/vsc';
import { BiTimeFive } from 'react-icons/bi';
import Chart from '../assets/chart.png';
import Switch from "react-switch";


export default function Door() {
  const location = "Microsoft Headquarters, Richmond"
  const peopleCount = "85"
  const [fg, setFg] = useState(false);
  const handleChange = () => {
      setFg(!fg);
  }
  return (
    <div className="App">
     <div>
       <div style={{float:'left', borderRadius:20, backgroundColor:"#222222"}} className="location">
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:25, textAlign:'right'}}>Location</div>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#98EDFF', fontSize:20, textAlign:'right'}}>{location}</div>
       </div>
       <div style={{float:'right'}}>
         <div style={{fontFamily:'Lato', fontWeight:'bold', color:'#FFF', fontSize:50, textAlign:'right'}}>Doorways and gates </div>
       </div>
     </div>
     <div style={{position:'absolute', top:'20%'}}>
       <div>
         <div style={{position:'absolute', top:30}}>
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Floor Gate</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Closed  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
         </div>
      
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Floor Gate</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Closed  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
         </div>
         </div>
         <div style={{position:'absolute', top:30, left:340}}>
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Floor Gate</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Closed  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
         </div>
          {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Floor Gate</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Closed  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
         </div>
                  
         </div>



         <div style={{position:'absolute', top:30, left:680}}>
             {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Floor Gate</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Closed  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
         </div>
                  {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:275, height:170, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Floor Gate</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{marginTop:'5%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Closed  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
         </div>
         </div>
         <div style={{position:'absolute', top:10, left:1030}}>
             {/*Doors*/}
          <div style={{borderRadius:20, backgroundColor:'#122b12', padding:'7.5%', marginTop:'5%', width:600, height:360, borderWidth:3, borderColor:"#214721", borderStyle:'double'}} className="door">
           <div style={{fontFamily:'Lato', color:"#B3FEB1", fontWeight:'bold', fontSize:50}}>Master Lock</div>
           <div style={{marginTop:'10%'}}>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Locked  </div>
           <Switch onChange={handleChange} checked={fg} />
           </div>
           <div style={{fontFamily:'Lato', fontWeight:'bold', color:"#CECECE", fontSize:20, marginTop:'5%', float:'left', marginTop:'1%', marginRight:'5%'}}>Enter PIN below to activate  </div>
           <input style={{borderRadius:20, padding:'7.5%', marginTop:'5%', width:500, height:20, backgroundColor:"#214721", color:"#FFF", fontFamily:'Lato', fontWeight:'bold', fontSize:40, border:'none'}} placeholder="PIN Code"></input>
         </div>
      

         </div>







       </div>
     </div>
    
    </div>
  );
}

