import React from "react";
import "./Footer.css";
const Footer = () => {
    return (
        <footer className="container-fluid fixed-bottom bg-primary text-center">
            <div className="row">
                <div className="col">
                    <a
                        href="#"
                        className="text-white text-center"
                        style={{ textDecoration: "none" }}
                    >
                        Home
                    </a>
                </div>
                <div className="col">
                    <a
                        href="#"
                        className="text-white text-center "
                        style={{ textDecoration: "none" }}
                    >
                        Price
                    </a>
                </div>
                <div className="col">
                    <a
                        href="#"
                        className="text-white text-center"
                        style={{ textDecoration: "none" }}
                    >
                        FAQ
                    </a>
                </div>
                <div className="col">
                    <a
                        href="#"
                        className="text-white text-center"
                        style={{ textDecoration: "none" }}
                    >
                        About
                    </a>
                </div>
                <div className="col">
                    <a
                        href="#"
                        className="text-white text-center"
                        style={{ textDecoration: "none" }}
                    >
                        Features
                    </a>
                </div>
            </div>
            <div className="row">
                <div className="text-center text-wrap mt-2 mb-2 text-uppercase border-top border-warning">
                    @ 2022 Company,Inc
                </div>
            </div>
        </footer>
    );
};
export default Footer;
