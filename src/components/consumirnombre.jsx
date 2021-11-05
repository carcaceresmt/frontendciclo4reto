import axios from 'axios';
import React, { Fragment ,useEffect,useState} from 'react';
const Consumir = () => {

    const [categorias,setCategorias]=useState([])
  
    
    

    useEffect(() => {
       consumircategoria("0")    
        
    
        
        
      },[]);

   

    const consumircategoria=(categoria)=>{
        let ruta="http://localhost:8080/api/Producto/"+categoria
        if(categoria==="0") {
            ruta="http://localhost:8080/api/Producto/all"
        }
        axios.get(ruta)
      .then(res => {
          setCategorias(res.data);  
            
      })
    }

    

 

    return (
        <Fragment >
        <div className="container text-center mt-5" >
             <h2 className="mt-5 mb-5">Listado Producto Categoria</h2>            
        
            <div> 


            <select className="form-control mt-5 mb-5" onChange={(e)=>{
                const selected=e.target.value;
                consumircategoria(selected)
            }}>
                <option value="0">Seleccione una Opción</option>
                <option value="Categoria 1">Categoria 1</option>
                <option value="Categoria 2">Categoria 2</option>
            </select>
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
                
            
            </div>
           </div>
        </Fragment>
    );
}

export default Consumir;