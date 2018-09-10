import React, { Component } from 'react';
import '../App.css';
import Header from './HeaderComponent';
import WidthSlider from './WidthSliderComponent';
import FlexWidthSlider from './FlexWidthSliderComponent';
import MidiSlider from './MidiComponent'

import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/widthslider" component={WidthSlider} />
                    <Route path="/flexwidthslider" component={FlexWidthSlider} />
                    <Route path="/midislider" component={MidiSlider}/>
                </Switch>
            </div>
        );
    }
}

export default Main;
