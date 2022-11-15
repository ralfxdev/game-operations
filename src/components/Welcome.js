import React from "react";

class Welcome extends React.Component {

  render() {
    console.log('renderizando');
    return this.renderWelcomeScreen();
    
  }

  renderWelcomeScreen(){
    return (
      <div className="container">
        <div className="content">
          <div id="welcome">
            <h3>Welcome to <br/> Operations Game</h3>
            <p>Enter your data</p>
            <select name="operation" id="" onChange={this.props.onChange} value={this.props.formValues.operations}>
                <option value="+">Addition</option>
                <option value="-">Subtraction</option>
                <option value="*">Multiplication</option>
                <option value="/">Division</option>
            </select>
            <p> 🎮 Player Name</p>
            <input type="text" name="name" onChange={this.props.onChange} value={this.props.formValues.name}/>
            <br/>
            <button className="btn" onClick={this.props.onClick}>Start</button>
          </div>
        </div>
      </div>
    );
  }

}

export default Welcome;