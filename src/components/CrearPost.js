import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';
import Swal from "sweetalert2";


class CrearPost extends Component {
    constructor(props){
        super(props)
        this.state={
            titulo:"",
            contenido:"",
           
        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit= this.handleSubmit.bind(this);
        
    }

    handleChange(event){
        const {name,value}= event.target
        this.setState({
            [name] : value,
        });
    }

    handleSubmit(event){
        event.preventDefault();
        const post= {
            titulo: this.state.titulo,
            contenido: this.state.contenido,
        }
        if(post.titulo==="" &&  post.contenido===""){
            Swal.fire({
                title:'Error',
                type:'error',
                text:'Completa todos los campos',
            })
        }else {
            this.props.createPost(post);
            
            this.setState({
                titulo:"",
                contenido:"",
                
            });

            Swal.fire({  
                title: 'Listo!',  
                type: 'success',  
                text: 'Has creado un post!.',
                
            });  
        }   
        
    }

    

    render() {
        return (
        <div className="container">
            <hr/>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label >Titulo del Post</label>
                        <input type="text" 
                        className="form-control" 
                        required
                        placeholder="Ingrese titulo del post"
                        name="titulo"
                        value={this.state.titulo}
                        onChange={this.handleChange}/>
                        
                    </div>
                    <div className="form-group">
                        <label>Contenido del Post</label>
                        <textarea
                        required  
                        className="form-control" 
                        placeholder="Contenido del Post"
                        name="contenido"
                        value={this.state.contenido}
                        onChange={this.handleChange}/>
                    </div>
                    
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Subir Post</button>
                    
                </form>
                
        </div>
        )
    }
}

CrearPost.propTypes={
    createPost: PropTypes.func.isRequired
}

export default connect(null, {createPost})(CrearPost)
