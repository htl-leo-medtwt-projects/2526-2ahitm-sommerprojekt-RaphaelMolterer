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
        showWarning("Halt! Dir fehlt das Item: " + requiredItem);
        return;
    }

    if (karma) {
        gameData.player.karma += karma;
        playKarmaSound(karma);

        let flashOverlay = document.getElementById("flash-effect-overlay");

        flashOverlay.classList.remove("karma-good-flash");
        flashOverlay.classList.remove("karma-bad-flash");

        setTimeout(function () {
            if (karma > 0) {
                flashOverlay.classList.add("karma-good-flash");
            } else {
                flashOverlay.classList.add("karma-bad-flash");
            }
        }, 10);

        setTimeout(function () {
            flashOverlay.classList.remove("karma-good-flash");
            flashOverlay.classList.remove("karma-bad-flash");
        }, 610);
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

        setTimeout(() => {
            if (sceneData.gain_item) {
                gameCharacter.classList.add("item-gain");
            } else {
                gameCharacter.classList.add("fade-in");
            }
        }, 0);
    } 
    else {
        gameCharacter.style.display = "none";
    }

    dialogText.innerText = sceneData.text;

    dialogText.animate(
        [
            {
                opacity: 0,
                transform: "translateY(20px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 500,
            easing: 'ease-in'
        }
    );

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



function showWarning(message) {
    const warning = document.getElementById("item-warning");
    let parts = message.split('_');
    let cleanMessage = "";

    if (parts.length > 1) {
        for (let i = 0; i < parts.length; i++) {
            if (i === 0 && parts[i].toLowerCase().includes("at")) {
                continue;
            }
            cleanMessage += parts[i];
            if (i < parts.length - 1) {
                cleanMessage += " ";
            }
        }
    }
    else {
        cleanMessage = message;
    }
    document.getElementById("warning-text").innerText = cleanMessage.trim();
    warning.style.display = "flex";
}

function closeWarning() {
    document.getElementById("item-warning").style.display = "none";
}

function updateInventoryDisplay() {
    let grid = document.getElementById("inventory-grid");
    let items = gameData.player.inventory;
    let inventoryHTML = "";

    for (let i = 0; i < items.length; i++) {
        let itemName = items[i];
        let imagePath = `./game_images/item_${itemName}.png`;

        inventoryHTML += `
            <div class="inventory-item">
                <img src="${imagePath}" alt="Item" 
                     onerror="this.style.display='none'; this.parentElement.innerHTML='<span style=\'color:white; font-size:2vh;\'>?</span>';">
            </div>`;
    }
    grid.innerHTML = inventoryHTML;
}

function toggleInventory() {
    pauseOpen = !pauseOpen;
    let menu = document.getElementById("pause-menu");

    if (pauseOpen) {
        updateInventoryDisplay();
        menu.style.display = "flex";
        document.body.classList.add("backpack-open");
    }
    else {
        menu.style.display = "none";
        document.body.classList.remove("backpack-open");
    }
}

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        toggleInventory();
    }
});