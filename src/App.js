import './App.css';

function App() {
  return (
    <div className="App">
        <div className='Title'>
            <h1>TO-DO LIST</h1>
        </div>
        <div className='List'>
            <ul>
                <li><input type="checkbox" class="regular-checkbox"/> Fazer um mockup</li>
                <li><input type="checkbox" /> Criar uma página estática</li>
                <li><input type="checkbox" /> Aplicar o State</li>
            </ul>
            <button>
              add item
            </button>
        </div>
    </div>
  );
}

export default App;
