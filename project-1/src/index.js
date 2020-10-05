import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';

import './index.css';

import Home from './components/Home';
import Tasks from './components/Tasks';
import People from './components/People';

ReactDOM.render(
    <Router>
        <Link className="link-class" to="/">Home</Link>
        <Link className="link-class" to="/tasks">Tarefas</Link>
        <Link className="link-class" to="/people">Pessoas</Link>

        <Route exact path="/" component={Home} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/people" component={People} />
    </Router> ,
    document.getElementById('root')
);
