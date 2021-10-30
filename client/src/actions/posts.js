import * as api from '../api/index.js'

// Action Creators

export const getPosts = () => async (dispatch) => {
    
    try {
        const { data } = await api.fetchPosts()

        console.log(dispatch);
        console.log(data);

        dispatch({type: "FETCH_ALL", payload: data })

        console.log("GETTING POSTS");
    } catch (error) {
        console.log(error.message);
    }

}


export const createPost = (post) => async (dispatch) => {
    try {
        console.log(post);
        const {data} = await api.createPost(post)

        console.log(data);

        dispatch({type: "CREATE", payload:data})

        console.log("CREATED POSTS");
    } catch (error) {
        console.log(error);
    }
}