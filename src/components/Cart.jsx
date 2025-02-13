import React from "react";

function Cart({ items, onRemoveFromCart, onRemoveAllFromCart }) {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div style={{ marginTop: "30px", padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
            <h2 style={{ margin: "0 0 20px 0", textAlign: "center" }}>Shopping Cart</h2>

            {items.length === 0 ? (
                <p style={{ textAlign: "center", color: "#555" }}>Your cart is empty.</p>
            ) : (
                items.map((item) => (
                    <div key={item.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "15px", padding: "10px", borderBottom: "1px solid #ddd" }}>

                        <img src={item.image} alt={item.name} style={{ width: "50px", borderRadius: "5px", marginRight: "15px" }} />

                        <div style={{ flexGrow: 1 }}>
                            <p style={{ margin: "5px 0", fontWeight: "bold" }}>{item.name}</p>
                            <p style={{ margin: "5px 0", color: "#555" }}>
                                ${item.price} x {item.quantity}
                            </p>
                        </div>

                        <button
                            onClick={() => onRemoveFromCart(item.id)}
                            style={{
                                backgroundColor: "orange",
                                color: "white",
                                padding: "5px 10px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                marginRight: "5px",
                            }}
                        >
                            -1
                        </button>

                        <button
                            onClick={() => onRemoveAllFromCart(item.id)}
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "5px 10px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Remove All
                        </button>
                    </div>
                ))
            )}
            {items.length > 0 && <h3 style={{ textAlign: "center", marginTop: "20px" }}>Total: ${total.toFixed(2)}</h3>}
        </div>
    );
}

export default Cart;
