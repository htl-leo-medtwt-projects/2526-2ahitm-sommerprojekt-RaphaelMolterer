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
        "inventory": []
    },

    "start": {
        "text": "Der Nexus stabilisiert fünf getrennte Cartoon-Realitäten. Jede zieht dich in ihre Version der Wahrheit.",
        "choices": [
            { "text": "Adventure Time", "next": "c1_ooa_start" },
            { "text": "Gumball", "next": "c1_gb_start" },
            { "text": "Dexters Labor", "next": "c1_dx_start" },
            { "text": "Powerpuff Girls", "next": "c1_ppg_start" },
            { "text": "Gravity Falls", "next": "c1_gf_start" }
        ]
    },

    "c1_ooa_start": {
        "text": "Der Nexus stabilisiert fünf getrennte Cartoon-Realitäten. Ooo wirkt instabil, als würde es zwischen Versionen wechseln. Finn, Jake und Marceline sind alle in der Nähe – und keiner von ihnen wirkt völlig normal.",
        "background": "./game_images/background_at_ooo.png",
        "choices": [
            { "text": "Finn ansprechen", "next": "at_finn" },
            { "text": "Jake ansprechen", "next": "at_jake" },
            { "text": "Marceline ansprechen", "next": "at_marceline", "karma": -1 },
            { "text": "Die Umgebung untersuchen", "next": "at_6" }
        ]
    },

    "at_finn": {
        "text": "Finn steht angespannt da, die Hände geballt. 'Okay... das fühlt sich nicht wie ein normales Abenteuer an. Eher so, als würde jemand an der Welt ziehen.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finn.png",
        "choices": [
            { "text": "Nach Details fragen", "next": "at_finn_detail" },
            { "text": "Beruhigen", "next": "at_group" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_finn_detail": {
        "text": "Finn: 'Ich hatte Träume... in denen alles falsch war. Und jetzt fühlt es sich an, als würden die Träume zurück in die Realität sickern.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finnDenken.png",
        "choices": [
            { "text": "Das ist gefährlich", "next": "at_11" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_jake": {
        "text": "Jake liegt halb entspannt da, obwohl die Realität flackert. 'Entweder ist Ooo kaputt oder ich hab wieder komische Sandwiches gegessen.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake.png",
        "choices": [
            { "text": "Das ist ernst", "next": "at_jake_serious" },
            { "text": "Was spürst du?", "next": "at_jake_sense" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_jake_serious": {
        "text": "Jake richtet sich auf. 'Okay, ernst-Modus. Irgendwas greift hier von außen rein. Und es fühlt sich nicht freundlich an.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake2.png",
        "choices": [
            { "text": "Untersuchen", "next": "at_8" },
            { "text": "Vertrauen", "next": "at_7", "karma": 1 }
        ]
    },

    "at_jake_sense": {
        "text": "Jake schnuppert in die Luft. 'Das riecht wie… Realität, die nicht fertig gerendert wurde.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake2.png",
        "choices": [
            { "text": "Untersuchen", "next": "at_8" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_marceline": {
        "text": "Marceline spielt eine verzerrte Melodie. 'Ooo klingt heute wie ein kaputtes Lied… und jemand hat den Text geändert.' Sie schaut in eine Richtung, die du nicht definieren kannst.",
        "background": "./game_images/background_at_cave.png",
        "character": "./game_images/character_at_marceline.png",
        "choices": [
            { "text": "Zuhören", "next": "at_9", "karma": 1 },
            { "text": "Nachfragen", "next": "at_10" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_group": {
        "text": "Finn, Jake und Marceline stehen gemeinsam in der instabilen Realität von Ooo. Jeder reagiert anders auf dieselbe Störung – aber alle spüren sie.",
        "choices": [
            { "text": "Finn beobachten", "next": "at_finn" },
            { "text": "Jake beobachten", "next": "at_jake" },
            { "text": "Marceline beobachten", "next": "at_marceline" },
            { "text": "Umgebung untersuchen", "next": "at_6" }
        ]
    },

    "at_6": {
        "text": "Die Welt flackert. Ooo verliert kurz seine Stabilität.",
        "background": "./game_images/background_at_oooGlitch.png",
        "choices": [
            { "text": "Weitergehen", "next": "at_12" }
        ]
    },

    "at_11": {
        "text": "Finn zeigt in den Himmel. Ein Schatten formt sich dort – ständig wechselnd, nie stabil.",
        "choices": [
            { "text": "Ansehen", "next": "at_13" },
            { "text": "Ignorieren", "next": "at_12", "karma": -1 }
        ]
    },

    "at_12": {
        "text": "Etwas folgt dir durch die Realitätsschicht.",
        "choices": [
            { "text": "Wegrennen", "next": "at_14" }
        ]
    },

    "at_13": {
        "text": "Der Schatten im Himmel sieht aus wie ein Gesicht, das sich ständig neu formt.",
        "choices": [
            { "text": "Berühren versuchen", "next": "at_15", "karma": 2 },
            { "text": "Zurückweichen", "next": "at_14" }
        ]
    },

    "at_14": {
        "text": "Jake öffnet einen stabilen Riss in der Realität.",
        "choices": [
            { "text": "Durchgehen", "next": "at_16" },
            { "text": "Zögern", "next": "at_12", "karma": -1 }
        ]
    },

    "at_15": {
        "text": "Du siehst eine zweite Version von Finn, die dich direkt anstarrt.",
        "choices": [
            { "text": "Konfrontieren", "next": "at_17", "karma": -2 },
            { "text": "Akzeptieren", "next": "at_16", "karma": 1 }
        ]
    },

    "at_16": {
        "text": "Im Himmel erscheint kurz die Silhouette des Lich.",
        "choices": [
            { "text": "Angreifen", "next": "at_18", "karma": -2 },
            { "text": "Beobachten", "next": "at_18" }
        ]
    },

    "at_17": {
        "text": "Finn sagt: 'Das bist nicht du... oder doch?'",
        "choices": [
            { "text": "Zustimmen", "next": "at_19", "karma": 1 },
            { "text": "Ablehnen", "next": "at_19", "karma": -1 }
        ]
    },

    "at_18": {
        "text": "Ooo beginnt zu zerfallen und neu zu laden.",
        "choices": [
            { "text": "Stabilisieren helfen", "next": "at_20", "karma": 2 },
            { "text": "Abwarten", "next": "at_20", "karma": -1 }
        ]
    },

    "at_19": {
        "text": "Marceline reicht dir einen Schatten-Splitter.",
        "choices": [
            { "text": "Nehmen", "next": "at_20", "gain_item": "shadow_fragment" }
        ]
    },

    "at_20": {
        "text": "Jake: 'Der Lich nutzt mehrere Versionen von Ooo gleichzeitig.'",
        "choices": [
            { "text": "Verstehen", "next": "at_21", "karma": 2 },
            { "text": "Zweifeln", "next": "at_21", "karma": -2 }
        ]
    },

    "at_21": {
        "text": "Finn findet ein zerbrochenes Stück des Enchiridion.",
        "choices": [
            { "text": "Nehmen", "next": "at_22", "gain_item": "enchiridion_piece" }
        ]
    },

    "at_22": {
        "text": "Mehrere Versionen von Ooo überlagern sich am Himmel.",
        "choices": [
            { "text": "Analysieren", "next": "at_23" },
            { "text": "Ignorieren", "next": "at_23", "karma": -1 }
        ]
    },

    "at_23": {
        "text": "Marceline: 'Etwas außerhalb greift ein.'",
        "choices": [
            { "text": "Zuhören", "next": "at_24", "karma": 2 },
            { "text": "Ablehnen", "next": "at_24", "karma": -2 }
        ]
    },

    "at_24": {
        "text": "Jake stabilisiert kurz die Realität.",
        "choices": [
            { "text": "Vertrauen", "next": "at_25", "karma": 2 },
            { "text": "Misstrauen", "next": "at_25", "karma": -2 }
        ]
    },

    "at_25": {
        "text": "Finn: 'Wir sind nur eine von vielen Versionen.'",
        "choices": [
            { "text": "Akzeptieren", "next": "at_26", "karma": 1 },
            { "text": "Ablehnen", "next": "at_26", "karma": -1 }
        ]
    },

    "at_26": {
        "text": "Der Lich erscheint erneut, diesmal stabiler.",
        "choices": [
            { "text": "Kampf vorbereiten", "next": "at_27", "karma": -2 },
            { "text": "Beobachten", "next": "at_27" }
        ]
    },

    "at_27": {
        "text": "Alle kämpfen gemeinsam gegen den Lich.",
        "choices": [
            { "text": "Unterstützen", "next": "at_28", "karma": 2 },
            { "text": "Zögern", "next": "at_28", "karma": -1 }
        ]
    },

    "at_28": {
        "text": "Der Lich zerfällt in Fragmente.",
        "choices": [
            { "text": "Fragment nehmen", "next": "at_29", "gain_item": "lich_fragment" },
            { "text": "Ignorieren", "next": "at_29" }
        ]
    },

    "at_29": {
        "text": "Ooo stabilisiert sich kurz, doch der Nexus öffnet sich am Himmel.",
        "choices": [
            { "text": "Weiter", "next": "at_30" }
        ]
    },

    "at_30": {
        "text": "Der Nexus zieht Ooo in die Verbindung aller Welten. Kapitel 2 wird vorbereitet.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_gb_start": {
        "text": "Elmore wirkt falsch gerendert. Gebäude wiederholen sich leicht versetzt, als würde die Stadt in Schleifen laufen. Gumball, Darwin und Anais reagieren, als hätten sie dich schon einmal getroffen.",
        "choices": [
            { "text": "Gumball folgen", "next": "gb_1", "karma": 1 },
            { "text": "Darwin folgen", "next": "gb_2" },
            { "text": "Anais folgen", "next": "gb_3", "karma": 2 },
            { "text": "Banana Joe beobachten", "next": "gb_4" }
        ]
    },

    "gb_1": {
        "text": "Gumball: 'Ich hab Erinnerungen an dich aus einer Version, die nicht passiert ist.'",
        "choices": [
            { "text": "Nachfragen", "next": "gb_5" },
            { "text": "Ignorieren", "next": "gb_6", "karma": -1 },
            { "text": "Beweise verlangen", "next": "gb_7", "karma": 1 }
        ]
    },

    "gb_2": {
        "text": "Darwin: 'Elmore fühlt sich an wie ein Loop, der nie endet.'",
        "choices": [
            { "text": "Vertrauen", "next": "gb_7", "karma": 2 },
            { "text": "Zweifeln", "next": "gb_6", "karma": -1 },
            { "text": "Weitergehen", "next": "gb_8" }
        ]
    },

    "gb_3": {
        "text": "Anais: 'Die Stadt wurde mehrfach überschrieben. Ich sehe die Restdaten.'",
        "choices": [
            { "text": "Daten sehen", "next": "gb_9" },
            { "text": "Ignorieren", "next": "gb_6", "karma": -2 },
            { "text": "Helfen", "next": "gb_10", "karma": 2 }
        ]
    },

    "gb_4": {
        "text": "Banana Joe wirkt kurz doppelt. 'Hast du mich schon einmal gesehen?'",
        "choices": [
            { "text": "Ja", "next": "gb_6" },
            { "text": "Nein", "next": "gb_6", "karma": -1 }
        ]
    },

    "gb_5": {
        "text": "Gumball zeigt dir eine fehlerhafte Stadtversion, die über die echte gelegt ist.",
        "choices": [
            { "text": "Analysieren", "next": "gb_11", "gain_item": "elmore_glitch_map" },
            { "text": "Zurückziehen", "next": "gb_6", "karma": -1 }
        ]
    },

    "gb_6": {
        "text": "Elmore flackert. Einige Figuren bewegen sich außerhalb ihrer Frames.",
        "choices": [
            { "text": "Weiter", "next": "gb_12" }
        ]
    },

    "gb_7": {
        "text": "Darwin: 'Etwas schreibt unsere Realität in Echtzeit neu.'",
        "choices": [
            { "text": "Zustimmen", "next": "gb_10", "karma": 2 },
            { "text": "Ablehnen", "next": "gb_12", "karma": -2 }
        ]
    },

    "gb_8": {
        "text": "Die Schule von Elmore wiederholt denselben Moment erneut.",
        "choices": [
            { "text": "Untersuchen", "next": "gb_11" }
        ]
    },

    "gb_9": {
        "text": "Anais zeigt dir Datenfragmente einer gelöschten Elmore-Version.",
        "choices": [
            { "text": "Speichern", "next": "gb_13", "gain_item": "anais_data_core" }
        ]
    },

    "gb_10": {
        "text": "Gumball verliert kurz die Synchronisation mit der Realität.",
        "choices": [
            { "text": "Stabilisieren helfen", "next": "gb_13", "karma": 2 },
            { "text": "Beobachten", "next": "gb_12" }
        ]
    },

    "gb_11": {
        "text": "Der Glitch zeigt einen Riss unterhalb der Schule.",
        "choices": [
            { "text": "Untersuchen", "next": "gb_14" },
            { "text": "Ignorieren", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_12": {
        "text": "Elmore beginnt sich in Versionen zu duplizieren.",
        "choices": [
            { "text": "Weiter", "next": "gb_15" }
        ]
    },

    "gb_13": {
        "text": "Darwin gibt dir einen Stabilitätschip.",
        "choices": [
            { "text": "Nehmen", "next": "gb_15", "gain_item": "stability_chip" }
        ]
    },

    "gb_14": {
        "text": "Der Riss zeigt mehrere Versionen der Schule gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "gb_16", "gain_item": "school_rift_key" },
            { "text": "Berühren", "next": "gb_16", "karma": 2 }
        ]
    },

    "gb_15": {
        "text": "Gumball: 'Wir sind nicht die erste Version von uns.'",
        "choices": [
            { "text": "Glauben", "next": "gb_17", "karma": 2 },
            { "text": "Zweifeln", "next": "gb_17", "karma": -2 }
        ]
    },

    "gb_16": {
        "text": "Anais: 'Der Glitch ist ein Zugangspunkt.'",
        "choices": [
            { "text": "Zuhören", "next": "gb_17", "karma": 2 },
            { "text": "Ignorieren", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_17": {
        "text": "Elmore beginnt sich zu überlagern mit anderen Realitäten.",
        "choices": [
            { "text": "Weitergehen", "next": "gb_18" }
        ]
    },

    "gb_18": {
        "text": "Banana Joe sagt: 'Ich erinnere mich an Dinge, die nie passiert sind.'",
        "choices": [
            { "text": "Fragen", "next": "gb_19" },
            { "text": "Ignorieren", "next": "gb_19", "karma": -1 }
        ]
    },

    "gb_19": {
        "text": "Der Riss unter der Schule beginnt sich zu öffnen.",
        "choices": [
            { "text": "Untersuchen", "next": "gb_20" }
        ]
    },

    "gb_20": {
        "text": "Darwin stabilisiert kurz die Umgebung.",
        "choices": [
            { "text": "Vertrauen", "next": "gb_21", "karma": 2 },
            { "text": "Misstrauen", "next": "gb_21", "karma": -2 }
        ]
    },

    "gb_21": {
        "text": "Gumball zeigt dir eine alternative Version von Elmore.",
        "choices": [
            { "text": "Analysieren", "next": "gb_22", "gain_item": "elmore_alt_map" },
            { "text": "Ablehnen", "next": "gb_22", "karma": -1 }
        ]
    },

    "gb_22": {
        "text": "Anais: 'Diese Welt wird rekursiv geschrieben.'",
        "choices": [
            { "text": "Glauben", "next": "gb_23", "karma": 2 },
            { "text": "Zweifeln", "next": "gb_23", "karma": -2 }
        ]
    },

    "gb_23": {
        "text": "Elmore kollabiert kurz und setzt sich neu zusammen.",
        "choices": [
            { "text": "Weiter", "next": "gb_24" }
        ]
    },

    "gb_24": {
        "text": "Gumball: 'Etwas nutzt uns als Simulation.'",
        "choices": [
            { "text": "Akzeptieren", "next": "gb_25", "karma": 1 },
            { "text": "Ablehnen", "next": "gb_25", "karma": -1 }
        ]
    },

    "gb_25": {
        "text": "Der Himmel zeigt den Nexus über Elmore.",
        "choices": [
            { "text": "Beobachten", "next": "gb_26" }
        ]
    },

    "gb_26": {
        "text": "Darwin öffnet einen stabilen Riss.",
        "choices": [
            { "text": "Durchgehen", "next": "gb_27", "required_item": "stability_chip" },
            { "text": "Zögern", "next": "gb_27", "karma": -1 }
        ]
    },

    "gb_27": {
        "text": "Alle Versionen von Elmore überlagern sich vollständig.",
        "choices": [
            { "text": "Weiter", "next": "gb_28" }
        ]
    },

    "gb_28": {
        "text": "Anais: 'Kapitel 1 ist eine Testsimulation.'",
        "choices": [
            { "text": "Glauben", "next": "gb_29", "karma": 2 },
            { "text": "Zweifeln", "next": "gb_29", "karma": -2 }
        ]
    },

    "gb_29": {
        "text": "Gumball sieht dich direkt an: 'Du bist nicht aus Elmore.'",
        "choices": [
            { "text": "Weiter", "next": "gb_30" }
        ]
    },

    "gb_30": {
        "text": "Elmore öffnet einen stabilen Nexus-Riss. Verbindung zu allen Welten wird aktiv.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_dx_start": {
        "text": "Dexters Labor existiert in mehreren überlagerten Versionen gleichzeitig. Maschinen laufen ohne Bedienung. Dee Dee erscheint an Orten, an denen sie nicht sein sollte. Mandark beobachtet alles mit einem zu ruhigen Lächeln.",
        "choices": [
            { "text": "Dexter folgen", "next": "dx_1", "karma": 1 },
            { "text": "Mandark folgen", "next": "dx_2", "karma": -1 },
            { "text": "Labor untersuchen", "next": "dx_3" },
            { "text": "Dee Dee folgen", "next": "dx_4", "karma": 2 }
        ]
    },

    "dx_1": {
        "text": "Dexter: 'Ich habe dieses Szenario bereits mehrfach simuliert. Du gehörst nicht in diese Iteration.'",
        "choices": [
            { "text": "Nachfragen", "next": "dx_5" },
            { "text": "Ignorieren", "next": "dx_6", "karma": -1 },
            { "text": "Beweise verlangen", "next": "dx_7", "karma": 1 }
        ]
    },

    "dx_2": {
        "text": "Mandark: 'Dexter versteht nur lineare Realität. Das hier ist rekursiv.'",
        "choices": [
            { "text": "Zustimmen", "next": "dx_7", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_6", "karma": -2 },
            { "text": "Weitergehen", "next": "dx_8" }
        ]
    },

    "dx_3": {
        "text": "Du findest eine Datei: REALITY_PATCH_LOG. Sie wurde hunderte Male überschrieben.",
        "choices": [
            { "text": "Datei analysieren", "next": "dx_9", "gain_item": "reality_log" },
            { "text": "Schließen", "next": "dx_6", "karma": -1 }
        ]
    },

    "dx_4": {
        "text": "Dee Dee lächelt: 'Ich bin nur ein Fehler im System... oder die Lösung.'",
        "choices": [
            { "text": "Vertrauen", "next": "dx_10", "karma": 2 },
            { "text": "Misstrauen", "next": "dx_6", "karma": -2 }
        ]
    },

    "dx_5": {
        "text": "Dexter zeigt dir mehrere Versionen von dir selbst im Laborbildschirm.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_11" },
            { "text": "Abwenden", "next": "dx_6", "karma": -1 }
        ]
    },

    "dx_6": {
        "text": "Das Labor beginnt sich selbst neu zu kompilieren.",
        "choices": [
            { "text": "Weiter", "next": "dx_12" }
        ]
    },

    "dx_7": {
        "text": "Mandark: 'Du bist ein Fremdprozess in Dexters Simulation.'",
        "choices": [
            { "text": "Akzeptieren", "next": "dx_10", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_12", "karma": -2 }
        ]
    },

    "dx_8": {
        "text": "Dee Dee verändert unbewusst die Laborstruktur.",
        "choices": [
            { "text": "Folgen", "next": "dx_13" },
            { "text": "Ignorieren", "next": "dx_12", "karma": -1 }
        ]
    },

    "dx_9": {
        "text": "Die Logdatei zeigt: Realität wurde mehrfach gepatcht und zurückgesetzt.",
        "choices": [
            { "text": "Speichern", "next": "dx_13", "gain_item": "patch_core" }
        ]
    },

    "dx_10": {
        "text": "Dexter: 'Dee Dee ist stabiler als jede meiner Formeln.'",
        "choices": [
            { "text": "Zuhören", "next": "dx_14", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_12", "karma": -2 }
        ]
    },

    "dx_11": {
        "text": "Du siehst unzählige Dexter-Varianten, die alle leicht unterschiedlich sind.",
        "choices": [
            { "text": "Analysieren", "next": "dx_14" },
            { "text": "Ignorieren", "next": "dx_12", "karma": -1 }
        ]
    },

    "dx_12": {
        "text": "Ein Systemfehler breitet sich durch das Labor aus.",
        "choices": [
            { "text": "Weitergehen", "next": "dx_15" }
        ]
    },

    "dx_13": {
        "text": "Dee Dee berührt eine Maschine und stabilisiert sie kurzzeitig.",
        "choices": [
            { "text": "Näher beobachten", "next": "dx_16" },
            { "text": "Zurückziehen", "next": "dx_15" }
        ]
    },

    "dx_14": {
        "text": "Mandark: 'Dieses Labor ist nur ein Layer in einer größeren Struktur.'",
        "choices": [
            { "text": "Glauben", "next": "dx_17", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_15", "karma": -2 }
        ]
    },

    "dx_15": {
        "text": "Das Labor beginnt sich in sich selbst zu falten.",
        "choices": [
            { "text": "Weiter", "next": "dx_18" }
        ]
    },

    "dx_16": {
        "text": "Dexter erkennt: Dee Dee ist ein Stabilitätsanker der Realität.",
        "choices": [
            { "text": "Speichern", "next": "dx_17", "gain_item": "stability_anchor" }
        ]
    },

    "dx_17": {
        "text": "Dexter: 'Wenn sie entfernt wird, kollabiert alles.'",
        "choices": [
            { "text": "Schützen", "next": "dx_18", "karma": 2 },
            { "text": "Ignorieren", "next": "dx_18", "karma": -2 }
        ]
    },

    "dx_18": {
        "text": "Das Labor zeigt einen Riss in der Realität unter dem Boden.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_19" },
        ]
    },

    "dx_19": {
        "text": "Der Riss zeigt mehrere Labore gleichzeitig überlagert.",
        "choices": [
            { "text": "Analysieren", "next": "dx_20", "gain_item": "lab_rift_data" },
            { "text": "Berühren", "next": "dx_20", "karma": 2 }
        ]
    },

    "dx_20": {
        "text": "Mandark: 'Dexter hat das System mehrfach neu geschrieben.'",
        "choices": [
            { "text": "Zuhören", "next": "dx_21", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_21", "karma": -2 }
        ]
    },

    "dx_21": {
        "text": "Dee Dee sagt: 'Ich erinnere mich an Dinge, die nie passiert sind.'",
        "choices": [
            { "text": "Fragen", "next": "dx_22" },
            { "text": "Ignorieren", "next": "dx_15", "karma": -1 }
        ]
    },

    "dx_22": {
        "text": "Dexter zeigt dir ein Gerät namens REALITY COMPILER.",
        "choices": [
            { "text": "Anfassen", "next": "dx_23", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_15", "karma": -2 }
        ]
    },

    "dx_23": {
        "text": "Du siehst, dass jede Handlung eine neue Version der Welt erzeugt.",
        "choices": [
            { "text": "Analysieren", "next": "dx_24" }
        ]
    },

    "dx_24": {
        "text": "Dexter: 'Wir sind nicht die Originalinstanzen.'",
        "choices": [
            { "text": "Akzeptieren", "next": "dx_25", "karma": 1 },
            { "text": "Ablehnen", "next": "dx_25", "karma": -1 }
        ]
    },

    "dx_25": {
        "text": "Mandark öffnet einen stabilen Riss unter dem Labor.",
        "choices": [
            { "text": "Durchgehen", "next": "dx_26", "required_item": "lab_rift_data" },
            { "text": "Zögern", "next": "dx_26" }
        ]
    },

    "dx_26": {
        "text": "Das Labor beginnt sich vollständig zu überschreiben.",
        "choices": [
            { "text": "Weiter", "next": "dx_27" }
        ]
    },

    "dx_27": {
        "text": "Dee Dee stabilisiert kurz die gesamte Realität.",
        "choices": [
            { "text": "Vertrauen", "next": "dx_28", "karma": 2 },
            { "text": "Misstrauen", "next": "dx_28", "karma": -2 }
        ]
    },

    "dx_28": {
        "text": "Dexter: 'Etwas außerhalb dieses Systems greift ein.'",
        "choices": [
            { "text": "Verstehen", "next": "dx_29", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_29", "karma": -2 }
        ]
    },

    "dx_29": {
        "text": "Alle Versionen des Labors überlagern sich vollständig.",
        "choices": [
            { "text": "Weiter", "next": "dx_30" }
        ]
    },

    "dx_30": {
        "text": "Das Labor kollabiert in den Nexus und öffnet die Verbindung zu allen Realitäten. Kapitel 2 wird vorbereitet.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_ppg_start": {
        "text": "Townsville wirkt stabil, aber falsch getaktet. Gebäude wiederholen sich minimal versetzt. Blossom, Bubbles und Buttercup wirken, als würden sie dich schon kennen – aus einer anderen Version.",
        "choices": [
            { "text": "Blossom folgen", "next": "ppg_1", "karma": 1 },
            { "text": "Bubbles folgen", "next": "ppg_2", "karma": 2 },
            { "text": "Buttercup folgen", "next": "ppg_3", "karma": -1 },
            { "text": "Professor Utonium suchen", "next": "ppg_4" }
        ]
    },

    "ppg_1": {
        "text": "Blossom: 'Chemical X reagiert auf dich. Das ist nicht normal.'",
        "choices": [
            { "text": "Nachfragen", "next": "ppg_5" },
            { "text": "Ignorieren", "next": "ppg_6", "karma": -1 },
            { "text": "Beweise verlangen", "next": "ppg_7", "karma": 1 }
        ]
    },

    "ppg_2": {
        "text": "Bubbles: 'Ich sehe manchmal andere Townsville-Versionen... sie sind traurig.'",
        "choices": [
            { "text": "Trösten", "next": "ppg_5", "karma": 3 },
            { "text": "Zweifeln", "next": "ppg_6", "karma": -2 },
            { "text": "Fragen welche Versionen", "next": "ppg_7" }
        ]
    },

    "ppg_3": {
        "text": "Buttercup: 'Wenn etwas falsch ist, schlag ich es kaputt.'",
        "choices": [
            { "text": "Unterstützen", "next": "ppg_6", "karma": -2 },
            { "text": "Stoppen", "next": "ppg_5", "karma": 2 },
            { "text": "Beobachten", "next": "ppg_8" }
        ]
    },

    "ppg_4": {
        "text": "Professor Utonium wirkt kurz nicht vollständig real. 'Ich habe euch mehrfach erschaffen... oder nicht?'",
        "choices": [
            { "text": "Fragen", "next": "ppg_7" },
            { "text": "Ignorieren", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_5": {
        "text": "Blossom zeigt dir eine instabile Chemical X Analyse. Sie flackert wie ein kaputter Code.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_9", "gain_item": "chemical_x_data" },
            { "text": "Zurückziehen", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_6": {
        "text": "Townsville beginnt sich kurz zu wiederholen – als würde die Realität einen Frame springen.",
        "choices": [
            { "text": "Weiter", "next": "ppg_10" }
        ]
    },

    "ppg_7": {
        "text": "Blossom: 'Ihr seid nicht die erste Generation der Powerpuff Girls.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_11", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_10", "karma": -2 }
        ]
    },

    "ppg_8": {
        "text": "Buttercup bemerkt einen Riss im Himmel über Townsville.",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_12" },
            { "text": "Ignorieren", "next": "ppg_10", "karma": -1 }
        ]
    },

    "ppg_9": {
        "text": "Die Chemical X Daten zeigen mehrere Inkarnationen von Townsville.",
        "choices": [
            { "text": "Speichern", "next": "ppg_11", "gain_item": "chemical_x_core" }
        ]
    },

    "ppg_10": {
        "text": "Bubbles sagt leise: 'Etwas benutzt uns als Schutzschild.'",
        "choices": [
            { "text": "Zuhören", "next": "ppg_11", "karma": 2 },
            { "text": "Ablehnen", "next": "ppg_13", "karma": -2 }
        ]
    },

    "ppg_11": {
        "text": "Professor Utonium: 'Chemical X verbindet alle Versionen von uns.'",
        "choices": [
            { "text": "Verstehen", "next": "ppg_13", "karma": 2 },
            { "text": "Ignorieren", "next": "ppg_12", "karma": -1 }
        ]
    },

    "ppg_12": {
        "text": "Der Riss im Himmel zeigt mehrere Townsville-Schichten gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_14", "gain_item": "townsville_rift" },
            { "text": "Berühren", "next": "ppg_13", "karma": 2 }
        ]
    },

    "ppg_13": {
        "text": "Buttercup verliert kurz die Kontrolle über ihre Kraft.",
        "choices": [
            { "text": "Helfen", "next": "ppg_15", "karma": 2 },
            { "text": "Beobachten", "next": "ppg_14" }
        ]
    },

    "ppg_14": {
        "text": "Blossom: 'Wir sind Experimente in mehreren Iterationen.'",
        "choices": [
            { "text": "Akzeptieren", "next": "ppg_15", "karma": 1 },
            { "text": "Ablehnen", "next": "ppg_16", "karma": -2 }
        ]
    },

    "ppg_15": {
        "text": "Bubbles übergibt dir ein stabilisierendes Emotion-Fragment.",
        "choices": [
            { "text": "Nehmen", "next": "ppg_16", "gain_item": "emotion_core" }
        ]
    },

    "ppg_16": {
        "text": "Mojo Jojo taucht auf: 'Ich habe nichts zerstört... noch nicht.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_17", "karma": -2 },
            { "text": "Beobachten", "next": "ppg_17" }
        ]
    },

    "ppg_17": {
        "text": "Townsville beginnt sich in Schleifen zu bewegen.",
        "choices": [
            { "text": "Weitergehen", "next": "ppg_18" }
        ]
    },

    "ppg_18": {
        "text": "Blossom: 'Etwas schreibt unsere Realität neu.'",
        "choices": [
            { "text": "Zustimmen", "next": "ppg_19", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_19", "karma": -2 }
        ]
    },

    "ppg_19": {
        "text": "Der Himmel zeigt kurz den Nexus über Townsville.",
        "choices": [
            { "text": "Beobachten", "next": "ppg_20" }
        ]
    },

    "ppg_20": {
        "text": "Professor Utonium aktiviert ein verborgenes Protokoll.",
        "choices": [
            { "text": "Stoppen", "next": "ppg_21", "karma": 1 },
            { "text": "Zulassen", "next": "ppg_21", "karma": -1 }
        ]
    },

    "ppg_21": {
        "text": "Buttercup: 'Ich spüre Versionen von mir, die ich nicht bin.'",
        "choices": [
            { "text": "Verstehen", "next": "ppg_22", "karma": 2 },
            { "text": "Ignorieren", "next": "ppg_22", "karma": -2 }
        ]
    },

    "ppg_22": {
        "text": "Mojo Jojo zeigt dir einen Riss unter Townsville.",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_23" }
        ]
    },

    "ppg_23": {
        "text": "Der Riss zeigt mehrere Townsville-Versionen gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_24", "gain_item": "chemical_rift_key" },
            { "text": "Berühren", "next": "ppg_24", "karma": 2 }
        ]
    },

    "ppg_24": {
        "text": "Bubbles stabilisiert kurz die Realität um euch herum.",
        "choices": [
            { "text": "Vertrauen", "next": "ppg_25", "karma": 2 },
            { "text": "Misstrauen", "next": "ppg_25", "karma": -2 }
        ]
    },

    "ppg_25": {
        "text": "Blossom: 'Chemical X ist ein System zur Realitätsverknüpfung.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_26", "karma": 2 },
            { "text": "Ablehnen", "next": "ppg_26", "karma": -2 }
        ]
    },

    "ppg_26": {
        "text": "Townsville beginnt sich mit anderen Welten zu überlagern.",
        "choices": [
            { "text": "Weiter", "next": "ppg_27" }
        ]
    },

    "ppg_27": {
        "text": "Professor Utonium: 'Ihr seid Stabilitätsanker der Realität.'",
        "choices": [
            { "text": "Akzeptieren", "next": "ppg_28", "karma": 1 },
            { "text": "Ablehnen", "next": "ppg_28", "karma": -1 }
        ]
    },

    "ppg_28": {
        "text": "Mojo Jojo öffnet einen stabilen Riss unter Townsville.",
        "choices": [
            { "text": "Durchgehen (wenn stabilisiert)", "next": "ppg_29", "required_item": "chemical_rift_key" },
            { "text": "Zögern", "next": "ppg_29" }
        ]
    },

    "ppg_29": {
        "text": "Alle Versionen von Townsville überlagern sich vollständig.",
        "choices": [
            { "text": "Weiter", "next": "ppg_30" }
        ]
    },

    "ppg_30": {
        "text": "Townsville kollabiert in den Nexus und verbindet sich mit allen Realitäten. Übergang zu Kapitel 2 wird aktiviert.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_gf_start": {
        "text": "Gravity Falls wirkt still. Zu still. Die Schilder flackern, der Himmel zeigt für Sekunden seltsame Symbole und irgendwo im Wald hörst du eine Stimme lachen. Dipper hält ein Journal fest umklammert, während Mabel versucht nervös zu lächeln.",
        "choices": [
            { "text": "Dipper folgen", "next": "gf_1", "karma": 1 },
            { "text": "Mabel folgen", "next": "gf_2", "karma": 2 },
            { "text": "Das Mystery Shack untersuchen", "next": "gf_3" }
        ]
    },

    "gf_1": {
        "text": "Dipper zeigt dir Journal 3. Einige Seiten fehlen.",
        "choices": [
            { "text": "Die fehlenden Seiten suchen", "next": "gf_4", "gain_item": "journal_page" },
            { "text": "Dipper ignorieren", "next": "gf_5", "karma": -1 }
        ]
    },

    "gf_2": {
        "text": "Mabel zeigt dir einen glitzernden Pullover. Darin steckt ein versteckter Schlüssel.",
        "choices": [
            { "text": "Schlüssel nehmen", "next": "gf_4", "gain_item": "mystery_key" },
            { "text": "Ablehnen", "next": "gf_5" }
        ]
    },

    "gf_3": {
        "text": "Im Keller des Mystery Shack findest du eine beschädigte Maschine von Ford.",
        "choices": [
            { "text": "Maschine reparieren", "next": "gf_6", "gain_item": "machine_core" },
            { "text": "Finger weg", "next": "gf_5" }
        ]
    },

    "gf_4": {
        "text": "Dipper entdeckt Symbole im Wald. Sie sehen aus wie Warnungen.",
        "choices": [
            { "text": "Symbole analysieren", "next": "gf_7", "karma": 2 },
            { "text": "Ignorieren", "next": "gf_8", "karma": -1 }
        ]
    },

    "gf_5": {
        "text": "Die Realität flackert kurz. Für eine Sekunde fehlt der Mond.",
        "choices": [
            { "text": "Weiter", "next": "gf_8" }
        ]
    },

    "gf_6": {
        "text": "Die Maschine aktiviert sich und zeigt eine versteckte Nachricht von Ford.",
        "choices": [
            { "text": "Nachricht anhören", "next": "gf_7", "karma": 1 },
            { "text": "Ausschalten", "next": "gf_8" }
        ]
    },

    "gf_7": {
        "text": "Ford erscheint aus einem Portal. 'Bill Cipher lebt noch.'",
        "choices": [
            { "text": "Ford glauben", "next": "gf_9", "karma": 2 },
            { "text": "Misstrauen", "next": "gf_10", "karma": -2 }
        ]
    },

    "gf_8": {
        "text": "Wendy warnt dich vor Stimmen im Wald.",
        "choices": [
            { "text": "Mit Wendy gehen", "next": "gf_9" },
            { "text": "Alleine weiter", "next": "gf_10", "karma": -1 }
        ]
    },

    "gf_9": {
        "text": "Im Wald findest du ein seltsames Auge im Baum.",
        "choices": [
            { "text": "Untersuchen", "next": "gf_11", "gain_item": "cipher_eye" },
            { "text": "Zerstören", "next": "gf_12", "karma": 1 }
        ]
    },

    "gf_10": {
        "text": "Gideon taucht plötzlich auf. 'Du bist zu spät.'",
        "choices": [
            { "text": "Gideon bedrohen", "next": "gf_12", "karma": -2 },
            { "text": "Fragen stellen", "next": "gf_11" }
        ]
    },

    "gf_11": {
        "text": "Das Auge reagiert auf das Journalfragment.",
        "choices": [
            { "text": "Kombinieren", "next": "gf_13", "required_item": "journal_page" },
            { "text": "Ignorieren", "next": "gf_14" }
        ]
    },

    "gf_12": {
        "text": "Der Wald verändert seine Form.",
        "choices": [
            { "text": "Weiterlaufen", "next": "gf_14" }
        ]
    },

    "gf_13": {
        "text": "Ein versteckter Weg öffnet sich unter den Bäumen.",
        "choices": [
            { "text": "Betreten", "next": "gf_15", "karma": 2 },
            { "text": "Warten", "next": "gf_14" }
        ]
    },

    "gf_14": {
        "text": "Mabel findet einen seltsamen Kristall am Boden.",
        "choices": [
            { "text": "Kristall nehmen", "next": "gf_15", "gain_item": "rift_crystal" },
            { "text": "Liegen lassen", "next": "gf_15" }
        ]
    },

    "gf_15": {
        "text": "Ford erklärt, dass Bill Cipher Menschen durch Träume kontrolliert.",
        "choices": [
            { "text": "Traummaschine aktivieren", "next": "gf_16", "required_item": "machine_core" },
            { "text": "Ablehnen", "next": "gf_17", "karma": -1 }
        ]
    },

    "gf_16": {
        "text": "Du betrittst einen Traumraum voller schwebender Symbole.",
        "choices": [
            { "text": "Symbol berühren", "next": "gf_18", "karma": 1 },
            { "text": "Abstand halten", "next": "gf_17" }
        ]
    },

    "gf_17": {
        "text": "Eine Stimme flüstert deinen Namen.",
        "choices": [
            { "text": "Antworten", "next": "gf_18", "karma": -1 },
            { "text": "Ignorieren", "next": "gf_19", "karma": 1 }
        ]
    },

    "gf_18": {
        "text": "Bill Cipher erscheint plötzlich lächelnd vor dir.",
        "choices": [
            { "text": "Mit Bill reden", "next": "gf_20", "karma": -2 },
            { "text": "Ford warnen", "next": "gf_19", "karma": 2 }
        ]
    },

    "gf_19": {
        "text": "Ford aktiviert Schutzrunen im Shack.",
        "choices": [
            { "text": "Runen verstärken", "next": "gf_21", "required_item": "rift_crystal" },
            { "text": "Nur beobachten", "next": "gf_21" }
        ]
    },

    "gf_20": {
        "text": "Bill bietet dir Macht über alle Cartoon-Welten an.",
        "choices": [
            { "text": "Annehmen", "next": "gf_22", "karma": -5 },
            { "text": "Ablehnen", "next": "gf_21", "karma": 3 }
        ]
    },

    "gf_21": {
        "text": "Soos bringt dir eine Kiste voller alter Artefakte.",
        "choices": [
            { "text": "Artefakte durchsuchen", "next": "gf_23", "gain_item": "gravity_orb" },
            { "text": "Ignorieren", "next": "gf_24" }
        ]
    },

    "gf_22": {
        "text": "Bills Auge beginnt kurz in deinem Schatten zu erscheinen.",
        "choices": [
            { "text": "Weiter", "next": "gf_24" }
        ]
    },

    "gf_23": {
        "text": "Dipper erkennt ein Symbol gegen Bill Cipher.",
        "choices": [
            { "text": "Symbol aktivieren", "next": "gf_25", "required_item": "cipher_eye" },
            { "text": "Nicht riskieren", "next": "gf_24" }
        ]
    },

    "gf_24": {
        "text": "Der Himmel über Gravity Falls reißt auf.",
        "choices": [
            { "text": "Zum Portal laufen", "next": "gf_26" }
        ]
    },

    "gf_25": {
        "text": "Bill schreit kurz auf. Die Realität stabilisiert sich für einen Moment.",
        "choices": [
            { "text": "Weiter", "next": "gf_26", "karma": 3 }
        ]
    },

    "gf_26": {
        "text": "Ford sagt: 'Nur jemand außerhalb dieser Welten kann den Nexus schließen.'",
        "choices": [
            { "text": "Helfen", "next": "gf_27", "karma": 2 },
            { "text": "Ablehnen", "next": "gf_27", "karma": -2 }
        ]
    },

    "gf_27": {
        "text": "Bill übernimmt kurz Gideons Körper.",
        "choices": [
            { "text": "Angreifen", "next": "gf_28", "required_item": "gravity_orb" },
            { "text": "Zurückweichen", "next": "gf_29", "karma": -1 }
        ]
    },

    "gf_28": {
        "text": "Das Gravity Orb stößt Bill aus Gideons Körper heraus.",
        "choices": [
            { "text": "Bill versiegeln", "next": "gf_30", "required_item": "mystery_key" },
            { "text": "Bill entkommen lassen", "next": "gf_29", "karma": -5 }
        ]
    },

    "gf_29": {
        "text": "Gravity Falls beginnt zu kollabieren, doch Ford öffnet einen letzten Ausgang.",
        "choices": [
            { "text": "Durch das Portal", "next": "gf_30" }
        ]
    },

    "gf_30": {
        "text": "Der Nexus verbindet sich mit Gravity Falls. Kapitel 2 wartet hinter dem Portal.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c2_start": {
        "text": "Der Nexus öffnet sich vollständig. Die fünf ersten Welten verschwinden hinter dir, doch neue Signale erscheinen sofort. Einige Dimensionen kollidieren bereits miteinander. Stimmen, Erinnerungen und ganze Orte werden vermischt. Eine unbekannte Entität beobachtet jede deiner Entscheidungen.",
        "choices": [
            { "text": "Teen Titans", "next": "c2_tt_start" },
            { "text": "Ben 10", "next": "c2_b10_start" },
            { "text": "Samurai Jack", "next": "c2_sj_start" },
            { "text": "Regular Show", "next": "c2_rs_start" },
            { "text": "Ninjago", "next": "c2_nj_start" }
        ]
    },

    "c2_tt_start": {
        "text": "Der Titans Tower steht unter Alarm. Rauch steigt aus den unteren Ebenen auf und überall flackern rote Warnlichter. Robin versucht die Systeme zu stabilisieren, während Raven spürt, dass jemand die Realität des Towers verändert hat.",
        "choices": [
            { "text": "Robin helfen", "next": "tt_1", "karma": 2 },
            { "text": "Raven folgen", "next": "tt_2", "karma": 2 },
            { "text": "Die unteren Ebenen untersuchen", "next": "tt_3" }
        ]
    },

    "tt_1": {
        "text": "Robin zeigt dir Überwachungsbilder. Deathstroke war im Tower.",
        "choices": [
            { "text": "Deathstroke verfolgen", "next": "tt_4", "karma": 1 },
            { "text": "Den Tower absichern", "next": "tt_5", "karma": 2 }
        ]
    },

    "tt_2": {
        "text": "Raven spürt dunkle Magie im Keller des Towers.",
        "choices": [
            { "text": "Mit Raven hinuntergehen", "next": "tt_6", "karma": 2 },
            { "text": "Die anderen warnen", "next": "tt_5" }
        ]
    },

    "tt_3": {
        "text": "Du findest verletzte Titan-Rekruten im Trainingsraum.",
        "choices": [
            { "text": "Ihnen helfen", "next": "tt_5", "karma": 3 },
            { "text": "Weitergehen", "next": "tt_4", "karma": -2 }
        ]
    },

    "tt_4": {
        "text": "Deathstroke erscheint auf einem Bildschirm. 'Die Titans werden sich gegenseitig zerstören.'",
        "choices": [
            { "text": "Die Verbindung hacken", "next": "tt_7", "gain_item": "deathstroke_codes" },
            { "text": "Robin informieren", "next": "tt_5" }
        ]
    },

    "tt_5": {
        "text": "Cyborg repariert die Verteidigungssysteme des Towers.",
        "choices": [
            { "text": "Cyborg helfen", "next": "tt_8", "karma": 2 },
            { "text": "Beast Boy suchen", "next": "tt_9" }
        ]
    },

    "tt_6": {
        "text": "Im Keller findest du ein schwarzes Portal. Raven erkennt die Energie von Trigon.",
        "choices": [
            { "text": "Portal schließen", "next": "tt_10", "required_item": "deathstroke_codes" },
            { "text": "Das Portal beobachten", "next": "tt_11", "karma": -1 }
        ]
    },

    "tt_7": {
        "text": "Du findest versteckte Daten über einen Angriff auf Jump City.",
        "choices": [
            { "text": "Die Stadt warnen", "next": "tt_12", "karma": 3 },
            { "text": "Nur die Titans informieren", "next": "tt_8" }
        ]
    },

    "tt_8": {
        "text": "Cyborg gibt dir einen Energiekern für die Tower-Systeme.",
        "choices": [
            { "text": "Energiekern nehmen", "next": "tt_13", "gain_item": "tower_core" },
            { "text": "Ablehnen", "next": "tt_13" }
        ]
    },

    "tt_9": {
        "text": "Beast Boy wird von Schattenkreaturen angegriffen.",
        "choices": [
            { "text": "Beast Boy retten", "next": "tt_13", "karma": 3 },
            { "text": "Die Kreaturen verfolgen", "next": "tt_14", "karma": -1 }
        ]
    },

    "tt_10": {
        "text": "Das Portal destabilisiert sich und eine Stimme schreit deinen Namen.",
        "choices": [
            { "text": "Das Ritual beenden", "next": "tt_15", "karma": 2 },
            { "text": "Fliehen", "next": "tt_14", "karma": -2 }
        ]
    },

    "tt_11": {
        "text": "Ein Schattenwesen springt aus dem Portal und greift Raven an.",
        "choices": [
            { "text": "Raven verteidigen", "next": "tt_15", "karma": 3 },
            { "text": "Zurückweichen", "next": "tt_14", "karma": -2 }
        ]
    },

    "tt_12": {
        "text": "Die Bürger von Jump City beginnen zu evakuieren.",
        "choices": [
            { "text": "Menschen helfen", "next": "tt_16", "karma": 4 },
            { "text": "Direkt zu Deathstroke", "next": "tt_17", "karma": -1 }
        ]
    },

    "tt_13": {
        "text": "Starfire entdeckt ein fremdes Signal über der Stadt.",
        "choices": [
            { "text": "Mit Starfire fliegen", "next": "tt_16", "karma": 2 },
            { "text": "Im Tower bleiben", "next": "tt_17" }
        ]
    },

    "tt_14": {
        "text": "Jump City verliert plötzlich den Strom.",
        "choices": [
            { "text": "Die Generatoren reparieren", "next": "tt_18", "required_item": "tower_core" },
            { "text": "Ignorieren", "next": "tt_17", "karma": -2 }
        ]
    },

    "tt_15": {
        "text": "Raven übergibt dir ein magisches Siegel gegen dunkle Wesen.",
        "choices": [
            { "text": "Siegel nehmen", "next": "tt_16", "gain_item": "raven_seal" }
        ]
    },

    "tt_16": {
        "text": "Über Jump City erscheint plötzlich Blackfire mit einer Armee.",
        "choices": [
            { "text": "Die Stadt verteidigen", "next": "tt_19", "karma": 3 },
            { "text": "Blackfire direkt angreifen", "next": "tt_20", "karma": 1 }
        ]
    },

    "tt_17": {
        "text": "Deathstroke lockt Robin in eine Falle.",
        "choices": [
            { "text": "Robin retten", "next": "tt_21", "karma": 3 },
            { "text": "Deathstroke verfolgen", "next": "tt_20", "karma": -1 }
        ]
    },

    "tt_18": {
        "text": "Die Generatoren starten wieder. Die Bürger jubeln erleichtert.",
        "choices": [
            { "text": "Weiter zur Schlacht", "next": "tt_19", "karma": 2 }
        ]
    },

    "tt_19": {
        "text": "Die Titans kämpfen gegen Blackfires Soldaten auf den Straßen.",
        "choices": [
            { "text": "Zivilisten retten", "next": "tt_22", "karma": 4 },
            { "text": "Direkt kämpfen", "next": "tt_23", "karma": 1 }
        ]
    },

    "tt_20": {
        "text": "Deathstroke aktiviert eine Maschine, die den Tower zerstören soll.",
        "choices": [
            { "text": "Maschine stoppen", "next": "tt_24", "required_item": "deathstroke_codes" },
            { "text": "Deathstroke angreifen", "next": "tt_25", "karma": -1 }
        ]
    },

    "tt_21": {
        "text": "Robin ist schwer verletzt, aber lebendig.",
        "choices": [
            { "text": "Robin helfen", "next": "tt_22", "karma": 3 },
            { "text": "Weiterkämpfen", "next": "tt_23" }
        ]
    },

    "tt_22": {
        "text": "Raven spürt plötzlich HIM aus einer anderen Realität.",
        "choices": [
            { "text": "Raven glauben", "next": "tt_26", "karma": 2 },
            { "text": "Ignorieren", "next": "tt_23", "karma": -2 }
        ]
    },

    "tt_23": {
        "text": "Blackfire greift Starfire direkt an.",
        "choices": [
            { "text": "Starfire beschützen", "next": "tt_27", "karma": 3 },
            { "text": "Nur angreifen", "next": "tt_25", "karma": -2 }
        ]
    },

    "tt_24": {
        "text": "Die Maschine wird deaktiviert. Der Tower bleibt stabil.",
        "choices": [
            { "text": "Zu den Titans zurück", "next": "tt_27", "karma": 3 }
        ]
    },

    "tt_25": {
        "text": "Deathstroke entkommt lachend in ein Portal.",
        "choices": [
            { "text": "Ihn verfolgen", "next": "tt_28", "karma": -1 },
            { "text": "Bei den Titans bleiben", "next": "tt_27", "karma": 2 }
        ]
    },

    "tt_26": {
        "text": "Raven nutzt dein Siegel, um die dunkle Energie zu schwächen.",
        "choices": [
            { "text": "Das Siegel aktivieren", "next": "tt_29", "required_item": "raven_seal" },
            { "text": "Zögern", "next": "tt_28", "karma": -2 }
        ]
    },

    "tt_27": {
        "text": "Die Titans sammeln sich für den letzten Angriff auf Blackfire.",
        "choices": [
            { "text": "Mitkämpfen", "next": "tt_29", "karma": 2 },
            { "text": "Die Bürger evakuieren", "next": "tt_29", "karma": 4 }
        ]
    },

    "tt_28": {
        "text": "Jump City beginnt langsam zu kollabieren.",
        "choices": [
            { "text": "Letzte Verteidigung starten", "next": "tt_29" }
        ]
    },

    "tt_29": {
        "text": "Blackfire wird besiegt und die letzten Schattenwesen zerfallen. Die Bürger von Jump City beginnen zurückzukehren, doch Raven spürt weiterhin dunkle Energie außerhalb dieser Welt.",
        "choices": [
            { "text": "Den Nexus untersuchen", "next": "tt_30", "karma": 2 }
        ]
    },

    "tt_30": {
        "text": "Der Himmel zerreißt vollständig. Für Sekunden siehst du Aku, Bill Cipher, Deathstroke und den Lich gleichzeitig hinter den Dimensionen stehen. Robin erkennt sofort die Wahrheit: Alle Schurken arbeiten inzwischen zusammen. Kapitel 3 beginnt.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },
    "c2_b10_start": {
        "text": "Du landest in Bellwood bei Nacht. Überall brennen Straßenlaternen grün. Menschen laufen orientierungslos herum. Ben steht mitten auf der Straße und kämpft gleichzeitig gegen mehrere Drohnen von Dr. Animo.",
        "choices": [
            { "text": "Ben helfen", "next": "b10_1", "karma": 2 },
            { "text": "Die Stadt untersuchen", "next": "b10_2" },
            { "text": "Den Drohnen folgen", "next": "b10_3", "karma": -1 }
        ]
    },

    "b10_1": {
        "text": "Ben: 'Gut, Hilfe! Irgendwer kontrolliert die DNA aller Aliens gleichzeitig!'",
        "choices": [
            { "text": "Mit Kaempfen", "next": "b10_4", "gain_item": "alien_core" },
            { "text": "Nach Zivilisten suchen", "next": "b10_5", "karma": 2 }
        ]
    },

    "b10_2": {
        "text": "Du findest zerstörte Häuser und eingefrorene Menschen. Captain Nemesis liegt bewusstlos am Boden.",
        "choices": [
            { "text": "Ihm helfen", "next": "b10_5", "karma": 1 },
            { "text": "Weitergehen", "next": "b10_6", "karma": -1 }
        ]
    },

    "b10_3": {
        "text": "Die Drohnen führen dich zu einem Labor unter Bellwood.",
        "choices": [
            { "text": "Reingehen", "next": "b10_7" },
            { "text": "Ben warnen", "next": "b10_4", "karma": 1 }
        ]
    },

    "b10_4": {
        "text": "Ben verwandelt sich in Inferno und zerstört mehrere Drohnen.",
        "choices": [
            { "text": "Weiter kaempfen", "next": "b10_8", "karma": 2 },
            { "text": "Das Omnitrix untersuchen", "next": "b10_9" }
        ]
    },

    "b10_5": {
        "text": "Du rettest mehrere Menschen aus einem brennenden Gebäude. Gwen erscheint durch ein Portal.",
        "choices": [
            { "text": "Mit Gwen reden", "next": "b10_8", "gain_item": "mana_crystal" },
            { "text": "Alleine weitersuchen", "next": "b10_6" }
        ]
    },

    "b10_6": {
        "text": "Ein riesiger DNA-Mutant greift dich plötzlich an.",
        "choices": [
            { "text": "Kaempfen", "next": "b10_10", "karma": 1 },
            { "text": "Fliehen", "next": "b10_11", "karma": -2 }
        ]
    },

    "b10_7": {
        "text": "Dr. Animo arbeitet an einer Maschine voller Omnitrix-Energie.",
        "choices": [
            { "text": "Maschine sabotieren", "next": "b10_12", "required_item": "alien_core" },
            { "text": "Verstecken", "next": "b10_11" }
        ]
    },

    "b10_8": {
        "text": "Ben: 'Jemand manipuliert sogar das Omnitrix selbst.'",
        "choices": [
            { "text": "Untersuchen", "next": "b10_13" },
            { "text": "Ignorieren", "next": "b10_10", "karma": -1 }
        ]
    },

    "b10_9": {
        "text": "Das Omnitrix reagiert plötzlich auf dich.",
        "choices": [
            { "text": "Beruehren", "next": "b10_14", "karma": 1 },
            { "text": "Zurueckziehen", "next": "b10_10" }
        ]
    },

    "b10_10": {
        "text": "Krake zerstört eine komplette Häuserreihe.",
        "choices": [
            { "text": "Menschen retten", "next": "b10_15", "karma": 3 },
            { "text": "Direkt angreifen", "next": "b10_16", "karma": 1 }
        ]
    },

    "b10_11": {
        "text": "Du wirst von mutierten Kreaturen verfolgt.",
        "choices": [
            { "text": "In die Kanalisation fliehen", "next": "b10_17" },
            { "text": "Kaempfen", "next": "b10_16" }
        ]
    },

    "b10_12": {
        "text": "Die Maschine explodiert teilweise. Dr. Animo wird verletzt.",
        "choices": [
            { "text": "Ihn retten", "next": "b10_18", "karma": 2 },
            { "text": "Ihn sterben lassen", "next": "b10_19", "karma": -3 }
        ]
    },

    "b10_13": {
        "text": "Das Omnitrix zeigt unbekannte Alien-DNA.",
        "choices": [
            { "text": "Speichern", "next": "b10_14", "gain_item": "unknown_dna" },
            { "text": "Ignorieren", "next": "b10_15" }
        ]
    },

    "b10_14": {
        "text": "Eine holografische Nachricht von Azmuth erscheint.",
        "choices": [
            { "text": "Zuhoeren", "next": "b10_20", "karma": 2 },
            { "text": "Unterbrechen", "next": "b10_15", "karma": -1 }
        ]
    },

    "b10_15": {
        "text": "Bellwood beginnt langsam zu kollabieren.",
        "choices": [
            { "text": "Die Menschen evakuieren", "next": "b10_21", "karma": 3 },
            { "text": "Nur Ben helfen", "next": "b10_16", "karma": -1 }
        ]
    },

    "b10_16": {
        "text": "Zombozo erscheint lachend aus einem Nebel.",
        "choices": [
            { "text": "Kaempfen", "next": "b10_22" },
            { "text": "Seinen Illusionen widerstehen", "next": "b10_23", "required_item": "mana_crystal" }
        ]
    },

    "b10_17": {
        "text": "In der Kanalisation findest du gefangene Kinder.",
        "choices": [
            { "text": "Befreien", "next": "b10_21", "karma": 3 },
            { "text": "Weitergehen", "next": "b10_22", "karma": -2 }
        ]
    },

    "b10_18": {
        "text": "Dr. Animo: 'Ich wollte Bellwood retten... nicht zerstören.'",
        "choices": [
            { "text": "Glauben", "next": "b10_24", "karma": 2 },
            { "text": "Misstrauen", "next": "b10_19", "karma": -1 }
        ]
    },

    "b10_19": {
        "text": "Die Maschine absorbiert plötzlich Animos Energie.",
        "choices": [
            { "text": "Zerstoeren", "next": "b10_24", "karma": 1 },
            { "text": "Analysieren", "next": "b10_20" }
        ]
    },

    "b10_20": {
        "text": "Azmuth erklärt: 'Etwas korrumpiert die DNA aller Dimensionen.'",
        "choices": [
            { "text": "Helfen", "next": "b10_25", "karma": 2 },
            { "text": "Ablehnen", "next": "b10_22", "karma": -2 }
        ]
    },

    "b10_21": {
        "text": "Die Menschen feiern dich als Helden.",
        "choices": [
            { "text": "Weiter", "next": "b10_25" }
        ]
    },

    "b10_22": {
        "text": "Zombozo absorbiert Angstenergie aus Bellwood.",
        "choices": [
            { "text": "Direkt angreifen", "next": "b10_26" },
            { "text": "Seine Maschine deaktivieren", "next": "b10_27", "required_item": "unknown_dna" }
        ]
    },

    "b10_23": {
        "text": "Dank des Mana-Kristalls erkennst du die Illusionen.",
        "choices": [
            { "text": "Zombozo konfrontieren", "next": "b10_26", "karma": 2 },
            { "text": "Ben warnen", "next": "b10_25" }
        ]
    },

    "b10_24": {
        "text": "Krake wird von einer fremden Energie kontrolliert.",
        "choices": [
            { "text": "Befreien", "next": "b10_28", "karma": 3 },
            { "text": "Besiegen", "next": "b10_26", "karma": -1 }
        ]
    },

    "b10_25": {
        "text": "Ben gibt dir einen Proto-Omnitrix Splitter.",
        "choices": [
            { "text": "Nehmen", "next": "b10_28", "gain_item": "proto_omnitrix" }
        ]
    },

    "b10_26": {
        "text": "Bellwood bebt. Der Himmel färbt sich grün.",
        "choices": [
            { "text": "Weiter", "next": "b10_29" }
        ]
    },

    "b10_27": {
        "text": "Die Maschine kollabiert und stoppt die Angstwellen.",
        "choices": [
            { "text": "Ben helfen", "next": "b10_28", "karma": 2 }
        ]
    },

    "b10_28": {
        "text": "Ben: 'Das war erst Kapitel 2... etwas viel Größeres kommt.'",
        "choices": [
            { "text": "Bereit machen", "next": "b10_30" }
        ]
    },

    "b10_29": {
        "text": "Ein riesiger Nexus-Riss öffnet sich über Bellwood.",
        "choices": [
            { "text": "Zum Riss gehen", "next": "b10_30" }
        ]
    },

    "b10_30": {
        "text": "Die Realität zerreißt. Der Übergang zu Kapitel 3 öffnet sich.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },
    "c2_sj_start": {
        "text": "Du landest in einer verbrannten Zukunft. Der Himmel ist rot, Maschinen patrouillieren die Straßen und überall hängen Banner von Aku. Samurai Jack kämpft allein gegen mehrere Roboter.",
        "choices": [
            { "text": "Jack helfen", "next": "sj_1", "karma": 2 },
            { "text": "Die Stadt untersuchen", "next": "sj_2" },
            { "text": "Den Robotern folgen", "next": "sj_3", "karma": -1 }
        ]
    },

    "sj_1": {
        "text": "Jack zerstört den letzten Roboter. 'Du bist kein Diener von Aku... gut.'",
        "choices": [
            { "text": "Mit Jack reden", "next": "sj_4" },
            { "text": "Direkt weitergehen", "next": "sj_5" }
        ]
    },

    "sj_2": {
        "text": "Du findest gefangene Dorfbewohner in Käfigen.",
        "choices": [
            { "text": "Befreien", "next": "sj_5", "karma": 3 },
            { "text": "Ignorieren", "next": "sj_6", "karma": -2 }
        ]
    },

    "sj_3": {
        "text": "Die Roboter führen dich zu einem Tempel voller dunkler Energie.",
        "choices": [
            { "text": "Tempel betreten", "next": "sj_7" },
            { "text": "Jack warnen", "next": "sj_4", "karma": 1 }
        ]
    },

    "sj_4": {
        "text": "Jack: 'Aku sucht nach einem Artefakt namens Jewel of Neptune.'",
        "choices": [
            { "text": "Helfen", "next": "sj_8", "karma": 2 },
            { "text": "Ablehnen", "next": "sj_6", "karma": -1 }
        ]
    },

    "sj_5": {
        "text": "Ein alter Mönch gibt dir eine Schriftrolle.",
        "choices": [
            { "text": "Nehmen", "next": "sj_8", "gain_item": "temple_scroll" },
            { "text": "Ignorieren", "next": "sj_6" }
        ]
    },

    "sj_6": {
        "text": "Die Straßen verändern sich plötzlich. Realität und Zeit vermischen sich.",
        "choices": [
            { "text": "Weiter", "next": "sj_9" }
        ]
    },

    "sj_7": {
        "text": "Im Tempel erscheint Demongo aus Schatten.",
        "choices": [
            { "text": "Kaempfen", "next": "sj_10", "karma": 1 },
            { "text": "Verstecken", "next": "sj_9", "karma": -1 }
        ]
    },

    "sj_8": {
        "text": "Jack zeigt dir eine Karte zum Tempel des Wassers.",
        "choices": [
            { "text": "Folgen", "next": "sj_11" },
            { "text": "Allein gehen", "next": "sj_10" }
        ]
    },

    "sj_9": {
        "text": "Aku spricht durch den Himmel: 'Selbst Weltenwaechter werden brechen.'",
        "choices": [
            { "text": "Widerstehen", "next": "sj_11", "karma": 2 },
            { "text": "Zweifeln", "next": "sj_12", "karma": -2 }
        ]
    },

    "sj_10": {
        "text": "Demongo beschwört gefallene Krieger gegen dich.",
        "choices": [
            { "text": "Kaempfen", "next": "sj_13" },
            { "text": "Fliehen", "next": "sj_12", "karma": -1 }
        ]
    },

    "sj_11": {
        "text": "Jack vertraut dir sein Katana kurz an.",
        "choices": [
            { "text": "Annehmen", "next": "sj_14", "gain_item": "jacks_katana" },
            { "text": "Ablehnen", "next": "sj_13", "karma": 1 }
        ]
    },

    "sj_12": {
        "text": "Maschinen greifen ein Dorf an.",
        "choices": [
            { "text": "Das Dorf retten", "next": "sj_15", "karma": 3 },
            { "text": "Weitergehen", "next": "sj_13", "karma": -2 }
        ]
    },

    "sj_13": {
        "text": "Ein High Priest von Aku erscheint im Nebel.",
        "choices": [
            { "text": "Mit ihm reden", "next": "sj_16" },
            { "text": "Direkt angreifen", "next": "sj_17", "karma": -1 }
        ]
    },

    "sj_14": {
        "text": "Das Katana reagiert auf dunkle Energie.",
        "choices": [
            { "text": "Analysieren", "next": "sj_16" },
            { "text": "Ignorieren", "next": "sj_15" }
        ]
    },

    "sj_15": {
        "text": "Die Dorfbewohner danken dir und geben dir Nahrung und Wasser.",
        "choices": [
            { "text": "Weiter", "next": "sj_18", "gain_item": "traveler_supplies" }
        ]
    },

    "sj_16": {
        "text": "Der High Priest behauptet, Aku sei nicht die wahre Bedrohung.",
        "choices": [
            { "text": "Glauben", "next": "sj_19", "karma": -1 },
            { "text": "Ablehnen", "next": "sj_17", "karma": 2 }
        ]
    },

    "sj_17": {
        "text": "Der Priest verwandelt sich in ein Monster aus Schatten.",
        "choices": [
            { "text": "Mit Katana kaempfen", "next": "sj_20", "required_item": "jacks_katana" },
            { "text": "Ohne Katana kaempfen", "next": "sj_18", "karma": -2 }
        ]
    },

    "sj_18": {
        "text": "Jack wird von Robotern eingekesselt.",
        "choices": [
            { "text": "Jack helfen", "next": "sj_21", "karma": 2 },
            { "text": "Verstecken", "next": "sj_19", "karma": -2 }
        ]
    },

    "sj_19": {
        "text": "Aku erscheint riesig über der Stadt.",
        "choices": [
            { "text": "Konfrontieren", "next": "sj_22" },
            { "text": "Fliehen", "next": "sj_21", "karma": -1 }
        ]
    },

    "sj_20": {
        "text": "Das Katana zerstört die Schattenform vollständig.",
        "choices": [
            { "text": "Weiter", "next": "sj_22", "karma": 3 }
        ]
    },

    "sj_21": {
        "text": "Jack wirkt erschöpft. 'Aku wird stärker mit jeder Welt.'",
        "choices": [
            { "text": "Mut machen", "next": "sj_23", "karma": 2 },
            { "text": "Schweigen", "next": "sj_22" }
        ]
    },

    "sj_22": {
        "text": "Der Eingang zum Tempel des Wassers öffnet sich.",
        "choices": [
            { "text": "Betreten", "next": "sj_24", "required_item": "temple_scroll" },
            { "text": "Alternative suchen", "next": "sj_23" }
        ]
    },

    "sj_23": {
        "text": "Demongo kehrt mit einer Armee zurück.",
        "choices": [
            { "text": "Kaempfen", "next": "sj_25", "karma": 1 },
            { "text": "Dorfbewohner retten", "next": "sj_24", "karma": 3 }
        ]
    },

    "sj_24": {
        "text": "Im Tempel findest du das Jewel of Neptune.",
        "choices": [
            { "text": "Nehmen", "next": "sj_26", "gain_item": "jewel_of_neptune" }
        ]
    },

    "sj_25": {
        "text": "Jack wird schwer verletzt, kämpft aber weiter.",
        "choices": [
            { "text": "Heilen", "next": "sj_26", "required_item": "traveler_supplies" },
            { "text": "Weiterziehen", "next": "sj_27", "karma": -3 }
        ]
    },

    "sj_26": {
        "text": "Das Jewel beginnt den Himmel zu reinigen.",
        "choices": [
            { "text": "Aktivieren", "next": "sj_28", "karma": 2 },
            { "text": "Verstecken", "next": "sj_27", "karma": -1 }
        ]
    },

    "sj_27": {
        "text": "Aku absorbiert dunkle Energie aus dem Nexus.",
        "choices": [
            { "text": "Angreifen", "next": "sj_28" },
            { "text": "Jack decken", "next": "sj_29", "karma": 2 }
        ]
    },

    "sj_28": {
        "text": "Jack und du kämpfen gemeinsam gegen Aku.",
        "choices": [
            { "text": "Mit Katana zuschlagen", "next": "sj_30", "required_item": "jacks_katana" },
            { "text": "Das Jewel benutzen", "next": "sj_lose", "required_item": "jewel_of_neptune" }
        ]
    },

    "sj_lose": {
        "text": "Das Jewel ist zu schwach. Aku absorbiert es und lacht.",
        "choices": [
            { "text": "Fliehen", "next": "sj_29", "karma": -2 }
        ]
    },

    "sj_29": {
        "text": "Jack: 'Kapitel 3 wird schlimmer als alles bisher.'",
        "choices": [
            { "text": "Vorbereiten", "next": "sj_30" }
        ]
    },

    "sj_30": {
        "text": "Aku verschwindet im Nexus-Riss, doch sein Lachen bleibt. Der Übergang zu Kapitel 3 öffnet sich.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_rs_start": {
        "text": "Der Park wirkt instabil. Der Himmel flackert wie ein kaputter Bildschirm. Mordecai und Rigby stehen vor dem Eingang des Parks und streiten sich, während Skips bereits etwas Unheilvolles spürt.",
        "choices": [
            { "text": "Mordecai folgen", "next": "rs_1", "karma": 1 },
            { "text": "Rigby folgen", "next": "rs_2", "karma": -1 },
            { "text": "Skips ansprechen", "next": "rs_3", "karma": 2 },
            { "text": "Den Park untersuchen", "next": "rs_4" }
        ]
    },

    "rs_1": {
        "text": "Mordecai: 'Das ist kein normaler Glitch... jemand manipuliert die Realität im Park.'",
        "choices": [
            { "text": "Glauben", "next": "rs_5", "karma": 2 },
            { "text": "Zweifeln", "next": "rs_6", "karma": -1 }
        ]
    },

    "rs_2": {
        "text": "Rigby versucht einen Snackautomaten zu öffnen, aber der Automat spricht zurück.",
        "choices": [
            { "text": "Rigby helfen", "next": "rs_5", "karma": -1 },
            { "text": "Automat untersuchen", "next": "rs_7", "gain_item": "glitch_coin" }
        ]
    },

    "rs_3": {
        "text": "Skips: 'Ich habe sowas schon einmal gesehen. Es endet nie gut.'",
        "choices": [
            { "text": "Nachfragen", "next": "rs_8" },
            { "text": "Ignorieren", "next": "rs_6", "karma": -2 }
        ]
    },

    "rs_4": {
        "text": "Der Park wiederholt sich wie eine Schleife. Bäume erscheinen doppelt, Wege führen ins Nichts.",
        "choices": [
            { "text": "Tiefer gehen", "next": "rs_9" },
            { "text": "Zurückgehen", "next": "rs_6" }
        ]
    },

    "rs_5": {
        "text": "Benson schreit aus dem Hintergrund: 'ARBEITET ENDLICH ODER ICH FLIPPE AUS!'",
        "choices": [
            { "text": "Benson beruhigen", "next": "rs_10", "karma": 1 },
            { "text": "Ignorieren", "next": "rs_11", "karma": -1 }
        ]
    },

    "rs_6": {
        "text": "Ein Riss öffnet sich über dem Park und zieht Energie aus der Realität.",
        "choices": [
            { "text": "Untersuchen", "next": "rs_12" },
            { "text": "Fliehen", "next": "rs_11", "karma": -2 }
        ]
    },

    "rs_7": {
        "text": "Der Automat gibt dir eine glühende Glitch-Münze.",
        "choices": [
            { "text": "Nehmen", "next": "rs_10", "gain_item": "glitch_coin" }
        ]
    },

    "rs_8": {
        "text": "Skips: 'Der Park wird von etwas außerhalb unserer Realität beeinflusst.'",
        "choices": [
            { "text": "Verstehen", "next": "rs_12", "karma": 2 },
            { "text": "Ablehnen", "next": "rs_11", "karma": -2 }
        ]
    },

    "rs_9": {
        "text": "Du findest eine Version des Parks ohne Farbe oder Sound.",
        "choices": [
            { "text": "Analysieren", "next": "rs_13", "gain_item": "silent_fragment" },
            { "text": "Zurückgehen", "next": "rs_11" }
        ]
    },

    "rs_10": {
        "text": "Muscle Man erscheint und sagt: 'Ich weiß wer dahinter steckt... und es ist NICHT gut Mann!'",
        "choices": [
            { "text": "Ihm glauben", "next": "rs_14", "karma": 2 },
            { "text": "Ignorieren", "next": "rs_11", "karma": -1 }
        ]
    },

    "rs_11": {
        "text": "Der Park beginnt sich selbst zu überschreiben.",
        "choices": [
            { "text": "Weiter", "next": "rs_15" }
        ]
    },

    "rs_12": {
        "text": "Skips führt dich zu einem alten Ritualplatz im Park.",
        "choices": [
            { "text": "Untersuchen", "next": "rs_16" },
            { "text": "Ablehnen", "next": "rs_11", "karma": -1 }
        ]
    },

    "rs_13": {
        "text": "Der Silent Fragment zeigt vergangene Versionen des Parks.",
        "choices": [
            { "text": "Speichern", "next": "rs_15", "gain_item": "park_memory" }
        ]
    },

    "rs_14": {
        "text": "Eileen findet Hinweise auf eine fremde Dimension im Parksystem.",
        "choices": [
            { "text": "Analysieren", "next": "rs_16" },
            { "text": "Ignorieren", "next": "rs_15", "karma": -1 }
        ]
    },

    "rs_15": {
        "text": "Der Himmel im Park reißt weiter auf. Etwas beobachtet euch.",
        "choices": [
            { "text": "Weiter", "next": "rs_17" }
        ]
    },

    "rs_16": {
        "text": "Skips erkennt: Der Park ist ein Knotenpunkt für alle Cartoon-Realitäten.",
        "choices": [
            { "text": "Zustimmen", "next": "rs_17", "karma": 2 },
            { "text": "Zweifeln", "next": "rs_17", "karma": -2 }
        ]
    },

    "rs_17": {
        "text": "Rigby findet einen alten Arcade-Automaten, der den Nexus zeigt.",
        "choices": [
            { "text": "Aktivieren", "next": "rs_18", "required_item": "glitch_coin" },
            { "text": "Ignorieren", "next": "rs_19" }
        ]
    },

    "rs_18": {
        "text": "Der Automat öffnet einen stabilen Riss im Park.",
        "choices": [
            { "text": "Durchgehen", "next": "rs_20" }
        ]
    },

    "rs_19": {
        "text": "Benson verliert die Kontrolle über die Realität im Park.",
        "choices": [
            { "text": "Helfen", "next": "rs_20", "karma": 2 },
            { "text": "Zusehen", "next": "rs_20", "karma": -2 }
        ]
    },

    "rs_20": {
        "text": "Skips: 'Das hier ist größer als der Park. Viel größer.'",
        "choices": [
            { "text": "Weiter", "next": "rs_21" }
        ]
    },

    "rs_21": {
        "text": "Ein Schatten erscheint über dem Park und formt sich zu einer bekannten Präsenz aus allen Welten.",
        "choices": [
            { "text": "Konfrontieren", "next": "rs_22" },
            { "text": "Vorbereiten", "next": "rs_22", "karma": 1 }
        ]
    },

    "rs_22": {
        "text": "Die Präsenz spricht: 'Alle Parks sind nur Testumgebungen.'",
        "choices": [
            { "text": "Zustimmen", "next": "rs_23", "karma": -1 },
            { "text": "Ablehnen", "next": "rs_23", "karma": 2 }
        ]
    },

    "rs_23": {
        "text": "Mordecai und Rigby erkennen, dass sie mehrfach existieren könnten.",
        "choices": [
            { "text": "Analysieren", "next": "rs_24" },
            { "text": "Ignorieren", "next": "rs_24", "karma": -2 }
        ]
    },

    "rs_24": {
        "text": "Der Park beginnt sich in den Nexus zu öffnen.",
        "choices": [
            { "text": "Stabilisieren", "next": "rs_25", "required_item": "park_memory" },
            { "text": "Weitergehen", "next": "rs_25" }
        ]
    },

    "rs_25": {
        "text": "Skips opfert Energie, um den Riss zu stabilisieren.",
        "choices": [
            { "text": "Unterstützen", "next": "rs_26", "karma": 2 },
            { "text": "Zusehen", "next": "rs_26", "karma": -2 }
        ]
    },

    "rs_26": {
        "text": "Der Schatten im Himmel beginnt sich zu bewegen.",
        "choices": [
            { "text": "Weiter", "next": "rs_27" }
        ]
    },

    "rs_27": {
        "text": "Benson: 'Wenn wir das nicht stoppen, kollabiert alles.'",
        "choices": [
            { "text": "Glauben", "next": "rs_28", "karma": 2 },
            { "text": "Zweifeln", "next": "rs_28", "karma": -2 }
        ]
    },

    "rs_28": {
        "text": "Der Park wird vollständig vom Nexus überlagert.",
        "choices": [
            { "text": "Weiter", "next": "rs_29" }
        ]
    },

    "rs_29": {
        "text": "Alle Versionen des Parks existieren gleichzeitig.",
        "choices": [
            { "text": "Beobachten", "next": "rs_30" }
        ]
    },

    "rs_30": {
        "text": "Der Park öffnet einen vollständigen Nexus-Riss. Übergang zu Kapitel 3 wird aktiviert.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },
    "c2_nj_start": {
        "text": "Ninjago City ist in Dunkelheit gehüllt. Die Goldenen Waffen reagieren unkontrolliert auf eine fremde Energie. Kai, Jay, Cole und Zane stehen angespannt vor dem Kloster von Spinjitzu. Sensei Wu wirkt besorgt.",
        "choices": [
            { "text": "Kai folgen", "next": "nj_1", "karma": 1 },
            { "text": "Zane folgen", "next": "nj_2" },
            { "text": "Cole folgen", "next": "nj_3", "karma": 2 },
            { "text": "Jay folgen", "next": "nj_4", "karma": -1 },
            { "text": "Sensei Wu ansprechen", "next": "nj_5", "karma": 2 }
        ]
    },

    "nj_1": {
        "text": "Kai: 'Etwas manipuliert das Feuer der Goldenen Waffen.'",
        "choices": [
            { "text": "Untersuchen", "next": "nj_6" },
            { "text": "Ignorieren", "next": "nj_7", "karma": -1 }
        ]
    },

    "nj_2": {
        "text": "Zane analysiert Daten: 'Fremde Code-Struktur in der Realität erkannt.'",
        "choices": [
            { "text": "Daten speichern", "next": "nj_6", "gain_item": "ninja_data_core" },
            { "text": "Weiter zuhören", "next": "nj_8", "karma": 2 }
        ]
    },

    "nj_3": {
        "text": "Cole spürt Erschütterungen unter der Erde. 'Etwas kommt durch.'",
        "choices": [
            { "text": "Graben untersuchen", "next": "nj_9" },
            { "text": "Cole folgen", "next": "nj_8", "karma": 1 }
        ]
    },

    "nj_4": {
        "text": "Jay verursacht versehentlich einen Stromausfall in der ganzen Stadt.",
        "choices": [
            { "text": "Reparieren helfen", "next": "nj_10", "karma": 2 },
            { "text": "Weitergehen", "next": "nj_7", "karma": -1 }
        ]
    },

    "nj_5": {
        "text": "Sensei Wu: 'Der Nexus beginnt sich mit unseren Waffen zu verbinden.'",
        "choices": [
            { "text": "Glauben", "next": "nj_11", "karma": 2 },
            { "text": "Zweifeln", "next": "nj_7", "karma": -2 }
        ]
    },

    "nj_6": {
        "text": "Die Goldenen Waffen reagieren auf dich kurzzeitig.",
        "choices": [
            { "text": "Berühren", "next": "nj_12", "gain_item": "golden_energy_fragment" },
            { "text": "Zurückziehen", "next": "nj_7" }
        ]
    },

    "nj_7": {
        "text": "Lord Garmadon erscheint kurz im Schatten der Stadt.",
        "choices": [
            { "text": "Konfrontieren", "next": "nj_13" },
            { "text": "Verstecken", "next": "nj_8", "karma": -1 }
        ]
    },

    "nj_8": {
        "text": "Die Stadt beginnt sich selbst zu überschreiben.",
        "choices": [
            { "text": "Weiter", "next": "nj_14" }
        ]
    },

    "nj_9": {
        "text": "Du findest eine versiegelte Ninjago-Kammer unter der Stadt.",
        "choices": [
            { "text": "Öffnen", "next": "nj_15", "required_item": "ninja_data_core" },
            { "text": "Ignorieren", "next": "nj_8", "karma": -1 }
        ]
    },

    "nj_10": {
        "text": "Pixel erscheint: 'Systemstörung erkannt im gesamten Netzwerk.'",
        "choices": [
            { "text": "Mit Pixel arbeiten", "next": "nj_16", "karma": 2 },
            { "text": "Alleine weitermachen", "next": "nj_14" }
        ]
    },

    "nj_11": {
        "text": "Wu gibt dir eine alte Schriftrolle der ersten Spinjitzu-Meister.",
        "choices": [
            { "text": "Nehmen", "next": "nj_17", "gain_item": "spinjitzu_scroll" }
        ]
    },

    "nj_12": {
        "text": "Die Energie zeigt dir alternative Versionen von Ninjago.",
        "choices": [
            { "text": "Analysieren", "next": "nj_14" }
        ]
    },

    "nj_13": {
        "text": "Garmadon: 'Ich bin nicht dein Feind in dieser Version... vielleicht.'",
        "choices": [
            { "text": "Glauben", "next": "nj_18", "karma": 2 },
            { "text": "Angreifen", "next": "nj_19", "karma": -2 }
        ]
    },

    "nj_14": {
        "text": "Die Goldenen Waffen beginnen sich zu vereinen.",
        "choices": [
            { "text": "Untersuchen", "next": "nj_20" }
        ]
    },

    "nj_15": {
        "text": "In der Kammer ist ein uralter Nexus-Siegelstein.",
        "choices": [
            { "text": "Berühren", "next": "nj_21", "gain_item": "nexus_seal" },
            { "text": "Nicht berühren", "next": "nj_14" }
        ]
    },

    "nj_16": {
        "text": "Pixel stabilisiert kurz die Realität im Kloster.",
        "choices": [
            { "text": "Dankbar sein", "next": "nj_20", "karma": 2 }
        ]
    },

    "nj_17": {
        "text": "Die Schriftrolle zeigt eine Prophezeiung über den Nexus.",
        "choices": [
            { "text": "Lesen", "next": "nj_20", "karma": 2 },
            { "text": "Ignorieren", "next": "nj_19" }
        ]
    },

    "nj_18": {
        "text": "Garmadon hilft dir kurz gegen eine Schattenwelle.",
        "choices": [
            { "text": "Zusammen kämpfen", "next": "nj_22", "karma": 2 }
        ]
    },

    "nj_19": {
        "text": "Eine Schattenarmee von Morro erscheint.",
        "choices": [
            { "text": "Kaempfen", "next": "nj_23" },
            { "text": "Fliehen", "next": "nj_22", "karma": -2 }
        ]
    },

    "nj_20": {
        "text": "Die Goldenen Waffen destabilisieren den Himmel.",
        "choices": [
            { "text": "Stabilisieren", "next": "nj_24", "required_item": "golden_energy_fragment" },
            { "text": "Beobachten", "next": "nj_23" }
        ]
    },

    "nj_21": {
        "text": "Der Nexus-Siegelstein verbindet alle Ninja-Kräfte.",
        "choices": [
            { "text": "Aktivieren", "next": "nj_24", "karma": 2 },
            { "text": "Verstecken", "next": "nj_23", "karma": -1 }
        ]
    },

    "nj_22": {
        "text": "Die Ninja kämpfen gemeinsam gegen Morro.",
        "choices": [
            { "text": "Unterstützen", "next": "nj_25", "karma": 2 }
        ]
    },

    "nj_23": {
        "text": "Lord Garmadon beginnt sich in eine neue Form zu verwandeln.",
        "choices": [
            { "text": "Konfrontieren", "next": "nj_25" }
        ]
    },

    "nj_24": {
        "text": "Der Himmel über Ninjago öffnet einen Nexus-Riss.",
        "choices": [
            { "text": "Durchgehen", "next": "nj_26" }
        ]
    },

    "nj_25": {
        "text": "Wu: 'Der Kampf hat gerade erst begonnen.'",
        "choices": [
            { "text": "Weiter", "next": "nj_26" }
        ]
    },

    "nj_26": {
        "text": "Alle Goldenen Waffen verschmelzen kurz mit dem Nexus.",
        "choices": [
            { "text": "Beobachten", "next": "nj_27" }
        ]
    },

    "nj_27": {
        "text": "Pixel: 'Kapitel 3 wird nicht mehr stabil sein.'",
        "choices": [
            { "text": "Verstehen", "next": "nj_28", "karma": 2 },
            { "text": "Zweifeln", "next": "nj_28", "karma": -2 }
        ]
    },

    "nj_28": {
        "text": "Ninjago beginnt vollständig zu kollabieren.",
        "choices": [
            { "text": "Weiter", "next": "nj_29" }
        ]
    },

    "nj_29": {
        "text": "Alle Ninja-Versionen erscheinen gleichzeitig.",
        "choices": [
            { "text": "Beobachten", "next": "nj_30" }
        ]
    },

    "nj_30": {
        "text": "Der Nexus-Riss öffnet sich vollständig über Ninjago. Übergang zu Kapitel 3 aktiviert.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c3_start": {
        "text": "Kapitel 3. Der Nexus ist nicht mehr stabil. Die Cartoon-Welten sind nicht mehr getrennte Orte, sondern überlappende Kriegszonen aus Realität, Erinnerung und Fehlern. Etwas beginnt aktiv zu jagen.",
        "choices": [
            { "text": "Steven Universe", "next": "c3_su_start" },
            { "text": "Scooby-Doo", "next": "c3_sd_start" },
            { "text": "Ninja Turtles", "next": "c3_tmnt_start" },
            { "text": "Super Hero Squad", "next": "c3_shs_start" },
            { "text": "Total Drama Island", "next": "c3_tdi_start" }
        ]
    },


};


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
    createjs.Sound.play("steps", {
        volume: 0.1
    });
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

function initSounds() {
    createjs.Sound.registerSound("./audio/steps.mp3", "steps");
    createjs.Sound.registerSound("./audio/good.mp3", "good");
    createjs.Sound.registerSound("./audio/bad.mp3", "bad");
}

function playKarmaSound(karma) {
    if (karma > 0) {
        createjs.Sound.play("good", {
            volume: 0.2
        });
    }
    else if (karma < 0) {
        createjs.Sound.play("bad", {
            volume: 0.2
        });
    }
}

initSounds();