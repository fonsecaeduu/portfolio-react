import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
  <li>
    <Link to="/">
      <i className="fas fa-user"></i> Sobre Mim
    </Link>
  </li>
  <li>
    <Link to="/projects">
      <i className="fas fa-project-diagram"></i> Projetos
    </Link>
  </li>
  <li>
    <Link to="/contact">
      <i className="fas fa-envelope"></i> Contato
    </Link>
  </li>
  <li>
    <Link to="/bulls-and-cows">
      <i className="fas fa-gamepad"></i> Bulls and Cows
    </Link>
  </li>
</ul>
    </nav>
  );
}

export default Nav;

{/* <a href="mailto:jfonsecaedu@gmail.com" target="_blank">
            <i class="fas fa-envelope"></i>
            E-mail
        </a>
        <a href="https://github.com/fonsecaeduu" target="_blank">
            <i class="fab fa-github"></i>
            Github
        </a>
        <a href="https://linkedin.com/in/eduardoj-fonseca" target="_blank">
            <i class="fab fa-linkedin"></i>
            Linked-in
        </a>
        <a href="https://wa.me/5581991886626" target="_blank">
            <i class="fab fa-whatsapp"></i>
            Whatsapp
        </a> */}