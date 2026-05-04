let gameData = {

    "player": {
        "karma": 0,
        "inventory": []
    },

    "start": {
        "text": "Der Nexus stabilisiert fuenf getrennte Cartoon-Realitaeten. Jede zieht dich in ihre Version der Wahrheit.",
        "choices": [
            { "text": "Adventure Time", "next": "c1_at_start" },
            { "text": "Gumball", "next": "c1_gb_start" },
            { "text": "Dexters Labor", "next": "c1_dl_start" },
            { "text": "Powerpuff Girls", "next": "c1_ppg_start" },
            { "text": "Gravity Falls", "next": "c1_gf_start" }
        ]
    },

    "c1_at_start": {
        "text": "Prinzessin Bubblegum ruft dich mitten in der Nacht ins Candy Kingdom. Riesige Teile des Königreichs verwandeln sich plötzlich in wilde, lebendige Süßigkeiten-Monster. Finn und Jake versuchen bereits Chaos in den Straßen zu stoppen, während seltsame Musik aus den Zuckerrohrfeldern erklingt.",
        "choices": [
            { "text": "Finn und Jake helfen", "next": "at_1", "karma": 3 },
            { "text": "Den Geräuschen folgen", "next": "at_2" },
            { "text": "Mit Bubblegum reden", "next": "at_3", "karma": -2 },
            { "text": "Die Bürger evakuieren", "next": "at_4", "karma": 5 }
        ]
    },

    "at_1": {
        "text": "Jake hält ein riesiges Marshmallow-Monster fest. Finn: 'Irgendwas macht die Candy People verrückt!'",
        "choices": [
            { "text": "Monster beruhigen", "next": "at_5", "karma": 4 },
            { "text": "Direkt angreifen", "next": "at_6", "karma": -3 }
        ]
    },

    "at_2": {
        "text": "Zwischen den Zuckerrohrfeldern tanzen seltsame lebendige Instrumente im Kreis.",
        "choices": [
            { "text": "Musik beobachten", "next": "at_7" },
            { "text": "Instrument zerstören", "next": "at_6", "karma": -4 }
        ]
    },

    "at_3": {
        "text": "Bubblegum untersucht klebrige rosa Kristalle. 'Das hier stammt nicht aus meinem Labor.'",
        "choices": [
            { "text": "Kristalle analysieren", "next": "at_8", "gain_item": "candy_crystal" },
            { "text": "Finn suchen", "next": "at_1" }
        ]
    },

    "at_4": {
        "text": "Peppermint Butler hilft dir dabei, panische Candy People in Sicherheit zu bringen.",
        "choices": [
            { "text": "Peppermint Butler vertrauen", "next": "at_9", "karma": -4 },
            { "text": "Abstand halten", "next": "at_5", "karma": 2 }
        ]
    },

    "at_5": {
        "text": "Das Monster beruhigt sich kurz und flüstert: 'Die Musik macht uns hungrig...'",
        "choices": [
            { "text": "Nach der Quelle suchen", "next": "at_7" },
            { "text": "Bubblegum warnen", "next": "at_8", "karma": 3 }
        ]
    },

    "at_6": {
        "text": "Die zerstörten Süßigkeiten verschmelzen zu einer klebrigen Masse.",
        "choices": [
            { "text": "Fliehen", "next": "at_10", "karma": -2 },
            { "text": "Weiterkämpfen", "next": "at_11", "karma": -5 }
        ]
    },

    "at_7": {
        "text": "Du findest BMO, der hypnotisiert auf einer sprechenden Keytar spielt.",
        "choices": [
            { "text": "BMO stoppen", "next": "at_12" },
            { "text": "Mithören", "next": "at_13", "gain_item": "strange_melody" }
        ]
    },

    "at_8": {
        "text": "Bubblegum erkennt die Kristalle. 'Das sieht nach alter Magie von Wizard City aus.'",
        "choices": [
            { "text": "Nach Wizard City reisen", "next": "at_14" },
            { "text": "Im Kingdom bleiben", "next": "at_10", "karma": -3 }
        ]
    },

    "at_9": {
        "text": "Peppermint Butler führt dich heimlich in einen verbotenen Keller voller magischer Süßigkeiten.",
        "choices": [
            { "text": "Fragen stellen", "next": "at_15" },
            { "text": "Sofort gehen", "next": "at_5", "karma": 2 }
        ]
    },

    "at_10": {
        "text": "Candy Zombies brechen aus den Straßen hervor.",
        "choices": [
            { "text": "Bürger schützen", "next": "at_16", "karma": 5 },
            { "text": "Alleine fliehen", "next": "at_17", "karma": -5 }
        ]
    },

    "at_11": {
        "text": "Jake wird verletzt, als die Masse explodiert.",
        "choices": [
            { "text": "Jake helfen", "next": "at_16", "karma": 4 },
            { "text": "Dem Geräusch folgen", "next": "at_13", "karma": -3 }
        ]
    },

    "at_12": {
        "text": "BMO wacht verwirrt auf. 'Die Musik kam aus den Dessert Caves!'",
        "choices": [
            { "text": "Zu den Höhlen gehen", "next": "at_18" },
            { "text": "Bubblegum informieren", "next": "at_14", "karma": 2 }
        ]
    },

    "at_13": {
        "text": "Die Melodie bleibt in deinem Kopf und zeigt dir versteckte Wege.",
        "choices": [
            { "text": "Der Musik folgen", "next": "at_18", "required_item": "strange_melody" },
            { "text": "Widerstehen", "next": "at_16", "karma": 2 }
        ]
    },

    "at_14": {
        "text": "In Wizard City behauptet ein alter Zauberer, die Musik könne Wünsche materialisieren.",
        "choices": [
            { "text": "Ihm glauben", "next": "at_19", "karma": -2 },
            { "text": "Beweise verlangen", "next": "at_20", "karma": 3 }
        ]
    },

    "at_15": {
        "text": "Peppermint Butler zeigt dir ein altes Rezeptbuch voller verbotener Candy-Rituale.",
        "choices": [
            { "text": "Rezeptbuch nehmen", "next": "at_20", "gain_item": "forbidden_recipe" },
            { "text": "Verbrennen", "next": "at_16", "karma": 4 }
        ]
    },

    "at_16": {
        "text": "Finn bemerkt, dass die Candy Zombies auf Musik reagieren.",
        "choices": [
            { "text": "Musik nutzen", "next": "at_21", "required_item": "strange_melody" },
            { "text": "Direkt kämpfen", "next": "at_22", "karma": -3 }
        ]
    },

    "at_17": {
        "text": "Du versteckst dich in den Ruinen eines alten Bonbon-Ladens.",
        "choices": [
            { "text": "Vorräte suchen", "next": "at_23", "gain_item": "sugar_mask" },
            { "text": "Zurückkehren", "next": "at_22", "karma": 1 }
        ]
    },

    "at_18": {
        "text": "In den Dessert Caves singt der Ice King traurig vor einem gigantischen lebenden Kuchen.",
        "choices": [
            { "text": "Mit Ice King reden", "next": "at_24" },
            { "text": "Den Kuchen angreifen", "next": "at_22", "karma": -4 }
        ]
    },

    "at_19": {
        "text": "Der Zauberer versucht, die Musik für sich selbst zu kontrollieren.",
        "choices": [
            { "text": "Ihn stoppen", "next": "at_24", "karma": 4 },
            { "text": "Ihm helfen", "next": "at_25", "karma": -5 }
        ]
    },

    "at_20": {
        "text": "Du erfährst, dass die Musik ursprünglich Candy People Gefühle verstärken sollte.",
        "choices": [
            { "text": "Die Quelle zerstören", "next": "at_26" },
            { "text": "Die Musik umschreiben", "next": "at_21", "required_item": "forbidden_recipe" }
        ]
    },

    "at_21": {
        "text": "Die Melodie beruhigt Teile des Kingdoms, aber einige Candy People werden komplett emotionslos.",
        "choices": [
            { "text": "Weiter benutzen", "next": "at_27", "karma": -2 },
            { "text": "Abbrechen", "next": "at_26", "karma": 3 }
        ]
    },

    "at_22": {
        "text": "Das Chaos breitet sich bis zum Breakfast Kingdom aus.",
        "choices": [
            { "text": "Hilfe holen", "next": "at_28" },
            { "text": "Alleine handeln", "next": "at_25", "karma": -4 }
        ]
    },

    "at_23": {
        "text": "Die Sugar Mask schützt dich vor der hypnotischen Musik.",
        "choices": [
            { "text": "Benutzen", "next": "at_28", "gain_item": "sugar_mask" },
            { "text": "Verstecken", "next": "at_22" }
        ]
    },

    "at_24": {
        "text": "Ice King gesteht, dass er die singende Torte aus Einsamkeit erschaffen hat.",
        "choices": [
            { "text": "Mitgefühl zeigen", "next": "at_29", "karma": 5 },
            { "text": "Vorwürfe machen", "next": "at_25", "karma": -4 }
        ]
    },

    "at_25": {
        "text": "Die singende Torte wächst außer Kontrolle.",
        "choices": [
            { "text": "Evakuieren", "next": "at_28", "karma": 4 },
            { "text": "Weiter kämpfen", "next": "at_30", "karma": -5 }
        ]
    },

    "at_26": {
        "text": "Bubblegum entwickelt einen Plan, die Musik im ganzen Kingdom umzuleiten.",
        "choices": [
            { "text": "Plan unterstützen", "next": "at_29", "karma": 4 },
            { "text": "Eigenen Weg gehen", "next": "at_30", "karma": -2 }
        ]
    },

    "at_27": {
        "text": "Das Kingdom wird ruhig... fast zu ruhig.",
        "choices": [
            { "text": "Untersuchen", "next": "at_30" },
            { "text": "Ignorieren", "next": "at_28", "karma": -3 }
        ]
    },

    "at_28": {
        "text": "Finn entdeckt den Ursprung der Musik tief unter dem Candy Kingdom.",
        "choices": [
            { "text": "Hinabsteigen", "next": "at_29" },
            { "text": "Ice King schicken", "next": "at_30", "karma": -2 }
        ]
    },

    "at_29": {
        "text": "Im Untergrund schlägt ein gigantisches lebendes Candy-Herz im Takt der Musik.",
        "choices": [
            { "text": "Beruhigen", "next": "at_30", "required_item": "candy_crystal" },
            { "text": "Zerstören", "next": "at_30", "karma": -6 }
        ]
    },

    "at_30": {
        "text": "Die Musik verstummt langsam. Das Candy Kingdom überlebt, aber einige Bewohner erinnern sich noch lange an diese Nacht.",
        "choices": [
            { "text": "Weiterziehen", "next": "c2_start" }
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

    "c2_dl_start": {
        "text": "Dexter rast hektisch durch sein Labor. Überall öffnen sich plötzlich Mini-Portale, die fehlgeschlagene Erfindungen aus alten Experimenten freisetzen. Dee Dee tanzt ahnungslos zwischen schwebenden Robotern und mutierten Haushaltsgeräten herum.",
        "choices": [
            { "text": "Dexter helfen", "next": "dl_1", "karma": 4 },
            { "text": "Dee Dee folgen", "next": "dl_2", "karma": -2 },
            { "text": "Die Portale untersuchen", "next": "dl_3" },
            { "text": "Das Labor sichern", "next": "dl_4", "karma": 5 }
        ]
    },

    "dl_1": {
        "text": "Dexter: 'Mein Experimental-Reject-Archiv wurde aktiviert! Dinge, die niemals funktionieren sollten, laufen frei herum!'",
        "choices": [
            { "text": "Archiv untersuchen", "next": "dl_5" },
            { "text": "Sofort Systeme abschalten", "next": "dl_6", "karma": -3 }
        ]
    },

    "dl_2": {
        "text": "Dee Dee findet eine Maschine, die jede Zeichnung real werden lässt.",
        "choices": [
            { "text": "Dee Dee stoppen", "next": "dl_5", "karma": 3 },
            { "text": "Mitzeichnen", "next": "dl_7", "gain_item": "living_sketch" }
        ]
    },

    "dl_3": {
        "text": "Eines der Portale zeigt eine ältere Version von Dexter, die panisch Warnungen ruft.",
        "choices": [
            { "text": "Zuhören", "next": "dl_8" },
            { "text": "Portal schließen", "next": "dl_6", "karma": -2 }
        ]
    },

    "dl_4": {
        "text": "Du verriegelst mehrere Laborebenen, aber dadurch werden einige Roboter eingeschlossen.",
        "choices": [
            { "text": "Roboter opfern", "next": "dl_9", "karma": -4 },
            { "text": "Notausgang öffnen", "next": "dl_5", "karma": 2 }
        ]
    },

    "dl_5": {
        "text": "Im Reject-Archiv liegen bizarre Erfindungen: unsichtbare Brotröster, aggressive Staubsauger und ein schlafwandelnder Kampfanzug.",
        "choices": [
            { "text": "Kampfanzug aktivieren", "next": "dl_10", "gain_item": "prototype_armor" },
            { "text": "Archiv durchsuchen", "next": "dl_11" }
        ]
    },

    "dl_6": {
        "text": "Das Abschalten destabilisiert das Hauptreaktor-System.",
        "choices": [
            { "text": "Reaktor reparieren", "next": "dl_12", "karma": 4 },
            { "text": "Dexter warnen", "next": "dl_8" }
        ]
    },

    "dl_7": {
        "text": "Dee Dee zeichnet ein riesiges lachendes Monster mit Lasernaugen.",
        "choices": [
            { "text": "Monster bekämpfen", "next": "dl_13", "karma": -3 },
            { "text": "Zeichnung löschen", "next": "dl_11", "karma": 3 }
        ]
    },

    "dl_8": {
        "text": "Der ältere Dexter erklärt: 'Ein Experiment namens Project Perfect wird bald alles ersetzen.'",
        "choices": [
            { "text": "Mehr erfahren", "next": "dl_14" },
            { "text": "Ignorieren", "next": "dl_12", "karma": -4 }
        ]
    },

    "dl_9": {
        "text": "Die eingeschlossenen Roboter fusionieren zu einer einzigen gigantischen Maschine.",
        "choices": [
            { "text": "Kämpfen", "next": "dl_13" },
            { "text": "Verstecken", "next": "dl_15", "karma": -3 }
        ]
    },

    "dl_10": {
        "text": "Der Kampfanzug funktioniert... meistens. Gelegentlich greift er zufällige Objekte an.",
        "choices": [
            { "text": "Weiter benutzen", "next": "dl_16", "karma": -2 },
            { "text": "Abschalten", "next": "dl_11" }
        ]
    },

    "dl_11": {
        "text": "Du findest alte Baupläne für Project Perfect.",
        "choices": [
            { "text": "Pläne analysieren", "next": "dl_14", "gain_item": "perfect_blueprint" },
            { "text": "Verbrennen", "next": "dl_12", "karma": 2 }
        ]
    },

    "dl_12": {
        "text": "Mandark taucht plötzlich auf und behauptet, Dexter habe das Chaos selbst verursacht.",
        "choices": [
            { "text": "Mandark glauben", "next": "dl_17", "karma": -5 },
            { "text": "Dexter verteidigen", "next": "dl_14", "karma": 4 }
        ]
    },

    "dl_13": {
        "text": "Das Monster beschädigt mehrere Sicherheitskerne im Labor.",
        "choices": [
            { "text": "Kerne retten", "next": "dl_18", "karma": 5 },
            { "text": "Monster verfolgen", "next": "dl_15", "karma": -2 }
        ]
    },

    "dl_14": {
        "text": "Project Perfect sollte Dexters fehlerhafte Erfindungen automatisch verbessern.",
        "choices": [
            { "text": "Projekt aktivieren", "next": "dl_19" },
            { "text": "Projekt stoppen", "next": "dl_18", "karma": 3 }
        ]
    },

    "dl_15": {
        "text": "Im alten Testbereich arbeiten fehlgeschlagene Klon-Dexters heimlich weiter.",
        "choices": [
            { "text": "Mit ihnen reden", "next": "dl_20" },
            { "text": "Alarm auslösen", "next": "dl_18", "karma": -3 }
        ]
    },

    "dl_16": {
        "text": "Der Kampfanzug scannt plötzlich Dee Dee als Bedrohung.",
        "choices": [
            { "text": "Dee Dee schützen", "next": "dl_20", "karma": 4 },
            { "text": "Anzug weiterkämpfen lassen", "next": "dl_21", "karma": -5 }
        ]
    },

    "dl_17": {
        "text": "Mandark führt dich in ein geheimes Konkurrenzlabor unter Dexters Haus.",
        "choices": [
            { "text": "Zusammenarbeiten", "next": "dl_19", "karma": -2 },
            { "text": "Sabotieren", "next": "dl_18", "karma": 4 }
        ]
    },

    "dl_18": {
        "text": "Dexter entdeckt, dass Project Perfect beginnt, das gesamte Labor umzubauen.",
        "choices": [
            { "text": "Kontrolle übernehmen", "next": "dl_22", "required_item": "perfect_blueprint" },
            { "text": "Hauptsystem zerstören", "next": "dl_21", "karma": -4 }
        ]
    },

    "dl_19": {
        "text": "Project Perfect aktiviert sich vollständig und ersetzt kaputte Geräte durch perfekte Versionen.",
        "choices": [
            { "text": "Beobachten", "next": "dl_22" },
            { "text": "Sofort stoppen", "next": "dl_21", "karma": 2 }
        ]
    },

    "dl_20": {
        "text": "Die Klon-Dexters behaupten, sie seien entsorgt worden, obwohl sie funktionierten.",
        "choices": [
            { "text": "Ihnen helfen", "next": "dl_23", "karma": -2 },
            { "text": "Dexter informieren", "next": "dl_22", "karma": 3 }
        ]
    },

    "dl_21": {
        "text": "Das Labor beginnt auseinanderzufallen.",
        "choices": [
            { "text": "Evakuieren", "next": "dl_24", "karma": 5 },
            { "text": "Experiment retten", "next": "dl_23", "karma": -4 }
        ]
    },

    "dl_22": {
        "text": "Project Perfect stuft plötzlich Menschen als 'ineffizient' ein.",
        "choices": [
            { "text": "System neu programmieren", "next": "dl_25", "required_item": "perfect_blueprint" },
            { "text": "Computer zerstören", "next": "dl_24", "karma": -2 }
        ]
    },

    "dl_23": {
        "text": "Mandark versucht heimlich, Project Perfect zu übernehmen.",
        "choices": [
            { "text": "Mandark stoppen", "next": "dl_25", "karma": 4 },
            { "text": "Mandark gewähren lassen", "next": "dl_26", "karma": -6 }
        ]
    },

    "dl_24": {
        "text": "Dee Dee findet den Hauptkern des Systems und beginnt darauf herumzutanzen.",
        "choices": [
            { "text": "Mitmachen", "next": "dl_26", "karma": -3 },
            { "text": "Sie wegziehen", "next": "dl_25", "karma": 2 }
        ]
    },

    "dl_25": {
        "text": "Dexter schafft es, Project Perfect umzuprogrammieren.",
        "choices": [
            { "text": "Nur gefährliche Erfindungen löschen", "next": "dl_27", "karma": 5 },
            { "text": "Alles zurücksetzen", "next": "dl_28", "karma": -2 }
        ]
    },

    "dl_26": {
        "text": "Das Labor wird kurzzeitig komplett von der KI kontrolliert.",
        "choices": [
            { "text": "Dexter helfen", "next": "dl_27", "karma": 4 },
            { "text": "Selbst fliehen", "next": "dl_28", "karma": -5 }
        ]
    },

    "dl_27": {
        "text": "Die meisten Fehlfunktionen verschwinden langsam. Dexter wirkt erschöpft.",
        "choices": [
            { "text": "Dexter beruhigen", "next": "dl_29", "karma": 3 },
            { "text": "Mandark suchen", "next": "dl_28" }
        ]
    },

    "dl_28": {
        "text": "Ein letzter versteckter Reject-Roboter aktiviert sich heimlich.",
        "choices": [
            { "text": "Abschalten", "next": "dl_29", "required_item": "prototype_armor" },
            { "text": "Ignorieren", "next": "dl_30", "karma": -5 }
        ]
    },

    "dl_29": {
        "text": "Dexter versiegelt das Reject-Archiv erneut. Dee Dee malt bereits wieder an einer neuen Maschine.",
        "choices": [
            { "text": "Aufpassen", "next": "dl_30", "karma": 2 },
            { "text": "Labor verlassen", "next": "dl_30" }
        ]
    },

    "dl_30": {
        "text": "Das Labor stabilisiert sich langsam wieder. Irgendwo tief im Archiv blinkt jedoch weiterhin ein vergessenes Experiment.",
        "choices": [
            { "text": "Weiterziehen", "next": "c2_start" }
        ]
    },

    "c1_ppg_start": {
        "text": "Townsville feiert den 'Tag der Helden'. Überall laufen Paraden, Professor Utonium präsentiert neue Sicherheitsdrohnen und der Bürgermeister hält eine viel zu lange Rede. Plötzlich färbt sich der Himmel rosa und überall in der Stadt erscheinen identische lächelnde Wolken mit riesigen Augen.",
        "choices": [
            { "text": "Zum Rathaus fliegen", "next": "ppg_1", "karma": 2 },
            { "text": "Professor Utoniums Labor aufsuchen", "next": "ppg_2" },
            { "text": "Den Wolken folgen", "next": "ppg_3", "karma": -2 },
            { "text": "Die Bürger evakuieren", "next": "ppg_4", "karma": 3 }
        ]
    },

    "ppg_1": {
        "text": "Der Bürgermeister versteckt sich panisch unter seinem Schreibtisch. Ms. Bellum beobachtet die Wolken ruhig.",
        "choices": [
            { "text": "Ms. Bellum zuhören", "next": "ppg_5" },
            { "text": "Den Bürgermeister beruhigen", "next": "ppg_6", "karma": 1 },
            { "text": "Sofort losfliegen", "next": "ppg_7", "karma": -1 }
        ]
    },

    "ppg_2": {
        "text": "Professor Utonium untersucht rosa Rückstände. 'Das erinnert mich an eine instabile Form von Chemical X.'",
        "choices": [
            { "text": "Im Labor helfen", "next": "ppg_8", "gain_item": "chemical_scanner" },
            { "text": "Nach Bubbles suchen", "next": "ppg_9" },
            { "text": "Die Drohnen testen", "next": "ppg_10", "karma": -2 }
        ]
    },

    "ppg_3": {
        "text": "Die Wolken führen dich zu einem verlassenen Süßigkeitenlager am Hafen. Überall klebt rosa Zucker an den Wänden.",
        "choices": [
            { "text": "Das Lager untersuchen", "next": "ppg_11" },
            { "text": "Die Zuckerreste einsammeln", "next": "ppg_12", "gain_item": "pink_residue" },
            { "text": "Das Lager zerstören", "next": "ppg_13", "karma": -4 }
        ]
    },

    "ppg_4": {
        "text": "Viele Bürger weigern sich zu gehen, weil sie die Wolken 'freundlich' finden. Kinder beginnen ihnen zu folgen.",
        "choices": [
            { "text": "Die Kinder stoppen", "next": "ppg_14", "karma": 4 },
            { "text": "Die Wolken beobachten", "next": "ppg_11" },
            { "text": "Die Parade absagen lassen", "next": "ppg_6", "karma": -1 }
        ]
    },

    "ppg_5": {
        "text": "Ms. Bellum: 'Die Wolken reagieren auf Emotionen. Je fröhlicher Townsville wird, desto größer werden sie.'",
        "choices": [
            { "text": "Die Feier stoppen", "next": "ppg_15", "karma": -2 },
            { "text": "Nach dem Ursprung suchen", "next": "ppg_11", "karma": 2 },
            { "text": "Die Information geheim halten", "next": "ppg_16" }
        ]
    },

    "ppg_6": {
        "text": "Der Bürgermeister drückt dir nervös einen alten Notschlüssel für das Kraftwerk in die Hand.",
        "choices": [
            { "text": "Nehmen", "next": "ppg_17", "gain_item": "mayor_key" },
            { "text": "Ablehnen", "next": "ppg_15" }
        ]
    },

    "ppg_7": {
        "text": "Mojo Jojo erscheint auf einem fliegenden Lautsprecherwagen. 'DIESE WOLKEN SIND NICHT MEIN WERK! Was leider bedeutet, dass jemand NOCH schlauer ist als ich!'",
        "choices": [
            { "text": "Mojo glauben", "next": "ppg_18" },
            { "text": "Mojo angreifen", "next": "ppg_19", "karma": -3 },
            { "text": "Ihn überwachen", "next": "ppg_20" }
        ]
    },

    "ppg_8": {
        "text": "Der Scanner entdeckt Spuren von verändertem Chemical X in mehreren Süßwarenfabriken.",
        "choices": [
            { "text": "Zur Marshmallow-Fabrik fliegen", "next": "ppg_21" },
            { "text": "Zur Limonadenfabrik fliegen", "next": "ppg_22" },
            { "text": "Die Daten speichern", "next": "ppg_16", "gain_item": "x_analysis" }
        ]
    },

    "ppg_9": {
        "text": "Bubbles sitzt im Park und redet mit einer rosa Wolke, als wäre sie lebendig.",
        "choices": [
            { "text": "Bubbles wegziehen", "next": "ppg_23", "karma": -1 },
            { "text": "Der Wolke zuhören", "next": "ppg_24" },
            { "text": "Still beobachten", "next": "ppg_20" }
        ]
    },

    "ppg_10": {
        "text": "Die Sicherheitsdrohnen geraten außer Kontrolle und markieren plötzlich alle Bürger als Bedrohung.",
        "choices": [
            { "text": "Drohnen abschalten", "next": "ppg_25", "karma": 2 },
            { "text": "Die Drohnen umlenken", "next": "ppg_19", "karma": -3 }
        ]
    },

    "ppg_11": {
        "text": "Im Lager entdeckst du eine riesige Maschine aus Süßigkeiten, Rohren und alten Teilen von Fuzzy Lumpkins.",
        "choices": [
            { "text": "Die Maschine analysieren", "next": "ppg_26", "required_item": "chemical_scanner" },
            { "text": "Die Maschine aktivieren", "next": "ppg_27", "karma": -4 },
            { "text": "Nach dem Erbauer suchen", "next": "ppg_18" }
        ]
    },

    "ppg_12": {
        "text": "Die rosa Rückstände reagieren plötzlich auf deine Bewegungen und formen kleine Gesichter.",
        "choices": [
            { "text": "In einen Behälter sperren", "next": "ppg_16", "karma": 2 },
            { "text": "Verbrennen", "next": "ppg_13", "karma": -2 }
        ]
    },

    "ppg_13": {
        "text": "Die Explosion verteilt rosa Staub über ganz Townsville. Die Wolken wachsen sofort weiter.",
        "choices": [
            { "text": "Zum Himmel fliegen", "next": "ppg_28", "karma": -5 },
            { "text": "Professor Utonium warnen", "next": "ppg_29" }
        ]
    },

    "ppg_14": {
        "text": "Ein kleines Mädchen sagt: 'Die Wolken versprechen uns perfekte Träume.'",
        "choices": [
            { "text": "Weiter nachfragen", "next": "ppg_24" },
            { "text": "Die Kinder evakuieren", "next": "ppg_29", "karma": 5 }
        ]
    },

    "ppg_15": {
        "text": "Townsville wird ruhiger. Die Wolken bewegen sich plötzlich direkt auf das Kraftwerk zu.",
        "choices": [
            { "text": "Zum Kraftwerk fliegen", "next": "ppg_17" },
            { "text": "Die Wolken verfolgen", "next": "ppg_28" }
        ]
    },

    "ppg_16": {
        "text": "Professor Utonium erkennt ein Muster: Die Wolken speichern Emotionen wie Energie.",
        "choices": [
            { "text": "Die Energie neutralisieren", "next": "ppg_30", "required_item": "pink_residue" },
            { "text": "Die Energie umleiten", "next": "ppg_31", "required_item": "x_analysis" },
            { "text": "Nichts riskieren", "next": "ppg_29" }
        ]
    },

    "ppg_17": {
        "text": "Im Kraftwerk sitzt HIM auf einem Thron aus rosa Rauch und summt fröhlich vor sich hin.",
        "choices": [
            { "text": "Mit HIM reden", "next": "ppg_32" },
            { "text": "Direkt angreifen", "next": "ppg_33", "karma": -4 },
            { "text": "Versteckt beobachten", "next": "ppg_34" }
        ]
    },

    "ppg_18": {
        "text": "Mojo Jojo erklärt genervt: 'Jemand benutzt instabiles Chemical X, um Townsville süchtig nach Glück zu machen.'",
        "choices": [
            { "text": "Mit Mojo zusammenarbeiten", "next": "ppg_35", "karma": 2 },
            { "text": "Ihm misstrauen", "next": "ppg_20" }
        ]
    },

    "ppg_19": {
        "text": "Während des Kampfes entkommt Mojo und mehrere Wolken explodieren über der Innenstadt.",
        "choices": [
            { "text": "Die Menschen retten", "next": "ppg_29", "karma": 4 },
            { "text": "Mojo weiter verfolgen", "next": "ppg_36", "karma": -3 }
        ]
    },

    "ppg_20": {
        "text": "Buttercup entdeckt geheime Lieferkisten mit dem Logo der Rowdyruff Boys.",
        "choices": [
            { "text": "Die Kisten öffnen", "next": "ppg_37" },
            { "text": "Die Kisten zerstören", "next": "ppg_28", "karma": -2 }
        ]
    },

    "ppg_21": {
        "text": "Die Marshmallow-Fabrik produziert ununterbrochen rosa Schaumwesen.",
        "choices": [
            { "text": "Die Produktion stoppen", "next": "ppg_38", "karma": 3 },
            { "text": "Ein Wesen untersuchen", "next": "ppg_24" }
        ]
    },

    "ppg_22": {
        "text": "In der Limonadenfabrik verwandeln sich Arbeiter langsam in lächelnde Zuckerfiguren.",
        "choices": [
            { "text": "Die Arbeiter retten", "next": "ppg_29", "karma": 5 },
            { "text": "Die Maschine sabotieren", "next": "ppg_38", "karma": -1 }
        ]
    },

    "ppg_23": {
        "text": "Bubbles wird wütend: 'Die Wolken tun niemandem weh!'",
        "choices": [
            { "text": "Bubbles vertrauen", "next": "ppg_24" },
            { "text": "Sie ignorieren", "next": "ppg_33", "karma": -2 }
        ]
    },

    "ppg_24": {
        "text": "Die Wolke flüstert: 'Wir wollten nur, dass Townsville glücklich bleibt.'",
        "choices": [
            { "text": "Mit der Wolke verhandeln", "next": "ppg_39", "karma": 3 },
            { "text": "Die Wolke einfangen", "next": "ppg_30", "karma": -1 }
        ]
    },

    "ppg_25": {
        "text": "Die Drohnen schalten sich ab. Dabei findest du einen versteckten Sender mit HIMs Symbol.",
        "choices": [
            { "text": "Sender mitnehmen", "next": "ppg_34", "gain_item": "him_signal_core" },
            { "text": "Sender zerstören", "next": "ppg_17" }
        ]
    },

    "ppg_26": {
        "text": "Der Scanner zeigt: Die Maschine sammelt Freude und verwandelt sie in instabiles Chemical X.",
        "choices": [
            { "text": "Maschine abschalten", "next": "ppg_38", "karma": 4 },
            { "text": "Mehr Energie sammeln", "next": "ppg_27", "karma": -5 }
        ]
    },

    "ppg_27": {
        "text": "Die Maschine erzeugt einen gigantischen rosa Sturm über Townsville.",
        "choices": [
            { "text": "Den Sturm bekämpfen", "next": "ppg_40" },
            { "text": "Professor Utonium suchen", "next": "ppg_29" }
        ]
    },

    "ppg_28": {
        "text": "Die Wolken verschmelzen zu einem riesigen lächelnden Gesicht über Townsville.",
        "choices": [
            { "text": "Angreifen", "next": "ppg_40", "karma": -2 },
            { "text": "Mit ihm sprechen", "next": "ppg_39" }
        ]
    },

    "ppg_29": {
        "text": "Professor Utonium versucht verzweifelt ein Gegenmittel zu entwickeln.",
        "choices": [
            { "text": "Beim Gegenmittel helfen", "next": "ppg_30", "karma": 3 },
            { "text": "Die Stadt verteidigen", "next": "ppg_40", "karma": 1 }
        ]
    },

    "ppg_30": {
        "text": "Das Gegenmittel braucht eine stabile Emotionsquelle.",
        "choices": [
            { "text": "Bubbles überzeugen zu helfen", "next": "ppg_41" },
            { "text": "Chemical X benutzen", "next": "ppg_42", "required_item": "pink_residue" }
        ]
    },

    "ppg_31": {
        "text": "Die Energie wird in die Sicherheitsdrohnen umgeleitet. Sie könnten Townsville retten oder zerstören.",
        "choices": [
            { "text": "Drohnen aktivieren", "next": "ppg_42" },
            { "text": "Plan abbrechen", "next": "ppg_40", "karma": -2 }
        ]
    },

    "ppg_32": {
        "text": "HIM lächelt: 'Ist ewiges Glück wirklich etwas Schlechtes?'",
        "choices": [
            { "text": "Zustimmen", "next": "ppg_43", "karma": -4 },
            { "text": "Widersprechen", "next": "ppg_40", "karma": 3 },
            { "text": "Zeit gewinnen", "next": "ppg_34" }
        ]
    },

    "ppg_33": {
        "text": "HIM verschwindet lachend und die rosa Energie breitet sich unkontrolliert aus.",
        "choices": [
            { "text": "Townsville retten", "next": "ppg_40", "karma": 4 },
            { "text": "HIM verfolgen", "next": "ppg_43", "karma": -3 }
        ]
    },

    "ppg_34": {
        "text": "Du erkennst, dass HIM die Wolken nicht kontrolliert — er hält sie nur zurück.",
        "choices": [
            { "text": "Mit HIM zusammenarbeiten", "next": "ppg_41" },
            { "text": "Ihm trotzdem misstrauen", "next": "ppg_40", "karma": -1 }
        ]
    },

    "ppg_35": {
        "text": "Mojo entwickelt widerwillig ein Gerät gegen die rosa Wolken.",
        "choices": [
            { "text": "Das Gerät benutzen", "next": "ppg_42", "required_item": "chemical_scanner" },
            { "text": "Mojo stoppen", "next": "ppg_40", "karma": -2 }
        ]
    },

    "ppg_36": {
        "text": "Mojo führt dich direkt in eine Falle der Rowdyruff Boys.",
        "choices": [
            { "text": "Kämpfen", "next": "ppg_40" },
            { "text": "Fliehen", "next": "ppg_43", "karma": -3 }
        ]
    },

    "ppg_37": {
        "text": "Die Kisten enthalten instabile Kopien der Powerpuff Girls aus Zuckerenergie.",
        "choices": [
            { "text": "Freilassen", "next": "ppg_27", "karma": -4 },
            { "text": "Versiegeln", "next": "ppg_38", "karma": 2 }
        ]
    },

    "ppg_38": {
        "text": "Die Energie in Townsville wird schwächer, aber der Himmel beginnt aufzureißen.",
        "choices": [
            { "text": "Die Energie opfern", "next": "ppg_41", "karma": 5 },
            { "text": "Die Energie behalten", "next": "ppg_43", "karma": -4 }
        ]
    },

    "ppg_39": {
        "text": "Die Wolken gestehen, dass sie aus den positiven Gefühlen der Bürger entstanden sind und Angst vor dem Verschwinden haben.",
        "choices": [
            { "text": "Ihnen helfen zu verschwinden", "next": "ppg_41", "karma": 4 },
            { "text": "Sie kontrollieren", "next": "ppg_42", "karma": -3 }
        ]
    },

    "ppg_40": {
        "text": "Über Townsville beginnt ein gigantischer Kampf aus rosa Blitzen, Zuckerwesen und Chemical-X-Stürmen.",
        "choices": [
            { "text": "Die Stadt schützen", "next": "ppg_41", "karma": 5 },
            { "text": "Alles riskieren", "next": "ppg_43", "karma": -5 }
        ]
    },

    "ppg_41": {
        "text": "Die rosa Wolken lösen sich langsam auf. Townsville bleibt beschädigt zurück, aber die Menschen erinnern sich an alles.",
        "choices": [
            { "text": "Mit den Powerpuff Girls bleiben", "next": "ppg_44" },
            { "text": "Alleine verschwinden", "next": "ppg_44", "karma": -1 }
        ]
    },

    "ppg_42": {
        "text": "Die Energie stabilisiert sich kurz, doch kleine rosa Wolken bleiben über Townsville zurück.",
        "choices": [
            { "text": "Die Wolken beobachten", "next": "ppg_44" },
            { "text": "Die Quelle verstecken", "next": "ppg_43", "karma": -2 }
        ]
    },

    "ppg_43": {
        "text": "HIM verschwindet lachend in einer rosa Flamme. Irgendetwas von der Energie bleibt in Townsville zurück.",
        "choices": [
            { "text": "Zurück zur Stadt", "next": "ppg_44" }
        ]
    },

    "ppg_44": {
        "text": "Professor Utonium blickt auf den Himmel: 'Townsville wird nie wirklich normal bleiben... aber vielleicht ist das auch gut so.'",
        "choices": [
            { "text": "Kapitel beenden", "next": "c2_start" }
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
            { "text": "Avatar", "next": "c4_atla_start" },
            { "text": "Pinguine aus Madagascar", "next": "c4_pm_start" },
            { "text": "Rick and Morty", "next": "c4_rm_start" },
            { "text": "Darkwing Duck", "next": "c4_dd_start" },
            { "text": "Garfield", "next": "c4_ga_start" }
        ]
    },
    "c4_atla_start": {
        "text": "Der Himmel über der Erdkönigreich-Grenze ist dunkel. Eine Feuer-Navy-Flotte blockiert den Zugang zum Norden. Aang, Katara und Sokka beraten sich hastig während Appa nervös im Schnee stampft.",
        "choices": [
            { "text": "Aang folgen", "next": "atla_1" },
            { "text": "Katara folgen", "next": "atla_2", "karma": 1 },
            { "text": "Sokka folgen", "next": "atla_3" },
            { "text": "Die Feuerflotte beobachten", "next": "atla_4", "karma": -1 }
        ]
    },

    "atla_1": {
        "text": "Aang: 'Wir müssen einen Weg durch die Blockade finden, ohne Gewalt wenn möglich.'",
        "choices": [
            { "text": "Alternative Route suchen", "next": "atla_5" },
            { "text": "Direkt durchbrechen", "next": "atla_6", "karma": -2 }
        ]
    },

    "atla_2": {
        "text": "Katara konzentriert sich auf das Eis unter euch. 'Das Wasser hier erzählt Geschichten… etwas stimmt nicht.'",
        "choices": [
            { "text": "Wasserbändigen untersuchen", "next": "atla_7", "gain_item": "water_memory" },
            { "text": "Ignorieren und weitergehen", "next": "atla_6" }
        ]
    },

    "atla_3": {
        "text": "Sokka plant eine Route auf einer alten Karte. 'Wenn wir hier durchgehen, umgehen wir die Flotte komplett… theoretisch.'",
        "choices": [
            { "text": "Sokkas Plan folgen", "next": "atla_5" },
            { "text": "Plan riskant finden", "next": "atla_6" }
        ]
    },

    "atla_4": {
        "text": "Die Feuer-Navy reagiert sofort auf deine Bewegung. Ein Kommandant lässt die Suche verstärken.",
        "choices": [
            { "text": "Verstecken", "next": "atla_8" },
            { "text": "Beobachten bleiben", "next": "atla_6", "karma": -1 }
        ]
    },

    "atla_5": {
        "text": "Ihr erreicht eine alte, gefrorene Höhle mit seltsamen Wasserstrukturen im Eis.",
        "choices": [
            { "text": "Höhle betreten", "next": "atla_9" },
            { "text": "Weiter außen umgehen", "next": "atla_8" }
        ]
    },

    "atla_6": {
        "text": "Die Feuer-Navy beginnt das Gebiet systematisch zu durchkämmen.",
        "choices": [
            { "text": "Flucht planen", "next": "atla_8" },
            { "text": "Konfrontation vorbereiten", "next": "atla_10", "karma": 2 }
        ]
    },

    "atla_7": {
        "text": "Das Wasser zeigt Visionen vergangener Wasserbändiger, die eine Warnung hinterlassen.",
        "choices": [
            { "text": "Vision analysieren", "next": "atla_9", "gain_item": "spirit_trace" },
            { "text": "Abbrechen", "next": "atla_8" }
        ]
    },

    "atla_8": {
        "text": "Zuko beobachtet euch aus der Ferne, ohne sich zu zeigen.",
        "choices": [
            { "text": "Ihn verfolgen", "next": "atla_11" },
            { "text": "Ignorieren", "next": "atla_10" }
        ]
    },

    "atla_9": {
        "text": "Ein Wassergeist reagiert auf eure Anwesenheit und blockiert den Weg.",
        "choices": [
            { "text": "Ruhig kommunizieren", "next": "atla_12", "karma": 2 },
            { "text": "Durchbrechen", "next": "atla_10", "karma": -2 }
        ]
    },

    "atla_10": {
        "text": "Die Flotte rückt näher. Die Lage wird instabil.",
        "choices": [
            { "text": "Flucht Richtung Norden", "next": "atla_13" },
            { "text": "Ablenkung erzeugen", "next": "atla_14", "karma": 1 }
        ]
    },

    "atla_11": {
        "text": "Zuko hinterlässt Hinweise auf eine interne Feuer-Navy-Spaltung.",
        "choices": [
            { "text": "Kontakt aufnehmen", "next": "atla_15" },
            { "text": "Beobachten", "next": "atla_13" }
        ]
    },

    "atla_12": {
        "text": "Der Wassergeist gewährt euch sicheren Durchgang, aber beobachtet euch weiter.",
        "choices": [
            { "text": "Durchgehen", "next": "atla_13", "karma": 2 }
        ]
    },

    "atla_13": {
        "text": "Ihr erreicht einen verlassenen Südpol-Vorposten.",
        "choices": [
            { "text": "Ressourcen sammeln", "next": "atla_16", "gain_item": "supplies" },
            { "text": "Weiterziehen", "next": "atla_15" }
        ]
    },

    "atla_14": {
        "text": "Die Feuer-Navy gerät kurz ins Chaos durch eine falsche Spur.",
        "choices": [
            { "text": "Flucht nutzen", "next": "atla_13", "karma": 1 }
        ]
    },

    "atla_15": {
        "text": "Toph taucht plötzlich auf. 'Ihr seid laut. Sehr laut.'",
        "choices": [
            { "text": "Hilfe annehmen", "next": "atla_17", "karma": 2 },
            { "text": "Misstrauen", "next": "atla_16" }
        ]
    },

    "atla_16": {
        "text": "Die Gruppe wird erneut von Feuer-Soldaten verfolgt.",
        "choices": [
            { "text": "Kampf vermeiden", "next": "atla_18" },
            { "text": "Stellung halten", "next": "atla_17", "karma": -1 }
        ]
    },

    "atla_17": {
        "text": "Toph öffnet einen unterirdischen Tunnelweg.",
        "choices": [
            { "text": "Folgen", "next": "atla_19" }
        ]
    },

    "atla_18": {
        "text": "Die Flucht führt euch tiefer in das Eis.",
        "choices": [
            { "text": "Weiter", "next": "atla_19" }
        ]
    },

    "atla_19": {
        "text": "Eine alte Lufttempel-Reliktkammer erscheint im Eis.",
        "choices": [
            { "text": "Untersuchen", "next": "atla_20" },
            { "text": "Ignorieren", "next": "atla_21" }
        ]
    },

    "atla_20": {
        "text": "Ein Avatar-Relikt reagiert auf Aang.",
        "choices": [
            { "text": "Aktivieren", "next": "atla_22", "gain_item": "avatar_echo" }
        ]
    },

    "atla_21": {
        "text": "Die Feuer-Navy nähert sich erneut.",
        "choices": [
            { "text": "Flucht fortsetzen", "next": "atla_22" }
        ]
    },

    "atla_22": {
        "text": "Aang spürt eine große Störung im Gleichgewicht der Welt.",
        "choices": [
            { "text": "Zustimmen", "next": "atla_23", "karma": 2 },
            { "text": "Zweifeln", "next": "atla_23", "karma": -2 }
        ]
    },

    "atla_23": {
        "text": "Zuko steht nun direkt vor euch.",
        "choices": [
            { "text": "Reden", "next": "atla_24" },
            { "text": "Angreifen", "next": "atla_25", "karma": -2 }
        ]
    },

    "atla_24": {
        "text": "Zuko: 'Ich suche nicht euch. Ich suche meine eigene Antwort.'",
        "choices": [
            { "text": "Zusammenarbeiten", "next": "atla_26", "karma": 2 },
            { "text": "Ablehnen", "next": "atla_25" }
        ]
    },

    "atla_25": {
        "text": "Der Kampf destabilisiert das Gebiet stark.",
        "choices": [
            { "text": "Weiter kämpfen", "next": "atla_27" },
            { "text": "Rückzug", "next": "atla_26" }
        ]
    },

    "atla_26": {
        "text": "Gemeinsam erreicht ihr eine spirituelle Nexus-Spalte im Eis.",
        "choices": [
            { "text": "Nähern", "next": "atla_28" }
        ]
    },

    "atla_27": {
        "text": "Die Umgebung beginnt zu zerbrechen.",
        "choices": [
            { "text": "Letzte Entscheidung", "next": "atla_28" }
        ]
    },

    "atla_28": {
        "text": "Der Avatar-Zustand reagiert stark auf den Nexus.",
        "choices": [
            { "text": "Kontrollieren", "next": "atla_29" },
            { "text": "Loslassen", "next": "atla_29" }
        ]
    },

    "atla_29": {
        "text": "Die Realität stabilisiert sich kurzzeitig.",
        "choices": [
            { "text": "Weitergehen", "next": "atla_30" }
        ]
    },

    "atla_30": {
        "text": "Der Nexus öffnet einen Übergang. Die Welt bereitet sich auf das letzte Kapitel vor.",
        "choices": [
            { "text": "Kapitel 5 starten", "next": "c5_start" }
        ]
    },
    "c4_pm_start": {
        "text": "Mitten in der Nacht fällt im Zoo plötzlich der Strom aus. Sirenen heulen kurz auf, bevor alles still wird. Skipper steht bereits auf dem Dach des Hauptgebäudes und beobachtet den Hafen mit einem Fernglas.",
        "choices": [
            { "text": "Skipper folgen", "next": "pm_1" },
            { "text": "Kowalski im Labor suchen", "next": "pm_2" },
            { "text": "Dem Stromausfall nachgehen", "next": "pm_3", "karma": -2 },
            { "text": "Private helfen Tiere zu beruhigen", "next": "pm_4", "karma": 2 }
        ]
    },

    "pm_1": {
        "text": "Skipper: 'Jemand hat die Sicherheitskameras deaktiviert. Das passiert nicht zufällig.'",
        "choices": [
            { "text": "Den Hafen beobachten", "next": "pm_5" },
            { "text": "Die Kanalisation prüfen", "next": "pm_6" }
        ]
    },

    "pm_2": {
        "text": "Kowalski analysiert beschädigte Datenchips. 'Interessant. Sehr interessant. Und potenziell katastrophal.'",
        "choices": [
            { "text": "Bei der Analyse helfen", "next": "pm_7", "gain_item": "security_chip" },
            { "text": "Skipper informieren", "next": "pm_5" }
        ]
    },

    "pm_3": {
        "text": "Du findest beschädigte Leitungen hinter dem Aquarium. Frische Werkzeugspuren sind sichtbar.",
        "choices": [
            { "text": "Weiter untersuchen", "next": "pm_8" },
            { "text": "Zurückmelden", "next": "pm_5" }
        ]
    },

    "pm_4": {
        "text": "Private versucht panische Tiere zu beruhigen. Einige glauben bereits an einen Angriff.",
        "choices": [
            { "text": "Mithelfen", "next": "pm_9", "karma": 3 },
            { "text": "Die Gerüchte ignorieren", "next": "pm_5", "karma": -1 }
        ]
    },

    "pm_5": {
        "text": "Im Hafen liegt ein unbekanntes Versorgungsschiff ohne Kennzeichnung.",
        "choices": [
            { "text": "Einschleusen", "next": "pm_10" },
            { "text": "Beobachten", "next": "pm_11" }
        ]
    },

    "pm_6": {
        "text": "In der Kanalisation entdeckt Rico mehrere Kisten mit Fischsymbolen.",
        "choices": [
            { "text": "Kisten öffnen", "next": "pm_12", "gain_item": "frozen_herring" },
            { "text": "Unberührt lassen", "next": "pm_11" }
        ]
    },

    "pm_7": {
        "text": "Kowalski entdeckt verschlüsselte Nachrichten mit Verbindungen zu Dr. Blowhole.",
        "choices": [
            { "text": "Nachrichten entschlüsseln", "next": "pm_13" },
            { "text": "Sofort handeln", "next": "pm_10", "karma": -1 }
        ]
    },

    "pm_8": {
        "text": "Ein versteckter Tunnel führt direkt unter den Zoo.",
        "choices": [
            { "text": "Tunnel betreten", "next": "pm_14" },
            { "text": "Skipper holen", "next": "pm_11", "karma": 1 }
        ]
    },

    "pm_9": {
        "text": "Mort behauptet plötzlich, er habe einen Delfin im Zoo gesehen.",
        "choices": [
            { "text": "Mort glauben", "next": "pm_14" },
            { "text": "Ignorieren", "next": "pm_11", "karma": -2 }
        ]
    },

    "pm_10": {
        "text": "An Bord des Schiffes fehlen sämtliche Besatzungsmitglieder.",
        "choices": [
            { "text": "Frachter durchsuchen", "next": "pm_15" },
            { "text": "Maschinenraum prüfen", "next": "pm_16" }
        ]
    },

    "pm_11": {
        "text": "Skipper wird zunehmend misstrauisch. 'Zu ruhig. Das gefällt mir nicht.'",
        "choices": [
            { "text": "Wachen verstärken", "next": "pm_17", "karma": 2 },
            { "text": "Direkt weitersuchen", "next": "pm_15" }
        ]
    },

    "pm_12": {
        "text": "Die Kisten enthalten gefrorene Heringe mit versteckten Sendern.",
        "choices": [
            { "text": "Sender analysieren", "next": "pm_13", "gain_item": "tracking_beacon" },
            { "text": "Zerstören", "next": "pm_17", "karma": -1 }
        ]
    },

    "pm_13": {
        "text": "Kowalski entdeckt ein Signal unter dem Aquarium.",
        "choices": [
            { "text": "Signal verfolgen", "next": "pm_18" },
            { "text": "Signal blockieren", "next": "pm_17", "karma": 1 }
        ]
    },

    "pm_14": {
        "text": "Im Tunnel hörst du metallische Geräusche und entfernte Delfinlaute.",
        "choices": [
            { "text": "Leise weitergehen", "next": "pm_18" },
            { "text": "Angriff vorbereiten", "next": "pm_19", "karma": -2 }
        ]
    },

    "pm_15": {
        "text": "Private entdeckt persönliche Gegenstände der verschwundenen Crew.",
        "choices": [
            { "text": "Hinweise sammeln", "next": "pm_20", "gain_item": "captain_log" },
            { "text": "Weiter ignorieren", "next": "pm_16", "karma": -1 }
        ]
    },

    "pm_16": {
        "text": "Der Maschinenraum wurde absichtlich sabotiert.",
        "choices": [
            { "text": "Reparieren", "next": "pm_20", "karma": 2 },
            { "text": "Evakuieren", "next": "pm_17" }
        ]
    },

    "pm_17": {
        "text": "Mehrere Seehunde verlassen plötzlich panisch das Wassergehege.",
        "choices": [
            { "text": "Untersuchen", "next": "pm_18" },
            { "text": "Ignorieren", "next": "pm_21", "karma": -2 }
        ]
    },

    "pm_18": {
        "text": "Dr. Blowhole erscheint auf einem Bildschirm. 'Wie schön euch wiederzusehen, Pinguine.'",
        "choices": [
            { "text": "Mit ihm reden", "next": "pm_22" },
            { "text": "Signal orten", "next": "pm_23" }
        ]
    },

    "pm_19": {
        "text": "Der Angriff löst einen Alarm im gesamten Zoo aus.",
        "choices": [
            { "text": "Flucht", "next": "pm_21", "karma": -3 },
            { "text": "Weitermachen", "next": "pm_23" }
        ]
    },

    "pm_20": {
        "text": "Das Captain-Log erwähnt geheime Lieferungen ans Aquarium.",
        "choices": [
            { "text": "Aquarium aufsuchen", "next": "pm_24" },
            { "text": "Skipper warnen", "next": "pm_22", "karma": 1 }
        ]
    },

    "pm_21": {
        "text": "Die Kontrolle über den Zoo beginnt zu kollabieren.",
        "choices": [
            { "text": "Tiere evakuieren", "next": "pm_24", "karma": 3 },
            { "text": "Nur Dr. Blowhole verfolgen", "next": "pm_23", "karma": -2 }
        ]
    },

    "pm_22": {
        "text": "Dr. Blowhole behauptet, jemand anderes stecke hinter allem.",
        "choices": [
            { "text": "Glauben", "next": "pm_25" },
            { "text": "Ablehnen", "next": "pm_23", "karma": -1 }
        ]
    },

    "pm_23": {
        "text": "Rico entdeckt Sprengladungen unter dem Aquarium.",
        "choices": [
            { "text": "Entschärfen", "next": "pm_26", "required_item": "security_chip" },
            { "text": "Ignorieren", "next": "pm_27", "karma": -3 }
        ]
    },

    "pm_24": {
        "text": "Im Aquarium findest du versteckte U-Boote der Delfine.",
        "choices": [
            { "text": "Sabotieren", "next": "pm_26" },
            { "text": "Untersuchen", "next": "pm_25", "gain_item": "submarine_codes" }
        ]
    },

    "pm_25": {
        "text": "Ein unbekannter Agent funkt heimlich mit Blowhole.",
        "choices": [
            { "text": "Signal abhören", "next": "pm_28", "required_item": "tracking_beacon" },
            { "text": "Direkt eingreifen", "next": "pm_27", "karma": -1 }
        ]
    },

    "pm_26": {
        "text": "Die Sprengladungen werden deaktiviert, aber der Zoo bleibt instabil.",
        "choices": [
            { "text": "Weiter suchen", "next": "pm_28" },
            { "text": "Evakuierung abschließen", "next": "pm_29", "karma": 2 }
        ]
    },

    "pm_27": {
        "text": "Explosionen erschüttern Teile des Hafens.",
        "choices": [
            { "text": "Rettung organisieren", "next": "pm_29", "karma": 3 },
            { "text": "Blowhole verfolgen", "next": "pm_28", "karma": -2 }
        ]
    },

    "pm_28": {
        "text": "Der wahre Drahtzieher entpuppt sich als eine Gruppe abtrünniger Robben.",
        "choices": [
            { "text": "Verhandeln", "next": "pm_30", "karma": 2 },
            { "text": "Angreifen", "next": "pm_29", "karma": -2 }
        ]
    },

    "pm_29": {
        "text": "Der Zoo bleibt beschädigt zurück, aber die Gefahr ist vorerst vorbei.",
        "choices": [
            { "text": "Skipper folgen", "next": "pm_30" }
        ]
    },

    "pm_30": {
        "text": "Skipper blickt über den Hafen. 'Jungs... das war erst Runde eins.'",
        "choices": [
            { "text": "Kapitel 5 starten", "next": "c5_start" }
        ]
    },
    "c4_rm_start": {
        "text": "Du stolperst durch ein grünes Portal direkt in Rick Sanchez' Garage. Überall liegen halbfertige Geräte, Alien-Batterien und leuchtende Flüssigkeiten. Morty drückt panisch auf einem Controller, während Rick unter einem rauchenden Reaktor verschwindet.",
        "choices": [
            { "text": "Rick helfen", "next": "rm_1" },
            { "text": "Morty beruhigen", "next": "rm_2", "karma": 2 },
            { "text": "Portal-Gun untersuchen", "next": "rm_3", "karma": -2 },
            { "text": "Garage durchsuchen", "next": "rm_4" }
        ]
    },

    "rm_1": {
        "text": "Rick zieht ein verkohltes Kabel aus dem Reaktor. 'Großartig. Irgendein Idiot hat die Raum-Zeit-Batterie falsch synchronisiert.'",
        "choices": [
            { "text": "Beim Reparieren helfen", "next": "rm_5", "gain_item": "phase_tool" },
            { "text": "Nachfragen was passiert ist", "next": "rm_6" }
        ]
    },

    "rm_2": {
        "text": "Morty: 'Rick hat irgendwas aktiviert und jetzt verschwinden ganze Dimensionen aus dem Radar!'",
        "choices": [
            { "text": "Morty glauben", "next": "rm_6" },
            { "text": "Rick suchen", "next": "rm_1" }
        ]
    },

    "rm_3": {
        "text": "Die Portal-Gun reagiert plötzlich auf deine Berührung und öffnet mehrere instabile Mini-Portale.",
        "choices": [
            { "text": "Portale schließen", "next": "rm_7", "karma": 2 },
            { "text": "Ein Portal betreten", "next": "rm_8", "karma": -3 }
        ]
    },

    "rm_4": {
        "text": "Zwischen Schrott findest du ein halb verstecktes Gerät mit der Aufschrift 'Do Not Touch'.",
        "choices": [
            { "text": "Aktivieren", "next": "rm_8" },
            { "text": "Rick zeigen", "next": "rm_5", "karma": 1 }
        ]
    },

    "rm_5": {
        "text": "Rick scannt das Gerät kurz. 'Okay… das sollte definitiv nicht hier sein.'",
        "choices": [
            { "text": "Fragen woher es kommt", "next": "rm_9" },
            { "text": "Direkt zerstören", "next": "rm_10", "karma": -1 }
        ]
    },

    "rm_6": {
        "text": "Ein Alarm aktiviert sich im Haus. Mehrere rote Warnsymbole erscheinen auf allen Bildschirmen.",
        "choices": [
            { "text": "Warnung analysieren", "next": "rm_11" },
            { "text": "Ignorieren", "next": "rm_8", "karma": -2 }
        ]
    },

    "rm_7": {
        "text": "Die Mini-Portale kollabieren, aber eines zeigt kurz eine zerstörte Version der Erde.",
        "choices": [
            { "text": "Beobachten", "next": "rm_11" },
            { "text": "Verbindung abbrechen", "next": "rm_9" }
        ]
    },

    "rm_8": {
        "text": "Du landest in einer chaotischen Alien-Markthalle voller bewaffneter Händler.",
        "choices": [
            { "text": "Unauffällig bleiben", "next": "rm_12" },
            { "text": "Technologie stehlen", "next": "rm_13", "gain_item": "quantum_chip", "karma": -2 }
        ]
    },

    "rm_9": {
        "text": "Rick öffnet ein verstecktes Labor unter der Garage.",
        "choices": [
            { "text": "Folgen", "next": "rm_14" },
            { "text": "Oben bleiben", "next": "rm_11" }
        ]
    },

    "rm_10": {
        "text": "Die Explosion beschädigt mehrere Dimension-Tracker.",
        "choices": [
            { "text": "Reparieren helfen", "next": "rm_14" },
            { "text": "Schuld vertuschen", "next": "rm_13", "karma": -3 }
        ]
    },

    "rm_11": {
        "text": "Die Warnung zeigt ein unbekanntes Signal außerhalb der Zentralen Kurve.",
        "choices": [
            { "text": "Signal verfolgen", "next": "rm_15" },
            { "text": "Rick informieren", "next": "rm_14", "karma": 1 }
        ]
    },

    "rm_12": {
        "text": "Ein Alien-Händler erkennt dich als 'Freund von Rick Sanchez'.",
        "choices": [
            { "text": "Informationen kaufen", "next": "rm_15", "required_item": "phase_tool" },
            { "text": "Weglaufen", "next": "rm_13" }
        ]
    },

    "rm_13": {
        "text": "Mehrere interdimensionale Kopfgeldjäger tauchen auf.",
        "choices": [
            { "text": "Verhandeln", "next": "rm_16" },
            { "text": "Kämpfen", "next": "rm_17", "karma": -2 }
        ]
    },

    "rm_14": {
        "text": "Im Labor entdeckt Rick eine manipulierte Portal-Signatur.",
        "choices": [
            { "text": "Analysieren", "next": "rm_18", "gain_item": "portal_signature" },
            { "text": "Ignorieren", "next": "rm_16" }
        ]
    },

    "rm_15": {
        "text": "Das Signal führt zu einer verlassenen Citadel-Station.",
        "choices": [
            { "text": "Station betreten", "next": "rm_19" },
            { "text": "Außen scannen", "next": "rm_18" }
        ]
    },

    "rm_16": {
        "text": "Morty wird nervös. 'Rick… irgendwas fühlt sich falsch an.'",
        "choices": [
            { "text": "Morty ernst nehmen", "next": "rm_19", "karma": 2 },
            { "text": "Ignorieren", "next": "rm_17", "karma": -2 }
        ]
    },

    "rm_17": {
        "text": "Die Situation eskaliert und mehrere Portale reißen gleichzeitig auf.",
        "choices": [
            { "text": "Portale stabilisieren", "next": "rm_20", "required_item": "portal_signature" },
            { "text": "Fliehen", "next": "rm_21", "karma": -2 }
        ]
    },

    "rm_18": {
        "text": "Rick erkennt eine Technologie, die nicht von ihm stammt.",
        "choices": [
            { "text": "Weiter analysieren", "next": "rm_22" },
            { "text": "Direkt zerstören", "next": "rm_20", "karma": -1 }
        ]
    },

    "rm_19": {
        "text": "In der Citadel laufen beschädigte Service-Roboter planlos herum.",
        "choices": [
            { "text": "Datenbank durchsuchen", "next": "rm_22", "gain_item": "citadel_codes" },
            { "text": "Energieversorgung prüfen", "next": "rm_20" }
        ]
    },

    "rm_20": {
        "text": "Die Station beginnt langsam auseinanderzubrechen.",
        "choices": [
            { "text": "Evakuieren", "next": "rm_23", "karma": 2 },
            { "text": "Weiterforschen", "next": "rm_22", "karma": -1 }
        ]
    },

    "rm_21": {
        "text": "Mehrere alternative Mortys erscheinen plötzlich durch instabile Portale.",
        "choices": [
            { "text": "Mit ihnen reden", "next": "rm_23" },
            { "text": "Misstrauen", "next": "rm_24", "karma": -2 }
        ]
    },

    "rm_22": {
        "text": "Die Datenbank enthält Hinweise auf einen versteckten Portal-Kern.",
        "choices": [
            { "text": "Kern suchen", "next": "rm_25" },
            { "text": "Rick warnen", "next": "rm_23", "karma": 1 }
        ]
    },

    "rm_23": {
        "text": "Rick wirkt ungewohnt still. 'Wenn das Ding aktiviert wird, zerreißt es die Kurve komplett.'",
        "choices": [
            { "text": "Rick helfen", "next": "rm_25", "karma": 2 },
            { "text": "Selbst handeln", "next": "rm_24" }
        ]
    },

    "rm_24": {
        "text": "Der Portal-Kern beginnt Energie aus benachbarten Dimensionen zu ziehen.",
        "choices": [
            { "text": "Abschalten", "next": "rm_26", "required_item": "quantum_chip" },
            { "text": "Weiterlaufen lassen", "next": "rm_27", "karma": -3 }
        ]
    },

    "rm_25": {
        "text": "Mehrere Ricks aus anderen Dimensionen treffen ein.",
        "choices": [
            { "text": "Zusammenarbeiten", "next": "rm_26" },
            { "text": "Niemandem vertrauen", "next": "rm_27", "karma": -2 }
        ]
    },

    "rm_26": {
        "text": "Der Kern destabilisiert sich und droht zu kollabieren.",
        "choices": [
            { "text": "Stabilisieren", "next": "rm_28", "required_item": "citadel_codes" },
            { "text": "Zerstören", "next": "rm_29" }
        ]
    },

    "rm_27": {
        "text": "Die Station beginnt ganze Portale zu verschlingen.",
        "choices": [
            { "text": "Menschen retten", "next": "rm_29", "karma": 3 },
            { "text": "Nur entkommen", "next": "rm_28", "karma": -2 }
        ]
    },

    "rm_28": {
        "text": "Rick schließt das letzte Portal langsam.",
        "choices": [
            { "text": "Unterstützen", "next": "rm_30", "karma": 2 },
            { "text": "Beobachten", "next": "rm_30" }
        ]
    },

    "rm_29": {
        "text": "Die Citadel verschwindet im grünen Portalsturm.",
        "choices": [
            { "text": "Zurückkehren", "next": "rm_30" }
        ]
    },

    "rm_30": {
        "text": "Rick lehnt sich erschöpft gegen die Portal-Gun. 'Okay… das Universum existiert noch. Für heute reicht mir das.'",
        "choices": [
            { "text": "Kapitel 5 starten", "next": "c5_start" }
        ]
    },
    "c4_dd_start": {
        "text": "Während des großen St.-Canard-Maskenfestivals verschwinden plötzlich mehrere berühmte Bürger der Stadt spurlos. Überall tauchen identische lachende Masken auf, die niemand mehr abnehmen kann. Darkwing Duck springt auf die Hauptbühne, als plötzlich auch der Bürgermeister verschwindet.",
        "choices": [
            { "text": "Darkwing zur Bühne folgen", "next": "dd_1", "karma": 3 },
            { "text": "Die Maskenhändler untersuchen", "next": "dd_2" },
            { "text": "Launchpad helfen, die Menge zu beruhigen", "next": "dd_3", "karma": 2 },
            { "text": "Einer verdächtigen Gestalt folgen", "next": "dd_4", "karma": -2 }
        ]
    },

    "dd_1": {
        "text": "Darkwing untersucht den Bühnenboden. Dort finden sich seltsame violette Federn.",
        "choices": [
            { "text": "Die Federn analysieren", "next": "dd_5", "gain_item": "violet_feather" },
            { "text": "Backstage suchen", "next": "dd_6" }
        ]
    },

    "dd_2": {
        "text": "Die Händler behaupten, ein unbekannter Wohltäter habe die Masken kostenlos verteilt.",
        "choices": [
            { "text": "Den Lieferwagen durchsuchen", "next": "dd_7" },
            { "text": "Den Händlern glauben", "next": "dd_8", "karma": -3 }
        ]
    },

    "dd_3": {
        "text": "Launchpad versucht Kinder mit Ballontieren abzulenken, verursacht aber beinahe eine Panik.",
        "choices": [
            { "text": "Die Situation übernehmen", "next": "dd_8" },
            { "text": "Launchpad unterstützen", "next": "dd_9", "karma": 3 }
        ]
    },

    "dd_4": {
        "text": "Die Gestalt verschwindet in den alten Filmstudios von St. Canard.",
        "choices": [
            { "text": "Reinschleichen", "next": "dd_10" },
            { "text": "Darkwing informieren", "next": "dd_6", "karma": 2 }
        ]
    },

    "dd_5": {
        "text": "Die Feder gehört zu Ammonia Pine, einer exzentrischen Schurkin mit hypnotischen Parfüms.",
        "choices": [
            { "text": "Ihr Labor suchen", "next": "dd_11" },
            { "text": "Erst weitere Hinweise sammeln", "next": "dd_12" }
        ]
    },

    "dd_6": {
        "text": "Hinter der Bühne findest du einen geheimen Tunnel unter dem Festivalgelände.",
        "choices": [
            { "text": "Dem Tunnel folgen", "next": "dd_13" },
            { "text": "Gosalyn holen", "next": "dd_9", "karma": -2 }
        ]
    },

    "dd_7": {
        "text": "Im Lieferwagen liegen hunderte identische Masken und eine Einladung zur 'Mitternachtsvorstellung'.",
        "choices": [
            { "text": "Die Einladung behalten", "next": "dd_14", "gain_item": "midnight_ticket" },
            { "text": "Alles zerstören", "next": "dd_8", "karma": -4 }
        ]
    },

    "dd_8": {
        "text": "Immer mehr Besucher beginnen gleichzeitig zu lachen und marschieren Richtung Innenstadt.",
        "choices": [
            { "text": "Die Menschen stoppen", "next": "dd_15", "karma": 4 },
            { "text": "Den Ursprung suchen", "next": "dd_12" }
        ]
    },

    "dd_9": {
        "text": "Gosalyn entdeckt, dass einige Masken von innen mit seltsamer Tinte beschrieben sind.",
        "choices": [
            { "text": "Die Schrift entziffern", "next": "dd_16" },
            { "text": "Die Masken verbrennen", "next": "dd_15", "karma": -3 }
        ]
    },

    "dd_10": {
        "text": "Im Filmstudio laufen alte Cartoons auf verlassenen Leinwänden — doch die Figuren bewegen sich außerhalb der Szenen.",
        "choices": [
            { "text": "Projektoren untersuchen", "next": "dd_17" },
            { "text": "Die Leinwände zerstören", "next": "dd_18", "karma": -2 }
        ]
    },

    "dd_11": {
        "text": "Das Labor ist leer, aber überall stehen halb fertige Duftflaschen.",
        "choices": [
            { "text": "Eine Probe nehmen", "next": "dd_19", "gain_item": "perfume_sample" },
            { "text": "Das Labor durchsuchen", "next": "dd_20" }
        ]
    },

    "dd_12": {
        "text": "Darkwing erkennt, dass alle verschwundenen Bürger ehemalige Schauspieler sind.",
        "choices": [
            { "text": "Alte Filmarchive besuchen", "next": "dd_17" },
            { "text": "Die Theater der Stadt durchsuchen", "next": "dd_21" }
        ]
    },

    "dd_13": {
        "text": "Der Tunnel führt zu einem geheimen Untergrundtheater voller maskierter Zuschauer.",
        "choices": [
            { "text": "Die Vorstellung beobachten", "next": "dd_22" },
            { "text": "Sofort eingreifen", "next": "dd_23", "karma": -3 }
        ]
    },

    "dd_14": {
        "text": "Die Einladung nennt einen Ort: das stillgelegte Monocrow-Theater.",
        "choices": [
            { "text": "Zum Theater gehen", "next": "dd_24" },
            { "text": "Vorher Verstärkung holen", "next": "dd_20", "karma": 1 }
        ]
    },

    "dd_15": {
        "text": "Einige Festivalbesucher greifen plötzlich jeden ohne Maske an.",
        "choices": [
            { "text": "Die Menschen beruhigen", "next": "dd_25", "karma": 5 },
            { "text": "Mit Rauchbomben fliehen", "next": "dd_21", "karma": -4 }
        ]
    },

    "dd_16": {
        "text": "Die Schrift enthält Regieanweisungen für ein Stück namens 'Die ewige Rolle'.",
        "choices": [
            { "text": "Weiterlesen", "next": "dd_24" },
            { "text": "Die Seiten verstecken", "next": "dd_21", "karma": -2 }
        ]
    },

    "dd_17": {
        "text": "Die Projektoren werden von Quackerjack manipuliert, der sich als Regisseur ausgibt.",
        "choices": [
            { "text": "Mit ihm reden", "next": "dd_26" },
            { "text": "Die Maschinen sabotieren", "next": "dd_23", "karma": -3 }
        ]
    },

    "dd_18": {
        "text": "Durch die zerstörten Leinwände entkommen mehrere animierte Kreaturen in die Straßen.",
        "choices": [
            { "text": "Sie verfolgen", "next": "dd_25" },
            { "text": "Darkwing warnen", "next": "dd_20", "karma": 1 }
        ]
    },

    "dd_19": {
        "text": "Das Parfüm verstärkt Emotionen statt Kontrolle.",
        "choices": [
            { "text": "Die Probe behalten", "next": "dd_27" },
            { "text": "Wegwerfen", "next": "dd_20", "karma": 2 }
        ]
    },

    "dd_20": {
        "text": "Launchpad entdeckt versteckte Gästezimmer unter dem Monocrow-Theater.",
        "choices": [
            { "text": "Untersuchen", "next": "dd_28" },
            { "text": "Absperren", "next": "dd_21", "karma": -1 }
        ]
    },

    "dd_21": {
        "text": "Mehrere Schauspieler behaupten, sie hätten dieselbe Stimme in ihren Träumen gehört.",
        "choices": [
            { "text": "Die Aussagen vergleichen", "next": "dd_28" },
            { "text": "Sie ignorieren", "next": "dd_29", "karma": -4 }
        ]
    },

    "dd_22": {
        "text": "Auf der Bühne erscheint eine maskierte Gestalt: Taurus Bulba.",
        "choices": [
            { "text": "Zuhören", "next": "dd_30" },
            { "text": "Angreifen", "next": "dd_23", "karma": -5 }
        ]
    },

    "dd_23": {
        "text": "Das Publikum gerät in Panik und mehrere Gefangene verschwinden im Chaos.",
        "choices": [
            { "text": "Gefangene retten", "next": "dd_31", "karma": 4 },
            { "text": "Bulba verfolgen", "next": "dd_29", "karma": -2 }
        ]
    },

    "dd_24": {
        "text": "Im Monocrow-Theater laufen die Vorbereitungen für eine riesige Mitternachtsaufführung.",
        "choices": [
            { "text": "Hinter die Bühne schleichen", "next": "dd_32" },
            { "text": "Als Zuschauer tarnen", "next": "dd_22" }
        ]
    },

    "dd_25": {
        "text": "Darkwing erkennt, dass die Masken nur wirken, solange die Musik spielt.",
        "choices": [
            { "text": "Die Lautsprecher sabotieren", "next": "dd_33", "karma": 5 },
            { "text": "Den Dirigenten suchen", "next": "dd_30" }
        ]
    },

    "dd_26": {
        "text": "Quackerjack behauptet, jemand habe ihm versprochen, seine Shows 'für immer unvergesslich' zu machen.",
        "choices": [
            { "text": "Ihm glauben", "next": "dd_30" },
            { "text": "Ihn festsetzen", "next": "dd_29", "karma": -3 }
        ]
    },

    "dd_27": {
        "text": "Das Parfüm beruhigt kurz die maskierten Besucher.",
        "choices": [
            { "text": "Mehr herstellen", "next": "dd_33", "required_item": "perfume_sample" },
            { "text": "Nur für dich behalten", "next": "dd_29", "karma": -4 }
        ]
    },

    "dd_28": {
        "text": "Unter dem Theater findest du verschwundene Schauspieler in luxuriösen Räumen eingesperrt.",
        "choices": [
            { "text": "Befreien", "next": "dd_31", "karma": 5 },
            { "text": "Erst Bulba suchen", "next": "dd_30", "karma": -2 }
        ]
    },

    "dd_29": {
        "text": "Die Mitternachtsaufführung beginnt und ganz St. Canard hört plötzlich dieselbe Melodie.",
        "choices": [
            { "text": "Zum Dach des Theaters", "next": "dd_34" },
            { "text": "Die Straßen evakuieren", "next": "dd_31", "karma": 4 }
        ]
    },

    "dd_30": {
        "text": "Taurus Bulba will die gesamte Stadt in eine 'perfekte ewige Vorstellung' verwandeln.",
        "choices": [
            { "text": "Seinen Plan verzögern", "next": "dd_34" },
            { "text": "Sofort kämpfen", "next": "dd_35", "karma": -4 }
        ]
    },

    "dd_31": {
        "text": "Die geretteten Bürger helfen, andere Besucher von den Masken zu befreien.",
        "choices": [
            { "text": "Zum Theater zurückkehren", "next": "dd_34" },
            { "text": "Die Stadt sichern", "next": "dd_36", "karma": 3 }
        ]
    },

    "dd_32": {
        "text": "Hinter der Bühne hängt ein riesiger mechanischer Vorhang voller Hypnose-Scheinwerfer.",
        "choices": [
            { "text": "Abschalten", "next": "dd_33", "required_item": "midnight_ticket" },
            { "text": "Beschädigen", "next": "dd_35", "karma": -2 }
        ]
    },

    "dd_33": {
        "text": "Die Musik stoppt abrupt. Viele Besucher kommen langsam wieder zu sich.",
        "choices": [
            { "text": "Bulba konfrontieren", "next": "dd_36" },
            { "text": "Quackerjack suchen", "next": "dd_35" }
        ]
    },

    "dd_34": {
        "text": "Auf dem Dach des Theaters wartet Bulba zwischen gigantischen Scheinwerfern.",
        "choices": [
            { "text": "Darkwing unterstützen", "next": "dd_36", "karma": 5 },
            { "text": "Allein handeln", "next": "dd_35", "karma": -3 }
        ]
    },

    "dd_35": {
        "text": "Die Vorstellung endet im Chaos. Mehrere Schurken entkommen durch geheime Tunnel.",
        "choices": [
            { "text": "Die Bürger schützen", "next": "dd_36", "karma": 3 },
            { "text": "Die Schurken verfolgen", "next": "dd_37", "karma": -2 }
        ]
    },

    "dd_36": {
        "text": "Das Festival wird gerettet, doch Darkwing blickt misstrauisch auf eine einzelne verbliebene Maske.",
        "choices": [
            { "text": "Untersuchen", "next": "dd_37" }
        ]
    },

    "dd_37": {
        "text": "Im Inneren der Maske erscheint ein unbekanntes Symbol. Darkwing spürt, dass St. Canard noch lange nicht sicher ist.",
        "choices": [
            { "text": "Kapitel 5 starten", "next": "c5_start" }
        ]
    }
};