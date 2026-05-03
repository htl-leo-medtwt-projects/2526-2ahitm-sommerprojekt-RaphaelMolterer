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
            { "text": "Gravity Falls", "next": "placeholder" }
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
        "text": "Dexters Labor existiert mehrfach überlagert. Maschinen laufen, obwohl niemand sie bedient. Mandark steht neben Dexter und lächelt. Dee Dee ist nicht sichtbar, aber überall.",
        "choices": [
            { "text": "Dexter folgen", "next": "dx_1", "karma": 1 },
            { "text": "Mandark folgen", "next": "dx_2", "karma": -1 },
            { "text": "Labor untersuchen", "next": "dx_3" }
        ]
    },

    "dx_1": {
        "text": "Dexter: 'Ich habe Realität kompiliert. Mehr als einmal.'",
        "choices": [
            { "text": "Beweise sehen", "next": "dx_4" },
            { "text": "Zweifeln", "next": "dx_5", "karma": -1 }
        ]
    },

    "dx_2": {
        "text": "Mandark: 'Dexter versteht das System nicht vollständig. Niemand tut das.'",
        "choices": [
            { "text": "Warum?", "next": "dx_4" },
            { "text": "Ignorieren", "next": "dx_5", "karma": -1 }
        ]
    },

    "dx_3": {
        "text": "Du findest Spuren von mehrfach überschriebenen Zeitlinien im Laborcode.",
        "choices": [
            { "text": "Daten nehmen", "next": "dx_6", "gain_item": "lab_data" },
            { "text": "Weitergehen", "next": "dx_5" }
        ]
    },

    "dx_4": {
        "text": "Dexter zeigt dir ein Gerät, das Realitäten überschreibt.",
        "choices": [
            { "text": "Anfassen", "next": "dx_7", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_5", "karma": -1 }
        ]
    },

    "dx_5": {
        "text": "Das Labor beginnt sich selbst neu zu starten.",
        "choices": [
            { "text": "Weiter", "next": "dx_8" }
        ]
    },

    "dx_6": {
        "text": "Die Daten zeigen: Dee Dee ist ein Systemanker.",
        "choices": [
            { "text": "Speichern", "next": "dx_8", "gain_item": "dee_dee_data" }
        ]
    },

    "dx_7": {
        "text": "Du siehst mehrere Versionen von Dexter gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "dx_9" },
            { "text": "Zurückziehen", "next": "dx_8" }
        ]
    },

    "dx_8": {
        "text": "Mandark flüstert: 'Er hat dich bereits mehrfach ersetzt.'",
        "choices": [
            { "text": "Glauben", "next": "dx_10", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_10", "karma": -2 }
        ]
    },

    "dx_9": {
        "text": "Dexter erkennt eine Fremdinstanz im Labor.",
        "choices": [
            { "text": "Konfrontieren", "next": "dx_10", "karma": -1 },
            { "text": "Beobachten", "next": "dx_10", "karma": 1 }
        ]
    },

    "dx_10": {
        "text": "Dee Dee erscheint kurz und verändert die Raumstruktur.",
        "choices": [
            { "text": "Folgen", "next": "dx_11" },
            { "text": "Ignorieren", "next": "dx_11", "karma": -1 }
        ]
    },

    "dx_11": {
        "text": "Dexter sagt: 'Das ist keine einzelne Realität mehr.'",
        "choices": [
            { "text": "Zustimmen", "next": "dx_12", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_12", "karma": -2 }
        ]
    },

    "dx_12": {
        "text": "Mandark aktiviert ein verborgenes Protokoll.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_13" },
            { "text": "Stoppen", "next": "dx_13", "karma": -1 }
        ]
    },

    "dx_13": {
        "text": "Das Labor zeigt alternative Versionen von Dexter.",
        "choices": [
            { "text": "Analysieren", "next": "dx_14" }
        ]
    },

    "dx_14": {
        "text": "Dexter: 'Ich bin nicht der Original-Dexter.'",
        "choices": [
            { "text": "Fragen", "next": "dx_15", "karma": 1 },
            { "text": "Ignorieren", "next": "dx_15", "karma": -1 }
        ]
    },

    "dx_15": {
        "text": "Dee Dee erscheint als einzige stabile Entität im System.",
        "choices": [
            { "text": "Beobachten", "next": "dx_16" }
        ]
    },

    "dx_16": {
        "text": "Mandark sagt: 'Sie hält alles zusammen.'",
        "choices": [
            { "text": "Glauben", "next": "dx_17", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_17", "karma": -2 }
        ]
    },

    "dx_17": {
        "text": "Das Labor beginnt zu kollabieren.",
        "choices": [
            { "text": "Fliehen", "next": "dx_18" },
            { "text": "Bleiben", "next": "dx_18", "karma": -1 }
        ]
    },

    "dx_18": {
        "text": "Dexter übergibt dir ein Stabilitätsmodul.",
        "choices": [
            { "text": "Nehmen", "next": "dx_19", "gain_item": "stability_module" }
        ]
    },

    "dx_19": {
        "text": "Die Realität überschreibt sich selbst im Hintergrund.",
        "choices": [
            { "text": "Weiter", "next": "dx_20" }
        ]
    },

    "dx_20": {
        "text": "Mandark: 'Jede Version von uns ist falsch.'",
        "choices": [
            { "text": "Akzeptieren", "next": "dx_21", "karma": 1 },
            { "text": "Ablehnen", "next": "dx_21", "karma": -1 }
        ]
    },

    "dx_21": {
        "text": "Dee Dee zeigt dir einen Riss im Labor.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_22" }
        ]
    },

    "dx_22": {
        "text": "Der Riss zeigt mehrere Labore gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "dx_23", "gain_item": "lab_rift_data" },
            { "text": "Berühren", "next": "dx_23", "karma": 2 }
        ]
    },

    "dx_23": {
        "text": "Dexter verliert kurz seine Synchronisation.",
        "choices": [
            { "text": "Helfen", "next": "dx_24", "karma": 2 },
            { "text": "Beobachten", "next": "dx_24" }
        ]
    },

    "dx_24": {
        "text": "Mandark stabilisiert das System teilweise.",
        "choices": [
            { "text": "Vertrauen", "next": "dx_25", "karma": 2 },
            { "text": "Misstrauen", "next": "dx_25", "karma": -2 }
        ]
    },

    "dx_25": {
        "text": "Dee Dee sagt: 'Alles hier ist ein Testlauf.'",
        "choices": [
            { "text": "Zustimmen", "next": "dx_26", "karma": 2 },
            { "text": "Ignorieren", "next": "dx_26", "karma": -2 }
        ]
    },

    "dx_26": {
        "text": "Das Labor beginnt sich in den Nexus zu öffnen.",
        "choices": [
            { "text": "Weiter", "next": "dx_27" }
        ]
    },

    "dx_27": {
        "text": "Dexter: 'Etwas außerhalb unseres Codes greift ein.'",
        "choices": [
            { "text": "Verstehen", "next": "dx_28", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_28", "karma": -2 }
        ]
    },

    "dx_28": {
        "text": "Mandark öffnet einen letzten stabilen Ausgang.",
        "choices": [
            { "text": "Durchgehen", "next": "dx_29" }
        ]
    },

    "dx_29": {
        "text": "Alle Dexter-Versionen schauen dich gleichzeitig an.",
        "choices": [
            { "text": "Weiter", "next": "dx_30" }
        ]
    },

    "dx_30": {
        "text": "Das Labor kollabiert vollständig und öffnet den Übergang zum Nexus. Kapitel 2 wird vorbereitet.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_ppg_start": {
        "text": "Townsville wirkt still, aber falsch synchronisiert. Blossom analysiert dich, Bubbles lächelt zu lange, Buttercup wirkt aggressiv ohne Grund. Mojo Jojo beobachtet aus der Ferne.",
        "choices": [
            { "text": "Blossom folgen", "next": "ppg_1", "karma": 1 },
            { "text": "Bubbles folgen", "next": "ppg_2", "karma": 2 },
            { "text": "Buttercup folgen", "next": "ppg_3", "karma": -1 },
            { "text": "Mojo Jojo beobachten", "next": "ppg_4" }
        ]
    },

    "ppg_1": {
        "text": "Blossom: 'Chemical X ist nicht nur eine Kraft. Es ist ein Kontrollsystem.'",
        "choices": [
            { "text": "Zustimmen", "next": "ppg_5", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_6", "karma": -2 }
        ]
    },

    "ppg_2": {
        "text": "Bubbles: 'Ich erinnere mich an Welten, die nicht mehr existieren sollten.'",
        "choices": [
            { "text": "Beruhigen", "next": "ppg_5", "karma": 3 },
            { "text": "Ignorieren", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_3": {
        "text": "Buttercup: 'Wenn etwas falsch ist, schlage ich es kaputt.'",
        "choices": [
            { "text": "Unterstützen", "next": "ppg_7", "karma": -2 },
            { "text": "Stoppen", "next": "ppg_5", "karma": 2 }
        ]
    },

    "ppg_4": {
        "text": "Mojo Jojo: 'Ich habe nichts zerstört... noch nicht.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_6", "karma": -2 },
            { "text": "Beobachten", "next": "ppg_5" }
        ]
    },

    "ppg_5": {
        "text": "Professor Utonium erscheint kurz und wirkt nicht vollständig real.",
        "choices": [
            { "text": "Fragen", "next": "ppg_8" },
            { "text": "Ignorieren", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_6": {
        "text": "Townsville beginnt sich in Schleifen zu wiederholen.",
        "choices": [
            { "text": "Weiter", "next": "ppg_9" }
        ]
    },

    "ppg_7": {
        "text": "Buttercup verliert kurz die Kontrolle über ihre Stärke.",
        "choices": [
            { "text": "Helfen", "next": "ppg_8", "karma": 2 },
            { "text": "Beobachten", "next": "ppg_9" }
        ]
    },

    "ppg_8": {
        "text": "Blossom zeigt dir eine verborgene Chemical X Datenstruktur.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_10", "gain_item": "chemical_x_data" },
            { "text": "Ignorieren", "next": "ppg_9", "karma": -1 }
        ]
    },

    "ppg_9": {
        "text": "Bubbles sagt: 'Wir sind nicht die erste Version von uns.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_10", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_10", "karma": -2 }
        ]
    },

    "ppg_10": {
        "text": "Mojo Jojo zeigt einen Riss unter Townsville.",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_11" },
            { "text": "Ablehnen", "next": "ppg_11", "karma": -1 }
        ]
    },

    "ppg_11": {
        "text": "Der Riss zeigt mehrere Townsville-Versionen gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_12", "gain_item": "townsville_rift" },
            { "text": "Berühren", "next": "ppg_12", "karma": 2 }
        ]
    },

    "ppg_12": {
        "text": "Blossom verliert kurz ihre Erinnerungssynchronisation.",
        "choices": [
            { "text": "Stabilisieren", "next": "ppg_13", "karma": 2 },
            { "text": "Beobachten", "next": "ppg_13" }
        ]
    },

    "ppg_13": {
        "text": "Professor Utonium sagt: 'Ihr seid Experimente in mehreren Iterationen.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_14", "karma": 2 },
            { "text": "Ablehnen", "next": "ppg_14", "karma": -2 }
        ]
    },

    "ppg_14": {
        "text": "Bubbles übergibt dir ein stabilisierendes Chemical X Fragment.",
        "choices": [
            { "text": "Nehmen", "next": "ppg_15", "gain_item": "chemical_x_fragment" }
        ]
    },

    "ppg_15": {
        "text": "Townsville beginnt sich zwischen Versionen zu verschieben.",
        "choices": [
            { "text": "Weiter", "next": "ppg_16" }
        ]
    },

    "ppg_16": {
        "text": "Buttercup sagt: 'Etwas nutzt unsere Kräfte gegen uns selbst.'",
        "choices": [
            { "text": "Verstehen", "next": "ppg_17", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_17", "karma": -2 }
        ]
    },

    "ppg_17": {
        "text": "Mojo Jojo aktiviert ein verborgenes Systemprotokoll.",
        "choices": [
            { "text": "Stoppen", "next": "ppg_18", "karma": 1 },
            { "text": "Zulassen", "next": "ppg_18", "karma": -1 }
        ]
    },

    "ppg_18": {
        "text": "Blossom sagt: 'Chemical X verbindet alle Realitäten.'",
        "choices": [
            { "text": "Akzeptieren", "next": "ppg_19", "karma": 2 },
            { "text": "Ablehnen", "next": "ppg_19", "karma": -2 }
        ]
    },

    "ppg_19": {
        "text": "Der Himmel über Townsville zeigt den Nexus kurz.",
        "choices": [
            { "text": "Beobachten", "next": "ppg_20" }
        ]
    },

    "ppg_20": {
        "text": "Bubbles übergibt dir ein Emotion Stabilizer Fragment.",
        "choices": [
            { "text": "Nehmen", "next": "ppg_21", "gain_item": "emotion_stabilizer" }
        ]
    },

    "ppg_21": {
        "text": "Buttercup verliert kurz ihre Gewaltkontrolle.",
        "choices": [
            { "text": "Helfen", "next": "ppg_22", "karma": 2 },
            { "text": "Beobachten", "next": "ppg_22" }
        ]
    },

    "ppg_22": {
        "text": "Professor Utonium: 'Ihr seid Schutzmechanismen, keine Kinder.'",
        "choices": [
            { "text": "Glauben", "next": "ppg_23", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_23", "karma": -2 }
        ]
    },

    "ppg_23": {
        "text": "Mojo Jojo zeigt einen stabilen Riss zum Nexus.",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_24" }
        ]
    },

    "ppg_24": {
        "text": "Alle Versionen von Townsville überlagern sich.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_25" }
        ]
    },

    "ppg_25": {
        "text": "Blossom sagt: 'Wir wurden mehrfach neu geschrieben.'",
        "choices": [
            { "text": "Akzeptieren", "next": "ppg_26", "karma": 1 },
            { "text": "Ablehnen", "next": "ppg_26", "karma": -1 }
        ]
    },

    "ppg_26": {
        "text": "Bubbles stabilisiert kurz die Realität.",
        "choices": [
            { "text": "Vertrauen", "next": "ppg_27", "karma": 2 },
            { "text": "Misstrauen", "next": "ppg_27", "karma": -2 }
        ]
    },

    "ppg_27": {
        "text": "Buttercup öffnet den letzten stabilen Ausgang.",
        "choices": [
            { "text": "Durchgehen", "next": "ppg_28" }
        ]
    },

    "ppg_28": {
        "text": "Mojo Jojo: 'Ich sehe die Struktur dahinter.'",
        "choices": [
            { "text": "Weiter", "next": "ppg_29" }
        ]
    },

    "ppg_29": {
        "text": "Townsville beginnt vollständig zu zerfallen.",
        "choices": [
            { "text": "Weiter", "next": "ppg_30" }
        ]
    },

    "ppg_30": {
        "text": "Ein Nexus-Riss öffnet sich vollständig. Übergang zu Kapitel 2 vorbereitet.",
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