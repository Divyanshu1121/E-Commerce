import React from "react";

function Products({ product, onAddToCart }) {
    return (
        <div
            style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "8px",
                width: "220px",
                backgroundColor: "white",
                textAlign: "center",
            }}
        >
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", borderRadius: "8px" }} />
            <h3 style={{ margin: "10px 0", color: "#333" }}>{product.name}</h3>
            <p style={{ color: "#666" }}>${product.price}</p>
            <button
                onClick={() => onAddToCart(product)}
                style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "8px 15px",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    width: "100%",
                }}
            >
                Add to Cart
            </button>
        </div>
    );
}

export default Products;
