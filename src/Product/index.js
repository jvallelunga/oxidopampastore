import React from 'react';
import ReactDOM from 'react-dom';
import Component from './component';

// PRODUCTS
export default () => {
  const wrapper = document.querySelector('.product-description ul');
  if (wrapper) {
    const list = wrapper.innerHTML;
    const features = document.createElement('div');
    features.setAttribute('id', 'features');
    wrapper.parentNode.insertBefore(features, wrapper);
    
    ReactDOM.render(<Component list={list} />, document.getElementById('features'));
    wrapper.parentNode.removeChild(wrapper);
  }
}
