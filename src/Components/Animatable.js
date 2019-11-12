import React, { Component } from 'react';

export default class Animatable extends Component {
    constructor(props) {
        super(props);
        this.cardRef = React.createRef();
    }

    state = {
        shouldShow: true,
        show: true
    }

    componentDidUpdate(prevProps, prevState) {
        const targetElem = this.cardRef.current;
        const reactThis = this;

        const { shouldShow, entryAnimation, exitAnimation } = this.props;

        if(prevProps.shouldShow && ! shouldShow) {
            if(targetElem) {
                targetElem.classList.remove(entryAnimation);
                targetElem.classList.add(exitAnimation, 'faster');
                
                targetElem.addEventListener('animationend', function() { 
                    reactThis.setState({show: false});
                });
            }
        }

        if(! prevProps.shouldShow && shouldShow) {
            this.setState({show: true});
        }
        
    }

    render() {
        return (
            this.state.show &&
            <div className="animated zoomIn fast" ref={this.cardRef}>
                {this.props.children}
            </div>
        )
    }
}