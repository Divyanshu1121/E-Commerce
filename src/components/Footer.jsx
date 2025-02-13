import React from 'react'

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#222",
                color: "#fff",
                textAlign: "center",
                padding: "20px",
                marginTop: "40px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>E-Commerce Store</p>
            <p style={{ fontSize: "14px" }}>© {new Date().getFullYear()} All Rights Reserved</p>
            <div style={{ marginTop: "10px", display: "flex", gap: "15px" }}>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Privacy Policy</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Terms of Service</a>
                <a href="#" style={{ color: "#fff", textDecoration: "none" }}>Contact Us</a>
            </div>
        </footer>
    );
}

export default Footer