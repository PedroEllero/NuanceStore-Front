const urlGetUser = "http://127.0.0.1:8000/api/users/"

document.getElementById("buttonRegister").addEventListener("click", registerNewUser)
document.getElementById("buttonLogin").addEventListener("click", () => alert("loginnnnn"))

async function registerNewUser() {
    const inputs = document.getElementsByClassName("input")
    let strName = String(inputs.txt.value)
    let strEmail = String(inputs.mail.value)
    let strPassword = String(inputs.pswrd.value)
    alert(strName + ", " + strEmail + ", " + strPassword)

    axios.post(urlGetUser, {nome: strName, email: strEmail, senha: strPassword})
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
}