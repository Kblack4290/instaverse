import React from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    error: {
        backgroundColor: theme.palette.error.dark,
    },
}));

const CustomSnackbar = ({ open, message, handleClose }) => {
    const classes = useStyles();

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
        >
            <SnackbarContent
                className={classes.error}
                message={message}
            />
        </Snackbar>
    );
};

export default CustomSnackbar;