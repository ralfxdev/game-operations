import { Component } from "react";
import Game from "../components/Game";
import Welcome from "../components/Welcome";

class Home extends Component{
    state={
        form:{
            operation:"+",
            name:""
        },
        game:{
            status:false
        }
    }

    handleChange=(e)=>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({
            game:{
                status:!this.state.game.status
            }
        })
    }
 
    render(){
        if(this.state.game.status){
           return this.showPlayer()
        }else{
           return this.showWelcome()
        }
    }

    showPlayer(){
        return (
            <Game playerName={this.state.form.name} operation={this.state.form.operation} onClick={this.handleClick}></Game>
        )
    }
    showWelcome(){
        return(
            <Welcome onClick={this.handleClick} onChange={this.handleChange} formValues={this.state.form}></Welcome>
        )
    }
    
}

export default Home;