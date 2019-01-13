import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import Webcam from "react-webcam";
import { Row, Col } from 'reactstrap';

class Video extends Component {
	constructor(props) {
		super(props);
		this.state = {
			image: '',
			imageSrc: [],
			isNavOpen: false
		};
		this.clear = this.clear.bind(this);
		this.capture10 = this.capture10.bind(this);
		this.capture100 = this.capture100.bind(this);
		this.captureStream = this.captureStream.bind(this);

	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	setRef = webcam => {
		this.webcam = webcam;
	}

	capture10 = () => {
		clearInterval(this.interval)
		this.interval = setInterval(() => {
			let image = this.webcam.getScreenshot();
			this.setState({
				image: image
			})
		}, 10);
	};

	capture100 = () => {
		clearInterval(this.interval)
		this.interval = setInterval(() => {
			let image = this.webcam.getScreenshot();
			this.setState({
				image: image
			})
		}, 100);
	};

	capture3000 = async () => {
		await clearInterval(this.interval)
		await console.log('3')
		await setTimeout(() => {
			console.log('2')
		}, 1000)
		await setTimeout(() => {
			console.log('1')
		}, 1000)
		await setTimeout(() => {
			let image = this.webcam.getScreenshot();
			this.setState({
				image: image
			})
		}, 1000)
	};

	captureStream = () => {
		let imageSrc = this.state.imageSrc
		imageSrc[imageSrc.length] = this.webcam.getScreenshot();
		this.setState({
			imageSrc: imageSrc
		})
	};

	clear = () => {
		clearInterval(this.interval)
		this.setState({
			image: '',
			imageSrc: [],
		});
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	render() {
		const videoConstraints = {
			width: 1280,
			height: 720,
			facingMode: "user"
		};
		const Buttons = () => {
			return (
				<Navbar dark color='dark' expand="md">
					<div className="container">
						<NavbarToggler onClick={this.toggleNav} />
						<Nav navbar>
							<NavItem>
								<button onClick={this.capture10}>Capture photo every 10ms</button>
							</NavItem>
							<NavItem>
								<button onClick={this.capture100}>Capture photo every 100ms</button>
							</NavItem>
							<NavItem>
								<button onClick={this.capture3000}>Capture photo every 3000ms</button>
							</NavItem>
							<NavItem>
								<button onClick={this.captureStream}>Capture series</button>
							</NavItem>
							{/* <NavItem>
								<button onClick={() => clearInterval(this.interval)}>Stop</button>
							</NavItem> */}
							<NavItem>
								<button onClick={() => this.clear()}>Clear All</button>
							</NavItem>
						</Nav>
					</div>
				</Navbar>
			)
		}
		return (
			<React.Fragment>
				<Buttons />
				<div className="container">
					<Row>
						<Col className="col-6" style={{}}>
							<Webcam
								style={styles.image}
								audio={false}
								height={200}
								ref={this.setRef}
								screenshotFormat="image/jpeg"
								width={350}
								videoConstraints={videoConstraints}
							/>
						</Col>
						<Col className="col-6" style={{}}>
							<img style={styles.image} key={'a'} src={this.state.image} alt="" />
						</Col>
					</Row>
				</div>
				<div className="container">
					<Row>
						{this.state.imageSrc &&
							this.state.imageSrc.map((image, index) => {
								return (
									<Col className="col-12 col-md-6"><img style={styles.image} key={index} src={image} alt="" /></Col>
								)
							})}
					</Row>
				</div>
			</React.Fragment>
		)
	}
}

const styles = {
	image: {
		margin: "1rem 3rem 1rem 3rem",
		borderRadius: "1rem"
	}
}

export default Video;