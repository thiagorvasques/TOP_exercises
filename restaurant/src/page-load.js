console.log('connected pageload');
// load dom elements
function pageLoad(){
    const content = document.querySelector('#content');
    const buttons = ['Home', 'Menu', 'Contact'];
    const divs = ['Home', 'Menu', 'Contact'];
    const nav = document.createElement('nav');
    content.appendChild(nav);
    //add button to the nav tag
    buttons.forEach(item => {
        const button = document.createElement('button')
        button.innerHTML = item;
        button.className = `tab ${item}`
        nav.appendChild(button)
    });
    // add div to create section
    divs.forEach(item => {
        const div = document.createElement('div');
        div.id = `${item}`
        div.className = `tabcontent`;
        content.appendChild(div)
    });
    // add first page content (logo)
    const divHome = document.querySelector('#Home');
    const h1 = document.createElement('h1');
    const footer = document.createElement('footer')
    const a = document.createElement('a')
    const pastaSvg = document.createElement('img');
    const h3 = document.createElement('h3');
    pastaSvg.setAttribute('src', '/images/pasta.svg')
    h1.innerHTML = "Grandma's pasta"
    h3.innerHTML = 'Handmade Italian Cuisine'
    a.setAttribute('href', 'https://github.com/thiagorvasques')
    a.innerHTML = 'By Thiago R. Vasques'
    divHome.appendChild(h1);
    divHome.appendChild(pastaSvg)
    divHome.appendChild(h3)
    footer.className = 'footer'
    footer.appendChild(a);
    content.appendChild(footer)



}


export {pageLoad}
