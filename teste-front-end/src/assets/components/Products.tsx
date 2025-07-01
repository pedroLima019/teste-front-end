import { useState, useEffect } from "react";
import "../styles/Products.scss";
import { type Product } from "../types/Product";
import ProductModal from "../components/ProductModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch("/products.json")
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao buscar produtos");
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <section className="products_container">
      <h1>Produtos Relacionados</h1>

      <nav className="products_category" aria-label="Categorias de produtos">
        <ul className="category_list">
          <li>
            <button type="button">Celular</button>
          </li>
          <li>
            <button type="button">Acessórios</button>
          </li>
          <li>
            <button type="button">Tablets</button>
          </li>
          <li>
            <button type="button">Notebooks</button>
          </li>
          <li>
            <button type="button">TVs</button>
          </li>
          <li>
            <button type="button">Ver todos</button>
          </li>
        </ul>
      </nav>

      <div className="product_carousel">
        <Swiper
          modules={[Navigation]}
          loop={true}
          navigation
          grabCursor={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className="product_card"
                onClick={() => setSelectedProduct(product)}
              >
                <img src={product.photo} alt={product.productName} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="old_price">R$ 30,90</p>
                <h3 className="price">R$ {product.price.toFixed(2)}</h3>
                <p className="installments">
                  ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros
                </p>
                <p className="shipping">Frete grátis</p>
                <button className="buy_button">COMPRAR</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
};

export default Products;
