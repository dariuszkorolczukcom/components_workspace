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
                <h3>Welcome</h3>
               <ul>
                <li>[12 step Width Slider]
                <p>using the slider dynamically changes the width of a column using bootstrap class.</p>
                </li>
                <li>[Flex Width Slider]
                    <p>does the same job as the [12 step Width Slider], but changes the style width in % of the columns</p>
                </li>
                <li>[Midi Slider]
                    <p>plays chosen Midi sound</p>
                </li>
                </ul> 
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
