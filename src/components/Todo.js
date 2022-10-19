import React,{useState} from 'react';

import "../App.css";


const Todo = () => {
const [inputData,setInputData] = useState('');

const [items,setItems] = useState([]);
const [completedTask,setCompletedTask] = useState([]);

const addItem = () =>{
    if(!inputData){}else{

    
    setItems([...items,inputData]);
    setInputData('');
    }

}
const moveTocomplete = (index,ele) => { 
    // let incompleteTasks = [];
    // items.filter((ele,id)=>id!=index);
    // setItems([...items]);
    setCompletedTask([...completedTask,ele]);
    let incompleteTasks = items.filter((elem,id) => {return id!==index});
    //console.log([...incompleteTasks]);
    setItems(incompleteTasks);
}
const deleteItem = (index,ele) => { 
    console.log('deeleted item index '+index)
    // let incompleteTasks = [];
    // items.filter((ele,id)=>id!=index);
    // setItems([...items]);
    //setCompletedTask([...completedTask,ele]);
    let remainingTask = completedTask.filter((elem,id) => {return id!==index});
    //console.log([...incompleteTasks]);
    setCompletedTask(remainingTask);
}

  return (
    <>
    <div className="main-div setflex">
        <div className="child-div">
        <div class="top-section">
        <div className="mainlist setspace">
                <p>Add items to the list:</p>
                <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder="----  Add items to the list  ----" id="list"/>
            </div>

            <div className="mainbtn setspace">
                <button onClick={addItem}>
                    ADD ITEMS
                </button>
            </div>
            <hr></hr>


        </div>
        
            <div className="main">
                <div className="inclist">
                    <span>Incomplete Tasks:</span>
                    {
                        
                        items.map((ele,index)=>{
                            return(
                                <div className="task setflex" key={index}> <input type="checkbox" id="task1" name="check" onChange={()=>moveTocomplete(index,ele)}></input><p>{ele}</p></div>
                            )
                            
                        })  
                    }
                    {/* <div className="task setflex"> <input type="checkbox" id="task1" name="check"></input><p>Task to create a Todo List react page</p></div>
                    <div className="task setflex"> <input type="checkbox" id="task1" name="check"></input><p>Task to create a Todo List react page</p></div>
                    <div className="task setflex"> <input type="checkbox" id="task1" name="check"></input><p>Task to create a Todo List react page</p></div>
                    <div className="task setflex"> <input type="checkbox" id="task1" name="check"></input><p>Task to create a Todo List react page</p></div> */}
                </div>
                <div className="cmplist">
                    <span>Completed Tasks:</span> 
                    {
                        
                        completedTask.map((ele,index)=>{
                            return(
                                <div className="task setflex" key={index}><p>{ele}<i className="fa-solid fa-trash" title="delete item if not needed" key={index} onClick={()=>deleteItem(index,ele)}></i></p></div>
                            )
                            
                        })  
                    }
                    {/* <div className="task setflex"> <input type="checkbox" id="task1" name="check"></input><p>Task to create a Todo List react page <i className="fa-solid fa-trash" title="delete item if not needed"></i></p></div> */}
                </div>
            </div>
           
        

        </div>
    </div>
    </>
  )
}

export default Todo;