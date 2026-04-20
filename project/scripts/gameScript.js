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

let gameData = {
    "player": {
        "karma": 0,
        "inventory": []
    },
    "start": {
        "text": "Du landest in einem Wald, umgeben von hohen Baeumen und dem Zwitschern der Voegel. Vor dir liegt ein Pfad, der in zwei Richtungen fuehrt.",
        "background": "./game_images/background_forest.jpg",
        "character": "./game_images/character_wegweiser.png",
        "choices": [
            {
                "text": "Links (Tiefer in den Wald)",
                "next": "dark_forest",
                "gain_item": "donut"
            },
            {
                "text": "Rechts (Raus aus den Wald)",
                "next": "city"
            }
        ]
    },
    "dark_forest": {
        "text": "'Hallo, ich bin Wirt, ich kenn dich gar nicht, aber wenn ich du waere wuerde ich schnell aus diesem Wald raus, denn hier ist ein Monster. Was, du hast noch nicht von dem Monster gehoert? Ist auch egal, renn so lange du noch kannst! Ich muss fuer meinen Bruder hier bleiben. Aber ich kann dir was mit auf dem Weg geben, hier.'*Du erhaelst einen Donut*",
        "background": "./game_images/background_dark_forest.jpg",
        "character": "./game_images/character_Wirt.png",
        "choices": [
            {
                "text": "Trotzdem im Wald weitergehen",
                "next": "monster1",
                "karma": -3
            },
            {
                "text": "Schnell den Wald verlassen",
                "next": "city"
            }
        ]
    },
    "city": {
        "text": "Du kommst in eine sehr belebte Stadt mit einigen seltsamen Gestalten. Was moechtest du als erstes nach Boesen erkunden?",
        "background": "./game_images/background_city.jpg",
        "choices": [
            {
                "text": "Schule",
                "next": "school"
            },
            {
                "text": "Bibliothek",
                "next": "library"
            }
        ]
    },
    "library": {
        "text": "Du betrittst die Bibliothek und siehst einen hungrigen pinken Hasen, dieser stellt sich sofort vor: 'Hallo, ich bin Richard, meine Tochter Annaise hat mich hier her gebracht damit ich auch ein Buch lese, aber ich bin so hungrig... wenn ich doch nur nach Hause damit ich etwas essen koennte... Hast du etwas fuer mich das ich essen kann?'",
        "background": "./game_images/background_library.jpg",
        "character": "./game_images/character_Richard.png",
        "choices": [
            {
                "text": "Leider nicht *du verlässt wieder die Bibliothek und gehst weiter*",
                "next": "school",
                "karma": -2
            },
            {
                "text": "Ja, hier hast du einen Donut *du gibst Richard den Donut*",
                "next": "richard_thanks",
                "karma": 2,
                "required_item": "donut"
            }
        ]
    },
    "richard_thanks": {
        "text": "Richard dankt dir herzlich fuer den Donut und sagt: 'Das war sehr nett von dir! Ich fuehle mich jetzt viel besser... Ich sollte jetzt schlafen gehen, viel Spass dir noch!'",
        "background": "./game_images/background_library.jpg",
        "character": "./game_images/character_Richard.png",
        "choices": [
            {
                "text": "Weiter in die Schule gehen",
                "next": "school"
            }
        ]
    }
};

let currentScene = "start";

function handleChoice(next, karma, gainItem, requiredItem) {
    if (requiredItem && !gameData.player.inventory.includes(requiredItem)) {
        alert("Du hast das benötigte Item nicht!");
        return;
    }

    if (karma) {
        gameData.player.karma += karma;
    }

    if (gainItem) {
        gameData.player.inventory.push(gainItem);
    }

    currentScene = next;
    showScene(currentScene);
}

function showScene(scene) {
    let sceneData = gameData[scene];
    if (!sceneData) return;

    document.getElementById("intro-container").style.display = "none";

    let gameContainer = document.getElementById("game-container");
    
    gameContainer.style.display = "flex";

    let gameCharacter = document.getElementById("game-character");
    let dialogText = document.getElementById("dialog-text");
    let choicesDiv = document.getElementById("game-choices");

    if (sceneData.background) {
        let backgroundUrl = `url(${sceneData.background})`;
        gameContainer.style.backgroundImage = backgroundUrl;
        document.body.style.backgroundImage = backgroundUrl;
        document.body.style.backgroundSize = "cover";
    } 
    else {
        gameContainer.style.backgroundImage = "none";
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

/*not used yet charaktere: jake, darwin, gumball, annaise, eiskönig, pb_uncle, pb_uncle_reveal, finn*/
/*not used yet backgrounds: school, adventureTime_flatlands, regularShow_house, stevenUniverse_beach, desert, sewers, vulcan, hell_labyrinth, hell, water, jungle, ruins, castle, factory, laboratory, space_station, fair*/
/*not used yet items: burningSkull, infinity_gauntlet, omnitrix, enchirodon, gumball_luckyHat, weBareBears_Miki-chan*/