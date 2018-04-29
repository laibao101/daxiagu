import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import App from './components/App';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Provider } from 'react-redux';
import store from './store.js';

import css from './styles/style.styl';

const router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={({ match, ...rest }) => {
                    return (
                        <App>
                            <PhotoGrid {...rest}/>
                        </App>
                    )
                }} />
                <Route path="/view/:postId" children={({ match, ...rest }) => {
                    return (
                        <App>
                            <Single match={match} {...rest}/>
                        </App>
                    )
                }} />
            </Switch>
        </BrowserRouter>
    );
}


const root = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        {router()}
    </Provider>,
    root,
);
