import React from 'react';

const styles ={
    headerWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: 10,
        fontSize: 40,
        border:'none',
        backgroundColor: 'lightBlue'
    }
}

const header = () => <div style={styles.headerWrapper}>Contact</div>;

export default header;