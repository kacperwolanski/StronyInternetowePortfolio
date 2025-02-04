import React from "react";
import Policy from "./Policy";

const Footer = () => {
  return (
    <footer className="footer footer-center text-second text-base-content rounded">
      <nav className="grid grid-flow-col gap-4 pt-20">
        <a className="link link-hover" href="#home">
          Home
        </a>
        <a className="link link-hover" href="#portfolio">
          Portfolio
        </a>
        <a className="link link-hover" href="#kontakt">
          Kontakt
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-6 mt-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.282c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75c.967 0 1.75.783 1.75 1.75s-.783 1.75-1.75 1.75zm13.5 11.282h-3v-5.604c0-1.337-.027-3.059-1.862-3.059-1.863 0-2.15 1.455-2.15 2.958v5.705h-3v-10h2.88v1.366h.041c.402-.764 1.382-1.566 2.841-1.566 3.037 0 3.6 2 3.6 4.596v5.604z" />
            </svg>
          </a>

          <a
            href="mailto:your-email@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16l-8 5L4 6zm0 12V9l8 5 8-5v9H4z"></path>
            </svg>
          </a>

          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.254c-3.338.724-4.04-1.61-4.04-1.61-.546-1.387-1.334-1.756-1.334-1.756-1.09-.744.083-.73.083-.73 1.204.085 1.837 1.236 1.837 1.236 1.07 1.833 2.805 1.303 3.49.997.108-.777.42-1.303.762-1.603-2.665-.304-5.466-1.333-5.466-5.932 0-1.31.467-2.38 1.236-3.218-.124-.304-.536-1.527.116-3.18 0 0 1.01-.322 3.31 1.23a11.513 11.513 0 013.02-.405c1.024.005 2.056.137 3.02.405 2.3-1.553 3.31-1.23 3.31-1.23.652 1.653.24 2.876.116 3.18.77.838 1.236 1.908 1.236 3.218 0 4.61-2.807 5.624-5.479 5.921.43.372.813 1.102.813 2.222v3.293c0 .32.192.694.801.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      <Policy />
    </footer>
  );
};

export default Footer;
