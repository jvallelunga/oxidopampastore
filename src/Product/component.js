import React from 'react';

import Customizable from './images/customizable.png';

import "./styles.css";
const ABSOLUTE_URL = process.env.NODE_ENV === 'production' ? 'https://oxidopampastore.vercel.app' : 'http://localhost:3000';

var LS = LS || {};
function Product({ list }) {
  const items = list.split('<li>').join('').split('</li>').map(item => item.trim()).filter(item => !!item);
  const { product: { tags = [] } = {} } = LS;
  console.log(tags);

  const output = [<ul class="fa-ul">
    { items.map(item => (<li>
      <span class="fa-li"><i class="fas fa-burn"></i></span>{item}
    </li>)) }
  </ul>];

  if (tags.includes('customizable')) {
    output.push(<div class="customizable">
      <img src={`${ABSOLUTE_URL}${Customizable}`} alt="customizable" />
      <span>Este producto posee la opcion de ser fabricado a medida y/o con modificaciones. Elija la variante customizable para ponerse en contacto no nosotros.</span>
    </div>);
  }

  if (tags.includes('demora')) {
    output.push(<div class="delay">
      <i class="fas fa-history"></i>
      <span>La entrega del producto puede demorarse hasta 14 dias habiles, dependiendo la disponibilidad del mismo.</span>
    </div>);
  }

  return output;
}

export default Product;
