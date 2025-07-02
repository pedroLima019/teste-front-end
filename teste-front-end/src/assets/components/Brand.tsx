import "../styles/Brand.scss";

export const Brand = () => {
  return (
    <section className="brand-container">
      <div className="brand-title">
        <h1>Navegue por marcas</h1>
      </div>
      <ul className="brands-section">
        <li className="brand-card">
          <img
            src="/image/logo.png"
            alt="Logo da marca"
          />
        </li>
        <li className="brand-card">
          <img
            src="/image/logo.png"
            alt="Logo da marca"
          />
        </li>
        <li className="brand-card">
          <img
            src="/image/logo.png"
            alt="Logo da marca"
          />
        </li>
        <li className="brand-card">
          <img
            src="/image/logo.png"
            alt="Logo da marca"
          />
        </li>
        <li className="brand-card">
          <img
            src="/image/logo.png"
            alt="Logo da marca"
          />
        </li>
      </ul>
    </section>
  );
};

export default Brand;
