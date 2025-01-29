import { AUTH } from '../constants/actionTypes.js';
import * as api from '../api';

export const signin = (formData, history, handleSnackbar) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        handleSnackbar("The email or password you have entered is invalid");
    }
};

export const signup = (formData, history, handleSnackbar) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        handleSnackbar("The email or password you have entered is invalid");
        console.log(error);
    }
};