import { FETCH_ALL, CREATE, UPDATE, DELETE} from '../constants/actionTypes.js'
import * as api from '../api'

// Action Creators

export const getPosts = () => async (dispatch) => {

    try {
        const { data } = await api.fetchPosts()

        console.log(dispatch);
        console.log(data);

        dispatch({ type: FETCH_ALL, payload: data })

        console.log("GETTING POSTS");
    } catch (error) {
        console.log(error.message);
    }

}


export const createPost = (post) => async (dispatch) => {
    try {
        console.log(post);
        const { data } = await api.createPost(post)

        console.log(data);

        dispatch({ type: CREATE, payload: data })

        console.log("CREATED POSTS");
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id)

        dispatch({type: DELETE, payload: id})
    } catch (error) {
        console.log(error.message);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id)

        dispatch({ type: UPDATE, payload: data })
    } catch (error) {
        console.log(error.message);
    }
}