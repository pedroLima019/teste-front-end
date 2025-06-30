import "../styles/Category.scss";

export const Category = () => {
  return (
    <section className="category_container" aria-label="Categorias de produtos">
      <ul className="category_list">
        <li className="banner">
          <div className="banner_img">
            <img src="/image/image.png" alt="Categoria de Tecnologia" />
          </div>
          <p>Tecnologia</p>
        </li>
        <li className="banner">
          <div className="banner_img">
            <img
              src="/image/supermercados 1.png"
              alt="Categoria de Supermercado"
            />
          </div>
          <p>Supermercado</p>
        </li>
        <li className="banner">
          <div className="banner_img">
            <img src="/image/whiskey.png" alt="Categoria de Bebidas" />
          </div>
          <p>Bebidas</p>
        </li>
        <li className="banner">
          <div className="banner_img">
            <img
              src="/image/ferramentas 1.png"
              alt="Categoria de Ferramentas"
            />
          </div>
          <p>Ferramentas</p>
        </li>
        <li className="banner">
          <div className="banner_img">
            <img
              src="/image/cuidados-de-saude 1.png"
              alt="Categoria de Saúde"
            />
          </div>
          <p>Saúde</p>
        </li>
        <li className="banner">
          <div className="banner_img">
            <img src="/image/corrida 1.png" alt="Categoria de Esportes" />
          </div>
          <p>Esportes</p>
        </li>
        <li className="banner">
          <div className="banner_img">
            <img src="/image/moda 1.png" alt="Categoria de Moda" />
          </div>
          <p>Moda</p>
        </li>
      </ul>
    </section>
  );
};

export default Category;
