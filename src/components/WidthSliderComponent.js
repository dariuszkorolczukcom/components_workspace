import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

class WidthSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 6, value2: 6
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange = (value) => {
        let value2 = (12 - value)
        this.setState({ value: value, value2: value2 });
    }

    render() {
        return (
            <div className="container">
                <h1>12 step Width Slider</h1>
                <p>Use the slider to dynamically change the width of a columns using bootstrap class col value.</p>
                <ol>
                    <li>the slider takes the value, creates second value for the other &lt;Col> by substracting the width of the first &lt;Col>, and writes it to the state</li>
                    <li>then it is passed to the &lt;Col> inside the className (using backquotes)</li>
                    <li>the Value range is from 1-12</li>
                </ol>
                <Row>
                    <div style={style}>
                        <Slider
                            value={this.state.value}
                            onChange={this.handleChange}
                            min={1}
                            max={11}
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
                    <p>{this.state.value} /  {this.state.value2}</p>
                </Row>
                <Row>
                    <Col
                        style={{
                            border: '5px solid blue',
                            backgroundColor: 'blue', height: '50px'
                        }}
                        className={`col-${this.state.value}`}
                    >
                    </Col>
                    <Col
                        style={{
                            border: '5px solid red',
                            backgroundColor: 'red', height: '50px'
                        }}
                        className={`col-${this.state.value2}`}
                    >
                    </Col>
                </Row>
            </div>
        )
    }
};

const style = {
    width: 500,
    margin: 50
};

export default WidthSlider;