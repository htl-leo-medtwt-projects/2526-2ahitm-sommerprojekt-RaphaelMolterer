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
            { "text": "Untersuchen", "next": "at_jake_sense" },
            { "text": "Vertrauen", "next": "at_7", "karma": 1 }
        ]
    },

    "at_jake_sense": {
        "text": "Jake schnuppert in die Luft. 'Das riecht wie… Realität, die nicht fertig gerendert wurde.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake2.png",
        "choices": [
            { "text": "Untersuchen", "next": "at_14" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_marceline": {
        "text": "Marceline spielt eine verzerrte Melodie. 'Ooo klingt heute wie ein kaputtes Lied… und jemand hat den Text geändert.' Sie schaut in eine Richtung, die du nicht definieren kannst.",
        "background": "./game_images/background_at_cave.png",
        "character": "./game_images/character_at_marceline.png",
        "choices": [
            { "text": "Nachfragen", "next": "at_10" },
            { "text": "Zur Gruppe zurück", "next": "c1_ooa_start" }
        ]
    },

    "at_group": {
        "text": "Finn, Jake und Marceline stehen gemeinsam in der instabilen Realität von Ooo. Jeder reagiert anders auf dieselbe Störung – aber alle spüren sie.",
        "background": "./game_images/background_at_ooo.png",
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
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_finnOben.png",
        "choices": [
            { "text": "Ansehen", "next": "at_13" },
            { "text": "Ignorieren", "next": "at_12", "karma": -1 }
        ]
    },

    "at_12": {
        "text": "Etwas folgt dir durch die Realitätsschicht.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_scary.png",
        "choices": [
            { "text": "Weiter gehen", "next": "at_14" }
        ]
    },

    "at_13": {
        "text": "Der Schatten im Himmel sieht aus wie ein Gesicht, das sich ständig neu formt.",
        "background": "./game_images/background_at_treehouseFace.png",
        "choices": [
            { "text": "Berühren versuchen", "next": "at_15", "karma": 2 },
            { "text": "Zurückweichen", "next": "at_14" }
        ]
    },

    "at_14": {
        "text": "Jake öffnet einen stabilen Riss in der Realität.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake3.png",
        "choices": [
            { "text": "Durchgehen", "next": "at_16" },
            { "text": "Zögern", "next": "at_12", "karma": -1 }
        ]
    },

    "at_15": {
        "text": "Du siehst eine zweite Version von Finn, die dich direkt anstarrt.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_fakeFinn.png",
        "choices": [
            { "text": "Konfrontieren", "next": "at_17", "karma": -2 },
            { "text": "Akzeptieren", "next": "at_16", "karma": 1 }
        ]
    },

    "at_16": {
        "text": "Im Himmel erscheint kurz die Silhouette des Lich.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_lich.png",
        "choices": [
            { "text": "Angreifen", "next": "at_fight", "karma": -2 },
            { "text": "Beobachten", "next": "at_18" }
        ]
    },

    "at_fight": {
        "text": "Du kämpfst gegen den Lich.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_lichFight.png",
        "choices": [
            { "text": "Mit dem Enchiridion attackieren", "next": "at_WinFight", "karma": 2, "required_item": "enchiridion_piece" },
            { "text": "Versuchen mit Faust zu kämpfen", "next": "at_looseFight", "karma": -2 }
        ]
    },

    "at_looseFight": {
        "text": "Du hast verloren und rennst weg!",
        "background": "./game_images/background_at_chaos.png",
        "choices": [
            { "text": "Der Lich bricht dir die Nase und du rennst schnell weg", "next": "at_18", "karma": -2 },
        ]
    },

    "at_WinFight": {
        "text": "Du hast gewonnen und gehst weiter!",
        "background": "./game_images/background_at_treehouse.png",
        "choices": [
            { "text": "Der Lich bricht dir die Nase und du rennst schnell weg", "next": "at_18", "karma": -2 },
        ]
    },

    "at_17": {
        "text": "Finn sagt: 'Das bist nicht du... oder doch?'",
        "background": "./game_images/background_at_finnDenken.png",
        "choices": [
            { "text": "Zustimmen", "next": "at_21", "karma": 1 },
            { "text": "Ablehnen", "next": "at_18", "karma": -1 }
        ]
    },

    "at_18": {
        "text": "Ooo beginnt zu zerfallen und neu zu laden.",
        "background": "./game_images/background_at_oooGlitch.png",
        "choices": [
            { "text": "Stabilisieren helfen", "next": "at_20", "karma": 2 },
            { "text": "Abwarten", "next": "at_20", "karma": -1 }
        ]
    },

    "at_20": {
        "text": "Jake: 'Der Lich nutzt mehrere Versionen von Ooo gleichzeitig. Geh weiter zu Finn, er hat vielleicht eine Idee.'",
        "background": "./game_images/background_at_oooGlitch.png",
        "character": "./game_images/character_at_jake.png",
        "choices": [
            { "text": "Verstehen", "next": "at_21", "karma": 2 },
            { "text": "Zweifeln", "next": "at_21", "karma": -2 }
        ]
    },

    "at_21": {
        "text": "Finn findet ein zerbrochenes Stück des Enchiridion.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finn.png",
        "choices": [
            { "text": "Nehmen", "next": "enchiridion", "gain_item": "enchiridion_piece" }
        ]
    },

    "enchiridion": {
        "text": "Du erhältst ein Stück des Enchiridion.",
        "background": "./game_images/background_at_grass.png",
        "character": "./game_images/item_at_enchiridion.png",
        "choices": [
            { "text": "Weiter", "next": "at_22" }
        ],
    },

    "at_22": {
        "text": "Mehrere Versionen von Ooo überlagern sich am Himmel.",
        "background": "./game_images/background_at_treehouseChaos.png",
        "choices": [
            { "text": "Schnell zu Marceline", "next": "at_23" },
        ]
    },

    "at_23": {
        "text": "Marceline: 'Etwas außerhalb greift ein.'",
        "background": "./game_images/background_at_cave.png",
        "character": "./game_images/character_at_marceline.png",
        "choices": [
            { "text": "Merken und Jakes Gedanken hören", "next": "at_24" },
        ]
    },

    "at_24": {
        "text": "Jake stabilisiert kurz die Realität.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake2.png",
        "choices": [
            { "text": "Vertrauen", "next": "at_25", "karma": 1 },
            { "text": "Misstrauen", "next": "at_25", "karma": -1 }
        ]
    },

    "at_25": {
        "text": "Finn: 'Wir sind nur eine von vielen Versionen.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finn.png",
        "choices": [
            { "text": "Akzeptieren", "next": "at_26", "karma": 1 },
            { "text": "Ablehnen", "next": "at_26", "karma": -1 }
        ]
    },

    "at_26": {
        "text": "Der Lich erscheint erneut, diesmal stabiler.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_lich.png",
        "choices": [
            { "text": "Kampf vorbereiten", "next": "at_27" },
            { "text": "Beobachten", "next": "at_27", "karma": -1 }
        ]
    },

    "at_27": {
        "text": "Alle kämpfen gemeinsam gegen den Lich und der Lich verschwindet langsam.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_lich.png",
        "choices": [
            { "text": "Unterstützen", "next": "at_28", "karma": 2 },
            { "text": "Zögern", "next": "at_28", "karma": -4 }
        ]
    },

    "at_28": {
        "text": "Der Lich zerfällt in Fragmente.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_lichFragment.png",
        "choices": [
            { "text": "Weiter", "next": "at_29" }
        ]
    },

    "at_29": {
        "text": "Ooo stabilisiert sich kurz, doch der Nexus öffnet sich am Himmel.",
        "background": "./game_images/background_at_treehouse.png",
        "choices": [
            { "text": "Weiter", "next": "at_30" }
        ]
    },

    "at_30": {
        "text": "Der Nexus zieht Ooo in die Verbindung aller Welten. Kapitel 2 wird vorbereitet.",
        "background": "./game_images/background_at_ooo.png",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_gb_start": {
        "text": "In Elmore herrscht Chaos wie immer. Ein kaputter Einkaufswagen rollt brennend die Straße runter, Richard steckt im Briefkasten fest und irgendwo schreit Banana Joe grundlos. Gumball winkt dich hektisch zu sich. 'Perfektes Timing. Heute ist ALLES schiefgelaufen.'",
        "background": "./game_images/background_gb_elmore.png",
        "choices": [
            { "text": "Gumball helfen", "next": "gb_1", "karma": 1 },
            { "text": "Mit Darwin reden", "next": "gb_2" },
            { "text": "Anais folgen", "next": "gb_3", "karma": 2 },
            { "text": "Banana Joe beobachten", "next": "gb_4" }
        ]
    },

    "gb_1": {
        "text": "Gumball zeigt auf die Schule. 'Principal Brown rastet aus, weil jemand das komplette Notensystem gelöscht hat. Und irgendwie glaubt jeder, ich war's.'",
        "character": "./game_images/character_gb_gumball.png",
        "background": "./game_images/background_gb_school.png",
        "choices": [
            { "text": "Beim Suchen helfen", "next": "gb_5" },
            { "text": "Nicht dein Problem", "next": "gb_6", "karma": -1 },
            { "text": "Fragen was passiert ist", "next": "gb_7", "karma": 1 }
        ]
    },

    "gb_2": {
        "text": "Darwin wirkt nervös. 'Carrie hat aus Versehen die Stromversorgung der Schule gegruselt und jetzt spinnen alle elektronischen Sachen.'",
        "background": "./game_images/background_gb_school.png",

        "choices": [
            { "text": "Helfen", "next": "gb_7", "karma": 2 },
            { "text": "Darüber lachen", "next": "gb_6", "karma": -1 },
            { "text": "Zur Schule gehen", "next": "gb_8" }
        ]
    },

    "gb_3": {
        "text": "Anais hält mehrere Zettel in der Hand. 'Gumball und Darwin haben versucht, ihre Noten zu verbessern und dabei vermutlich das Schulnetzwerk zerstört.'",
        "choices": [
            { "text": "Anais helfen", "next": "gb_9" },
            { "text": "Ignorieren", "next": "gb_6", "karma": -2 },
            { "text": "Die beiden verraten", "next": "gb_10", "karma": 2 }
        ]
    },

    "gb_4": {
        "text": "Banana Joe rennt lachend über den Schulhof. Hinter ihm fliegen hunderte ausgedruckte Zeugnisse durch die Luft.",
        "choices": [
            { "text": "Hinterherrennen", "next": "gb_6" },
            { "text": "Die Zeugnisse einsammeln", "next": "gb_8", "karma": 1 }
        ]
    },

    "gb_5": {
        "text": "Gumball führt dich in den Computerraum. Alle Bildschirme zeigen plötzlich nur noch dieselbe Nachricht: 'SYSTEM ERROR'.",
        "choices": [
            { "text": "Computer untersuchen", "next": "gb_11", "gain_item": "school_access_card" },
            { "text": "Lieber abhauen", "next": "gb_6", "karma": -1 }
        ]
    },

    "gb_6": {
        "text": "Während ihr diskutiert, fällt plötzlich in der ganzen Schule der Strom aus. Schüler schreien, Automaten explodieren und irgendwo spielt eine Trompete.",
        "choices": [
            { "text": "Weiter", "next": "gb_12" }
        ]
    },

    "gb_7": {
        "text": "Darwin erklärt alles hektisch. 'Wir wollten nur die Noten kurz ansehen. Dann hat Gumball auf irgendwas geklickt und jetzt funktioniert nichts mehr.'",
        "choices": [
            { "text": "Verstehen", "next": "gb_10", "karma": 2 },
            { "text": "Gumball beschuldigen", "next": "gb_12", "karma": -2 }
        ]
    },

    "gb_8": {
        "text": "In der Schule wiederholt die Lautsprecheranlage ständig dieselbe Durchsage von Principal Brown.",
        "choices": [
            { "text": "Kontrollraum suchen", "next": "gb_11" }
        ]
    },

    "gb_9": {
        "text": "Anais verbindet ihr Tablet mit dem Schulserver. 'Okay. Das Chaos kommt von einem Fehler im Hauptsystem. Überraschenderweise war Gumball diesmal nicht komplett schuld.'",
        "choices": [
            { "text": "Daten speichern", "next": "gb_13", "gain_item": "anais_backup_drive" }
        ]
    },

    "gb_10": {
        "text": "Gumball versucht den Computer neu zu starten und sorgt versehentlich dafür, dass überall die Feueralarme losgehen.",
        "choices": [
            { "text": "Beim Stoppen helfen", "next": "gb_13", "karma": 2 },
            { "text": "Nur zusehen", "next": "gb_12" }
        ]
    },

    "gb_11": {
        "text": "Im Kontrollraum entdeckt ihr, dass das gesamte Schulnetzwerk in einer Endlosschleife festhängt.",
        "choices": [
            { "text": "System reparieren", "next": "gb_14" },
            { "text": "Ignorieren", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_12": {
        "text": "Die Schule versinkt komplett im Chaos. Türen öffnen sich zufällig, Lautsprecher rauschen und Larry versucht gleichzeitig zehn Probleme zu lösen.",
        "choices": [
            { "text": "Weiter", "next": "gb_15" }
        ]
    },

    "gb_13": {
        "text": "Darwin gibt dir einen USB-Stick. 'Anais meint, damit könnten wir das System zurücksetzen.'",
        "choices": [
            { "text": "Nehmen", "next": "gb_15", "gain_item": "reset_drive" }
        ]
    },

    "gb_14": {
        "text": "Das System zeigt plötzlich hunderte fehlerhafte Dateien mit Namen wie 'Elmore_Final_v2_REAL_final'.",
        "choices": [
            { "text": "Dateien analysieren", "next": "gb_16", "gain_item": "system_logs" },
            { "text": "Einfach löschen", "next": "gb_16", "karma": 2 }
        ]
    },

    "gb_15": {
        "text": "Gumball lehnt sich erschöpft gegen die Wand. 'Warum endet bei uns eigentlich jeder normale Tag in einer Katastrophe?'",
        "choices": [
            { "text": "Antworten", "next": "gb_17", "karma": 2 },
            { "text": "Schweigen", "next": "gb_17", "karma": -2 }
        ]
    },

    "gb_16": {
        "text": "Anais liest die Systemfehler durch. 'Okay... irgendwas schreibt die Fehler ständig neu. Deshalb kommt alles wieder zurück.'",
        "choices": [
            { "text": "Zuhören", "next": "gb_17", "karma": 2 },
            { "text": "Nicht verstehen", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_17": {
        "text": "Die Bildschirme der Schule beginnen plötzlich gleichzeitig zu flackern.",
        "choices": [
            { "text": "Weitergehen", "next": "gb_18" }
        ]
    },

    "gb_18": {
        "text": "Banana Joe erscheint auf einem der Bildschirme. 'Äh... warum bin ich plötzlich im Schulsystem drin?'",
        "choices": [
            { "text": "Mit ihm reden", "next": "gb_19" },
            { "text": "Ignorieren", "next": "gb_19", "karma": -1 }
        ]
    },

    "gb_19": {
        "text": "Der Hauptcomputer der Schule beginnt komplett zu überhitzen.",
        "choices": [
            { "text": "Reparieren", "next": "gb_20" }
        ]
    },

    "gb_20": {
        "text": "Darwin schafft es kurz, die Systeme zu stabilisieren. 'Okay! Jetzt oder nie!'",
        "choices": [
            { "text": "Vertrauen", "next": "gb_21", "karma": 2 },
            { "text": "Zweifeln", "next": "gb_21", "karma": -2 }
        ]
    },

    "gb_21": {
        "text": "Gumball startet das Backup-System. Für einen Moment funktioniert plötzlich wieder alles normal.",
        "choices": [
            { "text": "Überprüfen", "next": "gb_22", "gain_item": "system_restore_key" },
            { "text": "Abwarten", "next": "gb_22", "karma": -1 }
        ]
    },

    "gb_22": {
        "text": "Anais verschränkt die Arme. 'Das Problem war nie der Computer. Die Schule selbst hat ständig fehlerhafte Daten produziert.'",
        "choices": [
            { "text": "Glauben", "next": "gb_23", "karma": 2 },
            { "text": "Nicht glauben", "next": "gb_23", "karma": -2 }
        ]
    },

    "gb_23": {
        "text": "Plötzlich springt der Strom wieder an. Die Schule sieht aus, als wäre nie etwas passiert.",
        "choices": [
            { "text": "Weiter", "next": "gb_24" }
        ]
    },

    "gb_24": {
        "text": "Gumball grinst erleichtert. 'Cool. Also haben wir offiziell nur fast die komplette Schule zerstört.'",
        "choices": [
            { "text": "Lachen", "next": "gb_25", "karma": 1 },
            { "text": "Kopfschütteln", "next": "gb_25", "karma": -1 }
        ]
    },

    "gb_25": {
        "text": "Über der Schule öffnet sich plötzlich ein seltsamer leuchtender Riss am Himmel.",
        "choices": [
            { "text": "Ansehen", "next": "gb_26" }
        ]
    },

    "gb_26": {
        "text": "Darwin schaut nervös nach oben. 'Bitte sag mir, das hat nichts mit uns zu tun.'",
        "choices": [
            { "text": "Untersuchen", "next": "gb_27", "required_item": "reset_drive" },
            { "text": "Zögern", "next": "gb_27", "karma": -1 }
        ]
    },

    "gb_27": {
        "text": "Der Himmel über Elmore beginnt zu flackern wie ein kaputter Fernseher.",
        "choices": [
            { "text": "Weiter", "next": "gb_28" }
        ]
    },

    "gb_28": {
        "text": "Anais sieht ernst aus. 'Okay. DAS ist definitiv nicht mehr normaler Cartoon-Wahnsinn.'",
        "choices": [
            { "text": "Zustimmen", "next": "gb_29", "karma": 2 },
            { "text": "Verharmlosen", "next": "gb_29", "karma": -2 }
        ]
    },

    "gb_29": {
        "text": "Gumball schaut zwischen dem Himmel und der Schule hin und her. 'Warum habe ich das Gefühl, dass das erst der Anfang war?'",
        "choices": [
            { "text": "Weiter", "next": "gb_30" }
        ]
    },

    "gb_30": {
        "text": "Der leuchtende Riss stabilisiert sich über Elmore und verbindet sich mit etwas weit Größerem.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_dx_start": {
        "text": "Dexters Labor existiert in mehreren leicht versetzten Versionen gleichzeitig. Monitore flackern zwischen verschiedenen Experimenten, Türen führen nicht immer in denselben Raum und irgendwo läuft ein Alarm, den niemand ausgelöst hat. Dee Dee taucht ständig an unmöglichen Orten auf, während Mandark alles mit verdächtig ruhigem Lächeln beobachtet.",
        "background": "./game_images/background_dx_lab.png",
        "choices": [
            { "text": "Mit Dexter reden", "next": "dx_dexter", "karma": 1 },
            { "text": "Mit Mandark reden", "next": "dx_mandark", "karma": -1 },
            { "text": "Das Labor untersuchen", "next": "dx_3" },
            { "text": "Dee Dee folgen", "next": "dx_deedee", "karma": 2 }
        ]
    },

    "dx_dexter": {
        "text": "Dexter hämmert hektisch auf seine Tastatur ein. 'Nein, nein, nein! Diese Simulation sollte stabil sein! Du gehörst definitiv nicht in diese Iteration!'",
        "background": "./game_images/background_dx_controlroom.png",
        "character": "./game_images/character_dx_dexter.png",
        "choices": [
            { "text": "Nachfragen", "next": "dx_5" },
            { "text": "Beruhigen", "next": "dx_6" },
            { "text": "Beweise verlangen", "next": "dx_7", "karma": 1 },
            { "text": "Zurück zum Labor", "next": "c1_dx_start" }
        ]
    },

    "dx_mandark": {
        "text": "Mandark verschränkt die Arme. 'Dexter versteht nur lineare Wissenschaft. Aber Realität ist chaotisch… rekursiv… wunderschön instabil.'",
        "background": "./game_images/background_dx_darklab.png",
        "character": "./game_images/character_dx_mandark.png",
        "choices": [
            { "text": "Zuhören", "next": "dx_7", "karma": 1 },
            { "text": "Ihm misstrauen", "next": "dx_6", "karma": -2 },
            { "text": "Zurück zum Labor", "next": "c1_dx_start" }
        ]
    },

    "dx_deedee": {
        "text": "Dee Dee tanzt zwischen Maschinen hindurch, ohne die flackernden Warnungen zu beachten. 'Ooooh! Dieses Labor macht heute lustige Geräusche!'",
        "background": "./game_images/background_dx_hallway.png",
        "character": "./game_images/character_dx_deedee.png",
        "choices": [
            { "text": "Fragen was sie sieht", "next": "dx_10" },
            { "text": "Ihr folgen", "next": "dx_8", "karma": 1 },
            { "text": "Zurück zum Labor", "next": "c1_dx_start" }
        ]
    },

    "dx_3": {
        "text": "Du findest eine Datei namens REALITY_PATCH_LOG. Sie wurde hunderte Male überschrieben.",
        "background": "./game_images/background_dx_terminal.png",
        "choices": [
            { "text": "Datei analysieren", "next": "dx_9", "gain_item": "reality_log" },
            { "text": "Terminal schließen", "next": "dx_6", "karma": -1 }
        ]
    },

    "dx_5": {
        "text": "Dexter zeigt dir mehrere Monitore. Auf jedem läuft eine leicht andere Version des Labors — und in jedem stehst du an anderer Stelle.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_11" },
            { "text": "Abwenden", "next": "dx_6", "karma": -1 }
        ]
    },

    "dx_6": {
        "text": "Das Labor beginnt sich selbst neu zu kompilieren. Wände verschieben sich und Maschinen erscheinen doppelt.",
        "background": "./game_images/background_dx_glitch.png",
        "choices": [
            { "text": "Weiter", "next": "dx_12" }
        ]
    },

    "dx_7": {
        "text": "Mandark grinst leicht. 'Du bist ein Fremdprozess in Dexters System. Deshalb reagiert alles auf dich.'",
        "choices": [
            { "text": "Akzeptieren", "next": "dx_10", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_12", "karma": -2 }
        ]
    },

    "dx_8": {
        "text": "Dee Dee dreht sich lachend im Kreis. Dabei verändern sich die Korridore des Labors um sie herum.",
        "choices": [
            { "text": "Weiter folgen", "next": "dx_13" },
            { "text": "Zurückziehen", "next": "dx_12", "karma": -1 }
        ]
    },

    "dx_9": {
        "text": "Die Datei zeigt, dass Dexter die Realität des Labors mehrfach zurückgesetzt hat.",
        "choices": [
            { "text": "Speichern", "next": "dx_13", "gain_item": "patch_core" }
        ]
    },

    "dx_10": {
        "text": "Dee Dee schaut plötzlich ernst. 'Manchmal erinnert sich das Labor an Sachen, die noch gar nicht passiert sind.'",
        "choices": [
            { "text": "Zuhören", "next": "dx_14", "karma": 2 },
            { "text": "Nicht ernst nehmen", "next": "dx_12", "karma": -2 }
        ]
    },

    "dx_11": {
        "text": "Du siehst unzählige Dexter-Versionen. Manche arbeiten friedlich. Andere beobachten dich direkt.",
        "choices": [
            { "text": "Analysieren", "next": "dx_14" },
            { "text": "Ignorieren", "next": "dx_12", "karma": -1 }
        ]
    },

    "dx_12": {
        "text": "Ein schwerer Systemfehler breitet sich durch das Labor aus.",
        "choices": [
            { "text": "Weitergehen", "next": "dx_15" }
        ]
    },

    "dx_13": {
        "text": "Dee Dee berührt eine instabile Maschine — plötzlich stabilisiert sie sich.",
        "choices": [
            { "text": "Näher beobachten", "next": "dx_16" },
            { "text": "Weitergehen", "next": "dx_15" }
        ]
    },

    "dx_14": {
        "text": "Mandark deutet auf die Decke des Labors. 'Dieses Labor ist nur ein Layer in einer viel größeren Struktur.'",
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
        "text": "Dexter starrt auf seine Scanner. 'Das ist unmöglich… Dee Dee stabilisiert die Realität einfach durch ihre Anwesenheit.'",
        "choices": [
            { "text": "Speichern", "next": "dx_17", "gain_item": "stability_anchor" }
        ]
    },

    "dx_17": {
        "text": "Dexter wirkt ungewöhnlich nervös. 'Wenn Dee Dee verschwindet, könnte das ganze Labor kollabieren.'",
        "choices": [
            { "text": "Dee Dee schützen", "next": "dx_18", "karma": 2 },
            { "text": "Ignorieren", "next": "dx_18", "karma": -2 }
        ]
    },

    "dx_18": {
        "text": "Unter dem Labor öffnet sich ein flackernder Realitätsriss.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_19" }
        ]
    },

    "dx_19": {
        "text": "Im Riss erscheinen mehrere Versionen des Labors gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "dx_20", "gain_item": "lab_rift_data" },
            { "text": "Berühren", "next": "dx_20", "karma": 2 }
        ]
    },

    "dx_20": {
        "text": "Mandark lächelt zufrieden. 'Dexter hat das System so oft neu geschrieben, dass es sich jetzt selbst überschreibt.'",
        "choices": [
            { "text": "Zuhören", "next": "dx_21", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_21", "karma": -2 }
        ]
    },

    "dx_21": {
        "text": "Dee Dee blickt in den Riss. 'Ich erinnere mich an Dinge, die nie passiert sind.'",
        "choices": [
            { "text": "Nachfragen", "next": "dx_22" },
            { "text": "Ignorieren", "next": "dx_15", "karma": -1 }
        ]
    },

    "dx_22": {
        "text": "Dexter aktiviert eine gewaltige Maschine mit der Aufschrift REALITY COMPILER.",
        "choices": [
            { "text": "Anfassen", "next": "dx_23", "karma": 2 },
            { "text": "Ablehnen", "next": "dx_15", "karma": -2 }
        ]
    },

    "dx_23": {
        "text": "Du siehst unzählige mögliche Versionen des Labors entstehen und verschwinden.",
        "choices": [
            { "text": "Analysieren", "next": "dx_24" }
        ]
    },

    "dx_24": {
        "text": "Dexter atmet tief durch. 'Wir sind wahrscheinlich nicht einmal die Originalversionen von uns.'",
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
        "text": "Dee Dee stabilisiert für einen kurzen Moment das gesamte Labor.",
        "choices": [
            { "text": "Vertrauen", "next": "dx_28", "karma": 2 },
            { "text": "Misstrauen", "next": "dx_28", "karma": -2 }
        ]
    },

    "dx_28": {
        "text": "Dexter blickt auf die flackernden Monitore. 'Etwas außerhalb unseres Systems greift ein.'",
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
        "text": "Dexters Labor kollabiert in den Nexus und öffnet die Verbindung zu allen Realitäten. Kapitel 2 wird vorbereitet.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_ppg_start": {
        "text": "Townsville hat einen dieser Tage, an denen alles leicht daneben wirkt – Ampeln schalten zu spät, der Himmel flackert kurz und Professor Utoniums Labor klingt, als würde etwas darin nicht richtig schließen.",
        "choices": [
            { "text": "Blossom helfen", "next": "ppg_1", "karma": 1 },
            { "text": "Bubbles begleiten", "next": "ppg_2", "karma": 2 },
            { "text": "Buttercup folgen", "next": "ppg_3", "karma": -1 },
            { "text": "Professor Utonium suchen", "next": "ppg_4" }
        ]
    },

    "ppg_5": {
        "text": "Blossom zeigt dir Messdaten aus dem Labor. Chemical X verhält sich unberechenbar, als würde es auf etwas reagieren, das außerhalb von Townsville liegt.",
        "choices": [
            { "text": "Daten sichern", "next": "ppg_9", "gain_item": "chemical_x_data" },
            { "text": "Zurückgehen", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_8": {
        "text": "Am Himmel über Townsville entstehen kurze grüne Störungen, die sofort wieder verschwinden.",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_12" },
            { "text": "Ignorieren", "next": "ppg_10", "karma": -1 }
        ]
    },

    "ppg_11": {
        "text": "Professor Utonium erkennt ein Muster in den Daten. 'Chemical X verbindet sich mit etwas anderem... aber ich weiß nicht womit.'",
        "choices": [
            { "text": "Verstehen", "next": "ppg_13", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_12", "karma": -1 }
        ]
    },

    "ppg_12": {
        "text": "Der Energieriss über Townsville wird stabiler und beginnt sichtbar zu bleiben.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_14", "gain_item": "townsville_rift" },
            { "text": "Berühren", "next": "ppg_13", "karma": 2 }
        ]
    },

    "ppg_13": {
        "text": "Buttercup verliert kurz die Kontrolle über ihre Kräfte und schlägt versehentlich einen Teil der Stadtstruktur weg.",
        "choices": [
            { "text": "Helfen stabilisieren", "next": "ppg_15", "karma": 2 },
            { "text": "Zusehen", "next": "ppg_14" }
        ]
    },

    "ppg_15": {
        "text": "Bubbles gibt dir ein kleines emotionales Stabilitätsfragment. 'Das hilft manchmal, wenn alles zu chaotisch wird.'",
        "choices": [
            { "text": "Nehmen", "next": "ppg_16", "gain_item": "emotion_core" }
        ]
    },

    "ppg_20": {
        "text": "Professor Utonium aktiviert ein Notfallprogramm, um Chemical X zu stabilisieren – aber es braucht eine externe Verbindung zum Riss.",
        "choices": [
            { "text": "Helfen", "next": "ppg_21", "karma": 1 },
            { "text": "Abwarten", "next": "ppg_21", "karma": -1 }
        ]
    },

    "ppg_22": {
        "text": "Mojo Jojo zeigt auf den Energieriss unter dem Labor. 'Ich habe ihn nicht verursacht... aber ich kann ihn öffnen.'",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_23" }
        ]
    },

    "ppg_23": {
        "text": "Der Riss pulsiert stark unter dem Labor. Dahinter scheint die Energie von Chemical X gesammelt zu werden.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_24", "gain_item": "chemical_rift_key" },
            { "text": "Berühren", "next": "ppg_24", "karma": 2 }
        ]
    },

    "ppg_28": {
        "text": "Mojo Jojo aktiviert einen instabilen Zugang zum Energieriss unter Townsville.",
        "choices": [
            { "text": "Durchgehen", "next": "ppg_29", "required_item": "chemical_rift_key" },
            { "text": "Zögern", "next": "ppg_29" }
        ]
    },

    "ppg_30": {
        "text": "Der Energieriss stabilisiert sich und verbindet Townsville mit etwas Größerem außerhalb der Realität.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_gf_start": {
        "text": "Gravity Falls fühlt sich heute falsch an – als hätte jemand die Realität leicht verschoben. Schilder wiederholen sich, der Wald wirkt tiefer als sonst, und das Mystery Shack knarzt, obwohl kein Wind geht. Dipper hält das Journal fest. 'Das passiert normalerweise nur, wenn etwas das Muster stört.'",
        "choices": [
            { "text": "Dipper folgen", "next": "gf_1", "karma": 1 },
            { "text": "Mabel helfen", "next": "gf_2", "karma": 2 },
            { "text": "Mystery Shack untersuchen", "next": "gf_3" }
        ]
    },

    "gf_1": {
        "text": "Dipper schlägt das Journal auf. Mehrere Seiten über 'anormale Risse in der Realität' wurden teilweise gelöscht.",
        "choices": [
            { "text": "Seiten suchen", "next": "gf_4", "gain_item": "journal_page" },
            { "text": "Ignorieren", "next": "gf_5", "karma": -1 }
        ]
    },

    "gf_2": {
        "text": "Mabel zeigt dir einen Pullover, der plötzlich Symbole zeigt, die vorher nicht da waren. 'Das ist irgendwie gruselig, aber auch irgendwie cool?'",
        "choices": [
            { "text": "Untersuchen", "next": "gf_4", "karma": 2 },
            { "text": "Ablehnen", "next": "gf_5" }
        ]
    },

    "gf_3": {
        "text": "Im Keller des Shack findest du Ford’s alte Geräte. Eines davon läuft noch… obwohl es eigentlich ausgeschaltet sein sollte.",
        "choices": [
            { "text": "Gerät aktivieren", "next": "gf_6", "gain_item": "machine_core" },
            { "text": "Finger weg", "next": "gf_5" }
        ]
    },

    "gf_4": {
        "text": "Dipper zeigt auf den Wald. Alte Warnsymbole tauchen in den Bäumen auf – sie scheinen frisch eingebrannt.",
        "choices": [
            { "text": "Symbole analysieren", "next": "gf_7", "karma": 2 },
            { "text": "Ignorieren", "next": "gf_8", "karma": -1 }
        ]
    },

    "gf_5": {
        "text": "Für einen Moment wird alles still. Selbst der Wind stoppt. Dann ist es wieder normal – zu normal.",
        "choices": [
            { "text": "Weiter", "next": "gf_8" }
        ]
    },

    "gf_6": {
        "text": "Das Gerät aktiviert sich und spielt eine Nachricht von Ford ab: 'Wenn das hier läuft, hat Bill wieder begonnen, durch Träume zu greifen.'",
        "choices": [
            { "text": "Nachricht anhören", "next": "gf_7", "karma": 1 },
            { "text": "Ausschalten", "next": "gf_8" }
        ]
    },

    "gf_7": {
        "text": "Ford erscheint kurz über das Gerät. 'Bill Cipher beeinflusst wieder die Traumebene. Und er nutzt Gravity Falls als Zugang.'",
        "choices": [
            { "text": "Glauben", "next": "gf_9", "karma": 2 },
            { "text": "Zweifeln", "next": "gf_10", "karma": -2 }
        ]
    },

    "gf_8": {
        "text": "Wendy warnt dich im Wald. 'Da draußen sind Dinge, die sich falsch anfühlen. Und ich meine nicht normal falsch.'",
        "choices": [
            { "text": "Mit Wendy gehen", "next": "gf_9" },
            { "text": "Alleine gehen", "next": "gf_10", "karma": -1 }
        ]
    },

    "gf_9": {
        "text": "Zwischen den Bäumen siehst du ein pulsierendes Auge im Holz eines alten Baumes.",
        "choices": [
            { "text": "Untersuchen", "next": "gf_11", "gain_item": "cipher_eye" },
            { "text": "Zerstören", "next": "gf_12", "karma": 1 }
        ]
    },

    "gf_10": {
        "text": "Gideon taucht plötzlich auf. 'Du bist genau da, wo du sein sollst.'",
        "choices": [
            { "text": "Gideon konfrontieren", "next": "gf_12", "karma": -2 },
            { "text": "Fragen stellen", "next": "gf_11" }
        ]
    },

    "gf_11": {
        "text": "Das Auge reagiert auf das Journalfragment und öffnet eine kleine Verzerrung in der Luft.",
        "choices": [
            { "text": "Kombinieren", "next": "gf_13", "required_item": "journal_page" },
            { "text": "Nicht riskieren", "next": "gf_14" }
        ]
    },

    "gf_12": {
        "text": "Der Wald beginnt sich leicht zu falten, als würde er dieselbe Szene erneut abspielen.",
        "choices": [
            { "text": "Weiterlaufen", "next": "gf_14" }
        ]
    },

    "gf_13": {
        "text": "Ein versteckter Pfad öffnet sich. Die Realität wirkt dahinter instabil.",
        "choices": [
            { "text": "Betreten", "next": "gf_15", "karma": 2 },
            { "text": "Warten", "next": "gf_14" }
        ]
    },

    "gf_14": {
        "text": "Mabel findet einen Kristall, der leise pulsiert, wenn sie ihn berührt.",
        "choices": [
            { "text": "Kristall nehmen", "next": "gf_15", "gain_item": "rift_crystal" },
            { "text": "Lassen", "next": "gf_15" }
        ]
    },

    "gf_15": {
        "text": "Ford erklärt erneut: 'Bill greift durch Träume an. Wir müssen ihn dort treffen.'",
        "choices": [
            { "text": "Traummaschine aktivieren", "next": "gf_16", "required_item": "machine_core" },
            { "text": "Ablehnen", "next": "gf_17", "karma": -1 }
        ]
    },

    "gf_16": {
        "text": "Du betrittst eine Traumwelt voller schwebender Symbole und verzerrter Realität.",
        "choices": [
            { "text": "Symbol berühren", "next": "gf_18", "karma": 1 },
            { "text": "Abstand halten", "next": "gf_17" }
        ]
    },

    "gf_17": {
        "text": "Eine Stimme flüstert: 'Ich sehe dich, Dipper Pines…'",
        "choices": [
            { "text": "Antworten", "next": "gf_18", "karma": -1 },
            { "text": "Ignorieren", "next": "gf_19", "karma": 1 }
        ]
    },

    "gf_18": {
        "text": "Bill Cipher erscheint lächelnd im Traumraum. 'Endlich treffen wir uns richtig.'",
        "choices": [
            { "text": "Mit Bill reden", "next": "gf_20", "karma": -2 },
            { "text": "Ford warnen", "next": "gf_19", "karma": 2 }
        ]
    },

    "gf_19": {
        "text": "Ford aktiviert Schutzrunen im Shack. Die Realität beginnt sich kurz zu stabilisieren.",
        "choices": [
            { "text": "Runen verstärken", "next": "gf_21", "required_item": "rift_crystal" },
            { "text": "Nur beobachten", "next": "gf_21" }
        ]
    },

    "gf_20": {
        "text": "Bill bietet dir Kontrolle über alle Realitäten an. 'Stell dir vor, du könntest alles schreiben.'",
        "choices": [
            { "text": "Annehmen", "next": "gf_22", "karma": -5 },
            { "text": "Ablehnen", "next": "gf_21", "karma": 3 }
        ]
    },

    "gf_21": {
        "text": "Soos bringt eine Kiste voller alter Ford-Artefakte. 'Ich hab einfach alles gesammelt, was gefährlich aussah!'",
        "choices": [
            { "text": "Durchsuchen", "next": "gf_23", "gain_item": "gravity_orb" },
            { "text": "Ignorieren", "next": "gf_24" }
        ]
    },

    "gf_22": {
        "text": "Bills Auge beginnt sich in deiner Schattenform zu spiegeln.",
        "choices": [
            { "text": "Weiter", "next": "gf_24" }
        ]
    },

    "gf_23": {
        "text": "Dipper erkennt ein altes Symbol, das speziell gegen Bill Cipher wirkt.",
        "choices": [
            { "text": "Aktivieren", "next": "gf_25", "required_item": "cipher_eye" },
            { "text": "Nicht riskieren", "next": "gf_24" }
        ]
    },

    "gf_24": {
        "text": "Der Himmel über Gravity Falls reißt auf und zeigt den Nexus dahinter.",
        "choices": [
            { "text": "Zum Portal", "next": "gf_26" }
        ]
    },

    "gf_25": {
        "text": "Bill schreit kurz auf. Die Traumwelt stabilisiert sich.",
        "choices": [
            { "text": "Weiter", "next": "gf_26", "karma": 3 }
        ]
    },

    "gf_26": {
        "text": "Ford sagt ernst: 'Nur jemand außerhalb dieses Systems kann es wirklich schließen.'",
        "choices": [
            { "text": "Helfen", "next": "gf_27", "karma": 2 },
            { "text": "Ablehnen", "next": "gf_27", "karma": -2 }
        ]
    },

    "gf_27": {
        "text": "Bill übernimmt kurz Gideons Körper und verzerrt die Realität um ihn herum.",
        "choices": [
            { "text": "Angreifen", "next": "gf_28", "required_item": "gravity_orb" },
            { "text": "Zurückweichen", "next": "gf_29", "karma": -1 }
        ]
    },

    "gf_28": {
        "text": "Das Gravity Orb stößt Bill aus dem Körper und schwächt ihn.",
        "choices": [
            { "text": "Versiegeln", "next": "gf_30", "required_item": "mystery_key" },
            { "text": "Entkommen lassen", "next": "gf_29", "karma": -5 }
        ]
    },

    "gf_29": {
        "text": "Die Realität beginnt zu kollabieren, aber Ford öffnet einen letzten stabilen Ausgang.",
        "choices": [
            { "text": "Durchgehen", "next": "gf_30" }
        ]
    },

    "gf_30": {
        "text": "Gravity Falls stabilisiert sich kurz – aber der Nexus verbindet sich bereits mit anderen Welten.",
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