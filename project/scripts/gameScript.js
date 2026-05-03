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
            { "text": "Dexter", "next": "c1_dx_start" },
            { "text": "Powerpuff Girls", "next": "c1_ppg_start" },
            { "text": "Gravity Falls", "next": "c1_gf_start" }
        ]
    },

    "c1_ooa_start": {
        "text": "Der Nexus stabilisiert fünf getrennte Cartoon-Realitäten. Ooo wirkt instabil, als würde es zwischen Versionen wechseln. Finn, Jake und Marceline sind da – aber etwas stimmt mit ihnen nicht.",
        "choices": [
            { "text": "Finn folgen", "next": "at_1", "karma": 1 },
            { "text": "Jake folgen", "next": "at_2" },
            { "text": "Marceline suchen", "next": "at_3", "karma": -1 },
            { "text": "Dem Wanderer folgen", "next": "at_4" }
        ]
    },

    "at_1": {
        "text": "Finn wirkt angespannt. 'Ich hatte schon Träume von dir... aber du warst anders darin.'",
        "choices": [
            { "text": "Nach Details fragen", "next": "at_5" },
            { "text": "Ignorieren", "next": "at_6", "karma": -1 },
            { "text": "Schwert zeigen lassen", "next": "at_7", "karma": 1 }
        ]
    },

    "at_2": {
        "text": "Jake: 'Die Realität riecht heute wie ein Fehler.'",
        "choices": [
            { "text": "Vertrauen", "next": "at_7", "karma": 2 },
            { "text": "Weggehen", "next": "at_6", "karma": -1 },
            { "text": "Riechen lassen", "next": "at_8" }
        ]
    },

    "at_3": {
        "text": "Marceline spielt eine schiefe Melodie. 'Das hier ist nicht Ooo wie es sein sollte.'",
        "choices": [
            { "text": "Zuhören", "next": "at_9", "karma": 1 },
            { "text": "Gehen", "next": "at_6", "karma": -1 },
            { "text": "Fragen was sie meint", "next": "at_10" }
        ]
    },

    "at_4": {
        "text": "Ein Fremder sagt: 'Der Lich hat viele Gesichter. Auch bekannte.'",
        "choices": [
            { "text": "Glauben", "next": "at_7", "karma": 2 },
            { "text": "Ignorieren", "next": "at_6", "karma": -2 }
        ]
    },

    "at_5": {
        "text": "Finn: 'Es gibt Erinnerungen, die ich nicht erlebt habe.'",
        "choices": [
            { "text": "Weiter fragen", "next": "at_11" },
            { "text": "Thema wechseln", "next": "at_6" }
        ]
    },

    "at_6": {
        "text": "Die Welt flackert kurz. Ooo verliert Stabilität.",
        "choices": [
            { "text": "Weitergehen", "next": "at_12" }
        ]
    },

    "at_7": {
        "text": "Jake wird ernst. 'Etwas ist in der Struktur von Ooo.'",
        "choices": [
            { "text": "Untersuchen", "next": "at_13" },
            { "text": "Ignorieren", "next": "at_12", "karma": -1 }
        ]
    },

    "at_8": {
        "text": "Jake bemerkt einen Riss in der Luft.",
        "choices": [
            { "text": "Untersuchen", "next": "at_13" },
            { "text": "Zurückziehen", "next": "at_6", "karma": -1 }
        ]
    },

    "at_9": {
        "text": "Marceline: 'Etwas benutzt Ooo als Schnittstelle.'",
        "choices": [
            { "text": "Weiter zuhören", "next": "at_11", "karma": 1 },
            { "text": "Ablehnen", "next": "at_6", "karma": -2 }
        ]
    },

    "at_10": {
        "text": "Marceline stoppt. 'Nicht alles hier ist echt.'",
        "choices": [
            { "text": "Glauben", "next": "at_11", "karma": 2 },
            { "text": "Zweifeln", "next": "at_6", "karma": -1 }
        ]
    },

    "at_11": {
        "text": "Finn zeigt dir einen seltsamen Schatten im Himmel.",
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
        "text": "Der Schatten im Himmel sieht aus wie ein Gesicht, das sich verändert.",
        "choices": [
            { "text": "Berühren versuchen", "next": "at_15", "karma": 2 },
            { "text": "Zurückweichen", "next": "at_14" }
        ]
    },

    "at_14": {
        "text": "Jake öffnet einen kleinen stabilen Riss.",
        "choices": [
            { "text": "Durchgehen", "next": "at_16" },
            { "text": "Zögern", "next": "at_12", "karma": -1 }
        ]
    },

    "at_15": {
        "text": "Du siehst eine zweite Version von Finn, die dich anstarrt.",
        "choices": [
            { "text": "Konfrontieren", "next": "at_17", "karma": -2 },
            { "text": "Akzeptieren", "next": "at_16", "karma": 1 }
        ]
    },

    "at_16": {
        "text": "Der Lich erscheint kurz im Himmel als Silhouette.",
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
        "text": "Marceline gibt dir einen kleinen Schatten-Splitter.",
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
        "text": "Der Himmel zeigt mehrere Ooo-Versionen gleichzeitig.",
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
        "text": "Alle drei kämpfen gemeinsam gegen den Lich.",
        "choices": [
            { "text": "Unterstützen", "next": "at_28", "karma": 2 },
            { "text": "Zögern", "next": "at_28", "karma": -1 }
        ]
    },

    "at_28": {
        "text": "Der Lich zerfällt in mehrere Fragmente.",
        "choices": [
            { "text": "Fragment nehmen", "next": "at_29", "gain_item": "lich_fragment" },
            { "text": "Ignorieren", "next": "at_29" }
        ]
    },

    "at_29": {
        "text": "Ooo stabilisiert sich kurz, aber der Nexus öffnet sich am Himmel.",
        "choices": [
            { "text": "Weiter", "next": "at_30" }
        ]
    },

    "at_30": {
        "text": "Der Nexus zieht Ooo vollständig in die Verbindung aller Welten. Kapitel 2 wird vorbereitet.",
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
    createjs.Sound.play("steps");
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
    createjs.Sound.registerSound("./audio/step.mp3", "steps");
    createjs.Sound.registerSound("./audio/good.mp3", "good");
    createjs.Sound.registerSound("./audio/bad.mp3", "bad");
}

function playKarmaSound(karma) {
    if (karma > 0) {
        createjs.Sound.play("good");
    }
    else if (karma < 0) {
        createjs.Sound.play("bad");
    }
}

initSounds();