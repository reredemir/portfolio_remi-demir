import React from 'react';
import './styles.scss';
import { Row, Col } from 'react-bootstrap';
import AnimationContainer from 'components/animation-container';
import BaffleText from 'components/baffle-text';
import ThemeContext from '../../context';

class Contact extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			message: '',
			error: false,
			show: false,
		};
		this.show = this.show.bind(this);
	}
	static contextType = ThemeContext;

	show() {
		this.setState({ show: true });
	}

	check(val) {
		if (this.state.error && val === '') {
			return false;
		} else {
			return true;
		}
	}

	submit() {
		if (
			this.state.name === '' ||
			this.state.email === '' ||
			this.state.message === ''
		) {
			this.setState({ error: true });
		} else {
			this.setState({ error: false });
		}
	}
	render() {
		return (
			<section
				id={`${this.props.id}`}
				className="contact"
				style={{ height: this.context.height }}
			>
				<Row>
					<Col md={2} className="side">
						<h2>
							<BaffleText
								text="Contact"
								revealDuration={500}
								revealDelay={500}
								parentMethod={this.show}
								callMethodTime={1100}
							/>
						</h2>
					</Col>
					<Col md={8} className="form">
						{this.contact()}
					</Col>
				</Row>
			</section>
		);
	}

	contact() {
		if (this.state.show || this.context.height === 'auto') {
			return (
				<AnimationContainer delay={0} animation="fadeInUp fast">
					<div className="form-container">
						<div className="line-text">
							<h4>Prenons contact</h4>
							<div className="contact">
								<AnimationContainer
									delay={50}
									animation="fadeInUp fast"
								>
									<div className="contact-name">
										Rémi DEMIR
									</div>
								</AnimationContainer>
								<AnimationContainer
									delay={100}
									animation="fadeInUp fast"
								>
									<div className="contact-adress">
										Lyon, 69001
									</div>
								</AnimationContainer>
								<AnimationContainer
									delay={150}
									animation="fadeInUp fast"
								>
									<div className="contact-number">
										<a href="tel:+33628256231">
											06 28 25 62 31
										</a>
									</div>
								</AnimationContainer>
								<AnimationContainer
									delay={200}
									animation="fadeInUp fast"
								>
									<div className="contact-mail">
										<a href="mailto:demir.remi@gmail.com">
											demir.remi@gmail.com
										</a>
									</div>
								</AnimationContainer>
							</div>
						</div>
					</div>
				</AnimationContainer>
			);
		}
	}
}

export default Contact;
