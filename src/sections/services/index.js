import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import BaffleText from 'components/baffle-text';
import AnimationContainer from 'components/animation-container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import {
  faPencilRuler,
  faRulerCombined,
  faVial,
  faDatabase,
} from '@fortawesome/free-solid-svg-icons';
// import Counter from 'components/counter';
import ThemeContext from '../../context';
import './styles.scss';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.show = this.show.bind(this);
  }

  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  render() {
    return (
      <section id={`${this.props.id}`} className="services" style={{ height: this.context.height }}>
        <Row
          className="top"
          style={{
            maxHeight: this.context.height !== 'auto' ? this.context.height * 0.8 : 'inherit',
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="Ce que je fait"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight: this.context.height !== 'auto' ? this.context.height * 0.8 : 'inherit',
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        {/* <Row className="bottom">{this.counters()}</Row> */}
      </section>
    );
  }

  services() {
    if (this.state.show || this.context.height === 'auto') {
      return (
        <div>
          <Row>
            <Col md={4} className="service">
              <AnimationContainer delay={200} animation="fadeInLeft fast">
                <div className="icon">
                  <FontAwesomeIcon icon={faReact} />
                </div>
                <h4>Front-end React</h4>
              </AnimationContainer>
            </Col>
            <Col md={4} className="service border-side">
              <AnimationContainer delay={400} animation="fadeInDown fast">
                <div className="icon">
                  <FontAwesomeIcon icon={faNodeJs} />
                </div>
                <h4>Back-end Node</h4>
              </AnimationContainer>
            </Col>
            <Col md={4} className="service">
              <AnimationContainer delay={600} animation="fadeInRight fast">
                <div className="icon">
                  <FontAwesomeIcon icon={faDatabase} />
                </div>
                <h4>SGBD</h4>
              </AnimationContainer>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="service">
              <AnimationContainer delay={800} animation="fadeInLeft fast">
                <div className="icon">
                  <FontAwesomeIcon icon={faPencilRuler} />
                </div>
                <h4>UI/UX Design</h4>
              </AnimationContainer>
            </Col>
            <Col md={4} className="service border-side">
              <AnimationContainer delay={1000} animation="fadeInUp fast">
                <div className="icon">
                  <FontAwesomeIcon icon={faVial} />
                </div>
                <h4>Tests unitaires</h4>
              </AnimationContainer>
            </Col>
            <Col md={4} className="service">
              <AnimationContainer delay={1200} animation="fadeInRight fast">
                <div className="icon">
                  <FontAwesomeIcon icon={faRulerCombined} />
                </div>
                <h4>Intégration</h4>
              </AnimationContainer>
            </Col>
          </Row>
        </div>
      );
    }
  }

  // counters() {
  // 	if (this.state.show || this.context.height === 'auto') {
  // 		return (
  // 			<Container>
  // 				<Col md={3}>
  // 					<AnimationContainer delay={100} animation="fadeIn fast">
  // 						<Counter
  // 							icon={faSmileBeam}
  // 							value={100}
  // 							text="Happy Clients"
  // 							symbol="+"
  // 							duration={3}
  // 						/>
  // 					</AnimationContainer>
  // 				</Col>
  // 				<Col md={3}>
  // 					<AnimationContainer delay={100} animation="fadeIn fast">
  // 						<Counter
  // 							icon={faPizzaSlice}
  // 							value={1000}
  // 							text="Pizzas Ordered"
  // 							symbol="+"
  // 							duration={3}
  // 						/>
  // 					</AnimationContainer>
  // 				</Col>
  // 				<Col md={3}>
  // 					<AnimationContainer delay={100} animation="fadeIn fast">
  // 						<Counter
  // 							icon={faQuoteRight}
  // 							value={500}
  // 							text="Reviews"
  // 							symbol="+"
  // 							duration={3}
  // 						/>
  // 					</AnimationContainer>
  // 				</Col>
  // 				<Col md={3}>
  // 					<AnimationContainer delay={100} animation="fadeIn fast">
  // 						<Counter
  // 							icon={faCode}
  // 							value={50000}
  // 							text="Lines of Code"
  // 							symbol="+"
  // 							duration={3}
  // 						/>
  // 					</AnimationContainer>
  // 				</Col>
  // 			</Container>
  // 		);
  // 	}
  // }
}

export default Services;
