import { useState } from "react";
import './App.css';

function App()
{
  const [name,setname]=useState('')
  const handleChange = (event)=>{
      const name=event.target.name;
      const value=event.target.value;
      setname(values =>(({...values ,[name]:value})))
  }
  const handleSUbmit =(event)=>{
    event.preventDefault()
    console.log(name)

  }
  var text=true;
  const maxtext =()=>{
    
    if (text) {
      document.getElementById('text1').style.border='2px solid blue'
      
    }
    else{
      
      document.getElementById('text1').style.border='none'
      document.getElementById('addcontext').style.border='none'
      document.getElementById('sigmadiv').style.border='none'
      
    }
    text=!text
  }
  var text1=true;
  const sigma =()=>{
    if (text1) {
      document.getElementById('sigmadiv').style.border='2px solid blue'
      
    }
    else{
      
      document.getElementById('sigmadiv').style.border='none'
      document.getElementById('text1').style.border='none'
      document.getElementById('addcontext').style.border='none'


      
    }
    text1=!text1

  }
  var text3=true;
   const add =()=>{
      if (text3) {
        document.getElementById('addcontext').style.border='2px solid blue'
        
      }
      else{
        document.getElementById('addcontext').style.border='none'
        document.getElementById('text1').style.border='none'
      document.getElementById('addcontext').style.border='none'
      }
      text3=!text3
   }
  return (
       <div className="mainContainer1">
      <div className="mainContainer">
         <div id="text1" onClick={maxtext}>
          <h4 id="magnabox" onClick={maxtext}>Magnabox Private limited</h4>
         </div>
         <div id="sigmadiv" onClick={sigma}>
              <h3 id="sigmatext" onClick={sigma}>Sigma</h3>
         </div>
         <div id="addcontext" onClick={add}>
            <h4 id="addtext" >Add new lead form</h4>
         </div>
         <button id="cancelbut">cancel</button>
         <form onSubmit={handleSUbmit}>
          <label className="inputbut1">Lead name<sup className="star">*</sup> <br/> <input type="text"
                 name="username"
                 value={name.username ||''}
                 onChange={handleChange}
                 placeholder="enter lead name"
                 className="inputboxs"
                 
          /></label><br/>
          <label className="inputbut2">Email ID<sup className="star">*</sup> <br/> <input type="email"
                 name="email"
                 value={name.email ||''}
                 onChange={handleChange}
                 className="inputboxs"
                 placeholder="Example :anyemail@gmail.com"
                 
                
          /></label><br/>
          <label className="inputbut3">Phone number<sup className="star">*</sup> <br/> <input type="tel"
                 name="number"
                 value={name.number ||''}
                 onChange={handleChange}
                 placeholder="+91 8341866272"
                 className="inputboxs"
          /></label><br/>
          <label className="inputbut4">Address <br/> <input type="text"
                 name="address"
                 value={name.address ||''}
                 onChange={handleChange}
                 placeholder="Hyderabad,Telangana"
                 className="inputboxs"
          /></label><br/>
          <label className="inputbut5">Sale value <br/> <input type="number"
                 name="money"
                 value={name.money ||''}
                 onChange={handleChange}
                 placeholder="50,000"
                 className="inputboxs"
          /></label><br/>
          <label className="inputbut6">Date <br/> <input type="date"
                 name="date"
                 value={name.date ||''}
                 onChange={handleChange}
                 placeholder="05-11-2023"
                 className="inputboxs"
          /></label><br/>
          <label className="inputbut7">Time <br/> <input type="time"
                 name="time"
                 value={name.time ||''}
                 onChange={handleChange}
                 placeholder="20:23 pm"
                 className="inputboxs"
          /></label><br/>
          <p id="optiontext">Options</p>
          <select className="inputbut8" id="inputboxs1" name="option"
                 value={name.option ||''}
                 onChange={handleChange}>
               <option>select option</option>
               <option>Hyderabad</option>
               <option>Banglore</option>
               <option>Chennai</option>
               <option>Pune</option>
               <option>Delhi</option>
          </select>
          <label className="inputbut9"><p id="product">Products</p>  <br/> <input type="text"
                 name="product"
                 value={name.product ||''}
                 onChange={handleChange}
                 className="inputboxs"
                 id="inputboxs9"
          /></label><br/>
          <label className="inputbut10">Note <br/> <input type="text"
                 name="note"
                 value={name.note ||''}
                 onChange={handleChange}
                 placeholder="enter note"
                 className="inputboxs"
                 id="inputboxs"
          /></label><br/>
                 
                 <button id="buttonAdd">Add lead</button>
          </form>
      </div>
      </div>
  )
  
}

export default App;