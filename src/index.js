import css from "./css/style.css";
import theme from "./components/theme.js"
import itemsTemplate from './templates/template.hbs';
import menu from "./menu.json";
console.log(menu);

const markup = itemsTemplate(menu); //створюю розмітку(масив страв пропускаю
// через шаблонізатор який записаний в змінну itemsTemplate))
// console.log(markup);
const ul = document.querySelector('.js-menu');//дістав посилання на ul з HTML.
ul.insertAdjacentHTML('beforeend', markup);// в ul вставляю розмітку markup яку прогнав 
// через шаблонізатор itemsTemplate

 theme()

