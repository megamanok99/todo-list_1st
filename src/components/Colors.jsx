import React from 'react';
function Colors(props){

 return(
    <ul>
    {props.colors.map((color) => (
       
      <li className={`todo-color ${color}  ${color.active===color && 'active'}`} key={color} data-color={color} 
      onClick={(e)=>{
        console.log(color);
        props.setColor(e.target.dataset.color);
        e.target.classList.toggle('active');
        }}
     
      ></li>
    ))}
  </ul>
 )
}
export default Colors;