import React, { Component } from 'react';
require("animate.css");

export default class Animatable extends Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
    }

    state = {
        show: true
    }

    componentDidUpdate(prevProps, prevState) {
        const targetElem = this.cardRef.current;

        const { shouldShow, entryAnimation, exitAnimation } = this.props;

        if(prevProps.shouldShow && ! shouldShow) {
            if(targetElem) {
                targetElem.classList.remove(entryAnimation);
                targetElem.classList.add(exitAnimation, 'faster');
                
                targetElem.addEventListener('animationend', this.handleAnimationEnd);
            }
        }

        if(! prevProps.shouldShow && shouldShow) {
            this.setState({show: true});
        }
        
    }

    handleAnimationEnd = () => {
        this.cardRef.current.removeEventListener('animationend', this.handleAnimationEnd);
        this.setState({show: false});
    }

    render() {
        return (
            this.state.show &&
            <div className={`animated ${this.props.entryAnimation}`} ref={this.cardRef}>
                {this.props.children}
            </div>
        )
    }
}

Animatable.defaultProps = {
    entryAnimation: 'zoomIn',
    exitAnimation: 'zoomOut'
};