import { pageLoad }  from './page-load';
import { menu } from './menu';
import { contact } from './contact';

// load content
pageLoad();
menu();
contact();


//select button
const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', handleTabbing);
});
// tabbing function
function handleTabbing(e){
    let click = e.target.innerHTML;
    const tabcontent = document.querySelectorAll('.tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    document.querySelector(`#${click}`).style.display = 'block'
}

document.querySelector('.Home').click()
