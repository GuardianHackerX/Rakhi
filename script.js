const home = document.querySelector('#home');
const log = document.querySelector('#log-in'); 
const form_div = document.querySelector('.container');
const defaul = document.querySelector('.default');


home.addEventListener('click', (e)=>{
    e.preventDefault();
    home.classList.add('active');
    log.classList.remove('active');
    defaul.classList.remove('hidden');
    defaul.classList.add('unhidden');
    form_div.classList.add('hidden');
    form_div.classList.remove('unhidden');
});

log.addEventListener('click', (e) =>{
    e.preventDefault();
    log.classList.add('active');
    home.classList.remove('active');
    defaul.classList.add('hidden');
    defaul.classList.remove('unhidden');
    form_div.classList.remove('hidden');
    form_div.classList.add('unhidden');
});

const form = document.querySelector('#login-form'); 

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    var username = form.username.value.toString().toLowerCase();
    var password = form.password.value;

    authentication = auth(username,password);
});










function auth(username, password) {
    if (username=='minakshi' && password=='s@ruli0618') {
        window.location.href = '../friends_pages/minakshi.html';
        // console.log(username)
    }
    else if (username=='rani ji' && password=='arnav@toto') {
        window.location.href = '../friends_pages/chudail.html';
        // console.log(username)
    }
    else if (username=='mummy ji' && password=='Radharani.777') {
        window.location.href = '../friends_pages/penguin.html';
        // console.log(username)
    }
    else if (username=='kritika' && password=='') {
        window.location.href = '../friends_pages/kritika.html';
        // console.log(username)
    }
    else if (username=='reema' && password=='') {
        window.location.href = '../friends_pages/reema.html';
    }
    else if (username=='jyoti' && password=='') {
        window.location.href = '../friends_pages/jyoti.html';
    }
    else {
        const wrong_pass = document.querySelector('.wrong-pass');
        wrong_pass.style.opacity = 1;
        setTimeout(() => {
            wrong_pass.style.opacity = 0;
        }, 5000);
    }
}