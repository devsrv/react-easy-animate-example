import React, { Component } from 'react';
import cardImg from './../close-up-of-leaf.jpg'
import Animatable from './Animatable';

export default class Main extends Component {
    state = {
        show: true
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="col">
                    <Animatable 
                        shouldShow={this.state.show}
                        entryAnimation="zoomInLeft"
                        exitAnimation="zoomOutDown"
                    >
                        <div className="card" style={{width: '22rem', boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                            <img src={cardImg} className="card-img-top" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Our Changing Planet</h5>
                                <h6 className="card-subtitle mb-2 text-muted py-2" style={{fontSize: '95%'}}>by Kurt Wagner</h6>
                                <p className="card-text text-muted">
                                    Visit ten places on our planet that are undergoing the biggest changes today.
                                </p>
                                <div className="d-flex justify-content-between">
                                    <a href="#" className="card-link" style={{flexGrow: 1}}>Card link</a>

                                    <span className="d-flex justify-content-between align-items-center" style={{flexGrow: 0.5}}>
                                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                                        <i className="fa fa-share-alt" aria-hidden="true"></i>
                                        <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Animatable>
                </div>
                <div className="col">
                    <button className="btn btn-primary" type="button" onClick={() => this.setState((state) => ({show: !state.show}))}>Click</button>
                </div>
            </div>
        )
    }
}