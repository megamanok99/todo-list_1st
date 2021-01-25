import React from 'react';
function Colors(props){

 return(
    <ul>
    {props.colors.map((color) => (
       
      <li className={`todo-color ${color}  ${color===props.active ? 'active': ''}`} key={color} data-color={color} 
      onClick={(e)=>{
        console.log(color);
        props.setColor(e.target.dataset.color);
        props.setActive(`${color}`)
        }}
     
      ></li>
    ))}
  </ul>
 )
}
export default Colors;