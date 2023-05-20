const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const container = document.getElementById('container')

signUpButton.addEventListener('click', () => {
    container.classList.add('right-painel-active')
})
signInButton.addEventListener('click', () => {
    container.classList.remove('right-painel-active')
})

/* Cadastrar */
const chave = document.getElementById('name')
const valor = document.getElementById("password")
const form1 = document.getElementById('cadastroForm')
const valorConfrm = document.getElementById('confirmPassword')
let ok1 = false
form1.addEventListener('submit', (r) => {
    r.preventDefault();

    
    let key=chave.value
    let result=valor.value
    let resultConfrm=valorConfrm.value
    for (let i = 0, len = localStorage.length; i < len; i++){
        let confirKey = localStorage.key(i)
        if(key == confirKey){
            var confirm = 1
            let linpInput = chave.value = ''
            let linpInput2 = valor.value = ''
        }
    }
    if(confirm == 1){
        alert("Já existe um cadastro com esse nome.")
    }
    else if(result == resultConfrm && result != ""){
        localStorage.setItem(key,result)
        ok1=true;
        r.target.submit();
    }
    else{
        alert("Infomações inválidas!")
    }

}) 

/* Login */
const entrar = document.getElementById('loginForm')
let ok = false;
entrar.addEventListener('submit', (e) => {
    e.preventDefault();
    let chave = document.getElementById('username')
    let valor = document.getElementById("pass")
    let key = chave.value
    let result = valor.value
    for (let i = 0, len = localStorage.length; i < len; i++){
        let confirKey = localStorage.key(i)
        let confirmResult = localStorage.getItem(confirKey)
        if(key == confirKey && result == confirmResult){
            let linpInput = chave.value = ''
            let linpInput2 = valor.value = ''

            ok=true;    
            e.target.submit();  
        }
    }
    if(ok == false){
        alert("Nome ou senha incorretos")
    }
    //}if(confirm == 1){
        
        //var pp = document.getElementById("p2");
        //pp.innerHTML=`<h1>Bem vindo ${key} sua conta  foi encontrada.</h1><br><p>Clique aqui para penetrar nela!</p><br><a type="button" href="home.html">Entrar</a>`;
        
    //}else{
    //    alert("Nome de usuario ou senha incorretos")
    //}

})

