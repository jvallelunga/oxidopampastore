import React from 'react';

import boker from './images/boker.jpg';
import chinchulin from './images/chinchulin.jpg';
import elchaja from './images/elchaja.jpg';
import gamuza from './images/gamuza.jpg';
import humos from './images/humos.jpg';
import mimicosta from './images/mimicosta.jpg';
import ofen from './images/ofen.jpg';
import peugeot from './images/peugeot.jpg';
import stanley from './images/stanley.jpg';
import stolberg from './images/stolberg.jpg';
import tramontina from './images/tramontina.jpg';
import trento from './images/trento.jpg';
import waterdog from './images/waterdog.jpg';

import BRANDS from './brands.json';
import "./styles.css";
const ABSOLUTE_URL = process.env.NODE_ENV === 'production' ? 'https://oxidopampastore.vercel.app' : 'http://localhost:3000';

const IMAGES = {
  boker,
  chinchulin,
  elchaja,
  gamuza,
  humos,
  mimicosta,
  ofen,
  peugeot,
  stanley,
  stolberg,
  tramontina,
  trento,
  waterdog,
};

function Brands() {
  return (
    <div className="brands">
      { BRANDS.map(brand => (<a
          className={brand.name}
          href={brand.href || `/${brand.name}`}
        >
          <img src={`${ABSOLUTE_URL}${IMAGES[brand.name]}`} alt={brand.name} />
        </a>)
      )}
    </div>
  );
}

export default Brands;
