















import React from 'react';

function Gallary(props)
{
 return(
  <>
   <img
    src={props.src}
    className="img-fluid gallery-img"
    alt="car5"
   
   />
  </>
 )
}

export default Gallary;