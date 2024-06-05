import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import {Resturant, Address} from './model/resturant'
import BestMenu from "./BestMenu";


let data: Resturant = {
  name: '정금자 식당',
  category: 'western',
  address:{
    city:'Paju',
    detail: 'somewhere',
    zipCode:109301,
  },
  menu:[{name:"rose pasta", price:2000, category:"PASTA"}, {name:"garlic steak", price: 3000, category:"STEAK"}]
}

const  App:React.FC = () => {
  const [myResturant, setMyResturant] = useState< Resturant >(data)
  const changeAddress = (address:Address) => {
       setMyResturant({...myResturant, address:address})
  }

  const showBestMenuName = (name:string)  =>  {
    return name

    
  }
    return (
    <div className="App">
      <Store info={myResturant} changeAddress={changeAddress} />
      <BestMenu name="불고기피자" category="피자" showBestMenuName={showBestMenuName} />

    </div>
  );
}

export default App;
