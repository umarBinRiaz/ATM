var account = {
    pin: 3600,
    balance: 10000.43
};

function login() {

    var userPin = Number(document.getElementById("pin").value);
    var message = document.getElementById("message");

    if (userPin === account.pin) {
        message.innerHTML = "Login Successful";
        message.style.color = "green";
    } else {
        message.innerHTML = "Wrong PIN";
        message.style.color = "red";
    }
}

function withdraw() {

    var amount = Number(document.getElementById("amount").value);
    var message = document.getElementById("message");

    if (amount <= account.balance) {

        account.balance -= amount;

        message.innerHTML = "Withdraw Successful <br>Remaining Balance: " + account.balance;
        message.style.color = "green";

    } else {

        message.innerHTML = "Insufficient Balance";
        message.style.color = "red";
    }
}

function deposit() {

    var amount = Number(document.getElementById("amount").value);
    var message = document.getElementById("message");

    account.balance += amount;

    message.innerHTML = "Deposit Successful <br>Balance: " + account.balance;
    message.style.color = "green";
}

function checkBalance() {

    var message = document.getElementById("message");

    message.innerHTML = "Current Balance: " + account.balance;
    message.style.color = "blue";
}

function logout() {

    document.getElementById("pin").value = "";
    document.getElementById("amount").value = "";

    var message = document.getElementById("message");

    message.innerHTML = "Logged Out Successfully";
    message.style.color = "orange";
}
