document.querySelectorAll("button")[0].addEventListener("click", whenClicked);

function whenClicked(){

    var randomNumber = Math.floor(Math.random()*6) + 1;
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var image = "images/dice" + randomNumber + ".png";
    var image1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", image);
    document.querySelectorAll("img")[1].setAttribute("src", image1);

    if(randomNumber < randomNumber1)
        document.querySelector("h1").textContent = "Player 2 Wins 🚩";
    else if(randomNumber > randomNumber1)
        document.querySelector("h1").textContent = "🚩 Player 1 Wins";
    else document.querySelector("h1").textContent = "Draw 😛";
}