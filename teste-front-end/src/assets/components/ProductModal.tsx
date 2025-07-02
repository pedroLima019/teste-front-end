import type { Product } from "../types/Product";
import "../styles/ProductModal.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ProductModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="modal-legends">
          <div className="modal-image">
            <img src={product.photo} alt={product.productName} />
          </div>
          <div className="modal-details">
            <h2>{product.productName}</h2>
            <strong>
              R${" "}
              {product.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </strong>
            <p>{product.descriptionShort}</p>

            <a href="#" className="modal-link">
              Veja mais detalhes do produto &gt;
            </a>

            <div className="modal-quantity">
              <div className="input-wrapper">
                <button className="btn-minus">-</button>
                <input type="text" defaultValue={1} min={1} />
                <button className="btn-plus">+</button>
              </div>
              <button className="modal-buy">COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
