import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {}

function Footer() {
  return React.createElement("footer", null, "We're currently open!");
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"></img>
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, ham, aragula, and burrata cheese</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
