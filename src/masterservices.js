// 



import React from 'react';
import Services from './Services.js';

var Ser_vices=[
 {src:'https://cdn-icons-png.flaticon.com/512/743/743131.png',name:'kishor wavare',info:'Improve your driving confidence with advanced training.'},

]

class Masterapps extends React.Component{
 render(){
  return(
   <>
    <div className="container mt-5">

     <h2 className="text-center mb-4">Our Driving Services</h2>

     <div className="row mt-3">

      {Ser_vices.map((val)=>{
       return(
        <div className='col-lg-4'>
         <Services 
         src={val.src}
         name={val.name}
         info={val.info}
         
         
         />
         

        </div>
       )
      })}

     </div>

    </div>
   </>
  )
 }
}

export default Masterapps;