import './App.css';
import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import Coin from './Coin';

function App() {
  const [coins,setCoins]=useState([])
const[searchWord,setSearchWord]=useState("")

const handleSearch=(e)=>{
setSearchWord(e.target.value)
}
  useEffect(()=>{
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0")
    .then((res)=>{
      setCoins(res.data.coins)}
    )},[])

const filteredCoins=coins.filter((coin)=>{
  return coin.name.toLowerCase().includes(searchWord.toLowerCase())
})

  return (
<div className="App">
      <div className="cryptoHeader">
        <input 
        type="text"
        placeholder="enter crypto currency"
        onChange={handleSearch}  />
        </div>
      <div className="cryptoDisplay">
        {filteredCoins.map((coin)=>{
          return(
          <Coin name={coin.name}
                price={coin.price}
                icon={coin.icon}
                symbol={coin.symbol}
                key={coin.id}
              />)
        })}
</div>
</div>
);}
export default App;
