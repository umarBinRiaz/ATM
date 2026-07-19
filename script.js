var pin = 3600;
var balance = 10000.43;

function login() {
    var userPin = document.getElementById("pin").value;

    if (userPin == pin) {
        document.getElementById("login-section").classList.add("hidden");
        document.getElementById("atm-section").classList.remove("hidden");
        document.getElementById("message").innerText = "Login successful";
    } else {
        document.getElementById("message").innerText = "Wrong PIN";
        Document.getElementById("message")
    }
}

function withdraw() {
    var amount = Number(document.getElementById("amount").value);

    if (amount > 0 && amount <= balance) {
        balance -= amount;
        document.getElementById("message").innerText =
            "Withdraw successful. Remaining balance: " + balance.toFixed(2);
    } else {
        document.getElementById("message").innerText =
            "Insufficient balance or invalid amount";
    }
}

function deposit() {
    var amount = Number(document.getElementById("amount").value);

    if (amount > 0) {
        balance += amount;
        document.getElementById("message").innerText =
            "Deposit successful. New balance: " + balance.toFixed(2);
    } else {
        document.getElementById("message").innerText = "Invalid amount";
    }
}

function checkBalance() {
    document.getElementById("message").innerText =
        "Current balance: " + balance.toFixed(2);
}

function logout() {
    document.getElementById("atm-section").classList.add("hidden");
    document.getElementById("login-section").classList.remove("hidden");
    document.getElementById("pin").value = "";
    document.getElementById("amount").value = "";
    document.getElementById("message").innerText =
        "You have been logged out";
}
