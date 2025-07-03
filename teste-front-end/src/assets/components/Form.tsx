import "../styles/Form.scss";

export const Form = () => {
  return (
    <section className="form-container" aria-labelledby="newsletter-heading">
      <div className="form-wrapper">
        <div className="form-text">
          <h2 id="newsletter-heading">Inscreva-se na nossa newsletter</h2>
          <p>
            Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
            da Econverse.
          </p>
        </div>

        <form className="form-content">
          <div className="input-group">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Digite seu e-mail"
            />
            <button type="submit">INSCREVER</button>
          </div>

          <div className="checkbox">
            <input id="terms" type="checkbox" />
            <label htmlFor="terms">Aceito os termos e condições</label>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;

