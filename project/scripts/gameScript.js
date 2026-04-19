let slides = [
    {
        img: "./images/Bild_1.png",
        text: "Du bist ein Weltenwaechter. Deine Aufgabe ist es, das Gleichgewicht zwischen den Dimensionen zu bewahren. Wenn Chaos entsteht, bist du derjenige, der eingreift."
    },
    {
        img: "./images/Bild_2.png",
        text: "Waehrend deiner Abwesenheit in einem Urlaub hat sich etwas veraendert. Viele Dimensionen sind von Ungerechtigkeit und Chaos erfuellt. Irgendetwas bringt das Gleichgewicht der Welten ins Wanken."
    },
    {
        img: "./images/Bild_3.png",
        text: "Du musst die Dimensionen bereisen und helfen. Doch sei vorsichtig: Nicht jeder, der Hilfe will, ist wirklich gut."
    }
];

let phase = "intro";
let currentSlide = 0;

function next() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        phase = "game";
        document.getElementById("choices").style.display = "block";
    }
    else {
        showSlide();
    }
}

function showSlide() {
    document.getElementById("image").style.backgroundImage =
        `url(${slides[currentSlide].img})`;

    document.getElementById("text").innerText =
        slides[currentSlide].text;
}

showSlide();

let gameData;
let currentScene = "start";

fetch("./game.json")
    .then(res => res.json())
    .then(data => {
        gameData = data;
        showSlide();
    });
