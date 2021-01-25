import React from 'react';
import TodoItem from './components/TodoItem';
import InputTask from './components/InputTask';
import Colors from './components/Colors';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [color,setColor]=React.useState('grey');
  const [value,setValue]=React.useState([]);
  const [tasks, setTasks] = React.useState([
  ]);
  const [active, setActive] = React.useState('');
 
function addTask(text){

  setTasks([...tasks,{
    id:tasks.length+1,
    text:text,
    color:color,
  }])
  
 
}
  function getTask(e){
    if(e.key==='Enter' && e.target.value!==''){
      
      addTask(e.target.value)
      e.target.value='';
    }

  }
  function editTask(id){
    let text=prompt();
    if(text!==null){
    setTasks(
    tasks.filter((obj,index)=>{
     
      
      if(index+1===id && text!==''){
        console.log('переписываем значение текста');
         obj.text=text;
         
      }
      return obj;
    }))
  }
  }
  function removeTask(id){
    if(window.confirm('вы действительно хотите удалить?')){
      setTasks(
        tasks.filter((obj, index) => {
          return id !== index + 1;
        }));
    }
     
  
    
    
  
    
  }
  


  

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        
          <TodoItem  tasks={tasks}  removeTask={removeTask} editTask={editTask}  />
      
          <div className="todo-input">
        <InputTask   getTask={getTask}/>
         <Colors colors={colors} setColor={setColor} setActive={setActive} active={active} />
        </div>
      </div>
    </div>
  );
}

export default App;
