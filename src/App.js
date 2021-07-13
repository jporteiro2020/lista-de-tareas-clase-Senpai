import './App.css';
import ListaDeTareas from './components/listaDeTareas';

function App() {
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>
        
        <form action="">
            <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" />
            <select name="prioridad" id="prioridad">
                <option value="" disabled selected>Prioridad</option>
                <option value="prioridad-baja">baja</option>
                <option value="prioridad-media">media</option>
                <option value="prioridad-alta">alta</option>
            </select>
            <button id="agregar">Agregar!</button>
        </form>
        <h3>Tareas</h3>
        <ListaDeTareas />
        <p>Para agregar tareas vamos a tener que hablar de eventos, el DOM y cómo interactuar con él</p>
      </main>
    </div>
  );
}

export default App;
