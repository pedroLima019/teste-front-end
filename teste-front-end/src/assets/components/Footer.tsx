import "../styles/Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <img
            src="/image/logo.png"
            alt="Logo da marca"
            className="footer-logo"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className="social-media">
            <img src="/image/instagram.png" alt="Instagram" />
            <img src="/image/facebook.png" alt="Facebook" />
            <img src="/image/linkedin.png" alt="Twitter" />
          </div>
        </div>

        <div className="footer-institucional">
          <nav className="footer-links">
            <p>Institucional</p>
            <ul>
              <li>
                <a href="/sobre">Sobre nós</a>
              </li>
              <li>
                <a href="/movimento">Movimento</a>
              </li>
              <li>
                <a href="/trabalhe-conosco">Trabalhe conosco</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-links">
            <p>Ajuda</p>
            <ul>
              <li>
                <a href="/suporte">Suporte</a>
              </li>
              <li>
                <a href="/contato">Fale conosco</a>
              </li>
              <li>
                <a href="/faq">Perguntas</a>
              </li>
            </ul>
          </nav>

          <nav className="footer-links">
            <p>Termos</p>
            <ul>
              <li>
                <a href="/termos">Termos e Condições</a>
              </li>
              <li>
                <a href="/privacidade">Política de Privacidade</a>
              </li>
              <li>
                <a href="/troca">Troca e Devolução</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-copy">
        <p>
          © {new Date().getFullYear()} Econverse. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
