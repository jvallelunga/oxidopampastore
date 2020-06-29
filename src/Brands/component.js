import React from 'react';

import Boker from './images/boker.jpg';
import Chinchulin from './images/chinchulin.jpg';
import ElChaja from './images/elchaja.jpg';
import Gamuza from './images/gamuza.jpg';
import Humos from './images/humos.jpg';
import MimiCosta from './images/mimicosta.jpg';
import Ofen from './images/ofen.jpg';
import Peugeot from './images/peugeot.jpg';
import Stanley from './images/stanley.jpg';
import Stolberg from './images/stolberg.jpg';
import Tramontina from './images/tramontina.jpg';
import Trento from './images/trento.jpg';
import Waterdog from './images/waterdog.jpg';

import "./styles.css";
const ABSOLUTE_URL = process.env.NODE_ENV === 'production' ? 'https://oxidopampastore.vercel.app' : 'http://localhost:3000';

function Brands() {
  return (
    <div className="brands">
      <a className="boker" href="/boker">
        <img src={`${ABSOLUTE_URL}${Boker}`} alt="boker" />
      </a>
      <a className="chicnhulin" href="/chicnhulin">
        <img src={`${ABSOLUTE_URL}${Chinchulin}`} alt="chicnhulin" />
      </a>
      <a className="elchaja" href="/el-chaja">
        <img src={`${ABSOLUTE_URL}${ElChaja}`} alt="elchaja" />
      </a>
      <a className="gamuza" href="/gamuza">
        <img src={`${ABSOLUTE_URL}${Gamuza}`} alt="gamuza" />
      </a>
      <a className="humos" href="/humos">
        <img src={`${ABSOLUTE_URL}${Humos}`} alt="humos" />
      </a>
      <a className="mimicosta" href="/mimi-costa">
        <img src={`${ABSOLUTE_URL}${MimiCosta}`} alt="mimicosta" />
      </a>  
      <a className="ofen" href="/ofen">
        <img src={`${ABSOLUTE_URL}${Ofen}`} alt="ofen" />
      </a>
      <a className="peugeot" href="/peugeot">
        <img src={`${ABSOLUTE_URL}${Peugeot}`} alt="peugeot" />
      </a>
      <a className="stanley" href="/stanley">
        <img src={`${ABSOLUTE_URL}${Stanley}`} alt="stanley" />
      </a>
      <a className="stolberg" href="/stolberg">
        <img src={`${ABSOLUTE_URL}${Stolberg}`} alt="stolberg" />
      </a>
      <a className="tramontina" href="/tramontina">
        <img src={`${ABSOLUTE_URL}${Tramontina}`} alt="tramontina" />
      </a>
      <a className="trento" href="/trento">
        <img src={`${ABSOLUTE_URL}${Trento}`} alt="trento" />
      </a>
      <a className="waterdog" href="/waterdog">
        <img src={`${ABSOLUTE_URL}${Waterdog}`} alt="waterdog" />
      </a>
    </div>
  );
}

export default Brands;
