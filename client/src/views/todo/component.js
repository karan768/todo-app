import React, { Component } from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import '../../App.css';


const customStyles = {
content : {
top                   : '50%',
left                  : '50%',
right                 : 'auto',
bottom                : 'auto',
marginRight           : '-50%',
transform             : 'translate(-50%, -50%)'
}
};

Modal.setAppElement('body');

class Todo extends Component{
	constructor(props){
		super(props)
		console.log("main props that we want",this.props)
		this.state ={
			item:"",
			todoarray:[],
			modalIsOpen: false,
			modal_item:"",
			id:"",
			item_data:""
		}
	}

	componentWillMount = async () => {
        const value = await this.props.getTodos()
        console.log(value,"vlaue")
        
        this.setState({
			todoarray:value.payload
			})


        
    }
	onChangeHandler(event){
			var input_value = event.target.value;
			this.setState({
			item:input_value
			})
}
	edit(event){
			var input_value = event.target.value;
			this.setState({
			modal_item:input_value
			})
}
submit = async (event) => {
	var data = this.state.modal_item;
	console.log(data);
	var _id = this.state.id;
	const obj = {	
          ID: _id,
          DATA:data
            }
             const {value} = await this.props.updateTodos(obj)
             	this.setState({
          modalIsOpen: false
		});
                this.componentWillMount()

			   if (value) {
                   console.log('successfully')
                    }
                }
    add_data = async () => {
			var input_value = this.state.item;
            var demo_array = this.state.todoarray;
			demo_array.push(input_value);
			  const obj = {
                 name: input_value
                 }
			   const {value} = await this.props.addTodos(obj)
                if (value) {
                   console.log('successfully')
                    }
                    this.state.item="";
                    this.componentWillMount()
			 }
    delete_row = async (event) => {
			var id = event; 
			const obj = {  
                 ID: id
                 }
			   const {value} = await this.props.deleteTodos(obj)
			   if (value) {
                   console.log('successfully')
                    }
                    this.componentWillMount()
			 }
    openModal(event) {
    	    this.setState({modalIsOpen: true});
    	     var i = event.target.id;
    	    console.log(i)
    	    var title = this.state.todoarray[i].name;
    	    var _id = this.state.todoarray[i]._id;
    	     console.log(title)
    	     console.log(_id);
    	     this.setState({
		     modal_item:title,
		     id:_id
		     })
			}

    closeModal() {
			this.setState({modalIsOpen: false});
			}

    render(){
			var item_data = this.state.todoarray.map((e,i)=>
			<li key={i}>{e.name}<button className="delbtn_cls" onClick={this.delete_row.bind(this,e._id)} id={i}>Delete</button>
			<button type="button" onClick={this.openModal.bind(this)} id={i} className="delbtn_cls" data-toggle="modal" data-target="#myModal">Edit
			</button></li>)

     return(
     	<div>
     	<Modal
			isOpen={this.state.modalIsOpen}
			onAfterOpen={this.afterOpenModal}
			onRequestClose={this.closeModal}
			style={customStyles}
			contentLabel="Example Modal"
			>
			<h2 ref={subtitle => this.subtitle = subtitle}>Title</h2>
			<input type="text"  id="title_id" onChange={this.edit.bind(this)} value={this.state.modal_item}  />
			<button type="submit" onClick={this.submit.bind(this)}>Submit</button>
			<button onClick={this.closeModal.bind(this)}>close</button>
			</Modal>
			<div className="header" >My first Todo app !</div>
			<div className="footer" >
			<div className="label_div">
			<label className="label_class">Enter your details</label><br/>
			</div>
			<input type="text" className="input_class" value={this.state.item} onChange={this.onChangeHandler.bind(this)} placeholder="Enter here..." />
			<button id="btn_class" onClick={this.add_data.bind(this)}>Add new</button>
			</div>
			<div className="body" >
			<ol className="ul_class">
			{item_data}
			</ol>
			</div>
			</div>
			)
 }
}

export default Todo;



