import react, { Component } from 'react'
import './Box.css'
import { choice } from './helpers'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = { color: choice(this.props.colors) }
    }

    changeColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color)
        this.setState({ color: newColor })
    }

    handleClick = () => {
        this.changeColor()
    }

    render() {
        return (
            <div className="Box"
                style={{ backgroundColor: this.state.color }}
                onClick={this.handleClick}
            />
        )
    }
}

export default Box