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
                    <div style={{
                        border: '5px solid blue',
                        backgroundColor: 'blue', height: '50px'
                    }}
                        className={`col-12 col-md-${this.state.value}`}
                    >
                    </div>
                    <div style={{
                        border: '5px solid red',
                        backgroundColor: 'red', height: '50px'
                    }}
                        className={`col-12 col-md-${this.state.value2}`}
                    >
                    </div>
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