console.log('connected menu');
function menu(){
    // dish names
    const name = [
        "Tagliatelle alla Bolognese", "Ziti alla Norma", "Pasta al Pesto", "Agnolotti del Plin", "Orecchiette con Cime di Rapa",
        "Lo Spaghetto al Pomodoro", "Pappardelle ai Funghi", "Pasta all'Arrabbiata", "Lasagne alla Bolognese", "Spaghetti alle Vongole"

    ]
    //image url
    const images = [
        'https://www.eataly.com/wp/wp-content/uploads/2017/02/tagliatelle-al-ragu-pasta-web.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2015/11/ziti-with-roasted-eggplant-and-ricotta-cheese-800x712.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2018/04/Magazine_pestopenne.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2016/10/eataly-bottoms-up-agnolotti-del-plin-red-wine-glasses.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2018/02/orecchiette-cime-di-rapa.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2019/02/2019_02_February_SpaghettiPomodoro_Version2_03.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2016/02/Pappardelle.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2016/06/Pasta-Penne-allarrabbiata.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2017/07/lasagne_021.jpg',
        'https://www.eataly.com/wp/wp-content/uploads/2017/03/eataly-flatiron-spaghetti-alle-vongole-sideshot.jpeg'
    ]
    // dish description
    const description = [
        "Our top pasta recipe? It had to be ragù served over silken egg tagliatelle, a signature dish of Bologna, the food-loving capital city of Emilia-Romagna. In fact, this rich, meaty tomato ragù is so closely associated with Bologna that any dish described as Bolognese will be cloaked in it.",
        "If there is one recipe that will make you feel like you're eating at nonna's, this is it. Made with eggplant, ricotta, and chunky tomato sauce, this recipe comes straight from beloved Chef Lidia Bastianich's comprehensive cookbook, Lidia's Mastering the Art of Italian Cuisine: Everything You Need to Know to Be a Great Italian Cook.",
        "Made with just seven ingredients, pesto alla genovese is one of Italy's finest exports when it comes to pasta sauces. For a truly Ligurian feast, pair your pesto with trofie or croxetti, two traditional shapes of this coastal Northwestern region.",
        "An iconic dish from Piemonte, Agnolotti del Plin gets its name from the regional dialect for “pinch,” which is how you made the pasta. This traditional version is stuffed with a savory mixture of veal and pork, and pairs naturally with a glass of Barolo.",
        "A traditional pasta from Puglia, these 'little ears' are the ideal shape for catching a delightfully bitter, savory sauce of broccoli rabe. Make this when broccoli rabe are in season to get the boldest flavors from your vegetable haul.",
        "Five simple ingredients, one revolutionary meal. If there is any dish that is truly iconic of Italian cuisine, this is it. For our tenth anniversary, our chefs in Italy spent months testing, tasting, and experimenting with different ingredients from our marketplace in order to create the perfect lo spaghetto al pomodoro",
        "Packed with umami flavor and a meaty texture, mushroom ragù pairs perfectly with the thick pappardelle for a classic dish from Toscana. In fact, the name for this pasta comes from a word in Tuscan dialect, 'pappare,' meaning to eat with pleasure – which you surely will!",
        "Cooked in an 'angry' tomato sauce, leave it to the Romans to give us this fiery dish. Quick and classic, this pasta recipe takes all of 30 minutes to throw together and brings an enjoyable kick to the table thanks to crushed red pepper",
        "A traditional dish from Emilia-Romagna, Lasagne alla Bolognese is made with egg pasta, creamy béchamel, and Bolognese ragù. A nearly perfect recipe, this dish has been loved by all for centuries – in fact, there is evidence that even the ancient Romans enjoyed an early version of this dish by the same name.",
        "Briny clams, white wine, garlic, and peperoncino create a light yet intensely flavorful sauce in this classic Neapolitan spaghetti dish. Look for the freshest clams possible (check with our fishmongers at your local Eataly for a recommendation), and high-quality, bronze-extruded pasta – the coarse texture will help the sauce cling to each strand."
    ]


    const container = document.createElement('div');
    container.setAttribute('class', 'container')
    const divMenu = document.querySelector('#Menu');
    // insert dishes in the DOM
    for(let i = 0; i < name.length; i++){
        const divItem = document.createElement('div');
        const divImg = document.createElement('div');
        divImg.setAttribute('class', 'setimage')
        //const img = document.createElement('img');
        const dishName = document.createElement('h3');
        const p = document.createElement('p');
        divImg.style.background = `url(${images[i]})`;
        divImg.style.backgroundSize = `cover`;
        dishName.innerHTML = name[i];
        p.innerHTML = description[i];
        //divImg.appendChild(img);
        divItem.appendChild(divImg);
        divImg.appendChild(dishName);
        divImg.appendChild(p);
        container.appendChild(divItem);
    }
    divMenu.appendChild(container);
}




export {menu}