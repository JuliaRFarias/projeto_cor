const login = document.getElementById("txtLogin");
const senha = document.getElementById("txtSenha");
const divResposta = document.getElementById("respostas");
const botao = document.getElementById("bntAcessar")
const loginBanco = "magolh@gmail.com"
const senhaBanco="123" ;
function mostrar() {
    const loginV = login.value;
    const senhaV = senha.value
    if(loginV === loginBanco && senhaV === senhaBanco){
        divResposta.textContent="Login efetuado com sucesso! Redirecionando..."
        setTimeout(() => {
            window.location.href="./paginas/home.html"
        },2000);
    }else{

    divResposta.innerHTML = 
    <p><strong>Login: </strong>${loginV}</p>
}

botao.addEventListenner('click', mostrar);

}
