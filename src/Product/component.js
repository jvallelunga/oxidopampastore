import React, { useState } from 'react';

import Customizable from './images/customizable.png';

import "./styles.css";
const ABSOLUTE_URL = process.env.NODE_ENV === 'production' ? 'https://oxidopampastore.vercel.app' : 'http://localhost:3000';

function Product({ list }) {
  const [name, setName] = useState('');
  const [tags, setTags] = useState([]);
  let retry = 3;
  const fetchTags = function(timeout) {
    setTimeout(function(){
      if (window.LS) {
        setTags(window.LS.product.tags);
        setName(window.LS.product.name);
      } else if (retry) {
        retry--;
        fetchTags(timeout * 2);
      }
    }, timeout);
  }
  fetchTags(200);

  const items = list.split('<li>').join('').split('</li>').map(item => item.trim()).filter(item => !!item);
  const output = [<ul key="features" className="fa-ul">
    { items.map((item, index) => (<li key={index}>
      <span className="fa-li"><i className="fas fa-burn"></i></span>
      <div class="html" dangerouslySetInnerHTML={{ __html: item }} />
    </li>)) }
  </ul>];

  if (name.toLowerCase().endsWith('customizable')) {
    output.push(<div key="customizable" className="customizable">
      <img src={`${ABSOLUTE_URL}${Customizable}`} alt="customizable" />
      <span>Este producto posee la opcion de ser fabricado a medida y/o con modificaciones. Elija la variante customizable para ponerse en contacto no nosotros.</span>
    </div>);
  }

  if (tags.includes('demora')) {
    output.push(<div key="delay" className="delay">
      <i className="fas fa-history"></i>
      <span>La entrega del producto puede demorarse hasta 14 dias habiles, dependiendo la disponibilidad del mismo.</span>
    </div>);
  }

  return output;
}

export default Product;
