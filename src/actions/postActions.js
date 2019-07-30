import {FETCH_POSTS, NEW_POST,EDIT_POST} from './types';

export const fetchPosts =() => dispatch=> {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=> res.json())
        .then(posts => dispatch({
            type:FETCH_POSTS,
            payload : posts,
        })
    );
    
        
}

export const createPost = postData=> dispatch=> {
    fetch('https://jsonplaceholder.typicode.com/posts' , {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData)

        }).then(res=> res.json())
            .then(post => dispatch({
                type:NEW_POST,
                payload: post
            }));

    
}

export const updatePost = (id) => dispatch=>postData=> {
    fetch('https://jsonplaceholder.typicode.com/posts' , {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(postData,id)

        }).then(res=> res.json())
            .then(post => dispatch({
                type:EDIT_POST,
                payload: post
            }));
}

