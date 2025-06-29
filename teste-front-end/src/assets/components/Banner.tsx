import "../styles/Banner.scss";

export const Banner = () => {
  return (
    <section className="banner_container">
      <div className="text_container">
        <h2>Venha conhecer nossas promoções</h2>
        <p>
          <strong>50% Off</strong>nos produtos
        </p>
        <button className="viewProducts">Ver produtos</button>
      </div>
    </section>
  );
};

export default Banner;
