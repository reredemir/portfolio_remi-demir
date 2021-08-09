import React from 'react';
import Particles from 'react-particles-js';
import Progress from 'components/progress';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGithub,
	faLinkedin,
	faTwitter,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import ThemeContext from '../../context';
import './styles.scss';

class Hero extends React.Component {
	static contextType = ThemeContext;

	render() {
		return (
			<section
				id={`${this.props.id}`}
				className="about"
				style={{ height: this.context.height }}
			>
				{this.particles()}
				<Row>
					<Col md={6} className="content">
						<div className="content-text">
							<div className="line-text">
								<h4>A propos de moi</h4>
							</div>
							<h3>Je suis développeur web basé à Lyon</h3>
							<div className="separator" />
							<p>
								Formé chez O'clock durant l'année 2021, j'ai une
								base solide de connaissances dans le
								développement web et web mobile. Orienté
								davantage front-end, je maîtrise HTML5, CSS3 et
								ReactJS avec Redux. J'ai néanmoins un
								savoir-faire en back-end avec Node.js et les
								SGBD tel que SQL | PostgreSQL | MongoDB.
							</p>
							<div className="social social_icons">
								<FontAwesomeIcon
									icon={faGithub}
									className="social_icon"
									onClick={() =>
										window.open(
											'https://github.com/reredemir'
										)
									}
								/>
								<FontAwesomeIcon
									icon={faTwitter}
									className="social_icon"
									onClick={() =>
										window.open(
											'https://twitter.com/reredemir'
										)
									}
								/>
								<FontAwesomeIcon
									icon={faLinkedin}
									className="social_icon"
									onClick={() =>
										window.open(
											'https://www.linkedin.com/in/remidemir/'
										)
									}
								/>
							</div>
						</div>
					</Col>
					<Col md={6} className="skills">
						<div className="line-text">
							<h4>Mes compétences</h4>
						</div>
						<div className="skills-container">
							<Progress
								name="ReactJS - Redux"
								value={90}
								delay={1100}
							/>
							<Progress
								name="Node.js - Express"
								value={70}
								delay={1100}
							/>
							<Progress
								name="ES6 - HTML5 - CSS3"
								value={80}
								delay={1100}
							/>
							<Progress
								name="SQL - PostgreSQL"
								value={60}
								delay={1100}
							/>
							<Progress name="MongoDB" value={30} delay={1100} />
							<Progress name="Anglais" value={90} delay={1100} />
						</div>
					</Col>
				</Row>
			</section>
		);
	}

	particles() {
		return (
			<Particles
				className="particles"
				params={{
					particles: {
						number: {
							value: 50,
							density: {
								enable: false,
								value_area: 5000,
							},
						},
						line_linked: {
							enable: true,
							opacity: 0.5,
						},
						size: {
							value: 1,
						},
					},
					retina_detect: true,
				}}
			/>
		);
	}
}

export default Hero;
