import React from 'react';
import ReactDOM from 'react-dom';
import SomeComponent from './components/SomeComponent';

const App = () => {
    return (
        <SomeComponent/>
    )
};


const rootElement = document.querySelector('#root');

ReactDOM.render(<App/>, rootElement);
