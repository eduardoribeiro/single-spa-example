import React from "react";

export default function Root(props) {
  return (
    <header className="masthead mb-auto">
      <div className="inner">
        <a className="blog-logo" href="/">
          <img
            style={{ maxWidth: "40px" }}
            src="https://single-spa.js.org/img/logo-white-bgblue.svg"
            alt="LogRocket Blog"
          />{" "}
          SuperNova Docs
        </a>
        <nav className="nav nav-masthead justify-content-center">
          <a
            className={`nav-link ${location.pathname === "/" && "active"}`}
            href="/"
          >
            Home
          </a>
          <a
            className={`nav-link ${location.pathname === "/design-system" && "active"}`}
            href="/design-system"
          >
            Design System
          </a>
          <a
            className={`nav-link ${
              location.pathname === "/components" && "active"
            }`}
            href="/components"
          >
            Components
          </a>
        </nav>
      </div>
    </header>
  );
}