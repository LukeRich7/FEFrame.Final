import React from 'react';

import ContactItem from './contactItem';

const styles= {
    phoneBookWrapper: {
        width: '33%',
        fontSize: 24,
        overflow: 'scroll',
        padding: '50px 30px',
        backgroundColor: 'yellow',
        border: '1px solid black',
    }
}


const phoneBook = () => <div style={styles.phoneBookWrapper}><ContactItem /></div>;

export default phoneBook;