import axios from 'axios';
import React, { Fragment ,useEffect,useState} from 'react';
const Consumir = () => {

    const [categorias,setCategorias]=useState([])
  
    
    

    useEffect(() => {
       consumircategorias()
      
        
    
        
        
      },[]);

    const consumircategorias=()=>{
        axios.get('http://localhost:8080/api/Producto/all')
      .then(res => {
          setCategorias(res.data);  
            
      })
    }

    

 

    return (
        <Fragment >
        <div className="container text-center mt-5" >
             <h2 className="mt-5 mb-5">Listado Productos</h2>            
        
            <div> 
            <form id="form1" >
           
                <table id="tabla"  className="table table-stripped">
                    <thead>
                        <tr>
                            <td >Categoria</td>
                            <td>Descripción</td>
                            <td>Precio</td>
                            <td>Disponibilidad</td>
                            <td>Ruta</td>
                               
                        </tr>  
                    </thead>  
                    <tbody>
                    {
                       

                        categorias.map(item=>
                            
                            <tr key={item.id}>

                                <td>{item.categoria}</td>
                                <td>{item.descripcion}</td>
                                <td>{item.precio}</td>
                                <td>{item.disponibilidad}</td>
                                <td className="celda"><img src={item.ruta} className="imagenropa"
                                    alt={item.descripcion}/></td>                                                             
                            </tr>                         
                          
                            
                        )
                       
                       

                    }
                    </tbody> 
                 </table>
                
            </form>
            </div>
           </div>
        </Fragment>
    );
}

export default Consumir;