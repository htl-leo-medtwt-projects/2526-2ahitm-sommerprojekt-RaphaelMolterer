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
            { "text": "Die Chemical-X-Probe uebergeben", "next": "ppg_24", "required_item": "ppg_sample" },
            { "text": "Dem Professor vorschlagen, das Gurkenglas zu nutzen", "next": "ppg_23", "required_item": "ppg_pickle" }
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
            { "text": "Den Rust Bucket muehsam reparieren", "next": "c3_start", "karma": 2 }
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
        "background": "./game_images/background_rs_neon_sky.png",
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
            { "text": "Kapitel 4 starten", "next": "end" }
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
            { "text": "Kapitel 4 starten", "next": "end" }
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
            { "text": "Kapitel 4 starten", "next": "end" }
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
            { "text": "Kapitel 4 starten", "next": "end" }
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
            { "text": "Kapitel 4 starten", "next": "end" }
        ]
    },
    "ending_good": {
        "text": "Phaenomenal! Dein hohes Karma hat die Portale stabilisiert. Die Dimensionen harmonieren wieder miteinander und das Cartoon-Universum erstrahlt in sicherem, goldenem Glanz. Du bist ein wahrer Weltenwaechter!",
        "background": "./images/ending_good_bg.png",
        "choices": [
            { "text": "Spiel neustarten", "next": "execute_reset" }
        ]
    },
    "ending_neutral": {
        "text": "Gute Arbeit. Die Welten kollidieren nicht mehr, aber die Portale bleiben instabil. Es herrscht ein bruechiger Frieden im Cartoon-Universum, der staendige Wachsamkeit erfordert.",
        "background": "./images/ending_neutral_bg.png",
        "choices": [
            { "text": "Spiel neustarten", "next": "execute_reset" }
        ]
    },
    "ending_evil": {
        "text": "Das pure Chaos! Deine skrupellosen Entscheidungen haben den Nexus korrumpiert. Die Boesewichte haben die Macht uebernommen, Realitaeten zerfallen und das Cartoon-Universum versinkt in ewiger Dunkelheit.",
        "background": "./images/ending_evil_bg.png",
        "choices": [
            { "text": "Es noch einmal versuchen", "next": "execute_reset" }
        ]
    },
    "ending_chaos": {
        "text": "Weder gut noch boese – deine unentschlossenen Taten haben ein unberechenbares Dimensions-Chaos ausgeloest. Die Welten sind wild miteinander verschmolzen. Ein voellig neues, verruecktes Universum ist entstanden.",
        "background": "./images/ending_chaos_bg.png",
        "choices": [
            { "text": "Anderen Pfad waehlen", "next": "execute_reset" }
        ]
    },

    "example": {
        "text": "Beispiel Dialog",
        "background": "./game_images/background.png",
        "character": "./game_images/character.png",
        "choices": [
            { "text": "Man bekommt ein Item", "next": "exampleA", "gain_item": "example_item", "karma": 1 },
            { "text": "Man braucht ein Item", "next": "exampleB", "require_item": "example_item", "karma": -1 }
        ]
    },
};