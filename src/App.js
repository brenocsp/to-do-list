import React, { useState } from "react";
import Lista from "./Lista";
import Forms from "./Forms";
import Item from "./Item";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  function onAddItem(text) {
    let novoItem = new Item(text);
    setItems([...items, novoItem]);
  }

  function onMarked(item) {
    let itensAtualizados = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });
    setItems(itensAtualizados);
  }

  function onDeletedItem(item){
    let itensFiltrados = items.filter(it=>it.id !== item.id);
    setItems(itensFiltrados);
  }

  return (
    <div> 
      <h1 className="tittle">To-Do List</h1>
      <div className="container">
        <Lista onDeletedItem={onDeletedItem} onMarked={onMarked} items={items}></Lista>
        <Forms onAddItem={onAddItem}></Forms>
      </div>
    </div>
  );

  // return (
  //   <div className="App">
  //     <div className="Title">
  //       <h1>TO-DO LIST</h1>
  //     </div>
  //     <div className="List">
  //       <ul>
  //         <li>
  //           <input type="checkbox" class="regular-checkbox" /> Fazer um mockup
  //         </li>
  //         <li>
  //           <input type="checkbox" /> Criar uma página estática
  //         </li>
  //         <li>
  //           <input type="checkbox" /> Aplicar o State
  //         </li>
  //       </ul>
  //       <button>add item</button>
  //     </div>
  //   </div>
  // );
}

export default App;
