import './App.css';
import Timer from './Counter';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <div className="App">
   

      <div class="card text-center">
        <div class="card-header">
        Creado con useEffect y useState
        </div>
        <div class="card-body">
          <h5 class="card-title">Simple Counter</h5>
          <p class="card-text">  <Timer maxRange={0} /> </p>
          <a href="#" class="btn btn-primary">Tic Tac</a>
        </div>

        <div class="card-footer text-muted">
         Cada segundo cuenta
        </div>
      </div>
    </div>
  );
}

export default App;
