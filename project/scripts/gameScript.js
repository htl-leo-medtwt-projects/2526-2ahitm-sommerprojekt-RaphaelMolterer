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
        text: "Deine Entscheidungen veraendern alles. Jeder Weg ist endgueltig. Jede Tat beeinflusst dein Karma. Und dein Karma bestimmt das Schicksal aller Welten. Rette das Cartoon Universum!"
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

        let container = document.getElementById("game-container");
        let karmaClass = "";

        if (karma > 0) {
            karmaClass = "karma-good";
        }
        else {
            karmaClass = "karma-bad";
        }

        container.classList.add(karmaClass);
        setTimeout(function () {
            container.classList.remove(karmaClass);
        }, 500);
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
        gameContainer.style.backgroundImage = "url(" + sceneData.background + ")";
        document.body.style.backgroundImage = "none";
    }

    if (sceneData.character) {
        gameCharacter.src = sceneData.character;
        gameCharacter.style.display = "block";

        gameCharacter.classList.remove("fade-in", "item-gain");
        void gameCharacter.offsetWidth;

        if (scene.includes("item") || scene.includes("crystal") || scene.includes("recipe") || scene.includes("Melody")) {
            gameCharacter.classList.add("item-gain");
        } else {
            gameCharacter.classList.add("fade-in");
        }
    } else {
        gameCharacter.style.display = "none";
    }

    dialogText.innerText = sceneData.text;
    dialogText.classList.remove("fade-in");
    void dialogText.offsetWidth;
    dialogText.classList.add("fade-in");

    choicesDiv.innerHTML = "";
    for (let i = 0; i < sceneData.choices.length; i++) {
        let choice = sceneData.choices[i];

        let karmaWert = 0;
        if (choice.karma) {
            karmaWert = choice.karma;
        }

        let itemGewonnen = "";
        if (choice.gain_item) {
            itemGewonnen = choice.gain_item;
        }

        let itemBenoetigt = "";
        if (choice.required_item) {
            itemBenoetigt = choice.required_item;
        }

        let btnHtml = "<button onclick=\"handleChoice('" + choice.next + "', " + karmaWert + ", '" + itemGewonnen + "', '" + itemBenoetigt + "')\">" + choice.text + "</button>";
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