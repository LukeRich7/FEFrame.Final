import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from './components/Header';
import PhoneBook from './components/phonebook';
import Form from './components/Form';

const styles = {
    bodyWrapper:{
        display: 'flex',
        height: '100vh',
        alignItems: 'top',
    }
}

const app = () => {
        return (
            <BrowserRouter>
             <div className="App">
                <Header/>
                    <div style={styles.bodyWrapper}>
                      <PhoneBook/>
                      <Switch>
                        <Route path='/:listId' component={Form}/>
                         <Redirect from='/' to='/1'/>
                      </Switch>
                    </div>
            </div>
            </BrowserRouter>
        );
    }


export default app;