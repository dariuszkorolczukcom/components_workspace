import React, { Component } from 'react';
import '../App.css';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import WidthSlider from './WidthSliderComponent';
import FlexWidthSlider from './FlexWidthSliderComponent';
import MidiSlider from './MidiComponent';
import { Link } from 'react-router-dom';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {

        const HomePage = () => {
            return (
                <div>
                    <h1>Welcome</h1>
                    <ul>
                        <Link to="widthslider"><li>12 step Width Slider<p>Use the slider to dynamically change the width of a columns using bootstrap class col value.</p></li></Link>
                        <Link to="flexwidthslider"><li>Flex Width Slider<p>Use the slider to dynamically change the width of a columns using style=width value.</p></li></Link>
                        <Link to="midislider"><li>Midi Sound Player<p>plays chosen Midi sound</p></li></Link>
                    </ul>
                </div>
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/widthslider" component={WidthSlider} />
                    <Route path="/flexwidthslider" component={FlexWidthSlider} />
                    <Route path="/midislider" component={MidiSlider} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
