
function pass(x,fileman) {    
    var y = document.getElementById("pass").value;
    if (x==y) {
        alert('Sucess! Redirecting you to the card!');
        window.location.href = fileman;
    } else {
        alert("Wrong! Please try again or check the url");
    }
}