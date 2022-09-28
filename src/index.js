import ReactDOM from 'react-dom';

import './assets/css/reset.css';

import App from './componentes/app';

function index() {
    return(<App/>)
}

ReactDOM.render(index(), document.querySelector('.root'));
