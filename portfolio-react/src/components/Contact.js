import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contato</h2>
      <ul>
        <li>
          <a href="mailto:jfonsecaedu@gmail.com" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i> E-mail
          </a>
        </li>
        <li>
          <a href="https://github.com/fonsecaeduu" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/eduardoj-fonseca" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> Linked-in
          </a>
        </li>
        <li>
          <a href="https://wa.me/5581991886626" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-whatsapp"></i> Whatsapp
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
