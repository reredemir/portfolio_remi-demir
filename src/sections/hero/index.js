import React from 'react';
import './styles.scss';
import { StaticQuery, graphql } from 'gatsby';
import { Row, Col } from 'react-bootstrap';
import Glitch from 'components/glitch';
import Typewriter from 'typewriter-effect';
import ThemeContext from '../../context';
class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section id={`${this.props.id}`} className="hero" style={{ height: this.context.height }}>
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>Bonjour, je suis</h4>
              </div>
              <Glitch text="Rémi Demir" />
              <div className="content-typewriter">
                <div className="content-line">Développeur</div>
                <Typewriter
                  options={{
                    strings: ['Web', 'React', 'Node'],
                    deleteChars: 5,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <button className="hover-button">
                <a
                  href={
                    'https://drive.google.com/file/d/1wORK0VOLvNOc0vQtPX_N1CgqNSLaaggE/view?usp=sharing'
                  }
                  target="_blank"
                  rel="noreferrer"
                >
                  Mon CV
                </a>
              </button>
            </div>
            {this.icons()}
          </Col>
          <Col md={6} className="photo">
            <img src={this.props.mainImg.childImageSharp.fluid.src} alt="person" />
          </Col>
        </Row>
      </section>
    );
  }

  icons() {
    return this.props.icons.edges.map((value, index) => {
      return (
        <img
          src={value.node.childImageSharp.fluid.src}
          className={`animated fadeIn move-${
            Math.floor(Math.random() * 10) % 2 === 0 ? 'up' : 'down'
          } float-image`}
          style={{
            left: `${index * 10}%`,
            bottom: `${
              Math.random() * (+(index % 2 === 0 ? 80 : 20) - +(index % 2 === 0 ? 70 : 10)) +
              +(index % 2 === 0 ? 70 : 10)
            }%`,
          }}
          alt="shape"
          key={index}
        />
      );
    });
  }
}

export default (props) => (
  <StaticQuery
    query={graphql`
      query {
        icons: allFile(
          filter: { extension: { regex: "/(png)/" }, relativeDirectory: { eq: "icons" } }
        ) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 100) {
                  src
                }
              }
            }
          }
        }
        Img: file(relativePath: { eq: "person.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              src
            }
          }
        }
      }
    `}
    render={({ icons, Img }) => <Hero icons={icons} mainImg={Img} {...props} />}
  />
);
