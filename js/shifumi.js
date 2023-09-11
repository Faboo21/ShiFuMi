

function jeu(input, bot) {
    if (bot === input) return 2
    if (bot === 1 && input === 2) return 1
    if (bot === 2 && input === 3) return 1
    if (bot === 3 && input === 1) return 1
    return 0
}

let cmpt = 10;
let estArreter = true;
const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length-1; i++) {
    buttons[i].addEventListener("click", () => {
        input = buttons[i].id
        input = parseInt(input)
        let bot = Math.floor(Math.random() * 3) + 1
        let res = jeu(input,bot)
        let tab = ["", "Pierre", "Feuille", "Ciseaux"]
        let win = ["Bot", "Toi", "Egalité"]
        let img = ["</br><img class='image' src='images/lose.jpg' alt='bouhhhhh' height=300px/>","</br><img class='image' src='images/win.jfif' alt='gg' height=300px/>","</br><img class='image' src='images/nulle.jpg' alt='nulle' height=300px/>"]
        let text = document.getElementById('resultat');
        text.innerHTML = "Toi : " + tab[input] + " Bot : " + tab[bot] + "</br>Gagnant : " + win[res] + img[res]

        if (res == 0 && estArreter){
            let imageLicorne = document.getElementById('lic')
            imageLicorne.style.marginLeft = cmpt + "%";
            cmpt += 10;
            if(cmpt == 100){
                imageLicorne.src = "images/explosion.gif"
                imageLicorne.style.height = "1000px"
                imageLicorne.style.margin = "5em"
                estArreter = false;
            }
        }
    })
}

document.getElementById('rf').addEventListener('click', () => {
    location.reload();
})

let tlt = document.getElementById('tlt');

let cpt = 0;

while(cpt < 1000){
    tlt.style.color = "blue";
    setTimeout('', 1);
    tlt.style.color = "red"; 
    setTimeout('', 1);
    cpt++;
}
