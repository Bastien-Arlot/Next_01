
const loto = () => {
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const email = document.querySelector("#email").value;
    let lotoNumbers = document.querySelector("#lotoNumbers").value;

    checkLoto(firstName, lastName, email, lotoNumbers);
};

const checkLoto = (firstName, lastName, email, lotoNumbers) => {
    if (firstName == "") {
        alert("Veuillez fournir un prénom");
        return false;
    }

    if (lastName == "") {
        alert("Veuillez fournir un nom");
        return false;
    }

    if (email == "") {
        alert("Veuillez fournir un email");
        return false;
    }
    if(lotoNumbers.length !== 6){
        alert("Veuillez fournir 6 chiffres");
        return false;
    }

    let emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/;

    if (!email.match(emailRegex) || email.length < 8 || email.length > 30) {
        alert(
            "Votre email n'est pas valide (8 à 30 caratères + @ + . + 2 ou 3 lettre après le point)"
        );
        return false;
    }

    if (lotoNumbers != winNumber) {
        alert(
            `Désolé vous avez perdu, les nombres gagnants sont : ${winNumber}`
        );
        return false;
    } else {
        alert("Félicitations vous avez gagné 1 million !!!!!");
        let audio = new Audio(src='https://www.youtube.com/watch?v=wDOQgl4kMbw');
        audio.play();
    }
};

const winNumber = String(Math.floor(100000 + Math.random() * 900000));




console.log(`Les numéros gagnant sont : ${winNumber}`);
document.querySelector("#subscribeButton").addEventListener("click", loto)