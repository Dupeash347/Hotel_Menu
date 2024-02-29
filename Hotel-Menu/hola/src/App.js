import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

import List from './Comps/List/List';

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState('');
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

  const handleSubmit=(e)=>{
    if(!name){
      setAlert({show:true, msg:'Value required', type:'danger'})
    }
    e.preventDefault();
    const newItem = {id:new Date().getTime().toString(), title:name}
    console.log(typeof(newItem.id))
    setList([...list, newItem])
    setName('')
    
  }
  
  return (
    <div>
      <h1 style={{color:'white'}}>Todo App</h1>
      <section className="cen">
        <div className="inps">
          <form onSubmit={handleSubmit}>
          <input type="text"  
            onChange={(e)=>setName(e.target.value)}
            value={name}
          placeholder='eg eggs' />
          <button type='submit' className='s-btn'  >Add</button>
          </form>
        
        </div>
       
          {list.length>0 && (
            <List items={list} ></List>
          )}
          
        
      </section>
    </div>
  );
}

export default App;
