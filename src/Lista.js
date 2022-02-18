import React from "react";

function Feito(props) {
  if (props.done) {
    return <img alt="Ìcone quadrado preenchido representando: item marcado." src="./assets/unmarked.png"></img>
  
  } return (
      <img alt="Ìcone quadrado vazio representando: item desmarcado." src="./assets/marked.png"></img>
    );
}

// function AbleToDelete(props) {
//   if (props.done) {
//     return(<img alt="Ìcone quadrado preenchido representando: item marcado." src="./assets/IconDeleteItem.png"></img>);
    
//   } else {
//     return (
//       <img alt="Ìcone quadrado preenchido representando: item marcado." src="./assets/IconDeleteItem.png"></img>
//     );
//   }
// }

function Lista(props) {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.key} className={item.done? "done":""}>
          <button onClick={() => { props.onMarked(item); }}>
            <Feito onMarked={item.done}></Feito>
          </button> 
          {item.text}
          {/* <button onClick={() => { props.onDeletedItem(item); }}>
            <AbleToDelete onMarked={item.done}></AbleToDelete>
          </button>  */}
        </li>
      ))}
    </ul>
  );
}

export default Lista;
