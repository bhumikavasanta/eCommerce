import React from 'react';
import './styles.css';
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section>
      <div className="container">
        <div>
          <h2>404</h2>
          <h3>UH OH! You're lost.</h3>
          <p>
            The page you are looking for does not exist. Click the button below to go back to the
            homepage.
          </p>

          <NavLink to="/">
            <button>Go Back to Home</button>
          </NavLink>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage