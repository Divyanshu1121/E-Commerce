import React from "react";

function Navbar({ cartItemCount = 0 }) {
    return (
        <div
            style={{
                backgroundColor: "#333",
                padding: "1rem",
                color: "white",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                marginBottom: "20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxShadow: "0px 4px 8px grey",
            }}
        >
            <h1 style={{ margin: "0", fontSize: "24px", alignItems: "center" }}>E-Commerce Store</h1>
            <div style={{ position: "relative", cursor: "pointer" }}>
                🛒
                {cartItemCount > 0 && (
                    <span
                        style={{
                            position: "absolute",
                            top: "-5px",
                            right: "-10px",
                            backgroundColor: "red",
                            color: "white",
                            borderRadius: "50%",
                            padding: "3px 7px",
                            fontSize: "12px",
                            fontWeight: "bold",
                        }}
                    >
                        {cartItemCount}
                    </span>
                )}
            </div>
        </div>
    );
}

export default Navbar;
