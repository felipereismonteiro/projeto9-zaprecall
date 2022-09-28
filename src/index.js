import ReactDOM from 'react-dom';

import './assets/css/reset.css';
import './assets/css/style.css';
import Layout from './componentes/layout';

function index() {
    return(<Layout/>)
}

ReactDOM.render(index(), document.querySelector('.root'));
