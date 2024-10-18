import './style.css';
import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadContact } from './contact';

function initializePage() {
    loadHome();

    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    homeBtn.addEventListener('click', loadHome);
    menuBtn.addEventListener('click', loadMenu);
    contactBtn.addEventListener('click', loadContact);
}

document.addEventListener('DOMContentLoaded', initializePage);
