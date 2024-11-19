import React from 'react';

function Skills() {
  return (
    <section id="sobre-mim">
      <div id="card">
        <div id="left">
          <h1 className="emphasis">Sobre mim</h1>
          <p>Sou estudante de Sistemas para Internet...</p>
          <h2>Tecnologias</h2>
          <div id="tecnologias">
            <div id="html" className="hover-effect">
              <img src="/imgs/64px-HTML5_Badge.svg.png" height="35" alt="HTML" />
              <p>HTML</p>
            </div>
            <div id="css" className="hover-effect">
              <img src="/imgs/64px-CSS3_logo.svg.png" height="35" alt="CSS" />
              <p>CSS</p>
            </div>
            <div id="javascript" className="hover-effect">
              <img src="/imgs/64px-Unofficial_JavaScript_logo_2.svg.png" height="35" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div id="java" className="hover-effect">
              <img src="/imgs/4373217_java_logo_logos_icon.png" height="35" alt="Java" />
              <p>Java</p>
            </div>
            <div id="python" className="hover-effect">
              <img src="/imgs/64px-Python-logo.png" height="35" alt="Python" />
              <p>Python</p>
            </div>
            <div id="react" className="hover-effect">
              <img src="/imgs/64px-React-icon.svg.png" height="35" alt="React" />
              <p>React</p>
            </div>
            <div id="bootstrap" className="hover-effect">
              <img src="/imgs/64px-Bootstrap_logo.svg.png" height="35" alt="Bootstrap" />
              <p>BootStrap</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
