let slides = [
    {
        img: "./images/Bild_1.png",
        text: "Vor tausenden Jahren erschufen die ersten Weltenwaechter die Portale zwischen den Dimensionen. Ihre Aufgabe war es, Frieden zwischen allen Universen zu bewahren."
    },
    {
        img: "./images/Bild_2.png",
        text: "Doch jetzt kollidieren die Welten. Helden verschwinden. Boesewichte werden staerker. Ganze Realitaeten beginnen zu zerfallen."
    },
    {
        img: "./images/Bild_3.png",
        text: "Der legendaere Nullkern ist erwacht. Eine uralte Macht zwischen allen Universen, die Raum und Zeit verschlingt."
    },
    {
        img: "./images/Bild_4.png",
        text: "Du bist der letzte aktive Weltenwaechter. Nur du kannst durch die Dimensionen reisen und die Splitter des Gleichgewichts finden."
    },
    {
        img: "./images/Bild_5.png",
        text: "Doch Vorsicht... nicht jeder Held sagt die Wahrheit. Manche Verbuendete sind gefaehrlicher als die Monster selbst."
    },
    {
        img: "./images/Bild_6.png",
        text: "Deine Entscheidungen veraendern alles. Jeder Weg ist endgueltig. Jede Tat beeinflusst dein Karma. Und dein Karma bestimmt das Schicksal aller Welten."
    }
];

let phase = "intro";
let currentSlide = 0;

function next() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        phase = "game";
        document.getElementById("intro-container").style.display = "none";
        document.getElementById("game-container").style.display = "flex";
        document.getElementById("frame").style.background = "transparent";
        document.body.style.backgroundImage = "none";

        document.getElementById("text").innerText = "";
        showScene(currentScene);
    }
    else {
        showSlide();
    }
}

function showSlide() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("image").style.backgroundImage =
        `url(${slides[currentSlide].img})`;

    document.getElementById("text").innerText =
        slides[currentSlide].text;
}

showSlide();


let currentScene = "start";

function handleChoice(next, karma, gainItem, requiredItem) {
    if (requiredItem && !gameData.player.inventory.includes(requiredItem)) {
        alert("Du hast das benötigte Item nicht!");
        return;
    }

    if (karma) {
        gameData.player.karma += karma;
        playKarmaSound(karma);
    }

    if (gainItem) {
        gameData.player.inventory.push(gainItem);
    }

    if (next == "karma_check") {
        checkEnding();
        return;
    }
    if (sounds.steps) {
        sounds.steps.play();
    }
    currentScene = next;
    showScene(currentScene);
}

function showScene(scene) {
    let sceneData = gameData[scene];
    if (!sceneData) {
        return;
    }

    document.getElementById("intro-container").style.display = "none";

    let gameContainer = document.getElementById("game-container");

    gameContainer.style.display = "flex";

    let gameCharacter = document.getElementById("game-character");
    let dialogText = document.getElementById("dialog-text");
    let choicesDiv = document.getElementById("game-choices");

    if (sceneData.background) {
        let backgroundUrl = `url(${sceneData.background})`;
        gameContainer.style.backgroundImage = backgroundUrl;
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundImage = "none";
    }

    if (sceneData.character) {
        gameCharacter.src = sceneData.character;
        gameCharacter.style.display = "block";
    }
    else {
        gameCharacter.style.display = "none";
    }

    dialogText.innerText = sceneData.text;

    choicesDiv.innerHTML = "";

    for (let i = 0; i < sceneData.choices.length; i++) {
        let choice = sceneData.choices[i];
        let btnHtml = `<button onclick="handleChoice('${choice.next}', ${choice.karma || 0}, '${choice.gain_item || ''}', '${choice.required_item || ''}')">${choice.text}</button>`;
        choicesDiv.innerHTML += btnHtml;
    }
}


function checkEnding() {

    if (gameData.player.karma >= 30) {
        currentScene = "ending_good";
    }
    else if (gameData.player.karma >= 10) {
        currentScene = "ending_neutral";
    }
    else if (gameData.player.karma <= -20) {
        currentScene = "ending_evil";
    }
    else {
        currentScene = "ending_chaos";
    }

    showScene(currentScene);
}

let sounds = {};

function initSounds() {
    sounds.steps = new Howl({
        src: ['./audio/steps.mp3'],
        volume: 0.1
    });

    sounds.good = new Howl({
        src: ['./audio/good.mp3'],
        volume: 0.2
    });

    sounds.bad = new Howl({
        src: ['./audio/bad.mp3'],
        volume: 0.2
    });
}

initSounds();

function playKarmaSound(karma) {
    if (karma > 0 && sounds.good) {
        sounds.good.play();
    }
    else if (karma < 0 && sounds.bad) {
        sounds.bad.play();
    }
}

initSounds();

let pauseOpen = false;

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        pauseOpen = !pauseOpen;

        let menu = document.getElementById("pause-menu");

        if (pauseOpen) {
            menu.style.display = "flex";
        }
        else {
            menu.style.display = "none";
        }
    }
});