import React from 'react';

function AboutMe() {
  return (
    <section id="sobre-mim">
      <div id="card">
        <div id="left">
          <h1 className="emphasis">Sobre mim</h1>
          <p>
            Sou estudante de Sistemas para Internet (3/5) na Universidade Católica de Pernambuco,
            com formação técnica em Manutenção e Suporte em Informática. Com experiência em diversas
            áreas do desenvolvimento de software, possuo um sólido conhecimento em desenvolvimento
            web, utilizando HTML, CSS, JavaScript, Bootstrap e React para criar interfaces modernas e dinâmicas.
          </p>
          <p>
            Minhas habilidades também incluem prototipação e design com ferramentas como Figma, Photoshop e Canva,
            além de trabalhar com versionamento de código utilizando Git e GitHub para gerenciamento de projetos.
            No campo de análise de dados, tenho experiência no uso de Excel, ElephantSQL e PowerBI para realizar
            manipulação e visualização de dados de maneira eficiente.
          </p>
          <p>
            Possuo conhecimento básico em Java e Python e sigo aprimorando minhas habilidades em programação.
            Atualmente, concilio meus estudos no período noturno com o desenvolvimento de projetos pessoais e acadêmicos.
          </p>
          <h2>Tecnologias</h2>
          <div id="tecnologias">
            <div id="html" className="hover-effect">
              <img src="imgs/64px-HTML5_Badge.svg.png" height="35" alt="HTML" />
              <p>HTML</p>
            </div>
            <div id="css" className="hover-effect">
              <img src="imgs/64px-CSS3_logo.svg.png" height="35" alt="CSS" />
              <p>CSS</p>
            </div>
            <div id="javascript" className="hover-effect">
              <img src="imgs/64px-Unofficial_JavaScript_logo_2.svg.png" height="35" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div id="java" className="hover-effect">
              <img src="imgs/4373217_java_logo_logos_icon.png" height="35" alt="Java" />
              <p>Java</p>
            </div>
            <div id="python" className="hover-effect">
              <img src="imgs/64px-Python-logo.png" height="35" alt="Python" />
              <p>Python</p>
            </div>
            <div id="react" className="hover-effect">
              <img src="imgs/64px-React-icon.svg.png" height="35" alt="React" />
              <p>React</p>
            </div>
            <div id="bootstrap" className="hover-effect">
              <img src="imgs/64px-Bootstrap_logo.svg.png" height="35" alt="Bootstrap" />
              <p>BootStrap</p>
            </div>
          </div>
        </div>
        <div id="right">
          <img src="/imgs/me.png" height="300px" alt="Eduardo Fonseca" />
          <h1>Eduardo Fonseca</h1>
          <h3>&lt;/Estudante de Sistemas para Internet&gt;</h3>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
