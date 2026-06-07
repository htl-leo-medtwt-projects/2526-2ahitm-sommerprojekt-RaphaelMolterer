let gameData = {

    "player": {
        "karma": 0,
        "inventory": []
    },

    "start": {
        "text": "Welcher animierten Welt moechtest du als erstes helfen?",
        "background": "./game_images/background_space.png",
        "choices": [
            { "text": "Adventure Time", "next": "c1_at_start" },
            { "text": "Gumball", "next": "c1_gb_start" },
            { "text": "Dexters Labor", "next": "c1_dl_start" },
            { "text": "Powerpuff Girls", "next": "c1_ppg_start" },
            { "text": "Gravity Falls", "next": "c1_gf_start" }
        ]
    },

    "c1_at_start": {
        "text": "Prinzessin Bubblegum ruft dich mitten in der Nacht ins Candy Kingdom. Riesige Teile des Koenigreichs verwandeln sich ploetzlich in wilde, lebendige Suessigkeiten-Monster. Finn und Jake versuchen bereits Chaos in den Strassen zu stoppen, waehrend seltsame Musik aus den Zuckerrohrfeldern erklingt.",
        "background": "./game_images/background_at_candy_kingdom.png",
        "choices": [
            { "text": "Finn und Jake helfen", "next": "at_1", "karma": 1 },
            { "text": "Den Geraeuschen folgen", "next": "at_2" },
            { "text": "Mit Bubblegum reden", "next": "at_3" },
            { "text": "Die Buerger evakuieren", "next": "at_4", "karma": 2 }
        ]
    },

    "at_1": {
        "text": "Jake haelt ein riesiges Marshmallow-Monster fest. Finn: 'Irgendwas macht die Candy People verrueckt!'",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_jakeFinn.png",
        "choices": [
            { "text": "Monster beruhigen", "next": "at_5", "karma": 4 },
            { "text": "Direkt angreifen", "next": "at_6", "karma": -3 }
        ]
    },

    "at_2": {
        "text": "Zwischen den Zuckerrohrfeldern tanzen seltsame lebendige Instrumente im Kreis.",
        "background": "./game_images/background_at_farm.png",
        "character": "./game_images/character_at_instrument.png",
        "choices": [
            { "text": "Musik beobachten", "next": "at_7" },
            { "text": "Instrument zerstoeren", "next": "at_6", "karma": -4 }
        ]
    },

    "at_3": {
        "text": "Bubblegum untersucht klebrige rosa Kristalle. 'Das hier stammt nicht aus meinem Labor.'",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/character_at_bubblegum.png",
        "choices": [
            { "text": "Kristalle analysieren", "next": "candy_crystal", "gain_item": "at_candy_crystal" },
            { "text": "Finn suchen", "next": "at_1" }
        ]
    },

    "candy_crystal": {
        "text": "Du erhaeltst einen seltsamen rosa Kristall, der von der Musik vibriert.",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/item_at_candy_crystal.png",
        "choices": [
            { "text": "Weiter", "next": "at_8" }
        ]
    },

    "at_4": {
        "text": "Peppermint Butler hilft dir dabei, panische Candy People in Sicherheit zu bringen.",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/character_at_peppermint.png",
        "choices": [
            { "text": "Peppermint Butler vertrauen", "next": "at_9", "karma": -4 },
            { "text": "Abstand halten", "next": "at_5", "karma": 2 }
        ]
    },

    "at_5": {
        "text": "Das Monster beruhigt sich kurz und fluestert: 'Die Musik macht uns hungrig...'",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_monster.png",
        "choices": [
            { "text": "Nach der Quelle suchen", "next": "at_7" },
            { "text": "Bubblegum warnen", "next": "at_8", "karma": 3 }
        ]
    },

    "at_6": {
        "text": "Die zerstoerten Suessigkeiten verschmelzen zu einer klebrigen Masse.",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_monster.png",
        "choices": [
            { "text": "Fliehen", "next": "at_10", "karma": -2 },
            { "text": "Weiterkaempfen", "next": "at_11", "karma": -5 }
        ]
    },

    "at_7": {
        "text": "Du findest BMO, der hypnotisiert auf einer sprechenden Keytar spielt.",
        "background": "./game_images/background_at_farm.png",
        "character": "./game_images/character_at_bmo.png",
        "choices": [
            { "text": "BMO stoppen", "next": "at_12" },
            { "text": "Mithoeren", "next": "strange_Melody", "gain_item": "at_melody" }
        ]
    },
    "strange_Melody": {
        "text": "Du erhaeltst die seltsame Melodie!",
        "background": "./game_images/background_at_farm.png",
        "character": "./game_images/item_at_melody.png",
        "choices": [
            { "text": "Weiter", "next": "at_13" }
        ]
    },
    "at_8": {
        "text": "Bubblegum erkennt die Kristalle. 'Das sieht nach alter Magie von Wizard City aus.'",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/character_at_bubblegum.png",
        "choices": [
            { "text": "Nach Wizard City reisen", "next": "at_14" },
            { "text": "Im Kingdom bleiben", "next": "at_10", "karma": -3 }
        ]
    },

    "at_9": {
        "text": "Peppermint Butler fuehrt dich heimlich in einen verbotenen Keller voller magischer Suessigkeiten.",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/character_at_peppermint.png",
        "choices": [
            { "text": "Fragen stellen", "next": "at_15" },
            { "text": "Sofort gehen", "next": "at_5", "karma": 2 }
        ]
    },

    "at_10": {
        "text": "Candy Zombies brechen aus den Strassen hervor.",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_zombie.png",
        "choices": [
            { "text": "Buerger schuetzen", "next": "at_16", "karma": 5 },
            { "text": "Alleine fliehen", "next": "at_17", "karma": -5 }
        ]
    },

    "at_11": {
        "text": "Jake wird verletzt, als die Masse explodiert.",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_jakeHurt.png",
        "choices": [
            { "text": "Jake helfen", "next": "at_16", "karma": 4 },
            { "text": "Dem Geraeusch folgen", "next": "at_13", "karma": -3 }
        ]
    },

    "at_12": {
        "text": "BMO wacht verwirrt auf. 'Die Musik kam aus den Dessert Wueste!'",
        "background": "./game_images/background_at_farm.png",
        "character": "./game_images/character_at_bmo.png",
        "choices": [
            { "text": "Zu den wuesten gehen", "next": "at_18" },
            { "text": "Bubblegum informieren", "next": "at_14", "karma": 2 }
        ]
    },

    "at_13": {
        "text": "Die Melodie bleibt in deinem Kopf und zeigt dir versteckte Wege.",
        "background": "./game_images/background_at_farm.png",
        "character": "./game_images/character_at_note.png",
        "choices": [
            { "text": "Der Musik folgen", "next": "at_18", "required_item": "at_strange_melody" },
            { "text": "Widerstehen", "next": "at_16", "karma": 2 }
        ]
    },

    "at_14": {
        "text": "In Wizard City behauptet ein alter Zauberer, die Musik koenne Wuensche materialisieren.",
        "background": "./game_images/background_at_wizard_city.png",
        "character": "./game_images/character_at_wizard.png",
        "choices": [
            { "text": "Ihm glauben", "next": "at_19", "karma": -2 },
            { "text": "Beweise verlangen", "next": "at_20", "karma": 3 }
        ]
    },

    "at_15": {
        "text": "Peppermint Butler zeigt dir ein altes Rezeptbuch voller verbotener Candy-Rituale.",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/character_at_peppermint.png",
        "choices": [
            { "text": "Rezeptbuch nehmen", "next": "forbidden_recipe", "gain_item": "at_recipe" },
            { "text": "Verbrennen", "next": "at_16", "karma": 4 }
        ]
    },

    "forbidden_recipe": {
        "text": "Du erhaeltst ein altes Rezeptbuch voller verbotener Candy-Rituale.",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/item_at_recipe.png",
        "choices": [
            { "text": "Weiter zu Wizard City", "next": "at_20" }
        ]
    },

    "at_16": {
        "text": "Finn bemerkt, dass die Candy Zombies auf Musik reagieren.",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_zombie.png",
        "choices": [
            { "text": "Musik nutzen", "next": "at_21", "required_item": "at_strange_melody" },
            { "text": "Direkt kaempfen", "next": "at_22", "karma": -3 }
        ]
    },

    "at_17": {
        "text": "Du versteckst dich in den Ruinen eines alten Bonbon-Ladens.",
        "background": "./game_images/background_at_store.png",
        "choices": [
            { "text": "Vorraete suchen", "next": "sugar_mask", "gain_item": "at_sugar_mask" },
            { "text": "Zurueckkehren", "next": "at_23", "karma": 1 }
        ]
    },

    "sugar_mask": {
        "text": "Du findest eine alte Zucker-Maske, die dich vor der Musik schuetzt.",
        "background": "./game_images/background_at_store.png",
        "character": "./game_images/item_at_sugar_mask.png",
        "choices": [
            { "text": "Maske nehmen", "next": "at_23" },
        ]
    },

    "at_18": {
        "text": "In den Dessert Wueste singt der Ice King traurig vor einem gigantischen lebenden Kuchen.",
        "background": "./game_images/background_at_desert.png",
        "character": "./game_images/character_at_iceking.png",
        "choices": [
            { "text": "Mit Ice King reden", "next": "at_24" },
            { "text": "Den Kuchen angreifen", "next": "at_22", "karma": -4 }
        ]
    },

    "at_19": {
        "text": "Der Zauberer versucht, die Musik fuer sich selbst zu kontrollieren.",
        "background": "./game_images/background_at_wizard_city.png",
        "character": "./game_images/character_at_wizard.png",
        "choices": [
            { "text": "Ihn stoppen und schnell weiter", "next": "at_24", "karma": 4 },
            { "text": "Ihm helfen", "next": "at_25", "karma": -5 }
        ]
    },

    "at_20": {
        "text": "Du erfaehrst, dass die Musik urspruenglich Candy People Gefuehle verstaerken sollte.",
        "background": "./game_images/background_at_wizard_city.png",
        "choices": [
            { "text": "Die Quelle zerstoeren", "next": "at_26" },
            { "text": "Die Musik umschreiben", "next": "at_21", "required_item": "at_recipe" }
        ]
    },

    "at_21": {
        "text": "Die Melodie beruhigt Teile des Kingdoms, aber einige Candy People werden komplett emotionslos.",
        "background": "./game_images/background_at_candy.png",
        "character": "./game_images/character_at_candyguy.png",
        "choices": [
            { "text": "Weiter benutzen", "next": "at_27", "karma": -2 },
            { "text": "Abbrechen", "next": "at_26", "karma": 3 }
        ]
    },

    "at_22": {
        "text": "Das Chaos breitet sich bis zum Breakfast Kingdom aus.",
        "background": "./game_images/background_at_breakfast_kingdom.png",
        "choices": [
            { "text": "Hilfe holen", "next": "at_28" },
            { "text": "Alleine handeln", "next": "at_25", "karma": -4 }
        ]
    },

    "at_23": {
        "text": "Laute Musik spielt die deine Ohren betaeubt! Eine Zucker Maske wuerde dir jetzt helfen... Hast du denn eine gefunden?",
        "background": "./game_images/background_at_candy_kingdom.png",
        "character": "./game_images/character_at_note.png",
        "choices": [
            { "text": "Benutzen", "next": "at_28", "required_item": "at_sugar_mask" },
            { "text": "Verstecken", "next": "at_22", "karma": -3 }
        ]
    },

    "at_24": {
        "text": "Ice King gesteht, dass er die Musik aus Einsamkeit erschaffen hat.",
        "background": "./game_images/background_at_ice.png",
        "choices": [
            { "text": "Mitgefuehl zeigen", "next": "at_29", "karma": 5 },
            { "text": "Vorwuerfe machen", "next": "at_25", "karma": -4 }
        ]
    },

    "at_25": {
        "text": "Die Musik waechst ausser Kontrolle.",
        "background": "./game_images/background_at_ice.png",
        "character": "./game_images/character_at_note.png",
        "choices": [
            { "text": "Evakuieren", "next": "at_28", "karma": 4 },
            { "text": "Weiter kaempfen", "next": "at_30", "karma": -5 }
        ]
    },

    "at_26": {
        "text": "Bubblegum entwickelt einen Plan, die Musik im ganzen Kingdom umzuleiten.",
        "background": "./game_images/background_at_candy_castle.png",
        "character": "./game_images/character_at_bubblegum.png",
        "choices": [
            { "text": "Plan unterstuetzen", "next": "at_29", "karma": 4 },
            { "text": "Eigenen Weg gehen", "next": "at_30", "karma": -2 }
        ]
    },

    "at_27": {
        "text": "Das Kingdom wird ruhig... fast zu ruhig.",
        "background": "./game_images/background_at_candy_kingdom.png",
        "choices": [
            { "text": "Untersuchen", "next": "at_30" },
            { "text": "Ignorieren", "next": "at_28", "karma": -3 }
        ]
    },

    "at_28": {
        "text": "Finn entdeckt den Ursprung der Musik tief unter dem Candy Kingdom.",
        "background": "./game_images/background_at_candy_kingdom.png",
        "character": "./game_images/character_at_finn.png",
        "choices": [
            { "text": "Hinabsteigen", "next": "at_29" },
            { "text": "Ice King schicken", "next": "at_30", "karma": -2 }
        ]
    },

    "at_29": {
        "text": "Im Untergrund schlaegt ein gigantisches lebendes Candy-Herz im Takt der Musik.",
        "background": "./game_images/background_at_underground.png",
        "character": "./game_images/character_at_heart.png",
        "choices": [
            { "text": "Beruhigen", "next": "at_30", "required_item": "at_candy_crystal" },
            { "text": "Zerstoeren", "next": "at_30", "karma": -6 }
        ]
    },

    "at_30": {
        "text": "Die Musik verstummt langsam. Das Candy Kingdom ueberlebt, aber einige Bewohner erinnern sich noch lange an diese Nacht.",
        "background": "./game_images/background_at_candy_kingdom.png",
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
        "character": "./game_images/character_gb_darwin.png",
        "choices": [
            { "text": "Helfen", "next": "gb_7", "karma": 2 },
            { "text": "Darueber lachen", "next": "gb_6", "karma": -1 },
            { "text": "Zur Schule gehen", "next": "gb_8" }
        ]
    },

    "gb_3": {
        "text": "Anais haelt mehrere Zettel in der Hand. 'Gumball und Darwin haben versucht, ihre Noten zu verbessern und dabei vermutlich das Schulnetzwerk zerstoert.'",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/character_gb_anais.png",
        "choices": [
            { "text": "Anais helfen", "next": "gb_9" },
            { "text": "Ignorieren", "next": "gb_6", "karma": -2 },
            { "text": "Die beiden verraten", "next": "gb_10", "karma": 2 }
        ]
    },

    "gb_4": {
        "text": "Banana Joe rennt lachend ueber den Schulhof. Hinter ihm fliegen hunderte ausgedruckte Zeugnisse durch die Luft.",
        "background": "./game_images/background_gb_schoolyard.png",
        "character": "./game_images/character_gb_banana.png",
        "choices": [
            { "text": "Hinterher rennen", "next": "gb_6" },
            { "text": "Die Zeugnisse einsammeln", "next": "gb_8", "karma": 1 }
        ]
    },

    "gb_5": {
        "text": "Gumball fuehrt dich in den Computerraum. Alle Bildschirme zeigen ploetzlich nur noch dieselbe Nachricht: 'SYSTEM ERROR'.",
        "character": "./game_images/character_gb_gumball.png",
        "background": "./game_images/background_gb_computer_room.png",
        "choices": [
            { "text": "Computer untersuchen", "next": "gb_11" },
            { "text": "Lieber abhauen", "next": "gb_6", "karma": -1 }
        ]
    },

    "gb_6": {
        "text": "Waehrend ihr diskutiert, faellt ploetzlich in der ganzen Schule der Strom aus. Schueler schreien, Automaten explodieren und irgendwo spielt eine Trompete.",
        "background": "./game_images/background_gb_dark_room.png",
        "choices": [
            { "text": "Weiter", "next": "gb_12" }
        ]
    },

    "gb_7": {
        "text": "Darwin erklaert alles hektisch. 'Wir wollten nur die Noten kurz ansehen. Dann hat Gumball auf irgendwas geklickt und jetzt funktioniert nichts mehr.'",
        "character": "./game_images/character_gb_darwin.png",
        "background": "./game_images/background_gb_school.png",
        "choices": [
            { "text": "Verstehen", "next": "gb_10", "karma": 2 },
            { "text": "Gumball beschuldigen", "next": "gb_12", "karma": -2 }
        ]
    },

    "gb_8": {
        "text": "In der Schule wiederholt die Lautsprecheranlage staendig dieselbe Durchsage von Principal Brown.",
        "background": "./game_images/background_gb_school.png",
        "choices": [
            { "text": "Kontrollraum suchen", "next": "gb_11" }
        ]
    },

    "gb_9": {
        "text": "Anais verbindet ihr Tablet mit dem Schulserver. 'Okay. Das Chaos kommt von einem Fehler im Hauptsystem. ueberraschenderweise war Gumball diesmal nicht komplett schuld.'",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/character_gb_anais.png",
        "choices": [
            { "text": "System analysieren", "next": "gb_13" }
        ]
    },

    "gb_10": {
        "text": "Gumball versucht den Computer neu zu starten und sorgt versehentlich dafuer, dass ueberall die Feueralarme losgehen.",
        "background": "./game_images/background_gb_computer_room.png",
        "character": "./game_images/character_gb_gumball.png",
        "choices": [
            { "text": "Beim Stoppen helfen", "next": "gb_13", "karma": 2 },
            { "text": "Nur zusehen", "next": "gb_12" }
        ]
    },

    "gb_11": {
        "text": "Im Kontrollraum entdeckt ihr, dass das gesamte Schulnetzwerk in einer Endlosschleife festhaengt.",
        "background": "./game_images/background_gb_control_room.png",
        "choices": [
            { "text": "System reparieren", "next": "gb_14" },
            { "text": "Ignorieren", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_12": {
        "text": "Die Schule versinkt komplett im Chaos. Tueren oeffnen sich zufaellig, Lautsprecher rauschen und Larry versucht gleichzeitig zehn Probleme zu loesen.",
        "background": "./game_images/background_gb_school.png",
        "choices": [
            { "text": "Weiter", "next": "gb_15" }
        ]
    },

    "gb_13": {
        "text": "Darwin gibt dir einen USB-Stick. 'Anais meint, damit koennten wir das System zuruecksetzen.'",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/character_gb_darwin.png",
        "choices": [
            { "text": "Nehmen", "next": "reset_drive", "gain_item": "gb_reset_drive" }
        ]
    },

    "reset_drive": {
        "text": "Du erhaeltst einen Reset-Drive.",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/item_gb_reset_drive.png",
        "choices": [
            { "text": "Weiter", "next": "gb_15" }
        ]
    },

    "gb_14": {
        "text": "Das System zeigt ploetzlich hunderte fehlerhafte Dateien mit Namen wie 'Elmore_Final_v2_REAL_final'.",
        "background": "./game_images/background_gb_control_room.png",
        "choices": [
            { "text": "Dateien analysieren", "next": "gb_16" },
            { "text": "Einfach loeschen", "next": "gb_16", "karma": 2 }
        ]
    },

    "gb_15": {
        "text": "Gumball lehnt sich erschoepft gegen die Wand. 'Warum endet bei uns eigentlich jeder normale Tag in einer Katastrophe?'",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/character_gb_gumball.png",
        "choices": [
            { "text": "Antworten", "next": "gb_17", "karma": 2 },
            { "text": "Schweigen", "next": "gb_17", "karma": -2 }
        ]
    },

    "gb_16": {
        "text": "Anais liest die Systemfehler durch. 'Okay... irgendwas schreibt die Fehler staendig neu. Deshalb kommt alles wieder zurueck.'",
        "background": "./game_images/background_gb_control_room.png",
        "character": "./game_images/character_gb_anais.png",
        "choices": [
            { "text": "Zuhoeren", "next": "gb_17", "karma": 2 },
            { "text": "Nicht verstehen", "next": "gb_12", "karma": -1 }
        ]
    },

    "gb_17": {
        "text": "Die Bildschirme der Schule beginnen ploetzlich gleichzeitig zu flackern.",
        "background": "./game_images/background_gb_school.png",
        "choices": [
            { "text": "Weitergehen", "next": "gb_18" }
        ]
    },

    "gb_18": {
        "text": "Banana Joe erscheint auf einem der Bildschirme. 'aeh... warum bin ich ploetzlich im Schulsystem drin?'",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/character_gb_banana.png",
        "choices": [
            { "text": "Mit ihm reden", "next": "gb_19" },
            { "text": "Ignorieren", "next": "gb_19", "karma": -1 }
        ]
    },

    "gb_19": {
        "text": "Der Hauptcomputer der Schule beginnt komplett zu ueberhitzen.",
        "background": "./game_images/background_gb_control_room.png",
        "choices": [
            { "text": "Reparieren", "next": "gb_20" }
        ]
    },

    "gb_20": {
        "text": "Darwin schafft es kurz, die Systeme zu stabilisieren. 'Okay! Jetzt oder nie!'",
        "background": "./game_images/background_gb_control_room.png",
        "character": "./game_images/character_gb_darwin.png",
        "choices": [
            { "text": "Vertrauen", "next": "gb_21", "karma": 2 },
            { "text": "Zweifeln", "next": "gb_21", "karma": -2 }
        ]
    },

    "gb_21": {
        "text": "Gumball startet das Backup-System. Fuer einen Moment funktioniert ploetzlich wieder alles normal.",
        "background": "./game_images/background_gb_control_room.png",
        "character": "./game_images/character_gb_gumball.png",
        "choices": [
            { "text": "ueberpruefen", "next": "gb_22" },
            { "text": "Abwarten", "next": "gb_22", "karma": -1 }
        ]
    },

    "gb_22": {
        "text": "Anais verschraenkt die Arme. 'Das Problem war nie der Computer. Die Schule selbst hat staendig fehlerhafte Daten produziert.'",
        "background": "./game_images/background_gb_control_room.png",
        "character": "./game_images/character_gb_anais.png",
        "choices": [
            { "text": "Glauben", "next": "gb_23", "karma": 2 },
            { "text": "Nicht glauben", "next": "gb_23", "karma": -2 }
        ]
    },

    "gb_23": {
        "text": "Ploetzlich springt der Strom wieder an. Die Schule sieht aus, als waere nie etwas passiert.",
        "background": "./game_images/background_gb_control_room.png",
        "choices": [
            { "text": "Weiter", "next": "gb_24" }
        ]
    },

    "gb_24": {
        "text": "Gumball grinst erleichtert. 'Cool. Also haben wir offiziell nur fast die komplette Schule zerstoert.'",
        "background": "./game_images/background_gb_school.png",
        "character": "./game_images/character_gb_gumball.png",
        "choices": [
            { "text": "Lachen", "next": "gb_25", "karma": 1 },
            { "text": "Kopfschuetteln", "next": "gb_25", "karma": -1 }
        ]
    },

    "gb_25": {
        "text": "Ueber der Schule oeffnet sich ploetzlich ein seltsamer leuchtender Riss am Himmel.",
        "background": "./game_images/background_gb_elmore.png",
        "choices": [
            { "text": "Ansehen", "next": "gb_26" }
        ]
    },

    "gb_26": {
        "text": "Darwin schaut nervoes nach oben. 'Bitte sag mir, das hat nichts mit uns zu tun.'",
        "background": "./game_images/background_gb_elmore.png",
        "character": "./game_images/character_gb_darwin.png",
        "choices": [
            { "text": "Mit Reset-Drive untersuchen", "next": "gb_27", "required_item": "gb_reset_drive" },
            { "text": "Ohne Plan abwarten (Benoetigt kein Item)", "next": "gb_27", "karma": -1 }
        ]
    },

    "gb_27": {
        "text": "Der Himmel ueber Elmore beginnt zu flackern wie ein kaputter Fernseher.",
        "background": "./game_images/background_gb_elmore.png",
        "choices": [
            { "text": "Weiter", "next": "gb_28" }
        ]
    },

    "gb_28": {
        "text": "Anais sieht ernst aus. 'Okay. DAS ist definitiv nicht mehr normaler Cartoon-Wahnsinn.'",
        "background": "./game_images/background_gb_elmore.png",
        "character": "./game_images/character_gb_anais.png",
        "choices": [
            { "text": "Zustimmen", "next": "gb_29", "karma": 2 },
            { "text": "Verharmlosen", "next": "gb_29", "karma": -2 }
        ]
    },

    "gb_29": {
        "text": "Gumball schaut zwischen dem Himmel und der Schule hin und her. 'Warum habe ich das Gefuehl, dass das erst der Anfang war?'",
        "background": "./game_images/background_gb_elmore.png",
        "character": "./game_images/character_gb_gumball.png",
        "choices": [
            { "text": "Weiter", "next": "gb_30" }
        ]
    },

    "gb_30": {
        "text": "Der leuchtende Riss stabilisiert sich ueber Elmore und verbindet sich mit etwas weit Groesserem.",
        "background": "./game_images/background_space.png",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "c1_dl_start": {
        "text": "Dexter rast hektisch durch sein Labor. ueberall oeffnen sich ploetzlich Mini-Portale, die fehlgeschlagene Erfindungen aus alten Experimenten freisetzen. Dee Dee tanzt ahnungslos zwischen schwebenden Robotern und mutierten Haushaltsgeraeten herum.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Dexter helfen", "next": "dl_1", "karma": 4 },
            { "text": "Dee Dee folgen", "next": "dl_2", "karma": -2 },
            { "text": "Die Portale untersuchen", "next": "dl_3" },
            { "text": "Das Labor sichern", "next": "dl_4", "karma": 5 }
        ]
    },

    "dl_1": {
        "text": "Dexter: 'Mein Experimental-Reject-Archiv wurde aktiviert! Dinge, die niemals funktionieren sollten, laufen frei herum!'",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_dexter.png",
        "choices": [
            { "text": "Archiv untersuchen", "next": "dl_5" },
            { "text": "Sofort Systeme abschalten", "next": "dl_6", "karma": -3 }
        ]
    },

    "dl_2": {
        "text": "Dee Dee findet eine Maschine, die jede Zeichnung real werden laesst.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_deedee.png",
        "choices": [
            { "text": "Dee Dee stoppen", "next": "dl_5", "karma": 3 },
            { "text": "Mitzeichnen", "next": "living_sketch", "gain_item": "dl_sketch" }
        ]
    },

    "living_sketch": {
        "text": "Du erhaeltst die lebendige Zeichnung eines Monsters mit Lasernaugen.",
        "character": "./game_images/item_dl_sketch.png",
        "choices": [
            { "text": "Weiter", "next": "dl_7" }
        ]
    },

    "dl_3": {
        "text": "Eines der Portale zeigt eine aeltere Version von Dexter, die panisch Warnungen ruft.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_old_dexter.png",
        "choices": [
            { "text": "Zuhoeren", "next": "dl_8" },
            { "text": "Portal schliessen", "next": "dl_6", "karma": -2 }
        ]
    },

    "dl_4": {
        "text": "Du verriegelst mehrere Laborebenen, aber dadurch werden einige Roboter eingeschlossen.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Roboter opfern", "next": "dl_9", "karma": -4 },
            { "text": "Notausgang oeffnen", "next": "dl_5", "karma": 2 }
        ]
    },

    "dl_5": {
        "text": "Im Reject-Archiv liegen bizarre Erfindungen: unsichtbare Brotroester, aggressive Staubsauger und ein Kampfanzug.",
        "background": "./game_images/background_dl_archive.png",
        "choices": [
            { "text": "Kampfanzug stehlen", "next": "prototype_armor", "gain_item": "dl_armor", "karma": -3 },
            { "text": "Archiv durchsuchen", "next": "dl_11" }
        ]
    },

    "prototype_armor": {
        "text": "Du stiehlst einen Kampfanzug",
        "background": "./game_images/background_dl_archive.png",
        "character": "./game_images/item_dl_armor.png",
        "choices": [
            { "text": "Weiter zu Dee Dee", "next": "dl_7" }
        ]
    },

    "dl_6": {
        "text": "Das Abschalten destabilisiert das Hauptreaktor-System.",
        "background": "./game_images/background_dl_reactor.png",
        "choices": [
            { "text": "Reaktor reparieren", "next": "dl_12", "karma": 4 },
            { "text": "Dexter warnen", "next": "dl_8" },
            { "text": "Schnell weiter zu Dee Dee", "next": "dl_7" }
        ]
    },

    "dl_7": {
        "text": "Dee Dee zeichnet ein riesiges gefaehrliches Monster mit Lasernaugen.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_monster.png",
        "choices": [
            { "text": "Monster bekaempfen", "next": "dl_13", "karma": 3, "required_item": "dl_armor" },
            { "text": "Ignorieren und warten das Dexter ihn beseitigt", "next": "dl_11", "karma": -3 }
        ]
    },

    "dl_8": {
        "text": "Der aeltere Dexter erklaert: 'Ein Experiment namens Project Perfect wird bald alles ersetzen.'",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_old_dexter.png",
        "choices": [
            { "text": "Mehr erfahren", "next": "dl_14" },
            { "text": "Ignorieren", "next": "dl_12", "karma": -4 }
        ]
    },

    "dl_9": {
        "text": "Die eingeschlossenen Roboter fusionieren zu einer einzigen gigantischen Maschine.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_robot.png",
        "choices": [
            { "text": "Kaempfen", "next": "dl_13" },
            { "text": "Verstecken", "next": "dl_15", "karma": -3 }
        ]
    },

    "dl_11": {
        "text": "Du findest alte Bauplaene fuer Project Perfect.",
        "background": "./game_images/background_dl_archive.png",
        "choices": [
            { "text": "Plaene analysieren", "next": "perfect_blueprint", "gain_item": "dl_blueprint" },
            { "text": "Verbrennen", "next": "dl_12", "karma": 2 }
        ]
    },

    "perfect_blueprint": {
        "text": "Du erhaeltst die Bauplaene fuer Project Perfect.",
        "background": "./game_images/background_dl_archive.png",
        "character": "./game_images/item_dl_blueprint.png",
        "choices": [
            { "text": "Weiter", "next": "dl_14" }
        ]
    },

    "dl_12": {
        "text": "Mandark taucht ploetzlich auf und behauptet, Dexter habe das Chaos selbst verursacht.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_mandark.png",
        "choices": [
            { "text": "Mandark glauben", "next": "dl_17", "karma": -5 },
            { "text": "Dexter verteidigen", "next": "dl_14", "karma": 4 }
        ]
    },

    "dl_13": {
        "text": "Das Monster beschaedigt mehrere Sicherheitskerne im Labor.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_monster.png",
        "choices": [
            { "text": "Kerne retten", "next": "dl_18", "karma": 5 },
            { "text": "Monster verfolgen", "next": "dl_15", "karma": -2 }
        ]
    },

    "dl_14": {
        "text": "Project Perfect sollte Dexters fehlerhafte Erfindungen automatisch verbessern.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Projekt aktivieren", "next": "dl_19" },
            { "text": "Projekt stoppen", "next": "dl_18", "karma": 3 }
        ]
    },

    "dl_15": {
        "text": "Im alten Testbereich arbeiten fehlgeschlagene Klon-Dexters heimlich weiter.",
        "background": "./game_images/background_dl_test_area.png",
        "character": "./game_images/character_dl_clone_dexter.png",
        "choices": [
            { "text": "Mit ihnen reden", "next": "dl_20" },
            { "text": "Alarm ausloesen", "next": "dl_18", "karma": -3 }
        ]
    },

    "dl_16": {
        "text": "Der Kampfanzug scannt ploetzlich Dee Dee als Bedrohung.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_deedee.png",
        "choices": [
            { "text": "Dee Dee schuetzen", "next": "dl_20", "karma": 4 },
            { "text": "Anzug weiterkaempfen lassen", "next": "dl_21", "karma": -5 }
        ]
    },

    "dl_17": {
        "text": "Mandark fuehrt dich in ein geheimes Konkurrenzlabor unter Dexters Haus.",
        "background": "./game_images/background_dl_mandark_lab.png",
        "character": "./game_images/character_dl_mandark.png",
        "choices": [
            { "text": "Zusammenarbeiten", "next": "dl_19", "karma": -2 },
            { "text": "Sabotieren", "next": "dl_18", "karma": 4 }
        ]
    },

    "dl_18": {
        "text": "Dexter entdeckt, dass Project Perfect beginnt, das gesamte Labor umzubauen.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_dexter.png",
        "choices": [
            { "text": "Kontrolle uebernehmen", "next": "dl_22", "required_item": "dl_blueprint" },
            { "text": "Hauptsystem zerstoeren", "next": "dl_21", "karma": -4 }
        ]
    },

    "dl_19": {
        "text": "Project Perfect aktiviert sich vollstaendig und ersetzt kaputte Geraete durch perfekte Versionen.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Beobachten", "next": "dl_22" },
            { "text": "Sofort stoppen", "next": "dl_21", "karma": 2 }
        ]
    },

    "dl_20": {
        "text": "Die Klon-Dexters behaupten, sie seien entsorgt worden, obwohl sie funktionierten.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_clone_dexter.png",
        "choices": [
            { "text": "Ihnen helfen", "next": "dl_23", "karma": -2 },
            { "text": "Dexter informieren", "next": "dl_22", "karma": 3 }
        ]
    },

    "dl_21": {
        "text": "Das Labor beginnt auseinanderzufallen.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Evakuieren", "next": "dl_24", "karma": 5 },
            { "text": "Experiment retten", "next": "dl_23", "karma": -4 }
        ]
    },

    "dl_22": {
        "text": "Project Perfect stuft ploetzlich Menschen als 'ineffizient' ein.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "System neu programmieren", "next": "dl_25", "required_item": "dl_blueprint" },
            { "text": "Computer zerstoeren", "next": "dl_24", "karma": -2 }
        ]
    },

    "dl_23": {
        "text": "Mandark versucht heimlich, Project Perfect zu uebernehmen.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_mandark.png",
        "choices": [
            { "text": "Mandark stoppen", "next": "dl_25", "karma": 4 },
            { "text": "Mandark gewaehren lassen", "next": "dl_26", "karma": -6 }
        ]
    },

    "dl_24": {
        "text": "Dee Dee findet den Hauptkern des Systems und beginnt darauf herumzutanzen.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_deedee.png",
        "choices": [
            { "text": "Mitmachen", "next": "dl_26", "karma": -3 },
            { "text": "Sie wegziehen", "next": "dl_25", "karma": 2 }
        ]
    },

    "dl_25": {
        "text": "Dexter schafft es, Project Perfect umzuprogrammieren.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_dexter.png",
        "choices": [
            { "text": "Nur gefaehrliche Erfindungen loeschen", "next": "dl_27", "karma": 5 },
            { "text": "Alles zuruecksetzen", "next": "dl_28", "karma": -2 }
        ]
    },

    "dl_26": {
        "text": "Das Labor wird kurzzeitig komplett von der KI kontrolliert.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Dexter helfen", "next": "dl_27", "karma": 4 },
            { "text": "Selbst fliehen", "next": "dl_28", "karma": -5 }
        ]
    },

    "dl_27": {
        "text": "Die meisten Fehlfunktionen verschwinden langsam. Dexter wirkt erschoepft.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_dexter.png",
        "choices": [
            { "text": "Dexter beruhigen", "next": "dl_29", "karma": 3 },
            { "text": "Mandark suchen", "next": "dl_28" }
        ]
    },

    "dl_28": {
        "text": "Ein letzter versteckter Reject-Roboter aktiviert sich heimlich.",
        "background": "./game_images/background_dl_lab.png",
        "character": "./game_images/character_dl_robot.png",
        "choices": [
            { "text": "Mit einer lebendigen Zeichnung besiegen", "next": "dl_29", "required_item": "dl_sketch" },
            { "text": "Ignorieren", "next": "dl_30", "karma": -5 }
        ]
    },

    "dl_29": {
        "text": "Dexter versiegelt das Reject-Archiv erneut. Dee Dee malt bereits wieder an einer neuen Maschine.",
        "background": "./game_images/background_dl_archive.png",
        "character": "./game_images/character_dl_dexter.png",
        "choices": [
            { "text": "Aufpassen", "next": "dl_30", "karma": 2 },
            { "text": "Labor verlassen", "next": "dl_30" }
        ]
    },

    "dl_30": {
        "text": "Das Labor stabilisiert sich langsam wieder. Irgendwo tief im Archiv blinkt jedoch weiterhin ein vergessenes Experiment.",
        "background": "./game_images/background_dl_lab.png",
        "choices": [
            { "text": "Weiterziehen", "next": "c2_start" }
        ]
    },

    "c1_ppg_start": {
        "text": "Das Telefon des Buergermeisters schrillt ununterbrochen! In Townsville herrscht mal wieder Ausnahmezustand. Eine riesige, klebrige gruene Wolke zieht durch die Strassen und laesst die Bewohner seltsam hyperaktiv und aggressiv werden. Blossom, Bubbles und Buttercup erwarten dich bereits im Labor von Professor Utonium.",
        "background": "./game_images/background_ppg_lab.png",
        "choices": [
            { "text": "Mit Blossom die Wolke analysieren", "next": "ppg_1", "karma": 1 },
            { "text": "Bubbles helfen, die Tiere im Zoo zu beruhigen", "next": "ppg_2" },
            { "text": "Mit Buttercup direkt zum Rathaus fliegen", "next": "ppg_3", "karma": -1 },
            { "text": "Mojo Jojos Observatorium im Auge behalten", "next": "ppg_4", "karma": 2 }
        ]
    },

    "ppg_1": {
        "text": "Blossom starrt auf den Computer. 'Die Wolke enthaelt Spuren von Chemical X, aber gemischt mit... faulen Bananen? Das macht keinen Sinn!' Ploetzlich bricht der Strom im Labor zusammen.",
        "background": "./game_images/background_ppg_lab.png",
        "character": "./game_images/character_ppg_blossom.png",
        "choices": [
            { "text": "Den Notgenerator starten", "next": "ppg_5", "karma": 3 },
            { "text": "Proben im Dunkeln sammeln", "next": "chemical_x_sample", "gain_item": "ppg_sample" }
        ]
    },

    "chemical_x_sample": {
        "text": "Du erhaeltst eine instabile Probe der Chemical-X-Zucker-Mischung. Sie leuchtet gefaehrlich gruen.",
        "background": "./game_images/background_ppg_lab.png",
        "character": "./game_images/item_ppg_sample.png",
        "choices": [
            { "text": "Weiter", "next": "ppg_8" }
        ]
    },

    "ppg_2": {
        "text": "Im Zoo von Townsville spielen die Tiere verrueckt. Ein mutiertes Riesen-Eichhoernchen bedroht die Besucher. Bubbles weint: 'Es hat nur Angst! Wir duerfen ihm nicht wehtun!'",
        "background": "./game_images/background_ppg_zoo.png",
        "character": "./game_images/character_ppg_bubbles.png",
        "choices": [
            { "text": "Das Eichhoernchen beruhigen", "next": "ppg_6", "karma": 4 },
            { "text": "Es mit einem Netz fangen", "next": "ppg_7", "karma": -2 }
        ]
    },

    "ppg_3": {
        "text": "Buttercup rammt die Tuer des Rathauses auf. Der Buergermeister versteckt sich zitternd unter seinem Schreibtisch und klammert sich an ein riesiges Gurkenglas. 'Die Monster wollen meine Gurken!'",
        "background": "./game_images/background_ppg_city_hall.png",
        "character": "./game_images/character_ppg_mayor.png",
        "choices": [
            { "text": "Dem Buergermeister das Gurkenglas wegnehmen", "next": "pickle_jar", "gain_item": "ppg_pickle", "karma": -2 },
            { "text": "Das Rathaus verbarrikadieren", "next": "ppg_9", "karma": 3 }
        ]
    },

    "pickle_jar": {
        "text": "Du nimmst das extrem stinkende, aber seltsamerweise magnetische Gurkenglas des Buergermeisters an dich.",
        "background": "./game_images/background_ppg_city_hall.png",
        "character": "./game_images/item_ppg_pickle.png",
        "choices": [
            { "text": "Weiter", "next": "ppg_10" }
        ]
    },

    "ppg_4": {
        "text": "Du spionierst Mojo Jojos Vulkan-Observatorium aus. Durch das Fenster siehst du ihn an einer riesigen Gas-Kanone schrauben. Er murmelt: 'Und so werde ich, Mojo Jojo, Townsville beherrschen, indem ich Mojo Jojo bin!'",
        "background": "./game_images/background_ppg_mojo_exterior.png",
        "character": "./game_images/character_ppg_mojo.png",
        "choices": [
            { "text": "Sofort das Labor stuermen", "next": "ppg_11", "karma": -3 },
            { "text": "Die Kanone heimlich sabotieren", "next": "ppg_12", "karma": 4 }
        ]
    },

    "ppg_5": {
        "text": "Der Generator springt an, erzeugt aber eine gewaltige Schockwelle, die Blossom kurzzeitig desorientiert. Draussen auf der Strasse formieren sich mutierte Brokkoli-Monster.",
        "background": "./game_images/background_ppg_street.png",
        "character": "./game_images/character_ppg_broccolimonster.png",
        "choices": [
            { "text": "Die Monster frontal angreifen", "next": "ppg_13", "karma": -4 },
            { "text": "Die Brokkoli-Monster aufessen", "next": "ppg_14", "karma": 2 }
        ]
    },

    "ppg_6": {
        "text": "Das Eichhoernchen beruhigt sich durch Bubbles' sanfte Stimme, stupst dich an und laesst eine glaenzende, decoder-aehnliche Antenne fallen, die es im Park gefunden hat.",
        "background": "./game_images/background_ppg_zoo.png",
        "choices": [
            { "text": "Die Antenne einstecken", "next": "mojo_decoder", "gain_item": "ppg_decoder" }
        ]
    },

    "mojo_decoder": {
        "text": "Du erhaeltst eine seltsame Affen-Antenne. Sie empfaengt verschluesselte Signale.",
        "background": "./game_images/background_ppg_zoo.png",
        "character": "./game_images/item_ppg_decoder.png",
        "choices": [
            { "text": "Zurueck zu den Maedels fliegen", "next": "ppg_8" }
        ]
    },

    "ppg_7": {
        "text": "Das Eichhoernchen durchbricht das Netz, wird noch wuetender und schleudert Buttercup durch eine Plakatwand. Das Chaos im Zoo eskaliert.",
        "background": "./game_images/background_ppg_zoo.png",
        "choices": [
            { "text": "Professor Utonium um Hilfe rufen", "next": "ppg_15" },
            { "text": "Den Zoo evakuieren", "next": "ppg_9", "karma": 4 }
        ]
    },

    "ppg_8": {
        "text": "Professor Utonium taucht auf. 'Kinder, die gruene Wolke neutralisiert die Gravitation der Stadt! Wenn wir die Quelle nicht finden, schwebt Townsville ins Weltall!'",
        "background": "./game_images/background_ppg_lab.png",
        "character": "./game_images/character_ppg_professor.png",
        "choices": [
            { "text": "Die Wolke mit der Probe analysieren", "next": "ppg_16", "required_item": "ppg_sample" },
            { "text": "Einen Wetterballon starten lassen", "next": "ppg_10", "karma": -1 }
        ]
    },

    "ppg_9": {
        "text": "Waehrend ihr versucht, das Rathaus zu sichern, taucht die Gangreen Gang auf! Ace grinst: 'Hey Puppen, schickes Gebaeude. Schade, wenn jemand die Fundamente sprengt!'",
        "background": "./game_images/background_ppg_city_hall.png",
        "character": "./game_images/character_ppg_gangreen.png",
        "choices": [
            { "text": "Die Gang bestechen", "next": "ppg_17", "karma": -5 },
            { "text": "Gegen die Gang kaempfen", "next": "ppg_13", "karma": 3 }
        ]
    },

    "ppg_10": {
        "text": "Ploetzlich verdunkelt sich der Himmel komplett. Es ist nicht die Wolke – es ist das schattenhafte Wesen 'ER' (Him), das durch die Angst der Buerger an Kraft gewinnt.",
        "background": "./game_images/background_ppg_sky.png",
        "character": "./game_images/character_ppg_him.png",
        "choices": [
            { "text": "Sich den eigenen aengsten stellen", "next": "ppg_18", "karma": 5 },
            { "text": "Gegen Hims Schatten-Klone kaempfen", "next": "ppg_19", "karma": -2 }
        ]
    },

    "ppg_11": {
        "text": "Mojo Jojo war vorbereitet! Er drueckt einen roten Knopf und faengt Buttercup und dich in einem unzerstoerbaren Energiekaefig, der mit Bananensaft betrieben wird.",
        "background": "./game_images/background_ppg_mojo_exterior.png",
        "character": "./game_images/character_ppg_mojo.png",
        "choices": [
            { "text": "Den Kaefig mit dem sauren Gurkensaft kurzschliessen", "next": "ppg_20", "required_item": "ppg_pickle" },
            { "text": "Auf Bubbles' Rettung warten", "next": "ppg_15", "karma": -2 }
        ]
    },

    "ppg_12": {
        "text": "Du vertauschst die Kabel an Mojos Kanone. Als er abfeuern will, implodiert die Maschine und huellt das Observatorium in dicken, rosa Schleim.",
        "background": "./game_images/background_ppg_mojo_exterior.png",
        "choices": [
            { "text": "Mojos Logbuch stehlen", "next": "ppg_21" },
            { "text": "Mojo Jojo fesseln", "next": "ppg_16", "karma": 4 }
        ]
    },

    "ppg_13": {
        "text": "Der Kampf wirbelt gigantische Mengen Staub auf. Die Brokkoli-Monster und die Gangreen Gang verbuenden sich im Chaos. Townsville brennt an mehreren Ecken.",
        "background": "./game_images/background_ppg_street.png",
        "choices": [
            { "text": "Die Rowdyruff Boys tauchen auf!", "next": "ppg_22", "karma": -5 },
            { "text": "Rueckzug ins Labor", "next": "ppg_15", "karma": 1 }
        ]
    },

    "ppg_14": {
        "text": "Buttercup und die Kinder hassen Brokkoli, aber sie essen tapfer alles auf. Das stoppt die Monster, verursacht aber schreckliche Bauchschmerzen bei den Powerpuff Girls.",
        "background": "./game_images/background_ppg_street.png",
        "choices": [
            { "text": "Trotz Schmerzen weiterfliegen", "next": "ppg_10", "karma": 4 },
            { "text": "Pause machen und Medizin suchen", "next": "ppg_23", "karma": -2 }
        ]
    },

    "ppg_15": {
        "text": "Im Labor versucht Professor Utonium verzweifelt, ein Gegenmittel zu mischen, doch ihm fehlt eine entscheidende chemische Komponente.",
        "background": "./game_images/background_ppg_lab.png",
        "character": "./game_images/character_ppg_professor.png",
        "choices": [
            { "text": "Die Chemical-X-Probe uebergeben", "next": "ppg_24", "required_item": "ppg_sample", "karma": 3 },
            { "text": "Dem Professor anders helfen", "next": "ppg_23" }
        ]
    },

    "ppg_16": {
        "text": "Mithilfe der Daten erkennst du, dass die Wolke von einem Satelliten gesteuert wird. Jemand funkt Befehle von der Erde aus!",
        "background": "./game_images/background_ppg_lab.png",
        "choices": [
            { "text": "Das Signal mit dem Affen-Decoder orten", "next": "ppg_25", "required_item": "ppg_decoder" },
            { "text": "Blind in die Stratosphaere fliegen", "next": "ppg_19", "karma": -3 }
        ]
    },

    "ppg_17": {
        "text": "Du gibst Ace und seiner Gang das magnetische Gurkenglas des Buergermeisters. Sie ziehen lachend ab, aber der Buergermeister ist am Boden zerstoert. Seine Trauer fuettert 'ER'.",
        "background": "./game_images/background_ppg_city_hall.png",
        "character": "./game_images/character_ppg_mayor.png",
        "choices": [
            { "text": "Weiter", "next": "ppg_10" }
        ]
    },

    "ppg_18": {
        "text": "'ER' lacht mit seiner unheimlichen, zweigeteilten Stimme. Doch Blossoms unerschuetterliche Logik bricht seine Illusionen. 'ER' verliert an Kraft und zieht sich zischend zurueck.",
        "background": "./game_images/background_ppg_sky.png",
        "character": "./game_images/character_ppg_him.png",
        "choices": [
            { "text": "Dem finalen Signal folgen", "next": "ppg_26" }
        ]
    },

    "ppg_19": {
        "text": "Die Schatten-Klone erweisen sich als extrem zaeh. Blossom, Bubbles und Buttercup verausgaben sich voellig. Die Stadt beginnt nun wirklich abzuheben – Haeuser schweben in die Luft!",
        "background": "./game_images/background_ppg_sky.png",
        "choices": [
            { "text": "Alles auf eine Karte setzen und angreifen", "next": "ppg_27", "karma": -5 },
            { "text": "Die Buerger festhalten", "next": "ppg_28", "karma": 5 }
        ]
    },

    "ppg_20": {
        "text": "Der extrem saure Gurkensaft frisst sich durch die Kabel des Kaefigs! Der Laser bricht zusammen und ihr seid frei. Mojo Jojo schreit: 'Das ist unmoeglich! Essiggurken waren nicht in meinen Berechnungen!'",
        "background": "./game_images/background_ppg_mojo_exterior.png",
        "character": "./game_images/character_ppg_mojo.png",
        "choices": [
            { "text": "Mojo Jojo KO schlagen", "next": "ppg_26", "karma": 2 },
            { "text": "Sein Kontrollpult untersuchen", "next": "ppg_25" }
        ]
    },

    "ppg_21": {
        "text": "In Mojos Logbuch findest du die Frequenzen seiner Erfindungen. Das koennte extrem nuetzlich sein, um den Satelliten abzuschalten.",
        "background": "./game_images/background_ppg_mojo_exterior.png",
        "choices": [
            { "text": "Logbuch an dich nehmen", "next": "mojo_logbook", "gain_item": "ppg_book" }
        ]
    },

    "mojo_logbook": {
        "text": "Du erhaeltst Mojo Jojos detailliertes Logbuch voller fieser Plaene.",
        "background": "./game_images/background_ppg_mojo_exterior.png",
        "character": "./game_images/item_ppg_book.png",
        "choices": [
            { "text": "Weiter zum Professor", "next": "ppg_15" }
        ]
    },

    "ppg_22": {
        "text": "Brick, Boomer und Butch – die Rowdyruff Boys – lachen euch aus. 'Ihr wollt Townsville retten? Wir machen es lieber platt!' Ein brutaler Dreikampf in den Wolken entbrennt.",
        "background": "./game_images/background_ppg_sky.png",
        "character": "./game_images/character_ppg_rowdyruff.png",
        "choices": [
            { "text": "Die Boys mit Mojos Logbuch austricksen", "next": "ppg_26", "required_item": "ppg_book" },
            { "text": "Mit roher Gewalt kaempfen", "next": "ppg_27", "karma": -4 }
        ]
    },

    "ppg_23": {
        "text": "Das Experiment schlaegt fehl! Es entsteht ein klebriger Schleim, der das halbe Labor blockiert. Professor Utonium seufzt: 'Das war wohl die falsche Zutat...'",
        "background": "./game_images/background_ppg_lab.png",
        "choices": [
            { "text": "Das Beste daraus machen und losfliegen", "next": "ppg_19", "karma": -1 }
        ]
    },

    "ppg_24": {
        "text": "Perfekt! Der Professor mixt die Probe mit dem Gegenmittel. Er laedt es in eine riesige Spritze. 'Werft das in das Zentrum der Wolke!'",
        "background": "./game_images/background_ppg_lab.png",
        "character": "./game_images/character_ppg_professor.png",
        "choices": [
            { "text": "Die Antidot-Spritze nehmen", "next": "antidote_spray", "gain_item": "ppg_antidote" }
        ]
    },

    "antidote_spray": {
        "text": "Du erhaeltst die Antidot-Spritze des Professors. Sie vibriert voller reinem Chemical X.",
        "background": "./game_images/background_ppg_lab.png",
        "character": "./game_images/item_ppg_antidote.png",
        "choices": [
            { "text": "In den Himmel fliegen", "next": "ppg_26" }
        ]
    },

    "ppg_25": {
        "text": "Der Decoder faengt Mojos Stimme ab. Aber warte... Mojo funkt gar nicht zum Satelliten. Jemand anderes benutzt SEINE Technologie! Das Signal fuehrt direkt ins tiefe All.",
        "background": "./game_images/background_ppg_sky.png",
        "choices": [
            { "text": "In die Stratosphaere durchbrechen", "next": "ppg_29" }
        ]
    },

    "ppg_26": {
        "text": "Ihr erreicht das Auge des gruenen Sturms. Dort oben schwebt eine gigantische Maschine, die die Stadt nach oben saugt. Ihr braucht etwas, um das System sofort zu stoppen.",
        "background": "./game_images/background_ppg_sky.png",
        "choices": [
            { "text": "Das Gegenmittel in den Kern jagen", "next": "ppg_30", "required_item": "ppg_antidote" },
            { "text": "Die Maschine physisch zertruemmern", "next": "ppg_27", "karma": -3 }
        ]
    },

    "ppg_27": {
        "text": "Durch die Zerstoerung explodiert die Chemical-X-Energie! Townsville stuerzt unsanft zurueck auf den Boden. Die Stadt ist gerettet, liegt aber komplett in Truemmern.",
        "background": "./game_images/background_ppg_street.png",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "ppg_28": {
        "text": "Bubbles und Blossom bilden ein riesiges Energienetz, um die fallenden Autos und Buerger aufzufangen, waehrend Buttercup die verbliebenen Monster abwehrt. Ihr rettet jeden Einzelnen!",
        "background": "./game_images/background_ppg_street.png",
        "choices": [
            { "text": "Die wahre Quelle im All suchen", "next": "ppg_29" }
        ]
    },

    "ppg_29": {
        "text": "Hoch ueber der Erde seht ihr ein Raumschiff. Es sind die tanzenden Alien-Invasoren aus dem Weltall, die Townsville entfuehren wollten, um die Erde in eine intergalaktische Disko zu verwandeln!",
        "background": "./game_images/background_ppg_space.png",
        "choices": [
            { "text": "Sie im Tanz-Duell besiegen", "next": "ppg_30", "karma": 5 },
            { "text": "Ihr Mutterschiff rammen", "next": "ppg_27", "karma": -2 }
        ]
    },

    "ppg_30": {
        "text": "Das Gegenmittel (oder das Tanz-Duell) wirkt perfekt! Die gruene Wolke loest sich in glitzernden Sternenstaub auf. Townsville landet sanft und sicher wieder auf der Erde. Der Erzaehler spricht: 'Und so wurde der Tag wieder gerettet, dank... den POWERPUFF GIRLS!'",
        "background": "./game_images/background_ppg_sky.png",
        "choices": [
            { "text": "Weiterziehen", "next": "c2_start" }
        ]
    },

    "c1_gf_start": {
        "text": "Es ist ein unheimlich heisser Nachmittag in Gravity Falls. Ploetzlich fangen im Mystery Shack alle Uhren an, rueckwaerts zu laufen. Der Totempfahl draussen beginnt hysterisch zu lachen, und Dippers magnetischer Kompass dreht komplett durch. Dipper haelt panisch das Tagebuch Nummer 3 in den Haenden, waehrend Mabel neonfarbene Glitzer-Barrikaden baut.",
        "background": "./game_images/background_gf_shack.png",
        "choices": [
            { "text": "Mit Dipper die Anomalie im Wald untersuchen", "next": "gf_1", "karma": 1 },
            { "text": "Mabel beim Sichern des Mystery Shacks helfen", "next": "gf_2" },
            { "text": "Gronkel Stan fragen, ob er etwas geklaut hat", "next": "gf_3", "karma": -1 },
            { "text": "Soos im Keller bei der Elektronik helfen", "next": "gf_4", "karma": 2 }
        ]
    },

    "gf_1": {
        "text": "Tief im Wald von Gravity Falls stoesst du mit Dipper auf eine leuchtende, geometrische Spalte im Boden. Dipper blaettert hektisch im Tagebuch: 'Hier steht etwas ueber ein Portal der amerikanischen Ureinwohner... oder es ist eine Falle von Bill Cipher! Wir muessen eine Probe der austretenden Energie nehmen.'",
        "background": "./game_images/background_gf_forest.png",
        "character": "./game_images/character_gf_dipper.png",
        "choices": [
            { "text": "Die Energie mit einem Einmachglas einfangen", "next": "rift_essence", "gain_item": "gf_essence" },
            { "text": "Die Spalte sofort mit Erde zuschuetten", "next": "gf_5", "karma": -2 }
        ]
    },

    "rift_essence": {
        "text": "Du erhaeltst ein Glas mit seltsam flackernder, blau-gelber Dimensions-Essenz. Sie fluestert rueckwaerts.",
        "background": "./game_images/background_gf_forest.png",
        "character": "./game_images/item_gf_essence.png",
        "choices": [
            { "text": "Weiter", "next": "gf_8" }
        ]
    },

    "gf_2": {
        "text": "Mabel wickelt gerade das Sparschwein Waddles in Alufolie. 'Gegen die Gedankenstrahlen, weisst du?' Ploetzlich klopft es heftig an den Fenstern. Es sind die Gnome! Angefuehrt von Jeff fordern sie lautstark eine neue Koenigin, da der Wald 'vibriert'.",
        "background": "./game_images/background_gf_shack.png",
        "character": "./game_images/character_gf_mabel.png",
        "choices": [
            { "text": "Die Gnome mit einer Laubblaeser-Attacke vertreiben", "next": "gf_6", "karma": -3 },
            { "text": "Mit den Gnomen verhandeln", "next": "gf_7", "karma": 3 }
        ]
    },

    "gf_3": {
        "text": "Gronkel Stan zaehlt in seinem Sessel nervoes einen Haufen Goldmuenzen. 'Ich? Geklaut? Das ist eine glatte Unterstellung! Aber falls jemand fragt: Diese vergoldete Azteken-Augenklappe war schon immer in meinem Besitz!'",
        "background": "./game_images/background_gf_shack_interior.png",
        "character": "./game_images/character_gf_stan.png",
        "choices": [
            { "text": "Stan die Azteken-Augenklappe abschwatzen", "next": "aztec_eyepatch", "gain_item": "gf_eyepatch", "karma": -2 },
            { "text": "Stan ignorieren und Wendy an der Kasse suchen", "next": "gf_9" }
        ]
    },

    "aztec_eyepatch": {
        "text": "Du erhaeltst eine antike Azteken-Augenklappe aus purem Gold. Sie scheint Licht seltsam zu brechen.",
        "background": "./game_images/background_gf_shack_interior.png",
        "character": "./game_images/item_gf_eyepatch.png",
        "choices": [
            { "text": "Weiter", "next": "gf_10" }
        ]
    },

    "gf_4": {
        "text": "Soos steht im Schuppen vor dem Sicherungskasten, der Funken sprueht. 'Hey Kumpel, der Kasten spricht mit mir. Er sagt, mein Geburtsdatum ist der Code zur Selbstzerstoerung der Realitaet. Ziemlich deep, oder?'",
        "background": "./game_images/background_gf_shed.png",
        "character": "./game_images/character_gf_soos.png",
        "choices": [
            { "text": "Die Draehte blind herausreissen", "next": "gf_11", "karma": -4 },
            { "text": "Einen alten UV-Strahler als Filter einbauen", "next": "gf_12", "karma": 4 }
        ]
    },

    "gf_5": {
        "text": "Als du die Erde auf die Spalte wirfst, verfaerbt sich der Boden schwarz. Ein Rudel riesiger Augaepfel-Fledermaeuse bricht aus den Baumkronen hervor und attackiert euch!",
        "background": "./game_images/background_gf_forest.png",
        "choices": [
            { "text": "In den Mystery Shack fluechten", "next": "gf_13", "karma": 1 },
            { "text": "Mit aesten gegen sie kaempfen", "next": "gf_14", "karma": -3 }
        ]
    },

    "gf_6": {
        "text": "Der Laubblaeser schiesst die Gnome im hohen Bogen in den Garten. Einer von ihnen verliert im Flug ein seltsames, dreieckiges Medaillon mit einem Code auf der Rueckseite.",
        "background": "./game_images/background_gf_shack.png",
        "choices": [
            { "text": "Das Medaillon aufheben", "next": "cipher_medallion", "gain_item": "gf_cipher_medallion" }
        ]
    },

    "cipher_medallion": {
        "text": "Du erhaeltst ein mysterioeses Gnom-Medaillon. Es ist mit kryptischen Symbolen graviert.",
        "background": "./game_images/background_gf_shack.png",
        "character": "./game_images/item_gf_medallion.png",
        "choices": [
            { "text": "Zu Dipper in den Wald laufen", "next": "gf_8" }
        ]
    },

    "gf_7": {
        "text": "Die Gnome sind bereit zu reden. Sie wollen Mabels Vorrat an 'Smile Dip' (Drogen-Zucker). Mabel gibt ihnen die Kiste schweren Herzens. Die Gnome tanzen euphorisch und rennen tief in den Wald.",
        "background": "./game_images/background_gf_shack.png",
        "choices": [
            { "text": "Den Gnomen folgen", "next": "gf_15" },
            { "text": "Im Shack bleiben", "next": "gf_9", "karma": 2 }
        ]
    },

    "gf_8": {
        "text": "Wendy kommt auf ihrem Fahrrad angesaust. 'Leute, die Northwest-Villa brennt nicht, aber sie schwebt zwei Meter ueber dem Boden! Pacifica dreht komplett durch und sucht Dipper!'",
        "background": "./game_images/background_gf_road.png",
        "character": "./game_images/character_gf_wendy.png",
        "choices": [
            { "text": "Das Phaenomen mit der Dimensions-Essenz untersuchen", "next": "gf_16", "required_item": "gf_essence" },
            { "text": "Direkt zur Northwest-Villa fahren", "next": "gf_10", "karma": -1 }
        ]
    },

    "gf_9": {
        "text": "Gideon Gleeful taucht ploetzlich auf der Veranda auf! Er haelt ein veraendertes Amulett in der Hand. 'Wenn ich diese Stadt nicht haben kann, wird sie niemand haben! Ich habe den Deal besiegelt!'",
        "background": "./game_images/background_gf_shack.png",
        "character": "./game_images/character_gf_gideon.png",
        "choices": [
            { "text": "Gideon das Amulett entreissen", "next": "gf_13", "karma": 3 },
            { "text": "Ihn mit der goldenen Augenklappe ablenken", "next": "gf_17", "required_item": "gf_eyepatch" }
        ]
    },

    "gf_10": {
        "text": "Die Realitaet beginnt sich aufzuloesen. Der Himmel faerbt sich magenta und ein gigantisches, schwebendes Dreieck wirft seinen Schatten ueber Gravity Falls. Bill Cipher ist fast vollstaendig manifestiert!",
        "background": "./game_images/background_gf_sky.png",
        "character": "./game_images/character_gf_bill.png",
        "choices": [
            { "text": "Einen Deal mit Bill vorschlagen", "next": "gf_18", "karma": -5 },
            { "text": "Das Geheimnis des Zodiak-Kreises suchen", "next": "gf_19", "karma": 3 }
        ]
    },

    "gf_11": {
        "text": "Das Herausreissen der Draehte loest einen massiven elektromagnetischen Impuls aus. Der Mystery Shack verliert jegliche magische Schutzbarriere. Der Wald rueckt bedrohlich naeher.",
        "background": "./game_images/background_gf_shack_interior.png",
        "choices": [
            { "text": "Die Geheimtuer hinter dem Verkaufsautomat suchen", "next": "gf_20" },
            { "text": "Nach draussen fliehen", "next": "gf_15", "karma": -1 }
        ]
    },

    "gf_12": {
        "text": "Der UV-Strahler wirft ein seltsames Licht an die Wand. Es enthuellt eine unsichtbare Botschaft von Autor Ford! Sie zeigt eine exakte Anleitung, wie man Dimensionsrisse versiegelt.",
        "background": "./game_images/background_gf_shed.png",
        "choices": [
            { "text": "Die Anleitung kopieren", "next": "gf_21" }
        ]
    },

    "gf_13": {
        "text": "Ihr verschanzt euch im Shack. Draussen schlagen Blitze ein, die Gegenstaende lebendig machen. Stans Taxidermie-Kreaturen im Museum fangen ploetzlich an zu knurren.",
        "background": "./game_images/background_gf_shack_interior.png",
        "choices": [
            { "text": "Gegen die ausgestopften Monster kaempfen", "next": "gf_22", "karma": -3 },
            { "text": "In Fords geheimes Untergrund-Labor fluechten", "next": "gf_20", "karma": 4 }
        ]
    },

    "gf_14": {
        "text": "Der Kampf im Wald ist brutal. Dipper verliert seine Kappe und ihr werdet von den Augaepfeln hypnotisiert. Ihr wacht erst Stunden spaeter auf – mitten im 'Weirdmageddon'-Vorbote.",
        "background": "./game_images/background_gf_forest.png",
        "choices": [
            { "text": "Hektisch zum Shack rennen", "next": "gf_15", "karma": -2 },
            { "text": "Nach ueberlebenden suchen", "next": "gf_23", "karma": 4 }
        ]
    },

    "gf_15": {
        "text": "Du triffst im Chaos auf die 'Time Paradox Avoidance Enforcement Squadron' (Zeitpolizei) rund um Blendin Blandin. Sie versuchen, die Anomalie einzufrieren, werden aber von der Magie abgelenkt.",
        "background": "./game_images/background_gf_road.png",
        "character": "./game_images/character_gf_blendin.png",
        "choices": [
            { "text": "Ihre Zeit-Ausruestung sabotieren", "next": "gf_24", "karma": -4 },
            { "text": "Ihnen Informationen aus dem Tagebuch geben", "next": "gf_19", "karma": 5 }
        ]
    },

    "gf_16": {
        "text": "Das Glas mit der Essenz reagiert wie ein Magnet auf das Signal der Northwest-Villa. Es zeigt euch einen versteckten unterirdischen Bunker der Regierungsagenten.",
        "background": "./game_images/background_gf_forest.png",
        "choices": [
            { "text": "Den Regierungs-Bunker betreten", "next": "gf_25" }
        ]
    },

    "gf_17": {
        "text": "Gideon starrt hypnotisiert auf die goldene Azteken-Augenklappe. 'Das... das ist die Klappe des blinden Auges!' Waehrend er abgelenkt ist, klaut Mabel ihm sein Amulett und zerstoert es.",
        "background": "./game_images/background_gf_shack.png",
        "character": "./game_images/character_gf_gideon.png",
        "choices": [
            { "text": "Gideon verjagen", "next": "gf_26", "karma": 4 },
            { "text": "Gideons Notizen durchsuchen", "next": "gf_19" }
        ]
    },

    "gf_18": {
        "text": "Bill Cipher lacht ohrenbetaeubend. 'Ein Deal? Ich liebe Deals! Du gibst mir das Tagebuch Nummer 3, und ich sorge dafuer, dass Stan reich wird!' Dipper schreit: 'Tu es nicht!'",
        "background": "./game_images/background_gf_sky.png",
        "character": "./game_images/character_gf_bill.png",
        "choices": [
            { "text": "Den Handschlag annehmen", "next": "gf_27", "karma": -6 },
            { "text": "Im letzten Moment zurueckziehen", "next": "gf_26", "karma": 3 }
        ]
    },

    "gf_19": {
        "text": "Ihr findet heraus, dass Bills Schwachstelle ein alter, druidischer Bannspruch ist, der im Wald von Gravity Falls auf einer Steintafel eingraviert wurde. Aber der Code ist verschluesselt.",
        "background": "./game_images/background_gf_forest.png",
        "choices": [
            { "text": "Den Code mit dem Gnom-Medaillon entschluesseln", "next": "gf_30", "required_item": "gf_medallion" },
            { "text": "Raten und das Ritual blind starten", "next": "gf_27", "karma": -4 }
        ]
    },

    "gf_20": {
        "text": "Ihr tippt den Code am Verkaufsautomaten ein und fahrt mit dem geheimen Aufzug tief unter die Erde. Hier unten summt der gewaltige Dimensionstranszendent-Reaktor von Onkel Ford.",
        "background": "./game_images/background_gf_lab.png",
        "choices": [
            { "text": "Den Reaktor auf Ueberlastung stellen", "next": "gf_28" },
            { "text": "Fords Aufzeichnungen nach einer Waffe durchsuchen", "next": "gf_21" }
        ]
    },

    "gf_21": {
        "text": "Du findest Fords experimentellen Quanten-Destabilisator – eine maechtige Laserkanone, die Dimensionswesen einfrieren kann.",
        "background": "./game_images/background_gf_lab.png",
        "choices": [
            { "text": "Die Laserkanone einstecken", "next": "quantum_gun", "gain_item": "gf_gun" }
        ]
    },

    "quantum_gun": {
        "text": "Du erhaeltst den Quanten-Destabilisator. Er summt gefaehrlich und verbraucht enorm viel Energie.",
        "background": "./game_images/background_gf_lab.png",
        "character": "./game_images/item_gf_gun.png",
        "choices": [
            { "text": "Nach oben gehen und Bill konfrontieren", "next": "gf_26" }
        ]
    },

    "gf_22": {
        "text": "Der Kampf gegen die Taxidermie-Monster verwuestet den Souvenirshop komplett. Stan weint um seine gefaelschten Exponate. Das Chaos lenkt euch ab, waehrend Bill an Macht gewinnt.",
        "background": "./game_images/background_gf_shack_interior.png",
        "choices": [
            { "text": "Sich im Schrank verstecken", "next": "gf_23", "karma": -2 }
        ]
    },

    "gf_23": {
        "text": "Draussen regnet es ploetzlich Seifenblasen, die reines Grauen verursachen. Pacifica Northwest rennt panisch an euch vorbei. 'Meine Eltern sind zu Stein geworden! Helft mir!'",
        "background": "./game_images/background_gf_road.png",
        "character": "./game_images/character_gf_pacifica.png",
        "choices": [
            { "text": "Pacifica troesten und mitnehmen", "next": "gf_28", "karma": 5 },
            { "text": "Weiter nach Dipper suchen", "next": "gf_24", "karma": -3 }
        ]
    },

    "gf_24": {
        "text": "Durch die Sabotage oder das Zoegern kollidiert die Zeitleiste! Die Zukunft von Gravity Falls verschwimmt in einem psychedelischen Albtraum. Ihr muesst sofort handeln.",
        "background": "./game_images/background_gf_sky.png",
        "choices": [
            { "text": "Bill Cipher direkt angreifen", "next": "gf_26" }
        ]
    },

    "gf_25": {
        "text": "Im Regierungs-Bunker findest du eine Gedaechtnisloesch-Maschine der 'Gesellschaft des Blinden Auges'. Sie koennte benutzt werden, um Bills Praesenz in den Koepfen der Menschen zu loeschen.",
        "background": "./game_images/background_gf_bunker.png",
        "choices": [
            { "text": "Die Loesch-Maschine modifizieren", "next": "memory_gun", "gain_item": "gf_memory_gun" }
        ]
    },

    "memory_gun": {
        "text": "Du erhaeltst die modifizierte Gedaechtnisloesch-Pistole. Ein falscher Schuss und du vergisst deinen eigenen Namen.",
        "background": "./game_images/background_gf_bunker.png",
        "character": "./game_images/item_gf_memory_gun.png",
        "choices": [
            { "text": "Zurueck an die Oberflaeche", "next": "gf_26" }
        ]
    },

    "gf_26": {
        "text": "Bill Cipher schwebt ueber dem Mystery Shack. 'Ihr dachtet, ihr koenntet mich aufhalten? Ich bin aus reinem reinen Wahnsinn gemacht!' Er holt zum finalen Schlag aus.",
        "background": "./game_images/background_gf_sky.png",
        "character": "./game_images/character_gf_bill.png",
        "choices": [
            { "text": "Ihn mit dem Quanten-Destabilisator abschiessen", "next": "gf_30", "required_item": "gf_gun" },
            { "text": "Bills Geist mit der Gedaechtnis-Pistole loeschen", "next": "gf_30", "required_item": "gf_memory_gun" }
        ]
    },

    "gf_27": {
        "text": "Der Plan schlaegt fehl! Bill Cipher uebernimmt die totale Kontrolle ueber die Geister der Bewohner. Gravity Falls wird in eine bizarre Albtraum-Dimension gezogen. Der Mystery Shack brennt.",
        "background": "./game_images/background_gf_shack.png",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "gf_28": {
        "text": "Der Reaktor explodiert in einer blau-weissen Nova. Die Druckwelle fegt alle fliegenden Augen und bizarren Kreaturen hinweg, beschaedigt aber auch die halbe Stadt. Es ist ein harter Sieg.",
        "background": "./game_images/background_gf_shack.png",
        "choices": [
            { "text": "Kapitel 2 starten", "next": "c2_start" }
        ]
    },

    "gf_29": {
        "text": "Ihr schafft es, Bills physische Form durch pure Willenskraft und Teamwork abzulenken, waehrend Dipper und Mabel die magischen Runen anwenden. Bill schreit auf, als sich ein Sog oeffnet.",
        "background": "./game_images/background_gf_sky.png",
        "choices": [
            { "text": "Ihn endgueltig verbannen", "next": "gf_30", "karma": 5 }
        ]
    },

    "gf_30": {
        "text": "Mit einem markerschuetternden Schrei implodiert Bill Cipher in ein winziges, schwarzes Loch, das sich sofort schliesst. Die Uhren laufen wieder normal, der Himmel wird blau. Dipper klappt das Tagebuch zu und laechelt erschoepft. 'Wir haben es geschafft.' Der Erzaehler fluestert: 'Bis zum naechsten Mysterium...'",
        "background": "./game_images/background_gf_shack.png",
        "choices": [
            { "text": "Weiterziehen", "next": "c2_start" }
        ]
    },

    "c2_start": {
        "text": "Der Nexus oeffnet sich vollstaendig. Die fuenf ersten Welten verschwinden hinter dir, doch neue Signale erscheinen sofort. Einige Dimensionen kollidieren bereits miteinander. Stimmen, Erinnerungen und ganze Orte werden vermischt. Eine unbekannte Entitaet beobachtet jede deiner Entscheidungen.",
        "background": "./game_images/background_space.png",
        "choices": [
            { "text": "Teen Titans", "next": "c2_tt_start" },
            { "text": "Ben 10", "next": "c2_ben_start" },
            { "text": "Samurai Jack", "next": "c2_sj_start" },
            { "text": "Regular Show", "next": "c2_rs_start" },
            { "text": "Ninjago", "next": "c2_nj_start" }
        ]
    },
    "c2_tt_start": {
        "text": "Die Alarmanlage des Titans Tower draoehnt in ohrenbetaeubender Lautstaerke. Auf dem Hauptbildschirm flackert ein stilisiertes, rotes 'S'. Slade hat das neuronale Netzwerk von Jump City infiltriert. Ploetzlich verliert das Terminal die Verbindung, und ein seltsames, technologisches Summen bringt die Waende zum Vibrieren. Robin steht bereits mit geballten Faeusten am Kartentisch.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Mit Robin Slades geheime Frequenz analysieren", "next": "c2_tt_1", "karma": 1 },
            { "text": "Cyborg im Maschinenraum bei den Generatoren helfen", "next": "c2_tt_2" },
            { "text": "Starfire und Beast Boy in die Innenstadt begleiten", "next": "c2_tt_3", "karma": -1 },
            { "text": "Mit Raven ueber eine moegliche magische Signatur sprechen", "next": "c2_tt_4", "karma": 2 }
        ]
    },

    "c2_tt_1": {
        "text": "Robin hackt sich wie besessen durch Slades Firewalls. 'Er benutzt ein kybernetisches Signal, das direkt die Synapsen angreift! Wenn wir den Quellcode nicht isolieren, uebernimmt er die Stadt.' Das Terminal droht durchzubrennen.",
        "background": "./game_images/background_tt_tower.png",
        "character": "./game_images/character_tt_robin.png",
        "choices": [
            { "text": "Den Hauptrechner ueberlasten, um Daten zu retten", "next": "tt_slade_drive", "gain_item": "tt_slade_drive" },
            { "text": "Den Hack manuell blockieren", "next": "c2_tt_5", "karma": -2 }
        ]
    },

    "tt_slade_drive": {
        "text": "Du erhaeltst eine verschluesselte Slade-Datenfestplatte. Sie glueht heiss und enthaelt Fragmente seiner Befehls-Matrix.",
        "background": "./game_images/background_tt_tower.png",
        "character": "./game_images/item_tt_slade_drive.png",
        "choices": [
            { "text": "Die Daten im Tower entschluesseln", "next": "c2_tt_8" },
            { "text": "Die Festplatte mitnehmen und die Stadt sichern", "next": "c2_tt_10" }
        ]
    },

    "c2_tt_2": {
        "text": "Im Keller des Towers funkt Cyborg verzweifelt aus seinem Roboter-Arm. 'Mann, die H.I.V.E.-Five-Goere Gizmo hat ein Virus in meine Systeme geschleust! Ich verliere die Kontrolle ueber meine T-Car-Sicherheitsdrohnen!' Die Drohnen fahren ihre Laser aus.",
        "background": "./game_images/background_tt_subway.png",
        "character": "./game_images/character_tt_cyborg.png",
        "choices": [
            { "text": "Die Drohnen mit einem EMP lahmlegen", "next": "c2_tt_6", "karma": -3 },
            { "text": "Gizmos Schadcode isolieren und umleiten", "next": "c2_tt_7", "karma": 3 }
        ]
    },

    "c2_tt_3": {
        "text": "In den Strassen von Jump City herrscht Chaos. Passanten rennen hypnotisiert im Kreis, waehrend Mad Mod die Stadt mit riesigen, mechanischen Union-Jack-Sonden in ein absurdes britisches Labyrinth verwandelt. Starfire flucht auf Tamaranisch: 'Diese Maschinen beleidigen meine Augen!'",
        "background": "./game_images/background_tt_city.png",
        "character": "./game_images/character_tt_starfire.png",
        "choices": [
            { "text": "Eine der Sonden zerlegen und die Linse stehlen", "next": "tt_mod_lens", "gain_item": "tt_lens", "karma": -2 },
            { "text": "Die Sonden mit Starfires Starbolts beschiessen", "next": "c2_tt_9", "karma": 3 }
        ]
    },

    "tt_mod_lens": {
        "text": "Du erhaeltst die optische Hyper-Brechungslinse aus Mad Mods Sonde. Sie kann Lichtwellen extrem verzerren.",
        "background": "./game_images/background_tt_city.png",
        "character": "./game_images/item_tt_lens.png",
        "choices": [
            { "text": "Die Linse am Visier testen", "next": "c2_tt_10" },
            { "text": "Zurueck zum Tower eilen", "next": "c2_tt_15" }
        ]
    },

    "c2_tt_4": {
        "text": "Raven sitzt in tiefer Meditation, umgeben von einer dunklen Aura. 'Azarath Metrion Zinthos... Es ist nicht nur Technologie. Slade nutzt ein uraltes Artefakt der Geometrie, um die Realitaet zu verbiegen.' Sie oeffnet die Augen, die rot aufleuchten.",
        "background": "./game_images/background_tt_raven_room.png",
        "character": "./game_images/character_tt_raven.png",
        "choices": [
            { "text": "Ravens Meditation stoeren und sie warnen", "next": "c2_tt_11", "karma": -3 },
            { "text": "Ihr zuhoeren und das Buch der Schatten studieren", "next": "c2_tt_12", "karma": 4 }
        ]
    },

    "c2_tt_5": {
        "text": "Der manuelle Block schlaegt fehl. Eine neuronale Rueckkopplung schiesst durch die Konsolen und blendet Robin kurzzeitig. Draussen vor den Fenstern tauchen Slades mechanische Commando-Bots auf und durchbrechen die Scheiben.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Die Bots im Nahkampf stellen", "next": "c2_tt_13", "karma": -4 },
            { "text": "Beast Boy als T-Rex vorschicken", "next": "c2_tt_14", "karma": 2 }
        ]
    },

    "c2_tt_6": {
        "text": "Der EMP schaltet die Drohnen aus, grillt aber auch Cyborgs halbe interne Sensorik. Er bricht schwer atmend zusammen. Bevor du reagieren kannst, hinterlaesst Gizmo eine spoettische Videobotschaft und einen Prototyp-Sprengkopf im Raum.",
        "background": "./game_images/background_tt_subway.png",
        "choices": [
            { "text": "Den H.I.V.E.-Sprengkopf einstecken", "next": "tt_hive_detonator", "gain_item": "tt_detonator" },
            { "text": "Den Sprengkopf ignorieren und Cyborg evakuieren", "next": "c2_tt_8", "karma": 2 }
        ]
    },

    "tt_hive_detonator": {
        "text": "Du erhaeltst einen unbestimmten H.I.V.E.-Zuender. Er tickt unregelmaessig, birgt aber eine enorme Sprengkraft.",
        "background": "./game_images/background_tt_subway.png",
        "character": "./game_images/item_tt_detonator.png",
        "choices": [
            { "text": "Zurueck zu Robin eilen", "next": "c2_tt_8" },
            { "text": "Direkt in die U-Bahn-Schaechte vordringen", "next": "c2_tt_15" }
        ]
    },

    "c2_tt_7": {
        "text": "Dank deiner Hilfe isoliert Cyborg den Code. Er grinst: 'Gute Arbeit, Little Buddy! Ich habe den Spiess umgedreht.' Die Drohnen feuern nun auf Slades herannahende Truppen und halten den Tower-Eingang sauber.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Den Ursprung des Signals am Hafen suchen", "next": "c2_tt_15" },
            { "text": "Robin im Kontrollraum absichern", "next": "c2_tt_9", "karma": 4 }
        ]
    },

    "c2_tt_8": {
        "text": "Die Commando-Bots haben die Energiebarrieren des Towers ueberlastet. Das gesamte Gebaeude wechselt in den roten Verteidigungsmodus. ueber den Lautsprecher ertoent Slades ruhige, sadistische Stimme: 'Titans... Eure Zeit laeuft ab.'",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Slades Festplatte nutzen, um seine Bots zu deaktivieren", "next": "c2_tt_16", "required_item": "tt_slade_drive" },
            { "text": "Den Tower evakuieren und den Kampf nach draussen verlegen", "next": "c2_tt_10", "karma": -1 }
        ]
    },

    "c2_tt_9": {
        "text": "Mad Mods Sonden explodieren, setzen aber ein grelles, psychedelisches Gas frei. Die Titans beginnen, Halluzinationen von ihren schlimmsten Feinden zu sehen. Das Chaos auf den Strassen erreicht den Siedepunkt.",
        "background": "./game_images/background_tt_city.png",
        "choices": [
            { "text": "Gegen die Halluzinationen ankaempfen", "next": "c2_tt_17", "karma": -5 },
            { "text": "Raven um eine mentale Barriere bitten", "next": "c2_tt_13", "karma": 3 }
        ]
    },

    "c2_tt_10": {
        "text": "Die Stadt transformiert sich weiter. Schwebende Plattformen aus kaltem Stahl verdecken die Sonne. Am Himmel oeffnet sich ein rissiges Loch aus purer, roetlicher Chrono-Energie. Slade versucht, die Zeit selbst einzufrieren.",
        "background": "./game_images/background_tt_sky.png",
        "character": "./game_images/character_tt_slade.png",
        "choices": [
            { "text": "Sich in Slades temporales Feld wagen", "next": "c2_tt_18", "karma": 5 },
            { "text": "Die Sonden im Zentrum zerstoeren", "next": "c2_tt_19", "karma": -2 }
        ]
    },

    "c2_tt_11": {
        "text": "Raven verliert durch den Schock die Kontrolle ueber ihre Telekinese. Mehrere schwere Buecherregale stuerzen auf euch herab, und das Zimmer wird von daemonischen Schatten geflutet. Ihr muesst sofort fliehen.",
        "background": "./game_images/background_tt_raven_room.png",
        "choices": [
            { "text": "Durch das Fenster nach draussen springen", "next": "c2_tt_20" },
            { "text": "Raven helfen, ihre Kraefte wieder zu fokussieren", "next": "c2_tt_15", "karma": -2 }
        ]
    },

    "c2_tt_12": {
        "text": "Im Buch der Schatten entdeckst du eine alte tamaranische Glyphe, die beschreibt, wie man kuenstliche Illusionen bricht. Das koennte Mad Mods Linsen komplett nutzlos machen.",
        "background": "./game_images/background_tt_raven_room.png",
        "choices": [
            { "text": "Die Glyphe kopieren und mitnehmen", "next": "tt_shadow_visor", "gain_item": "tt_visor" },
            { "text": "Das Buch schliessen und direkt zum Hafen aufbrechen", "next": "c2_tt_25", "karma": 1 }
        ]
    },

    "c2_tt_13": {
        "text": "Der Kampf im Tower hinterlaesst schwere Verwuestungen. Cyborgs Schaltkreise funken, und Robin wird von einem schweren Schlag gegen die Wand geschleudert. Ihr werdet langsam in die Enge getrieben.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Den H.I.V.E.-Sprengkopf als Verzweiflungstat zuenden", "next": "c2_tt_22", "required_item": "tt_hive_detonator" },
            { "text": "Rueckzug in die Katakomben unter der Stadt", "next": "c2_tt_15", "karma": 1 }
        ]
    },

    "c2_tt_14": {
        "text": "Beast Boy wuetet als T-Rex durch die Reihen der Bots. Das verschafft euch Luft, aber seine ungestuemte Art bringt die Decke des Ops-Rooms zum Einsturz. Tonnen von Schutt versperren den Hauptausgang.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Gemeinsam einen Tunnel graben", "next": "c2_tt_10", "karma": 4 },
            { "text": "Nach einem alternativen Lueftungsschacht suchen", "next": "c2_tt_23", "karma": -2 }
        ]
    },

    "c2_tt_15": {
        "text": "Ihr verfolgt das Signal bis in ein verlassenes U-Bahn-Netzwerk unter Jump City. ueberall haengen Draehte und Slades markante Sensoren. Hier unten wartet bereits Cinderblock, um euch den Weg zu versperren!",
        "background": "./game_images/background_tt_subway.png",
        "character": "./game_images/character_tt_cinderblock.png",
        "choices": [
            { "text": "Den Steinkoloss frontal angreifen", "next": "c2_tt_24", "karma": -4 },
            { "text": "Ihn mit Mad Mods Linse blenden und umgehen", "next": "c2_tt_26", "required_item": "tt_mod_lens" }
        ]
    },

    "c2_tt_16": {
        "text": "Du speist den Code aus Slades Festplatte ins Sicherheitssystem ein. Die angreifenden Bots frieren mitten in der Bewegung ein und schalten sich ab. Robin atmet auf. 'Geniestreich. Jetzt wissen wir, wo er steckt! Tuning-Fabrik am Hafen!'",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Sofort zum Hafen aufbrechen", "next": "c2_tt_25" },
            { "text": "Vorher noch das Arsenal des Towers pluendern", "next": "c2_tt_23", "karma": -1 }
        ]
    },

    "c2_tt_17": {
        "text": "Die Halluzinationen zermuerben das Team. Starfire feuert blind ihre Laser ab, und Beast Boy verwandelt sich panisch in eine Maus, um sich zu verstecken. Slades Falle droht euch komplett zu brechen.",
        "background": "./game_images/background_tt_city.png",
        "choices": [
            { "text": "Sich gegenseitig wachruetteln und zum Hafen fliehen", "next": "c2_tt_25", "karma": 2 },
            { "text": "In den Ruinen der Stadt Deckung suchen", "next": "c2_tt_10", "karma": -2 }
        ]
    },

    "c2_tt_18": {
        "text": "Das temporale Feld zerrt an deinen Zellen. Doch Robins unbaendiger Wille treibt das Team voran. Ihr durchbrecht die Zeitschleife und zwingt Slade, sich im Epizentrum zu offenbaren.",
        "background": "./game_images/background_tt_sky.png",
        "character": "./game_images/character_tt_slade.png",
        "choices": [
            { "text": "Slade zum finalen Duell fordern", "next": "c2_tt_30", "karma": 4 },
            { "text": "Zuerst seine Apparatur sabotieren", "next": "c2_tt_26", "karma": 2 }
        ]
    },

    "tt_shadow_visor": {
        "text": "Du erhaeltst das Schatten-Visier, das durch tamaranische Glyphen modifiziert wurde. Es enthuellt verborgene Frequenzen.",
        "background": "./game_images/background_tt_raven_room.png",
        "character": "./game_images/item_tt_visor.png",
        "choices": [
            { "text": "Das Visier aufsetzen und den Hafen scannen", "next": "c2_tt_25" },
            { "text": "Das Visier an Robin uebergeben", "next": "c2_tt_26", "karma": 3 }
        ]
    },

    "c2_tt_19": {
        "text": "Die Zerstoerung der Sonden setzt unkontrollierte Schockwellen frei. Ganze Haeuserblocks in Jump City verlieren die Erdanziehung und driften in den Himmel. Die Stadt droht auseinanderzubrechen.",
        "background": "./game_images/background_tt_sky.png",
        "choices": [
            { "text": "Die Truemmer mit Cyborgs Magneten sichern", "next": "c2_tt_27", "karma": -5 },
            { "text": "Zusammenhalten und direkt das Zentrum stuermen", "next": "c2_tt_28", "karma": 5 }
        ]
    },

    "c2_tt_20": {
        "text": "Ihr landet unsanft auf den Felsen unter dem Tower. Der Himmel ueber euch verfaerbt sich blutrot. Ein mechanisches Heulen kuendigt an, dass Slades Modifikationen das Festland erreicht haben.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Sich durch die feindlichen Linien zum Hafen durchschlagen", "next": "c2_tt_25", "karma": 4 },
            { "text": "In den alten Abwasserrohren Schutz suchen", "next": "c2_tt_24", "karma": -3 }
        ]
    },

    "c2_tt_22": {
        "text": "Die Explosion des H.I.V.E.-Sprengkopfs reisst ein gewaltiges Loch in die Angreifer-Wellen, bringt aber auch die halbe Tower-Struktur zum Einsturz. Es ist ein gefaehrlicher Patt.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Aus den Truemmern befreien und zum Hafen rennen", "next": "c2_tt_25", "karma": 2 },
            { "text": "In den rauchenden Truemmern auf die Bots warten", "next": "c2_tt_23", "karma": -2 }
        ]
    },

    "c2_tt_23": {
        "text": "Durch die giftigen Gase der zerstoerten Elektronik verliert ihr wertvolle Zeit. Slade hat die Kontrolle ueber das staedtische Energienetz vollendet. Der Tower versinkt in purer Dunkelheit.",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Das Schatten-Visier aktivieren, um Feinde zu sehen", "next": "c2_tt_26", "required_item": "tt_shadow_visor" },
            { "text": "Ohne Sicht im Dunkeln weiterkaempfen", "next": "c2_tt_24", "karma": -3 }
        ]
    },

    "c2_tt_24": {
        "text": "Cinderblock rammt euch unbarmherzig ungespitzt in den Boden. Der brute-force Angriff schwaecht die Titans enorm. Slade nutzt eure Erschoepfung aus, um seine finale Barriere zu schliessen.",
        "background": "./game_images/background_tt_subway.png",
        "character": "./game_images/character_tt_cinderblock.png",
        "choices": [
            { "text": "Einen taktischen Rueckzug zum Hafen wagen", "next": "c2_tt_25", "karma": 1 },
            { "text": "Alles auf eine Karte setzen und blind weiterschlagen", "next": "c2_tt_27", "karma": -4 }
        ]
    },

    "c2_tt_25": {
        "text": "Am Hafen angekommen, blickt ihr auf eine riesige, metallische Festung, die aus den Docks geschossen ist. Slade steht auf der Spitze und lenkt den Chrono-Sturm mit seinen Haenden. Ihr braucht einen perfekten Plan.",
        "background": "./game_images/background_tt_city.png",
        "choices": [
            { "text": "Das Signal mit der Slade-Festplatte kurzschliessen", "next": "c2_tt_30", "required_item": "tt_slade_drive" },
            { "text": "Die Festung frontal mit Starfires Kraeften stuermen", "next": "c2_tt_29" }
        ]
    },

    "c2_tt_26": {
        "text": "Dank der Linse oder des Visiers umgeht ihr Cinderblock muehelos und stosst direkt in das Herz von Slades Kommandozentrale vor. Die Apparatur, die Jump City einfrieren soll, liegt offen vor euch.",
        "background": "./game_images/background_tt_subway.png",
        "choices": [
            { "text": "Den Kern der Apparatur ueberlasten", "next": "c2_tt_30", "karma": 3 },
            { "text": "Die Energiekabel kappen und Slades Zorn riskieren", "next": "c2_tt_27", "karma": -1 }
        ]
    },

    "c2_tt_27": {
        "text": "Die Apparatur explodiert in einer unkontrollierten Welle. Slade entkommt im Schatten, waehrend Jump City zwar gerettet, aber schwer beschaedigt zurueckbleibt. Robin starrt schweigend auf die rauchenden Docks.",
        "background": "./game_images/background_tt_city.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" },
            { "text": "Nach ueberlebenden in den Truemmern suchen", "next": "c3_start", "karma": 3 }
        ]
    },

    "c2_tt_28": {
        "text": "Starfire und Cyborg bilden eine lebende Barriere, um die herabstuerzenden Truemmer der Stadt abzufangen, waehrend Robin und Raven sich durch die Verteidigungslinien schlagen.",
        "background": "./game_images/background_tt_sky.png",
        "choices": [
            { "text": "Slade endgueltig auf der Plattform stellen", "next": "c2_tt_29" },
            { "text": "Zuerst die Zivilisten in Sicherheit bringen", "next": "c2_tt_27", "karma": 5 }
        ]
    },

    "c2_tt_29": {
        "text": "Slades Maske reflektiert das roetliche Licht des Sturms. 'Ihr seid puenktlich, Titans. Aber Puenktlichkeit wird euch diesmal nicht retten!' Er zieht seine Doppel-Kampfstange und geht in Position.",
        "background": "./game_images/background_tt_sky.png",
        "character": "./game_images/character_tt_slade.png",
        "choices": [
            { "text": "Ihn im Teamwork gemeinsam attackieren", "next": "c2_tt_30", "karma": 5 },
            { "text": "Ihn ablenken, waehrend Raven den Sturm bannt", "next": "c2_tt_30", "karma": 3 }
        ]
    },

    "c2_tt_30": {
        "text": "Mit einer koordinierten Attacke zerschmettert ihr Slades Chrono-Zentralrechner. Die metallischen Festungen implodieren und das rote Leuchten verschwindet aus der Stadt. Slade zieht sich geduckt in die Dunkelheit zurueck. Robin steckt seine Kampfstange ein und blickt aufs Meer. 'Wir sind bereit fuer das, was als naechstes kommt.'",
        "background": "./game_images/background_tt_tower.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" },
            { "text": "Das Team im Tower versammeln", "next": "c3_start", "karma": 2 }
        ]
    },

    "c2_ben_start": {
        "text": "Der Rust Bucket rollt mitten in der Nacht auf einen verlassenen Campingplatz im waldigen Nirgendwo. Ploetzlich faengt die Omnitrix an Bens Handgelenk wild an, rot und gelb zu flackern, und stoesst eine Schockwelle aus, die alle Lichter loescht. Opa Max blickt besorgt auf seine Klempner-Instrumente, waehrend Gwen bereits ein magisches Buch aufschlaegt.",
        "background": "./game_images/background_ben_woods.png",
        "choices": [
            { "text": "Mit Opa Max die Klempner-Signale pruefen", "next": "c2_ben_1", "karma": 2 },
            { "text": "Mit Gwen nach magischen Energiespuren suchen", "next": "c2_ben_2", "karma": 1 },
            { "text": "Die Omnitrix gewaltsam neustarten", "next": "c2_ben_3", "karma": -1 },
            { "text": "Die Umgebung als Kletteraffe (Wildmutt) auskundschaften", "next": "c2_ben_4", "karma": 3 }
        ]
    },

    "c2_ben_1": {
        "text": "Opa Max oeffnet ein verstecktes Fach im Rust Bucket. 'Ben, die Sensoren empfangen eine Signatur, die Vilgax' Drohnen aehnelt, aber gekreuzt mit Dr. Animos Mutations-Wellen!' Ein seltsamer, kybernetischer Schluessel faellt aus dem Klempner-Archiv.",
        "background": "./game_images/background_ben_rustbucket.png",
        "character": "./game_images/character_ben_max.png",
        "choices": [
            { "text": "Den Klempner-Schluessel einstecken", "next": "ben_omnitrix_key", "gain_item": "ben_omnitrix_key" },
            { "text": "Den Schluessel liegen lassen und die Stadt warnen", "next": "c2_ben_5", "karma": -2 }
        ]
    },

    "ben_omnitrix_key": {
        "text": "Du erhaeltst den Klempner-Spezialschluessel. Er kann ausserirdische Systeme ueberschreiben.",
        "background": "./game_images/background_ben_rustbucket.png",
        "character": "./game_images/item_ben_omnitrix_key.png",
        "choices": [
            { "text": "Den Schluessel an der Omnitrix testen", "next": "c2_ben_8" },
            { "text": "Opa Max in den Wald folgen", "next": "c2_ben_10" }
        ]
    },

    "c2_ben_2": {
        "text": "Gwen fuehrt dich zu einer Lichtung, auf der die Pflanzen lila leuchten. 'Das ist Hexerei... oder Kevin 11 absorbiert mal wieder Energie!' Ploetzlich bricht ein mutierter Riesen-Hirsch mit messerscharfen Stosszaehnen aus dem Unterholz.",
        "background": "./game_images/background_ben_woods.png",
        "character": "./game_images/character_ben_gwen.png",
        "choices": [
            { "text": "Als 'Kannonenkugel' (Cannonbolt) den Hirsch rammen", "next": "c2_ben_6", "karma": -3 },
            { "text": "Gwen Zeit verschaffen, um ein Bann-Ritual zu sprechen", "next": "c2_ben_7", "karma": 3 }
        ]
    },

    "c2_ben_3": {
        "text": "Du schlaegst frustriert auf die Omnitrix. Das Display dreht komplett durch und verwandelt dich in eine bizarre, instabile Mischung aus 'Maturi' (Grey Matter) und 'Stinker' (Stinkfly). Du verlierst deine Flugkraft, hast aber ein kleines, klebriges Mutations-Ei gerettet, das vom Himmel fiel.",
        "background": "./game_images/background_ben_woods.png",
        "choices": [
            { "text": "Das Mutations-Ei untersuchen und einpacken", "next": "ben_mutation_egg", "gain_item": "ben_mutation_egg" },
            { "text": "Das Ei zerstoeren und Deckung suchen", "next": "c2_ben_9", "karma": -2 }
        ]
    },

    "ben_mutation_egg": {
        "text": "Du erhaeltst ein schleimiges DNA-Mutations-Ei. Es pulsiert im Takt ausserirdischer Frequenzen.",
        "background": "./game_images/background_ben_woods.png",
        "character": "./game_images/item_ben_mutation_egg.png",
        "choices": [
            { "text": "Das Ei zu Opa Max bringen", "next": "c2_ben_15" },
            { "text": "Als Grey Matter die DNA des Eies analysieren", "next": "c2_ben_12" }
        ]
    },

    "c2_ben_4": {
        "text": "Als Wildmutt nimmst du eine Witterung auf: Rostiges Metall und verbranntes Fleisch. Du folgst der Spur zu einer alten Mine, in der Dr. Animo an einer gigantischen DNA-Saugmaschine arbeitet. Er lacht irre: 'Bald wird die gesamte Fauna der Erde meinen mutierten Ameisen gehorchen!'",
        "background": "./game_images/background_ben_mine.png",
        "character": "./game_images/character_ben_animo.png",
        "choices": [
            { "text": "Animo sofort im Sturzflug angreifen", "next": "c2_ben_11", "karma": -3 },
            { "text": "Heimlich die Energiekabel der Maschine sabotieren", "next": "c2_ben_12", "karma": 4 }
        ]
    },

    "c2_ben_5": {
        "text": "Waehrend ihr versucht, den Rust Bucket zu starten, schlagen drei von Vilgax' biomechanischen Drohnen durch das Dach! Sie feuern laehmende Plasmastrahlen ab. Ben wird zu Boden geworfen.",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Als 'Feuerteufel' (Heatblast) die Drohnen schmelzen", "next": "c2_ben_13", "karma": -4 },
            { "text": "Gwen mit einem improvisierten Schutzschild decken", "next": "c2_ben_14", "karma": 2 }
        ]
    },

    "c2_ben_6": {
        "text": "Du rammst den Hirsch, doch die Wucht der Mutation laesst dich abprallen. Du krachst in den Rust Bucket und beschaedigst die Sensoren. Opa Max schaut finster drein.",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Trotzdem das Klempner-Gegenmittel im Wald suchen", "next": "c2_ben_15" },
            { "text": "Dich fuer den Fehler entschuldigen und Gwens Rat folgen", "next": "c2_ben_7", "karma": 2 }
        ]
    },

    "c2_ben_7": {
        "text": "Gwen schleudert eine Kette aus rosa Mana-Energie, die das Tier fixiert. Der Hirsch schuettelt den Kopf, bricht aus der Gedankenkontrolle aus und hinterlaesst beim Weglaufen ein gluehendes Vilgax-Abzeichen.",
        "background": "./game_images/background_ben_woods.png",
        "choices": [
            { "text": "Das Vilgax-Abzeichen aufheben", "next": "ben_vilgax_crest", "gain_item": "ben_vilgax_crest" },
            { "text": "Das Abzeichen ignorieren und Gwens Magie weiter staerken", "next": "c2_ben_10", "karma": 3 }
        ]
    },

    "ben_vilgax_crest": {
        "text": "Du erhaeltst ein schweres, ausserirdisches Vilgax-Abzeichen. Es strahlt pure Bedrohung aus.",
        "background": "./game_images/background_ben_woods.png",
        "character": "./game_images/item_ben_vilgax_crest.png",
        "choices": [
            { "text": "Das Abzeichen mit der Omnitrix scannen", "next": "c2_ben_8" },
            { "text": "Direkt zu Dr. Animos Mine laufen", "next": "c2_ben_15" }
        ]
    },

    "c2_ben_8": {
        "text": "Durch den Scan oder den Klempner-Schluessel kalibriert sich die Omnitrix neu. Das Display leuchtet wieder im hellen, sicheren Gruen! Du hast vollen Zugriff auf 'Komet' (XLR8) und 'Vierarme' (Four Arms).",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Als XLR8 blitzschnell die Mine stuermen", "next": "c2_ben_25", "karma": 4 },
            { "text": "Als Four Arms auf Vilgax' Drohnen warten", "next": "c2_ben_16", "karma": 2 }
        ]
    },

    "c2_ben_9": {
        "text": "Die Omnitrix entlaedt sich unkontrolliert und huellt den ganzen Campingplatz in dichten, stinkenden Alien-Schleim. Kevin 11 tritt aus den Schatten und grinst dreckig: 'Danke fuer die Energie, Tennyson!'",
        "background": "./game_images/background_ben_woods.png",
        "character": "./game_images/character_ben_kevin.png",
        "choices": [
            { "text": "Gegen den mutierten Kevin kaempfen", "next": "c2_ben_17", "karma": -5 },
            { "text": "Ihn mit einer Luege in die Mine locken", "next": "c2_ben_13", "karma": 3 }
        ]
    },

    "c2_ben_10": {
        "text": "Der Himmel faerbt sich pechschwarz, als ein gigantisches Vilgax-Schlachtschiff ueber den Baumkronen auftaucht. Ein Traktorstrahl beginnt, den Rust Bucket nach oben zu saugen. Die Zeit draengt!",
        "background": "./game_images/background_ben_sky.png",
        "choices": [
            { "text": "Sich absichtlich hochsaugen lassen, um das Schiff zu sabotieren", "next": "c2_ben_18", "karma": 5 },
            { "text": "Den Traktorstrahl mit geballter Alien-Kraft beschiessen", "next": "c2_ben_19", "karma": -2 }
        ]
    },

    "c2_ben_11": {
        "text": "Dr. Animo feuert seine Mutations-Strahlenkanone ab. Wildmutt wird getroffen und mutiert zu einer noch wilderen, unkontrollierbaren Bestie, die Opa Max angreift! Du musst die Transformation sofort abbrechen.",
        "background": "./game_images/background_ben_mine.png",
        "choices": [
            { "text": "Die Omnitrix mit dem Klempner-Schluessel ueberlasten", "next": "c2_ben_20", "required_item": "ben_omnitrix_key" },
            { "text": "Gwen um einen magischen Beruhigungszauber anflehen", "next": "c2_ben_14", "karma": -1 }
        ]
    },

    "c2_ben_12": {
        "text": "Als Grey Matter oder durch clevere Sabotage liest du Dr. Animos Plaene. Er arbeitet im Auftrag von Vilgax! Vilgax will die mutierte Tier-DNA nutzen, um seine Drohnen-Armee unbesiegbar zu machen.",
        "background": "./game_images/background_ben_mine.png",
        "choices": [
            { "text": "Die Daten auf ein Klempner-Pad laden", "next": "ben_plumber_pad", "gain_item": "ben_plumber_pad" },
            { "text": "Die Konsole sofort zertruemmern", "next": "c2_ben_16", "karma": -2 }
        ]
    },

    "ben_plumber_pad": {
        "text": "Du erhaeltst ein Klempner-Datenpad mit Vilgax' Satelliten-Frequenzen.",
        "background": "./game_images/background_ben_mine.png",
        "character": "./game_images/item_ben_plumber_pad.png",
        "choices": [
            { "text": "Den Rust Bucket kontaktieren", "next": "c2_ben_26" },
            { "text": "Den Satelliten direkt angreifen", "next": "c2_ben_23" }
        ]
    },

    "c2_ben_13": {
        "text": "Heatblasts Feuer setzt den halben Wald in Brand! Die Drohnen fliehen, aber der Campingplatz brennt lichterloh. Die Tiere schreien in Panik und das Chaos ist perfekt.",
        "background": "./game_images/background_ben_woods.png",
        "choices": [
            { "text": "Das Feuer als 'Wasserbueffel' (Upgrade) ersticken", "next": "c2_ben_22", "karma": 4 },
            { "text": "Das Feuer ignorieren und Animo in die Mine folgen", "next": "c2_ben_15", "karma": -4 }
        ]
    },

    "c2_ben_14": {
        "text": "Gwen schafft es, eine magische Schutzbarriere aufzubauen, waehrend du die Drohnen ablenkst. Doch die Barriere splittert langsam unter dem schweren Beschuss. Ihr braucht Verstaerkung.",
        "background": "./game_images/background_ben_woods.png",
        "choices": [
            { "text": "Das DNA-Ei auf die Drohnen werfen, um sie kurzzuschliessen", "next": "c2_ben_26", "required_item": "ben_mutation_egg" },
            { "text": "Mit roher Gewalt als Four Arms durchbrechen", "next": "c2_ben_24", "karma": -3 }
        ]
    },

    "c2_ben_15": {
        "text": "Ihr erreicht die Mine, doch der Eingang ist mit einer schweren Klempner-Sicherheitstuer verriegelt, die Dr. Animo modifiziert hat. Ein falscher Code loest Giftgas aus.",
        "background": "./game_images/background_ben_mine.png",
        "choices": [
            { "text": "Die Tuer mit dem Klempner-Schluessel hacken", "next": "c2_ben_26", "required_item": "ben_omnitrix_key" },
            { "text": "Die Tuer als Four Arms gewaltsam aus den Angeln reissen", "next": "c2_ben_24", "karma": -3 }
        ]
    },

    "c2_ben_16": {
        "text": "Vilgax' Elite-Drohnen landen und riegeln das gesamte Gebiet ab. Sie scannen die Omnitrix und bereiten den finalen Extraktions-Laser vor. Ben steht allein gegen eine Armee.",
        "background": "./game_images/background_ben_woods.png",
        "choices": [
            { "text": "Das Vilgax-Abzeichen nutzen, um die Drohnen zu taeuschen", "next": "c2_ben_30", "required_item": "ben_vilgax_crest" },
            { "text": "Sich schreiend in den Kampf stuerzen", "next": "c2_ben_27", "karma": -5 }
        ]
    },

    "c2_ben_17": {
        "text": "Kevin 11 hat Teile von Diamondheads und Heatblasts Kraeften absorbiert und schleudert brennende Kristalle nach dir! Der Rust Bucket wird schwer getroffen und explodiert fast.",
        "background": "./game_images/background_ben_woods.png",
        "character": "./game_images/character_ben_kevin.png",
        "choices": [
            { "text": "Ihn mit Gwens Zauberbuechern ablenken", "next": "c2_ben_28", "karma": 2 },
            { "text": "Wuetend zurueckschlagen", "next": "c2_ben_24", "karma": -4 }
        ]
    },

    "c2_ben_18": {
        "text": "Im Inneren des Vilgax-Schiffes werdet ihr sofort von Roboter-Wachen umstellt. Doch Bens Grinsen bleibt: 'Ihr habt mich genau da, wo ich euch haben wollte!'",
        "background": "./game_images/background_ben_ship.png",
        "choices": [
            { "text": "Die Schiffskonsole mit dem Klempner-Schluessel infizieren", "next": "c2_ben_30", "required_item": "ben_omnitrix_key" },
            { "text": "Als 'Upgrade' (Upgrade) mit dem Schiff verschmelzen", "next": "c2_ben_26", "karma": 5 }
        ]
    },

    "c2_ben_19": {
        "text": "Der Beschuss des Traktorstrahls loest eine gravitative Singularitaet aus! Ganze Baeume, Felsen und der Rust Bucket wirbeln unkontrolliert durch die Luft. Die Mine stuerzt ein.",
        "background": "./game_images/background_ben_sky.png",
        "choices": [
            { "text": "Opa Max und Gwen mit XLR8 retten", "next": "c2_ben_28", "karma": 5 },
            { "text": "Sich nur selbst als 'Fliege' in Sicherheit bringen", "next": "c2_ben_27", "karma": -5 }
        ]
    },

    "c2_ben_20": {
        "text": "Der Klempner-Schluessel erzwingt einen harten Reset der Omnitrix. Du wirst schmerzhaft zurueckverwandelt, aber die Mutations-Welle bricht ab. Animo flucht lautstark in seiner Steuerkanzel.",
        "background": "./game_images/background_ben_mine.png",
        "character": "./game_images/character_ben_animo.png",
        "choices": [
            { "text": "Animos Kanzel mit dem Klempner-Pad hacken", "next": "c2_ben_30", "required_item": "ben_plumber_pad" },
            { "text": "Opa Max die Laserkanone des Rust Buckets abfeuern lassen", "next": "c2_ben_27", "karma": 3 }
        ]
    },

    "c2_ben_22": {
        "text": "Als Upgrade verschmilzt du mit dem Loeschsystem des Rust Buckets und erzeugst einen gigantischen, chemischen Regenschauer, der das Feuer loescht und die Drohnen kurzschliesst.",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Direkt zum Mutterschiff fliegen", "next": "c2_ben_23" },
            { "text": "Zu Fuss den Wald sichern", "next": "c2_ben_24", "karma": -1 }
        ]
    },

    "c2_ben_23": {
        "text": "Du erreichst die Stratosphaere, doch Vilgax' Hauptlaser ist bereits zu 99% aufgeladen. Ein einziger Schuss wird das Klempner-Hauptquartier vernichten. Du musst sofort handeln.",
        "background": "./game_images/background_ben_sky.png",
        "choices": [
            { "text": "Den Code des Klempner-Pads einspeisen", "next": "c2_ben_30", "required_item": "ben_plumber_pad" },
            { "text": "Als 'Stahlschaedel' (Diamondhead) den Laser physisch blockieren", "next": "c2_ben_27", "karma": -2 }
        ]
    },

    "c2_ben_24": {
        "text": "Rohe Gewalt fuehrt zu einer gewaltigen Explosion der DNA-Tanks! Dr. Animos Mine stuerzt komplett ein. Die Schurken entkommen im Chaos, und die Gegend gleicht einem Schlachtfeld.",
        "background": "./game_images/background_ben_mine.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" },
            { "text": "Den Rust Bucket muehsam reparieren", "next": "c3_start", "karma": 2, "required_item": "ben_plumber_pad" }
        ]
    },

    "c2_ben_25": {
        "text": "Als XLR8 bist du so schnell, dass Dr. Animo dich nicht einmal kommen sieht! Du reisst die Hauptplatine aus seiner Maschine, bevor er den Hebel umlegen kann. Er jammert bitterlich.",
        "background": "./game_images/background_ben_mine.png",
        "character": "./game_images/character_ben_animo.png",
        "choices": [
            { "text": "Ihn den Klempnern uebergeben", "next": "c2_ben_30", "karma": 4 },
            { "text": "Seine restlichen Waffen pluendern", "next": "c2_ben_27", "karma": -2 }
        ]
    },

    "c2_ben_26": {
        "text": "Dank perfekter Vorbereitung und den richtigen Items neutralisiert ihr Animos Apparatur komplett. Das ausserirdische Signal bricht ab, und das Vilgax-Schiff verliert die Orientierung.",
        "background": "./game_images/background_ben_mine.png",
        "choices": [
            { "text": "Den finalen Schlag gegen Vilgax' Drohnen fuehren", "next": "c2_ben_30" },
            { "text": "Sich zurueckziehen und den Sieg feiern", "next": "c2_ben_28", "karma": -1 }
        ]
    },

    "c2_ben_27": {
        "text": "Das Schlachtschiff explodiert in einer gewaltigen Nova am Nachthimmel. Vilgax entkommt in einer Rettungskapsel, waehrend der Rust Bucket schwer beschaedigt auf der Erde zurueckbleibt. Ben reibt sich den Nacken.",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_ben_28": {
        "text": "Gwen nutzt ihre gesamte verbliebene Mana-Energie, um ein Schutzschild um den Rust Bucket zu weben, waehrend Opa Max die Triebwerke neu startet. Ihr entkommt den herabstuerzenden Truemmern haarscharf.",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Vilgax am Boden stellen", "next": "c2_ben_29" },
            { "text": "Sich in Sicherheit bringen", "next": "c2_ben_27", "karma": 4 }
        ]
    },

    "c2_ben_29": {
        "text": "Vilgax' riesige, gepanzerte Gestalt tritt aus dem Rauch des abgestuerzten Schiffs. 'Tennyson... Du bist eine Plage! Gib mir die Omnitrix, oder ich reisse diese Welt in Stuecke!' Er zieht seine riesige Laserklinge.",
        "background": "./game_images/background_ben_woods.png",
        "character": "./game_images/character_ben_vilgax.png",
        "choices": [
            { "text": "Ihn mit vereinten Kraeften attackieren", "next": "c2_ben_30", "karma": 5 },
            { "text": "Die Omnitrix auf Selbstzerstoerung drohen lassen", "next": "c2_ben_30", "karma": 3 }
        ]
    },

    "c2_ben_30": {
        "text": "Mit einer meisterhaften Kombination aus Teamwork und Bens staerksten Aliens zerschmettert ihr Vilgax' kybernetische Ruestung und jagt Dr. Animo in die Flucht. Die Omnitrix leuchtet in einem beruhigenden, konstanten Gruen. Opa Max klopft Ben auf die Schulter: 'Gute Arbeit, Junge. Du wirst ein echter Held.' Ben grinst: 'Klar, Opa! Das war doch ein Kinderspiel!'",
        "background": "./game_images/background_ben_rustbucket.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_sj_start": {
        "text": "Ein unheimlicher roter Nebel legt sich ueber das dystopische Cyber-oedland. Jack steht medtierend auf einem Huegel, das magische Schwert auf den Knien. Ploetzlich zerreisst das mechanische Kreischen von Akus Beetle-Drones die Stille. Ein Hologramm von Akus brennenden Augen erscheint am Himmel und lacht haemisch. Du musst Jack helfen, die Bedrohung einzuschaetzen.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Mit Jacks Schwert die Dronen-Welle frontal abwehren", "next": "c2_sj_1", "karma": 1 },
            { "text": "In die Ruinen der kybernetischen Stadt fluechten", "next": "c2_sj_2" },
            { "text": "Nach einem verborgenen Zeitportal in den Bergen suchen", "next": "c2_sj_3", "karma": 2 },
            { "text": "Die Geister der Ahnen um Fuehrung anflehen", "next": "c2_sj_4", "karma": 3 }
        ]
    },

    "c2_sj_1": {
        "text": "Jack wirbelt wie ein Tornado durch die Reihen der Kaefer-Drohnen. Metall splittert, doch die Masse ist erdrueckend. Eine beschaedigte Anfuehrer-Drohne stuerzt direkt vor dir ab und ihr Kern legt ein seltsames Steuerungsmodul frei.",
        "background": "./game_images/background_sj_wasteland.png",
        "character": "./game_images/character_sj_jack.png",
        "choices": [
            { "text": "Das Drohnen-Steuerungsmodul bergen", "next": "sj_drone_core", "gain_item": "sj_drone_core" },
            { "text": "Den Kern zerstoeren und Jack den Ruecken freihalten", "next": "c2_sj_5", "karma": 2 }
        ]
    },

    "sj_drone_core": {
        "text": "Du erhaeltst den Drohnen-Steuerungsmodul. Er funkt noch immer auf Akus privaten Frequenzen.",
        "background": "./game_images/background_sj_wasteland.png",
        "character": "./game_images/item_sj_drone_core.png",
        "choices": [
            { "text": "Die Signale mit Jacks Instinkten kombinieren", "next": "c2_sj_8" },
            { "text": "Das Modul in den Ruinen der Stadt untersuchen", "next": "c2_sj_10" }
        ]
    },

    "c2_sj_2": {
        "text": "In den neonbeleuchteten, dreckigen Gassen der Cyber-Stadt trefft ihr auf den Schotten! Er schwingt sein magisches Claymore-Schwert und lacht: 'Jack, mein Junge! Schoen dich zu sehen! Ich dachte schon, Aku haette dich zu einem Toaster verarbeitet!' Doch hinter ihm taucht Demongo, der Seelensammler, auf.",
        "background": "./game_images/background_sj_cybercity.png",
        "character": "./game_images/character_sj_scotsman.png",
        "choices": [
            { "text": "Zusammen mit dem Schotten die Seelen-Krieger angreifen", "next": "c2_sj_6", "karma": -2 },
            { "text": "Demongos Artefakt im Chaos stehlen", "next": "c2_sj_7", "karma": 3 }
        ]
    },

    "c2_sj_3": {
        "text": "Hoch in den nebligen Bergen findet ihr einen uralten Tempel. Inmitten der Ruinen schwebt ein blau leuchtendes Zeitportal. Doch es wird von drei blinden Bogenschuetzen bewacht, deren Gehoer absolut perfekt ist. Jeder Schritt koennte toedlich sein.",
        "background": "./game_images/background_sj_temple.png",
        "choices": [
            { "text": "Sich lautlos an den Schuetzen vorbeischleichen", "next": "sj_ancestor_amulet", "gain_item": "sj_ancestor_amulet" },
            { "text": "Sie ablenken, indem du Steine wirfst", "next": "c2_sj_9", "karma": -2 }
        ]
    },

    "sj_ancestor_amulet": {
        "text": "Du weichst den Schuetzen aus und findest ein uraltes Ahnen-Amulett auf dem Altar des Tempels.",
        "background": "./game_images/background_sj_temple.png",
        "character": "./game_images/item_sj_ancestor_amulet.png",
        "choices": [
            { "text": "Das Amulett Jack ueberreichen", "next": "c2_sj_15" },
            { "text": "Das Portal genauer untersuchen", "next": "c2_sj_12" }
        ]
    },

    "c2_sj_4": {
        "text": "Jack kniet nieder. Die Geister seiner Vorfahren erscheinen als sanftes weisses Licht. Sie fluestern: 'Aku schlaeft nicht. Er benutzt die Seelen der Vergangenheit, um die Zukunft zu versiegeln. Finde den Seilenstein.' Ploetzlich wird die Vision von feindlichen Kopfgeldjaegern unterbrochen.",
        "background": "./game_images/background_sj_wasteland.png",
        "character": "./game_images/character_sj_spirits.png",
        "choices": [
            { "text": "Jack gegen die Kopfgeldjaeger verteidigen", "next": "c2_sj_11", "karma": 4 },
            { "text": "In den Tempel in den Bergen fliehen", "next": "c2_sj_12", "karma": -1 }
        ]
    },

    "c2_sj_5": {
        "text": "Die Drohnen explodieren in einer gewaltigen Welle aus gruenem Feuer. Der Rauch vernebelt Jacks Sicht. Aus den Schatten tritt der schreckliche Shinobi-Krieger, ein Meister der Dunkelheit, und fordert Jack zum Duell.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Jack das Licht bringen, um den Schatten zu brechen", "next": "c2_sj_13", "karma": 3 },
            { "text": "Jack im Dunkeln allein kaempfen lassen", "next": "c2_sj_14", "karma": -3 }
        ]
    },

    "c2_sj_6": {
        "text": "Der Schotte kaempft heroisch, doch Demongos Armee aus unendlichen Seelen regeneriert sich staendig. Der Schotte wird umzingelt. Ihr muesst eine schwere Entscheidung treffen, um ihn zu retten.",
        "background": "./game_images/background_sj_cybercity.png",
        "choices": [
            { "text": "Demongos Seelen-Essenz mit dem Drohnen-Modul ueberlasten", "next": "c2_tt_15", "required_item": "sj_drone_core" },
            { "text": "Einen verzweifelten Frontalangriff wagen", "next": "c2_sj_24", "karma": -4 }
        ]
    },

    "c2_sj_7": {
        "text": "Waehrend der Schotte Demongo ablenkt, schleichst du dich von hinten heran und reisst Demongo einen gluehenden Seelenstein aus der Krone. Demongo kreischt vor Schmerz auf und seine Armee erzittert.",
        "background": "./game_images/background_sj_cybercity.png",
        "character": "./game_images/character_sj_demongo.png",
        "choices": [
            { "text": "Den Seelenstein einstecken", "next": "sj_soul_gem", "gain_item": "sj_soul_gem" },
            { "text": "Den Stein sofort am Boden zertruemmern", "next": "c2_sj_10", "karma": 4 }
        ]
    },

    "sj_soul_gem": {
        "text": "Du erhaeltst Demongos Seelenstein. Er pulsiert mit der Energie gefangener Krieger.",
        "background": "./game_images/background_sj_cybercity.png",
        "character": "./game_images/item_sj_soul_gem.png",
        "choices": [
            { "text": "Jack den Stein zeigen", "next": "c2_sj_8" },
            { "text": "Den Stein nutzen, um das Zeitportal zu oeffnen", "next": "c2_sj_15" }
        ]
    },

    "c2_sj_8": {
        "text": "Jack erkennt das Muster hinter Akus Angriffen. 'Aku versucht, die Portale mit dieser Technologie und den geraubten Seelen zu sperren.' Ploetzlich bebt die Erde – Aku selbst manifestiert einen Teil seines riesigen, schwarzen Koerpers ueber dem Areal.",
        "background": "./game_images/background_sj_cybercity.png",
        "character": "./game_images/character_sj_aku.png",
        "choices": [
            { "text": "Aku direkt mit dem magischen Schwert attackieren", "next": "c2_sj_18", "karma": 5 },
            { "text": "Den Rueckzug in die Berge antreten", "next": "c2_sj_19", "karma": -2 }
        ]
    },

    "c2_sj_9": {
        "text": "Die blinden Bogenschuetzen hoeren das Geraeusch sofort! Ein toedlicher Pfeilhagel geht auf euch nieder. Jack kann dich gerade noch rechtzeitig hinter eine Saeule reissen, doch das Portal beginnt instabil zu flackern.",
        "background": "./game_images/background_sj_temple.png",
        "choices": [
            { "text": "Das Portal trotz Gefahr betreten", "next": "c2_sj_17", "karma": -4 },
            { "text": "Sich zurueckziehen und Jacks Schwert vertrauen", "next": "c2_sj_13", "karma": 2 }
        ]
    },

    "c2_sj_10": {
        "text": "Die Realitaet um euch herum verzerrt sich. Aku schickt seine staerksten Elite-Assassinen – die hochmodernen, moerderischen Roboter-Loewen. Sie umzingeln die Cyber-Stadt und schneiden jeden Fluchtweg ab.",
        "background": "./game_images/background_sj_cybercity.png",
        "choices": [
            { "text": "Sich mit dem Schotten Ruecken an Ruecken verteidigen", "next": "c2_sj_18", "karma": 5 },
            { "text": "Das Ahnen-Amulett nutzen, um ein Schutzschild zu rufen", "next": "c2_tt_19", "required_item": "sj_ancestor_amulet" }
        ]
    },

    "c2_sj_11": {
        "text": "Jack pariert die Angriffe der Kopfgeldjaeger mit chirurgischer Praezision. Doch im Eifer des Gefechts wird er von einer Giftnadel gestreift. Seine Bewegungen werden langsamer und sein Blick verschwimmt.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Das Ahnen-Amulett nutzen, um das Gift zu reinigen", "next": "c2_sj_20", "required_item": "sj_ancestor_amulet" },
            { "text": "Jack stuetzen und verzweifelt einen Unterschlupf suchen", "next": "c2_sj_15", "karma": -2 }
        ]
    },

    "c2_sj_12": {
        "text": "Das Zeitportal zieht Energie aus der Umgebung ab und droht, alles in Reichweite zu atomisieren. Jack starrt hinein: 'Es ist manipuliert... Eine Falle von Aku!'",
        "background": "./game_images/background_sj_temple.png",
        "choices": [
            { "text": "Demongos Seelenstein opfern, um das Portal zu reinigen", "next": "c2_sj_26", "required_item": "sj_soul_gem" },
            { "text": "Das Portal mit Jacks Schwert zerstoeren, bevor es explodiert", "next": "c2_sj_25", "karma": 3 }
        ]
    },

    "c2_sj_13": {
        "text": "Mithilfe deines Feuers oder Spiegels reflektierst du das Licht. Der Shinobi-Krieger verliert seine Tarnung im Schatten. Jack nutzt die Millisekunde und streckt den finsteren Krieger mit einem einzigen, sauberen Hieb nieder.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Dem Shinobi seine Schatten-Ruestung abnehmen", "next": "sj_shadow_armor", "gain_item": "sj_shadow_armor" },
            { "text": "Sofort weiter zu Akus Zentralturm reisen", "next": "c2_sj_25", "karma": 2 }
        ]
    },

    "sj_shadow_armor": {
        "text": "Du erhaeltst die Ruestung des Shinobi-Kriegers. Sie macht den Traeger im Schatten fast unsichtbar.",
        "background": "./game_images/background_sj_wasteland.png",
        "character": "./game_images/item_sj_shadow_armor.png",
        "choices": [
            { "text": "Die Ruestung anlegen", "next": "c2_sj_10" },
            { "text": "Sie fuer spaeter im Gepaeck verstauen", "next": "c2_sj_15" }
        ]
    },

    "c2_sj_14": {
        "text": "Ohne Licht wird Jack im finsteren Nebel schwer am Arm verletzt. Er verliert kurzzeitig den Halt an seinem Schwert. Der Shinobi triumphiert fast, waehrend Akus Lachen durch das Tal droehnt.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Dich schuetzend vor Jack werfen", "next": "c2_sj_22", "karma": 5 },
            { "text": "Weglaufen und den Schotten zur Hilfe holen", "next": "c2_sj_23", "karma": -4 }
        ]
    },

    "c2_sj_15": {
        "text": "Ihr fluechtet tiefer in die verschneiten Paesse. Die Kaelte setzt euch zu, und hinter euch jagen euch Akus fliegende Spionage-Drohnen. Ihr braucht einen sicheren Weg vorbei an den Wachen des Berges.",
        "background": "./game_images/background_sj_temple.png",
        "choices": [
            { "text": "Die Drohnen mit dem Drohnen-Modul umprogrammieren", "next": "c2_sj_26", "required_item": "sj_drone_core" },
            { "text": "Sich mit der Schatten-Ruestung unbemerkt vorbeischleichen", "next": "c2_sj_26", "required_item": "sj_shadow_armor" }
        ]
    },

    "c2_sj_16": {
        "text": "Das Signal bricht zusammen. Aku erkennt, dass du seine Befehle manipulierst. Er ballt seine riesige Faust und schlaegt mit purer, roher Gewalt mitten in das Bergmassiv ein!",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Dem Schlag ausweichen", "next": "c2_sj_25" },
            { "text": "Den Schlag mit Jacks Schwert blocken", "next": "c2_sj_27", "karma": -2 }
        ]
    },

    "c2_sj_17": {
        "text": "Das instabile Portal schleudert euch nicht in die Vergangenheit, sondern mitten in eine von Akus grausamsten Arenen der Zukunft. Gladiatoren-Roboter aktivieren ihre Klingen.",
        "background": "./game_images/background_sj_cybercity.png",
        "choices": [
            { "text": "Gemeinsam um euer Leben kaempfen", "next": "c2_sj_25", "karma": 2 },
            { "text": "Ein Versteck in der Arena suchen", "next": "c2_sj_24", "karma": -3 }
        ]
    },

    "c2_sj_18": {
        "text": "Jacks magisches Schwert schneidet durch Akus schwarze Masse wie ein heisses Messer durch Butter. Aku heult auf und zieht seine Tentakel zurueck, hinterlaesst aber eine brennende Spur der Zerstoerung.",
        "background": "./game_images/background_sj_wasteland.png",
        "character": "./game_images/character_sj_aku.png",
        "choices": [
            { "text": "Ihm den finalen Stoss versetzen", "next": "c2_sj_30", "karma": 5 },
            { "text": "Das brennende Dorf zuerst evakuieren", "next": "c2_sj_27", "karma": 4 }
        ]
    },

    "c2_sj_19": {
        "text": "Euer Rueckzug gibt Aku Zeit, die gesamte Realitaet dieses Zeitalters weiter zu korrumpieren. Der Himmel brennt dauerhaft schwarz und die Hoffnung der Bewohner schwindet gegen Null.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Den Widerstand neu formieren", "next": "c2_sj_27", "karma": -3 },
            { "text": "Akus Zentralturm heimlich infiltrieren", "next": "c2_sj_28", "karma": 4 }
        ]
    },

    "c2_sj_20": {
        "text": "Das Amulett leuchtet in reinem, goldenem Licht. Das duestere Gift weicht aus Jacks Koerper und seine Augen erlangen ihre messerscharfe Konzentration zurueck. Er dankt dir mit einer tiefen Verbeugung.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Aku gemeinsam entgegentreten", "next": "c2_sj_30" }
        ]
    },

    "c2_sj_22": {
        "text": "Du faengst den Schlag des Shinobi ab und wirst schwer verletzt. Doch dein Opfer gibt Jack den noetigen Zorn! Mit einem gewaltigen Schrei spaltet er die Dunkelheit und vernichtet den Feind.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Dich von Jack verarzten lassen", "next": "c2_sj_25" }
        ]
    },

    "c2_sj_23": {
        "text": "Du verlierst wertvolle Zeit. Als du mit dem Schotten zurueckkehrst, ist das Schlachtfeld leer und Jacks Schwert liegt einsam im Staub. Aku hat ihn entfuehrt.",
        "background": "./game_images/background_sj_cybercity.png",
        "choices": [
            { "text": "Ihn aus Akus Turm befreien", "next": "c2_sj_28", "karma": -4 }
        ]
    },

    "c2_sj_24": {
        "text": "Der brute-force Kampf gegen Demongos Armee erschoepft euch vollends. Ihr muesst euch unter schweren Verlusten zurueckziehen. Jacks Schwert verliert durch den Kontakt mit so viel Dunkelheit kurzzeitig seinen Glanz.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Einen meditativen Ort zur Reinigung suchen", "next": "c2_sj_27", "karma": -2 }
        ]
    },

    "c2_sj_25": {
        "text": "Ihr erreicht den Fuss von Akus gigantischem Zentralturm. Pechschwarze Dornen ragen kilometerweit in den Himmel. Hier oben wird sich das Schicksal dieser aera entscheiden.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Den Turm stuermen und Aku konfrontieren", "next": "c2_sj_29" }
        ]
    },

    "c2_sj_26": {
        "text": "Dank deiner cleveren Vorbereitung und den gesammelten Items ueberlistet ihr Akus Verteidigungssysteme komplett. Das Portal im Tempel stabilisiert sich und strahlt ein reines Zeit-Signal aus.",
        "background": "./game_images/background_sj_temple.png",
        "choices": [
            { "text": "Das Portal aktivieren und Aku den Weg abschneiden", "next": "c2_sj_30" }
        ]
    },

    "c2_sj_27": {
        "text": "Der Zentralturm erzittert unter einer gewaltigen Explosion. Aku zieht sich in den Kern der Erde zurueck, um seine Wunden zu regenerieren. Die Welt ist vorerst gerettet, doch der Weg in die Vergangenheit bleibt Jack verwehrt.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_sj_28": {
        "text": "Der Schotte und die verbliebenen Rebellen starten einen heroischen Ablenkungsangriff auf die Tore des Turms, wodurch Jack und du unbemerkt bis in Akus Thronsaal vordringen koennt.",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Aku im Thronsaal ueberraschen", "next": "c2_sj_29" }
        ]
    },

    "c2_sj_29": {
        "text": "Aku nimmt seine monstroese Urform an – ein gigantischer Drache aus reinem, schwarzem Hass. 'Jack! Du wirst diese aera niemals verlassen! Du wirst hier sterben, in der Zukunft, die MEIN ist!'",
        "background": "./game_images/background_sj_wasteland.png",
        "character": "./game_images/character_sj_aku.png",
        "choices": [
            { "text": "Ihn im Namen der Gerechtigkeit attackieren", "next": "c2_sj_30", "karma": 5 }
        ]
    },

    "c2_sj_30": {
        "text": "Mit einem finalen, meisterhaften Hieb treibt Jack das magische Schwert tief in Akus Kern. Das pure Licht der Klinge loest die finstere Kreatur in schreienden Sternenstaub auf. Der rote Nebel weicht warmem Sonnenlicht. Jack steckt sein Schwert ein, blickt dankbar zu dir und wendet sich dem Horizont zu. 'Der Kampf war lang, mein Freund. Aber die Zukunft ist endlich frei.'",
        "background": "./game_images/background_sj_wasteland.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },


    "c2_rs_start": {
        "text": "Es ist ein unertraeglich heisser Nachmittag im Park. Mordecai und Rigby haben absolut keine Lust, den alten Rasenmaeher zu reparieren. Stattdessen haben sie eine mysterioese, verstaubte Videospiel-Kassette namens The Destroyer of Worlds gefunden und sie heimlich in den Fernseher geschoben. Als Rigby den Startknopf drueckt, schiesst ein gigantischer, pixeliger Laserstrahl aus dem Bildschirm und saugt Benson mitsamt seinem Klemmbrett direkt in das Spiel!",
        "background": "./game_images/background_rs_living_room.png",
        "choices": [
            { "text": "Skips in der Garage um Rat fragen", "next": "c2_rs_1", "karma": 2 },
            { "text": "Muscle Man nach einem Cheat-Code fragen", "next": "c2_rs_2" },
            { "text": "Pops um alte Muenzen fuer den Automaten bitten", "next": "c2_rs_3", "karma": 1 },
            { "text": "Den verbotenen Power-Glove-Controller aus Bensons Buero holen", "next": "c2_rs_4", "karma": -1 }
        ]
    },

    "c2_rs_1": {
        "text": "Skips ballt seine riesigen Faeuste und seufzt schwer. Ja, ich habe das schon mal gesehen. Das ist kein normales Spiel, sondern ein interdimensionales Gefaengnis fuer jaehzornige Parkmanager. Wenn wir den Highscore nicht knacken, bleibt Benson fuer immer ein Pixel. Er reicht dir ein golden leuchtendes, unleserliches Buch aus seinem Tresor.",
        "background": "./game_images/background_rs_skips_garage.png",
        "character": "./game_images/character_rs_skips.png",
        "choices": [
            { "text": "Das Buch der ewigen Parkregeln mitnehmen", "next": "rs_park_rules", "gain_item": "rs_park_rules" },
            { "text": "Das Buch ablehnen und direkt mit Skips Werkzeugen das Spiel aufschrauben", "next": "c2_rs_5", "karma": -2 }
        ]
    },

    "rs_park_rules": {
        "text": "Du haeltst das Buch der ewigen Parkregeln in den Haenden. Jede geschriebene Zeile vibriert voller buerokratischer Magie.",
        "background": "./game_images/background_rs_skips_garage.png",
        "character": "./game_images/item_rs_park_rules.png",
        "choices": [
            { "text": "Die Regeln im Wohnzimmer laut vorlesen", "next": "c2_rs_8" },
            { "text": "Damit zum Kaffeeladen laufen und Margaret um Hilfe bitten", "next": "c2_rs_7" }
        ]
    },

    "c2_rs_2": {
        "text": "Muscle Man schwingt sein Shirt wild im Kreis und johlt laut auf. Wisst ihr, wer noch in einer Arcade-Maschine festsitzt? MEINE MOM! WOOOO! Er rammt vor Begeisterung mit seinem kleinen gruenen Auto den Golfkarren und schleudert eine legendaere, extrem klebrige Fritte aus seinem Vorrat in deine Hand.",
        "background": "./game_images/background_rs_trailer.png",
        "character": "./game_images/character_rs_muscleman.png",
        "choices": [
            { "text": "Die Ultimative Chili-Cheese-Fritte einstecken", "next": "rs_chili_fry", "gain_item": "rs_chili_fry" },
            { "text": "Die Fritte sofort aufessen um mutig zu werden", "next": "c2_rs_6", "karma": -3 }
        ]
    },

    "rs_chili_fry": {
        "text": "Du faengst die Ultimative Chili-Cheese-Fritte auf. Sie verstroemt einen so scharfen Geruch, dass sich die Realitaet leicht verzerrt.",
        "background": "./game_images/background_rs_trailer.png",
        "character": "./game_images/item_rs_chili_fry.png",
        "choices": [
            { "text": "Die klebrige Fritte in die Elektronik des Fernsehers stopfen", "next": "c2_rs_15" },
            { "text": "Damit zum Friedhof gehen und den Sensenmann Death um Hilfe anflehen", "next": "c2_rs_12" }
        ]
    },

    "c2_rs_3": {
        "text": "Pops kichert froehlich und gibt dir statt Geld einen riesigen, funkelnden Lutscher aus seiner Sammlung. Oh, ein exquisites Tauschmittel fuer elektronischen Schabernack! Im selben Moment bricht das Spiel im Haus durch die Waende und schiesst pixelige Laserstrahlen auf den Park-Rasen.",
        "background": "./game_images/background_rs_park_lawn.png",
        "character": "./game_images/character_rs_pops.png",
        "choices": [
            { "text": "Den Kaffeeladen vor den Lasern beschuetzen", "next": "c2_rs_7", "karma": 3 },
            { "text": "Mit Pops Lutscher den Gott des Synthesizers Gary im Weltall rufen", "next": "c2_rs_9", "karma": -1 }
        ]
    },
    "c2_rs_4": {
        "text": "Rigby bricht mit einer Haarnadel Bensons Buerotuer auf. Auf dem Schreibtisch liegt ein verbotenes, kosmisches Keyboard. Damit koennen wir alles machen! Sogar Bensons Kaugummis in echtes Gold verwandeln! Die Tasten fangen an, unheimlich bunt zu gluehen.",
        "background": "./game_images/background_rs_benson_office.png",
        "choices": [
            { "text": "Den The Power-Synthesizer an dich nehmen", "next": "rs_power_synth", "gain_item": "rs_power_synth" },
            { "text": "Das Keyboard ignorieren und lieber Bensons alten Safe knacken", "next": "c2_rs_11", "karma": -4 }
        ]
    },

    "rs_power_synth": {
        "text": "Du nimmst den The Power-Synthesizer an dich. Jede Taste, die du drueckst, veraendert die Welt um dich herum.",
        "background": "./game_images/background_rs_benson_office.png",
        "character": "./game_images/item_rs_power_synth.png",
        "choices": [
            { "text": "Ein Lied spielen um Benson aus dem Bildschirm zu teleportieren", "next": "c2_rs_8" },
            { "text": "Auf den Parkplatz rennen und den Golfkarren mit Musik tunen", "next": "c2_rs_22" }
        ]
    },

    "c2_rs_5": {
        "text": "Du schraubst die Rueckseite der Maschine auf. Ein gewaltiger Schwall aus kochend heissem, pixeligem Kaugummi spritzt heraus! Die klebrige Masse formiert sich zu einer gigantischen Version von Benson als Kaugummi-Monster. Es bruellt laut durch das Haus: WENN IHR DAS NICHT SOFORT AUFRaeUMT SEID IHR GEFEUERT!",
        "background": "./game_images/background_rs_living_room.png",
        "choices": [
            { "text": "Das Kaugummi-Monster mit Schaufeln angreifen", "next": "c2_rs_13", "karma": -4 },
            { "text": "Das Monster mit Rigbys alten Betten ablenken", "next": "c2_rs_14", "karma": 2 }
        ]
    },

    "c2_rs_6": {
        "text": "Die Fritte verursacht sofort heftige Magenkraempfe und Halluzinationen. Der Himmel ueber dem Park verwandelt sich in ein wildes Neon-Szenario der achtziger Jahre. Eine riesige, schwebende Musikkassette taucht auf und fordert euch zu einem Rap-Battle um Bensons Freiheit heraus.",
        "background": "./game_images/background_rs_neon_sky.png",
        "choices": [
            { "text": "Mordecai den Beatbox-Rhythmus vorgeben", "next": "c2_rs_17", "karma": 3 },
            { "text": "Panisch weglaufen und Hi-Five Ghost um Hilfe bitten", "next": "c2_rs_15", "karma": -2 }
        ]
    },

    "c2_rs_7": {
        "text": "Im Kaffeeladen bereiten Margaret und Eileen gerade die Flucht vor. Die Kaffeemaschine ist durch die Strahlung zum Leben erwacht und spuckt kochenden Espresso durch den Raum! Ihr muesst das wildgewordene Geraet sofort stoppen.",
        "background": "./game_images/background_rs_coffee_shop.png",
        "character": "./game_images/character_rs_margaret.png",
        "choices": [
            { "text": "Die Maschine mit den Ewigen Parkregeln besaenftigen", "next": "c2_rs_26", "required_item": "rs_park_rules" },
            { "text": "Den Stecker mit einer Zange herausreissen", "next": "c2_rs_13", "karma": -3 }
        ]
    },

    "c2_rs_8": {
        "text": "Das Videospiel explodiert in einer Pixel-Wolke! Ein gigantischer, schwebender Totenkopf bricht aus dem Gehaeuse und fliegt ueber das Parkgelaende. Es ist der wahre Destroyer of Worlds, und er haelt Benson in einer digitalen Energiekugel gefangen.",
        "background": "./game_images/background_rs_park_lawn.png",
        "character": "./game_images/character_rs_destroyer.png",
        "choices": [
            { "text": "Den Destroyer mit dem Synthesizer in ein Musik-Duell verwickeln", "next": "c2_rs_30", "required_item": "rs_power_synth" },
            { "text": "Ihn mit dem Golfkarren frontal rammen", "next": "c2_rs_19", "karma": -3 }
        ]
    },

    "c2_rs_9": {
        "text": "Gary erscheint in seiner fliegenden Sportwagen-Limousine am rosafarbenen Nachthimmel. Wer wagt es, die kosmische Harmonie mit billigem Park-Zucker zu stoeren? Er sieht das wachsende Arcade-Chaos und schuettelt veraergert den Kopf.",
        "background": "./game_images/background_rs_neon_sky.png",
        "character": "./game_images/character_rs_gary.png",
        "choices": [
            { "text": "Gary ueberreden euch seine magische Laser-Gitarre zu leihen", "next": "c2_rs_18", "karma": 4 },
            { "text": "Heimlich in sein fliegendes Auto einbrechen", "next": "c2_rs_11", "karma": -5 }
        ]
    },

    "c2_rs_10": {
        "text": "Mordecai und Rigby fangen an, sich lautstark im Wohnzimmer zu streiten. Du Idiot, ich habe dir gesagt, wir sollen den Rasen maehen! Halt den Mund, Mordecai, das Spiel ist episch! Waehrend sie zanken, erschafft der Fernseher Hunderte von aggressiven 8-Bit-Gegnern.",
        "background": "./game_images/background_rs_living_room.png",
        "choices": [
            { "text": "Die Pixel-Klone mit der scharfen Fritte wegschmelzen", "next": "c2_rs_26", "required_item": "rs_chili_fry" },
            { "text": "Die Klone mit alten Besen bekaempfen", "next": "c2_rs_14", "karma": -2 }
        ]
    },

    "c2_rs_11": {
        "text": "Deine unueberlegte Aktion beschwoert Death, den Sensenmann auf seinem flammenden Motorrad! Er zieht eine duestere Taschenuhr heraus. Bensons Zeit ist eigentlich noch nicht um, aber euer Pfusch stoert die Unterwelt. Wer verliert, gibt mir seine Seele!",
        "background": "./game_images/background_rs_park_lawn.png",
        "character": "./game_images/character_rs_death.png",
        "choices": [
            { "text": "Death zu einem allesentscheidenden Armdruecken-Match herausfordern", "next": "c2_rs_24", "karma": -4 },
            { "text": "Ihm die ultimative Chili-Fritte als Tauschobjekt anbieten", "next": "c2_rs_26", "required_item": "rs_chili_fry" }
        ]
    },

    "c2_rs_12": {
        "text": "In der staubigen Unterwelt angekommen, sitzt Death in seiner alten Lederjacke auf einer Kiste. Die Chili-Fritte? Mann, die gibt es in der Hoelle seit Ewigkeiten nicht mehr! Dafuer gebe ich euch Bensons Rettungs-Code direkt zurueck. Er kritzelt Zahlen auf ein Brett.",
        "background": "./game_images/background_rs_underworld.png",
        "character": "./game_images/character_rs_death.png",
        "choices": [
            { "text": "Das offizielle Park-Klemmbrett einstecken", "next": "rs_benson_clipboard", "gain_item": "rs_benson_clipboard" }
        ]
    },

    "rs_benson_clipboard": {
        "text": "Du erhaeltst Bensons offizielles Park-Klemmbrett. Auf der Rueckseite steht der geheime Deaktivierungs-Code.",
        "background": "./game_images/background_rs_underworld.png",
        "character": "./game_images/item_rs_benson_clipboard.png",
        "choices": [
            { "text": "Zurueck an die Oberflaeche rennen", "next": "c2_rs_25" },
            { "text": "Den Code sofort ueber das Keyboard einspielen", "next": "c2_rs_26", "required_item": "rs_power_synth" }
        ]
    },

    "c2_rs_13": {
        "text": "Der heftige Kampf eskaliert voellig. Das Kaugummi-Monster schleudert Mordecai durch das morsche Dach des Hauses. Benson schreit wuetend aus dem Schleim: WENN DAS HAUS EINSTueRZT SEID IHR ALLE FueR IMMER GEEEEEFEUERT!",
        "background": "./game_images/background_rs_park_lawn.png",
        "choices": [
            { "text": "Einen riesigen Kampf-Roboter aus alten Roehrenfernsehern bauen", "next": "c2_rs_27", "karma": -3 },
            { "text": "Skips anflehen ein magisches Schutzsiegel auf den Boden zu zeichnen", "next": "c2_rs_28", "karma": 4 }
        ]
    },

    "c2_rs_14": {
        "text": "Die Ablenkung funktioniert nicht lange. Die Spiele-Kassette spuckt ploetzlich ein riesiges, fliegendes Auge aus, das die Parkbaenke in glitzernde Limonade verwandelt. Thomas der Praktikant rennt schreiend im Ziegenkostuem an euch vorbei.",
        "background": "./game_images/background_rs_park_lawn.png",
        "choices": [
            { "text": "Das Auge mit dem The Power-Synthesizer hypnotisieren", "next": "c2_rs_30", "required_item": "rs_power_synth" },
            { "text": "Blind in den Wald fluechten und hoffen dass der Tag endet", "next": "c2_rs_19", "karma": -4 }
        ]
    },

    "c2_rs_15": {
        "text": "Der Golfkarren wird mit Muscle Mans Fritte als Treibstoff gefuettert. Der Karren schiesst wie eine Rakete in den Himmel, bricht durch die Wolkendecke und katapultiert euch direkt in die neonfarbene Dimension des Videospiels!",
        "background": "./game_images/background_rs_digital_space.png",
        "choices": [
            { "text": "Den digitalen Hauptprozessor mit dem Karren rammen", "next": "c2_rs_25" },
            { "text": "Nach Bensons Avatar im hellen Datenstrom suchen", "next": "c2_rs_18", "karma": 3 }
        ]
    },

    "c2_rs_17": {
        "text": "Mordecai legt los und droppt die wildesten Reime der Parkgeschichte! Der Park ist cool, du bist nur Code, wir schicken dich zurueck in den Game-Over-Tod! Die schwebende Musikkassette explodiert vor Ehrfurcht und hinterlaesst ein gluehendes Portal.",
        "background": "./game_images/background_rs_neon_sky.png",
        "choices": [
            { "text": "Durch das Portal direkt zu Benson springen", "next": "c2_rs_25", "karma": 4 },
            { "text": "Das Portal mit den Zeilen der Parkregeln stabilisieren", "next": "c2_rs_26", "required_item": "rs_park_rules" }
        ]
    },

    "c2_rs_18": {
        "text": "Mit Garys Laser-Gitarre bewaffnet feuert Mordecai gewaltige Rock-Akkorde ab, die die pixelige Ruestung des Destroyers wegsprengen. Rigby tanzt wild im Hintergrund, um den Gegner vollkommen zu verwirren.",
        "background": "./game_images/background_rs_digital_space.png",
        "choices": [
            { "text": "Den finalen Power-Akkord auf den Saiten spielen", "next": "c2_rs_30", "karma": 5 },
            { "text": "Benson den Rettungs-Code vom Klemmbrett zurufen", "next": "c2_rs_30", "required_item": "rs_benson_clipboard" }
        ]
    },

    "c2_rs_19": {
        "text": "Euer feiger Rueckzug macht alles nur noch schlimmer. Der Destroyer of Worlds verwandelt das gesamte Parkgelaende in ein unspielbares Retro-Spiel voller toedlicher Stacheln und fliegender Pixel-Schildkroeten. Alles versinkt im Chaos.",
        "background": "./game_images/background_rs_digital_space.png",
        "choices": [
            { "text": "Das schwere Spiel auf die harte Tour durchspielen", "next": "c2_rs_27", "karma": -4 },
            { "text": "Den Synthesizer fuer einen harten Realitaets-Reset nutzen", "next": "c2_rs_30", "required_item": "rs_power_synth" }
        ]
    },

    "c2_rs_22": {
        "text": "Das kosmische Keyboard verwandelt den kleinen Golfkarren in einen gigantischen, intergalaktischen Kampf-Jet mit Flammenwerfern! Mordecai schreit begeistert: Oooooh jaaa! Jetzt reden wir! Ihr fliegt mitten in das feurige Auge des Sturms.",
        "background": "./game_images/background_rs_neon_sky.png",
        "choices": [
            { "text": "Die Laser-Kanonen des Jets voll abfeuern", "next": "c2_rs_30" },
            { "text": "Aus dem Jet springen und den Kern manuell angreifen", "next": "c2_rs_25", "karma": 2 }
        ]
    },

    "c2_rs_24": {
        "text": "Death besiegt Rigby im Armdruecken innerhalb von einer Sekunde. Eure Seelen gehoeren mir! Doch im letzten Moment wirft Mordecai eine schwere Bowlingkugel nach der Sense, was die Zeit kurzfristig einfriert.",
        "background": "./game_images/background_rs_park_lawn.png",
        "choices": [
            { "text": "Zum grossen Parksee fluechten", "next": "c2_rs_27" },
            { "text": "Zurueck ins Haus sprinten", "next": "c2_rs_13", "karma": -1 }
        ]
    },

    "c2_rs_25": {
        "text": "Ihr erreicht das Herz des Arcade-Spiels. Benson haengt hilflos an leuchtenden Digitalkabeln und seine Augen gluehen gefaehrlich rot. Ihr haettet verdammt noch mal den Rasen maehen sollen! Ihr muesst ihn sofort befreien.",
        "background": "./game_images/background_rs_digital_space.png",
        "choices": [
            { "text": "Ihm sein echtes Klemmbrett vor das Gesicht halten", "next": "c2_rs_30", "required_item": "rs_benson_clipboard" },
            { "text": "Die Kabel mit Skips Vorschlaghammer zertruemmern", "next": "c2_rs_27", "karma": -2 }
        ]
    },

    "c2_rs_26": {
        "text": "Durch den perfekten Einsatz deines Gegenstands kollabiert die Spiel-Matrix vollstaendig. Die pixeligen Feinde loesen sich in Luft auf und die Kassette spuckt Benson aus. Er landet unsanft, aber unversehrt auf dem Rasen.",
        "background": "./game_images/background_rs_park_lawn.png",
        "choices": [
            { "text": "Ihm hastig beim Aufstehen helfen", "next": "c2_rs_30" },
            { "text": "Ihn ignorieren und so tun als waere nichts passiert", "next": "c2_rs_27", "karma": -3 }
        ]
    },

    "c2_rs_27": {
        "text": "Die riesige Apparatur explodiert in einer gigantischen, nuklearen Kaugummi-Detonation! Der gesamte Park ist voellig demoliert, alle Baeume sind weg und das Haus ist nur noch ein rauchender Krater. Benson steht zitternd in den Truemmern, waehrend sein Kopf tiefrot anlaeuft.",
        "background": "./game_images/background_rs_park_lawn.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_rs_28": {
        "text": "Skips zeichnet mit magischer Kreide einen perfekten Kreis auf den Rasen, der die digitale Strahlung des Destroyers aufsaugt. Mordecai und Rigby nutzen die kurze Pause, um den finalen Gegenangriff zu starten.",
        "background": "./game_images/background_rs_park_lawn.png",
        "choices": [
            { "text": "Den Destroyer endgueltig konfrontieren", "next": "c2_rs_25" },
            { "text": "In den Jet steigen und von oben angreifen", "next": "c2_rs_22", "karma": 2 }
        ]
    },

    "c2_rs_30": {
        "text": "Mit einem epischen Finale zerschmettert ihr den Destroyer of Worlds in eine Million bunte Pixel. Der Park verwandelt sich augenblicklich zurueck in sein normales, idyllisches Gruen. Benson landet keuchend auf dem Rasen, klopft sich den Staub vom Hemd und funkelt Mordecai und Rigby wuetend an: Ihr raeumt diesen Muell sofort auf, oder ihr seid GEFEUERT! Mordecai und Rigby schauen sich an, grinsen breit und rufen im Chor: OOOOOOOOOOOH!",
        "background": "./game_images/background_rs_living_room.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_nj_start": {
        "text": "In New Ninjago City bricht mitten in der Nacht das gesamte Stromnetz zusammen. Auf den riesigen Werbebildschirmen erscheint das lachende, digitale Gesicht des Overlords, gefolgt von einer Flut aus ranzigem, lila Schlamm, der aus den Gullys quillt. Es ist das Ultraboese, das die Stadt mit digitaler Finsternis infiziert! Lloyd, Kai, Jay, Cole, Zane und Nya haben sich bereits um das Kontrollpult des Flugseglers versammelt.",
        "background": "./game_images/background_nj_destinys_bounty.png",
        "choices": [
            { "text": "Mit Lloyd und Zane den digitalen Quellcode analysieren", "next": "c2_nj_1", "karma": 2 },
            { "text": "Mit Kai und Nya die Strassen der Stadt sichern", "next": "c2_nj_2" },
            { "text": "Mit Cole und Jay die Katakomben unter der Stadt untersuchen", "next": "c2_nj_3", "karma": 1 },
            { "text": "Meister Wu im Kloster des Spinjitzu um Rat fragen", "next": "c2_nj_4", "karma": -1 }
        ]
    },

    "c2_nj_1": {
        "text": "Zanes Augen flackern blau, waehrend er sich in die infizierten Mainframes hackt. 'Der Overlord benutzt ein techno-organisches Virus! Es ueberschreibt die Logikschaltkreise der Stadt.' Lloyd zieht seine Klinge: 'Wir muessen ein Backup sichern, bevor alles geloescht wird!' Das Terminal droht zu implodieren.",
        "background": "./game_images/background_nj_lab.png",
        "character": "./game_images/character_nj_zane.png",
        "choices": [
            { "text": "Den Techno-Blade-Prototyp aufladen und mitnehmen", "next": "nj_techno_blade", "gain_item": "nj_techno_blade" },
            { "text": "Das System manuell herunterfahren und die Daten riskieren", "next": "c2_nj_5", "karma": -2 }
        ]
    },

    "nj_techno_blade": {
        "text": "Du erhaeltst die Techno-Klinge. Sie leuchtet in grellem Techno-Gruen und kann jedes digitale System hacken.",
        "background": "./game_images/background_nj_lab.png",
        "character": "./game_images/item_nj_techno_blade.png",
        "choices": [
            { "text": "Die Klinge am Hauptrechner nutzen", "next": "c2_nj_8" },
            { "text": "Damit zu Kai auf die Strassen von New Ninjago City fliegen", "next": "c2_nj_10" }
        ]
    },

    "c2_nj_2": {
        "text": "Kai blockiert mit seinen Feuerschwertern eine Bruecke, waehrend Nya versucht, die fluechtenden Buerger mit Wasserbarrieren zu lenken. Eine Armee aus bizarren, mutierten Nindroiden bricht durch die Absperrungen. Kai ruft: 'Sie reagieren nicht auf normales Feuer! Ihre Ruestung ist aus unzerstoerbarem Tiefengestein!'",
        "background": "./game_images/background_nj_city_streets.png",
        "character": "./game_images/character_nj_kai.png",
        "choices": [
            { "text": "Einen Nindroiden-Kommandanten ausschalten und sein Abzeichen stehlen", "next": "nj_overlord_insignia", "gain_item": "nj_overlord_insignia" },
            { "text": "Mit Spinjitzu die Bruecke zum Einsturz bringen", "next": "c2_nj_6", "karma": -3 }
        ]
    },

    "nj_overlord_insignia": {
        "text": "Du erhaeltst das digitale Overlord-Abzeichen. Es pulsiert mit dunkler, violetter Digiverse-Energie.",
        "background": "./game_images/background_nj_city_streets.png",
        "character": "./game_images/item_nj_overlord_insignia.png",
        "choices": [
            { "text": "Das Abzeichen nutzen um getarnte Nindroiden-Frequenzen zu orten", "next": "c2_nj_15" },
            { "text": "Damit ins Borg-Industriegebaeude eindringen", "next": "c2_nj_12" }
        ]
    },

    "c2_nj_3": {
        "text": "Cole nutzt seine Erd-Elementarkraefte, um die stuerzenden Deckenbalken im Untergrund aufzuhalten, waehrend Jay nervoes an den Kabeln herumfummelt. Ploetzlich taucht Pythor aus den Schatten auf! Der Schlangen-General zischt haemisch: 'Das Ultraboese hat mir eine neue Armee versprochen, Ninja! Ihr kommt zu spaet!'",
        "background": "./game_images/background_nj_subway.png",
        "character": "./game_images/character_nj_pythor.png",
        "choices": [
            { "text": "Gegen Pythor und seine Schlangen-Krieger kaempfen", "next": "c2_nj_7", "karma": 3 },
            { "text": "Den magischen Floeten-Prototyp aus Wus Kiste nutzen", "next": "nj_sacred_flute", "gain_item": "nj_sacred_flute", "karma": -1 }
        ]
    },

    "nj_sacred_flute": {
        "text": "Du erhaeltst die Heilige Floete. Ihre Toene koennen das Gehoer von Schlangen-Kreaturen extrem manipulieren.",
        "background": "./game_images/background_nj_subway.png",
        "character": "./game_images/item_nj_sacred_flute.png",
        "choices": [
            { "text": "Die Floete sofort spielen um Pythor zu vertreiben", "next": "c2_nj_8" },
            { "text": "Die Floete einpacken und Cole im Kampf helfen", "next": "c2_nj_22" }
        ]
    },

    "c2_nj_4": {
        "text": "Meister Wu sitzt im Kloster und trinkt ruhig seinen Tee, waehrend die goldenen Drachenstatuen um ihn herum lebendig werden. 'Der Overlord greift nicht nur die Technik an, sondern das Gleichgewicht von Ninjago. Ihr muesst den Goldenen Kern finden!' Ploetzlich greifen Rote Visier-Drohnen das Kloster an.",
        "background": "./game_images/background_nj_monastery.png",
        "character": "./game_images/character_nj_wu.png",
        "choices": [
            { "text": "Das Kloster mit Meister Wu verteidigen", "next": "c2_nj_11", "karma": -4 },
            { "text": "Wus Rat folgen und sofort zurueck nach New Ninjago City fliegen", "next": "c2_nj_12", "karma": 2 }
        ]
    },

    "c2_nj_5": {
        "text": "Das manuelle Herunterfahren loest eine energetische Kettenreaktion aus. Cyrus Borgs Labor wird von lila Blitzen ueberflutet und die Cyber-Sicherheitssysteme wenden sich gegen euch. Lloyd wird von schweren Sicherheits-Barrieren eingekesselt.",
        "background": "./game_images/background_nj_lab.png",
        "character": "./game_images/character_nj_lloyd.png",
        "choices": [
            { "text": "Lloyd mit Kais Feuerkraeften freibrennen", "next": "c2_nj_13", "karma": -4 },
            { "text": "Zane die Systeme ueberbruecken lassen", "next": "c2_nj_14", "karma": 2 }
        ]
    },

    "c2_nj_6": {
        "text": "Die Bruecke bricht krachend in sich zusammen, doch die Nindroiden nutzen ihre Jetpacks und fliegen direkt auf den Flugsegler zu. Jay schreit panisch: 'Das war ein schlechter Plan! Sie haben Fluegel! Warum haben die Dinger immer Fluegel?!'",
        "background": "./game_images/background_nj_destinys_bounty.png",
        "choices": [
            { "text": "Die Bordkanonen des Flugseglers aktivieren", "next": "c2_nj_17", "karma": 3 },
            { "text": "In den dichten Rauch der Stadt abtauchen", "next": "c2_nj_15", "karma": -2 }
        ]
    },

    "c2_nj_7": {
        "text": "Cole und Jay kaempfen erbittert, doch Pythors Schlangen nutzen das techno-organische Gift, um die Ninja zu laehmen. Das lila Elixier droht, Coles Felskraefteradius zu infizieren. Ihr braucht ein starkes Gegenmittel oder ein Ablenkungsmanoever.",
        "background": "./game_images/background_nj_subway.png",
        "character": "./game_images/character_nj_jay.png",
        "choices": [
            { "text": "Die Techno-Klinge in das U-Bahn-Schienennetz rammen", "next": "c2_nj_26", "required_item": "nj_techno_blade" },
            { "text": "Mit Jays Blitzkraeften einen gewaltigen Kurzschluss erzeugen", "next": "c2_nj_13", "karma": -3 }
        ]
    },

    "c2_nj_8": {
        "text": "Das Digiverse oeffnet sich am Himmel! Eine gigantische, gold-violette Festung materialisiert sich ueber der Stadt. Der Overlord spricht mit hasserfuellter, digitaler Stimme: 'Ninja! Eure Waffen sind veraltet! Ich bin das neue Zeitalter!'",
        "background": "./game_images/background_nj_sky.png",
        "character": "./game_images/character_nj_overlord.png",
        "choices": [
            { "text": "Die Festung mit der Techno-Klinge hacken", "next": "c2_nj_30", "required_item": "nj_techno_blade" },
            { "text": "Die Drachen-Mechs rufen und die Festung stuermen", "next": "c2_nj_19", "karma": -3 }
        ]
    },

    "c2_nj_11": {
        "text": "Der Kampf im Kloster ist zerstoererisch. Die Visier-Drohnen brennen die heiligen Schriftrollen nieder. Wu wehrt sich mit seinem Stab, wird aber von der schieren uebermacht ueberwaeltigt. Er ruft: 'Vergiss mich! Rette Ninjago!'",
        "background": "./game_images/background_nj_monastery.png",
        "choices": [
            { "text": "Meister Wu im Stich lassen und den Goldenen Kern suchen", "next": "c2_nj_27", "karma": -4 },
            { "text": "Die Heilige Floete spielen, um die Resonanz der Drohnen zu stoeren", "next": "c2_nj_26", "required_item": "nj_sacred_flute" }
        ]
    },

    "c2_nj_12": {
        "text": "Ihr erreicht den Borg-Tower im Zentrum der Stadt. Doch die Sicherheits-KIs haben alle Aufzuege blockiert. Aus den Waenden fahren rotierende Laserklingen heraus. Nya versucht verzweifelt, das System mit ihrem Mech zu blockieren.",
        "background": "./game_images/background_nj_lab.png",
        "character": "./game_images/character_nj_nya.png",
        "choices": [
            { "text": "Das Overlord-Abzeichen an den Scanner halten", "next": "c2_nj_26", "required_item": "nj_overlord_insignia" },
            { "text": "Den Tower mit roher Gewalt von aussen hochklettern", "next": "c2_nj_24", "karma": -4 }
        ]
    },

    "c2_nj_13": {
        "text": "Kais Flammen schmelzen die Barrieren, loesen aber auch die automatische Sprinkleranlage aus, was Jays Blitzkraefte unkontrollierbar im Raum verteilt. Das ganze Labor geraet unter heftigen Strom und die Sensoren explodieren.",
        "background": "./game_images/background_nj_lab.png",
        "choices": [
            { "text": "Als vereintes Team den Borg-Tower evakuieren", "next": "c2_nj_27", "karma": -3 },
            { "text": "Trotz der Blitze bis zum Hauptprozessor vordringen", "next": "c2_nj_28", "karma": 4 }
        ]
    },

    "c2_nj_14": {
        "text": "Zane kalibriert seine internen Systeme und erzeugt ein eisiges Schutzschild, das die schaedliche Strahlung absorbiert. Cole nutzt die Sekunde, um den Energiekern der feindlichen Drohnen mit einem maechtigen Schlag zu pulverisieren.",
        "background": "./game_images/background_nj_lab.png",
        "choices": [
            { "text": "Die Techno-Klinge im Kern verankern", "next": "c2_nj_30", "required_item": "nj_techno_blade" },
            { "text": "Den Kern direkt mit Elementarkraeften zerstoeren", "next": "c2_nj_19", "karma": -4 }
        ]
    },

    "c2_nj_15": {
        "text": "Das Signal fuehrt euch tief in ein verlassenes Industriegebiet am Hafen. Hier haben die Nindroiden ein Portal errichtet, das Energie direkt aus dem Digiverse saugt. Lloyd spuert die dunkle Praesenz: 'Der Overlord laedt sich hier auf!'",
        "background": "./game_images/background_nj_city_streets.png",
        "character": "./game_images/character_nj_lloyd.png",
        "choices": [
            { "text": "Das Portal mit dem Overlord-Abzeichen ueberlasten", "next": "c2_nj_30", "required_item": "nj_overlord_insignia" },
            { "text": "Das Portal mit Cole und Kai physisch attackieren", "next": "c2_nj_24", "karma": 2 }
        ]
    },

    "c2_nj_17": {
        "text": "Die Kanonen des Flugseglers feuern reines Licht ab! Die fliegenden Nindroiden werden reihenweise vom Himmel geholt. Doch die schiere Explosion beschaedigt die Hauptsegel und das Schiff droht abzustuerzen.",
        "background": "./game_images/background_nj_destinys_bounty.png",
        "choices": [
            { "text": "Das Schiff auf dem Borg-Tower notlanden", "next": "c2_nj_25", "karma": 4 },
            { "text": "Das Steuer loslassen und im freien Fall kaempfen", "next": "c2_nj_26", "required_item": "nj_techno_blade" }
        ]
    },

    "c2_nj_19": {
        "text": "Der Frontalangriff scheitert an der techno-organischen Panzerung der Festung. Die Mechs der Ninja frieren mitten in der Luft ein, als der Overlord den Saft abdreht. Ihr stuerzt unaufhaltsam in die Tiefe der Stadt.",
        "background": "./game_images/background_nj_sky.png",
        "choices": [
            { "text": "Spinjitzu einsetzen um den Sturz abzufedern", "next": "c2_nj_27", "karma": -4 },
            { "text": "Die Techno-Klinge werfen um das System im Fall zu hacken", "next": "c2_nj_30", "required_item": "nj_techno_blade" }
        ]
    },

    "c2_nj_22": {
        "text": "Mit Coles gewaltiger Erdkraft baut ihr eine massive Steinmauer gegen Pythors Angriffe. Jay nutzt den Schutz, um die Kabel neu zu verlegen. Doch die Schlangen fangen an, die Mauer mit ihren Saeurezaehnen zu zersetzen.",
        "background": "./game_images/background_nj_subway.png",
        "choices": [
            { "text": "Die Heilige Floete spielen um ihre Sinne zu vernebeln", "next": "c2_nj_30", "required_item": "nj_sacred_flute" },
            { "text": "Die Mauer einstuerzen lassen und die Flucht ergreifen", "next": "c2_nj_25" }
        ]
    },

    "c2_nj_24": {
        "text": "Der brute-force Angriff verursacht eine massive Explosion der Generatoren. Der Borg-Tower erzittert und New Ninjago City versinkt im kompletten Chaos. Die Nindroiden triumphieren, waehrend die Ninja zurueckgedraengt werden.",
        "background": "./game_images/background_nj_city_streets.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_nj_25": {
        "text": "Ihr erreicht den Dachgipfel des Borg-Towers. Inmitten eines digitalen Gewitters schwebt der Overlord in seiner ultimativen Cyber-Ruestung. Lloyd aktiviert seine goldene Elementarenergie: 'Es endet hier, Overlord!'",
        "background": "./game_images/background_nj_sky.png",
        "character": "./game_images/character_nj_lloyd.png",
        "choices": [
            { "text": "Ihn mit der Techno-Klinge kurzschliessen", "next": "c2_nj_30", "required_item": "nj_techno_blade" },
            { "text": "Ein kombiniertes Elementar-Spinjitzu starten", "next": "c2_nj_27", "karma": -2 }
        ]
    },

    "c2_nj_26": {
        "text": "Durch den cleveren Einsatz deines Gegenstands bricht die feindliche Energiebarriere zusammen. Das digitale Virus wird aus den Systemen gespuelt und der Overlord verliert den Zugriff auf die Abwehrtuerme.",
        "background": "./game_images/background_nj_lab.png",
        "choices": [
            { "text": "Den Overlord im Zentrum konfrontieren", "next": "c2_nj_30" }
        ]
    },

    "c2_nj_27": {
        "text": "Das finale Gefecht hinterlaesst schwere Schaeden an der Infrastruktur der Stadt. Der Overlord wird temporaer in das Digiverse zurueckgedraengt, doch New Ninjago City liegt in Truemmern und die Energieversorgung ist dauerhaft instabil. Die Ninja blicken erschoepft auf das Truemmerfeld.",
        "background": "./game_images/background_nj_city_streets.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c2_nj_28": {
        "text": "Kai und Nya bilden eine feurige Verteidigungslinie gegen die heranstuermenden Nindroiden, waehrend Lloyd und Zane sich bis zum digitalen Hauptprozessor durchschlagen.",
        "background": "./game_images/background_nj_lab.png",
        "choices": [
            { "text": "Den finalen Virus-Loeschbefehl eingeben", "next": "c2_nj_25" }
        ]
    },

    "c2_nj_30": {
        "text": "Mit einem monumentalen Finale zerschmettern die Ninja – getragen von Lloyds goldener Kraft, Zanes unermuedlicher Logik und dem verheerenden Hack der Techno-Klinge – die Ruestung des Overlords. Das lila Leuchten erlischt im gesamten Netz und weicht reinem, hellem Licht. Die Stadt atmet auf, waehrend die Nindroiden sich in harmlose Schaltkreise aufloesen. Meister Wu tritt laechelnd zu den Ninja, streicht sich ueber den Bart und sagt stolz: 'Ihr habt eure Lektion gelernt, Ninja. Technologie ist maechtig, aber das staerkste Element ist und bleibt euer Zusammenhalt!' Die Ninja kreuzen ihre Klingen und rufen im Chor: 'NINJA-GO!'",
        "background": "./game_images/background_nj_destinys_bounty.png",
        "choices": [
            { "text": "Kapitel 3 starten", "next": "c3_start" }
        ]
    },

    "c3_start": {
        "text": "Kapitel 3. Der Nexus ist nicht mehr stabil. Die Cartoon-Welten sind nicht mehr getrennte Orte, sondern ueberlappende Kriegszonen aus Realitaet, Erinnerung und Fehlern. Etwas beginnt aktiv zu jagen.",
        "background": "./game_images/background_space.png",
        "choices": [
            { "text": "Steven Universe", "next": "c3_su_start" },
            { "text": "Scooby-Doo", "next": "c3_sd_start" },
            { "text": "Ninja Turtles", "next": "c3_tmnt_start" },
            { "text": "Super Hero Squad", "next": "c3_shs_start" },
            { "text": "Total Drama Island", "next": "c3_tdi_start" }
        ]
    },
    "c3_su_start": {
        "text": "Es ist ein friedlicher Abend am Strand von Beach City, bis plötzlich die Erde heftig bebt. Aus dem Ozean schießt eine gigantische, mechanische Hand der Gem-Heimatwelt! Die Finger der Hand bohren sich in den Sand und fangen an, zerstörerische Strahlung auf den Tempel abzugeben. Peridot erscheint auf einem Hologramm und tippt wild auf ihren Touchpads, während Steven, Garnet, Amethyst und Pearl bereits ihre Waffen manifestieren.",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "Mit Steven und Pearl die Invasions-Kapsel untersuchen", "next": "c3_su_1", "karma": 2 },
            { "text": "Mit Garnet die mechanischen Finger direkt angreifen", "next": "c3_su_2", "karma": -1 },
            { "text": "Mit Amethyst im Tempel nach alten Gem-Artefakten suchen", "next": "c3_su_3", "karma": 1 },
            { "text": "Greg Universe um kosmischen Rat und Werkzeug bitten", "next": "c3_su_4", "karma": 3 }
        ]
    },

    "c3_su_1": {
        "text": "Pearl untersucht die glühende Kontrollkonsole der Kapsel mit schockiertem Blick. 'Das ist eine Destabilisierungs-Matrix der Diamanten! Wenn wir das Signal nicht blockieren, werden unsere physischen Formen einfach aufgelöst!' Steven hält schützend sein Schild hoch, während ein wichtiges Bauteil aus der Konsole bricht.",
        "background": "./game_images/background_su_spaceship_interior.png",
        "character": "./game_images/character_su_pearl.png",
        "choices": [
            { "text": "Den Heimatwelt-Gem-Destabilisator einpacken", "next": "su_gem_destabilizer", "gain_item": "su_gem_destabilizer" },
            { "text": "Die Konsole mit Pearls Speer blind zertrümmern", "next": "c3_su_5", "karma": -2 }
        ]
    },

    "su_gem_destabilizer": {
        "text": "Du erhältst einen Gem-Destabilisator. Seine gelben Blitze können die physische Form jeder Gem-Projektion sofort auflösen.",
        "background": "./game_images/background_su_spaceship_interior.png",
        "character": "./game_images/item_su_destabilizer.png",
        "choices": [
            { "text": "Die Waffe an den Kontrollkabeln testen", "next": "c3_su_8" },
            { "text": "Damit zu Garnet an den Strand rennen", "next": "c3_su_6" }
        ]
    },

    "c3_su_2": {
        "text": "Garnet schlägt mit ihren schweren Raketen-Stiefeln und Fäusten auf das Metall ein, doch die Hand absorbiert ihre Energie und leitet sie ins Meer um. Jasper springt plötzlich von der Spitze der Konstruktion herab! Sie grinst bösartig: 'Ihr jämmerlichen Rebellen der Crystal Gems! Heute werdet ihr vor Yellow Diamond Rechenschaft ablegen!'",
        "background": "./game_images/background_su_beach.png",
        "character": "./game_images/character_su_jasper.png",
        "choices": [
            { "text": "Garnet im Duell gegen Jasper unterstützen", "next": "c3_su_6", "karma": 3 },
            { "text": "Jaspers weggeworfenen Heimatwelt-Scanner an dich nehmen", "next": "su_homeworld_scanner", "gain_item": "su_homeworld_scanner", "karma": -1 }
        ]
    },

    "su_homeworld_scanner": {
        "text": "Du erhältst einen Heimatwelt-Scanner. Er ortet versteckte Gem-Energiequellen und Schwachstellen in fremder Technologie.",
        "background": "./game_images/background_su_beach.png",
        "character": "./game_images/item_su_scanner.png",
        "choices": [
            { "text": "Den Scanner nutzen um die Schwachstelle der Riesen-Hand zu finden", "next": "c3_su_15" },
            { "text": "Damit zu Stevens Strandhaus flüchten", "next": "c3_su_12" }
        ]
    },

    "c3_su_3": {
        "text": "Amethyst wirbelt mit ihrer Peitsche durch das riesige Chaos im Tempel-Inneren. Überall fliegen magische Gegenstände herum. 'Hier drin ist alles voller gefährlicher Relikte! Such nach etwas, das nützlich aussieht!' Plötzlich droht eine schwere Steinstatue auf Lapis Lazulis Spiegel zu stürzen.",
        "background": "./game_images/background_su_crystal_temple.png",
        "character": "./game_images/character_su_amethyst.png",
        "choices": [
            { "text": "Die Statue mit Amethysts Kräften zertrümmern", "next": "c3_su_7", "karma": -3 },
            { "text": "Den magischen Gem-Spiegel rechtzeitig auffangen", "next": "su_lapis_mirror", "gain_item": "su_lapis_mirror", "karma": 4 }
        ]
    },

    "su_lapis_mirror": {
        "text": "Du fängst Lapis' magischen Spiegel auf. Er reflektiert die Wahrheit und kontrolliert mächtige Wassermassen.",
        "background": "./game_images/background_su_crystal_temple.png",
        "character": "./game_images/item_su_mirror.png",
        "choices": [
            { "text": "Den Spiegel nutzen um Lapis um Hilfe zu bitten", "next": "c3_su_8" },
            { "text": "Den Spiegel zu Steven am Strand bringen", "next": "c3_su_22" }
        ]
    },

    "c3_su_4": {
        "text": "Greg Universe steht panisch vor seiner Autowerkstatt und hält eine alte E-Gitarre in den Händen. 'Kumpel, diese Gem-Sachen übersteigen mein Wissen, aber mein Sound-System im Van hat genug Bass, um feindliche Frequenzen zu stören!' Plötzlich mutieren die Strandkrabben durch die Strahlung zu Riesen-Monstern.",
        "background": "./game_images/background_su_car_wash.png",
        "character": "./game_images/character_su_greg.png",
        "choices": [
            { "text": "Die Werkstatt mit Gregs Van verteidigen", "next": "c3_su_11", "karma": 4 },
            { "text": "Gregs Spezial-Werkzeugbox schnappen und zum Strandhaus laufen", "next": "c3_su_12", "karma": -2 }
        ]
    },

    "c3_su_5": {
        "text": "Das Zertrümmern der Konsole löst eine energetische Rückkopplung aus. Das Schiff riegelt alle Türen automatisch ab und giftiger Gem-Schleim fließt aus den Lüftungsschächten. Pearl verliert vor Panik die Fassung, während Steven versucht, eine schützende Blase um euch zu weben.",
        "background": "./game_images/background_su_spaceship_interior.png",
        "character": "./game_images/character_su_steven.png",
        "choices": [
            { "text": "Connie rufen um die Tür mit ihrem Schwert aufzubrechen", "next": "c3_su_13", "karma": 3 },
            { "text": "Pearl durch ein beruhigendes Gespräch fokussieren", "next": "c3_su_14", "karma": 5 }
        ]
    },

    "c3_su_6": {
        "text": "Jasper setzt ihre gewaltige Helm-Ramme ein und schleudert Garnet in den Sand. Durch die Wucht des Schlags spaltet sich Garnet schmerzhaft in ihre zwei Hälften: Ruby und Sapphire! Ruby tobt vor Zorn, während Sapphire weint. Jasper lacht: 'Eine Fusion ist nur ein billiger Trick!'",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "Den Gem-Destabilisator einsetzen um Jasper aufzuhalten", "next": "c3_su_26", "required_item": "su_gem_destabilizer" },
            { "text": "Ruby und Sapphire decken und einen Frontalangriff wagen", "next": "c3_su_13", "karma": -4 }
        ]
    },

    "c3_su_7": {
        "text": "Die Explosion der Statue reißt ein Loch in das Fundament des Tempels. Kaltes Meerwasser flutet die Kammern und droht, alle heiligen Artefakte wegzuspülen. Lion taucht plötzlich auf und brüllt laut, um ein Portal auszubringen.",
        "background": "./game_images/background_su_crystal_temple.png",
        "choices": [
            { "text": "Auf Lions Rücken springen und zum Strand fliegen", "next": "c3_su_15", "karma": -2 },
            { "text": "Die Artefakte im steigenden Wasser manuell sichern", "next": "c3_su_13", "karma": 4 }
        ]
    },

    "c3_su_8": {
        "text": "Die Heimatwelt-Hand schließt sich komplett zu einer Faust und bereitet den finalen Laser-Impuls vor, der ganz Beach City auslöschen soll. Das grelle Licht spiegelt sich im Ozean. Steven steht entschlossen an vorderster Front: 'Wir geben unsere Heimat nicht auf!'",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "Den Laser-Kern mit dem Gem-Destabilisator sabotieren", "next": "c3_su_30", "required_item": "su_gem_destabilizer" },
            { "text": "Lapis Lazulis Wasserkräfte über den Spiegel aktivieren", "next": "c3_su_30", "required_item": "su_lapis_mirror" }
        ]
    },

    "c3_su_11": {
        "text": "Greg dreht die Lautsprecher voll auf! Die massiven Schallwellen bringen die mutierten Krabben zum Platzen und stören die feindlichen Frequenzen der Riesen-Hand. Doch das Soundsystem überhitzt komplett und der Van fängt an zu rauchen.",
        "background": "./game_images/background_su_car_wash.png",
        "choices": [
            { "text": "Den Van mit Stevens heilenden Kräften kühlen", "next": "c3_su_28", "karma": 4 },
            { "text": "Den rauchenden Van als Rammbock gegen die Hand nutzen", "next": "c3_su_27", "karma": -5 }
        ]
    },

    "c3_su_12": {
        "text": "Ihr erreicht das Strandhaus, doch Peridots fliegende Roboter-Insekten haben das Gebäude bereits umzingelt. Sie scannen nach Rose Quartzes Schild. Connie verteidigt die Veranda tapfer mit ihrem Übungsschwert, wird aber langsam müde.",
        "background": "./game_images/background_su_beachhouse.png",
        "character": "./game_images/character_su_connie.png",
        "choices": [
            { "text": "Die Roboter mit dem Heimatwelt-Scanner umprogrammieren", "next": "c3_su_26", "required_item": "su_homeworld_scanner" },
            { "text": "In den direkten Nahkampf übergehen", "next": "c3_su_13", "karma": -4 }
        ]
    },

    "c3_su_13": {
        "text": "Der brute-force Versuch schlägt fehl. Das Heimatwelt-Schiff absorbiert eure Energie und die Roboter kesseln euch ein. Die Lage scheint aussichtslos, doch plötzlich bricht Alexandrite mit einem lauten Brüllen durch die feindlichen Linien, um euch rauszuhauen!",
        "background": "./game_images/background_su_beach.png",
        "character": "./game_images/character_su_alexandrite.png",
        "choices": [
            { "text": "Alexandrites Angriff unterstützen", "next": "c3_su_28", "karma": 3 },
            { "text": "Die Verwirrung nutzen um den Kern des Schiffs zu suchen", "next": "c3_su_27", "karma": -1 }
        ]
    },

    "c3_su_14": {
        "text": "Pearl beruhigt sich und erinnert sich an eine geheime Notfall-Sequenz. Sie projiziert eine holografische Karte, die den direkten Zugang zum Gehirn des Schiffes freilegt. Steven fusioniert vor Freude mit Connie zu Stevonnie!",
        "background": "./game_images/background_su_spaceship_interior.png",
        "character": "./game_images/character_su_stevonnie.png",
        "choices": [
            { "text": "Das Gehirn des Schiffs mit dem Gem-Destabilisator angreifen", "next": "c3_su_30", "required_item": "su_gem_destabilizer" },
            { "text": "Die Kern-Kabel mit Stevonnies Schwert durchtrennen", "next": "c3_su_27", "karma": -3 }
        ]
    },

    "c3_su_15": {
        "text": "Mithilfe deines Scanners oder Lions Hilfe findet ihr die Schwachstelle: Ein kleiner, grüner Energieknoten an den Gelenken der mechanischen Hand. Doch Peridot bewacht den Knoten persönlich aus ihrer fliegenden Kapsel heraus.",
        "background": "./game_images/background_su_beach.png",
        "character": "./game_images/character_su_peridot.png",
        "choices": [
            { "text": "Peridots Kapsel mit dem Heimatwelt-Scanner hacken", "next": "c3_su_30", "required_item": "su_homeworld_scanner" },
            { "text": "Amethyst ihre Peitsche nutzen lassen um die Kapsel wegzureißen", "next": "c3_su_13", "karma": 2 }
        ]
    },

    "c3_su_22": {
        "text": "Du bringst den Spiegel zu Steven. Als er das Glas berührt, bricht Lapis Lazuli frei und formt riesige, majestätische Flügel aus reinem Meerwasser! Sie fliegt hoch in den Himmel und reißt gigantische Wassermassen mit sich nach oben.",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "Lapis den Befehl geben das Schiff im Ozean zu ertränken", "next": "c3_su_30", "karma": 5 },
            { "text": "Den Spiegel nutzen um Jasper zu blenden", "next": "c3_su_13", "karma": -1 }
        ]
    },

    "c3_su_26": {
        "text": "Durch den cleveren Einsatz deiner Gegenstände bricht Jaspers Verteidigung oder Peridots Drohnen-Netzwerk komplett in sich zusammen. Die grüne Strahlung erlischt und die mechanische Hand verliert jegliche Energieversorgung.",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "Den finalen Rettungsschlag mit Steven einleiten", "next": "c3_su_30" },
            { "text": "Die Schurken zur Rede stellen", "next": "c3_su_27", "karma": 2 }
        ]
    },

    "c3_su_27": {
        "text": "Das Schiff explodiert in einer gewaltigen Welle aus bunten Lichtpartikeln! Jasper und Peridot flüchten in einer Rettungskapsel ins All. Beach City ist zwar vorerst gerettet, aber der Strand gleicht einem Kraterfeld und die Crystal Gems müssen den Tempel mühsam neu aufbauen.",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "end", "next": "end" }
        ]
    },

    "c3_su_28": {
        "text": "Garnet fusioniert im Licht von Gregs verstärktem Soundsystem wieder perfekt zusammen und formt mit Amethyst und Pearl die gigantische, mächtige Fusion Alexandrite! Mit feurigen Bögen attackiert sie das feindliche Schiff.",
        "background": "./game_images/background_su_beach.png",
        "character": "./game_images/character_su_alexandrite.png",
        "choices": [
            { "text": "Den finalen Schlag anführen", "next": "c3_su_30" }
        ]
    },

    "c3_su_30": {
        "text": "Mit einem monumentalen Finale zerschmettern die Crystal Gems – getragen von Stevens unerschütterlichem Schild, Alexandrites geballter Fusionskraft und dem präzisen Einsatz des Gem-Destabilisators – die mechanische Heimatwelt-Hand. Die Trümmer lösen sich in harmlose, funkelnde Sternschnuppen auf, die friedlich ins Meer fallen. Der Strand von Beach City leuchtet in ruhigem, warmem Abendlicht. Steven atmet tief durch, isst genüsslich einen Cookie Cat-Eisriegel und lächelt dich dankbar an, während Garnet ihm sanft über den Kopf streicht: 'Solange wir zusammenhalten, wird diese Welt immer unser Zuhause sein.'",
        "background": "./game_images/background_su_beach.png",
        "choices": [
            { "text": "Ende", "next": "end" }
        ]
    },
    "c3_sd_start": {
        "text": "Die Mystery Machine rollt mitten in einer stürmischen Nacht auf den Hof eines verlassenen, unheimlichen Vergnügungsparks. Plötzlich schlägt ein grüner Blitz in das alte Riesenrad ein, und eine lachende, schwebende Geister-Kreatur aus purem, neongrünem Schleim taucht auf! Velma verliert vor Schreck ihre Brille, Daphne weicht geschockt zurück, und Fred zückt sofort seine Pläne für eine Falle, während Scooby und Shaggy winselnd im Kofferraum Deckung suchen.",
        "background": "./game_images/background_sd_amusement_park.png",
        "choices": [
            { "text": "Mit Velma nach logischen Hinweisen und Fußspuren suchen", "next": "c3_sd_1", "karma": 2 },
            { "text": "Fred beim Aufbau einer komplexen Seilzug-Falle helfen", "next": "c3_sd_2", "karma": -1 },
            { "text": "Mit Daphne das verlassene Spiegelkabinett untersuchen", "next": "c3_sd_3", "karma": 1 },
            { "text": "Shaggy und Scooby mit Scooby-Snacks Mut machen", "next": "c3_sd_4", "karma": 3 }
        ]
    },

    "c3_sd_1": {
        "text": "Velma kniet im Schlamm und kriecht am Boden entlang. 'Jinkies! Dieser Geist hinterlässt keine echten Geisterspuren, sondern Abdrücke von schweren Gummistiefeln und... Batterien?' Sie tastet im Dunkeln herum und stößt gegen einen metallischen Gegenstand, der aus einer alten Werkzeugkiste ragt.",
        "background": "./game_images/background_sd_park_grounds.png",
        "character": "./game_images/character_sd_velma.png",
        "choices": [
            { "text": "Den High-Tech-UV-Spurensucher einstecken", "next": "sd_uv_tracker", "gain_item": "sd_uv_tracker" },
            { "text": "Den Gegenstand ignorieren und die Taschenlampe reparieren", "next": "c3_sd_5", "karma": -2 }
        ]
    },

    "sd_uv_tracker": {
        "text": "Du erhältst den UV-Spurensucher. Sein ultraviolettes Licht macht unsichtbare fluoreszierende Farben und Kabelgänge sichtbar.",
        "background": "./game_images/background_sd_park_grounds.png",
        "character": "./game_images/item_sd_uv_tracker.png",
        "choices": [
            { "text": "Mit dem Tracker den Boden absuchen", "next": "c3_sd_8" },
            { "text": "Damit zurück zu Fred und seiner Falle laufen", "next": "c3_sd_6" }
        ]
    },

    "c3_sd_2": {
        "text": "Fred bindet gerade ein dickes Seil an einen alten Achterbahnpfeiler. 'Das wird meine beste Falle aller Zeiten! Sobald der Geist hier durchschwebt, löst dieses Netz aus!' Plötzlich taucht der Hexenmeister-Geist direkt hinter Fred auf und stößt ein markerschütterndes Heulen aus! Fred erschrickt so sehr, dass er eine schwere Nebelmaschine fallen lässt.",
        "background": "./game_images/background_sd_rollercoaster.png",
        "character": "./game_images/character_sd_fred.png",
        "choices": [
            { "text": "Fred vor dem Geist retten und ihn wegziehen", "next": "c3_sd_6", "karma": 3 },
            { "text": "Die fallengelassene Nebel-Steuerungsfernbedienung schnappen", "next": "sd_fog_remote", "gain_item": "sd_fog_remote", "karma": -1 }
        ]
    },

    "sd_fog_remote": {
        "text": "Du erhältst die Nebel-Steuerungsfernbedienung. Sie kontrolliert die dichten künstlichen Rauchschwaden im gesamten Parkbereich.",
        "background": "./game_images/background_sd_rollercoaster.png",
        "character": "./game_images/item_sd_fog_remote.png",
        "choices": [
            { "text": "Den künstlichen Nebel aktivieren um den Geist zu verwirren", "next": "c3_sd_15" },
            { "text": "Die Fernbedienung einstecken und zum Spiegelkabinett rennen", "next": "c3_sd_12" }
        ]
    },

    "c3_sd_3": {
        "text": "Daphne begutachtet ihr Spiegelbild in den staubigen, verzerrten Gläsern des Kabinetts. 'Igitt, dieser Ort ist absolut staubig! Aber schau mal, dieser eine Spiegel steht schief!' Als sie daran zieht, öffnet sich eine geheime Wandklappe. Ein alter, schwerer Hauptschlüsselbund rutscht heraus.",
        "background": "./game_images/background_sd_mirror_maze.png",
        "character": "./game_images/character_sd_daphne.png",
        "choices": [
            { "text": "Den Vorhang beiseiteschieben und weitergehen", "next": "c3_sd_7", "karma": -3 },
            { "text": "Den alten Park-Hauptschlüsselbund einstecken", "next": "sd_park_keys", "gain_item": "sd_park_keys", "karma": 4 }
        ]
    },

    "sd_park_keys": {
        "text": "Du erhältst den Park-Hauptschlüsselbund. Er öffnet jede verschlossene Tür und jeden Kontrollraum auf diesem Gelände.",
        "background": "./game_images/background_sd_mirror_maze.png",
        "character": "./game_images/item_sd_keys.png",
        "choices": [
            { "text": "Den Schlüsselbund nutzen um den Geheimgang zu öffnen", "next": "c3_sd_8" },
            { "text": "Die Schlüssel zu Shaggy und Scooby bringen", "next": "c3_sd_22" }
        ]
    },

    "c3_sd_4": {
        "text": "Shaggy und Scooby zittern heftig unter einer Decke. 'N-N-Nein danke, Kumpel! Für kein Geld der Welt gehen wir da raus!' Erst als du ihnen eine extragroße Box Scooby-Snacks hinstreckst, fangen ihre Augen an zu leuchten. Sie schlingen die Kekse runter, gewinnen neuen Mut und springen heldenhaft aus dem Wagen – direkt in einen Haufen klebriger, lila Farbe.",
        "background": "./game_images/background_sd_mystery_machine.png",
        "character": "./game_images/character_sd_shaggy_scooby.png",
        "choices": [
            { "text": "Die lila Farbe genauer untersuchen", "next": "c3_sd_11", "karma": 4 },
            { "text": "Die beiden schnappen und hastig zum Riesenrad rennen", "next": "c3_sd_12", "karma": -2 }
        ]
    },

    "c3_sd_5": {
        "text": "Beim Versuch, die Taschenlampe zu reparieren, rutscht Velma im Schlamm aus und bricht das Gehäuse komplett durch. Es wird stockfinster. Der schleimige Geist nutzt die Dunkelheit, stößt ein grausames Lachen aus und treibt euch in die Enge, während Shaggy und Scooby schreiend im Kreis rennen.",
        "background": "./game_images/background_sd_park_grounds.png",
        "choices": [
            { "text": "Freds Hilfe rufen um die Scheinwerfer der Mystery Machine einzuschalten", "next": "c3_sd_13", "karma": 3 },
            { "text": "Velma an der Hand nehmen und blind ins Spiegelkabinett flüchten", "next": "c3_sd_14", "karma": 5 }
        ]
    },

    "c3_sd_6": {
        "text": "Der Geist schwebt im Sturzflug auf euch zu! Fred zieht im falschen Moment am Seil, und das schwere Netz begräbt Fred, Daphne und Velma unter sich. Sie sitzen komplett in der Klemme! Der Geist baut sich drohend vor ihnen auf. Ihr müsst sofort handeln.",
        "background": "./game_images/background_sd_rollercoaster.png",
        "choices": [
            { "text": "Den UV-Spurensucher einschalten um die Projektionslinsen des Geistes zu blenden", "next": "c3_sd_26", "required_item": "sd_uv_tracker" },
            { "text": "Einen direkten Ablenkungsangriff mit Shaggys Sandwich wagen", "next": "c3_sd_13", "karma": -4 }
        ]
    },

    "c3_sd_7": {
        "text": "Der morsche Holzboden unter dem Vorhang gibt plötzlich nach! Daphne und Amethyst-lila Schleimklumpen stürzen in einen tiefen, dunklen Schacht unter dem Kabinett. Weit entfernt hört man das Surren von schweren Transformatoren und Generatoren.",
        "background": "./game_images/background_sd_mirror_maze.png",
        "choices": [
            { "text": "Hinterherklettern um Daphne aus dem Schacht zu retten", "next": "c3_sd_15", "karma": -2 },
            { "text": "Oben bleiben und die Park-Schlüssel suchen", "next": "c3_sd_13", "karma": 4 }
        ]
    },

    "c3_sd_8": {
        "text": "Der leuchtende Geist schwebt direkt auf das alte Steuerhäuschen des Riesenrads zu. Er bereitet eine gewaltige Schockwelle vor, die die Mystery Machine lahmlegen soll. Velma kneift die Augen zusammen: 'Wenn dieser Geist das Stromnetz überlastet, verlieren wir alle Beweise!'",
        "background": "./game_images/background_sd_amusement_park.png",
        "choices": [
            { "text": "Die Stromzufuhr des Riesenrads mit dem UV-Spurensucher sabotieren", "next": "c3_sd_30", "required_item": "sd_uv_tracker" },
            { "text": "Den Kontrollraum mit dem Hauptschlüsselbund verriegeln", "next": "c3_sd_30", "required_item": "sd_park_keys" }
        ]
    },

    "c3_sd_11": {
        "text": "Shaggy schnuppert an der Farbe. 'Like, das riecht überhaupt nicht nach Grusel-Schleim, Kumpel! Das ist ganz normale Theaterfarbe!' Die Spur führt direkt zu einem versteckten, unterirdischen Tank hinter der Losbude, doch der Deckel ist mit einem schweren Vorhängeschloss gesichert.",
        "background": "./game_images/background_sd_park_grounds.png",
        "character": "./game_images/character_sd_shaggy_scooby.png",
        "choices": [
            { "text": "Das Schloss mit Velmas Haarnadel vorsichtig knacken", "next": "c3_sd_28", "karma": 4 },
            { "text": "Scooby den schweren Tank mit Wucht umwerfen lassen", "next": "c3_sd_27", "karma": -5 }
        ]
    },

    "c3_sd_12": {
        "text": "Ihr erreicht das Steuerzentrum des Parks, doch die schwere Eisentür ist komplett verriegelt. Drinnen hört man das laute Tippen einer Person. Der Geist taucht plötzlich hinter euch auf und seine Augen glühen bedrohlich rot! Fred versucht verzweifelt, die Tür aufzustoßen.",
        "background": "./game_images/background_sd_park_grounds.png",
        "choices": [
            { "text": "Die Tür mit dem Park-Hauptschlüsselbund blitzschnell öffnen", "next": "c3_sd_26", "required_item": "sd_park_keys" },
            { "text": "Sich umdrehen und dem Geist mit erhobenen Fäusten entgegentreten", "next": "c3_sd_13", "karma": -4 }
        ]
    },

    "c3_sd_13": {
        "text": "Der überstürzte Plan geht völlig schief. Die Falle schnappt nach den falschen Leuten, der Geist entkommt im dichten Rauch, und Shaggy und Scooby landen kopfüber in einem riesigen Bottich voll mit klebriger Zuckerwatte. Das Monster lacht hämisch aus der Ferne, während die Mystery-Gang komplett handlungsunfähig im Zucker feststeckt.",
        "background": "./game_images/background_sd_amusement_park.png",
        "choices": [
            { "text": "Fred beim Freischneiden helfen und die Verfolgung neu aufnehmen", "next": "c3_sd_28", "karma": 3 },
            { "text": "Scooby die Zuckerwatte auffressen lassen um den Mechanismus freizulegen", "next": "c3_sd_27", "karma": -1 }
        ]
    },

    "c3_sd_14": {
        "text": "Im Spiegelkabinett findet Velma dank deiner Hilfe ihre Brille wieder! 'Jinkies! Schaut euch diese Spiegel an! Das Licht wird von Projektoren hinter den Wänden verzerrt!' Sie entdeckt ein freiliegendes Glasfaserkabel, das direkt zum geheimen Projektorraum des Parks führt.",
        "background": "./game_images/background_sd_mirror_maze.png",
        "choices": [
            { "text": "Den Hauptprojektor mit dem Nebel-Steuerungsfernbedienung lahmlegen", "next": "c3_sd_30", "required_item": "sd_fog_remote" },
            { "text": "Das Kabel mit Freds Taschenmesser durchtrennen", "next": "c3_sd_27", "karma": -3 }
        ]
    },

    "c3_sd_15": {
        "text": "Mithilfe deines Nebel-Reglers oder des UV-Trackers findet ihr die Schwachstelle des Geistes: Ein versteckter, kleiner Hologramm-Projektor, der an der Schiene der Achterbahn montiert ist. Doch der vermeintliche Geist steuert das Gerät direkt aus einer fahrbaren Lore.",
        "background": "./game_images/background_sd_rollercoaster.png",
        "choices": [
            { "text": "Die Elektronik der Lore mit der Nebel-Fernbedienung überlasten", "next": "c3_sd_30", "required_item": "sd_fog_remote" },
            { "text": "Shaggy ein langes Seil spannen lassen um die Lore aus den Schienen zu werfen", "next": "c3_sd_13", "karma": 2 }
        ]
    },

    "c3_sd_22": {
        "text": "Du bringst den Hauptschlüsselbund zu Shaggy und Scooby. Beim panischen Herumfuchteln rutscht Scooby aus, wirft die Schlüssel in die Luft, und sie landen exakt im Getriebe des großen Stromgenerators! Das Getriebe blockiert mit einem lauten Knirschen, und alle Spezialeffekte im Park fallen schlagartig aus.",
        "background": "./game_images/background_sd_park_grounds.png",
        "character": "./game_images/character_sd_shaggy_scooby.png",
        "choices": [
            { "text": "Den enttarnten Gauner im Kontrollraum stellen", "next": "c3_sd_30", "karma": 5 },
            { "text": "Den Generator genauer untersuchen", "next": "c3_sd_13", "karma": -1 }
        ]
    },

    "c3_sd_26": {
        "text": "Durch den cleveren Einsatz deiner Gegenstände bricht die Illusion des Geistes komplett zusammen. Das neongrüne Leuchten verblasst zu einfachem Scheinwerferlicht und die unheimliche Heulmusik verwandelt sich in das Ächzen eines alten Tonbands.",
        "background": "./game_images/background_sd_amusement_park.png",
        "choices": [
            { "text": "Den Gauner endgültig in die Falle locken", "next": "c3_sd_30" },
            { "text": "Fred den Rest erledigen lassen", "next": "c3_sd_27", "karma": 2 }
        ]
    },

    "c3_sd_27": {
        "text": "Die Apparatur fliegt mit einem lauten Knall in die Luft! Der Geist entkommt zwar unerkannt im dichten Rauch der Explosion, doch der Spuk im Park hat ein Ende. Die Mystery-Gang steht erschöpft im Schlamm und Fred seufzt: 'Wir haben den Fall gelöst, aber wir werden wohl nie erfahren, wer unter der Maske steckte...'",
        "background": "./game_images/background_sd_amusement_park.png",
        "choices": [
            { "text": "end", "next": "end" }
        ]
    },

    "c3_sd_28": {
        "text": "Shaggy und Scooby stolpern vor Schreck über das dicke Netzkabel des Projektors und reißen es komplett aus der Steckdose! Der Geist verschwindet augenblicklich und eine Gestalt im klobigen Taucheranzug stürzt fluchend aus der Steuerkabine mitten in Freds bereitstehendes Netz.",
        "background": "./game_images/background_sd_amusement_park.png",
        "character": "./game_images/character_sd_shaggy_scooby.png",
        "choices": [
            { "text": "Die Maske des Gauners feierlich abnehmen", "next": "c3_sd_30" }
        ]
    },

    "c3_sd_30": {
        "text": "Mit einem genialen Finale wird der Geist vollständig enttarnt! Fred tritt stolz vor und reißt der zappelnden Gestalt die schaurige Gummimaske vom Kopf. Zum Vorschein kommt... der alte Parkwächter Mr. Jenkins! Velma rückt ihre Brille zurecht: 'Genau wie ich vermutet hatte! Jenkins wollte den Geist nutzen, um den Wert des Parks zu senken und das Grundstück billig zu kaufen!' Mr. Jenkins fuchtelt wütend mit den Fäusten im Netz herum: 'Und ich wäre auch damit durchgekommen, wenn diese medizierenden Kinder und ihr dämlicher Hund nicht gewesen wären!' Shaggy und Scooby springen jubelnd in die Luft, schnappen sich ein riesiges Sandwich und Scooby ruft laut: 'Scooby-Dooby-Doo!!!'",
        "background": "./game_images/background_sd_amusement_park.png",
        "character": "./game_images/character_sd_shaggy_scooby.png",
        "choices": [
            { "text": "Ende", "next": "end" }
        ]
    },

    "c3_tmnt_start": {
        "text": "In den dunklen Straßen von New York City bricht das Chaos aus. Eine Armee von mechanischen Mousern kriecht aus den Gullys und attackiert die Stromkästen. Plötzlich färbt sich der Nachthimmel violett, als ein riesiges Technodrom-Portal über dem Times Square aufreißt. Krang erscheint auf einem riesigen holografischen Bildschirm, während Leonardo, Raphael, Donatello und Michelangelo bereits ihre Waffen ziehen.",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "Mit Leonardo den Times Square absichern", "next": "c3_tmnt_1", "karma": 1 },
            { "text": "Mit Donatello die Mouser-Steuerung hacken", "next": "c3_tmnt_2", "karma": 2 },
            { "text": "Mit Raphael direkt die Straßenschlucht stürmen", "next": "c3_tmnt_3", "karma": -1 },
            { "text": "Michelangelo folgen, der einer Pizza-Spur in die Kanalisation nachgeht", "next": "c3_tmnt_4", "karma": 3 }
        ]
    },

    "c3_tmnt_1": {
        "text": "Leonardo pariert die Angriffe der Foot-Clan-Ninja mit eiserner Disziplin. 'Das Portal zieht Energie aus dem Hauptkraftwerk! Wenn wir den Strom nicht kappen, bricht das Technodrom komplett in unsere Dimension durch!' Mitten im Gefecht verliert ein feindlicher Elite-Ninja ein seltsames Gerät.",
        "background": "./game_images/background_tmnt_rooftop.png",
        "character": "./game_images/character_tmnt_leonardo.png",
        "choices": [
            { "text": "Den kybernetischen Foot-Clan-Schlüssel einpacken", "next": "tmnt_foot_key", "gain_item": "tmnt_foot_key" },
            { "text": "Das Gerät ignorieren und die Brücke verteidigen", "next": "c3_tmnt_5", "karma": -2 }
        ]
    },

    "tmnt_foot_key": {
        "text": "Du erhältst den Foot-Clan-Schlüssel. Er vibriert mit der Frequenz von Shredders Geheimbasis.",
        "background": "./game_images/background_tmnt_rooftop.png",
        "character": "./game_images/item_tmnt_foot_key.png",
        "choices": [
            { "text": "Den Schlüssel an Donatellos Terminal testen", "next": "c3_tmnt_8" },
            { "text": "Damit zu Raphaels Kampfschauplatz eilen", "next": "c3_tmnt_6" }
        ]
    },

    "c3_tmnt_2": {
        "text": "Donatello tippt wild auf seinem tragbaren T-Phone herum. 'Diese Mouser werden nicht von Baxter Stockman gesteuert, sondern direkt aus der Dimension X! Ich brauche ein reines Mutagen-Signal, um ihren Code zu knacken!' Plötzlich bricht ein mutiertes Riesen-Wildschwein durch die Wand: Bebop!",
        "background": "./game_images/background_tmnt_lab.png",
        "character": "./game_images/character_tmnt_donatello.png",
        "choices": [
            { "text": "Donatello vor Bebop beschützen", "next": "c3_tmnt_6", "karma": 3 },
            { "text": "Bebops fallengelassenen Mutagen-Scanner schnappen", "next": "tmnt_mutagen_scanner", "gain_item": "tmnt_mutagen_scanner", "karma": -1 }
        ]
    },

    "tmnt_mutagen_scanner": {
        "text": "Du erhältst den Mutagen-Scanner. Er kann verborgene Ooze-Konzentrationen und außerirdische Portale orten.",
        "background": "./game_images/background_tmnt_lab.png",
        "character": "./game_images/item_tmnt_scanner.png",
        "choices": [
            { "text": "Mit dem Scanner nach dem Portal-Kern suchen", "next": "c3_tmnt_15" },
            { "text": "Damit zu Meister Splinter in die Kanalisation flüchten", "next": "c3_tmnt_12" }
        ]
    },

    "c3_tmnt_3": {
        "text": "Raphael wirbelt seine Sais durch die Luft und drängt eine Gruppe von Rocksteady-Klonen zurück. 'Diese Blechbüchsen hören einfach nicht auf zu kommen!' Mitten im Chaos rutscht ein wertvoller, goldener Kampf-Greifhaken aus einer Kiste der Kraang-Invasoren.",
        "background": "./game_images/background_tmnt_streets.png",
        "character": "./game_images/character_tmnt_raphael.png",
        "choices": [
            { "text": "In die Seitengasse ausweichen und Deckung suchen", "next": "c3_tmnt_7", "karma": -3 },
            { "text": "Den High-Tech-Ninja-Greifhaken einstecken", "next": "tmnt_grappling_hook", "gain_item": "tmnt_grappling_hook", "karma": 4 }
        ]
    },

    "tmnt_grappling_hook": {
        "text": "Du erhältst den Ninja-Greifhaken. Er schießt ein mikro-verstärktes Titanseil über extreme Distanzen.",
        "background": "./game_images/background_tmnt_streets.png",
        "character": "./game_images/item_tmnt_hook.png",
        "choices": [
            { "text": "Den Haken nutzen, um auf das Dach des Kraftwerks zu gelangen", "next": "c3_tmnt_8" },
            { "text": "Den Haken zu Michelangelo in die Kanalisation bringen", "next": "c3_tmnt_22" }
        ]
    },

    "c3_tmnt_4": {
        "text": "Michelangelo schnaubt glücklich. 'Hey Kumpel, eine frische Marshmallow-Salami-Pizza! Das kann kein Zufall sein!' Doch als er zugreift, entpuppt sich die Pizza als Köder: Ein gigantischer Roboter-Krake bricht aus dem Abwasser und reißt Mikey mit sich! April O'Neil filmt die Szene geschockt von einer Leiter aus.",
        "background": "./game_images/background_tmnt_sewer.png",
        "character": "./game_images/character_tmnt_mikey.png",
        "choices": [
            { "text": "April dabei helfen, das Beweismaterial zu sichern", "next": "c3_tmnt_11", "karma": 4 },
            { "text": "Sofort hinterherringen und den Kraken attackieren", "next": "c3_tmnt_12", "karma": -2 }
        ]
    },

    "c3_tmnt_5": {
        "text": "Ohne den Schlüssel blockieren die elektronischen Barrieren das Vorankommen. Ein Rudel fliegender Kraang-Drohnen kesselt euch auf dem Dach ein. Sie laden ihre Plasma-Kanonen auf. Leonardo versucht verzweifelt, die Drohnen im Sprung zu erwischen, doch die Reichweite ist zu groß.",
        "background": "./game_images/background_tmnt_rooftop.png",
        "choices": [
            { "text": "Casey Jones mit seinem Hockey-Schläger zur Hilfe rufen", "next": "c3_tmnt_13", "karma": 3 },
            { "text": "Gemeinsam durch ein Lüftungsrohr ins Kraftwerk flüchten", "next": "c3_tmnt_14", "karma": 5 }
        ]
    },

    "c3_tmnt_6": {
        "text": "Shredder tritt persönlich aus den Schatten! Seine Klingen blitzen im fahlen Licht. 'Ihr Schildkröten habt mein Imperium oft genug gestört! Heute wird das Technodrom diese Stadt säubern!' Er holt zum finalen Schlag gegen die wehrlosen Turtles aus.",
        "background": "./game_images/background_tmnt_streets.png",
        "character": "./game_images/character_tmnt_shredder.png",
        "choices": [
            { "text": "Den Foot-Clan-Schlüssel nutzen, um Shredders Rüstung kurzzuschließen", "next": "c3_tmnt_26", "required_item": "tmnt_foot_key" },
            { "text": "Sich schützend vor das Team werfen und den Schlag blocken", "next": "c3_tmnt_13", "karma": -4 }
        ]
    },

    "c3_tmnt_7": {
        "text": "Der Boden in der Seitengasse bricht durch das enorme Gewicht der Mouser ein! Du stürzt zusammen mit Trümmern in das uralte U-Bahn-Netzwerk unter New York. Weit entfernt hört man das bedrohliche Stampfen des Technodrom-Generators.",
        "background": "./game_images/background_tmnt_sewer.png",
        "choices": [
            { "text": "Den Schienen folgen, um den Generator zu finden", "next": "c3_tmnt_15", "karma": -2 },
            { "text": "Nach oben klettern und die Schildkröten suchen", "next": "c3_tmnt_13", "karma": 4 }
        ]
    },

    "c3_tmnt_8": {
        "text": "Das Technodrom-Portal hat sich vollständig stabilisiert. Die metallische Festung schiebt sich langsam durch den Riss und droht, das gesamte Viertel zu zerquetschen. Krang lacht irre aus seiner Steuerkabine: 'Niemand kann die Dimension X aufhalten!'",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "Den Portal-Kern mit dem Foot-Clan-Schlüssel manipulieren", "next": "c3_tmnt_30", "required_item": "tmnt_foot_key" },
            { "text": "Den Generator mit dem Ninja-Greifhaken aus der Verankerung reißen", "next": "c3_tmnt_30", "required_item": "tmnt_grappling_hook" }
        ]
    },

    "c3_tmnt_11": {
        "text": "April analysiert das Video auf ihrem Laptop. 'Die Spur führt zu einem versteckten Labor in den Docks! Dort lagert Krang das gestohlene Ooze!' Der Eingang zu den Docks wird jedoch von einer schweren Stahltür versperrt.",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "Das Schloss mit Donatellos Laserschneider öffnen", "next": "c3_tmnt_28", "karma": 4 },
            { "text": "Die Tür gewaltsam mit einer Mülltonne rammen", "next": "c3_tmnt_27", "karma": -5 }
        ]
    },

    "c3_tmnt_12": {
        "text": "Ihr erreicht das geheime Hauptquartier, doch Meister Splinter ist nirgends zu sehen. Stattdessen haben Kraang-Androiden das Versteck besetzt! Sie aktivieren ihre Schusswaffen und kesseln euch ein. Die Lage scheint absolut aussichtslos.",
        "background": "./game_images/background_tmnt_sewer.png",
        "choices": [
            { "text": "Die Androiden mit dem Mutagen-Scanner überlasten", "next": "c3_tmnt_26", "required_item": "tmnt_mutagen_scanner" },
            { "text": "Den Kampf im engen Abwasserkanal wagen", "next": "c3_tmnt_13", "karma": -4 }
        ]
    },

    "c3_tmnt_13": {
        "text": "Der überstürzte Angriff scheitert. Die Waffen der Turtles werden beschädigt, das Technodrom-Portal dehnt sich weiter aus, und ihr werdet in einer Energiekapsel gefangen genommen. Das Krang-Imperium scheint gesiegt zu haben, doch plötzlich bricht Meister Splinter mit einem lauten Kampfschrei durch die Decke!",
        "background": "./game_images/background_tmnt_sewer.png",
        "character": "./game_images/character_tmnt_splinter.png",
        "choices": [
            { "text": "Splinters Gegenangriff unterstützen", "next": "c3_tmnt_28", "karma": 3 },
            { "text": "Die Verwirrung zur Flucht in den Kontrollraum nutzen", "next": "c3_tmnt_27", "karma": -1 }
        ]
    },

    "c3_tmnt_14": {
        "text": "Im Inneren des Kraftwerks findet Donatello die Hauptstromleitung. 'Wenn wir diese Relais kappen, bricht die Verbindung zur Dimension X zusammen!' Plötzlich materialisiert sich eine Elite-Wache des Foot-Clans und schneidet das Kabel ab.",
        "background": "./game_images/background_tmnt_lab.png",
        "choices": [
            { "text": "Die Notstromversorgung mit dem Mutagen-Scanner hacken", "next": "c3_tmnt_30", "required_item": "tmnt_mutagen_scanner" },
            { "text": "Das Kabel manuell mit Leonardos Katanas verbinden", "next": "c3_tmnt_27", "karma": -3 }
        ]
    },

    "c3_tmnt_15": {
        "text": "Mithilfe des Scanners findet ihr die Schwachstelle: Ein kleiner, ungeschützter Belüftungsschacht direkt über dem Technodrom-Hauptprozessor. Doch Baxter Stockman bewacht den Schacht in seiner mutierten Fliegenform.",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "Stockmans Flugbahnen mit dem Mutagen-Scanner berechnen", "next": "c3_tmnt_30", "required_item": "tmnt_mutagen_scanner" },
            { "text": "Ihn mit Michelangelos Nunchakus aus der Luft holen", "next": "c3_tmnt_13", "karma": 2 }
        ]
    },

    "c3_tmnt_22": {
        "text": "Du wirfst Michelangelo den Ninja-Greifhaken zu. Er fängt ihn ab, wirbelt das Seil im Kreis und schleudert den Haken exakt in das Auge des Roboter-Kraken! Die Maschine erleidet einen Kurzschluss und gibt den Weg zum Hafen frei.",
        "background": "./game_images/background_tmnt_sewer.png",
        "choices": [
            { "text": "Dem flüchtenden Kraken folgen", "next": "c3_tmnt_30", "karma": 5 },
            { "text": "Zurück an die Oberfläche kehren", "next": "c3_tmnt_13", "karma": -1 }
        ]
    },

    "c3_tmnt_26": {
        "text": "Durch den präzisen Einsatz deiner Gegenstände bricht die Barriere des Foot-Clans zusammen. Shredders Rüstung sprüht Funken und Krangs Portal verliert die nötige Stabilität, um die schweren Kriegsmaschinen zu transportieren.",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "Den finalen Angriff mit den Turtles starten", "next": "c3_tmnt_30" },
            { "text": "Sich neu formieren", "next": "c3_tmnt_27", "karma": 2 }
        ]
    },

    "c3_tmnt_27": {
        "text": "Das Technodrom-Portal implodiert mit einem gewaltigen Knall! Shredder und Krang werden im letzten Moment zurück in die Dimension X geschleudert. New York City ist gerettet, doch die Straßen liegen voller Trümmer und die Turtles müssen sich schnell zurückziehen, bevor die Polizei eintrifft.",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "end", "next": "end" }
        ]
    },

    "c3_tmnt_28": {
        "text": "Meister Splinter schlägt die Foot-Ninja mit unnachahmlicher Eleganz in die Flucht, während Donatello das Portal-Terminal mit einem Code füttert. Das violette Leuchten am Himmel verblasst.",
        "background": "./game_images/background_tmnt_streets.png",
        "choices": [
            { "text": "Den finalen Schlag ausführen", "next": "c3_tmnt_30" }
        ]
    },

    "c3_tmnt_30": {
        "text": "Mit einem furiosen Finale zerschmettern die Teenage Mutant Ninja Turtles – getragen von Leonardos Führung, Donatellos genialem Hack und dem präzisen Einsatz des Foot-Clan-Schlüssels – die Invasionspläne des Bösen. Das Technodrom-Portal schließt sich vollständig und hinterlässt nur einen klaren, friedlichen Sternenhimmel über Manhattan. Die Straßen sind wieder sicher. In ihrem Versteck stoßen die Turtles mit riesigen Stücken Peperoni-Pizza an. Meister Splinter nickt dir gütig zu: 'Ihr habt heute bewiesen, dass Mut und Loyalität die stärksten Waffen sind.' Mikey springt euphorisch hoch und ruft laut: 'COWABUNGA!!!'",
        "background": "./game_images/background_tmnt_sewer.png",
        "choices": [
            { "text": "Ende", "next": "end" }
        ]
    },

    "c3_shs_start": {
        "text": "Alarm im Super Hero City Helicarrier! Doktor Doom hat seine bösartigen Lethal Legion Schurken ausgesandt, um die Stadt zu tyrannisieren. Auf den Monitoren flackert eine Warnung: Abominable und MODOK attackieren das Einkaufszentrum im Stadtzentrum, um einen mächtigen Infinity-Fraktal-Splitter zu rauben! Wenn sie das Fraktal in Dooms Hände übergeben, ist die Realität in Gefahr. Iron Man, Thor, Hulk, Wolverine, Falcon und Silver Surfer stehen kampfbereit in der Einsatzzentrale.",
        "background": "./game_images/background_shs_helicarrier.png",
        "choices": [
            { "text": "Mit Iron Man und Falcon die Flugbahn der Schurken analysieren", "next": "c3_shs_1", "karma": 2 },
            { "text": "Mit Thor und Hulk direkt ins Einkaufszentrum stürmen", "next": "c3_shs_2", "karma": -1 },
            { "text": "Mit Wolverine im Tresorraum nach SHIELD-Ausrüstung suchen", "next": "c3_shs_3", "karma": 1 },
            { "text": "Mit Silver Surfer die kosmischen Wellen des Fraktals orten", "next": "c3_shs_4", "karma": 3 }
        ]
    },

    "c3_shs_1": {
        "text": "Iron Man tippt hektisch auf den holografischen Holo-Screens seines Anzugs, während Falcon die Triebwerke checkt. 'Das Fraktal sendet eine wilde Welle aus! Es manipuliert die Schwerkraft im Einkaufszentrum, sodass die Regale schweben!' In diesem Moment bricht ein wichtiges, golden glühendes Stark-Tech-Bauteil aus der Konsole.",
        "background": "./game_images/background_shs_helicarrier.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "Den Stark-Tech-Fraktal-Dämpfer einstecken", "next": "shs_fractal_dampener", "gain_item": "shs_fractal_dampener" },
            { "text": "Die Konsole mit Falcons Flügeln manuell überbrücken", "next": "c3_shs_5", "karma": -2 }
        ]
    },

    "shs_fractal_dampener": {
        "text": "Du erhältst den Stark-Tech-Fraktal-Dämpfer. Er kann die instabilen Realitäts-Kräfte kosmischer Splitter vorübergehend einfrieren.",
        "background": "./game_images/background_shs_helicarrier.png",
        "character": "./game_images/item_shs_dampener.png",
        "choices": [
            { "text": "Den Dämpfer am Triebwerk des Helicarriers testen", "next": "c3_shs_8" },
            { "text": "Damit zu Thor und Hulk ins Einkaufszentrum fliegen", "next": "c3_shs_6" }
        ]
    },

    "c3_shs_2": {
        "text": "Thor schwingt seinen Hammer Mjolnir, während Hulk lautstark brüllt und Schaufenster zertrümmert. Doch das Einkaufszentrum ist voller schwebender Spielzeuge und mutierter Kaugummi-Automaten! MODOK schwebt in seinem riesigen Sessel heran und kichert hämisch: 'Ihr hirnlosen Helden! Mit diesem Fraktal werde ich, MODOK, eure alberne Squad intellektuell vernichten!'",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_modok.png",
        "choices": [
            { "text": "Hulk dabei helfen MODOKS Sessel zu rammen", "next": "c3_shs_6", "karma": 3 },
            { "text": "Einen abgestürzten, außerirdischen Stark-Tech-Scanner vom Boden aufheben", "next": "shs_shield_tracker", "gain_item": "shs_shield_tracker", "karma": -1 }
        ]
    },

    "shs_shield_tracker": {
        "text": "Du erhältst den SHIELD-Tracker. Er ortet hochenergetische Signaturen von Schurken und Fraktal-Energie im Umkreis.",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/item_shs_tracker.png",
        "choices": [
            { "text": "Mit dem Tracker die genaue Position des Infinity-Fraktals bestimmen", "next": "c3_shs_15" },
            { "text": "Damit zu Wolverine in den Tresorraum eilen", "next": "c3_shs_12" }
        ]
    },

    "c3_shs_3": {
        "text": "Wolverine fährt seine Krallen aus und durchsucht ungeduldig die Kisten im Shield-Lager des Helicarriers. 'Hier drin ist alles voller glitzerndem Kram! Such nach etwas, das Krämpfe verursacht!' Plötzlich droht eine schwere Stahlbox auf Reptils kostbares Dinosaurier-Fossil zu stürzen.",
        "background": "./game_images/background_shs_armory.png",
        "character": "./game_images/character_shs_wolverine.png",
        "choices": [
            { "text": "Die Stahlbox mit Wolverines Krallen zerschreddern", "next": "c3_shs_7", "karma": -3 },
            { "text": "Das schwere, goldene Captain-America-Schild rechtzeitig auffangen", "next": "shs_cap_shield", "gain_item": "shs_cap_shield", "karma": 4 }
        ]
    },

    "shs_cap_shield": {
        "text": "Du fängst das legendäre Vibranium-Schild auf. Es reflektiert jeden Energiestrahl und fängt harte Schläge ab.",
        "background": "./game_images/background_shs_armory.png",
        "character": "./game_images/item_shs_shield.png",
        "choices": [
            { "text": "Das Schild nutzen, um die Laser von MODOK abzuwehren", "next": "c3_shs_8" },
            { "text": "Das Schild zu Iron Man in die Einsatzzentrale bringen", "next": "c3_shs_22" }
        ]
    },

    "c3_shs_4": {
        "text": "Silver Surfer schwebt majestätisch auf seinem Board im Helicarrier-Hangar. 'Die kosmischen Schwingungen dieses Fraktals sind völlig unharmonisch, Kumpel! Aber wenn wir die Energie bündeln, können wir Dooms Lethal Legion stoppen!' Plötzlich mutieren die SHIELD-Sicherheitsroboter durch die Strahlung zu fiesen Klonen.",
        "background": "./game_images/background_shs_hangar.png",
        "character": "./game_images/character_shs_surfer.png",
        "choices": [
            { "text": "Den Hangar mit Silver Surfers kosmischen Kräften verteidigen", "next": "c3_shs_11", "karma": 4 },
            { "text": "Wolverines Hilfe rufen und die Roboter frontal angreifen", "next": "c3_shs_12", "karma": -2 }
        ]
    },

    "c3_shs_5": {
        "text": "Der Versuch, die Konsole manuell zu überbrücken, löst einen heftigen Energiestau aus! Die Türen des Ops-Rooms verriegeln sich automatisch und lila Blitze schießen aus den Deckenleuchten. Iron Man verliert kurz den Halt, während Falcon versucht, eine schützende Barriere mit seinen Flügeln zu formen.",
        "background": "./game_images/background_shs_helicarrier.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "Thor rufen, um die Tür mit Mjolnir einzuschlagen", "next": "c3_shs_13", "karma": 3 },
            { "text": "Iron Man die Notfall-Überbrückung erklären", "next": "c3_shs_14", "karma": 5 }
        ]
    },

    "c3_shs_6": {
        "text": "MODOK feuert einen gigantischen Psycho-Strahl aus seiner Stirn und schleudert Thor mitten in die Schaufenster. Abominable nutzt die Verwirrung, schnappt sich den Infinity-Splitter und grinst dreckig. MODOK lacht laut: 'Die Super Hero Squad ist heute super-hilflos!'",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_modok.png",
        "choices": [
            { "text": "Den Fraktal-Dämpfer nutzen, um MODOKS Sessel lahmzulegen", "next": "c3_shs_26", "required_item": "shs_fractal_dampener" },
            { "text": "Thor und Hulk decken und einen wütenden Gegenangriff starten", "next": "c3_shs_13", "karma": -4 }
        ]
    },

    "c3_shs_7": {
        "text": "Wolverines Krallen zertrümmern die Box, lösen aber ein SHIELD-Sicherheitssystem aus! Kaltes Löschgas flutet den Tresorraum und blockiert die Sicht. Hulk stürzt plötzlich durch die Wand, verwechselt Wolverine mit einem Schurken und fängt an zu toben.",
        "background": "./game_images/background_shs_armory.png",
        "character": "./game_images/character_shs_wolverine.png",
        "choices": [
            { "text": "Auf Hulks Rücken springen und versuchen ihn zu beruhigen", "next": "c3_shs_15", "karma": -2 },
            { "text": "Die restliche Ausrüstung trotz des Gases sichern", "next": "c3_shs_13", "karma": 4 }
        ]
    },

    "c3_shs_8": {
        "text": "MODOK und Abominable aktivieren das Fraktal mitten im Einkaufszentrum! Ein riesiger, bunter Energiesturm droht, das gesamte Gebäude in die Luft zu jagen und in eine riesige Doom-Statue zu verwandeln. Iron Man fliegt mutig voran: 'Squad, formiert euch! Helden sterben nie!'",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "Das Fraktal mit dem Fraktal-Dämpfer einfrieren", "next": "c3_shs_30", "required_item": "shs_fractal_dampener" },
            { "text": "Die Energiestrahlen mit Captain Americas Schild reflektieren", "next": "c3_shs_30", "required_item": "shs_cap_shield" }
        ]
    },

    "c3_shs_11": {
        "text": "Silver Surfer kanalisiert die kosmische Energie! Die mutierten Roboter explodieren in bunten Funken, doch die Belastung ist zu groß für den Hangar. Die Triebwerksplattform fängt an zu brennen und raucht heftig.",
        "background": "./game_images/background_shs_hangar.png",
        "character": "./game_images/character_shs_surfer.png",
        "choices": [
            { "text": "Den Brand mit Hulks gewaltigem Wind-Klatsch löschen", "next": "c3_shs_28", "karma": 4 },
            { "text": "Den brennenden Bereich abkoppeln und MODOK jagen", "next": "c3_shs_27", "karma": -5 }
        ]
    },

    "c3_shs_12": {
        "text": "Ihr erreicht den Tresorraum, doch Dooms fiese Doombots haben das SHIELD-Lager bereits besetzt. Sie scannen nach Waffen. Wolverine knurrt wütend, während MODOKS Stimme über die Lautsprecher dröhnt.",
        "background": "./game_images/background_shs_armory.png",
        "character": "./game_images/character_shs_wolverine.png",
        "choices": [
            { "text": "Die Doombots mit dem SHIELD-Tracker hacken", "next": "c3_shs_26", "required_item": "shs_shield_tracker" },
            { "text": "In den direkten, wilden Nahkampf übergehen", "next": "c3_shs_13", "karma": -4 }
        ]
    },

    "c3_shs_13": {
        "text": "Der übereilte Angriff schlägt fehl! Die Waffen der Squad verlieren ihre Energie und die Schurken kesseln euch ein. Doom lacht triumphierend auf den Bildschirmen, doch plötzlich bricht Thor mit einem lauten 'HERO UP!' durch das Glasdach, um euch rauszuhauen!",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "Thors mächtigen Blitzeinschlag unterstützen", "next": "c3_shs_28", "karma": 3 },
            { "text": "Die Verwirrung nutzen, um MODOK das Fraktal zu klauen", "next": "c3_shs_27", "karma": -1 }
        ]
    },

    "c3_shs_14": {
        "text": "Iron Man behält die Nerven und reaktiviert die Systeme. Er projiziert eine Karte des Einkaufszentrums, die MODOKS Versteck direkt hinter der Spielwarenabteilung offenbart. Falcon fliegt begeistert los!",
        "background": "./game_images/background_shs_helicarrier.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "MODOKS Sessel mit dem Fraktal-Dämpfer ausschalten", "next": "c3_shs_30", "required_item": "shs_fractal_dampener" },
            { "text": "Den Sessel mit Wolverines Krallen zerfetzen", "next": "c3_shs_27", "karma": -3 }
        ]
    },

    "c3_shs_15": {
        "text": "Mithilfe des Trackers findet ihr das Fraktal: Es steckt direkt in MODOKS Stirn-Apparatur! Doch Abominable bewacht seinen Boss wütend mit zwei riesigen Spielzeug-Säulen in den Händen.",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_modok.png",
        "choices": [
            { "text": "MODOKS Frequenz mit dem SHIELD-Tracker stören", "next": "c3_shs_30", "required_item": "shs_shield_tracker" },
            { "text": "Hulk das Fraktal mit roher Gewalt entreißen lassen", "next": "c3_shs_13", "karma": 2 }
        ]
    },

    "c3_shs_22": {
        "text": "Du bringst das Vibranium-Schild zu Iron Man. Als er es mit seiner Rüstung koppelt, entsteht ein riesiger Energie-Reflektor! Er fliegt zurück ins Einkaufszentrum und fängt MODOKS Psycho-Blitze perfekt ab.",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "MODOK mit dem reflektierten Strahl wegpusten", "next": "c3_shs_30", "karma": 5 },
            { "text": "Das Schild nutzen, um Abominable zu stoppen", "next": "c3_shs_13", "karma": -1 }
        ]
    },

    "c3_shs_26": {
        "text": "Durch den cleveren Einsatz deiner Gegenstände bricht MODOKS Energie-Barriere zusammen. Das Fraktal verliert seine lila Strahlung und Abominable rutscht tollpatschig auf schwebenden Skateboards aus.",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_modok.png",
        "choices": [
            { "text": "Den finalen Rettungsschlag mit der Squad ausführen", "next": "c3_shs_30" },
            { "text": "MODOK und Abominable verspotten", "next": "c3_shs_27", "karma": 2 }
        ]
    },

    "c3_shs_27": {
        "text": "Die Apparatur explodiert in einer riesigen, bunten Konfetti-Welle! MODOK und Abominable fliehen jammernd in einer kleinen Kapsel zu Doktor Doom. Das Einkaufszentrum ist zwar gerettet, liegt aber voller Spielzeugtrümmer und die Squad muss aufräumen.",
        "background": "./game_images/background_shs_mall.png",
        "choices": [
            { "text": "end", "next": "end" }
        ]
    },

    "c3_shs_28": {
        "text": "Iron Man koppelt die Energie von Thors Blitzen mit seinem Unibeam und formt eine gewaltige Lichtwelle! Zusammen mit Hulk, Wolverine und Falcon stürmen sie die feindliche Position.",
        "background": "./game_images/background_shs_mall.png",
        "character": "./game_images/character_shs_ironman.png",
        "choices": [
            { "text": "Den finalen Schlag gegen MODOK führen", "next": "c3_shs_30" }
        ]
    },

    "c3_shs_30": {
        "text": "Mit einem bombastischen Finale zerschmettert die Super Hero Squad – getragen von Iron Mans Führung, Thors Blitzen, Hulks Smash-Kraft und dem präzisen Einsatz des Fraktal-Dämpfers – die Lethal Legion. Das Infinity-Fraktal zerspringt in harmlose, funkelnde Glitzerpartikel, die wie Konfetti zu Boden fallen. Das Einkaufszentrum erstrahlt wieder in sicherem Licht. Iron Man hebt den Daumen: 'Gute Arbeit, Squad! Zeit für eine Sieges-Pizza!' Hulk schnappt sich ein riesiges Stück, während Wolverine grinst und die Helden im Chor rufen: 'HERO UP!'",
        "background": "./game_images/background_shs_mall.png",
        "choices": [
            { "text": "Ende", "next": "end" }
        ]
    },
    "c3_tdi_start": {
        "text": "Es ist Mitternacht im Camp Wawanakwa. Chris McLean steht grinsend am Lagerfeuer und verkündet die nächste sadistische Herausforderung. 'Die heutige Challenge ist ein nächtlicher Orientierungslauf durch den verbotenen Wald von Wawanakwa! Aber aufgepasst: Es gibt Gerüchte über ein mutiertes Riesen-Wildschwein und eine verlorene, goldene Chris-Statue, die unschätzbare Immunität verleiht!' Gwen und Duncan checken genervt ihre Ausrüstung, während Heather bereits einen fiesen Plan schmiedet, und Owen panisch nach seinen Marshmallows sucht.",
        "background": "./game_images/background_tdi_campfire.png",
        "choices": [
            { "text": "Mit Gwen und Trent der sicheren Kompass-Route folgen", "next": "c3_tdi_1", "karma": 2 },
            { "text": "Mit Duncan und Geoff eine verbotene Abkürzung durch die Höhlen nehmen", "next": "c3_tdi_2", "karma": -1 },
            { "text": "Mit Leshawna und Owen Heathers verdächtige Spuren verfolgen", "next": "c3_tdi_3", "karma": 1 },
            { "text": "Chef Hatchets Küche nach geheimen Vorräten und Werkzeugen durchsuchen", "next": "c3_tdi_4", "karma": 3 }
        ]
    },

    "c3_tdi_1": {
        "text": "Gwen starrt genervt auf die Karte, während Trent seine Gitarre schultert. 'Laut Chris' Notizen führt dieser Pfad direkt zur Lichtung der Immunität. Aber der Kompass dreht wegen einer magnetischen Störung völlig durch!' In diesem Moment bricht ein wichtiges, nützliches Werkzeug aus Gwens kaputter Taschenlampe.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "Das modifizierte Taschenlampen-Multitool einstecken", "next": "tdi_multitool", "gain_item": "tdi_multitool" },
            { "text": "Die Taschenlampe liegen lassen und im Mondlicht weiterwandern", "next": "c3_tdi_5", "karma": -2 }
        ]
    },

    "tdi_multitool": {
        "text": "Du erhältst das Wawanakwa-Multitool. Es enthält einen Schraubenzieher, eine Drahtschere und eine extrem helle Notleuchte.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/item_tdi_multitool.png",
        "choices": [
            { "text": "Das Multitool an den alten Stromkästen im Wald testen", "next": "c3_tdi_8" },
            { "text": "Damit zurück zu Duncan an die Klippe rennen", "next": "c3_tdi_6" }
        ]
    },

    "c3_tdi_2": {
        "text": "Duncan knackt mit einer Haarnadel das Vorhängeschloss eines alten Minenschachts, während Geoff laut juchzt. Doch die Höhle ist voller aggressiver Fledermäuse und klebrigem Schleim! Heather tritt plötzlich aus einem Seitengang hervor und hält die echte, goldene Chris-Statue hoch. 'Ihr Looser kommt zu spät! Diese Immunität gehört mir!'",
        "background": "./game_images/background_tdi_cave.png",
        "character": "./game_images/character_tdi_heather.png",
        "choices": [
            { "text": "Duncan dabei helfen, Heather die Statue abzujagen", "next": "c3_tdi_6", "karma": 3 },
            { "text": "Einen abgerissenen, offiziellen Camp-Lageplan vom Boden aufheben", "next": "tdi_camp_map", "gain_item": "tdi_camp_map", "karma": -1 }
        ]
    },

    "tdi_camp_map": {
        "text": "Du erhältst den geheimen Camp-Lageplan. Er zeigt alle von Chef Hatchet installierten Fallen und geheimen Tunnel.",
        "background": "./game_images/background_tdi_cave.png",
        "character": "./game_images/item_tdi_map.png",
        "choices": [
            { "text": "Mit dem Plan den direkten Weg zur Marshmallow-Lichtung finden", "next": "c3_tdi_15" },
            { "text": "Damit zu Leshawna und Owen in den Wald flüchten", "next": "c3_tdi_12" }
        ]
    },

    "c3_tdi_3": {
        "text": "Leshawna stemmt die Hände in die Hüften und durchsucht wütend das Unterholz. 'Diese Ziege Heather führt uns doch im Kreis!' Owen jammert lautstark im Hintergrund, weil er schrecklichen Hunger hat. Plötzlich droht ein riesiger, morscher Baumstamm auf Lindsay und ihren teuren Kosmetikkoffer zu stürzen.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_leshawna.png",
        "choices": [
            { "text": "Den Baumstamm mit vereinten Kräften wegrammen", "next": "c3_tdi_7", "karma": -3 },
            { "text": "Chef Hatchets schwere, vergessene Bärenfalle rechtzeitig zuschnappen lassen", "next": "tdi_bear_trap", "gain_item": "tdi_bear_trap", "karma": 4 }
        ]
    },

    "tdi_bear_trap": {
        "text": "Du erhältst die rostige Bärenfalle. Sie schnappt mit enormer Wucht zu und kann unvorsichtige Kreaturen bombenfest fixieren.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/item_tdi_trap.png",
        "choices": [
            { "text": "Die Falle auf Heathers Fluchtweg platzieren", "next": "c3_tdi_8" },
            { "text": "Die Falle zu Gwen bringen, um das Wildschwein abzuwehren", "next": "c3_tdi_22" }
        ]
    },

    "c3_tdi_4": {
        "text": "Chef Hatchet steht im klobigen Tarnanzug in der Küche und rührt in einem Topf mit undefinierbarem, grauem Schleim. 'Wer schleicht hier mitten in der Nacht rum?!' Bevor er dich erwischt, schnappst du dir ein Tauschobjekt vom Tresen, während draußen das mutierte Riesen-Wildschwein laut grunzend den Zaun durchbricht.",
        "background": "./game_images/background_tdi_kitchen.png",
        "character": "./game_images/character_tdi_chef.png",
        "choices": [
            { "text": "Die Küche mit Chef Hatchets Suppenlöffel gegen das Schwein verteidigen", "next": "c3_tdi_11", "karma": 4 },
            { "text": "Gwen um Hilfe rufen und panisch in den Wald rennen", "next": "c3_tdi_12", "karma": -2 }
        ]
    },

    "c3_tdi_5": {
        "text": "Ohne Licht stolpert Trent über eine dicke Wurzel und fällt krachend in eine von Chris installierten Schlammgruben! Gwen verliert vor Wut fast die Fassung, während fiese, mechanische Scheinwerfer aus den Bäumen fahren und euch blenden. Heather steht am Rand der Grube und kichert fies.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "Duncan zur Hilfe rufen, damit er ein Seil wirft", "next": "c3_tdi_13", "karma": 3 },
            { "text": "Gwen die Augen zuhalten und im Schlamm nach einem Hebel suchen", "next": "c3_tdi_14", "karma": 5 }
        ]
    },

    "c3_tdi_6": {
        "text": "Das mutierte Riesen-Wildschwein bricht plötzlich schnaubend durch das Dickicht und schleudert Duncan direkt in ein Dornengebüsch! Heather nutzt die Panik, klettert auf einen Felsen und lacht hysterisch. 'Die Immunität gehört mir, ihr Verlierer!'",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_heather.png",
        "choices": [
            { "text": "Das Multitool nutzen, um die Scheinwerferkabel kurzzuschließen und Heather zu blenden", "next": "c3_tdi_26", "required_item": "tdi_multitool" },
            { "text": "Gwen und Duncan zusammentrommeln und das Schwein frontal jagen", "next": "c3_tdi_13", "karma": -4 }
        ]
    },

    "c3_tdi_7": {
        "text": "Euer unüberlegter Stoß rammt den Baumstamm zur Seite, doch er reißt die Absperrung zum giftigen Biber-Teich ein! Stinkendes, grünes Wasser flutet den Pfad und blockiert die Sicht. Owen verwechselt im Chaos ein Gebüsch mit Heathers Versteck und stürzt sich wild hinein.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_leshawna.png",
        "choices": [
            { "text": "Auf Owens Rücken springen und versuchen ihn zu lenken", "next": "c3_tdi_15", "karma": -2 },
            { "text": "Die goldene Statue trotz des giftigen Wassers suchen", "next": "c3_tdi_13", "karma": 4 }
        ]
    },

    "c3_tdi_8": {
        "text": "Heather und das Wildschwein rasen direkt auf die offizielle Marshmallow-Lichtung zu! Chris McLean wartet dort bereits mit der Schale voller süßer Belohnungen auf den Gewinner der Challenge. Gwen läuft keuchend an vorderster Front: 'Wir lassen Heather nicht gewinnen!'",
        "background": "./game_images/background_tdi_campfire.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "Das Scheinwerfer-Terminal mit dem Multitool manipulieren", "next": "c3_tdi_30", "required_item": "tdi_multitool" },
            { "text": "Heather mit der präzise platzierten Bärenfalle stoppen", "next": "c3_tdi_30", "required_item": "tdi_bear_trap" }
        ]
    },

    "c3_tdi_11": {
        "text": "Chef Hatchet wirft eine Ladung seines ekligen Fraßes direkt vor das Wildschwein! Die Kreatur stoppt entsetzt, riecht an dem Schleim und flüchtet quiekend vor Ekel tief in den Wald. Die Küche ist gerettet, aber Chef Hatchets Herd explodiert plötzlich mit einer riesigen Rauchwolke.",
        "background": "./game_images/background_tdi_kitchen.png",
        "choices": [
            { "text": "Das Feuer mit Owens gigantischem Atem auspusten", "next": "c3_tdi_28", "karma": 4 },
            { "text": "Die brennende Küche ignorieren und Heather die Statue klauen", "next": "c3_tdi_27", "karma": -5 }
        ]
    },

    "c3_tdi_12": {
        "text": "Ihr erreicht Heathers leeres Zelt, doch Chris' gemeine Praktikanten haben überall Stolperdrähte und Farbkanonen installiert. Gwen ballt die Fäuste, während Heathers spöttisches Lachen über die Lautsprecher des Camps dröhnt.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "Die Fallen der Praktikanten mit dem geheimen Lageplan umgehen", "next": "c3_tdi_26", "required_item": "tdi_camp_map" },
            { "text": "Ignorieren und blind durch das Zeltlager stürmen", "next": "c3_tdi_13", "karma": -4 }
        ]
    },

    "c3_tdi_13": {
        "text": "Die Challenge gerät völlig außer Kontrolle! Euer Team tappt mitten in eine Schlammfalle, Heather schnappt sich grinsend die Immunität, und Owen verliert seine gesamten Vorräte an Waschbären. Ihr steht komplett ohne Punkte da, doch plötzlich bricht Leshawna mit einem lauten Kampfschrei durch das Gebüsch, um euch rauszuhauen!",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_leshawna.png",
        "choices": [
            { "text": "Leshawnas wütenden Gegenangriff unterstützen", "next": "c3_tdi_28", "karma": 3 },
            { "text": "Die Verwirrung nutzen, um Heather heimlich die Statue zu stibitzen", "next": "c3_tdi_27", "karma": -1 }
        ]
    },

    "c3_tdi_14": {
        "text": "Gwen behält die Nerven und findet einen versteckten Sicherungskasten. Sie reißt die Klappe auf und offenbart das komplizierte Kabelsystem des Camps. Trent leuchtet ihr begeistert mit einem Streichholz.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "Das Kabelsystem mit dem Multitool manipulieren", "next": "c3_tdi_30", "required_item": "tdi_multitool" },
            { "text": "Die Kabel mit Duncans Taschenmesser blind durchtrennen", "next": "c3_tdi_27", "karma": -3 }
        ]
    },

    "c3_tdi_15": {
        "text": "Mithilfe des Lageplans findet ihr Heathers geheimes Versteck: Ein hohler Baumstumpf direkt hinter dem Plumpsklo! Doch Owen bewacht den Pfad unabsichtlich, weil er einen riesigen Bären für einen verkleideten Chris hält.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_leshawna.png",
        "choices": [
            { "text": "Den Bären auf Heathers Versteck lenken unter Nutzung des Lageplans", "next": "c3_tdi_30", "required_item": "tdi_camp_map" },
            { "text": "Owen die Statue mit roher Gewalt entreißen", "next": "c3_tdi_13", "karma": 2 }
        ]
    },

    "c3_tdi_22": {
        "text": "Du bringst die Bärenfalle zu Gwen. Als sie das schwere Eisenteil auf dem engen Wildschweinfad platziert, entsteht eine perfekte Barriere! Das Riesen-Schwein rennt direkt hinein, jault laut auf und gibt den Weg zur Lichtung frei.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "An dem gefangenen Schwein vorbeisprinten", "next": "c3_tdi_30", "karma": 5 },
            { "text": "Heather die Falle als Drohung zeigen", "next": "c3_tdi_13", "karma": -1 }
        ]
    },

    "c3_tdi_26": {
        "text": "Durch den cleveren Einsatz deiner Gegenstände bricht Heathers fieser Vorsprung zusammen. Die Praktikanten-Fallen gehen nach hinten los, Heather rutscht tollpatschig auf nassem Laub aus und die goldene Statue fliegt im hohen Bogen durch die Luft.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_heather.png",
        "choices": [
            { "text": "Die fliegende Statue fangen und ins Ziel rennen", "next": "c3_tdi_30" },
            { "text": "Heather im Schlamm liegen lassen", "next": "c3_tdi_27", "karma": 2 }
        ]
    },

    "c3_tdi_27": {
        "text": "Die Challenge endet in einer absoluten Katastrophe! Heathers Sabotage-Akt bringt die hölzerne Aussichtsplattform zum Einsturz. Chris lacht hysterisch und bricht die Challenge ab. Niemand bekommt Immunität, das Camp ist völlig demoliert, und alle schlafen völlig verdreckt und wütend in ihren Hütten.",
        "background": "./game_images/background_tdi_campfire.png",
        "choices": [
            { "text": "Ende", "next": "end" }
        ]
    },

    "c3_tdi_28": {
        "text": "Gwen koppelt ihre Kräfte mit Leshawna und Duncan. Gemeinsam starten die drei Außenseiter einen koordinierten Sturmlauf durch das Dickicht, hängen die Praktikanten ab und jagen Heather bis ans Limit.",
        "background": "./game_images/background_tdi_forest.png",
        "character": "./game_images/character_tdi_gwen.png",
        "choices": [
            { "text": "Den finalen Sprint gegen Heather gewinnen", "next": "c3_tdi_30" }
        ]
    },

    "c3_tdi_30": {
        "text": "Mit einem genialen Finale gewinnt das Team die Challenge! Getragen von Gwens Biss, Duncans Taktik und dem präzisen Einsatz des Wawanakwa-Multitools schnappt ihr Heather die goldene Chris-Statue haarscharf vor der Nase weg. Chris McLean klatscht begeistert in die Hände: 'Ein episches Drama! Genau das wollen die Einschaltquoten sehen!' Heather kocht vor Wut, während Owen jubelnd die gesamte Schale voller Marshmallows verschlingt. Gwen lächelt dich dankbar an, während Duncan dir anerkennend auf die Schulter klopft: 'Gute Arbeit, Kumpel. Heute fliegt keiner von uns nach Hause!'",
        "background": "./game_images/background_tdi_campfire.png",
        "choices": [
            { "text": "Ende", "next": "end" }
        ]
    },

    "ending_good": {
        "text": "Phaenomenal! Dein hohes Karma hat die Portale stabilisiert. Die Dimensionen harmonieren wieder miteinander und das Cartoon-Universum erstrahlt in sicherem, goldenem Glanz. Du bist ein wahrer Weltenwaechter!",
        "background": "./game_images/ending_good_bg.png",
        "choices": [
            { "text": "Spiel neustarten", "next": "execute_reset" }
        ]
    },
    "ending_neutral": {
        "text": "Gute Arbeit. Die Welten kollidieren nicht mehr, aber die Portale bleiben instabil. Es herrscht ein bruechiger Frieden im Cartoon-Universum, der staendige Wachsamkeit erfordert.",
        "background": "./game_images/ending_neutral_bg.png",
        "choices": [
            { "text": "Spiel neustarten", "next": "execute_reset" }
        ]
    },
    "ending_evil": {
        "text": "Das pure Chaos! Deine skrupellosen Entscheidungen haben den Nexus korrumpiert. Die Boesewichte haben die Macht uebernommen, Realitaeten zerfallen und das Cartoon-Universum versinkt in ewiger Dunkelheit.",
        "background": "./game_images/ending_evil_bg.png",
        "choices": [
            { "text": "Es noch einmal versuchen", "next": "execute_reset" }
        ]
    },
    "ending_chaos": {
        "text": "Das absolute Chaos! Deine Entscheidungen haben die Portale völlig destabilisiert. Die Dimensionen kollidieren unkontrollierbar, Charaktere und Orte vermischen sich zu einem surrealen Alptraum. Das Cartoon-Universum ist in einem endlosen Strudel aus Wahnsinn gefangen.",
        "background": "./game_images/ending_chaos_bg.png",
        "choices": [
            { "text": "Anderen Pfad waehlen", "next": "execute_reset" }
        ]
    }
};