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
            instrumentName: 'chosen instrument',
            myMelody: myMelody
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
        this.setState({ instrument: instrument, instrumentName: this.midiSounds.player.loader.instrumentInfo(this.state.instrument).title.split(':')[0] });
    }

    handleChangeSound = (sound) => {
        this.setState({ sound: sound });
    }
    handleChangeDuration = (duration) => {
        this.setState({ duration: duration });
    }

    playMelody = (position) => {
        this.midiSounds.playChordNow((this.state.instrument), (this.state.myMelody[position].sound), (this.state.myMelody[position].duration))
        if (position < this.state.myMelody.length - 1) {
            let newPosition = ++position;
            setTimeout(() => {
                this.playMelody(newPosition);
            }, this.state.myMelody[position].time);
        } else {
            return
        }
    }

    changeSound = (value, index, key) => {
        let newMelody = this.state.myMelody;
        newMelody[index][key] = value;
        this.setState({ myMelody: newMelody });
    }

    addNote = (e) => {
        e.preventDefault();
        let notes = this.state.myMelody;
        notes.push({ ...newNote });
        this.setState({
            myMelody: notes
        })
    }

    deleteNote = (e, index) => {
        e.preventDefault();
        let notes = this.state.myMelody;
        delete notes[index];
        this.setState({
            myMelody: notes
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <button onClick={(e) => this.addNote(e)}>Add sound</button>
                </div>

                {this.state.myMelody.map((value, index) => {
                    return (
                        <div className="col-2" key={"tune_" + index} style={{ display: "inline-block" }}>
                            {/* <input onChange={(e) => this.changeSound(e, index, "instrument")} key={"instrument_" + index} type="text" value={value.instrument} /> */}
                            Sound: <Slider
                                value={value.sound}
                                onChange={(e) => this.changeSound(e, index, "sound")}
                                min={0}
                                max={140}
                                trackStyle={{ backgroundColor: 'blue', height: 10 }}
                                railStyle={{ backgroundColor: 'red', height: 10 }}
                                handleStyle={{
                                    borderColor: 'blue',
                                    height: 28,
                                    width: 28,
                                    backgroundColor: 'black',
                                }}
                            />
                            Duration: <Slider
                                value={value.duration}
                                onChange={(e) => this.changeSound(e, index, "duration")}
                                min={.0625}
                                max={1}
                                step={.0625}
                                trackStyle={{ backgroundColor: 'blue', height: 10 }}
                                railStyle={{ backgroundColor: 'red', height: 10 }}
                                handleStyle={{
                                    borderColor: 'blue',
                                    height: 28,
                                    width: 28,
                                    backgroundColor: 'black',
                                }}
                            />
                            Time: <Slider
                                value={value.time}
                                onChange={(e) => this.changeSound(e, index, "time")}
                                min={100}
                                max={10000}
                                step={100}
                                trackStyle={{ backgroundColor: 'blue', height: 10 }}
                                railStyle={{ backgroundColor: 'red', height: 10 }}
                                handleStyle={{
                                    borderColor: 'blue',
                                    height: 28,
                                    width: 28,
                                    backgroundColor: 'black',
                                }}
                            />
                            <button onClick={(e) => this.deleteNote(e, index)}>-</button>

                        </div>
                    )
                })}
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
                    {/* <Col className='col-10'>
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
                    </Col> */}
                    <Col className='col-5'>
                        <button onClick={() => this.playMelody(0)}>Play melody</button>
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

const newNote = {
    instrument: 1,
    sound: [70],
    duration: 10,
    time: 50
}

const myMelody = [
    {
        instrument: 1,
        sound: [70],
        duration: 10,
        time: 50
    },
    {
        instrument: 1,
        sound: [80],
        duration: .5,
        time: 200
    },
    {
        instrument: 1,
        sound: [90],
        duration: .5,
        time: 1000
    },
    {
        instrument: 1,
        sound: [100],
        duration: .5,
        time: 500
    },
    {
        instrument: 1,
        sound: [80],
        duration: .5,
        time: 200
    },
    {
        instrument: 1,
        sound: [90],
        duration: .5,
        time: 1000
    },
    {
        instrument: 1,
        sound: [100],
        duration: .5,
        time: 500
    },
    {
        instrument: 1,
        sound: [80],
        duration: .5,
        time: 200
    },
]

export default MidiSlider;