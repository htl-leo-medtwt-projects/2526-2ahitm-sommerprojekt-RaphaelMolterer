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

let gameData = {
    "player": {
        "karma": 0,
        "inventory": [],
        "visited": []
    },

    // START

    "start": {
        "text": "Du wachst in einer zerfallenen Zwischenwelt auf. Riesige Portale fuehren in verschiedene Cartoon-Universen. Eine Stimme hallt durch die Leere: 'Weltenwaechter... waehle deine Wege mit Bedacht. Jede Entscheidung ist permanent.'",
        "background": "./game_images/background_void.jpg",
        "choices": [
            {
                "text": "Das dunkle Waldportal betreten",
                "next": "forest_world"
            },
            {
                "text": "Das futuristische Laborportal betreten",
                "next": "dexter_lab"
            },
            {
                "text": "Das chaotische Cartoon-Stadt Portal betreten",
                "next": "elmore_city"
            }
        ]
    },

    // OVER THE GARDEN WALL

    "forest_world": {
        "text": "Du betrittst einen dunklen Wald. Wirt sitzt an einem Baumstumpf und sieht nervoes aus. Courage versteckt sich zitternd hinter ihm.",
        "background": "./game_images/background_dark_forest.jpg",
        "character": "./game_images/character_btgw_Wirt.png",
        "choices": [
            {
                "text": "Mit Wirt reden",
                "next": "wirt_warning",
                "karma": 1
            },
            {
                "text": "Alleine tiefer in den Wald gehen",
                "next": "beast_path",
                "karma": -2
            }
        ]
    },

    "wirt_warning": {
        "text": "'Das Beast kontrolliert den Wald...' fluestert Wirt. Courage gibt dir eine Taschenlampe.",
        "background": "./game_images/background_dark_path.jpg",
        "character": "./game_images/character_courage.png",
        "choices": [
            {
                "text": "Dem Licht folgen",
                "next": "hidden_cabin",
                "gain_item": "taschenlampe"
            },
            {
                "text": "Wirt alleine lassen",
                "next": "beast_path",
                "karma": -2
            }
        ]
    },

    "hidden_cabin": {
        "text": "In einer alten Huette sitzt Billy aus Abenteuerzeit. Er wirkt freundlich. Doch seine Augen leuchten kurz gruen.",
        "background": "./game_images/background_cabin.jpg",
        "character": "./game_images/character_billy.png",
        "choices": [
            {
                "text": "Billy vertrauen",
                "next": "forest_exit",
                "karma": 1
            },
            {
                "text": "Billy misstrauen",
                "next": "lich_hint",
                "karma": 3
            }
        ]
    },

    "lich_hint": {
        "text": "Du bemerkst ein verborgenes Buch voller dunkler Symbole. Auf einer Seite steht: 'Der Lich nimmt viele Gesichter an.'",
        "background": "./game_images/background_secret_room.jpg",
        "choices": [
            {
                "text": "Das Buch mitnehmen",
                "next": "forest_exit",
                "gain_item": "dunkles_buch"
            }
        ]
    },

    "beast_path": {
        "text": "Das Beast erscheint aus dem Nebel. Seine Augen starren direkt in deine Seele.",
        "background": "./game_images/background_beast.jpg",
        "character": "./game_images/character_beast.png",
        "choices": [
            {
                "text": "Kaempfen",
                "next": "forest_escape",
                "karma": -1
            },
            {
                "text": "Fliehen",
                "next": "forest_escape"
            }
        ]
    },

    "forest_escape": {
        "text": "Du entkommst knapp aus dem Wald und erreichst ein neues Portal.",
        "background": "./game_images/background_escape.jpg",
        "choices": [
            {
                "text": "Weiterreisen",
                "next": "townsville"
            }
        ]
    },

    "forest_exit": {
        "text": "Ein Portal erscheint zwischen den Baeumen.",
        "background": "./game_images/background_portal.jpg",
        "choices": [
            {
                "text": "Nach Townsville reisen",
                "next": "townsville"
            }
        ]
    },

    // POWERPUFF GIRLS

    "townsville": {
        "text": "Townsville steht unter Angriff. Mojo Jojo kaempft gegen riesige Schattenmonster waehrend Blossom Befehle schreit.",
        "background": "./game_images/background_townsville.jpg",
        "character": "./game_images/character_powerpuffs.png",
        "choices": [
            {
                "text": "Den Powerpuff Girls helfen",
                "next": "chemical_x_lab",
                "karma": 3
            },
            {
                "text": "Mojo Jojo helfen",
                "next": "mojo_alliance",
                "karma": -3
            }
        ]
    },

    "chemical_x_lab": {
        "text": "Professor Utonium erklaert dir, dass Chemical X gestohlen wurde. Bubbles weint weil Octi verschwunden ist.",
        "background": "./game_images/background_powerpuff_lab.jpg",
        "character": "./game_images/character_bubbles.png",
        "choices": [
            {
                "text": "Octi suchen",
                "next": "octi_found",
                "karma": 2
            },
            {
                "text": "Direkt den Dieb jagen",
                "next": "him_dimension"
            }
        ]
    },

    "octi_found": {
        "text": "Du findest Octi zwischen Truemmern. Bubbles umarmt dich gluecklich.",
        "background": "./game_images/background_ruins.jpg",
        "choices": [
            {
                "text": "Octi zurueckgeben",
                "next": "him_dimension",
                "gain_item": "octi",
                "karma": 3
            }
        ]
    },

    "mojo_alliance": {
        "text": "Mojo Jojo fuehrt dich in sein Labor. 'ICH WEISS WER HINTER DEM NULLKERN STECKT!'",
        "background": "./game_images/background_mojo_lab.jpg",
        "character": "./game_images/character_mojojojo.png",
        "choices": [
            {
                "text": "Mojo glauben",
                "next": "him_dimension"
            },
            {
                "text": "Mojo verraten",
                "next": "chemical_x_steal",
                "karma": -2
            }
        ]
    },

    "chemical_x_steal": {
        "text": "Du stiehlst heimlich Chemical X aus dem Labor.",
        "background": "./game_images/background_lab_storage.jpg",
        "choices": [
            {
                "text": "Chemical X nehmen",
                "next": "him_dimension",
                "gain_item": "chemical_x"
            }
        ]
    },

    "him_dimension": {
        "text": "HIM erscheint aus einem roten Portal. Seine Stimme hallt durch die Dimension.",
        "background": "./game_images/background_him.jpg",
        "character": "./game_images/character_him.png",
        "choices": [
            {
                "text": "Gegen HIM kaempfen",
                "next": "dexter_lab",
                "karma": 4
            },
            {
                "text": "Mit HIM einen Deal machen",
                "next": "evil_mark",
                "karma": -5
            }
        ]
    },

    "evil_mark": {
        "text": "HIM markiert deine Hand mit dunkler Energie.",
        "background": "./game_images/background_dark_magic.jpg",
        "choices": [
            {
                "text": "Weitergehen",
                "next": "dexter_lab"
            }
        ]
    },

    // DEXTER

    "dexter_lab": {
        "text": "Dexter und Mandark liefern sich einen gigantischen Kampf mit Robotern.",
        "background": "./game_images/background_dexter_lab.jpg",
        "character": "./game_images/character_dexter.png",
        "choices": [
            {
                "text": "Dexter helfen",
                "next": "portal_machine",
                "karma": 2
            },
            {
                "text": "Mandark helfen",
                "next": "dark_science",
                "karma": -3
            }
        ]
    },

    "portal_machine": {
        "text": "Dexter zeigt dir eine Maschine die den Nullkern orten kann.",
        "background": "./game_images/background_machine.jpg",
        "choices": [
            {
                "text": "Maschine aktivieren",
                "next": "ben10_world",
                "gain_item": "portal_scanner"
            }
        ]
    },

    "dark_science": {
        "text": "Mandark gibt dir experimentelle Waffen.",
        "background": "./game_images/background_dark_lab.jpg",
        "choices": [
            {
                "text": "Waffen nehmen",
                "next": "ben10_world",
                "gain_item": "laserkanone"
            }
        ]
    },

    // BEN 10

    "ben10_world": {
        "text": "Ben Tennyson kaempft gegen Dr. Animo und mutierte Monster.",
        "background": "./game_images/background_ben10_city.jpg",
        "character": "./game_images/character_ben10.png",
        "choices": [
            {
                "text": "Ben helfen",
                "next": "omnitrix_scene",
                "karma": 3
            },
            {
                "text": "Dr. Animo helfen",
                "next": "mutant_route",
                "karma": -4
            }
        ]
    },

    "omnitrix_scene": {
        "text": "Ben vertraut dir den Omnitrix fuer eine Mission an.",
        "background": "./game_images/background_omnitrix.jpg",
        "choices": [
            {
                "text": "Omnitrix erhalten",
                "next": "teen_titans",
                "gain_item": "omnitrix"
            }
        ]
    },

    "mutant_route": {
        "text": "Dr. Animo verwandelt mehrere Tiere in Monster.",
        "background": "./game_images/background_mutants.jpg",
        "choices": [
            {
                "text": "Die Mutation akzeptieren",
                "next": "teen_titans",
                "karma": -2
            }
        ]
    },

    // TEEN TITANS

    "teen_titans": {
        "text": "Robin und die Teen Titans verteidigen ihren Turm gegen Deathstroke.",
        "background": "./game_images/background_titans_tower.jpg",
        "character": "./game_images/character_robin.png",
        "choices": [
            {
                "text": "Den Titans helfen",
                "next": "raven_book",
                "karma": 3
            },
            {
                "text": "Mit Deathstroke arbeiten",
                "next": "deathstroke_route",
                "karma": -5
            }
        ]
    },

    "raven_book": {
        "text": "Raven uebergibt dir ein verbotenes Zauberbuch.",
        "background": "./game_images/background_magic_room.jpg",
        "character": "./game_images/character_raven.png",
        "choices": [
            {
                "text": "Zauberbuch nehmen",
                "next": "adventure_time",
                "gain_item": "zauberbuch_von_raven"
            }
        ]
    },

    "deathstroke_route": {
        "text": "Deathstroke bietet dir Macht gegen Loyalitaet an.",
        "background": "./game_images/background_dark_city.jpg",
        "choices": [
            {
                "text": "Deal akzeptieren",
                "next": "adventure_time",
                "gain_item": "dark_blade"
            }
        ]
    },

    // ADVENTURE TIME

    "adventure_time": {
        "text": "Finn und Jake reisen mit dir durch die zerstoerten Laender von Ooo. Billy fuehrt angeblich die letzten Helden an.",
        "background": "./game_images/background_ooo.jpg",
        "character": "./game_images/character_finn_jake.png",
        "choices": [
            {
                "text": "Billy vertrauen",
                "next": "lich_reveal"
            },
            {
                "text": "Billy hinterfragen",
                "next": "secret_truth",
                "karma": 4
            }
        ]
    },

    "secret_truth": {
        "text": "Marceline zeigt dir versteckte Aufzeichnungen. Billy wurde vor langer Zeit vom Lich ersetzt.",
        "background": "./game_images/background_cave.jpg",
        "character": "./game_images/character_marceline.png",
        "choices": [
            {
                "text": "Finn warnen",
                "next": "lich_reveal",
                "karma": 3
            }
        ]
    },

    "lich_reveal": {
        "text": "Billy beginnt zu lachen. Seine Haut zerfaellt. Der Lich erscheint in seiner wahren Form.",
        "background": "./game_images/background_lich.jpg",
        "character": "./game_images/character_lich.png",
        "choices": [
            {
                "text": "Den Lich bekaempfen",
                "next": "final_gate",
                "karma": 6
            },
            {
                "text": "Dem Lich beitreten",
                "next": "final_gate",
                "karma": -10
            }
        ]
    },

    // FINAL

    "final_gate": {
        "text": "Du erreichst den Nullkern. Alle deine Entscheidungen bestimmen nun das Schicksal des Multiversums.",
        "background": "./game_images/background_final_gate.jpg",
        "choices": [
            {
                "text": "Den Nullkern betreten",
                "next": "karma_check"
            }
        ]
    },

    // ENDINGS

    "ending_good": {
        "text": "Du wirst zum legendaeren Helden aller Universen. Finn, Batman, Blossom, Samurai Jack und viele andere feiern deinen Sieg. Die Welten werden gerettet.",
        "background": "./game_images/background_good_ending.jpg",
        "character": "./game_images/character_heroes.png",
        "choices": []
    },

    "ending_neutral": {
        "text": "Der Nullkern wird versiegelt, doch viele Welten bleiben beschaedigt. Manche Helden vertrauen dir noch immer nicht.",
        "background": "./game_images/background_neutral_ending.jpg",
        "choices": []
    },

    "ending_chaos": {
        "text": "Die Realitaet zerbricht teilweise. Portale bleiben offen und Chaos breitet sich weiter aus.",
        "background": "./game_images/background_chaos.jpg",
        "character": "./game_images/character_billcipher.png",
        "choices": []
    },

    "ending_evil": {
        "text": "Gemeinsam mit dem Lich, HIM, Aku und Darkseid kontrollierst du die zerfallenden Dimensionen.",
        "background": "./game_images/background_evil_ending.jpg",
        "character": "./game_images/character_villains.png",
        "choices": []
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

/*not used yet charaktere: jake, darwin, gumball, annaise, eiskönig, pb_uncle, pb_uncle_reveal, finn, blossom, bubbles, buttercup, mojo, him, ashi, jack, orange, farmer*/
/*not used yet backgrounds: school, adventureTime_flatlands, regularShow_house, stevenUniverse_beach, desert, sewers, vulcan, hell_labyrinth, hell, water, jungle, ruins, castle, factory, laboratory, space_station, fair*/
/*not used yet items: burningSkull, infinity_gauntlet, omnitrix, enchirodon, gumball_luckyHat, weBareBears_Miki-chan, chemicalX*/