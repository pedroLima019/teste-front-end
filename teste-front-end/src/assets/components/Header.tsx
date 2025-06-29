import "../styles/Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <div className="menu-container">
        <div className="menu-promotion">
          <div className="store-promotion">
            <img src="/image/ShieldCheck.png" alt="Compra 100% segura" />
            <p>
              Compra <strong>100% segura</strong>
            </p>
          </div>
          <div className="store-promotion">
            <img src="/image/Truck.png" alt="Frete grátis acima de 200 reais" />
            <p>
              <strong>Frete grátis</strong> acima de R$ 200
            </p>
          </div>
          <div className="store-promotion">
            <img src="/image/CreditCard.png" alt="Parcele suas compras" />
            <p>
              <strong>Parcele</strong> suas compras
            </p>
          </div>
        </div>

        <div className="menu-main">
          <div className="logo">
            <img src="/image/logo.png" alt="Logo Econverse" />
          </div>

          <form
            className="search-bar"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="search"
              id="search-input"
              placeholder="O que você está procurando?"
              aria-label="Buscar produtos"
            />
          </form>

          <div
            className="shop-icons"
            role="navigation"
            aria-label="Ícones de ações da loja"
          >
            <button aria-label="Ver devoluções">
              <img src="/image/devolucao.png" alt="" />
            </button>
            <button aria-label="Ver favoritos">
              <img src="/image/like.png" alt="" />
            </button>
            <button aria-label="Ver perfil do usuário">
              <img src="/image/UserCircle.png" alt="" />
            </button>
            <button aria-label="Ver carrinho de compras">
              <img src="/image/ShoppingCart.png" alt="" />
            </button>
          </div>
        </div>
        <div className="category">
          <nav
            className="category-container"
            aria-label="Navegação de categorias"
          >
            <ul className="category-list">
              <li>
                <button type="button">Todas categorias</button>
              </li>
              <li>
                <button type="button">Supermercado</button>
              </li>
              <li>
                <button type="button">Livros</button>
              </li>
              <li>
                <button type="button">Moda</button>
              </li>
              <li>
                <button type="button">Lançamento</button>
              </li>
              <li>
                <button type="button">Ofertas do Dia</button>
              </li>
              <li>
                <button type="button">
                  <img src="/image/assinatura.png" alt="Ícone de assinatura" />
                  Assinatura
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
