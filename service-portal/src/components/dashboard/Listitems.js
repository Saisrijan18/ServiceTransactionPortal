import React from 'react'
import './Listitem.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ListItems(props){
    const items=props.items;
    const listItems= items.map(item=>
    {
        return <div className="list" key ={item.key}>
             <p>
                 {item.text}
                
                 <span>
                 {/* <FontAwesomeIcon className="Faicons"
                  icon='trash'
                  onClick={()=> props.deleteItem(item.key)}
                  /> */}
                  <button onClick={()=> props.deleteItem(item.key)}>done</button>
             </span>
             
                 
             
             
             </p>
             


        </div>
      
    })

    return (
        <div>{listItems}</div>

    )
   




}
export default ListItems;