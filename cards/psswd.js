
function pass(x,fileman) {    
    var y = document.getElementById("pass").value;
    if (x==y) {
        alert('Sucess! Redirecting you to the card!');
        window.location.href = fileman;
    } else {
        alert("Wrong! Please try again or check the url");
    }
}
window.addEventListener("keydown",function(a) {
    if (a.code == "Enter") {
        pass('baba01','cards/8239u8ykmscauzh89y31gv123bdnas.html')
    }
});