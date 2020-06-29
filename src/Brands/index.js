import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

// BRANDS
export default () => {
  const wrapper = document.querySelector('.video-wrapper');
  if (wrapper) {
    var brands = document.createElement('div');
    brands.setAttribute('id', 'brands');
    wrapper.parentNode.insertBefore(brands, wrapper);
    
    ReactDOM.render(<Component />, document.getElementById('brands'));
  }
}
