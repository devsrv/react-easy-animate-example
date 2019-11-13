import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Animatable extends PureComponent {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
    }

    state = {
        show: true
    }

    allocateAnimationClasses = (classesInp, action = "ADD") => {
        const targetElem = this.wrapperRef.current;

        switch (action) {
            case "ADD":
                classesInp.forEach((className) => {
                    targetElem.classList.add(className);
                });
                break;
        
            default:
                classesInp.forEach((className) => {
                    targetElem.classList.remove(className);
                });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const targetElem = this.wrapperRef.current;

        const { show, entryAnimation, exitAnimation } = this.props;

        if(prevProps.show && ! show) {
            if(targetElem) {
                this.allocateAnimationClasses(entryAnimation, "REMOVE");

                this.allocateAnimationClasses(exitAnimation, "ADD");
                
                targetElem.addEventListener('animationend', this.handleExitAnimationEnd);
            }
        }

        if(! prevProps.show && show) this.setState({show: true});

        if(! prevState.show && this.state.show) targetElem.addEventListener('animationend', this.handleEntryAnimationEnd);
        
    }

    handleEntryAnimationEnd = () => {
        this.wrapperRef.current.removeEventListener('animationend', this.handleEntryAnimationEnd);

        if(this.props.onEntryAnimationEnd) this.props.onEntryAnimationEnd();
    }

    handleExitAnimationEnd = () => {
        this.wrapperRef.current.removeEventListener('animationend', this.handleExitAnimationEnd);
        this.setState({show: false});
        
        if(this.props.onExitAnimationEnd) this.props.onExitAnimationEnd();
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
    entryAnimation: ['zoomIn'],
    exitAnimation: ['zoomOut']
};

Animatable.propTypes = {
    show: PropTypes.bool,
    entryAnimation: PropTypes.array,
    exitAnimation: PropTypes.array,
    onExitAnimationEnd: PropTypes.func,
    onEntryAnimationEnd: PropTypes.func,
    children: PropTypes.element.isRequired
};