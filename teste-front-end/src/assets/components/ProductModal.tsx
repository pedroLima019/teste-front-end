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
        <img src={product.photo} alt={product.productName} />
        <h2>{product.productName}</h2>
        <p>{product.descriptionShort}</p>
        <strong>
          R${" "}
          {product.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </strong>
        <button onClick={onClose}>Fechar</button>
      </div>
    </div>
  );
};

export default ProductModal;
