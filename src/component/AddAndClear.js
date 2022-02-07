import react, { useState } from 'react'
import './style/AddAndClear.css';

function AddAndClear ({ans, setAns, remove, setRemove}){
  
  // let [visible, setVisible] = useState(true);
  
  function add(){
    let data = "hey I am vakil raj here . I am PUBG player and i am conquere in asia squared rank is #245 "
    setAns(data)
  }

  function clear(){
    setAns("")
  }

  function delet(){
       if( remove == true){
        setRemove(false)
       } else {
         setRemove(true)
       }
  }

    return (
        <div className='header-main-cont'>
          <div onClick={add} className='add-btn'><button id="add">Add</button></div>
          <div onClick={delet} className='add-delete'><button id="delete">delete</button></div>
          <div onClick={clear} className='add-clear'><button id="clear">Clear</button></div>
        </div>
    )
}

export default AddAndClear;