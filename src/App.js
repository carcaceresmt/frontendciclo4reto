
import './App.css';
import Consumirnombre from './components/consumirnombre';
import Consumir from './components/consumir';
import Inicio from './components/inicio';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <div>
    <Router>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">

    <a class="navbar-brand" href="#">Venta Ropa XYZ</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to="/" class="nav-link" activeClassName='active'>Inicio</Link>
      </li>
      <li class="nav-item">
        <Link to="/producto" class="nav-link" activeClassName='active'>Producto</Link>
      </li>
      <li class="nav-item">
        <Link to="/categorias" class="nav-link" activeClassName='active'>Categoria</Link>
      </li>
      <li class="nav-item">
    
    </li>
    </ul>
  </nav>
  
       <Switch>
         <Route path="/" exact>
         <Inicio/>
       </Route>
         <Route path="/producto" exact>
           <Consumir/>
         </Route>
         <Route path="/categorias">
           <Consumirnombre />    
         </Route>         
        
       
       </Switch>
 
   </Router>
   </div>

   <consumir />
        
     </div>
  );
}

export default App;
