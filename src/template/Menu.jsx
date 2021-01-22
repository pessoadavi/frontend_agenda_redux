import React from 'react';
//import { BrowserRouter as Router, Link} from 'react-router-dom'

const Menu = (props) => {
    return (
        <nav className="navbar navbar-inverse bg-inverse">
            <div className="container">
                <div className="navbar-header">
                    <a href="#" className="navbar-brand">
                        <i className="fa fa-calendar-check-o">AgendaApp</i>
                    </a>
                </div>

                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/agendas">Tarefas</a></li>
                        <li><a href="#/about">Sobre</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;