import React, { Component } from 'react';
import './index.css';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <h1>Bem vindo ao meu exercício de lista de tarefas!</h1>
                
                <div className="penguin-container">
                    <div className="penguin">
                        <div className="penguin-bottom">
                            <div className="right-hand"></div>
                            <div className="left-hand"></div>
                            <div className="right-feet"></div>
                            <div className="left-feet"></div>
                        </div>
                        <div className="penguin-top">
                            <div className="right-cheek"></div>
                            <div className="left-cheek"></div>
                            <div className="belly"></div>
                            <div className="right-eye">
                                <div className="sparkle"></div>
                            </div>
                            <div className="left-eye">
                                <div className="sparkle"></div>
                            </div>
                            <div className="blush-right"></div>
                            <div className="blush-left"></div>
                            <div className="beak-top"></div>
                            <div className="beak-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
