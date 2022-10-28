import React, { Component } from 'react';
import './Home.css';
import ListItems from './Listitems';
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar';
import NavigationBar  from './NavigationBar';
//library.add(faTrash);
export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.handleInput=this.handleInput.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    // this.setUpdate=this.setUpdate.bind(this);
  }

  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()

      }
    })
  }

  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    }
  }

  deleteItem(key){
    const filteredItems= this.state.items.filter(item => item.key!==key);
    this.setState({
      items:filteredItems
    })

  }

  // setUpdate(text,key){
  //   const items=this.state.items;
  //   items.map(item=>{
  //     if(item.key===key){
  //       item.text=text;
  //     }

  //   })
  //   this.setState({
  //     items:items
  //   })
  // }





  render() {
    return (
      
      <div className="Home">
        <NavigationBar />
        <Sidebar />
        <header>
       <form id='to-do-form' onSubmit={this.addItem}>
       <label htmlFor="location" className='location'>
                    Location :
                </label>
                &nbsp;&nbsp;
                <select name="location" id="location" className="dropdown" placeholder='location' onChange={this.changeGender} value={this.state.location}>
                    
                    <option value="Hyderabad" placeholder='location'>Hyderabad</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Chennai">Chennai</option>
                    
                </select>
                <label htmlFor="profession" className='profession'>
                    Profession :
                </label>
                &nbsp;&nbsp;
                <select name="profession" id="profession" className="dropdown" placeholder='profession' onChange={this.changeGender} value={this.state.gender}>
                    
                    <option value="Carpenter" placeholder='profession'>Carpenter</option>
                    <option value="Electrician">Electrician</option>
                    <option value="other">other</option>
                    
                </select>
         <input type="text" placeholder="Enter Text"
         value={this.state.currentItem.text}
         onChange={this.handleInput}/>
         <button type="submit">Add Post</button>
       </form>
     </header>
     <ListItems items={this.state.items} 
     deleteItem={this.deleteItem}
     ></ListItems>
     
     



      </div>
     
    )
  }
}

export default Home;

