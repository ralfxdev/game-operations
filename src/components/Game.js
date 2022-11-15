import React from 'react';
import { Component } from 'react';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            response: "",
            score: 0,
            incorrect: false
        };
    }

    render() {
        if (this.state.score === 3) {
            return this.renderWinnerScreen();
        } else {
            return this.renderProblem();
        }
    }

    renderWinnerScreen() {
        return (
            <div className="container">
                <div className="content">
                    <div id="winner">
                        <h2>Your Winner!</h2>
                        <h2>Score: {this.state.score}</h2>
                        <button className='btn' onClick={this.props.onClick}>Regresar</button>
                    </div>
                </div>
            </div>
        );
    }

    renderProblem() {
        return(
            <div className="container">
                <div className="content">
                <div className={this.state.incorrect ? "incorrect" : ""} id="problem">{this.state.num1} {this.props.operation} {this.state.num2}</div>
                    <input onKeyPress={this.inputKeyPress} onChange={this.updateResponse} autoFocus={true} value={this.state.response} />
                    <div><h2>🤖 Score: {this.state.score}</h2></div>
                    <div><h2>🎮 Player: {this.props.playerName}</h2></div>
                    <div><h1>Welcome to my game</h1></div>
                </div>
            </div>
        )
    }

    inputKeyPress = (event) => {

        if (event.key === "Enter") {

            const answer = parseInt(this.state.response);
            switch (this.props.operation) {
                case '+':
                    if (answer === this.state.num1 + this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                case '-':
                    if (answer === this.state.num1 - this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                case '*':
                    if (answer === this.state.num1 * this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                case '/':
                    if (answer === this.state.num1 / this.state.num2) {
                        this.succesResponse();
                    } else {
                        this.failResponse();
                    }
                    break;
                default:
                    break;
            }
        }
    }

    succesResponse = () => {
        this.setState(state => ({
            score: state.score + 1,
            response: "",
            num1: Math.ceil(Math.random() * 10),
            num2: Math.ceil(Math.random() * 10),
            incorrect: false
        }));
    }
    failResponse = () => {
        this.setState(state => ({
            score: state.score - 1,
            incorrect: true,
            response: ""
        }));
    }


    updateResponse = (event) => {
        this.setState({
            response: event.target.value
        });
    }
}

export default Game;