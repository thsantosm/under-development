
const form = document.querySelector('#form1');
form.addEventListener("submit", function(event){
     event.preventDefault();
     const login = document.querySelector('#lgin').value;
     const pass = document.querySelector('#pass').value;
     if (login == 'admin' && pass == 'admin') {
          alert("Login efetuado com sucesso");
          window.location="index2.html"
    }
    else{ alert("Credencias erradas, Digite novamente")
    }})

