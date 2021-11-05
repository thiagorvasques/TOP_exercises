console.log('connected contact');
// create contact information
function contact(){
    const divContact = document.querySelector('#Contact');
    const divAdress = document.createElement('div');
    divAdress.setAttribute('class', 'address')
    const adress = document.createElement('h4');
    const open = document.createElement('h4');
    const phone = document.createElement('h4');
    const mail = document.createElement('h4');
    adress.innerHTML = "Mercado da Ribeira, Loja 1 Portugal-Porto";
    open.innerHTML = "Tues - Thurs: 6pm - 11am / Fri - Sat: 6pm - 1am";
    phone.innerHTML = "+351 123 456 789"
    mail.innerHTML = "grandmaspasta@grandmaspasta.io"
    divContact.appendChild(divAdress);
    divAdress.appendChild(adress);
    divAdress.appendChild(phone);
    divAdress.appendChild(open);
    divAdress.appendChild(mail)

}
export{contact}