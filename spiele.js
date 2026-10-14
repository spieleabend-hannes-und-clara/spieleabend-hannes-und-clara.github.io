// Persönliche Angaben. Hier Datum, Widmung und Absender anpassen.
const CONFIG = {
  paar: 'Hannes & Clara',
  datum: '',            // z. B. 'Hochzeit am 12. Juni 2027'
  bilanz: ['Hannes', 'Clara'],
  widmung: `
    <p>Liebe Clara, lieber Hannes,</p>
    <p>zu eurer Hochzeit wünschen wir euch von Herzen alles Gute.</p>
    <p>Für die vielen Spieleabende, die noch vor euch liegen, haben wir hier unsere liebsten Kartenspiele gesammelt. Mischt gut, spielt fair und lasst euch beim Lügen nicht erwischen.</p>
    <p>Und falls ihr euch einmal nicht einig seid, wer öfter gewinnt: Unten steht die Ehe-Bilanz.</p>`,
  von: '[Name] und Dion'
};

// Kartenwerte, die mehrere Spiele nutzen
const RANG = 'Ass, König, Dame, Bube, 10, 9, 8, 7';

const SPIELE = [

{
  id: 'mau-mau', name: 'Mau Mau', min: 2, max: 6, dauer: '10 bis 20 Min.', art: 'Ablegespiel', deck: '32 Karten',
  kurz: 'Der Klassiker: Karten nach Farbe oder Wert ablegen und als Erstes alle loswerden.',
  aussortieren: 'Aus einem Deck die 2 bis 6 und die Joker entfernen. Ab fünf Spielern alle 52 Karten nehmen.',
  zaehlerHinweis: 'Wer nicht gewinnt, schreibt den Wert seiner Restkarten als Minuspunkte auf (Bube 20, Ass 11, Zahlen nach Augen, König 4, Dame 3).',
  abschnitte: [
    ['Ziel', '<p>Als Erstes alle Handkarten ablegen.</p>'],
    ['Vorbereitung', '<p>Jeder bekommt 5 Karten. Der Rest liegt verdeckt als Stapel in der Mitte, die oberste Karte wird daneben offen hingelegt.</p>'],
    ['Ablauf', `<ul>
      <li>Links vom Geber geht es los, dann im Uhrzeigersinn.</li>
      <li>Wer dran ist, legt eine Karte auf den offenen Stapel. Sie muss in Farbe oder Wert zur obersten Karte passen.</li>
      <li>Wer nicht legen kann oder will, zieht eine Karte. Passt sie, darf sie sofort gelegt werden. Sonst ist der Nächste dran.</li>
      <li>Ist der Stapel leer, wird der Ablagestapel bis auf die oberste Karte gemischt und umgedreht.</li></ul>`],
    ['Sonderkarten', `<ul>
      <li><b>7:</b> Der Nächste zieht 2 Karten. Legt er selbst eine 7, muss der Folgende 4 ziehen, und so weiter.</li>
      <li><b>8:</b> Der Nächste setzt aus.</li>
      <li><b>Bube:</b> Darf auf jede Karte gelegt werden (nicht Bube auf Bube). Wer ihn legt, wünscht sich eine Farbe.</li></ul>`],
    ['Mau und Mau-Mau', '<p>Wer seine vorletzte Karte legt, sagt „Mau“. Mit der letzten Karte sagt er „Mau-Mau“. Wer das vergisst, zieht 2 Strafkarten.</p>'],
    ['Beliebte Hausregeln', `<ul>
      <li>9: Die Spielrichtung wechselt.</li>
      <li>Ass: Der Spieler ist noch einmal dran.</li>
      <li>Mit einem Buben darf man nicht ausgehen.</li></ul>`]
  ]
},

{
  id: 'skat', name: 'Skat', min: 3, max: 4, dauer: 'ab 45 Min.', art: 'Stichspiel', deck: '32 Karten',
  kurz: 'Das deutsche Kartenspiel schlechthin: einer gegen zwei, mit Reizen, Skat und viel Taktik.',
  aussortieren: 'Aus einem Deck die 2 bis 6 und die Joker entfernen. Zu viert setzt der Geber jeweils aus.',
  zaehlerHinweis: 'Nur der Alleinspieler bekommt Punkte: gewonnen plus Spielwert, verloren minus doppelter Spielwert. Die anderen tragen 0 ein.',
  abschnitte: [
    ['Ziel', '<p>Ein Spieler spielt allein gegen die beiden anderen. Er braucht mindestens 61 der 120 Augen. Bei Null-Spielen darf er dagegen keinen einzigen Stich machen.</p>'],
    ['Kartenwerte', `<table><tr><th>Karte</th><td>Ass</td><td>10</td><td>König</td><td>Dame</td><td>Bube</td><td>9, 8, 7</td></tr>
      <tr><th>Augen</th><td>11</td><td>10</td><td>4</td><td>3</td><td>2</td><td>0</td></tr></table>`],
    ['Geben', '<p>Der Geber verteilt im Uhrzeigersinn 3 Karten pro Person, legt 2 Karten verdeckt als Skat in die Mitte, dann 4 Karten pro Person, dann 3. Jeder hat 10 Karten. Links vom Geber sitzt Vorhand, dann Mittelhand, dann Hinterhand.</p>'],
    ['Trumpf und Reihenfolge', `<ul>
      <li><b>Farbspiel</b> (Kreuz, Pik, Herz oder Karo ist Trumpf): Die vier Buben sind die höchsten Trümpfe, in der Reihenfolge Kreuz-Bube, Pik-Bube, Herz-Bube, Karo-Bube. Dann folgen Ass, 10, König, Dame, 9, 8, 7 der Trumpffarbe.</li>
      <li><b>Grand:</b> Nur die vier Buben sind Trumpf.</li>
      <li>In den übrigen Farben gilt: Ass, 10, König, Dame, 9, 8, 7.</li>
      <li><b>Null:</b> Es gibt keinen Trumpf. Reihenfolge: Ass, König, Dame, Bube, 10, 9, 8, 7.</li></ul>`],
    ['Reizen', `<p>Mittelhand bietet Vorhand Werte in aufsteigender Reihenfolge an. Vorhand sagt „ja“, solange sie mitgeht, sonst „passe“. Dann reizt Hinterhand den Übriggebliebenen auf dieselbe Weise. Wer das höchste Gebot hält, wird Alleinspieler. Passen alle, wird neu gegeben.</p>
      <p class="meta">Reizwerte: 18, 20, 22, 23, 24, 27, 30, 33, 35, 36, 40, 44, 45, 46, 48, 50, 54, 55, 59, 60, 63, 66, 70, 72, 77, 80, 81, 84, 88, 90, 96, 99, 100 …</p>
      <p>Man sollte nur so hoch reizen, wie das eigene Spiel wert ist (siehe Spielwert).</p>`],
    ['Spielwert', `<p><b>Spielwert = Grundwert × (Spitzen + 1 + Zuschläge)</b></p>
      <table><tr><th>Spiel</th><td>Karo</td><td>Herz</td><td>Pik</td><td>Kreuz</td><td>Grand</td></tr>
      <tr><th>Grundwert</th><td>9</td><td>10</td><td>11</td><td>12</td><td>24</td></tr></table>
      <ul>
      <li><b>Spitzen:</b> Wie viele Trümpfe in lückenloser Folge ab dem Kreuz-Buben man hat („mit 2“) oder nicht hat („ohne 2“, wenn der Kreuz- und der Pik-Bube fehlen). Beide Fälle zählen gleich.</li>
      <li><b>Zuschläge je +1:</b> Hand (ohne Skat gespielt), Schneider (Gegner haben höchstens 30 Augen), Schneider angesagt, Schwarz (Gegner ohne Stich), Schwarz angesagt, offen gespielt.</li>
      <li><b>Null-Spiele</b> haben feste Werte: Null 23, Null Hand 35, Null ouvert 46, Null ouvert Hand 59.</li></ul>
      <p class="meta">Beispiel: Herz mit Kreuz- und Pik-Bube, ohne Herz-Bube: „mit 2, Spiel 3“, also 3 × 10 = 30.</p>`],
    ['Ablauf', `<ul>
      <li>Der Alleinspieler darf den Skat aufnehmen und zwei beliebige Karten wieder ablegen („drücken“). Spielt er Hand, bleibt der Skat liegen.</li>
      <li>Dann sagt er sein Spiel an. Vorhand spielt zum ersten Stich aus.</li>
      <li>Es herrscht Bedienpflicht: Wer die ausgespielte Farbe hat, muss sie zugeben. Buben gehören immer zum Trumpf, nicht zu ihrer Farbe. Wer nicht bedienen kann, darf trumpfen oder abwerfen.</li>
      <li>Den Stich gewinnt der höchste Trumpf, sonst die höchste Karte der ausgespielten Farbe. Wer sticht, spielt als Nächstes aus.</li>
      <li>Am Ende zählen die Augen. Der Skat gehört dem Alleinspieler.</li></ul>`],
    ['Wertung', `<ul>
      <li>Gewonnen: Der Alleinspieler bekommt den Spielwert gutgeschrieben.</li>
      <li>Verloren: Er bekommt den doppelten Spielwert abgezogen.</li>
      <li>Überreizt: Ist der Spielwert am Ende kleiner als das Gebot, ist das Spiel verloren, egal wie viele Augen er hat.</li>
      <li>Eine Liste geht meist über eine feste Zahl von Spielen, zum Beispiel 36 (12 Runden zu dritt).</li></ul>`],
    ['Varianten', '<p><b>Ramsch:</b> Passen alle, spielt jeder für sich, nur Buben sind Trumpf. Wer die meisten Augen hat, bekommt sie als Minuspunkte.</p>']
  ]
},

{
  id: 'pik-ist-trumpf', name: 'Pik ist Trumpf', min: 4, max: 4, dauer: '45 bis 60 Min.', art: 'Stichspiel', deck: '52 Karten',
  kurz: 'Zwei Teams sagen an, wie viele Stiche sie holen, und müssen genau das schaffen. Pik sticht immer.',
  aussortieren: 'Ein ganzes Deck mit 52 Karten, ohne Joker.',
  zaehlerHinweis: 'Zwei Spalten anlegen, eine pro Team. Ansage erfüllt: 10 × Ansage plus 1 je Überstich. Verfehlt: minus 10 × Ansage.',
  abschnitte: [
    ['Ziel', '<p>Zwei Teams spielen gegeneinander, die Partner sitzen sich gegenüber. Das erste Team mit 500 Punkten gewinnt.</p>'],
    ['Vorbereitung', `<p>Alle 52 Karten werden verteilt, jeder hat 13. Reihenfolge in jeder Farbe: Ass, König, Dame, Bube, 10 bis 2. Pik ist immer Trumpf.</p>`],
    ['Ansagen', `<p>Reihum, links vom Geber beginnend, sagt jeder, wie viele Stiche er holen will. Die Ansagen beider Partner werden zur Ansage des Teams addiert.</p>
      <p>Wer sich sehr sicher ist, kann <b>Null</b> ansagen: Er will keinen einzigen Stich machen. Sein Partner spielt dann allein für seine eigene Ansage.</p>`],
    ['Ablauf', `<ul>
      <li>Links vom Geber spielt zum ersten Stich aus.</li>
      <li>Bedienpflicht: Wer die Farbe hat, muss sie zugeben. Wer sie nicht hat, darf mit Pik stechen oder eine andere Karte abwerfen.</li>
      <li>Den Stich gewinnt das höchste Pik, sonst die höchste Karte der ausgespielten Farbe. Wer sticht, spielt aus.</li>
      <li>Pik darf erst ausgespielt werden, wenn schon einmal mit Pik gestochen wurde. Ausnahme: Man hat nur noch Pik.</li></ul>`],
    ['Wertung', `<ul>
      <li>Ansage geschafft: 10 Punkte je angesagtem Stich, plus 1 Punkt je Stich darüber.</li>
      <li>Ansage verfehlt: 10 Punkte je angesagtem Stich werden abgezogen.</li>
      <li>Überstiche werden gesammelt. Sind es 10, verliert das Team 100 Punkte.</li>
      <li>Null geschafft: plus 100. Null verfehlt: minus 100. Die Stiche des Null-Spielers zählen nicht für die Ansage seines Partners.</li></ul>`],
    ['Variante', '<p><b>Blinde Null:</b> Bevor man seine Karten ansieht, Null ansagen. Zählt 200 Punkte, plus oder minus.</p>']
  ]
},

{
  id: 'durak', name: 'Durak', min: 2, max: 6, dauer: '15 bis 30 Min.', art: 'Angriffsspiel', deck: '36 Karten',
  kurz: 'Das russische Kultspiel: angreifen, verteidigen, nachlegen. Wer am Ende Karten hat, ist der Durak, der Dummkopf.',
  aussortieren: 'Aus einem Deck die 2 bis 5 und die Joker entfernen. Es bleiben 6 bis Ass.',
  zaehler: false,
  abschnitte: [
    ['Ziel', '<p>Seine Karten loswerden. Es gibt keinen Gewinner, nur einen Verlierer: Wer als Letzter noch Karten hat, ist der Durak.</p>'],
    ['Vorbereitung', `<p>Jeder bekommt 6 Karten. Die nächste Karte wird offen aufgedeckt, ihre Farbe ist Trumpf. Sie kommt quer unter den Stapel und wird als letzte gezogen.</p>
      <p>Reihenfolge: Ass, König, Dame, Bube, 10, 9, 8, 7, 6. Jeder Trumpf schlägt jede andere Karte.</p>`],
    ['Angriff und Verteidigung', `<ul>
      <li>Wer den niedrigsten Trumpf hat, greift zuerst an. Angegriffen wird immer der linke Nachbar.</li>
      <li>Der Angreifer legt eine Karte offen vor den Verteidiger.</li>
      <li>Der Verteidiger schlägt sie mit einer höheren Karte derselben Farbe oder mit einem Trumpf. Einen Trumpf schlägt nur ein höherer Trumpf.</li>
      <li>Danach dürfen der Angreifer und dann auch die anderen Mitspieler weitere Karten nachlegen. Erlaubt sind nur Werte, die schon auf dem Tisch liegen. Jede neue Karte muss der Verteidiger wieder schlagen.</li>
      <li>Ein Angriff hat höchstens 6 Karten und nie mehr, als der Verteidiger auf der Hand hat.</li></ul>`],
    ['Ende eines Angriffs', `<ul>
      <li><b>Abgewehrt:</b> Alle Karten auf dem Tisch kommen aus dem Spiel. Der Verteidiger greift als Nächstes seinen linken Nachbarn an.</li>
      <li><b>Nicht abgewehrt:</b> Der Verteidiger nimmt alle Karten vom Tisch auf. Er darf nicht angreifen, sein linker Nachbar greift als Nächstes an.</li>
      <li>Danach füllen alle wieder auf 6 Karten auf, zuerst der Angreifer, der Verteidiger zuletzt.</li></ul>`],
    ['Spielende', '<p>Ist der Stapel leer, wird nicht mehr nachgezogen. Wer keine Karten mehr hat, ist raus. Wer am Ende als Einziger Karten hält, ist der Durak und gibt das nächste Spiel.</p>'],
    ['Variante', '<p><b>Schieben:</b> Statt zu schlagen, legt der Verteidiger eine Karte mit demselben Wert dazu. Damit gibt er den ganzen Angriff an seinen linken Nachbarn weiter.</p>']
  ]
},

{
  id: 'arschloch', name: 'Arschloch', min: 4, max: 8, dauer: 'ab 30 Min.', art: 'Ablegespiel', deck: '32 oder 52 Karten',
  kurz: 'Karten schneller loswerden als die anderen. Wer zuletzt übrig bleibt, muss in der nächsten Runde seine besten Karten abgeben.',
  aussortieren: 'Bis fünf Spieler: 2 bis 6 entfernen (32 Karten). Ab sechs Spielern alle 52 Karten nehmen. Ohne Joker.',
  zaehler: false,
  abschnitte: [
    ['Ziel', '<p>Als Erstes alle Karten loswerden und Präsident werden. Wer übrig bleibt, ist das Arschloch.</p>'],
    ['Vorbereitung', '<p>Alle Karten werden verteilt. Es zählt nur der Wert, nicht die Farbe. Das Ass ist die höchste Karte, die kleinste Zahl die niedrigste.</p>'],
    ['Ablauf', `<ul>
      <li>Der Startspieler legt eine Karte oder mehrere gleiche Karten offen in die Mitte, zum Beispiel ein Paar Neunen.</li>
      <li>Reihum muss jeder dieselbe Anzahl Karten mit höherem Wert legen, also etwa ein Paar Zehnen. Wer nicht kann oder will, passt.</li>
      <li>Passen alle anderen, kommt der Stapel weg. Wer zuletzt gelegt hat, eröffnet neu mit beliebiger Anzahl.</li>
      <li>Wer passt, darf in der nächsten Runde um den Tisch wieder einsteigen.</li></ul>`],
    ['Ränge', '<p>Wer zuerst keine Karten mehr hat, ist Präsident, der Zweite Vize-Präsident. Der Vorletzte ist Vize-Arschloch, der Letzte das Arschloch. Alle anderen sind Bürger.</p>'],
    ['Nächste Runde', `<ul>
      <li>Das Arschloch mischt, gibt und beginnt.</li>
      <li>Nach dem Geben gibt das Arschloch seine zwei besten Karten an den Präsidenten. Der Präsident gibt ihm zwei beliebige zurück.</li>
      <li>Vize-Arschloch und Vize-Präsident tauschen genauso eine Karte.</li></ul>`],
    ['Beliebte Hausregeln', `<ul>
      <li>Wer genau denselben Wert wie sein Vorgänger legt, lässt den Nächsten aussetzen.</li>
      <li>Wer passt, ist für diesen Stapel raus.</li>
      <li>Die 2 ist die höchste Karte.</li></ul>`]
  ]
},

{
  id: 'luegen', name: 'Lügen', min: 3, max: 8, dauer: '15 bis 30 Min.', art: 'Bluffspiel', deck: '52 Karten',
  kurz: 'Karten verdeckt ablegen und behaupten, was sie sind. Wer beim Lügen erwischt wird, nimmt den Stapel.',
  aussortieren: 'Ein ganzes Deck mit 52 Karten. Ab sieben Spielern zwei Decks mischen.',
  zaehler: false,
  abschnitte: [
    ['Ziel', '<p>Als Erstes alle Karten loswerden, egal ob ehrlich oder nicht.</p>'],
    ['Vorbereitung', '<p>Alle Karten werden verteilt. Wer vier gleiche Karten hat, legt sie offen ab, sie sind aus dem Spiel. Das gilt das ganze Spiel über.</p>'],
    ['Ablauf', `<ul>
      <li>Links vom Geber geht es los. Der Spieler legt 1 bis 4 Karten verdeckt in die Mitte und sagt an, was es ist, zum Beispiel „zwei Damen“.</li>
      <li>Reihum legt jeder 1 bis 4 Karten verdeckt dazu und behauptet, es seien wieder Damen. Das darf stimmen oder gelogen sein.</li>
      <li>Wer nicht legen will, passt. Passen alle, kommt der Stapel aus dem Spiel und der letzte Leger eröffnet mit einem neuen Wert.</li></ul>`],
    ['Lüge!', `<p>Bevor der Nächste legt, darf jeder „Lüge!“ rufen. Dann werden die zuletzt gelegten Karten aufgedeckt.</p>
      <ul><li>War es gelogen, nimmt der Lügner den ganzen Stapel.</li>
      <li>War es die Wahrheit, nimmt der Zweifler den ganzen Stapel.</li>
      <li>Wer den Stapel nicht nehmen musste, eröffnet neu mit einem Wert seiner Wahl.</li></ul>`],
    ['Spielende', '<p>Wer seine letzte Karte gelegt hat und nicht erfolgreich angezweifelt wird, gewinnt.</p>'],
    ['Variante', '<p>Die Werte steigen der Reihe nach: Der Erste legt Asse, der Nächste Zweien, dann Dreien und so weiter. So muss jeder irgendwann lügen.</p>']
  ]
}

];
