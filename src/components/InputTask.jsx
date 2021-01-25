function InputTask(props){
   
    return(
  
    <input type="text" placeholder="Текст задачи..." onKeyUp={props.getTask} />

    )
}
export default InputTask;