import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  const nayoks = ['Jasim', 'Anwar', 'Jafar', 'Alomgir', 'Salman','Shuvo'];
  const products = [
    {name: 'Photoshop', price: '$90.99'},
    {name: 'Illustrator', price: '$60.99'},
    {name: 'Pdf Reader', price: '$6.99'},
    {name: 'EliteBook', price: '$269.99'}
  ];
  const productNames = products.map(product => product.name);
  console.log(productNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a react person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          <h3>Product Names</h3>
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product = {pd}></Product>)
        }
        


        <Person name="Mahdi" job="football"></Person>
        <Person name="Tapu" job="dorshok"></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Counter(props) {
  const [count, setCount] = useState(0);
  // const handleIncrease = () => setCount(count + 1);
    
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
      <button onMouseMove={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])
  return(
    <div>
      <h3>Dynamic users: {users.length}</h3>
      <ol>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ol>
    </div>
    
    
  )
}

function Product(props){
  const productStyle = {
    border: "1px solid gray",
    borderRadius: "5px",
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy now</button>
    </div>
  )
}

function Person(props){
  return (
    <div style={{border: '2px solid goldenrod', width: '400px', margin: '10px'}}>
      <h3>My name: {props.name}</h3>
      <p>My profession: {props.job} </p>
    </div>
  )
}

export default App;