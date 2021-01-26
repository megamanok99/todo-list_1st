import React,{useEffect} from 'react';
import TodoItem from './components/TodoItem';
import InputTask from './components/InputTask';
import Colors from './components/Colors';

const colors = ['grey', 'red', 'blue', 'orange', 'green'];

function App() {
  const [color,setColor]=React.useState('grey');
  const [value,setValue]=React.useState([]);
  const [tasks, setTasks] = React.useState([]);
  const [active, setActive] = React.useState('');

  
function addTask(text){
  let newItem={
    id:getLastTaskId()+1,
    text:text,
    color:color,
    completed:false,
  };
  setTasks([...tasks,newItem])
  
  localStorage.setItem("taski", JSON.stringify([...tasks,newItem]));
  console.log(localStorage)
}
function getLastTaskId() {
  return tasks.length === 0 ? tasks.length : tasks[tasks.length - 1].id;
}
  function getTask(e){
    if(e.key==='Enter' && e.target.value!==''){
      
      addTask(e.target.value)
      e.target.value='';
    }
    
  }
  function completedTask(id){
    setTasks(
      tasks.filter((obj)=>{
        if(obj.id===id){
          console.log('задача выполнена');
           obj.completed=!obj.completed;
           
        }
        return obj;
      })
    )
  }
  
  function editTask(id){
    let text=prompt();
    if(text!==null){
    setTasks(
    tasks.filter((obj)=>{
     
      
      if(obj.id===id && text!==''){
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
        tasks.filter((obj) => {
          return id !== obj.id+1;
        }));
    } 
  }
  

  useEffect(() => {
    const localData = localStorage.getItem("taski");
    setTasks(JSON.parse(localData) ?? []);
  },[]);
  useEffect(() => {
    localStorage.setItem("taski", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="App">
      <div className="todo">
        <h2>Список задач</h2>
        
          <TodoItem  tasks={tasks} completedTask={completedTask} removeTask={removeTask} editTask={editTask}  />
      
          <div className="todo-input">
        <InputTask   getTask={getTask}/>
         <Colors colors={colors} setColor={setColor} setActive={setActive} active={active} />
        </div>
      </div>
    </div>
  );
}

export default App;
