import React, { PureComponent } from 'react';
require("animate.css");

export default class Animatable extends PureComponent {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    state = {
        show: true
    }

    componentDidUpdate(prevProps, prevState) {
        const targetElem = this.wrapperRef.current;

        const { shouldShow, entryAnimation, exitAnimation } = this.props;

        if(prevProps.shouldShow && ! shouldShow) {
            if(targetElem) {
                targetElem.classList.remove(entryAnimation);
                targetElem.classList.add(exitAnimation, 'faster');
                
                targetElem.addEventListener('animationend', this.handleExitAnimationEnd);
            }
        }

        if(! prevProps.shouldShow && shouldShow) {
            this.setState({show: true});
        }

        if(! prevState.show && this.state.show) {
            targetElem.addEventListener('animationend', this.handleEntryAnimationEnd);
        }
        
    }

    handleEntryAnimationEnd = () => {
        this.wrapperRef.current.removeEventListener('animationend', this.handleEntryAnimationEnd);
        this.props.afterEntryAnimationEnd();
    }

    handleExitAnimationEnd = () => {
        this.wrapperRef.current.removeEventListener('animationend', this.handleExitAnimationEnd);
        this.props.afterExitAnimationEnd();
        this.setState({show: false});
    }

    render() {
        return (
            this.state.show &&
            <div className={`animated ${this.props.entryAnimation}`} ref={this.wrapperRef}>
                {this.props.children}
            </div>
        )
    }
}

Animatable.defaultProps = {
    entryAnimation: 'zoomIn',
    exitAnimation: 'zoomOut'
};