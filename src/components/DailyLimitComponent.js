import React, { Component } from 'react';
import { Line } from 'rc-progress';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Button, Label, Col, Row, Container } from 'reactstrap';

//validation variables
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@+[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const generateId = () => {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
};

class DailyLimit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emails: [{ _id: 0, email: 'dkorolczuk86@gmail.com' }],
            numbers: [],
            currentSpend: 25,
            dailySpendLimit: 100,
            error: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    };

    //displays provided array

    DisplayItems(items, key) {

        if (items.length > 0) {
            return (
                <div>Registered {key}s: {items.map((item) => {
                    return <span key={item._id}>{item[key]} <button style={buttonSubstract} onClick={() => this.handleDelete(item, `${key}s`)}
                    >-</button> </span>
                })}</div>
            )
        } else {
            return (<div></div>)
        }
    };

    //handling deletion

    handleDelete(item, key) {
        let newArray = this.state[key];
        let removeIndex = newArray.indexOf(item);
        newArray.splice(removeIndex, 1)
        this.setState({ [key]: newArray });
    }

    //handle adding

    handleSubmit(values, key) {
        let newArray = this.state[`${key}s`];
        if (newArray.length >= 4) {

            this.setState({ error: `You can add only 4 ${key}s!` })
        } else {
            newArray.push({ _id: generateId(), [key]: values[key] });
            this.setState({ [`${key}s`]: newArray });
        }
    };

    // validate number 

    validateNumber(number) {
        if (number < 0) {
            this.setState({ error: 'must be grater than 0!' })
            return false;
        }
        else if (isNaN(number)) {
            this.setState({ error: 'must be a valid number' });
            return false;
        }
        else if (number === '') {
            this.setState({ error: '' })
            return true;
        }
        else return true
    }

    handleSubmitDailySpendLimit(values) {
        if (this.validateNumber(values.dailySpendLimit))
            this.setState({ dailySpendLimit: values.dailySpendLimit, error: '' });

    };

    handleSubmitCurrentSpend(values) {
        if (this.validateNumber(values.currentSpend))
            this.setState({ currentSpend: values.currentSpend, error: '' });
    };

    render() {
        const RenderPercent = () => {
            let perCent = (this.state.currentSpend / this.state.dailySpendLimit * 100).toFixed(0)
            if (Number.isInteger(perCent*1))
                return <div>Today you spend {perCent}% of the limit</div>
                else return <div></div>
        }
        return (
            <Container className="container col-12 mt-2" style={mainContainer}>
                <Row>
                    <Col className="col-10">
                        <h3>Daily Spend Limit</h3>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-12 col-md-6"><p style={paragraphText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col className="col-12 col-md-6">
                        <Row className="mt-4">
                            <Col className="col-5">£{this.state.currentSpend}</Col>
                            <Col className="col-5 text-right">£{this.state.dailySpendLimit}</Col>
                        </Row>
                        <Row className="mt-4">
                            <Col className="col-12"><Line percent={(this.state.currentSpend / this.state.dailySpendLimit * 100).toFixed(0)} strokeWidth="1" strokeColor="#c0522d" trailColor="rgba(100,100,100,.4)" /></Col>
                        </Row><Row>
                            <Col className="col-5"><RenderPercent /></Col>
                            <Col className="col-5 text-right">Todays limit</Col>
                        </Row>
                        <Row className="mt-4">
                            <Col className="col-6">
                                <LocalForm onChange={(values) => this.handleSubmitCurrentSpend(values)}>
                                    <Row className="form-group">
                                        <Col>
                                            <Label style={labelStyle} htmlFor="currentSpend">Set current spend: </Label>
                                            <Control.text model=".currentSpend" id="currentSpend" name="currentSpend"
                                                placeholder={this.state.currentSpend}
                                                className="form-control"
                                                style={{
                                                    backgroundColor: '#2b2f30',
                                                    color: '#fff'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </Col>
                            <Col className="col-6">
                                <LocalForm onChange={(values) => this.handleSubmitDailySpendLimit(values)}>
                                    <Row className="form-group">
                                        <Col>
                                            <Label style={labelStyle} htmlFor="dailySpendLimit">Set daily spend limit: </Label>
                                            <Control.text model=".dailySpendLimit" id="dailySpendLimit" name="dailySpendLimit"
                                                placeholder={this.state.dailySpendLimit}
                                                className="form-control"
                                                style={{
                                                    backgroundColor: '#2b2f30',
                                                    color: '#fff'
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </LocalForm>
                            </Col>

                        </Row>

                    </Col>
                </Row>
                <hr style={{ backgroundColor: '#999' }} />

                {//notification display email and number
                }

                <div>{this.state.error}</div>
                <h3>Notification settings</h3>

                {this.DisplayItems(this.state.emails, 'email')}

                {this.DisplayItems(this.state.numbers, 'number')}


                {//notification add email and number
                }

                <Row>
                    <Col className='col-12 col-md-6' >
                        <LocalForm onSubmit={(values) => this.handleSubmit(values, 'number')}>
                            <Row className="form-group">
                                <Label style={labelStyle} htmlFor="number" md={6}>Number: </Label>
                                <Col md={10}>
                                    <Control.text model=".number" id="number" name="number"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(3), maxLength: maxLength(15), isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".number"
                                        show={{ touched: true }}
                                        messages={{
                                            minLength: 'Must be greater than 2 numbers ',
                                            maxLength: 'Must be 15 numbers or less ',
                                            isNumber: 'Must be a number '
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={10}>
                                    <Button type="submit" color="dark">
                                        Add Number
								</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </Col><Col className='col-12 col-md-6' >
                        <LocalForm onSubmit={(values) => this.handleSubmit(values, 'email')}>
                            <Col className="form-group">
                                <Label style={labelStyle} htmlFor="email" md={6}>Email:</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show={{ touched: true }}
                                        messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid Email Address '
                                        }}
                                    />
                                </Col>
                            </Col>
                            <Col className="form-group">
                                <Col md={{ size: 10, offset: 1 }}>
                                    <Button type="submit" color="dark">
                                        Add Email
								</Button>
                                </Col>
                            </Col>
                        </LocalForm>
                    </Col>
                </Row>
            </Container>
        );
    };
}

//internal stylesheets

const mainContainer = {
    backgroundColor: '#2b2f30',
    color: '#fff',
    paddingTop: '1rem'
};
const paragraphText = {
    textAlign: 'justify',
    backgroundColor: '#1f445e',
    padding: '1rem'
};
const labelStyle = {
    fontSize: '.8rem',
    color: 'rgba(255,255,255,.7)'
};
const buttonSubstract = {
    backgroundColor: 'rgba(200,200,200,.5)',
    border: 'none',
    borderRadius: '40%',
    height: '1.5rem'
}

export default DailyLimit;