import './scss/style.scss';
import logoPng from "./assets/logo.png";

const logoImg = document.createElement('img');
logoImg.src = logoPng;
logoImg.alt = 'logo';
document.getElementById('logoImg').appendChild(logoImg);