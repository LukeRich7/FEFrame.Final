import React, { Component } from 'react';
import { connect } from 'react-redux';

const styles= {
    formWrapper:{
        width: '66%',
        height:  '100vh',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems:  'center',
        
    },
    innerForm: {
        padding: 300,
        border: '1px solid black',
        backgroundColor: 'lightBlue',

    }
}
  

class Form extends Component {
    // loads initial to-do in form input
    componentDidMount() {
        this.props.onListChange(this.props.match.params.listId)
         }

    // updates to-do in form on route change
    componentWillReceiveProps(newProps) {
        if (this.props.match.params.listId !== newProps.match.params.listId) {
            this.props.onListChange(newProps.match.params.listId);
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.redirectTo != prevProps.redirectTo) {
            this.props.history.push(this.props.redirectTo);
        }
    }

    submit (e) {
        e.preventDefault();
    }

    focus (e) {
        e.target.value = '';
    }

    render () {
        const {listId} = this.props.match.params,
            {name, email, phone, onInputChange, onUpdate, onDelete, onAdd} = this.props;
        return (
            <form style={styles.formWrapper} onSubmit={this.submit}>
                <div style={styles.innerForm}>
                    <div >
                        <label>Name: <input 
                            type='text' 
                            name='name' 
                            value={name}
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)} /></label>
                            <br/>
                        <label>Email: <input 
                            type='email' 
                            name='email' 
                            value={email} 
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)}/></label>
                            <br/>
                         <label>Phone: <input 
                            type='tel' 
                            name='phone' 
                            value={phone} 
                            onFocus={this.focus}
                            onChange={(e) => onInputChange(e.target.name, e.target.value)}/></label>
                            <br/>
                        </div>
                        
                    <div>
                      <input  type='button' value='Update'   onClick={() => onUpdate(listId)} />
                      <input type='button' value='Delete' onClick={() => onDelete(listId)} />
                      <input type='button' value='Add' onClick={onAdd} />
                    </div>
                 </div>
                <br/>
               
                <br/>
            </form>
        );
    }
}

const mapStateToProps = state => {
    return {
        items: state.list,
        name: state.name,
        email: state.email,
        phone: state.phone,
        redirectTo: state.redirectTo,

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onListChange: (id) => dispatch({type: 'CHANGE_LIST', id}),
        onInputChange: (name, value) => dispatch({type: 'CAPTURE_INPUT', payload: {name, value}}),
        onUpdate: (id) => dispatch({type: 'UPDATE', id}),
        onDelete: (id) => dispatch({type: 'DELETE', id}),
        onAdd: (id) => dispatch({type: 'ADD', id}),
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);