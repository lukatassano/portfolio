import React from "react";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import { Container, Logo, Buttons } from "./styles";

function App() {
  return (
    <>
      <Container className="container" id="home">
        <Logo>
          <svg
            id="logo"
            width="522"
            height="107"
            viewBox="0 0 522 107"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56.6641 99.7031H6.42182L23.3365 1.71005L23.4374 1.125H22.8438H18.9766H18.5557L18.4839 1.53973L0.765137 103.915L0.66384 104.5H1.25781H56.1719H56.6112L56.6677 104.064L57.1599 100.267L57.2331 99.7031H56.6641ZM222.116 1.70989L222.216 1.125H221.623H217.826H217.405L217.333 1.54017L205.591 69.7433L205.591 69.7436C203.968 79.2046 199.871 86.7847 193.31 92.514L193.308 92.5152C186.793 98.2445 179.06 101.109 170.084 101.109C161.532 101.109 155.056 98.3196 150.575 92.7884C146.091 87.2066 144.532 80.0017 145.967 71.1065C145.968 71.1054 145.968 71.1043 145.968 71.1031L157.92 1.70987L158.021 1.125H157.427H153.701H153.28L153.208 1.53965L141.185 70.9381L141.184 70.9429C140.094 77.6247 140.588 83.6703 142.688 89.0642C144.789 94.4594 148.234 98.6255 153.019 101.544C157.798 104.46 163.494 105.906 170.084 105.906C180.462 105.906 189.301 102.704 196.571 96.289C203.838 89.8766 208.388 81.3318 210.233 70.687L210.233 70.6864L222.116 1.70989ZM367.167 103.72L329.376 47.9053L381.638 2.07123L382.619 1.21088L381.314 1.19535L375.408 1.12504L375.216 1.12275L375.072 1.24938L326.422 43.9942L326.416 43.9994L308.631 59.1297L318.59 1.71045L318.691 1.125H318.097H314.3H313.879L313.808 1.54006L296.159 103.915L296.058 104.5H296.652H300.449H300.87L300.942 104.085L307.519 65.7383L325.723 50.9437L361.698 104.28L361.847 104.5H362.113H366.753H367.696L367.167 103.72ZM445.158 104.5H445.457L445.598 104.236L461.84 73.9141H509.642L515.401 104.094L515.478 104.5H515.892H519.9H520.505L520.391 103.906L500.703 1.53058L500.624 1.11861L500.204 1.12506L495.634 1.19537L495.34 1.1999L495.201 1.45955L440.498 103.764L440.104 104.5H440.939H445.158ZM464.345 69.1172L497.239 7.8925L508.68 69.1172H464.345Z"
              stroke="white"
            />
          </svg>
        </Logo>

        <Buttons>
          <a href="#about">
            <div className="btn btn-one">
              <span>Sobre</span>
            </div>
          </a>
          <a href="#projects">
            <div className="btn btn-one">
              <span>Projetos</span>
            </div>
          </a>
          <a href="#contact">
            <div className="btn btn-one">
              <span>Contato</span>
            </div>
          </a>
        </Buttons>
      </Container>
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
