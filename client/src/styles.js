import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#efefef',
        
    },

    heading: {
        color: '#55133B',
        fontWeight: '400',
        textTransform: 'lowercase'
    },
    image: {
        // marginLeft: '15px',
        margin: '10px 0 10px 15px',
        height: '75px'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            // display: "block",
            flexDirection: " column-reverse",
            
    }

}
}))