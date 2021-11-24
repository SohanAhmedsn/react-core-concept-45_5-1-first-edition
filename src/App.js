import { useEffect, useState } from 'react/cjs/react.development';
import './App.css';

function App() {
  return (
    <div className="App">
      <LoadData></LoadData>
      <MyProduct name="Microsoft" price="15000"></MyProduct>
      <MyProduct name="Apple" price="50000"></MyProduct>
      <MyProduct name="Asus" price="30000"></MyProduct>
      <MyProduct name="Aser" price="10000"></MyProduct>
    </div>
  );
}

function LoadData(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h2>This is Load Data section</h2>
      <h3>Total Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <ShowData name={user.name} email={user.email} ></ShowData>)
        }
      </ul>
    </div>
  )
}

function ShowData(props) {
  const showData ={
    backgroundColor: "black",
    color: "white",
    border: "5px solid green",
    borderRadius: "10px",
    margin: '10px'

  }
  
  return (
  <div style={showData}>
      <h3>Name : {props.name} </h3>
      <h3>Email : {props.email} </h3>
  </div>
  )
}

function MyProduct(props){
  const [points, setPoints] = useState(1)
  const MyStyle ={
    backgroundColor: 'yellow',
    border:'2px solid red',
    margin: '15px'
  }

  const handleAddPoints = () =>{
    const myPoints = points * 2;
    setPoints(myPoints);
  }
  return (
    <div style={MyStyle}>
      <h2>Product Name: {props.name}</h2>
      <h2>Product Price:{props.price} </h2>
      <p>My Point: {points}</p>
      <button onClick={handleAddPoints}>Add Point</button>
      <br /><br />
    </div>
  )
}

export default App;
