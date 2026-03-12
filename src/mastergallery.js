// 



import React from 'react';
import Gallary from './Gallary.js';

var Gall_img=[
 {src:'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500',name:'Tata Nexon'},
 {src:'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500',name:'Mahindra Thar'},
 {src:'https://images.unsplash.com/photo-1493238792000-8113da705763?w=500',name:'Kia Sonet'},
 {src:'https://t4.ftcdn.net/jpg/03/21/22/43/360_F_321224333_47wgLRkL9I8cpepsr5JcbjzNCbzC3pox.jpg',name:'Maruti Suzuki Dzire'},
 {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_JQ5K0V5GU3pBGnCvQGuOtBQ3krROjKoVg&s',name:'Maruti Suzuki Dzire'},
 {src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-1LjC1gldEUqbq9hMxjKGHov7iEo2asdSA&s',name:'Maruti Suzuki Dzire'},
 {src:'https://i.insider.com/56d47f6cdd089554178b464a?width=1200&format=jpeg',name:'Maruti Suzuki Dzire'},
 {src:'https://www.shutterstock.com/image-photo/premium-automotive-tire-advertisement-luxury-600w-2633514803.jpg',name:'Maruti Suzuki Dzire'},
 {src:'https://t4.ftcdn.net/jpg/03/21/22/43/360_F_321224333_47wgLRkL9I8cpepsr5JcbjzNCbzC3pox.jpg',name:'Maruti Suzuki Dzire'},
]

class Masterapp extends React.Component{
 render(){
  return(
   <>
    <div className="container mt-5">

     <h2 className="text-center mb-4">Driving School Gallery</h2>

     <div className="row mt-3">

      {Gall_img.map((val)=>{
       return(
        <div className='col-lg-4'>
         <Gallary 
         src={val.src}
         
         
         />
         <h1>{val.name}</h1>

        </div>
       )
      })}

     </div>

    </div>
   </>
  )
 }
}

export default Masterapp;