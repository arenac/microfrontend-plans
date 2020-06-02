import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './global/index.css';

class Plans extends HTMLElement {
  constructor() {
    super();
    this.update();
  }

  update() {
    let shadow = this.attachShadow({ mode: 'open'});
    ReactDOM.render(<App />, shadow);
  }
}

window.customElements.define('microfrontend-plans', Plans);
