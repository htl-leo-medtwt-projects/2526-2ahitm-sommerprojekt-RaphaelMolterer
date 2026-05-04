let gameData = {

    "player": {
        "karma": 0,
        "inventory": []
    },

    "start": {
        "text": "Der Nexus stabilisiert fuenf getrennte Cartoon-Realitaeten. Jede zieht dich in ihre Version der Wahrheit.",
        "choices": [
            { "text": "Adventure Time", "next": "c1_ooa_start" },
            { "text": "Gumball", "next": "c1_gb_start" },
            { "text": "Dexters Labor", "next": "c1_dx_start" },
            { "text": "Powerpuff Girls", "next": "c1_ppg_start" },
            { "text": "Gravity Falls", "next": "c1_gf_start" }
        ]
    },

    "c1_ooa_start": {
        "text": "Der Nexus stabilisiert fuenf getrennte Cartoon-Realitaeten. Ooo wirkt instabil, als wuerde es zwischen Versionen wechseln. Finn, Jake und Marceline sind alle in der Naehe – und keiner von ihnen wirkt voellig normal.",
        "background": "./game_images/background_at_ooo.png",
        "choices": [
            { "text": "Finn ansprechen", "next": "at_finn" },
            { "text": "Jake ansprechen", "next": "at_jake" },
            { "text": "Marceline ansprechen", "next": "at_marceline", "karma": -1 },
            { "text": "Die Umgebung untersuchen", "next": "at_6" }
        ]
    },

    "at_finn": {
        "text": "Finn steht angespannt da, die Haende geballt. 'Okay... das fuehlt sich nicht wie ein normales Abenteuer an. Eher so, als wuerde jemand an der Welt ziehen.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finn.png",
        "choices": [
            { "text": "Nach Details fragen", "next": "at_finn_detail" },
            { "text": "Beruhigen", "next": "at_group" },
            { "text": "Zur Gruppe zurueck", "next": "c1_ooa_start" }
        ]
    },

    "at_finn_detail": {
        "text": "Finn: 'Ich hatte Traeume... in denen alles falsch war. Und jetzt fuehlt es sich an, als wuerden die Traeume zurueck in die Realitaet sickern.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finnDenken.png",
        "choices": [
            { "text": "Das ist gefaehrlich", "next": "at_11" },
            { "text": "Zur Gruppe zurueck", "next": "c1_ooa_start" }
        ]
    },

    "at_jake": {
        "text": "Jake liegt halb entspannt da, obwohl die Realitaet flackert. 'Entweder ist Ooo kaputt oder ich hab wieder komische Sandwiches gegessen.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake.png",
        "choices": [
            { "text": "Das ist ernst", "next": "at_jake_serious" },
            { "text": "Was spuerst du?", "next": "at_jake_sense" },
            { "text": "Zur Gruppe zurueck", "next": "c1_ooa_start" }
        ]
    },

    "at_jake_serious": {
        "text": "Jake richtet sich auf. 'Okay, ernst-Modus. Irgendwas greift hier von aussen rein. Und es fuehlt sich nicht freundlich an.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake2.png",
        "choices": [
            { "text": "Untersuchen", "next": "at_jake_sense" },
            { "text": "Vertrauen", "next": "at_7", "karma": 1 }
        ]
    },

    "at_jake_sense": {
        "text": "Jake schnuppert in die Luft. 'Das riecht wie… Realitaet, die nicht fertig gerendert wurde.'",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake2.png",
        "choices": [
            { "text": "Untersuchen", "next": "at_14" },
            { "text": "Zur Gruppe zurueck", "next": "c1_ooa_start" }
        ]
    },

    "at_marceline": {
        "text": "Marceline spielt eine verzerrte Melodie. 'Ooo klingt heute wie ein kaputtes Lied… und jemand hat den Text geaendert.' Sie schaut in eine Richtung, die du nicht definieren kannst.",
        "background": "./game_images/background_at_cave.png",
        "character": "./game_images/character_at_marceline.png",
        "choices": [
            { "text": "Nachfragen", "next": "at_10" },
            { "text": "Zur Gruppe zurueck", "next": "c1_ooa_start" }
        ]
    },

    "at_group": {
        "text": "Finn, Jake und Marceline stehen gemeinsam in der instabilen Realitaet von Ooo. Jeder reagiert anders auf dieselbe Stoerung – aber alle spueren sie.",
        "background": "./game_images/background_at_ooo.png",
        "choices": [
            { "text": "Finn beobachten", "next": "at_finn" },
            { "text": "Jake beobachten", "next": "at_jake" },
            { "text": "Marceline beobachten", "next": "at_marceline" },
            { "text": "Umgebung untersuchen", "next": "at_6" }
        ]
    },

    "at_6": {
        "text": "Die Welt flackert. Ooo verliert kurz seine Stabilitaet.",
        "background": "./game_images/background_at_oooGlitch.png",
        "choices": [
            { "text": "Weitergehen", "next": "at_12" }
        ]
    },

    "at_11": {
        "text": "Finn zeigt in den Himmel. Ein Schatten formt sich dort – staendig wechselnd, nie stabil.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_finnOben.png",
        "choices": [
            { "text": "Ansehen", "next": "at_13" },
            { "text": "Ignorieren", "next": "at_12", "karma": -1 }
        ]
    },

    "at_12": {
        "text": "Etwas folgt dir durch die Realitaetsschicht.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_scary.png",
        "choices": [
            { "text": "Weiter gehen", "next": "at_14" }
        ]
    },

    "at_13": {
        "text": "Der Schatten im Himmel sieht aus wie ein Gesicht, das sich staendig neu formt.",
        "background": "./game_images/background_at_treehouseFace.png",
        "choices": [
            { "text": "Beruehren versuchen", "next": "at_15", "karma": 2 },
            { "text": "Zurueckweichen", "next": "at_14" }
        ]
    },

    "at_14": {
        "text": "Jake oeffnet einen stabilen Riss in der Realitaet.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_jake3.png",
        "choices": [
            { "text": "Durchgehen", "next": "at_16" },
            { "text": "Zoegern", "next": "at_12", "karma": -1 }
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
        "text": "Du kaempfst gegen den Lich.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_lichFight.png",
        "choices": [
            { "text": "Mit dem Enchiridion attackieren", "next": "at_WinFight", "karma": 2, "required_item": "enchiridion_piece" },
            { "text": "Versuchen mit Faust zu kaempfen", "next": "at_looseFight", "karma": -2 }
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
        "text": "Finn findet ein zerbrochenes Stueck des Enchiridion.",
        "background": "./game_images/background_at_treehouse.png",
        "character": "./game_images/character_at_finn.png",
        "choices": [
            { "text": "Nehmen", "next": "enchiridion", "gain_item": "enchiridion_piece" }
        ]
    },

    "enchiridion": {
        "text": "Du erhaeltst ein Stueck des Enchiridion.",
        "background": "./game_images/background_at_grass.png",
        "character": "./game_images/item_at_enchiridion.png",
        "choices": [
            { "text": "Weiter", "next": "at_22" }
        ],
    },

    "at_22": {
        "text": "Mehrere Versionen von Ooo ueberlagern sich am Himmel.",
        "background": "./game_images/background_at_treehouseChaos.png",
        "choices": [
            { "text": "Schnell zu Marceline", "next": "at_23" },
        ]
    },

    "at_23": {
        "text": "Marceline: 'Etwas ausserhalb greift ein.'",
        "background": "./game_images/background_at_cave.png",
        "character": "./game_images/character_at_marceline.png",
        "choices": [
            { "text": "Merken und Jakes Gedanken hoeren", "next": "at_24" },
        ]
    },

    "at_24": {
        "text": "Jake stabilisiert kurz die Realitaet.",
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
        "text": "Alle kaempfen gemeinsam gegen den Lich und der Lich verschwindet langsam.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_lich.png",
        "choices": [
            { "text": "Unterstuetzen", "next": "at_28", "karma": 2 },
            { "text": "Zoegern", "next": "at_28", "karma": -4 }
        ]
    },

    "at_28": {
        "text": "Der Lich zerfaellt in Fragmente.",
        "background": "./game_images/background_at_treehouseRip.png",
        "character": "./game_images/character_at_lichFragment.png",
        "choices": [
            { "text": "Weiter", "next": "at_29" }
        ]
    },

    "at_29": {
        "text": "Ooo stabilisiert sich kurz, doch der Nexus oeffnet sich am Himmel.",
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
        "text": "In Elmore herrscht Chaos wie immer. Ein kaputter Einkaufswagen rollt brennend die Strasse runter, Richard steckt im Briefkasten fest und irgendwo schreit Banana Joe grundlos. Gumball winkt dich hektisch zu sich. 'Perfektes Timing. Heute ist ALLES schiefgelaufen.'",
        "background": "./game_images/background_gb_elmore.png",
        "choices": [
            { "text": "Gumball helfen", "next": "gb_1", "karma": 1 },
            { "text": "Mit Darwin reden", "next": "gb_2" },
            { "text": "Anais folgen", "next": "gb_3", "karma": 2 },
            { "text": "Banana Joe beobachten", "next": "gb_4" }
        ]
    },

    "gb_1": {
        "text": "Gumball zeigt auf die Schule. 'Principal Brown rastet aus, weil jemand das komplette Notensystem geloescht hat. Und irgendwie glaubt jeder, ich war's.'",
        "character": "./game_images/character_gb_gumball.png",
        "background": "./game_images/background_gb_school.png",
        "choices": [
            { "text": "Beim Suchen helfen", "next": "gb_5" },
            { "text": "Nicht dein Problem", "next": "gb_6", "karma": -1 },
            { "text": "Fragen was passiert ist", "next": "gb_7", "karma": 1 }
        ]
    },

    "gb_2": {
        "text": "Darwin wirkt nervoes. 'Carrie hat aus Versehen die Stromversorgung der Schule gegruselt und jetzt spinnen alle elektronischen Sachen.'",
        "background": "./game_images/background_gb_school.png",

        "choices": [
            { "text": "Helfen", "next": "gb_7", "karma": 2 },
            { "text": "Darueber lachen", "next": "gb_6", "karma": -1 },
            { "text": "Zur Schule gehen", "next": "gb_8" }
        ]
    },

    "gb_3": {
        "text": "Anais haelt mehrere Zettel in der Hand. 'Gumball und Darwin haben versucht, ihre Noten zu verbessern und dabei vermutlich das Schulnetzwerk zerstoert.'",
        "choices": [
            { "text": "Anais helfen", "next": "gb_9" },
            { "text": "Ignorieren", "next": "gb_6", "karma": -2 },
            { "text": "Die beiden verraten", "next": "gb_10", "karma": 2 }
        ]
    },

    "gb_4": {
        "text": "Banana Joe rennt lachend ueber den Schulhof. Hinter ihm fliegen hunderte ausgedruckte Zeugnisse durch die Luft.",
        "choices": [
            { "text": "Hinterherrennen", "next": "gb_6" },
            { "text": "Die Zeugnisse einsammeln", "next": "gb_8", "karma": 1 }
        ]
    },

    "gb_5": {
        "text": "Gumball fuehrt dich in den Computerraum. Alle Bildschirme zeigen ploetzlich nur noch dieselbe Nachricht: 'SYSTEM ERROR'.",
        "choices": [
            { "text": "Computer untersuchen", "next": "gb_11", "gain_item": "school_access_card" },
            { "text": "Lieber abhauen", "next": "gb_6", "karma": -1 }
        ]
    },

    "gb_6": {
        "text": "Waehrend ihr diskutiert, faellt ploetzlich in der ganzen Schule der Strom aus. Schueler schreien, Automaten explodieren und irgendwo spielt eine Trompete.",
        "choices": [
            { "text": "Weiter", "next": "gb_12" }
        ]
    },

    "gb_7": {
        "text": "Darwin erklaert alles hektisch. 'Wir wollten nur die Noten kurz ansehen. Dann hat Gumball auf irgendwas geklickt und jetzt funktioniert nichts mehr.'",
        "choices": [
            { "text": "Verstehen", "next": "gb_10", "karma": 2 },
            { "text": "Gumball beschuldigen", "next": "gb_12", "karma": -2 }
        ]
    },

    "gb_8": {
        "text": "In der Schule wiederholt die Lautsprecheranlage staendig dieselbe Durchsage von Principal Brown.",
        "choices": [
            { "text": "Kontrollraum suchen", "next": "gb_11" }
        ]
    },

    "gb_9": {
        "text": "Anais verbindet ihr Tablet mit dem Schulserver. 'Okay. Das Chaos kommt von einem Fehler im Hauptsystem. ueberraschenderweise war Gumball diesmal nicht komplett schuld.'",
        "choices": [
            { "text": "Daten speichern", "next": "gb_13", "gain_item": "anais_backup_drive" }
        ]
    },

    "gb_10": {
        "text": "Gumball versucht den Computer neu zu starten und sorgt versehentlich dafuer, dass ueberall die Feueralarme losgehen.",
        "choices": [
            { "text": "Beim Stoppen helfen", "next": "gb_13", "karma": 2 },
            { "text": "Nur zusehen", "next": "gb_12" }
        ]
    },

    "gb_11": {
        "text": "Im Kontrollraum entdeckt ihr, dass das gesamte Schulnetzwerk in einer Endlosschleife festhaengt.",
        "choices": [
            { "text": "System reparieren", "next": "gb_14" },
            { "text": "Ignorieren", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_12": {
        "text": "Die Schule versinkt komplett im Chaos. Tueren oeffnen sich zufaellig, Lautsprecher rauschen und Larry versucht gleichzeitig zehn Probleme zu loesen.",
        "choices": [
            { "text": "Weiter", "next": "gb_15" }
        ]
    },

    "gb_13": {
        "text": "Darwin gibt dir einen USB-Stick. 'Anais meint, damit koennten wir das System zuruecksetzen.'",
        "choices": [
            { "text": "Nehmen", "next": "gb_15", "gain_item": "reset_drive" }
        ]
    },

    "gb_14": {
        "text": "Das System zeigt ploetzlich hunderte fehlerhafte Dateien mit Namen wie 'Elmore_Final_v2_REAL_final'.",
        "choices": [
            { "text": "Dateien analysieren", "next": "gb_16", "gain_item": "system_logs" },
            { "text": "Einfach loeschen", "next": "gb_16", "karma": 2 }
        ]
    },

    "gb_15": {
        "text": "Gumball lehnt sich erschoepft gegen die Wand. 'Warum endet bei uns eigentlich jeder normale Tag in einer Katastrophe?'",
        "choices": [
            { "text": "Antworten", "next": "gb_17", "karma": 2 },
            { "text": "Schweigen", "next": "gb_17", "karma": -2 }
        ]
    },

    "gb_16": {
        "text": "Anais liest die Systemfehler durch. 'Okay... irgendwas schreibt die Fehler staendig neu. Deshalb kommt alles wieder zurueck.'",
        "choices": [
            { "text": "Zuhoeren", "next": "gb_17", "karma": 2 },
            { "text": "Nicht verstehen", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_17": {
        "text": "Die Bildschirme der Schule beginnen ploetzlich gleichzeitig zu flackern.",
        "choices": [
            { "text": "Weitergehen", "next": "gb_18" }
        ]
    },

    "gb_18": {
        "text": "Banana Joe erscheint auf einem der Bildschirme. 'aeh... warum bin ich ploetzlich im Schulsystem drin?'",
        "choices": [
            { "text": "Mit ihm reden", "next": "gb_19" },
            { "text": "Ignorieren", "next": "gb_19", "karma": -1 }
        ]
    },

    "gb_19": {
        "text": "Der Hauptcomputer der Schule beginnt komplett zu ueberhitzen.",
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
        "text": "Gumball startet das Backup-System. Fuer einen Moment funktioniert ploetzlich wieder alles normal.",
        "choices": [
            { "text": "ueberpruefen", "next": "gb_22", "gain_item": "system_restore_key" },
            { "text": "Abwarten", "next": "gb_22", "karma": -1 }
        ]
    },

    "gb_22": {
        "text": "Anais verschraenkt die Arme. 'Das Problem war nie der Computer. Die Schule selbst hat staendig fehlerhafte Daten produziert.'",
        "choices": [
            { "text": "Glauben", "next": "gb_23", "karma": 2 },
            { "text": "Nicht glauben", "next": "gb_23", "karma": -2 }
        ]
    },

    "gb_23": {
        "text": "Ploetzlich springt der Strom wieder an. Die Schule sieht aus, als waere nie etwas passiert.",
        "choices": [
            { "text": "Weiter", "next": "gb_24" }
        ]
    },

    "gb_24": {
        "text": "Gumball grinst erleichtert. 'Cool. Also haben wir offiziell nur fast die komplette Schule zerstoert.'",
        "choices": [
            { "text": "Lachen", "next": "gb_25", "karma": 1 },
            { "text": "Kopfschuetteln", "next": "gb_25", "karma": -1 }
        ]
    },

    "gb_25": {
        "text": "ueber der Schule oeffnet sich ploetzlich ein seltsamer leuchtender Riss am Himmel.",
        "choices": [
            { "text": "Ansehen", "next": "gb_26" }
        ]
    },

    "gb_26": {
        "text": "Darwin schaut nervoes nach oben. 'Bitte sag mir, das hat nichts mit uns zu tun.'",
        "choices": [
            { "text": "Untersuchen", "next": "gb_27", "required_item": "reset_drive" },
            { "text": "Zoegern", "next": "gb_27", "karma": -1 }
        ]
    },

    "gb_27": {
        "text": "Der Himmel ueber Elmore beginnt zu flackern wie ein kaputter Fernseher.",
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
        "text": "Gumball schaut zwischen dem Himmel und der Schule hin und her. 'Warum habe ich das Gefuehl, dass das erst der Anfang war?'",
        "choices": [
            { "text": "Weiter", "next": "gb_30" }
        ]
    },

    "gb_30": {
        "text": "Der leuchtende Riss stabilisiert sich ueber Elmore und verbindet sich mit etwas weit Groesserem.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_dx_start": {
        "text": "Dexters Labor existiert in mehreren leicht versetzten Versionen gleichzeitig. Monitore flackern zwischen verschiedenen Experimenten, Tueren fuehren nicht immer in denselben Raum und irgendwo laeuft ein Alarm, den niemand ausgeloest hat. Dee Dee taucht staendig an unmoeglichen Orten auf, waehrend Mandark alles mit verdaechtig ruhigem Laecheln beobachtet.",
        "background": "./game_images/background_dx_lab.png",
        "choices": [
            { "text": "Mit Dexter reden", "next": "dx_dexter", "karma": 1 },
            { "text": "Mit Mandark reden", "next": "dx_mandark", "karma": -1 },
            { "text": "Das Labor untersuchen", "next": "dx_3" },
            { "text": "Dee Dee folgen", "next": "dx_deedee", "karma": 2 }
        ]
    },

    "dx_dexter": {
        "text": "Dexter haemmert hektisch auf seine Tastatur ein. 'Nein, nein, nein! Diese Simulation sollte stabil sein! Du gehoerst definitiv nicht in diese Iteration!'",
        "background": "./game_images/background_dx_controlroom.png",
        "character": "./game_images/character_dx_dexter.png",
        "choices": [
            { "text": "Nachfragen", "next": "dx_5" },
            { "text": "Beruhigen", "next": "dx_6" },
            { "text": "Beweise verlangen", "next": "dx_7", "karma": 1 },
            { "text": "Zurueck zum Labor", "next": "c1_dx_start" }
        ]
    },

    "dx_mandark": {
        "text": "Mandark verschraenkt die Arme. 'Dexter versteht nur lineare Wissenschaft. Aber Realitaet ist chaotisch… rekursiv… wunderschoen instabil.'",
        "background": "./game_images/background_dx_darklab.png",
        "character": "./game_images/character_dx_mandark.png",
        "choices": [
            { "text": "Zuhoeren", "next": "dx_7", "karma": 1 },
            { "text": "Ihm misstrauen", "next": "dx_6", "karma": -2 },
            { "text": "Zurueck zum Labor", "next": "c1_dx_start" }
        ]
    },

    "dx_deedee": {
        "text": "Dee Dee tanzt zwischen Maschinen hindurch, ohne die flackernden Warnungen zu beachten. 'Ooooh! Dieses Labor macht heute lustige Geraeusche!'",
        "background": "./game_images/background_dx_hallway.png",
        "character": "./game_images/character_dx_deedee.png",
        "choices": [
            { "text": "Fragen was sie sieht", "next": "dx_10" },
            { "text": "Ihr folgen", "next": "dx_8", "karma": 1 },
            { "text": "Zurueck zum Labor", "next": "c1_dx_start" }
        ]
    },

    "dx_3": {
        "text": "Du findest eine Datei namens REALITY_PATCH_LOG. Sie wurde hunderte Male ueberschrieben.",
        "background": "./game_images/background_dx_terminal.png",
        "choices": [
            { "text": "Datei analysieren", "next": "dx_9", "gain_item": "reality_log" },
            { "text": "Terminal schliessen", "next": "dx_6", "karma": -1 }
        ]
    },

    "dx_5": {
        "text": "Dexter zeigt dir mehrere Monitore. Auf jedem laeuft eine leicht andere Version des Labors — und in jedem stehst du an anderer Stelle.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_11" },
            { "text": "Abwenden", "next": "dx_6", "karma": -1 }
        ]
    },

    "dx_6": {
        "text": "Das Labor beginnt sich selbst neu zu kompilieren. Waende verschieben sich und Maschinen erscheinen doppelt.",
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
        "text": "Dee Dee dreht sich lachend im Kreis. Dabei veraendern sich die Korridore des Labors um sie herum.",
        "choices": [
            { "text": "Weiter folgen", "next": "dx_13" },
            { "text": "Zurueckziehen", "next": "dx_12", "karma": -1 }
        ]
    },

    "dx_9": {
        "text": "Die Datei zeigt, dass Dexter die Realitaet des Labors mehrfach zurueckgesetzt hat.",
        "choices": [
            { "text": "Speichern", "next": "dx_13", "gain_item": "patch_core" }
        ]
    },

    "dx_10": {
        "text": "Dee Dee schaut ploetzlich ernst. 'Manchmal erinnert sich das Labor an Sachen, die noch gar nicht passiert sind.'",
        "choices": [
            { "text": "Zuhoeren", "next": "dx_14", "karma": 2 },
            { "text": "Nicht ernst nehmen", "next": "dx_12", "karma": -2 }
        ]
    },

    "dx_11": {
        "text": "Du siehst unzaehlige Dexter-Versionen. Manche arbeiten friedlich. Andere beobachten dich direkt.",
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
        "text": "Dee Dee beruehrt eine instabile Maschine — ploetzlich stabilisiert sie sich.",
        "choices": [
            { "text": "Naeher beobachten", "next": "dx_16" },
            { "text": "Weitergehen", "next": "dx_15" }
        ]
    },

    "dx_14": {
        "text": "Mandark deutet auf die Decke des Labors. 'Dieses Labor ist nur ein Layer in einer viel groesseren Struktur.'",
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
        "text": "Dexter starrt auf seine Scanner. 'Das ist unmoeglich… Dee Dee stabilisiert die Realitaet einfach durch ihre Anwesenheit.'",
        "choices": [
            { "text": "Speichern", "next": "dx_17", "gain_item": "stability_anchor" }
        ]
    },

    "dx_17": {
        "text": "Dexter wirkt ungewoehnlich nervoes. 'Wenn Dee Dee verschwindet, koennte das ganze Labor kollabieren.'",
        "choices": [
            { "text": "Dee Dee schuetzen", "next": "dx_18", "karma": 2 },
            { "text": "Ignorieren", "next": "dx_18", "karma": -2 }
        ]
    },

    "dx_18": {
        "text": "Unter dem Labor oeffnet sich ein flackernder Realitaetsriss.",
        "choices": [
            { "text": "Untersuchen", "next": "dx_19" }
        ]
    },

    "dx_19": {
        "text": "Im Riss erscheinen mehrere Versionen des Labors gleichzeitig.",
        "choices": [
            { "text": "Analysieren", "next": "dx_20", "gain_item": "lab_rift_data" },
            { "text": "Beruehren", "next": "dx_20", "karma": 2 }
        ]
    },

    "dx_20": {
        "text": "Mandark laechelt zufrieden. 'Dexter hat das System so oft neu geschrieben, dass es sich jetzt selbst ueberschreibt.'",
        "choices": [
            { "text": "Zuhoeren", "next": "dx_21", "karma": 2 },
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
        "text": "Du siehst unzaehlige moegliche Versionen des Labors entstehen und verschwinden.",
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
        "text": "Mandark oeffnet einen stabilen Riss unter dem Labor.",
        "choices": [
            { "text": "Durchgehen", "next": "dx_26", "required_item": "lab_rift_data" },
            { "text": "Zoegern", "next": "dx_26" }
        ]
    },

    "dx_26": {
        "text": "Das Labor beginnt sich vollstaendig zu ueberschreiben.",
        "choices": [
            { "text": "Weiter", "next": "dx_27" }
        ]
    },

    "dx_27": {
        "text": "Dee Dee stabilisiert fuer einen kurzen Moment das gesamte Labor.",
        "choices": [
            { "text": "Vertrauen", "next": "dx_28", "karma": 2 },
            { "text": "Misstrauen", "next": "dx_28", "karma": -2 }
        ]
    },

    "dx_28": {
        "text": "Dexter blickt auf die flackernden Monitore. 'Etwas ausserhalb unseres Systems greift ein.'",
        "choices": [
            { "text": "Verstehen", "next": "dx_29", "karma": 2 },
            { "text": "Zweifeln", "next": "dx_29", "karma": -2 }
        ]
    },

    "dx_29": {
        "text": "Alle Versionen des Labors ueberlagern sich vollstaendig.",
        "choices": [
            { "text": "Weiter", "next": "dx_30" }
        ]
    },

    "dx_30": {
        "text": "Dexters Labor kollabiert in den Nexus und oeffnet die Verbindung zu allen Realitaeten. Kapitel 2 wird vorbereitet.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_ppg_start": {
        "text": "Townsville hat einen dieser Tage, an denen alles leicht daneben wirkt – Ampeln schalten zu spaet, der Himmel flackert kurz und Professor Utoniums Labor klingt, als wuerde etwas darin nicht richtig schliessen.",
        "choices": [
            { "text": "Blossom helfen", "next": "ppg_1", "karma": 1 },
            { "text": "Bubbles begleiten", "next": "ppg_2", "karma": 2 },
            { "text": "Buttercup folgen", "next": "ppg_3", "karma": -1 },
            { "text": "Professor Utonium suchen", "next": "ppg_4" }
        ]
    },

    "ppg_5": {
        "text": "Blossom zeigt dir Messdaten aus dem Labor. Chemical X verhaelt sich unberechenbar, als wuerde es auf etwas reagieren, das ausserhalb von Townsville liegt.",
        "choices": [
            { "text": "Daten sichern", "next": "ppg_9", "gain_item": "chemical_x_data" },
            { "text": "Zurueckgehen", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_8": {
        "text": "Am Himmel ueber Townsville entstehen kurze gruene Stoerungen, die sofort wieder verschwinden.",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_12" },
            { "text": "Ignorieren", "next": "ppg_10", "karma": -1 }
        ]
    },

    "ppg_11": {
        "text": "Professor Utonium erkennt ein Muster in den Daten. 'Chemical X verbindet sich mit etwas anderem... aber ich weiss nicht womit.'",
        "choices": [
            { "text": "Verstehen", "next": "ppg_13", "karma": 2 },
            { "text": "Zweifeln", "next": "ppg_12", "karma": -1 }
        ]
    },

    "ppg_12": {
        "text": "Der Energieriss ueber Townsville wird stabiler und beginnt sichtbar zu bleiben.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_14", "gain_item": "townsville_rift" },
            { "text": "Beruehren", "next": "ppg_13", "karma": 2 }
        ]
    },

    "ppg_13": {
        "text": "Buttercup verliert kurz die Kontrolle ueber ihre Kraefte und schlaegt versehentlich einen Teil der Stadtstruktur weg.",
        "choices": [
            { "text": "Helfen stabilisieren", "next": "ppg_15", "karma": 2 },
            { "text": "Zusehen", "next": "ppg_14" }
        ]
    },

    "ppg_15": {
        "text": "Bubbles gibt dir ein kleines emotionales Stabilitaetsfragment. 'Das hilft manchmal, wenn alles zu chaotisch wird.'",
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
        "text": "Mojo Jojo zeigt auf den Energieriss unter dem Labor. 'Ich habe ihn nicht verursacht... aber ich kann ihn oeffnen.'",
        "choices": [
            { "text": "Untersuchen", "next": "ppg_23" }
        ]
    },

    "ppg_23": {
        "text": "Der Riss pulsiert stark unter dem Labor. Dahinter scheint die Energie von Chemical X gesammelt zu werden.",
        "choices": [
            { "text": "Analysieren", "next": "ppg_24", "gain_item": "chemical_rift_key" },
            { "text": "Beruehren", "next": "ppg_24", "karma": 2 }
        ]
    },

    "ppg_28": {
        "text": "Mojo Jojo aktiviert einen instabilen Zugang zum Energieriss unter Townsville.",
        "choices": [
            { "text": "Durchgehen", "next": "ppg_29", "required_item": "chemical_rift_key" },
            { "text": "Zoegern", "next": "ppg_29" }
        ]
    },

    "ppg_30": {
        "text": "Der Energieriss stabilisiert sich und verbindet Townsville mit etwas Groesserem ausserhalb der Realitaet.",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_gf_start": {
        "text": "Gravity Falls fuehlt sich heute falsch an – als haette jemand die Realitaet leicht verschoben. Schilder wiederholen sich, der Wald wirkt tiefer als sonst, und das Mystery Shack knarzt, obwohl kein Wind geht. Dipper haelt das Journal fest. 'Das passiert normalerweise nur, wenn etwas das Muster stoert.'",
        "choices": [
            { "text": "Dipper folgen", "next": "gf_1", "karma": 1 },
            { "text": "Mabel helfen", "next": "gf_2", "karma": 2 },
            { "text": "Mystery Shack untersuchen", "next": "gf_3" }
        ]
    },

    "gf_1": {
        "text": "Dipper schlaegt das Journal auf. Mehrere Seiten ueber 'anormale Risse in der Realitaet' wurden teilweise geloescht.",
        "choices": [
            { "text": "Seiten suchen", "next": "gf_4", "gain_item": "journal_page" },
            { "text": "Ignorieren", "next": "gf_5", "karma": -1 }
        ]
    },

    "gf_2": {
        "text": "Mabel zeigt dir einen Pullover, der ploetzlich Symbole zeigt, die vorher nicht da waren. 'Das ist irgendwie gruselig, aber auch irgendwie cool?'",
        "choices": [
            { "text": "Untersuchen", "next": "gf_4", "karma": 2 },
            { "text": "Ablehnen", "next": "gf_5" }
        ]
    },

    "gf_3": {
        "text": "Im Keller des Shack findest du Ford’s alte Geraete. Eines davon laeuft noch… obwohl es eigentlich ausgeschaltet sein sollte.",
        "choices": [
            { "text": "Geraet aktivieren", "next": "gf_6", "gain_item": "machine_core" },
            { "text": "Finger weg", "next": "gf_5" }
        ]
    },

    "gf_4": {
        "text": "Dipper zeigt auf den Wald. Alte Warnsymbole tauchen in den Baeumen auf – sie scheinen frisch eingebrannt.",
        "choices": [
            { "text": "Symbole analysieren", "next": "gf_7", "karma": 2 },
            { "text": "Ignorieren", "next": "gf_8", "karma": -1 }
        ]
    },

    "gf_5": {
        "text": "Fuer einen Moment wird alles still. Selbst der Wind stoppt. Dann ist es wieder normal – zu normal.",
        "choices": [
            { "text": "Weiter", "next": "gf_8" }
        ]
    },

    "gf_6": {
        "text": "Das Geraet aktiviert sich und spielt eine Nachricht von Ford ab: 'Wenn das hier laeuft, hat Bill wieder begonnen, durch Traeume zu greifen.'",
        "choices": [
            { "text": "Nachricht anhoeren", "next": "gf_7", "karma": 1 },
            { "text": "Ausschalten", "next": "gf_8" }
        ]
    },

    "gf_7": {
        "text": "Ford erscheint kurz ueber das Geraet. 'Bill Cipher beeinflusst wieder die Traumebene. Und er nutzt Gravity Falls als Zugang.'",
        "choices": [
            { "text": "Glauben", "next": "gf_9", "karma": 2 },
            { "text": "Zweifeln", "next": "gf_10", "karma": -2 }
        ]
    },

    "gf_8": {
        "text": "Wendy warnt dich im Wald. 'Da draussen sind Dinge, die sich falsch anfuehlen. Und ich meine nicht normal falsch.'",
        "choices": [
            { "text": "Mit Wendy gehen", "next": "gf_9" },
            { "text": "Alleine gehen", "next": "gf_10", "karma": -1 }
        ]
    },

    "gf_9": {
        "text": "Zwischen den Baeumen siehst du ein pulsierendes Auge im Holz eines alten Baumes.",
        "choices": [
            { "text": "Untersuchen", "next": "gf_11", "gain_item": "cipher_eye" },
            { "text": "Zerstoeren", "next": "gf_12", "karma": 1 }
        ]
    },

    "gf_10": {
        "text": "Gideon taucht ploetzlich auf. 'Du bist genau da, wo du sein sollst.'",
        "choices": [
            { "text": "Gideon konfrontieren", "next": "gf_12", "karma": -2 },
            { "text": "Fragen stellen", "next": "gf_11" }
        ]
    },

    "gf_11": {
        "text": "Das Auge reagiert auf das Journalfragment und oeffnet eine kleine Verzerrung in der Luft.",
        "choices": [
            { "text": "Kombinieren", "next": "gf_13", "required_item": "journal_page" },
            { "text": "Nicht riskieren", "next": "gf_14" }
        ]
    },

    "gf_12": {
        "text": "Der Wald beginnt sich leicht zu falten, als wuerde er dieselbe Szene erneut abspielen.",
        "choices": [
            { "text": "Weiterlaufen", "next": "gf_14" }
        ]
    },

    "gf_13": {
        "text": "Ein versteckter Pfad oeffnet sich. Die Realitaet wirkt dahinter instabil.",
        "choices": [
            { "text": "Betreten", "next": "gf_15", "karma": 2 },
            { "text": "Warten", "next": "gf_14" }
        ]
    },

    "gf_14": {
        "text": "Mabel findet einen Kristall, der leise pulsiert, wenn sie ihn beruehrt.",
        "choices": [
            { "text": "Kristall nehmen", "next": "gf_15", "gain_item": "rift_crystal" },
            { "text": "Lassen", "next": "gf_15" }
        ]
    },

    "gf_15": {
        "text": "Ford erklaert erneut: 'Bill greift durch Traeume an. Wir muessen ihn dort treffen.'",
        "choices": [
            { "text": "Traummaschine aktivieren", "next": "gf_16", "required_item": "machine_core" },
            { "text": "Ablehnen", "next": "gf_17", "karma": -1 }
        ]
    },

    "gf_16": {
        "text": "Du betrittst eine Traumwelt voller schwebender Symbole und verzerrter Realitaet.",
        "choices": [
            { "text": "Symbol beruehren", "next": "gf_18", "karma": 1 },
            { "text": "Abstand halten", "next": "gf_17" }
        ]
    },

    "gf_17": {
        "text": "Eine Stimme fluestert: 'Ich sehe dich, Dipper Pines…'",
        "choices": [
            { "text": "Antworten", "next": "gf_18", "karma": -1 },
            { "text": "Ignorieren", "next": "gf_19", "karma": 1 }
        ]
    },

    "gf_18": {
        "text": "Bill Cipher erscheint laechelnd im Traumraum. 'Endlich treffen wir uns richtig.'",
        "choices": [
            { "text": "Mit Bill reden", "next": "gf_20", "karma": -2 },
            { "text": "Ford warnen", "next": "gf_19", "karma": 2 }
        ]
    },

    "gf_19": {
        "text": "Ford aktiviert Schutzrunen im Shack. Die Realitaet beginnt sich kurz zu stabilisieren.",
        "choices": [
            { "text": "Runen verstaerken", "next": "gf_21", "required_item": "rift_crystal" },
            { "text": "Nur beobachten", "next": "gf_21" }
        ]
    },

    "gf_20": {
        "text": "Bill bietet dir Kontrolle ueber alle Realitaeten an. 'Stell dir vor, du koenntest alles schreiben.'",
        "choices": [
            { "text": "Annehmen", "next": "gf_22", "karma": -5 },
            { "text": "Ablehnen", "next": "gf_21", "karma": 3 }
        ]
    },

    "gf_21": {
        "text": "Soos bringt eine Kiste voller alter Ford-Artefakte. 'Ich hab einfach alles gesammelt, was gefaehrlich aussah!'",
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
        "text": "Der Himmel ueber Gravity Falls reisst auf und zeigt den Nexus dahinter.",
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
        "text": "Ford sagt ernst: 'Nur jemand ausserhalb dieses Systems kann es wirklich schliessen.'",
        "choices": [
            { "text": "Helfen", "next": "gf_27", "karma": 2 },
            { "text": "Ablehnen", "next": "gf_27", "karma": -2 }
        ]
    },

    "gf_27": {
        "text": "Bill uebernimmt kurz Gideons Koerper und verzerrt die Realitaet um ihn herum.",
        "choices": [
            { "text": "Angreifen", "next": "gf_28", "required_item": "gravity_orb" },
            { "text": "Zurueckweichen", "next": "gf_29", "karma": -1 }
        ]
    },

    "gf_28": {
        "text": "Das Gravity Orb stoesst Bill aus dem Koerper und schwaecht ihn.",
        "choices": [
            { "text": "Versiegeln", "next": "gf_30", "required_item": "mystery_key" },
            { "text": "Entkommen lassen", "next": "gf_29", "karma": -5 }
        ]
    },

    "gf_29": {
        "text": "Die Realitaet beginnt zu kollabieren, aber Ford oeffnet einen letzten stabilen Ausgang.",
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
        "text": "Der Nexus oeffnet sich vollstaendig. Die fuenf ersten Welten verschwinden hinter dir, doch neue Signale erscheinen sofort. Einige Dimensionen kollidieren bereits miteinander. Stimmen, Erinnerungen und ganze Orte werden vermischt. Eine unbekannte Entitaet beobachtet jede deiner Entscheidungen.",
        "choices": [
            { "text": "Teen Titans", "next": "c2_tt_start" },
            { "text": "Ben 10", "next": "c2_b10_start" },
            { "text": "Samurai Jack", "next": "c2_sj_start" },
            { "text": "Regular Show", "next": "c2_rs_start" },
            { "text": "Ninjago", "next": "c2_nj_start" }
        ]
    },

    "c2_tt_start": {
        "text": "Im Titans Tower herrscht ungewohnte Stille. Kein Training, keine Streitereien – nur die leisen Alarme der ueberwachungssysteme. Robin ueberprueft Protokolle, waehrend Raven sich sofort an den Kopf fasst. 'Etwas drueckt gegen diese Realitaet... aber es ist subtil.'",
        "choices": [
            { "text": "Robin helfen", "next": "tt_1", "karma": 2 },
            { "text": "Raven folgen", "next": "tt_2", "karma": 2 },
            { "text": "Tower-Systeme pruefen", "next": "tt_3" }
        ]
    },

    "tt_1": {
        "text": "Robin zeigt dir Sicherheitsaufnahmen. Mehrere Systeme wurden manipuliert – aber ohne sichtbaren Eindringling. 'Das ist kein normaler Angriff. Das ist gezielt.'",
        "choices": [
            { "text": "Spur verfolgen", "next": "tt_4", "karma": 1 },
            { "text": "Tower sichern", "next": "tt_5", "karma": 2 }
        ]
    },

    "tt_2": {
        "text": "Raven spuert eine dunkle, vertraute Energie im unteren Bereich des Towers. Sie wirkt unruhig. 'Das ist nicht nur jemand... das ist etwas aelteres.'",
        "choices": [
            { "text": "Mit Raven gehen", "next": "tt_6", "karma": 2 },
            { "text": "Team warnen", "next": "tt_5" }
        ]
    },

    "tt_3": {
        "text": "Im Trainingsbereich findest du beschaedigte Ausruestung. Es sieht aus, als haette jemand gezielt nur die Schwachstellen sabotiert.",
        "choices": [
            { "text": "Untersuchen", "next": "tt_5", "karma": 2 },
            { "text": "Weitergehen", "next": "tt_4", "karma": -1 }
        ]
    },

    "tt_4": {
        "text": "Robin entdeckt eine verschluesselte Nachricht im System. Sie stammt von Deathstroke – aber sie ist aelter als sein aktueller Aufenthaltsort.",
        "choices": [
            { "text": "Codes entschluesseln", "next": "tt_7", "gain_item": "deathstroke_codes" },
            { "text": "Robin informieren", "next": "tt_5" }
        ]
    },

    "tt_5": {
        "text": "Cyborg meldet Ausfaelle im Tower-System. Energiefluktuationen breiten sich aus, ohne klare Quelle.",
        "choices": [
            { "text": "Cyborg helfen", "next": "tt_8", "karma": 2 },
            { "text": "Beast Boy suchen", "next": "tt_9" }
        ]
    },

    "tt_6": {
        "text": "Im Keller des Towers verdichtet sich die dunkle Energie. Raven bleibt stehen. 'Das ist kein Portal... es ist eine Verbindung.'",
        "choices": [
            { "text": "Portal versiegeln", "next": "tt_10", "required_item": "deathstroke_codes" },
            { "text": "Untersuchen", "next": "tt_11", "karma": -1 }
        ]
    },

    "tt_7": {
        "text": "Die entschluesselten Daten zeigen geplante Angriffe auf mehrere Staedte. Aber einige Signaturen sind nicht menschlich.",
        "choices": [
            { "text": "Staedte warnen", "next": "tt_12", "karma": 3 },
            { "text": "Nur Titans informieren", "next": "tt_8" }
        ]
    },

    "tt_8": {
        "text": "Cyborg stabilisiert die Energieversorgung teilweise. 'Jemand versucht, unsere Systeme gegen uns zu verwenden.'",
        "choices": [
            { "text": "Energiekern nehmen", "next": "tt_13", "gain_item": "tower_core" },
            { "text": "Ablehnen", "next": "tt_13" }
        ]
    },

    "tt_9": {
        "text": "Beast Boy berichtet von Schattenbewegungen im unteren Stockwerk. Keine klaren Formen.",
        "choices": [
            { "text": "Nachsehen", "next": "tt_13", "karma": 3 },
            { "text": "Verfolgen", "next": "tt_14", "karma": -1 }
        ]
    },

    "tt_10": {
        "text": "Das Portal reagiert auf Raven. Stimmen fluestern aus der anderen Seite – aber keine klare Identitaet.",
        "choices": [
            { "text": "Versiegeln", "next": "tt_15", "karma": 2 },
            { "text": "Kontakt halten", "next": "tt_14", "karma": -2 }
        ]
    },

    "tt_11": {
        "text": "Ein Schattenwesen bricht kurz durch das Portal und verschwindet wieder. Raven wird blass.",
        "choices": [
            { "text": "Raven schuetzen", "next": "tt_15", "karma": 3 },
            { "text": "Zurueckweichen", "next": "tt_14", "karma": -2 }
        ]
    },

    "tt_12": {
        "text": "Jump City beginnt Sicherheitsmassnahmen zu aktivieren. Die Situation eskaliert langsam in der oeffentlichkeit.",
        "choices": [
            { "text": "Zivilisten helfen", "next": "tt_16", "karma": 4 },
            { "text": "Deathstroke verfolgen", "next": "tt_17", "karma": -1 }
        ]
    },

    "tt_13": {
        "text": "Starfire empfaengt ein fremdes Signal aus dem Orbit. Es ist nicht Tamaranean.",
        "choices": [
            { "text": "Untersuchen mit Starfire", "next": "tt_16", "karma": 2 },
            { "text": "Im Tower bleiben", "next": "tt_17" }
        ]
    },

    "tt_14": {
        "text": "Die Energie im Tower faellt teilweise aus. Notstrom aktiviert sich automatisch.",
        "choices": [
            { "text": "System stabilisieren", "next": "tt_18", "required_item": "tower_core" },
            { "text": "Ignorieren", "next": "tt_17", "karma": -2 }
        ]
    },

    "tt_15": {
        "text": "Raven erschafft ein Siegel. 'Das wird ihn nicht stoppen... aber verlangsamen.'",
        "choices": [
            { "text": "Siegel nehmen", "next": "tt_16", "gain_item": "raven_seal" }
        ]
    },

    "tt_16": {
        "text": "Blackfire erscheint ueber Jump City. Keine Invasion – eine gezielte militaerische Operation.",
        "choices": [
            { "text": "Stadt verteidigen", "next": "tt_19", "karma": 3 },
            { "text": "Blackfire angreifen", "next": "tt_20", "karma": 1 }
        ]
    },

    "tt_17": {
        "text": "Deathstroke lockt Robin in eine isolierte Situation ausserhalb des Towers.",
        "choices": [
            { "text": "Robin retten", "next": "tt_21", "karma": 3 },
            { "text": "Spur verfolgen", "next": "tt_20", "karma": -1 }
        ]
    },

    "tt_18": {
        "text": "Die Stromversorgung stabilisiert sich. Doch die Systeme zeigen weiterhin Fremdzugriffe.",
        "choices": [
            { "text": "Zurueck zur Mission", "next": "tt_19", "karma": 2 }
        ]
    },

    "tt_19": {
        "text": "Die Titans koordinieren die Verteidigung gegen Blackfires Kraefte in der Stadt.",
        "choices": [
            { "text": "Zivilisten schuetzen", "next": "tt_22", "karma": 4 },
            { "text": "Direkter Kampf", "next": "tt_23", "karma": 1 }
        ]
    },

    "tt_20": {
        "text": "Deathstroke aktiviert eine versteckte Zerstoerungssequenz im Tower-System.",
        "choices": [
            { "text": "System stoppen", "next": "tt_24", "required_item": "deathstroke_codes" },
            { "text": "Angreifen", "next": "tt_25", "karma": -1 }
        ]
    },

    "tt_21": {
        "text": "Robin ist angeschlagen, aber bewusst. 'Er wollte uns nicht nur schlagen... er wollte uns testen.'",
        "choices": [
            { "text": "Helfen", "next": "tt_22", "karma": 3 },
            { "text": "Weiterkaempfen", "next": "tt_23" }
        ]
    },

    "tt_22": {
        "text": "Raven reagiert ploetzlich auf eine zweite, staerkere dunkle Praesenz ausserhalb der Dimension.",
        "choices": [
            { "text": "Ihr vertrauen", "next": "tt_26", "karma": 2 },
            { "text": "Ignorieren", "next": "tt_23", "karma": -2 }
        ]
    },

    "tt_23": {
        "text": "Blackfire setzt gezielten Angriff auf Starfire. Kein Chaos – strategisch.",
        "choices": [
            { "text": "Starfire schuetzen", "next": "tt_27", "karma": 3 },
            { "text": "Gegenangriff", "next": "tt_25", "karma": -2 }
        ]
    },

    "tt_24": {
        "text": "Die Zerstoerungssequenz wird gestoppt. Der Tower bleibt funktionsfaehig.",
        "choices": [
            { "text": "Zurueckkehren", "next": "tt_27", "karma": 3 }
        ]
    },

    "tt_25": {
        "text": "Deathstroke entkommt ueber ein vorbereitetes Fluchtportal.",
        "choices": [
            { "text": "Verfolgen", "next": "tt_28", "karma": -1 },
            { "text": "Zurueck zu Titans", "next": "tt_27", "karma": 2 }
        ]
    },

    "tt_26": {
        "text": "Raven neutralisiert Teile der dunklen Energie. 'Das ist groesser als wir dachten.'",
        "choices": [
            { "text": "Siegel aktivieren", "next": "tt_29", "required_item": "raven_seal" },
            { "text": "Zoegern", "next": "tt_28", "karma": -2 }
        ]
    },

    "tt_27": {
        "text": "Die Titans formieren sich fuer den finalen Kampf gegen Blackfire.",
        "choices": [
            { "text": "Unterstuetzen", "next": "tt_29", "karma": 2 },
            { "text": "Evakuierung helfen", "next": "tt_29", "karma": 4 }
        ]
    },

    "tt_28": {
        "text": "Die Situation in Jump City stabilisiert sich nicht vollstaendig – etwas bleibt im Hintergrund aktiv.",
        "choices": [
            { "text": "Letzte Verteidigung", "next": "tt_29" }
        ]
    },

    "tt_29": {
        "text": "Blackfire wird zurueckgedraengt. Doch Raven spuert weiterhin eine groessere dunkle Instanz ausserhalb dieser Realitaet.",
        "choices": [
            { "text": "Nexus untersuchen", "next": "tt_30", "karma": 2 }
        ]
    },

    "tt_30": {
        "text": "Der Himmel reisst kurz auf. Fuer einen Moment spuert jeder Titan eine Verbindung zu anderen Realitaeten – und etwas dahinter beobachtet sie.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_b10_start": {
        "text": "Bellwood steht unter Alarm. Mehrere Stadtteile verlieren gleichzeitig Strom, und die Strassen sind ungewoehnlich leer. Ben ist bereits im Einsatz – er kaempft gegen mutierte Drohnen, die eindeutig nicht von ihm stammen.",
        "choices": [
            { "text": "Ben unterstuetzen", "next": "b10_1", "karma": 2 },
            { "text": "Ursache der Ausfaelle untersuchen", "next": "b10_2" },
            { "text": "Drohnen verfolgen", "next": "b10_3", "karma": -1 }
        ]
    },

    "b10_1": {
        "text": "Ben: 'Das sind Animos Designs! Aber die reagieren auf Omnitrix-Signale!'",
        "choices": [
            { "text": "Mitkaempfen", "next": "b10_4", "gain_item": "alien_core" },
            { "text": "Zivilisten sichern", "next": "b10_5", "karma": 2 }
        ]
    },

    "b10_2": {
        "text": "Du findest beschaedigte Strassen und Tiere, die leicht mutiert wirken. Etwas veraendert hier biologische Strukturen.",
        "choices": [
            { "text": "Verletzte retten", "next": "b10_5", "karma": 1 },
            { "text": "Weiter untersuchen", "next": "b10_6", "karma": -1 }
        ]
    },

    "b10_3": {
        "text": "Die Drohnen fuehren dich zu einem versteckten Labor unter der Stadt.",
        "choices": [
            { "text": "Eindringen", "next": "b10_7" },
            { "text": "Ben warnen", "next": "b10_4", "karma": 1 }
        ]
    },

    "b10_4": {
        "text": "Ben verwandelt sich in Inferno und zerstoert mehrere Drohnen. 'Die greifen das Omnitrix direkt an!'",
        "choices": [
            { "text": "Weiter kaempfen", "next": "b10_8", "karma": 2 },
            { "text": "Omnitrix analysieren", "next": "b10_9" }
        ]
    },

    "b10_5": {
        "text": "Du rettest mehrere Bewohner. Gwen erscheint durch ein Portal und stabilisiert kurz die Umgebung.",
        "choices": [
            { "text": "Mit Gwen koordinieren", "next": "b10_8", "gain_item": "mana_crystal" },
            { "text": "Alleine weitermachen", "next": "b10_6" }
        ]
    },

    "b10_6": {
        "text": "Eine stark mutierte Kreatur greift an – halb Tier, halb technisches Experiment.",
        "choices": [
            { "text": "Kaempfen", "next": "b10_10", "karma": 1 },
            { "text": "Fliehen", "next": "b10_11", "karma": -2 }
        ]
    },

    "b10_7": {
        "text": "Dr. Animo arbeitet an einem Generator, der biologische Energie aus der Stadt zieht.",
        "choices": [
            { "text": "Maschine sabotieren", "next": "b10_12", "required_item": "alien_core" },
            { "text": "Beobachten", "next": "b10_11" }
        ]
    },

    "b10_8": {
        "text": "Ben: 'Das Omnitrix reagiert komisch… als wuerde jemand es fernsteuern wollen.'",
        "choices": [
            { "text": "Ursache suchen", "next": "b10_13" },
            { "text": "Ignorieren", "next": "b10_10", "karma": -1 }
        ]
    },

    "b10_9": {
        "text": "Das Omnitrix pulsiert unregelmaessig und zeigt fremde DNA-Signaturen.",
        "choices": [
            { "text": "Kontakt herstellen", "next": "b10_14", "karma": 1 },
            { "text": "Zurueckziehen", "next": "b10_10" }
        ]
    },

    "b10_10": {
        "text": "Die Kreatur zerstoert mehrere Gebaeude. Panik bricht in Bellwood aus.",
        "choices": [
            { "text": "Zivilisten retten", "next": "b10_15", "karma": 3 },
            { "text": "Direkt angreifen", "next": "b10_16", "karma": 1 }
        ]
    },

    "b10_11": {
        "text": "Weitere mutierte Kreaturen tauchen in den Strassen auf und breiten sich aus.",
        "choices": [
            { "text": "Kanalisation nutzen", "next": "b10_17" },
            { "text": "Kaempfen", "next": "b10_16" }
        ]
    },

    "b10_12": {
        "text": "Die Maschine ueberlaedt. Dr. Animo wird verletzt, die Energie beginnt zu entweichen.",
        "choices": [
            { "text": "Ihn retten", "next": "b10_18", "karma": 2 },
            { "text": "Maschine abschalten", "next": "b10_19", "karma": -2 }
        ]
    },

    "b10_13": {
        "text": "Das Omnitrix zeigt eine unbekannte Alien-DNA – sie gehoert nicht zur bekannten Datenbank.",
        "choices": [
            { "text": "Speichern", "next": "b10_14", "gain_item": "unknown_dna" },
            { "text": "Ignorieren", "next": "b10_15" }
        ]
    },

    "b10_14": {
        "text": "Azmuth erscheint holografisch: 'Jemand manipuliert die DNA-Struktur aller Lebewesen.'",
        "choices": [
            { "text": "Helfen", "next": "b10_20", "karma": 2 },
            { "text": "Ablehnen", "next": "b10_16", "karma": -2 }
        ]
    },

    "b10_15": {
        "text": "Evakuierung beginnt. Bellwood steht unter massivem Druck durch die Mutationen.",
        "choices": [
            { "text": "Menschen retten", "next": "b10_21", "karma": 3 },
            { "text": "Ben folgen", "next": "b10_16", "karma": -1 }
        ]
    },

    "b10_16": {
        "text": "Zombozo erscheint im Chaos und ernaehrt sich von der Angst der Menschen.",
        "choices": [
            { "text": "Angreifen", "next": "b10_22" },
            { "text": "Illusionen durchschauen", "next": "b10_23", "required_item": "mana_crystal" }
        ]
    },

    "b10_17": {
        "text": "In der Kanalisation findest du gefangene Menschen, die fuer Experimente genutzt wurden.",
        "choices": [
            { "text": "Befreien", "next": "b10_21", "karma": 3 },
            { "text": "Weitergehen", "next": "b10_22", "karma": -2 }
        ]
    },

    "b10_18": {
        "text": "Dr. Animo: 'Ich wollte die Natur retten… nicht zerstoeren.'",
        "choices": [
            { "text": "Ihm glauben", "next": "b10_24", "karma": 2 },
            { "text": "Zweifeln", "next": "b10_19", "karma": -1 }
        ]
    },

    "b10_19": {
        "text": "Die Maschine zieht die restliche Energie in sich selbst zurueck.",
        "choices": [
            { "text": "Zerstoeren", "next": "b10_24" },
            { "text": "Analysieren", "next": "b10_20" }
        ]
    },

    "b10_20": {
        "text": "Azmuth: 'Etwas ausserhalb dieses Universums veraendert alle DNA gleichzeitig.'",
        "choices": [
            { "text": "Helfen", "next": "b10_25", "karma": 2 },
            { "text": "Ablehnen", "next": "b10_22", "karma": -2 }
        ]
    },

    "b10_21": {
        "text": "Die Bevoelkerung beginnt sich zu stabilisieren. Bellwood beruhigt sich langsam.",
        "choices": [
            { "text": "Weiter", "next": "b10_25" }
        ]
    },

    "b10_22": {
        "text": "Zombozo verstaerkt seine Illusionen und greift die Angst der Stadt direkt an.",
        "choices": [
            { "text": "Direkt angreifen", "next": "b10_26" },
            { "text": "Quelle deaktivieren", "next": "b10_27", "required_item": "unknown_dna" }
        ]
    },

    "b10_23": {
        "text": "Der Mana-Kristall laesst dich Zombozos Illusionen klar erkennen.",
        "choices": [
            { "text": "Konfrontieren", "next": "b10_26", "karma": 2 },
            { "text": "Ben warnen", "next": "b10_25" }
        ]
    },

    "b10_24": {
        "text": "Die mutierten Kreaturen stabilisieren sich kurzzeitig und verlieren Kontrolle.",
        "choices": [
            { "text": "Helfen", "next": "b10_28", "karma": 3 },
            { "text": "Besiegen", "next": "b10_26", "karma": -1 }
        ]
    },

    "b10_25": {
        "text": "Ben gibt dir einen Proto-Omnitrix Splitter zur Stabilisierung.",
        "choices": [
            { "text": "Nehmen", "next": "b10_28", "gain_item": "proto_omnitrix" }
        ]
    },

    "b10_26": {
        "text": "Bellwood stabilisiert sich langsam, aber die Energie bleibt instabil.",
        "choices": [
            { "text": "Weiter", "next": "b10_29" }
        ]
    },

    "b10_27": {
        "text": "Die Angstquelle wird deaktiviert. Zombozo verliert seine Kraft und verschwindet.",
        "choices": [
            { "text": "Ben helfen", "next": "b10_28", "karma": 2 }
        ]
    },

    "b10_28": {
        "text": "Ben: 'Das war nur ein Teil von etwas Groesserem… ich spuere es.'",
        "choices": [
            { "text": "Bereit machen", "next": "b10_30" }
        ]
    },

    "b10_29": {
        "text": "Ein Riss im Himmel oeffnet sich ueber Bellwood.",
        "choices": [
            { "text": "Hingehen", "next": "b10_30" }
        ]
    },

    "b10_30": {
        "text": "Die Realitaet destabilisiert sich erneut. Der uebergang zu Kapitel 3 wird aktiv.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_sj_start": {
        "text": "Du landest in einer verbrannten Zukunft. Der Himmel ist rot, die Sonne ist fast verdeckt. Aku herrscht ueber alles, und seine Maschinen patrouillieren die zerstoerten Strassen. Menschen leben versteckt oder sind gefangen genommen worden. Samurai Jack kaempft allein gegen mehrere Roboter, um eine kleine Gruppe Dorfbewohner zu schuetzen.",
        "choices": [
            { "text": "Jack im Kampf unterstuetzen", "next": "sj_1", "karma": 2 },
            { "text": "Die Stadt nach ueberlebenden durchsuchen", "next": "sj_2" },
            { "text": "Den Roboterpatrouillen folgen", "next": "sj_3", "karma": -1 }
        ]
    },

    "sj_1": {
        "text": "Jack besiegt die letzten Roboter praezise, aber du siehst Erschoepfung in seinen Augen. 'Aku zwingt diese Welt langsam in voellige Hoffnungslosigkeit.'",
        "choices": [
            { "text": "Jack nach der Situation fragen", "next": "sj_4" },
            { "text": "Weiterziehen und die Umgebung sichern", "next": "sj_5" }
        ]
    },

    "sj_2": {
        "text": "Du findest ein kleines Dorf, dessen Bewohner in Metallkaefigen von Aku’s Waechtern gehalten werden. Sie wirken gebrochen, aber lebendig.",
        "choices": [
            { "text": "Dorfbewohner befreien", "next": "sj_5", "karma": 3 },
            { "text": "Unbemerkt weitergehen", "next": "sj_6", "karma": -2 }
        ]
    },

    "sj_3": {
        "text": "Die Roboter fuehren dich zu einem alten Tempel, der von dunkler Energie und Aku-Symbolen ueberzogen ist. Die Luft wirkt schwer.",
        "choices": [
            { "text": "Tempel betreten", "next": "sj_7" },
            { "text": "Jack warnen", "next": "sj_4", "karma": 1 }
        ]
    },

    "sj_4": {
        "text": "Jack: 'Aku versucht, ein uraltes Artefakt zu finden. Es heisst Jewel of Neptune. Es koennte die letzte Hoffnung dieser Welt sein.'",
        "choices": [
            { "text": "Jack bei der Suche helfen", "next": "sj_8", "karma": 2 },
            { "text": "Eigene Wege gehen", "next": "sj_6", "karma": -1 }
        ]
    },

    "sj_5": {
        "text": "Ein alter ueberlebender uebergibt dir eine zerbrochene Schriftrolle. Sie enthaelt Hinweise auf versteckte Zufluchtsorte gegen Aku.",
        "choices": [
            { "text": "Schriftrolle annehmen", "next": "sj_8", "gain_item": "temple_scroll" },
            { "text": "Ablehnen", "next": "sj_6" }
        ]
    },

    "sj_6": {
        "text": "Die Welt beginnt zu flackern. Strassen verschwinden kurz und tauchen wieder auf. Aku’s Einfluss veraendert die Realitaet selbst.",
        "choices": [
            { "text": "Weitergehen", "next": "sj_9" }
        ]
    },

    "sj_7": {
        "text": "Im Tempel erscheint Demongo aus Schatten. Er ruft die Seelen gefallener Krieger, die gegen dich kaempfen sollen.",
        "choices": [
            { "text": "Gegen Demongo kaempfen", "next": "sj_10", "karma": 1 },
            { "text": "Taktisch zurueckziehen", "next": "sj_9", "karma": -1 }
        ]
    },

    "sj_8": {
        "text": "Jack zeigt dir eine Route zum Tempel des Wassers. 'Dort liegt etwas, das Aku fuerchtet.'",
        "choices": [
            { "text": "Route folgen", "next": "sj_11" },
            { "text": "Alleine vorausgehen", "next": "sj_10" }
        ]
    },

    "sj_9": {
        "text": "Aku’s Stimme hallt durch den Himmel: 'Zeit ist bedeutungslos. Alles gehoert mir.'",
        "choices": [
            { "text": "Widerstehen", "next": "sj_11", "karma": 2 },
            { "text": "Zweifeln", "next": "sj_12", "karma": -2 }
        ]
    },

    "sj_10": {
        "text": "Demongo beschwoert verstorbene Krieger. Die Luft fuellt sich mit Kampfgeistern vergangener Zeiten.",
        "choices": [
            { "text": "Kaempfen", "next": "sj_13" },
            { "text": "Fliehen", "next": "sj_12", "karma": -1 }
        ]
    },

    "sj_11": {
        "text": "Jack vertraut dir sein Katana kurz an. 'Nur wer diszipliniert bleibt, kann Aku widerstehen.'",
        "choices": [
            { "text": "Katana annehmen", "next": "sj_14", "gain_item": "jacks_katana" },
            { "text": "Ablehnen", "next": "sj_13", "karma": 1 }
        ]
    },

    "sj_12": {
        "text": "Aku’s Maschinen greifen ein verstecktes Dorf an, um letzte Hoffnungssysteme zu zerstoeren.",
        "choices": [
            { "text": "Dorf verteidigen", "next": "sj_15", "karma": 3 },
            { "text": "Weitergehen", "next": "sj_13", "karma": -2 }
        ]
    },

    "sj_13": {
        "text": "Ein High Priest von Aku erscheint. Er behauptet, Aku sei nur ein Werkzeug einer noch aelteren Macht.",
        "choices": [
            { "text": "Anhoeren", "next": "sj_16" },
            { "text": "Angreifen", "next": "sj_17", "karma": -1 }
        ]
    },

    "sj_14": {
        "text": "Das Katana reagiert auf die Dunkelheit in der Welt und beginnt leicht zu leuchten.",
        "choices": [
            { "text": "Analyse durchfuehren", "next": "sj_16" },
            { "text": "Weitergehen", "next": "sj_15" }
        ]
    },

    "sj_15": {
        "text": "Die Dorfbewohner danken dir still. Hoffnung ist selten geworden in dieser Welt.",
        "choices": [
            { "text": "Weiter", "next": "sj_18", "gain_item": "traveler_supplies" }
        ]
    },

    "sj_16": {
        "text": "Der High Priest sagt: 'Aku ist nicht das Ende. Nur ein Schatten eines groesseren Zyklus.'",
        "choices": [
            { "text": "Glauben", "next": "sj_19", "karma": -1 },
            { "text": "Ablehnen", "next": "sj_17", "karma": 2 }
        ]
    },

    "sj_17": {
        "text": "Der Priest verwandelt sich in ein Schattenwesen, das von Aku’s Energie korrumpiert wurde.",
        "choices": [
            { "text": "Mit Katana kaempfen", "next": "sj_20", "required_item": "jacks_katana" },
            { "text": "Ohne Katana kaempfen", "next": "sj_18", "karma": -2 }
        ]
    },

    "sj_18": {
        "text": "Jack wird von Robotern eingekreist, aber kaempft weiter ohne aufzugeben.",
        "choices": [
            { "text": "Jack unterstuetzen", "next": "sj_21", "karma": 2 },
            { "text": "Verstecken", "next": "sj_19", "karma": -2 }
        ]
    },

    "sj_19": {
        "text": "Aku erscheint am Himmel und verdunkelt die gesamte Stadt.",
        "choices": [
            { "text": "Ihm entgegentreten", "next": "sj_22" },
            { "text": "Fliehen", "next": "sj_21", "karma": -1 }
        ]
    },

    "sj_20": {
        "text": "Das Katana schneidet durch die korrumpierte Energie und befreit den Priest von Aku’s Einfluss.",
        "choices": [
            { "text": "Weiter", "next": "sj_22", "karma": 3 }
        ]
    },

    "sj_21": {
        "text": "Jack: 'Aku gewinnt nicht durch Staerke… sondern durch Zeit.'",
        "choices": [
            { "text": "Ihm Mut geben", "next": "sj_23", "karma": 2 },
            { "text": "Schweigen", "next": "sj_22" }
        ]
    },

    "sj_22": {
        "text": "Der Eingang zum Tempel des Wassers erscheint zwischen den Ruinen.",
        "choices": [
            { "text": "Betreten", "next": "sj_24", "required_item": "temple_scroll" },
            { "text": "Alternative suchen", "next": "sj_23" }
        ]
    },

    "sj_23": {
        "text": "Demongo kehrt mit einer Armee gefallener Krieger zurueck.",
        "choices": [
            { "text": "Kaempfen", "next": "sj_25", "karma": 1 },
            { "text": "Zivilisten retten", "next": "sj_24", "karma": 3 }
        ]
    },

    "sj_24": {
        "text": "Im Tempel liegt das Jewel of Neptune – ein Artefakt, das Aku’s Einfluss schwaechen kann.",
        "choices": [
            { "text": "Nehmen", "next": "sj_26", "gain_item": "jewel_of_neptune" }
        ]
    },

    "sj_25": {
        "text": "Jack wird verletzt, kaempft aber weiter unbeirrt.",
        "choices": [
            { "text": "Heilen", "next": "sj_26", "required_item": "traveler_supplies" },
            { "text": "Weiterziehen", "next": "sj_27", "karma": -3 }
        ]
    },

    "sj_26": {
        "text": "Das Jewel beginnt die Dunkelheit am Himmel zu schwaechen.",
        "choices": [
            { "text": "Aktivieren", "next": "sj_28", "karma": 2 },
            { "text": "Zurueckhalten", "next": "sj_27", "karma": -1 }
        ]
    },

    "sj_27": {
        "text": "Aku absorbiert Energie aus dem gesamten Nexus und wird staerker.",
        "choices": [
            { "text": "Angreifen", "next": "sj_28" },
            { "text": "Jack schuetzen", "next": "sj_29", "karma": 2 }
        ]
    },

    "sj_28": {
        "text": "Jack kaempft Seite an Seite mit dir gegen Aku selbst.",
        "choices": [
            { "text": "Katana einsetzen", "next": "sj_30", "required_item": "jacks_katana" },
            { "text": "Jewel nutzen", "next": "sj_lose", "required_item": "jewel_of_neptune" }
        ]
    },

    "sj_lose": {
        "text": "Das Jewel reicht nicht aus. Aku absorbiert seine Energie vollstaendig.",
        "choices": [
            { "text": "Fliehen", "next": "sj_29", "karma": -2 }
        ]
    },

    "sj_29": {
        "text": "Jack: 'Dies ist nur ein Kampf von vielen… aber wir werden nicht aufgeben.'",
        "choices": [
            { "text": "Vorbereiten", "next": "sj_30" }
        ]
    },

    "sj_30": {
        "text": "Aku verschwindet im Nexus-Riss, sein Lachen bleibt zurueck. Der Kampf um alle Welten beginnt.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_rs_start": {
        "text": "Der Park wirkt instabil. Der Himmel flackert wie ein kaputter Bildschirm. Mordecai und Rigby stehen vor dem Eingang des Parks und streiten sich, waehrend Skips bereits etwas Unheilvolles spuert.",
        "choices": [
            { "text": "Mordecai folgen", "next": "rs_1", "karma": 1 },
            { "text": "Rigby folgen", "next": "rs_2", "karma": -1 },
            { "text": "Skips ansprechen", "next": "rs_3", "karma": 2 },
            { "text": "Den Park untersuchen", "next": "rs_4" }
        ]
    },

    "rs_1": {
        "text": "Mordecai: 'Das ist kein normaler Glitch... irgendwas ueberschreibt die Parkregeln von innen.'",
        "choices": [
            { "text": "Nach Details fragen", "next": "rs_5" },
            { "text": "Es runterspielen", "next": "rs_6" },
            { "text": "Skips holen", "next": "rs_8" }
        ]
    },

    "rs_2": {
        "text": "Rigby steckt in einem Snackautomaten fest, der ihn jedes Mal neu ausspuckt, wenn er versucht, etwas zu klauen.",
        "choices": [
            { "text": "Helfen ihn rauszuziehen", "next": "rs_5", "karma": 1 },
            { "text": "Automat genauer ansehen", "next": "rs_7", "gain_item": "glitch_coin" },
            { "text": "Warten was passiert", "next": "rs_6" }
        ]
    },

    "rs_3": {
        "text": "Skips: 'Das fuehlt sich an wie ein alter Fehler... einer, der gelernt hat, sich selbst zu reparieren.'",
        "choices": [
            { "text": "Mehr wissen wollen", "next": "rs_8" },
            { "text": "Ignorieren und weitermachen", "next": "rs_6", "karma": -1 },
            { "text": "Andere warnen", "next": "rs_5" }
        ]
    },

    "rs_4": {
        "text": "Der Park wiederholt sich leicht versetzt. Du gehst denselben Weg zweimal, aber mit kleinen Veraenderungen im Schatten.",
        "choices": [
            { "text": "Dem Fehler folgen", "next": "rs_9" },
            { "text": "Zur Mitte zurueckgehen", "next": "rs_6" },
            { "text": "Skips fragen was das ist", "next": "rs_8" }
        ]
    },

    "rs_5": {
        "text": "Benson schreit aus dem Buero: 'Wenn das wieder so ein Chaos wird, macht ihr das nach der Schicht sauber!'",
        "choices": [
            { "text": "Beruhigen", "next": "rs_10" },
            { "text": "Weiterarbeiten", "next": "rs_11" },
            { "text": "Ihn ignorieren", "next": "rs_6", "karma": -1 }
        ]
    },

    "rs_6": {
        "text": "Der Park fuehlt sich kurz… doppelt an. Als wuerde jemand denselben Moment zweimal speichern.",
        "choices": [
            { "text": "Dem Riss folgen", "next": "rs_12" },
            { "text": "Zurueck zu den anderen", "next": "rs_11" },
            { "text": "Warten", "next": "rs_11" }
        ]
    },

    "rs_7": {
        "text": "Die Glitch-Muenze ist warm. Sie zeigt kurz eine Version des Parks, die nicht existieren sollte.",
        "choices": [
            { "text": "Aufheben", "next": "rs_10", "gain_item": "glitch_coin" },
            { "text": "Wegwerfen", "next": "rs_11" },
            { "text": "Rigby zeigen", "next": "rs_10" }
        ]
    },

    "rs_8": {
        "text": "Skips: 'Das ist kein einfacher Fehler. Der Park wird benutzt. Als Test.'",
        "choices": [
            { "text": "Nach dem Test fragen", "next": "rs_12" },
            { "text": "Nicht weiter darueber reden", "next": "rs_11" },
            { "text": "Andere holen", "next": "rs_10" }
        ]
    },

    "rs_9": {
        "text": "Du findest einen Bereich ohne Geraeusche. Selbst Schritte machen keinen Klang.",
        "choices": [
            { "text": "Untersuchen", "next": "rs_13", "gain_item": "silent_fragment" },
            { "text": "Zurueckgehen", "next": "rs_11" },
            { "text": "Rigby hineinziehen", "next": "rs_10" }
        ]
    },

    "rs_10": {
        "text": "Muscle Man: 'Okay hoer zu… ich hab so einen Typen gesehen. Der Park wiederholt sich wegen IHM, Mann.'",
        "choices": [
            { "text": "Mehr Infos verlangen", "next": "rs_14" },
            { "text": "Nicht ernst nehmen", "next": "rs_11" },
            { "text": "Skips informieren", "next": "rs_12" }
        ]
    },

    "rs_11": {
        "text": "Etwas im Park fuehlt sich an, als wuerde es deine Entscheidungen leicht vorausziehen.",
        "choices": [
            { "text": "Weitergehen", "next": "rs_15" },
            { "text": "Zurueck zum Eingang", "next": "rs_6" },
            { "text": "Pause machen", "next": "rs_15" }
        ]
    },

    "rs_12": {
        "text": "Skips fuehrt dich zu einem alten Teil des Parks, der nicht auf Karten existiert.",
        "choices": [
            { "text": "Untersuchen", "next": "rs_16" },
            { "text": "Umkehren", "next": "rs_11" },
            { "text": "Alle holen", "next": "rs_15" }
        ]
    },

    "rs_13": {
        "text": "Der Silent Fragment zeigt flackernde Versionen von dir im Park – leicht zeitversetzt.",
        "choices": [
            { "text": "Speichern", "next": "rs_15", "gain_item": "park_memory" },
            { "text": "Nicht weiter anschauen", "next": "rs_11" }
        ]
    },

    "rs_14": {
        "text": "Eileen erkennt Muster im Parksystem. Jemand hat die Realitaet wie ein Trainingsprogramm aufgebaut.",
        "choices": [
            { "text": "Weiter analysieren", "next": "rs_16" },
            { "text": "Stoppen", "next": "rs_15" },
            { "text": "Skips fragen", "next": "rs_16" }
        ]
    },

    "rs_15": {
        "text": "Der Himmel im Park reisst leicht auf. Etwas schaut hindurch, aber ohne direkt einzugreifen.",
        "choices": [
            { "text": "Weitergehen", "next": "rs_17" },
            { "text": "Zurueckziehen", "next": "rs_16" }
        ]
    },

    "rs_16": {
        "text": "Skips: 'Der Park ist ein Knotenpunkt. Aber irgendwas nutzt ihn als Schleife.'",
        "choices": [
            { "text": "Zustimmen", "next": "rs_17" },
            { "text": "Zweifeln", "next": "rs_17" },
            { "text": "Beweise suchen", "next": "rs_14" }
        ]
    },

    "rs_17": {
        "text": "Ein alter Arcade-Automat erscheint im Park. Er zeigt mehrere Versionen derselben Szene.",
        "choices": [
            { "text": "Glitch-Muenze einsetzen", "next": "rs_18", "required_item": "glitch_coin" },
            { "text": "Automat ignorieren", "next": "rs_19" },
            { "text": "Skips untersuchen lassen", "next": "rs_18" }
        ]
    },

    "rs_18": {
        "text": "Der Automat oeffnet einen stabilen Riss. Er fuehlt sich an, als wuerde er nicht zum Park gehoeren.",
        "choices": [
            { "text": "Durchgehen", "next": "rs_20" },
            { "text": "Andere zuerst schicken", "next": "rs_20" }
        ]
    },

    "rs_19": {
        "text": "Benson verliert kurz die uebersicht ueber den Park. Arbeitslisten aendern sich von selbst.",
        "choices": [
            { "text": "Helfen stabilisieren", "next": "rs_20" },
            { "text": "Abwarten", "next": "rs_20" }
        ]
    },

    "rs_20": {
        "text": "Skips: 'Das hier ist kein Parkproblem mehr. Das ist etwas Groesseres.'",
        "choices": [
            { "text": "Weiter", "next": "rs_21" }
        ]
    },

    "rs_21": {
        "text": "Ein Schatten formt sich ueber dem Park. Er wirkt vertraut, aber nicht vollstaendig real.",
        "choices": [
            { "text": "Konfrontieren", "next": "rs_22" },
            { "text": "Beobachten", "next": "rs_22" },
            { "text": "Vorbereiten", "next": "rs_22" }
        ]
    },

    "rs_22": {
        "text": "Die Praesenz: 'Ihr nennt es Park. Wir nennen es Simulation.'",
        "choices": [
            { "text": "Nachfragen", "next": "rs_23" },
            { "text": "Widersprechen", "next": "rs_23" }
        ]
    },

    "rs_23": {
        "text": "Mordecai und Rigby bemerken, dass der Park leicht unterschiedliche Versionen von ihnen enthaelt.",
        "choices": [
            { "text": "Untersuchen", "next": "rs_24" },
            { "text": "Ignorieren", "next": "rs_24" }
        ]
    },

    "rs_24": {
        "text": "Der Park beginnt sich zu ueberlagern. Wege existieren mehrfach gleichzeitig.",
        "choices": [
            { "text": "Park Memory nutzen", "next": "rs_25", "required_item": "park_memory" },
            { "text": "Einfach weitergehen", "next": "rs_25" }
        ]
    },

    "rs_25": {
        "text": "Skips stabilisiert Teile der Struktur, verliert dabei aber Energie.",
        "choices": [
            { "text": "Unterstuetzen", "next": "rs_26" },
            { "text": "Beobachten", "next": "rs_26" }
        ]
    },

    "rs_26": {
        "text": "Der Schatten bewegt sich nicht mehr zufaellig. Er reagiert auf eure Entscheidungen.",
        "choices": [
            { "text": "Weiter", "next": "rs_27" }
        ]
    },

    "rs_27": {
        "text": "Benson: 'Wenn das weitergeht, gibt es bald keinen Park mehr, der noch gleich ist.'",
        "choices": [
            { "text": "Zustimmen", "next": "rs_28" },
            { "text": "Zweifeln", "next": "rs_28" }
        ]
    },

    "rs_28": {
        "text": "Der Park wird vollstaendig von der ueberlagerten Struktur erfasst.",
        "choices": [
            { "text": "Weiter", "next": "rs_29" }
        ]
    },

    "rs_29": {
        "text": "Mehrere Versionen des Parks existieren gleichzeitig, aber nicht stabil.",
        "choices": [
            { "text": "Beobachten", "next": "rs_30" }
        ]
    },

    "rs_30": {
        "text": "Der Park oeffnet einen vollstaendigen Nexus-Riss. Der uebergang zu Kapitel 3 wird aktiviert.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_nj_start": {
        "text": "Ninjago City ist in Dunkelheit gehuellt. Die Goldenen Waffen reagieren unkontrolliert auf eine fremde Energie. Kai, Jay, Cole und Zane stehen angespannt vor dem Kloster von Spinjitzu. Sensei Wu wirkt besorgt.",
        "choices": [
            { "text": "Kai folgen", "next": "nj_1", "karma": 1 },
            { "text": "Zane folgen", "next": "nj_2" },
            { "text": "Cole folgen", "next": "nj_3" },
            { "text": "Jay folgen", "next": "nj_4", "karma": -1 },
            { "text": "Sensei Wu ansprechen", "next": "nj_5" }
        ]
    },

    "nj_1": {
        "text": "Kai: 'Das Feuer reagiert, als wuerde es gegen etwas kaempfen, das wir nicht sehen koennen.'",
        "choices": [
            { "text": "Quelle untersuchen", "next": "nj_6" },
            { "text": "Sofort angreifen", "next": "nj_7", "karma": -1 }
        ]
    },

    "nj_2": {
        "text": "Zane analysiert die Umgebung. 'Unbekannte Energie beeinflusst elementare Systeme.'",
        "choices": [
            { "text": "Daten sichern", "next": "nj_6", "gain_item": "ninja_data_core" },
            { "text": "Weiter beobachten", "next": "nj_8" }
        ]
    },

    "nj_3": {
        "text": "Cole spuert starke Erschuetterungen unter der Stadt. Etwas bewegt sich tief unter Ninjago City.",
        "choices": [
            { "text": "Nachgehen", "next": "nj_9", "karma": 1 },
            { "text": "Erst warnen", "next": "nj_8" }
        ]
    },

    "nj_4": {
        "text": "Jay versucht die Energie zu stabilisieren, verschlimmert aber kurz die Spannung im System.",
        "choices": [
            { "text": "Reparieren helfen", "next": "nj_10", "karma": 1 },
            { "text": "Zurueckziehen", "next": "nj_7", "karma": -1 }
        ]
    },

    "nj_5": {
        "text": "Sensei Wu: 'Die Waffen reagieren nicht mehr auf uns… sie reagieren auf etwas, das sie ruft.'",
        "choices": [
            { "text": "Vertrauen", "next": "nj_11", "karma": 1 },
            { "text": "Mehr wissen wollen", "next": "nj_7" }
        ]
    },

    "nj_6": {
        "text": "Die Goldenen Waffen reagieren ploetzlich auf deine Naehe. Energie flackert kurz auf.",
        "choices": [
            { "text": "Beruehren", "next": "nj_12", "gain_item": "golden_energy_fragment", "karma": 1 },
            { "text": "Abbrechen", "next": "nj_8" }
        ]
    },

    "nj_7": {
        "text": "Eine dunkle Praesenz zieht kurz durch die Strassen. Garmadon erscheint und verschwindet wieder.",
        "choices": [
            { "text": "Ihm folgen", "next": "nj_13", "karma": -1 },
            { "text": "Situation sichern", "next": "nj_8" }
        ]
    },

    "nj_8": {
        "text": "Die Stadt wirkt instabil, als wuerden sich ihre Grundlagen verschieben.",
        "choices": [
            { "text": "Weiter", "next": "nj_14" }
        ]
    },

    "nj_9": {
        "text": "Unter dem Kloster findest du eine alte versiegelte Kammer.",
        "choices": [
            { "text": "oeffnen", "next": "nj_15", "required_item": "ninja_data_core" },
            { "text": "Sichern und melden", "next": "nj_8", "karma": 1 }
        ]
    },

    "nj_10": {
        "text": "Pixel stabilisiert kurz die Systeme der Stadt.",
        "choices": [
            { "text": "Koordinieren", "next": "nj_16", "karma": 1 }
        ]
    },

    "nj_11": {
        "text": "Wu ueberreicht dir eine alte Schriftrolle der ersten Spinjitzu-Meister.",
        "choices": [
            { "text": "Annehmen", "next": "nj_17", "gain_item": "spinjitzu_scroll" }
        ]
    },

    "nj_12": {
        "text": "Die Energie zeigt dir fragmentierte Visionen der Goldenen Waffen in Aktion.",
        "choices": [
            { "text": "Analysieren", "next": "nj_14" }
        ]
    },

    "nj_13": {
        "text": "Garmadon wirkt instabil, als kaempfe er gegen etwas in sich selbst.",
        "choices": [
            { "text": "Ihm helfen", "next": "nj_18", "karma": 1 },
            { "text": "Angreifen", "next": "nj_19", "karma": -2 }
        ]
    },

    "nj_14": {
        "text": "Die Goldenen Waffen beginnen sich gegenseitig anzuziehen.",
        "choices": [
            { "text": "Untersuchen", "next": "nj_20" }
        ]
    },

    "nj_15": {
        "text": "In der Kammer liegt ein Nexus-Siegelstein.",
        "choices": [
            { "text": "Aktivieren", "next": "nj_21", "karma": 1 },
            { "text": "Versiegeln lassen", "next": "nj_14", "karma": 1 }
        ]
    },

    "nj_16": {
        "text": "Pixel stabilisiert kurzzeitig die Energiefluesse.",
        "choices": [
            { "text": "Danke sagen", "next": "nj_14", "karma": 1 }
        ]
    },

    "nj_17": {
        "text": "Die Schriftrolle warnt vor einer Vereinigung der Waffen.",
        "choices": [
            { "text": "Weiterlesen", "next": "nj_20" }
        ]
    },

    "nj_18": {
        "text": "Garmadon hilft dir kurz gegen eine Schattenwelle.",
        "choices": [
            { "text": "Zusammenhalten", "next": "nj_22", "karma": 1 }
        ]
    },

    "nj_19": {
        "text": "Eine Schattenarmee von Morro erscheint ploetzlich.",
        "choices": [
            { "text": "Kaempfen", "next": "nj_23" },
            { "text": "Rueckzug organisieren", "next": "nj_22", "karma": -1 }
        ]
    },

    "nj_20": {
        "text": "Die Goldenen Waffen destabilisieren den Himmel ueber Ninjago.",
        "choices": [
            { "text": "Stabilisieren", "next": "nj_24", "required_item": "golden_energy_fragment", "karma": 1 },
            { "text": "Beobachten", "next": "nj_23" }
        ]
    },

    "nj_21": {
        "text": "Der Nexus-Siegelstein verbindet die Kraefte der Ninja.",
        "choices": [
            { "text": "Aktivieren", "next": "nj_24", "karma": 1 },
            { "text": "Sichern", "next": "nj_23" }
        ]
    },

    "nj_22": {
        "text": "Die Ninja kaempfen gemeinsam gegen Morro.",
        "choices": [
            { "text": "Unterstuetzen", "next": "nj_25", "karma": 1 }
        ]
    },

    "nj_23": {
        "text": "Garmadon verliert kurz die Kontrolle ueber seine Form.",
        "choices": [
            { "text": "Eingreifen", "next": "nj_25" }
        ]
    },

    "nj_24": {
        "text": "Ein Riss oeffnet sich ueber Ninjago City.",
        "choices": [
            { "text": "Durchgehen", "next": "nj_26" }
        ]
    },

    "nj_25": {
        "text": "Wu: 'Wir muessen bereit sein fuer das, was kommt.'",
        "choices": [
            { "text": "Weiter", "next": "nj_26" }
        ]
    },

    "nj_26": {
        "text": "Die Goldenen Waffen reagieren gleichzeitig auf den Riss.",
        "choices": [
            { "text": "Beobachten", "next": "nj_27" }
        ]
    },

    "nj_27": {
        "text": "Pixel: 'Kapitel 3 Stabilitaet kritisch.'",
        "choices": [
            { "text": "Verstehen", "next": "nj_28", "karma": 1 },
            { "text": "Abwarten", "next": "nj_28" }
        ]
    },

    "nj_28": {
        "text": "Ninjago beginnt zu kollabieren.",
        "choices": [
            { "text": "Weiter", "next": "nj_29" }
        ]
    },

    "nj_29": {
        "text": "Mehrere Ninja-Versionen erscheinen gleichzeitig.",
        "choices": [
            { "text": "Beobachten", "next": "nj_30" }
        ]
    },

    "nj_30": {
        "text": "Der Nexus-Riss oeffnet sich vollstaendig ueber Ninjago City.",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c3_start": {
        "text": "Kapitel 3. Der Nexus ist nicht mehr stabil. Die Cartoon-Welten sind nicht mehr getrennte Orte, sondern ueberlappende Kriegszonen aus Realitaet, Erinnerung und Fehlern. Etwas beginnt aktiv zu jagen.",
        "choices": [
            { "text": "Steven Universe", "next": "c3_su_start" },
            { "text": "Scooby-Doo", "next": "c3_sd_start" },
            { "text": "Ninja Turtles", "next": "c3_tmnt_start" },
            { "text": "Super Hero Squad", "next": "c3_shs_start" },
            { "text": "Total Drama Island", "next": "c3_tdi_start" }
        ]
    },
    "c3_su_start": {
        "text": "Beach City wirkt ungewoehnlich still. Die Sterne ueber dem Meer flackern rosa. Garnet steht schweigend am Strand, Pearl ueberprueft hektisch alte Homeworld-Signale, und Amethyst wirkt nervoes.",
        "choices": [
            { "text": "Garnet folgen", "next": "su_1", "karma": 1 },
            { "text": "Pearl folgen", "next": "su_2" },
            { "text": "Amethyst folgen", "next": "su_3", "karma": -1 },
            { "text": "Steven suchen", "next": "su_4" }
        ]
    },

    "su_1": {
        "text": "Garnet: 'Die Zukunft ist unklar. Etwas hat die Zeitlinien beschaedigt.'",
        "choices": [
            { "text": "Genauer fragen", "next": "su_5" },
            { "text": "Abwarten", "next": "su_6", "karma": -1 }
        ]
    },

    "su_2": {
        "text": "Pearl analysiert eine alte Kristallkarte. 'Homeworld bewegt sich wieder.'",
        "choices": [
            { "text": "Karte nehmen", "next": "su_5", "gain_item": "crystal_map" },
            { "text": "Pearl helfen", "next": "su_7", "karma": 1 }
        ]
    },

    "su_3": {
        "text": "Amethyst: 'Ich hab kein gutes Gefuehl bei dem ganzen Kram.'",
        "choices": [
            { "text": "Beruhigen", "next": "su_6", "karma": 1 },
            { "text": "Ignorieren", "next": "su_8", "karma": -1 }
        ]
    },

    "su_4": {
        "text": "Steven ist verschwunden, nur sein Melonensamen liegt im Sand.",
        "choices": [
            { "text": "Samen nehmen", "next": "su_5", "gain_item": "melon_seed" },
            { "text": "Suchen", "next": "su_8" }
        ]
    },

    "su_5": {
        "text": "Ein schwaches rosa Licht pulsiert aus dem Ozean.",
        "choices": [
            { "text": "Untersuchen", "next": "su_9" },
            { "text": "Zurueckgehen", "next": "su_6" }
        ]
    },

    "su_6": {
        "text": "Ein verzerrtes Signal der Diamanten wird empfangen.",
        "choices": [
            { "text": "Anhoeren", "next": "su_10" },
            { "text": "Signal blockieren", "next": "su_8", "karma": -1 }
        ]
    },

    "su_7": {
        "text": "Pearl wirkt unsicher: 'Das koennte gefaehrlich sein… oder wichtig.'",
        "choices": [
            { "text": "Trotzdem analysieren", "next": "su_10", "karma": 1 },
            { "text": "Stoppen", "next": "su_8" }
        ]
    },

    "su_8": {
        "text": "Der Strand beginnt leicht zu schimmern, als waere er nicht stabil.",
        "choices": [
            { "text": "Weitergehen", "next": "su_11" }
        ]
    },

    "su_9": {
        "text": "Unter Wasser erscheint eine alte Homeworld-Struktur.",
        "choices": [
            { "text": "Eintauchen", "next": "su_12", "karma": 1 },
            { "text": "Zurueckziehen", "next": "su_11", "karma": -1 }
        ]
    },

    "su_10": {
        "text": "Diamantensignal: 'Die Ordnung der Kristalle wird neu bewertet.'",
        "choices": [
            { "text": "Antworten", "next": "su_12", "karma": 2 },
            { "text": "Ignorieren", "next": "su_11", "karma": -1 }
        ]
    },

    "su_11": {
        "text": "Ein kleines leuchtendes Fragment faellt aus dem Himmel.",
        "choices": [
            { "text": "Aufheben", "next": "su_13", "gain_item": "light_fragment" }
        ]
    },

    "su_12": {
        "text": "Lapis erscheint kurz im Wasser, wirkt aber verwirrt.",
        "choices": [
            { "text": "Mit ihr sprechen", "next": "su_14", "karma": 1 },
            { "text": "Beobachten", "next": "su_13" }
        ]
    },

    "su_13": {
        "text": "Peridot funkt: 'Etwas manipuliert die Gem-Struktur weltweit.'",
        "choices": [
            { "text": "Zusammenarbeiten", "next": "su_15", "karma": 1 },
            { "text": "Allein handeln", "next": "su_16", "karma": -1 }
        ]
    },

    "su_14": {
        "text": "Lapis gibt dir eine Wasserprojektion einer unbekannten Insel.",
        "choices": [
            { "text": "Merken", "next": "su_15", "gain_item": "ocean_map" }
        ]
    },

    "su_15": {
        "text": "Garnet sagt: 'Die Zukunft spaltet sich weiter.'",
        "choices": [
            { "text": "Vertrauen", "next": "su_17", "karma": 1 },
            { "text": "Zweifeln", "next": "su_16", "karma": -1 }
        ]
    },

    "su_16": {
        "text": "Ein Homeworld-Schiff naehert sich Beach City.",
        "choices": [
            { "text": "Vorbereiten", "next": "su_18" },
            { "text": "Abwarten", "next": "su_17", "karma": -1 }
        ]
    },

    "su_17": {
        "text": "Steven taucht ploetzlich wieder auf, aber wirkt veraendert.",
        "choices": [
            { "text": "Ansprechen", "next": "su_18" },
            { "text": "Beobachten", "next": "su_19" }
        ]
    },

    "su_18": {
        "text": "Steven: 'Ich habe etwas im Licht gesehen, das nicht hier sein sollte.'",
        "choices": [
            { "text": "Nachfragen", "next": "su_20" },
            { "text": "Wechseln Thema", "next": "su_19", "karma": -1 }
        ]
    },

    "su_19": {
        "text": "Das Homeworld-Schiff landet nahe der Kueste.",
        "choices": [
            { "text": "Hingehen", "next": "su_21" }
        ]
    },

    "su_20": {
        "text": "Steven gibt dir einen fragmentierten Kristall.",
        "choices": [
            { "text": "Nehmen", "next": "su_21", "gain_item": "crystal_fragment" }
        ]
    },

    "su_21": {
        "text": "Eine alte Diamantenprojektion erscheint ueber dem Schiff.",
        "choices": [
            { "text": "Kontakt aufnehmen", "next": "su_22", "karma": 1 },
            { "text": "Angreifen vorbereiten", "next": "su_23", "karma": -1 }
        ]
    },

    "su_22": {
        "text": "Die Projektion sagt nichts, aber reagiert auf den Kristall.",
        "choices": [
            { "text": "Kristall zeigen", "next": "su_24", "required_item": "crystal_fragment" },
            { "text": "Wegstecken", "next": "su_23" }
        ]
    },

    "su_23": {
        "text": "Das Schiff beginnt, Energie aus der Umgebung zu ziehen.",
        "choices": [
            { "text": "Stoppen", "next": "su_24" }
        ]
    },

    "su_24": {
        "text": "Peridot: 'Das ist ein Schluessel zu einer alten Gem-Kontrolle.'",
        "choices": [
            { "text": "Aktivieren", "next": "su_25", "karma": 2 },
            { "text": "Sichern", "next": "su_26" }
        ]
    },

    "su_25": {
        "text": "Das Schiff stabilisiert sich kurzzeitig.",
        "choices": [
            { "text": "Weiter untersuchen", "next": "su_27" }
        ]
    },

    "su_26": {
        "text": "Das Schiff reagiert instabiler.",
        "choices": [
            { "text": "Eingreifen", "next": "su_27", "karma": -1 }
        ]
    },

    "su_27": {
        "text": "Garnet: 'Wir naehern uns einer Entscheidung, die alles veraendert.'",
        "choices": [
            { "text": "Weiter", "next": "su_28" }
        ]
    },

    "su_28": {
        "text": "Steven vereint kurz die Energie aller Gems.",
        "choices": [
            { "text": "Unterstuetzen", "next": "su_29", "karma": 2 },
            { "text": "Zweifeln", "next": "su_29", "karma": -2 }
        ]
    },

    "su_29": {
        "text": "Der Himmel ueber Beach City oeffnet einen rosa Nexus-Riss.",
        "choices": [
            { "text": "Beobachten", "next": "su_30" }
        ]
    },

    "su_30": {
        "text": "Alle Realitaeten der Gems beginnen sich zu ueberlagern. uebergang zu Kapitel 4 aktiviert.",
        "choices": [
            { "text": "Kapitel 4 starten", "next": "c4_start" }
        ]
    },
    "c3_sd_start": {
        "text": "Die Mystery Inc. erreicht ein verlassenes Kuestenhotel. Die Tueren knarren, Nebel zieht durch die Lobby, und irgendwo faellt ein Bild von der Wand. Shaggy will sofort wieder gehen.",
        "choices": [
            { "text": "Fred folgen", "next": "sd_1", "karma": 1 },
            { "text": "Velma folgen", "next": "sd_2" },
            { "text": "Daphne folgen", "next": "sd_3", "karma": 1 },
            { "text": "Scooby folgen", "next": "sd_4", "karma": -1 }
        ]
    },

    "sd_1": {
        "text": "Fred untersucht die Eingangshalle: 'Jemand hat hier bewusst Fallen vorbereitet.'",
        "choices": [
            { "text": "Fallen analysieren", "next": "sd_5" },
            { "text": "Ignorieren und weiter", "next": "sd_6", "karma": -1 }
        ]
    },

    "sd_2": {
        "text": "Velma findet alte Hotelakten: mehrere Gaeste sind ploetzlich verschwunden.",
        "choices": [
            { "text": "Akten mitnehmen", "next": "sd_5", "gain_item": "hotel_files" },
            { "text": "Weiter suchen", "next": "sd_7" }
        ]
    },

    "sd_3": {
        "text": "Daphne entdeckt eine versteckte Tuer hinter einem Spiegel.",
        "choices": [
            { "text": "oeffnen", "next": "sd_8" },
            { "text": "Fred rufen", "next": "sd_6", "karma": 1 }
        ]
    },

    "sd_4": {
        "text": "Scooby und Shaggy finden eine Kueche voller halb gegessener Sandwiches.",
        "choices": [
            { "text": "Essen nehmen", "next": "sd_6", "gain_item": "sandwich_supply" },
            { "text": "Wegrennen", "next": "sd_7", "karma": -1 }
        ]
    },

    "sd_5": {
        "text": "Fred: 'Das ist kein Zufall. Jemand will, dass wir hier bleiben.'",
        "choices": [
            { "text": "Zustimmen", "next": "sd_9", "karma": 1 },
            { "text": "Zweifeln", "next": "sd_6", "karma": -1 }
        ]
    },

    "sd_6": {
        "text": "Im Flur bewegen sich Schatten, obwohl niemand da ist.",
        "choices": [
            { "text": "Weitergehen", "next": "sd_10" }
        ]
    },

    "sd_7": {
        "text": "Scooby bellt vor einem Aufzug, der nicht aufhoeren will zu fahren.",
        "choices": [
            { "text": "Aufzug untersuchen", "next": "sd_10" },
            { "text": "Treppen nehmen", "next": "sd_9" }
        ]
    },

    "sd_8": {
        "text": "Hinter dem Spiegel ist ein Geheimgang mit Kratzspuren.",
        "choices": [
            { "text": "Reingehen", "next": "sd_11", "karma": 1 },
            { "text": "Zurueckgehen", "next": "sd_9" }
        ]
    },

    "sd_9": {
        "text": "Velma: 'Das Hotel ist aelter als es aussieht… viel aelter.'",
        "choices": [
            { "text": "Weiter untersuchen", "next": "sd_12" }
        ]
    },

    "sd_10": {
        "text": "Ein 'Geist' erscheint und schreit durch das Hotel.",
        "choices": [
            { "text": "Verfolgen", "next": "sd_13" },
            { "text": "Verstecken", "next": "sd_11", "karma": -1 }
        ]
    },

    "sd_11": {
        "text": "Du findest eine alte Taschenlampe mit schwacher Batterie.",
        "choices": [
            { "text": "Nehmen", "next": "sd_12", "gain_item": "flashlight" }
        ]
    },

    "sd_12": {
        "text": "Fred baut improvisierte Seilfallen aus Hotelmaterial.",
        "choices": [
            { "text": "Helfen", "next": "sd_14", "karma": 1 },
            { "text": "Weitergehen", "next": "sd_13" }
        ]
    },

    "sd_13": {
        "text": "Shaggy schwoert, dass der Geist ihn beobachtet hat.",
        "choices": [
            { "text": "Beruhigen", "next": "sd_14", "karma": 1 },
            { "text": "Zweifeln", "next": "sd_15", "karma": -1 }
        ]
    },

    "sd_14": {
        "text": "Velma entdeckt mechanische Teile hinter einer Wand.",
        "choices": [
            { "text": "Untersuchen", "next": "sd_16" },
            { "text": "Ignorieren", "next": "sd_15", "karma": -1 }
        ]
    },

    "sd_15": {
        "text": "Der 'Geist' erscheint erneut, diesmal naeher.",
        "choices": [
            { "text": "Fliehen", "next": "sd_17", "karma": -1 },
            { "text": "Konfrontieren", "next": "sd_16", "karma": 1 }
        ]
    },

    "sd_16": {
        "text": "Velma: 'Es ist ein Projektor-System. Jemand inszeniert das Ganze.'",
        "choices": [
            { "text": "Beweise sammeln", "next": "sd_18", "gain_item": "projector_part" },
            { "text": "Weiter suchen", "next": "sd_17" }
        ]
    },

    "sd_17": {
        "text": "Scooby findet einen versteckten Kontrollraum.",
        "choices": [
            { "text": "Reingehen", "next": "sd_18" },
            { "text": "Scooby zurueckhalten", "next": "sd_19", "karma": -1 }
        ]
    },

    "sd_18": {
        "text": "Im Kontrollraum laufen Maschinen, die das 'Monster' steuern.",
        "choices": [
            { "text": "Deaktivieren", "next": "sd_20", "karma": 2 },
            { "text": "Beobachten", "next": "sd_19" }
        ]
    },

    "sd_19": {
        "text": "Der falsche Geist naehert sich der Gruppe erneut.",
        "choices": [
            { "text": "Fallen ausloesen", "next": "sd_21" },
            { "text": "Fliehen", "next": "sd_20", "karma": -1 }
        ]
    },

    "sd_20": {
        "text": "Fred: 'Jetzt oder nie, wir brauchen einen Plan.'",
        "choices": [
            { "text": "Plan ausfuehren", "next": "sd_22", "karma": 1 }
        ]
    },

    "sd_21": {
        "text": "Die Falle faengt den 'Geist' teilweise ein.",
        "choices": [
            { "text": "Entlarven", "next": "sd_22", "karma": 2 }
        ]
    },

    "sd_22": {
        "text": "Der Taeter wird sichtbar: ein Hotelmanager mit Fernsteuerung.",
        "choices": [
            { "text": "Konfrontieren", "next": "sd_23" },
            { "text": "Beweise zeigen", "next": "sd_24", "karma": 1 }
        ]
    },

    "sd_23": {
        "text": "Der Manager versucht zu fliehen.",
        "choices": [
            { "text": "Stoppen", "next": "sd_24", "karma": 1 },
            { "text": "Laufen lassen", "next": "sd_25", "karma": -2 }
        ]
    },

    "sd_24": {
        "text": "Velma: 'Wie immer war es kein echtes Monster.'",
        "choices": [
            { "text": "Weiter", "next": "sd_26" }
        ]
    },

    "sd_25": {
        "text": "Der Manager deaktiviert alle Beweise und verschwindet.",
        "choices": [
            { "text": "Akzeptieren", "next": "sd_26", "karma": -2 }
        ]
    },

    "sd_26": {
        "text": "Scooby und Shaggy finden eine geheime Schatzkarte im Hotel.",
        "choices": [
            { "text": "Mitnehmen", "next": "sd_27", "gain_item": "mystery_map" }
        ]
    },

    "sd_27": {
        "text": "Fred: 'Das hier ist groesser als nur dieses Hotel.'",
        "choices": [
            { "text": "Zustimmen", "next": "sd_28", "karma": 1 },
            { "text": "Zweifeln", "next": "sd_28", "karma": -1 }
        ]
    },

    "sd_28": {
        "text": "Der Nebel draussen formt kurz eine unbekannte Silhouette.",
        "choices": [
            { "text": "Beobachten", "next": "sd_29" }
        ]
    },

    "sd_29": {
        "text": "Die Mystery Inc. erkennt: Dieses Hotel war nur ein Testfall.",
        "choices": [
            { "text": "Weiter untersuchen", "next": "sd_30" }
        ]
    },

    "sd_30": {
        "text": "Der Fall ist geloest, aber etwas Groesseres bleibt im Hintergrund aktiv. uebergang zu Kapitel 4 oeffnet sich.",
        "choices": [
            { "text": "Kapitel 4 starten", "next": "c4_start" }
        ]
    },
    "c3_tmnt_start": {
        "text": "Ein Stromausfall legt Teile von New York lahm. U-Bahn-Tunnel flackern in unregelmaessigen Abstaenden auf, als wuerde etwas darunter ‚atmen‘. In der Kanalisation tauchen ploetzlich alte Foot-Clan-Symbole auf, die niemand dort angebracht hat.",
        "choices": [
            { "text": "Direkt zu den U-Bahn-Tunneln gehen", "next": "tmnt_underground_1" },
            { "text": "Zur Turtle-Basis zurueckkehren", "next": "tmnt_lair_1" },
            { "text": "Foot-Symbole untersuchen", "next": "tmnt_signs_1", "karma": 1 }
        ]
    },

    "tmnt_underground_1": {
        "text": "Im Tunnel hoerst du Metall auf Metall, aber kein Kampf ist sichtbar. Stattdessen bewegen sich Schatten entlang der Waende, die nicht zu den Lichtquellen passen.",
        "choices": [
            { "text": "Dem Geraeusch folgen", "next": "tmnt_shadow_1" },
            { "text": "Zur Oberflaeche zurueckziehen", "next": "tmnt_surface_1", "karma": -1 },
            { "text": "Scanner aktivieren (falls vorhanden)", "next": "tmnt_scan_1", "required_item": "mutagen_sample" }
        ]
    },

    "tmnt_lair_1": {
        "text": "Die Turtle-Basis ist halb im Dunkeln. Donatello hat mehrere Monitore gleichzeitig laufen, aber keiner zeigt stabile Daten. Leonardo trainiert ohne Zielrichtung, als wuerde er etwas erwarten.",
        "choices": [
            { "text": "Donatello unterstuetzen", "next": "tmnt_lab_1", "karma": 2 },
            { "text": "Leonardo ansprechen", "next": "tmnt_leo_1" },
            { "text": "Ausruestung nehmen und sofort rausgehen", "next": "tmnt_underground_1", "karma": -1 }
        ]
    },

    "tmnt_signs_1": {
        "text": "Die Symbole reagieren leicht auf deine Naehe. Nicht aktiv, aber auch nicht inaktiv. Als wuerden sie ‚warten‘.",
        "choices": [
            { "text": "Beruehren", "next": "tmnt_mark_1", "karma": -1 },
            { "text": "Abzeichnen und mitnehmen", "next": "tmnt_lab_1", "gain_item": "foot_mark_copy" },
            { "text": "Ignorieren und weitergehen", "next": "tmnt_surface_1" }
        ]
    },

    "tmnt_shadow_1": {
        "text": "Die Schatten loesen sich kurz vom Boden und formen eine unvollstaendige Silhouette eines humanoiden Kaempfers.",
        "choices": [
            { "text": "Angreifen", "next": "tmnt_conflict_1", "karma": -1 },
            { "text": "Beobachten", "next": "tmnt_scan_2" },
            { "text": "Zurueckweichen", "next": "tmnt_surface_1", "karma": 1 }
        ]
    },

    "tmnt_lab_1": {
        "text": "Donatello erkennt ein Muster in den Foot-Signalen: Sie sind nicht aus Befehlen aufgebaut, sondern aus Rueckkopplungsschleifen.",
        "choices": [
            { "text": "Analyse fortsetzen", "next": "tmnt_core_hint_1" },
            { "text": "System abschalten", "next": "tmnt_interference_1", "karma": 2 },
            { "text": "Daten sichern und warten", "next": "tmnt_wait_1" }
        ]
    },

    "tmnt_leo_1": {
        "text": "Leonardo sagt nichts sofort. Dann: 'Das hier fuehlt sich nicht wie ein Gegner an. Eher wie ein Test.'",
        "choices": [
            { "text": "Zustimmen und planen", "next": "tmnt_core_hint_1", "karma": 2 },
            { "text": "Widersprechen und handeln", "next": "tmnt_conflict_1" },
            { "text": "Abwarten", "next": "tmnt_wait_1", "karma": -1 }
        ]
    },

    "tmnt_scan_1": {
        "text": "Der Scanner zeigt keine klare Quelle. Nur ueberlagerungen mehrerer Energieprofile.",
        "choices": [
            { "text": "Daten speichern", "next": "tmnt_lab_1", "gain_item": "scan_fragment" },
            { "text": "Scanner abschalten", "next": "tmnt_surface_1" }
        ]
    },

    "tmnt_scan_2": {
        "text": "Die Schatten reagieren auf Aufmerksamkeit. Je laenger du hinsiehst, desto klarer wird die Form.",
        "choices": [
            { "text": "Kontakt herstellen", "next": "tmnt_core_hint_1", "karma": 1 },
            { "text": "Zerstoeren", "next": "tmnt_conflict_1", "karma": -2 }
        ]
    },

    "tmnt_core_hint_1": {
        "text": "Donatello findet eine Koordinate tief unter Manhattan: etwas wirkt dort wie ein ‚Synchronisationskern‘ fuer alle Mutagen-Signale.",
        "choices": [
            { "text": "Koordinate verfolgen", "next": "tmnt_core_1" },
            { "text": "Information teilen", "next": "tmnt_lair_2", "karma": 2 },
            { "text": "Alleine hingehen", "next": "tmnt_core_1", "karma": -1 }
        ]
    },

    "tmnt_interference_1": {
        "text": "Das System reagiert instabil. Fuer einen Moment werden alle Foot-Signale still.",
        "choices": [
            { "text": "Abwarten", "next": "tmnt_wait_1" },
            { "text": "Sofort nachsetzen", "next": "tmnt_core_1", "karma": 1 }
        ]
    },

    "tmnt_wait_1": {
        "text": "Die Stadt veraendert ihre Geraeuschkulisse. Etwas ist verschwunden, aber niemand weiss was.",
        "choices": [
            { "text": "Weiter verfolgen", "next": "tmnt_core_1" }
        ]
    },

    "tmnt_surface_1": {
        "text": "Auf der Oberflaeche sind die Lichter der Stadt leicht verzoegert. Bewegungen wirken minimal asynchron.",
        "choices": [
            { "text": "Zurueck in die Kanalisation", "next": "tmnt_underground_1" },
            { "text": "Menschen warnen", "next": "tmnt_civ_1", "karma": 2 },
            { "text": "Ignorieren und weitergehen", "next": "tmnt_core_1", "karma": -1 }
        ]
    },

    "tmnt_civ_1": {
        "text": "Einige Menschen reagieren verwirrt, andere sehen nichts Ungewoehnliches.",
        "choices": [
            { "text": "Weiter helfen", "next": "tmnt_lair_2", "karma": 2 },
            { "text": "Abbrechen", "next": "tmnt_core_1" }
        ]
    },

    "tmnt_lair_2": {
        "text": "Splinter: 'Zu viel Eingreifen kann ebenso gefaehrlich sein wie zu wenig.'",
        "choices": [
            { "text": "Verstehen und abwaegen", "next": "tmnt_core_1", "karma": 2 },
            { "text": "Ignorieren", "next": "tmnt_core_1", "karma": -2 }
        ]
    },

    "tmnt_core_1": {
        "text": "Der Weg fuehrt tief unter die Stadt. Die Realitaet wirkt dort duenner, als wuerde sie auf etwas anderes aufliegen.",
        "choices": [
            { "text": "Weiter", "next": "tmnt_final_1" }
        ]
    },

    "tmnt_final_1": {
        "text": "Der Synchronisationskern pulsiert unter Manhattan. Etwas reagiert auf eure Anwesenheit.",
        "choices": [
            { "text": "Annaehern", "next": "tmnt_ending_1" },
            { "text": "Vorbereiten", "next": "tmnt_ending_1", "karma": 1 }
        ]
    },

    "tmnt_ending_1": {
        "text": "Der Kern stabilisiert sich kurz – dann beginnt er, sich mit der Stadt zu verbinden. uebergang zu Kapitel 4 oeffnet sich.",
        "choices": [
            { "text": "Kapitel 4 starten", "next": "c4_start" }
        ]
    },
    "c3_shs_start": {
        "text": "Super Hero City ist in Aufruhr. Irgendetwas stoert die Heldenkommunikation weltweit. Iron Man verliert zeitweise Zugriff auf seine Systeme, waehrend Thor berichtet, dass der Himmel ‚falsch klingt‘. Captain America organisiert Evakuierungen, aber die Lage ist unklar.",
        "choices": [
            { "text": "Avengers Tower untersuchen", "next": "shs_tower_1" },
            { "text": "Asgardisches Signal verfolgen", "next": "shs_asgard_1", "karma": 1 },
            { "text": "Hydra Aktivitaet pruefen", "next": "shs_hydra_1", "karma": -1 },
            { "text": "Stadt retten helfen", "next": "shs_city_1", "karma": 2 }
        ]
    },

    "shs_tower_1": {
        "text": "Im Avengers Tower laufen Systeme im Kreis. JARVIS antwortet, aber nicht konsistent. Iron Man wirkt genervt: 'Das ist kein Hack. Das ist eher... ein Widerspruch.'",
        "choices": [
            { "text": "System stabilisieren", "next": "shs_core_hint_1", "karma": 2 },
            { "text": "Daten extrahieren", "next": "shs_item_1", "gain_item": "glitch_protocol" },
            { "text": "Iron Man folgen", "next": "shs_lab_1" }
        ]
    },

    "shs_asgard_1": {
        "text": "Thor hoert Stimmen im Himmel. Loki behauptet, er habe nichts damit zu tun – aber niemand glaubt ihm sofort.",
        "choices": [
            { "text": "Thor unterstuetzen", "next": "shs_asgard_2", "karma": 1 },
            { "text": "Loki beobachten", "next": "shs_loki_1" },
            { "text": "Portal untersuchen", "next": "shs_core_hint_1", "karma": -1 }
        ]
    },

    "shs_hydra_1": {
        "text": "Hydra-Agenten wirken verwirrt. Einige befolgen Befehle, die sich staendig aendern.",
        "choices": [
            { "text": "Befragen", "next": "shs_hydra_2", "karma": 1 },
            { "text": "Konfrontieren", "next": "shs_combat_1", "karma": -1 },
            { "text": "Beobachten", "next": "shs_core_hint_1" }
        ]
    },

    "shs_city_1": {
        "text": "Spider-Man hilft Menschen, die ploetzlich durch feste Waende laufen koennen, als waeren sie halb real.",
        "choices": [
            { "text": "Spider-Man helfen", "next": "shs_spidey_1", "karma": 2 },
            { "text": "Phaenomen untersuchen", "next": "shs_core_hint_1" },
            { "text": "Weiterziehen", "next": "shs_lab_1", "karma": -1 }
        ]
    },

    "shs_lab_1": {
        "text": "Bruce Banner erkennt ein Muster: 'Das ist kein Strahlungstyp. Es ist eher eine Systemueberlagerung.'",
        "choices": [
            { "text": "Analysieren", "next": "shs_core_hint_1" },
            { "text": "Abbrechen", "next": "shs_city_2", "karma": -2 }
        ]
    },

    "shs_loki_1": {
        "text": "Loki laechelt: 'Wenn ich schuld waere, waere es viel eleganter.'",
        "choices": [
            { "text": "Glauben", "next": "shs_asgard_2" },
            { "text": "Misstrauen", "next": "shs_combat_1", "karma": -1 }
        ]
    },

    "shs_asgard_2": {
        "text": "Thor spuert eine Stoerung im Bifroest-System.",
        "choices": [
            { "text": "Reparieren helfen", "next": "shs_core_hint_1", "karma": 2 },
            { "text": "Weiter beobachten", "next": "shs_city_2" }
        ]
    },

    "shs_hydra_2": {
        "text": "Hydra spricht von 'fehlenden Befehlen', die sich selbst ersetzen.",
        "choices": [
            { "text": "Information speichern", "next": "shs_item_2", "gain_item": "hydra_signal_map" },
            { "text": "Zurueckziehen", "next": "shs_city_2" }
        ]
    },

    "shs_spidey_1": {
        "text": "Spider-Man: 'Das fuehlt sich an wie mein Spider-Sense… aber ueberall gleichzeitig.'",
        "choices": [
            { "text": "Koordinieren", "next": "shs_core_hint_1", "karma": 2 },
            { "text": "Alleine handeln", "next": "shs_city_2", "karma": -1 }
        ]
    },

    "shs_city_2": {
        "text": "Die Stadt beginnt leicht zu flackern, aber niemand ausser den Helden scheint es vollstaendig zu bemerken.",
        "choices": [
            { "text": "Weiter untersuchen", "next": "shs_core_hint_1" }
        ]
    },

    "shs_combat_1": {
        "text": "Eine unbekannte Einheit greift kurz an und verschwindet wieder, bevor sie identifiziert werden kann.",
        "choices": [
            { "text": "Verfolgen", "next": "shs_core_hint_1" },
            { "text": "Abbrechen", "next": "shs_city_2", "karma": -2 }
        ]
    },

    "shs_core_hint_1": {
        "text": "Reed Richards entdeckt eine Koordinate unter der Stadt, die Signale aller Realitaetsbereiche synchronisiert.",
        "choices": [
            { "text": "Koordinate untersuchen", "next": "shs_core_1" },
            { "text": "Team informieren", "next": "shs_team_1", "karma": 2 },
            { "text": "Alleine gehen", "next": "shs_core_1", "karma": -1 }
        ]
    },

    "shs_item_1": {
        "text": "Das Glitch-Protokoll enthaelt fragmentierte Befehle aus mehreren Dimensionen.",
        "choices": [
            { "text": "Nutzen", "next": "shs_core_hint_1", "gain_item": "protocol_key" }
        ]
    },

    "shs_item_2": {
        "text": "Die Signalkarte zeigt sich nur teilweise stabil.",
        "choices": [
            { "text": "Speichern", "next": "shs_core_hint_1", "gain_item": "signal_fragment" }
        ]
    },

    "shs_team_1": {
        "text": "Captain America entscheidet vorsichtig zu handeln: 'Wir wissen zu wenig.'",
        "choices": [
            { "text": "Zustimmen", "next": "shs_core_1", "karma": 2 },
            { "text": "Widersprechen", "next": "shs_core_1", "karma": -2 }
        ]
    },

    "shs_core_1": {
        "text": "Unter Manhattan befindet sich ein kolossaler Synchronisationskern aus unbekannter Technologie.",
        "choices": [
            { "text": "Annaehern", "next": "shs_final_1" },
            { "text": "Vorbereiten", "next": "shs_final_1", "karma": 1 }
        ]
    },

    "shs_final_1": {
        "text": "Der Kern reagiert auf die Anwesenheit der Helden. Mehrere Realitaetslayer beginnen sich zu ueberlagern.",
        "choices": [
            { "text": "Stabilisieren versuchen", "next": "shs_end_1", "karma": 2 },
            { "text": "Beobachten", "next": "shs_end_1", "karma": -1 }
        ]
    },

    "shs_end_1": {
        "text": "Der Synchronisationskern aktiviert sich vollstaendig. Die Realitaet der Stadt beginnt sich neu zu strukturieren. uebergang zu Kapitel 4 oeffnet sich.",
        "choices": [
            { "text": "Kapitel 4 starten", "next": "c4_start" }
        ]
    },
    "c3_tdi_start": {
        "text": "Die Camper werden mitten in der Nacht geweckt. Chris McLean kuendigt eine spontane neue Herausforderung an, ohne zu erklaeren, worum es wirklich geht. Chef Hatchet laedt alle in Boote am Pier, waehrend einige Kandidaten bereits misstrauisch sind.",
        "choices": [
            { "text": "Chris direkt befragen", "next": "tdi_1", "karma": 1 },
            { "text": "Mit Gwen sprechen", "next": "tdi_2" },
            { "text": "Mit Duncan mitgehen", "next": "tdi_3", "karma": -1 },
            { "text": "Heather beobachten", "next": "tdi_4" },
            { "text": "Ein Boot nehmen ohne Fragen", "next": "tdi_5", "karma": -2 }
        ]
    },

    "tdi_1": {
        "text": "Chris grinst: 'Je weniger ihr wisst, desto besser laeuft die Show.'",
        "choices": [
            { "text": "Nachhaken", "next": "tdi_6", "karma": 1 },
            { "text": "Zurueckziehen", "next": "tdi_5", "karma": -1 }
        ]
    },

    "tdi_2": {
        "text": "Gwen: 'Das fuehlt sich nicht wie eine normale Challenge an... irgendwas ist off.'",
        "choices": [
            { "text": "Zustimmen und vorsichtig sein", "next": "tdi_7", "karma": 2 },
            { "text": "Ignorieren und teilnehmen", "next": "tdi_5" },
            { "text": "Andere warnen", "next": "tdi_6", "karma": 1 }
        ]
    },

    "tdi_3": {
        "text": "Duncan: 'Wenn Chris uns nicht sagt, was los ist, ist es wahrscheinlich illegal.'",
        "choices": [
            { "text": "Mitziehen", "next": "tdi_8" },
            { "text": "Abstand halten", "next": "tdi_7", "karma": 1 }
        ]
    },

    "tdi_4": {
        "text": "Heather beobachtet die Gruppe, als wuerde sie bereits eine Strategie planen.",
        "choices": [
            { "text": "Konfrontieren", "next": "tdi_9", "karma": -1 },
            { "text": "Beobachten zurueck", "next": "tdi_8" }
        ]
    },

    "tdi_5": {
        "text": "Die Boote fahren in Nebel hinaus. Die Insel ist nicht wie erwartet sichtbar.",
        "choices": [
            { "text": "Weiterfahren", "next": "tdi_beach_1" }
        ]
    },

    "tdi_6": {
        "text": "Chris wechselt das Thema und laechelt zu breit.",
        "choices": [
            { "text": "Akzeptieren", "next": "tdi_5" },
            { "text": "Weiter Druck machen", "next": "tdi_beach_1", "karma": 1 }
        ]
    },

    "tdi_7": {
        "text": "Die Gruppe beginnt sich zu spalten, bevor die Challenge ueberhaupt erklaert wurde.",
        "choices": [
            { "text": "Gruppen beobachten", "next": "tdi_beach_1" }
        ]
    },

    "tdi_8": {
        "text": "Die Insel taucht ploetzlich auf – aber sie sieht anders aus als sonst.",
        "choices": [
            { "text": "Anlegen", "next": "tdi_beach_1" }
        ]
    },

    "tdi_9": {
        "text": "Heather laechelt: 'Du solltest nicht zu viel fragen, wenn du im Spiel bleiben willst.'",
        "choices": [
            { "text": "Zurueckziehen", "next": "tdi_5", "karma": -1 },
            { "text": "Weiter beobachten", "next": "tdi_beach_1" }
        ]
    },

    "tdi_beach_1": {
        "text": "Am Strand stehen bereits seltsame Kisten mit Nummern. Chris erklaert nicht, was sie bedeuten.",
        "choices": [
            { "text": "Kiste oeffnen (Nr. 1)", "next": "tdi_item_1" },
            { "text": "Kiste 2 waehlen", "next": "tdi_item_2" },
            { "text": "Andere beobachten", "next": "tdi_social_1" }
        ]
    },

    "tdi_item_1": {
        "text": "Du findest ein improvisiertes Funksystem, das andere Teams abhoeren kann.",
        "choices": [
            { "text": "Nutzen", "next": "tdi_social_2", "gain_item": "radio_bug" },
            { "text": "Ignorieren", "next": "tdi_social_1" }
        ]
    },

    "tdi_item_2": {
        "text": "In der Kiste ist eine Karte der Insel – aber einige Orte sind markiert, die nicht existieren sollten.",
        "choices": [
            { "text": "Speichern", "next": "tdi_map_use", "gain_item": "false_map" }
        ]
    },

    "tdi_social_1": {
        "text": "Die Camper beginnen sich in Gruppen zu organisieren. Alliances entstehen schnell.",
        "choices": [
            { "text": "Mit Gwen und Leshawna zusammenarbeiten", "next": "tdi_team_good", "karma": 2 },
            { "text": "Mit Duncan und Geoff gehen", "next": "tdi_team_risk", "karma": -1 },
            { "text": "Alleine bleiben", "next": "tdi_alone_1" }
        ]
    },

    "tdi_social_2": {
        "text": "Du hoerst ein Team ueber eine versteckte Challenge sprechen.",
        "choices": [
            { "text": "Abhoeren weiter", "next": "tdi_strategy_1" },
            { "text": "Kontakt abbrechen", "next": "tdi_alone_1", "karma": -1 }
        ]
    },

    "tdi_strategy_1": {
        "text": "Es gibt offenbar eine zweite, geheime Wertung im Spiel.",
        "choices": [
            { "text": "Information teilen", "next": "tdi_team_good", "karma": 2 },
            { "text": "Fuer sich behalten", "next": "tdi_team_risk" }
        ]
    },

    "tdi_team_good": {
        "text": "Die Gruppe arbeitet stabil, aber andere Teams beginnen euch zu misstrauen.",
        "choices": [
            { "text": "Weiter kooperieren", "next": "tdi_challenge_1" }
        ]
    },

    "tdi_team_risk": {
        "text": "Die Allianz ist effektiv, aber intern instabil.",
        "choices": [
            { "text": "Risiko eingehen", "next": "tdi_challenge_1", "karma": -1 }
        ]
    },

    "tdi_alone_1": {
        "text": "Alleine bist du schwerer zu verfolgen, aber auch leichter zu isolieren.",
        "choices": [
            { "text": "Weiter erkunden", "next": "tdi_challenge_1" }
        ]
    },

    "tdi_map_use": {
        "text": "Die Karte zeigt Routen, die niemand offiziell erwaehnt hat.",
        "choices": [
            { "text": "Route nutzen", "next": "tdi_challenge_1" }
        ]
    },

    "tdi_challenge_1": {
        "text": "Chris kuendigt eine erste echte Challenge an: ueberleben im ‚verbotenen Wald‘ der Insel.",
        "choices": [
            { "text": "Vorbereiten", "next": "tdi_forest_1" },
            { "text": "Sofort starten", "next": "tdi_forest_1", "karma": -1 }
        ]
    },

    "tdi_forest_1": {
        "text": "Der Wald veraendert sich leicht, wenn niemand hinsieht. Geraeusche wiederholen sich falsch.",
        "choices": [
            { "text": "Weitergehen", "next": "tdi_forest_2" }
        ]
    },

    "tdi_forest_2": {
        "text": "Ein verlorenes Camp-Equipment erscheint ploetzlich an einem falschen Ort.",
        "choices": [
            { "text": "Untersuchen", "next": "tdi_final_setup" },
            { "text": "Ignorieren", "next": "tdi_final_setup", "karma": -1 }
        ]
    },

    "tdi_final_setup": {
        "text": "Chris: 'Die erste richtige Eliminierung steht kurz bevor... aber diesmal ist etwas anders.'",
        "choices": [
            { "text": "Vorbereiten", "next": "tdi_end_1", "karma": 1 },
            { "text": "Abwarten", "next": "tdi_end_1" }
        ]
    },

    "tdi_end_1": {
        "text": "Die Insel scheint selbst Teil des Spiels zu werden. uebergang zu Kapitel 4 wird aktiviert.",
        "choices": [
            { "text": "Kapitel 4 starten", "next": "c4_start" }
        ]
    },
    "c4_start": {
        "text": "Kapitel 4. Wir kommen langsam naeher zum Ende, hoffentlich hast du nicht zu viele falschen Entscheidungen getroffen.",
        "choices": [
            { "text": "Avatar", "next": "c4_av_start" },
            { "text": "Pinguine aus Madagascar", "next": "c4_pm_start" },
            { "text": "Rick and Morty", "next": "c4_rm_start" },
            { "text": "Darkwing Duck", "next": "c4_dd_start" },
            { "text": "Garfield", "next": "c4_ga_start" }
        ]
    },
};