import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const styles={
    spanWrapper:{
        border: '2px, single, black',
        backgroundColor: 'tan',
    }
}

const contactItem = props => {
    const list = props.myList.map(item =>{
        return (
            <Link to={`${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
            <div style={styles.spanWrapper}>
                <p><span>Name: </span>{item.name}</p>
                <p><span>Email: </span>{item.email}</p>
            </div>
            </Link>
        )
    } );
    return <div>{list}</div>
}

const mapStateToProps = state => {
    return {
        myList: state.list
    }
}

export default connect(mapStateToProps, null)(contactItem)