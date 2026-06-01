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
let currentScene = "start";
let pauseOpen = false;
let sounds = {};
let isMusicMuted = false;
let isSoundsMuted = false;

// ==========================================
// LOCAL STORAGE SPEICHERUNG
// ==========================================

function saveGame() {
    let saveState = {
        currentScene: currentScene,
        player: gameData.player,
        phase: phase,
        currentSlide: currentSlide,
        isMusicMuted: isMusicMuted,
        isSoundsMuted: isSoundsMuted
    };
    localStorage.setItem("cartoon_adventure_save", JSON.stringify(saveState));
}

function loadGame() {
    let savedData = localStorage.getItem("cartoon_adventure_save");

    if (savedData) {
        let saveState = JSON.parse(savedData);

        currentScene = saveState.currentScene;
        gameData.player = saveState.player;
        phase = saveState.phase;
        currentSlide = saveState.currentSlide;

        if (saveState.isMusicMuted) {
            isMusicMuted = saveState.isMusicMuted;
        }
        else {
            isMusicMuted = false;
        }

        if (saveState.isSoundsMuted) {
            isSoundsMuted = saveState.isSoundsMuted;
        }
        else {
            isSoundsMuted = false;
        }

        updateAudioButtonUI();

        if (phase === "game") {
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
        console.log("Spielstand erfolgreich geladen!");
    }
    else {
        showSlide();
    }
}

// ==========================================
// INTRO / SLIDE 
// ==========================================

function next() {
    if (sounds.bgMusic) {
        if (!sounds.bgMusic.playing()) {
            sounds.bgMusic.play();
        }
    }
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
    saveGame();
}

function showSlide() {
    document.getElementById("game-container").style.display = "none";
    document.getElementById("image").style.backgroundImage = `url(${slides[currentSlide].img})`;
    document.getElementById("text").innerText = slides[currentSlide].text;
}

// ==========================================
// GAMEPLAY 
// ==========================================

function handleChoice(nextScene, karma, gainItem, requiredItem) {
    if (sounds.bgMusic) {
        if (!sounds.bgMusic.playing()) {
            sounds.bgMusic.play();
        }
    }

    if (requiredItem) {
        if (!gameData.player.inventory.includes(requiredItem)) {
            showWarning(requiredItem);
            return;
        }
    }

    if (karma) {
        gameData.player.karma += karma;
        playKarmaSound(karma);

        let flashOverlay = document.getElementById("flash-effect-overlay");
        flashOverlay.classList.remove("karma-good-flash", "karma-bad-flash");

        setTimeout(function () {
            if (karma > 0) {
                flashOverlay.classList.add("karma-good-flash");
            } else {
                flashOverlay.classList.add("karma-bad-flash");
            }
        }, 10);

        setTimeout(function () {
            flashOverlay.classList.remove("karma-good-flash", "karma-bad-flash");
        }, 610);
    }

    if (gainItem) {
        gameData.player.inventory.push(gainItem);
    }

    if (nextScene == "karma_check") {
        checkEnding();
        saveGame();
        return;
    }

    if (sounds.steps) {
        sounds.steps.play();
    }

    currentScene = nextScene;
    showScene(currentScene);
    saveGame();
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

        gameCharacter.classList.remove("fade-in", "item-gain", "anim-schweben", "anim-pulsieren", "anim-drehen", "anim-item-spezial");

        setTimeout(() => {
            if (sceneData.character.includes("item_")) {
                gameCharacter.classList.add("anim-item-spezial"); 
            }
            else {
                let randomAnimation = Math.random();

                if (randomAnimation < 0.33) {
                    gameCharacter.classList.add("anim-pulsieren");
                }
                else if (randomAnimation < 0.66) {
                    gameCharacter.classList.add("anim-schweben");
                }
                else {
                    gameCharacter.classList.add("anim-drehen");
                }
            }
        }, 10);
    }
    else {
        gameCharacter.style.display = "none";
    }

    dialogText.innerText = sceneData.text;
    dialogText.animate(
        [
            { opacity: 0, transform: "translateY(20px)" },
            { opacity: 1, transform: "translateY(0)" }
        ],
        { duration: 500, easing: 'ease-in' }
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

// ==========================================
// AUDIO 
// ==========================================

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

    sounds.bgMusic = new Howl({
        src: ['./audio/background_music.mp3'],
        volume: 0.15,
        loop: true,
        html5: true
    });

    if (isMusicMuted) {
        sounds.bgMusic.mute(true);
    }
    if (isSoundsMuted) {
        muteAllSounds(true);
    }

    updateAudioButtonUI();
}

function playKarmaSound(karma) {
    if (isSoundsMuted) {
        return;
    }

    if (karma > 0) {
        if (sounds.good) {
            sounds.good.play();
        }
    }
    else if (karma < 0) {
        if (sounds.bad) {
            sounds.bad.play();
        }
    }
}

function toggleMuteMusic() {
    if (isMusicMuted) {
        isMusicMuted = false;
    } else {
        isMusicMuted = true;
    }

    if (sounds.bgMusic) {
        sounds.bgMusic.mute(isMusicMuted);
        if (!isMusicMuted) {
            if (!sounds.bgMusic.playing()) {
                sounds.bgMusic.play();
            }
        }
    }
    updateAudioButtonUI();
    saveGame();
}

function toggleMuteSounds() {
    if (isSoundsMuted) {
        isSoundsMuted = false;
    } else {
        isSoundsMuted = true;
    }

    muteAllSounds(isSoundsMuted);
    updateAudioButtonUI();
    saveGame();
}

function muteAllSounds(muteState) {
    if (sounds.steps) {
        sounds.steps.mute(muteState);
    }
    if (sounds.good) {
        sounds.good.mute(muteState);
    }
    if (sounds.bad) {
        sounds.bad.mute(muteState);
    }
}

function updateAudioButtonUI() {
    let musicBtn = document.getElementById("mute-music-btn");
    let soundsBtn = document.getElementById("mute-sounds-btn");

    if (musicBtn) {
        if (isMusicMuted) {
            musicBtn.innerText = "Musik: STUMM";
        }
        else {
            musicBtn.innerText = "Musik: AN";
        }
    }
    if (soundsBtn) {
        if (isSoundsMuted) {
            soundsBtn.innerText = "Sounds: STUMM";
        }
        else {
            soundsBtn.innerText = "Sounds: AN";
        }
    }
}

// ==========================================
// WARNING & INVENTORY 
// ==========================================

function showWarning(requiredItem) {
    let warning = document.getElementById("item-warning");
    let parts = requiredItem.split('_');
    let cleanMessage = "";

    if (parts.length > 1) {
        for (let i = 0; i < parts.length; i++) {
            if (i === 0) {
                continue;
            }
            cleanMessage += parts[i];
            if (i < parts.length - 1) {
                cleanMessage += " ";
            }
        }
    }
    else {
        cleanMessage = requiredItem;
    }

    document.getElementById("warning-text").innerText = "Dir fehlt das Item: " + cleanMessage;
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

        let finalFileName = itemName;
        if (!finalFileName.startsWith("item_")) {
            finalFileName = "item_" + finalFileName;
        }

        let imagePath = `./game_images/${finalFileName}.png`;

        inventoryHTML += `
            <div class="inventory-item">
                <img src="${imagePath}" alt="${itemName}">
            </div>`;
    }
    grid.innerHTML = inventoryHTML;
}

function toggleInventory() {
    if (pauseOpen) {
        pauseOpen = false;
    } else {
        pauseOpen = true;
    }

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

function resetGame() {
    let confirmOverlay = document.getElementById("reset-confirm-overlay");
    if (confirmOverlay) {
        confirmOverlay.style.display = "flex";
    }
}

function closeResetConfirm() {
    let confirmOverlay = document.getElementById("reset-confirm-overlay");
    if (confirmOverlay) {
        confirmOverlay.style.display = "none";
    }
}

function executeResetGame() {
    localStorage.removeItem("cartoon_adventure_save");
    location.reload();
}

// ==========================================
// INITIALISIERUNG
// ==========================================

initSounds();

loadGame();

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        toggleInventory();
    }
});

