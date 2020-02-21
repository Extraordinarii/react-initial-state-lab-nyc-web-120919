import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    someCounter = () => {
        if(this.state.secondsLeft > 0 ){
           return `${this.state.secondsLeft} seconds left before I go boom!`
        }else{
           return "Boom!"
        }
    }


    render() {
        return (
            <div className="Bomb">{this.someCounter()}</div>
        )
    }
}
