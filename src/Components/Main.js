import React, { Component } from 'react';
import cardImg from './../close-up-of-leaf.jpg'
import Animatable from 'react-easy-animate';
require("animate.css");

export default class Main extends Component {
    state = {
        show: true,
        disabled: false
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col">
                    <Animatable 
                        show={this.state.show}
                        // entryAnimation={["zoomInDown"]}
                        exitAnimation={["zoomOutDown", "faster"]}
                        onExitAnimationEnd={() => this.setState({disabled: false})}
                        onEntryAnimationEnd={() => this.setState({disabled: false})}
                        exitAnimDelay="0.6s"
                        // entryAnimDelay="2s"
                    >
                        <div className="card" style={{width: '22rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                            <img src={cardImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Our Changing Planet</h5>
                                <Animatable 
                                    entryAnimDelay="0.8s"  
                                    show={this.state.show}
                                    entryAnimation={["fadeInUp"]}
                                    exitAnimation={["fadeOutLeft"]}
                                    entryAnimDuration="1s"
                                >
                                    <h6 className="card-subtitle mb-2 text-muted py-2" style={{fontSize: '95%'}}>by Kurt Wagner</h6>
                                </Animatable>
                                <Animatable 
                                    entryAnimDelay="1s"  
                                    show={this.state.show}
                                    exitAnimation={["fadeOut"]}
                                >
                                    <p className="card-text text-muted">
                                        Visit ten places on our planet that are undergoing the biggest changes today.
                                    </p>
                                </Animatable>
                                <div className="mt-4 d-flex justify-content-between align-items-center">
                                    <div style={{flexGrow: 1}}>
                                        <a href="#" className="square_btn">Card link</a>
                                    </div>

                                    <span className="d-flex justify-content-between align-items-center" style={{flexGrow: 0.5}}>

                                    <Animatable 
                                        entryAnimDelay="1.2s"  
                                        show={this.state.show}
                                        entryAnimation={["bounceIn"]}
                                    >
                                        <i className="fa fa-heart-o my-btn" aria-hidden="true"></i>
                                    </Animatable>
                                    <Animatable 
                                        entryAnimDelay="1.4s"  
                                        show={this.state.show}
                                        entryAnimation={["bounceIn"]}
                                    >
                                        <i className="fa fa-share-alt my-btn" aria-hidden="true"></i>
                                    </Animatable>
                                    <Animatable 
                                        entryAnimDelay="1.6s"  
                                        show={this.state.show}
                                        entryAnimation={["bounceIn"]}
                                    >
                                        <i className="fa fa-ellipsis-v my-btn" aria-hidden="true"></i>
                                    </Animatable>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Animatable>
                </div>
                <div className="col">
                    <button className="btn btn-primary" type="button" disabled={this.state.disabled} onClick={() => this.setState((state) => ({show: !state.show, disabled: true}))}>{this.state.show? "HIDE" : "SHOW"}</button>
                </div>
            </div>
        )
    }
}