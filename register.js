const urlGetUser = "http://127.0.0.1:8000/api/users/"
const urlUserLogin = "http://127.0.0.1:8000/api/user/login"

document.getElementById("buttonRegister").addEventListener("click", registerNewUser)
document.getElementById("buttonLogin").addEventListener("click", loginUser)



async function registerNewUser() {
    const strName = document.getElementById("nomeRegistro").value.toString()
    const strEmail = document.getElementById("emailRegistro").value.toString()
    const strPassword = document.getElementById("passwordRegistro").value.toString()
    const user = {nome: strName, email: strEmail, senha: strPassword}

    await axios.post(urlGetUser, user)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}




async function loginUser(){
    const strEmail = document.getElementById("emailLogin").value.toString()
    const strPassword = document.getElementById("passwordLogin").value.toString()
    const user = {email: strEmail, senha: strPassword}
    
    await axios.post(urlUserLogin, user)
    .then(response => {
        console.log(response.data)
        const login = document.getElementById("loginPage")
        login.style.display = "none"
        const home = document.getElementById("homePage")
        home.style.display = "flex"
    })
    .catch(error => console.log(error))
}