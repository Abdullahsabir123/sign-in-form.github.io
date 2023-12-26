let users = [];
function signUp() {
    users.push({
        name: document.getElementById("1n").value,
        fname: document.getElementById("2n").value,
        Email: document.getElementById("Ema").value,
        Password: document.getElementById("Pw").value,
    })
    console.log(users);
    document.getElementById("1n").value = "";
    document.getElementById("2n").value = "";
    document.getElementById("Ema").value = "";
    document.getElementById("Pw").value = "";
}
function signIn() {
    let Email = document.getElementById("Em").value;
    let Password = document.getElementById("Pwd").value;
    login = false
    for (i = 0; i < users.length; i++) {
        if (Email == users[i].Email && Password == users[i].Password) {
            login = true
            if (login) {
                alert("login successful")
            }
            else{
                alert("Invalid Email or Password")
            }
        }
    }
}