import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/postActions';
import {Link} from 'react-router-dom';

const PostsTable = props =>(
    <tr>
        <td>{props.post.id}</td>
        <td>{props.post.title}</td>
        <td>{props.post.body}</td>
        <td>
            <Link to={"/editar/" + props.post.id}>Editar</Link>

        </td>
    </tr>
)

class PostList extends Component {
   
componentDidMount(){
    this.props.fetchPosts();
}

componentWillReceiveProps(nextProps){
    if(nextProps.newPost){
        this.props.posts.unshift(nextProps.newPost);
    }
}

listaDePost(){
    return this.props.posts.map(post=>{
        return <PostsTable key={post.id} post={post} />
    })
}

    render() {
      
        return (
            <div className="container">
                <h1>Posts</h1>
                <hr/>
                <table className="table">
            <thead className="thead-dark text-center">
              <tr>
              <th scope="col">N°</th>
                <th scope="col">Titulo</th>
                <th scope="col">Contenido</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
                {this.listaDePost()}    
            </tbody>
            </table>
            </div>
        )
    }
}

PostList.propTypes= {
    fetchPosts : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps= state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})
export default connect(mapStateToProps, {fetchPosts})(PostList);