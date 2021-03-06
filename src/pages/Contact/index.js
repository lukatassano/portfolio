import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

import { Container } from "./styles";

function Contact() {
  return (
    <Container id="contact">
      <div>
        <h1>Contato</h1>
        <div className="icons">
          <a href="mailto:lukatassano070@gmail.com">
            <FiMail className="email" size={50} />
          </a>
          <a href="https://www.facebook.com/luka.tassano/">
            <FaFacebook className="facebook" size={50} />
          </a>
          <a href="https://github.com/lukatassano">
            <FaGithub className="github" size={50} />
          </a>
          <a href="https://www.linkedin.com/in/luka-avila-tassano-06aa52160/">
            <FaLinkedin className="linkedin" size={50} />
          </a>
          <a href="whatsapp://send?phone=5551982668640">
            <FaWhatsapp className="whatsapp" size={50} />
          </a>
        </div>

        <div className="buttons">
          <Link to="/cv">
            <div className="btn btn-one">
              <span>Currículo</span>
            </div>
          </Link>
          <a href="#home">
            <div className="btn btn-one">
              <span>Voltar</span>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Contact;
