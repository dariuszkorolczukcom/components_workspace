import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class FlexWidthSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 50, value2: 50
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (value) => {
        let value2 = (100 - value)
        this.setState({ value: value, value2: value2 });
    }

    render() {
        return (
            <div className="container">
                <h1>Flex Width Slider</h1>
                <p>Use the slider to dynamically change the width of a columns using style=width value.</p>
                <ol>
                    <li>the slider takes the value, creates second value for the other &lt;div> by substracting the width of the first &lt;div>, and writes it to the state</li>
                    <li>then it is passed to the &lt;div> inside the className (using backquotes)</li>
                    <li>the Value range is from 1-99</li>
                </ol>
                <Row>
                    <div style={style}>
                        <Slider
                            value={this.state.value}
                            onChange={this.handleChange}
                            min={1}
                            max={99}
                            trackStyle={{ backgroundColor: 'blue', height: 10 }}
                            railStyle={{ backgroundColor: 'red', height: 10 }}
                            handleStyle={{
                                borderColor: 'blue',
                                height: 28,
                                width: 28,
                                marginLeft: -14,
                                marginTop: -9,
                                backgroundColor: 'black',
                            }}
                        />
                    </div>
                    <p>{this.state.value}% / {this.state.value2}%</p>
                </Row>
                <Row>
                    <div style={{
                        border: '5px solid blue',
                        backgroundColor: 'blue', height: '50px',
                        width: `${this.state.value}%`
                    }}
                    >
                    </div>
                    <div style={{
                        border: '5px solid red',
                        backgroundColor: 'red', height: '50px',
                        width: `${this.state.value2}%`
                    }}
                    >
                    </div>
                </Row>
            </div>
        )
    }
};

const style = { width: 600, margin: 50 };

export default FlexWidthSlider;