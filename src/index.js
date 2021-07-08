import './js/input-change'
import menu from './data/menu.json';
import menuCards from './templates/menu-items.hbs';
import refs from './js/refs';

// Create markup (вставка в меню в разметку)
const markup = menuCards(menu);
refs.menuList.insertAdjacentHTML('beforeend', markup)