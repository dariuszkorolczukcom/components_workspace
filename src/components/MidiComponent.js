import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Slider from 'rc-slider';
import MIDISounds from 'midi-sounds-react';
import 'rc-slider/assets/index.css';

class MidiSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sound: 50, 
            duration: .5,
            instrument: 1,
            instrumentName: 'chosen instrument'
        };
        this.handleChangeSound = this.handleChangeSound.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleChangeInstrument = this.handleChangeInstrument.bind(this);
    };
    playTestInstrument() {
        this.midiSounds.playChordNow(this.state.instrument, [this.state.sound], this.state.duration);
    }
    DisplayInstrument() {
    
     const inst = this.midiSounds.player.loader.instrumentInfo(this.state.instrument).title
    
console.log(inst);
     return inst;
    }

    handleChangeInstrument = (instrument) => {
        this.setState({ instrument: instrument, instrumentName: this.midiSounds.player.loader.instrumentInfo(this.state.instrument).title.split(':')[0]});
    }

    handleChangeSound = (sound) => {
        this.setState({ sound: sound});
    }
    handleChangeDuration = (duration) => {
        this.setState({ duration: duration});
    }

    render() {
        
        
        return (
            <div className="container">
            <Row>
                    <Col className='col-9'>
                    Set instrument
                        <Slider
                            value={this.state.instrument}
                            onChange={this.handleChangeInstrument}
                            min={0}
                            max={500}
                            step={10}
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
                    </Col>
                    <Col className='col-3'>
                    <p>&#127929; {this.state.instrumentName}</p>
                    </Col>
                    </Row>
                <Row>
                <Col className='col-10'>
                                    Set sound
                        <Slider
                            value={this.state.sound}
                            onChange={this.handleChangeSound}
                            min={0}
                            max={140}
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
                    </Col>
                    <Col className='col-2'>
                    <p>&#127932; {this.state.sound}</p>
                    </Col>
                    </Row><Row>
                    <Col className='col-10'>
                                        Set duration
                        <Slider
                            value={this.state.duration}
                            onChange={this.handleChangeDuration}
                            min={.0625}
                            max={1}
                            step={.0625}
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
                    </Col>
                    <Col className='col-2'>
                    <p>{this.state.duration}</p>
                    </Col>
                </Row>
                    <Row>
                        <Col className='col-5'>
                    <button onClick={this.playTestInstrument.bind(this)}>Play</button>
                    </Col>
                    <Col className='col-5'>
        <MIDISounds 
        ref={(ref) => (this.midiSounds = ref)} appElementName="root" instruments={[3]} 
        />
        </Col>
        </Row>

             
               
            </div>
        )
    }
};

const style = { width: 600, margin: 50 };

export default MidiSlider;