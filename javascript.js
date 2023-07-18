const email = document.getElementById('email')

const senha = document.getElementById('senha')




function login() {

    if(email.value == 'emailx@gmail.com' && senha.value == '1234') {

        window.alert('Login feito com sucesso')

    } else {

        window.alert('Email ou senha incorretos')

    }

}