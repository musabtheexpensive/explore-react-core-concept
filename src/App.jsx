import './App.css'
import Counter from './counter';
import counter from './counter';
import Users from './users';
import Friends from './Friends';

function App() {

  function handleClick(){
    alert("button clicked");
  }

  // arrow function
  const handleClick2=()=>{
    alert("again another button clicked");
  }

  // addToFive Function
  const addToFive=(num)=>{
    alert(num+5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Users></Users>
      <Friends></Friends>
      {/* normal html event handler */}
      {/*  <button onclick="handleClick()">Click me</button> */}
     <Counter></Counter>
     {/* jsx html event handler  */}
     <button onClick={handleClick}>Click me</button>
     <button onClick={handleClick2}>Clicked me</button>
     <button onClick={()=>{alert("Third Clicked")}}>Third Button</button>
   {/* vejailla button  */}
   <button onClick={()=>addToFive(3)}>Four Button</button>
   </>
  )
}

export default App
