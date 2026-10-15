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
  anleitung: `
    <p>Hier findet ihr 16 Kartenspiele, die ihr alle mit den Karten aus der Box spielen könnt. Bei jedem Spiel steht oben, welche Karten ihr braucht und welche ihr vorher aussortiert. Zurück auf diese Seite kommt ihr jederzeit, indem ihr euer Handy an die Box haltet.</p>
    <ul>
      <li><b>Wie viele spielen mit?</b> Tippt die Spielerzahl an, dann seht ihr nur die Spiele, die dazu passen.</li>
      <li><b>Was spielen wir heute?</b> Wenn ihr euch nicht entscheiden könnt, entscheidet der Knopf für euch.</li>
      <li><b>Eure Hausregeln:</b> Unter jeder Anleitung ist Platz für eigene Regeln. Jede Familie spielt Mau Mau ein bisschen anders, also schreibt auf, wie ihr es macht.</li>
      <li><b>Punktezähler:</b> Namen in Sitzreihenfolge eintragen, sowie nach jeder Runde die Punkte. Der Zähler rechnet mit und zeigt, wer führt und wer als Nächstes gibt.</li>
      <li><b>Ehe-Bilanz:</b> Nach jedem Spiel tragt ihr ein, wer gewonnen hat. Über die Jahre kommt da einiges zusammen.</li>
      <li><b>Sicherung:</b> Spielstand und Hausregeln liegen auf dem Handy, mit dem ihr zählt. Bei einem neuen Handy nehmt ihr sie über die Sicherung mit.</li>
    </ul>
    <p>Solange eine Anleitung oder der Zähler offen ist, bleibt der Bildschirm an. Wenn ihr die Seite auf den Startbildschirm legt, funktioniert sie auch ohne Internet, zum Beispiel im Urlaub. Wie das geht, steht ganz unten.</p>
    <p>Viel Spaß beim Spielen!</p>`,
  von: 'Juli und Dion'
};


const SPIELE = [

{
  id: 'mau-mau', name: 'Mau Mau', min: 2, max: 6, dauer: '10 bis 20 Min.', art: 'Ablegespiel', deck: '32 Karten',
  kurz: 'Der Klassiker: Karten nach Farbe oder Wert ablegen und als Erstes alle loswerden.',
  aussortieren: 'Aus einem Deck die 2 bis 6 und die Joker entfernen. Ab fünf Spielern alle 52 Karten nehmen.',
  zaehlerHinweis: 'Wer nicht gewinnt, trägt den Wert seiner Restkarten ein (Bube 20, Ass 11, Zahlen nach Augen, König 4, Dame 3). Die niedrigste Summe gewinnt.',
  wenigerGewinnt: true,
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
      <li>Die letzte Karte darf kein Bube sein.</li></ul>`]
  ]
},

{
  id: 'skat', name: 'Skat', min: 3, max: 3, dauer: 'ab 45 Min.', art: 'Stichspiel', deck: '32 Karten',
  kurz: 'Das deutsche Kartenspiel schlechthin: einer gegen zwei, mit Reizen, Skat und viel Taktik.',
  aussortieren: 'Aus einem Deck die 2 bis 6 und die Joker entfernen.',
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
  id: 'spades', name: 'Spades', min: 4, max: 4, dauer: '45 bis 60 Min.', art: 'Stichspiel', deck: '52 Karten',
  kurz: 'Der amerikanische Klassiker für zwei Teams: ansagen, wie viele Stiche man holt, und genau das schaffen. Pik sticht immer.',
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
  zaehlerHinweis: 'Wer Durak wird, bekommt 1 Punkt, alle anderen 0. Die höchste Summe zeigt, wer am häufigsten Durak war. Markiert ist, wer am seltensten Durak wurde.',
  wenigerGewinnt: true,
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
  zaehlerHinweis: 'Pro Runde Punkte nach Rang eintragen, zum Beispiel Präsident 2, Vize-Präsident 1, Bürger 0, Vize-Arschloch −1, Arschloch −2.',
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
      <li>Vize-Arschloch und Vize-Präsident tauschen genauso, aber nur eine Karte.</li></ul>`],
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
  zaehlerHinweis: 'Wer gewinnt, bekommt 1 Punkt. Die höchste Summe gewinnt den Abend.',
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
},

{
  id: 'doppelkopf', name: 'Doppelkopf', min: 4, max: 4, dauer: 'ab 60 Min.', art: 'Stichspiel', deck: '48 Karten (2 Decks)',
  kurz: 'Zwei gegen zwei, aber wer zusammenspielt, ist anfangs geheim. Die beiden Kreuz-Damen verraten es.',
  aussortieren: 'Aus zwei Decks jeweils die 2 bis 8 und die Joker entfernen. Jede Karte von 9 bis Ass gibt es dann doppelt.',
  zaehlerHinweis: 'Jeder Spieler bekommt die Spielpunkte als Plus (Gewinner) oder Minus (Verlierer). Bei einem Solo zählt der Solist dreifach.',
  abschnitte: [
    ['Ziel', '<p>Die Spieler mit den beiden Kreuz-Damen bilden die Partei „Re“, die anderen beiden „Kontra“. Wer zu wem gehört, zeigt sich erst im Spiel. Re braucht 121 der 240 Augen, Kontra gewinnt schon mit 120.</p>'],
    ['Kartenwerte', `<table><tr><th>Karte</th><td>Ass</td><td>10</td><td>König</td><td>Dame</td><td>Bube</td><td>9</td></tr>
      <tr><th>Augen</th><td>11</td><td>10</td><td>4</td><td>3</td><td>2</td><td>0</td></tr></table>`],
    ['Trumpf', `<p>Von hoch nach niedrig, jede Karte gibt es zweimal:</p>
      <ol><li>Herz-10 („Dulle“)</li><li>Damen: Kreuz, Pik, Herz, Karo</li><li>Buben: Kreuz, Pik, Herz, Karo</li><li>Karo: Ass, 10, König, 9</li></ol>
      <p>Die übrigen Farben (Kreuz, Pik, Herz) heißen Fehl. Dort gilt: Ass, 10, König, 9. In Herz fehlt die 10, sie ist Trumpf. Liegen zwei gleiche Karten im Stich, gewinnt die zuerst gespielte.</p>`],
    ['Ablauf', `<ul>
      <li>Jeder bekommt 12 Karten. Links vom Geber spielt aus.</li>
      <li>Bedienpflicht: Wird Trumpf gespielt, muss man Trumpf zugeben. Wird eine Fehlfarbe gespielt, muss man diese Farbe zugeben. Wer nicht kann, darf trumpfen oder abwerfen.</li>
      <li>Wer sticht, spielt als Nächstes aus.</li></ul>`],
    ['Ansagen', `<p>Wer sich sicher ist, sagt „Re“ oder „Kontra“, bevor er seine zweite Karte spielt. Damit gibt er seine Partei preis und erhöht den Wert des Spiels. Danach kann man „keine 90“, „keine 60“, „keine 30“ oder „schwarz“ ansagen. Wer eine Ansage nicht schafft, verliert.</p>`],
    ['Wertung', `<p>Die Gewinner bekommen pro Kopf so viele Punkte, die Verlierer ebenso viele Minuspunkte:</p>
      <ul><li>Gewonnen: 1</li>
      <li>Gegner unter 90 Augen: +1, unter 60: +1, unter 30: +1, ohne Stich: +1</li>
      <li>Re oder Kontra angesagt: je +2. Jede weitere Ansage zählt +1.</li>
      <li>Kontra gewinnt („gegen die Alten“): +1</li>
      <li>Sonderpunkte: ein Stich mit mindestens 40 Augen („Doppelkopf“) +1, ein Karo-Ass der Gegner gefangen („Fuchs“) +1, der letzte Stich mit einem Kreuz-Buben („Karlchen“) +1</li></ul>`],
    ['Sonderfälle', `<ul>
      <li><b>Hochzeit:</b> Wer beide Kreuz-Damen hat, kann „Hochzeit“ ansagen. Wer von den anderen den ersten Stich macht, wird sein Partner. Ohne Ansage spielt er still allein.</li>
      <li><b>Solo:</b> Ein Spieler spielt allein gegen drei. Bei Damensolo sind nur Damen Trumpf, bei Bubensolo nur Buben, beim Fleischlosen gar nichts. Beim Farbsolo ist eine Farbe Trumpf, dazu die Damen, Buben und Herz-10.</li></ul>`]
  ]
},

{
  id: 'romme', name: 'Rommé', min: 2, max: 6, dauer: '30 bis 60 Min.', art: 'Legespiel', deck: '2 Decks mit Joker',
  kurz: 'Karten zu Sätzen und Folgen kombinieren, auslegen und als Erstes alle loswerden.',
  aussortieren: 'Zwei ganze Decks mit allen Jokern zusammenmischen.',
  zaehlerHinweis: 'Nach jeder Runde die Restkarten als Punkte eintragen. Wer nach der vereinbarten Rundenzahl die wenigsten hat, gewinnt.',
  wenigerGewinnt: true,
  abschnitte: [
    ['Ziel', '<p>Als Erstes alle Karten in Kombinationen auslegen oder ablegen.</p>'],
    ['Kombinationen', `<ul>
      <li><b>Satz:</b> 3 oder 4 Karten mit gleichem Wert in verschiedenen Farben, zum Beispiel drei Könige.</li>
      <li><b>Folge:</b> mindestens 3 aufeinanderfolgende Karten einer Farbe, zum Beispiel Herz 7, 8, 9. Das Ass darf vor der 2 oder nach dem König stehen, aber nicht dazwischen.</li>
      <li><b>Joker</b> ersetzen jede beliebige Karte.</li></ul>`],
    ['Vorbereitung', '<p>Jeder bekommt 13 Karten, der Spieler links vom Geber 14. Der Rest liegt verdeckt als Stapel bereit.</p>'],
    ['Ablauf', `<ul>
      <li>Der Spieler mit 14 Karten beginnt und legt gleich eine Karte offen ab. Danach gilt für jeden Zug:</li>
      <li>1. Eine Karte ziehen, vom Stapel oder die oberste offene Karte.</li>
      <li>2. Wer möchte, legt Kombinationen aus oder legt an fremde und eigene Kombinationen an.</li>
      <li>3. Eine Karte offen ablegen.</li></ul>`],
    ['Erstes Auslegen', `<p>Beim ersten Mal müssen die ausgelegten Kombinationen zusammen mindestens 30 Punkte wert sein. Erst danach darf man anlegen.</p>
      <p class="meta">Werte: Ass 11 (in der Folge A, 2, 3 nur 1), Bildkarten 10, Zahlen nach Augen, Joker so viel wie die ersetzte Karte.</p>
      <p>Wer schon ausgelegt hat, darf einen ausliegenden Joker gegen die passende echte Karte tauschen und ihn selbst verwenden.</p>`],
    ['Wertung', `<p>Die Runde endet, wenn jemand seine letzte Karte loswird. Die anderen zählen ihre Restkarten als Minuspunkte: Joker 20, Ass 11, Bildkarten 10, Zahlen nach Augen.</p>
      <p>Wer alle Karten auf einmal auslegt, ohne vorher etwas ausgelegt zu haben, macht „Hand-Rommé“: Die Minuspunkte der anderen verdoppeln sich.</p>`]
  ]
},

{
  id: 'gin-romme', name: 'Gin Rommé', min: 2, max: 2, dauer: '20 bis 40 Min.', art: 'Legespiel', deck: '52 Karten',
  kurz: 'Das schnelle Rommé für zwei: Hand sortieren, im richtigen Moment klopfen und den Gegner überraschen.',
  aussortieren: 'Ein ganzes Deck mit 52 Karten, ohne Joker.',
  zaehlerHinweis: 'Nach jeder Runde die Punkte des Gewinners eintragen. Wer zuerst 100 Punkte hat, gewinnt.',
  abschnitte: [
    ['Ziel', '<p>Möglichst viele Karten zu Kombinationen ordnen und die restlichen, ungebundenen Karten klein halten.</p>'],
    ['Kombinationen und Werte', `<ul>
      <li><b>Satz:</b> 3 oder 4 Karten mit gleichem Wert.</li>
      <li><b>Folge:</b> mindestens 3 aufeinanderfolgende Karten einer Farbe. Das Ass ist immer die niedrigste Karte.</li>
      <li>Werte: Bildkarten 10, Ass 1, Zahlen nach Augen.</li></ul>
      <p>Kombinationen bleiben auf der Hand, ausgelegt wird erst am Ende.</p>`],
    ['Ablauf', `<ul>
      <li>Jeder bekommt 10 Karten. Die nächste Karte wird offen hingelegt, der Rest ist der Stapel.</li>
      <li>Der Nicht-Geber beginnt. In jedem Zug zieht man eine Karte, vom Stapel oder die oberste offene Karte, und legt dann eine Karte offen ab.</li></ul>`],
    ['Klopfen', `<p>Sind die ungebundenen Karten höchstens 10 Punkte wert, darf man nach dem Ziehen klopfen. Man legt eine Karte ab und deckt seine Hand auf, geordnet nach Kombinationen.</p>
      <p>Der Gegner legt seine Kombinationen ebenfalls aus. Seine ungebundenen Karten darf er an die Kombinationen des Klopfenden anlegen, dann zählen sie nicht.</p>
      <p>Hat man gar keine ungebundenen Karten, ist das ein <b>Gin</b>. Dann darf der Gegner nichts anlegen.</p>`],
    ['Wertung', `<ul>
      <li>Klopfen: Der Klopfende bekommt die Differenz der ungebundenen Karten.</li>
      <li>Hat der Gegner gleich viel oder weniger, gewinnt er die Runde: Er bekommt die Differenz plus 25.</li>
      <li>Gin: 25 plus der Wert der ungebundenen Karten des Gegners.</li>
      <li>Liegen nur noch 2 Karten im Stapel und keiner hat geklopft, zählt die Runde nicht.</li></ul>`]
  ]
},

{
  id: 'canasta', name: 'Canasta', min: 4, max: 4, dauer: '1 bis 2 Std.', art: 'Legespiel', deck: '2 Decks mit 4 Jokern',
  kurz: 'Das Teamspiel für lange Abende: gleiche Karten sammeln, Canastas bauen und den Ablagestapel erobern.',
  aussortieren: 'Zwei ganze Decks mit insgesamt 4 Jokern (108 Karten).',
  zaehlerHinweis: 'Zwei Spalten anlegen, eine pro Team. Wer zuerst 5000 Punkte erreicht, gewinnt.',
  abschnitte: [
    ['Ziel', '<p>Zwei Teams, die Partner sitzen sich gegenüber. Man legt Karten mit gleichem Wert aus und versucht, Canastas aus 7 Karten zu bilden. Wer zuerst 5000 Punkte hat, gewinnt.</p>'],
    ['Besondere Karten', `<ul>
      <li><b>Joker und 2:</b> Sie sind wild und ersetzen jede Karte.</li>
      <li><b>Rote 3:</b> Sie wird sofort offen vor sich gelegt und durch eine neue Karte ersetzt. Bringt 100 Punkte.</li>
      <li><b>Schwarze 3:</b> Wer sie ablegt, sperrt den Ablagestapel für den Nächsten. Auslegen darf man sie nur beim Ausmachen.</li></ul>
      <p class="meta">Werte: Joker 50, Ass und 2 je 20, König bis 8 je 10, 7 bis 4 und schwarze 3 je 5.</p>`],
    ['Ablauf', `<ul>
      <li>Jeder bekommt 11 Karten. Eine Karte liegt offen als Ablagestapel daneben.</li>
      <li>In jedem Zug: eine Karte vom Stapel ziehen oder den ganzen Ablagestapel nehmen, dann auslegen und zum Schluss eine Karte ablegen.</li>
      <li>Eine Meldung besteht aus mindestens 3 Karten gleichen Werts, davon mindestens 2 echte Karten und höchstens 3 wilde.</li>
      <li>Man darf an eigene Meldungen und an die des Partners anlegen.</li></ul>`],
    ['Erste Meldung', `<p>Die erste Meldung eines Teams braucht einen Mindestwert, abhängig vom bisherigen Punktestand:</p>
      <table><tr><th>Stand</th><td>unter 0</td><td>0 bis 1495</td><td>1500 bis 2995</td><td>ab 3000</td></tr>
      <tr><th>Mindestens</th><td>15</td><td>50</td><td>90</td><td>120</td></tr></table>`],
    ['Ablagestapel nehmen', `<p>Man muss die oberste Karte sofort verwenden, entweder zusammen mit zwei passenden echten Karten aus der Hand oder durch Anlegen an eine eigene Meldung. Dann bekommt man den ganzen Stapel.</p>
      <p>Liegt im Stapel eine wilde Karte oder hat das eigene Team noch nichts gemeldet, ist er eingefroren. Dann geht es nur mit zwei passenden echten Karten aus der Hand.</p>`],
    ['Ausmachen und Wertung', `<ul>
      <li>Ausmachen darf ein Team erst, wenn es mindestens ein Canasta hat. Wer ausmacht, beendet die Runde.</li>
      <li>Canasta ohne wilde Karten: 500, mit wilden Karten: 300.</li>
      <li>Ausmachen: +100, alles auf einmal aus der Hand: +200.</li>
      <li>Dazu kommen die Werte aller ausgelegten Karten. Karten, die noch auf der Hand sind, werden abgezogen.</li></ul>`]
  ]
},

{
  id: 'schwimmen', name: 'Schwimmen', min: 3, max: 9, dauer: '15 bis 30 Min.', art: 'Tauschspiel', deck: '32 Karten',
  kurz: 'Karten aus der Mitte tauschen, bis man 31 Punkte in einer Farbe hat. Wer zu wenig hat, verliert ein Leben.',
  aussortieren: 'Aus einem Deck die 2 bis 6 und die Joker entfernen. Jeder braucht dazu 3 Leben, zum Beispiel Streichhölzer oder Münzen.',
  zaehlerHinweis: 'Wer als Letzter übrig bleibt, bekommt 1 Punkt. Die Leben zählt ihr weiter mit Streichhölzern oder Münzen.',
  abschnitte: [
    ['Ziel', '<p>Möglichst viele Punkte in einer Farbe auf der Hand haben. Wer am Ende einer Runde die wenigsten hat, verliert ein Leben. Wer zuletzt übrig bleibt, gewinnt.</p>'],
    ['Werte', `<ul><li>Ass 11, Bildkarten 10, Zahlen nach Augen.</li>
      <li>Es zählen nur Karten derselben Farbe. Höchstes Blatt: 31 (Ass und zwei Bildkarten oder 10 einer Farbe).</li>
      <li>Drei Karten mit gleichem Wert zählen 30,5.</li></ul>`],
    ['Vorbereitung', '<p>Jeder bekommt 3 Karten, der Geber zwei Päckchen zu je 3 Karten. Er sieht sich eines an und entscheidet, ob er es behält. Das andere kommt offen in die Mitte.</p>'],
    ['Ablauf', `<p>Links vom Geber geht es los. Wer dran ist, macht genau eins:</p>
      <ul><li>eine Karte mit der Mitte tauschen,</li>
      <li>alle drei Karten mit der Mitte tauschen,</li>
      <li>schieben, also nichts tun. Schieben alle hintereinander, kommen die Mittelkarten weg und drei neue vom Stapel offen hin.</li>
      <li>klopfen: Jeder andere hat noch genau einen Zug, dann decken alle auf.</li></ul>
      <p>Wer 31 auf der Hand hat, deckt sofort auf. Die Runde endet.</p>`],
    ['Leben', `<ul><li>Nach dem Aufdecken verliert der Spieler mit den wenigsten Punkten ein Leben.</li>
      <li>Hat jemand 31 aufgedeckt, verlieren alle anderen ein Leben.</li>
      <li>Wer sein letztes Leben verliert, „schwimmt“ und darf noch mitspielen. Verliert er noch einmal, ist er raus.</li></ul>`],
    ['Variante', '<p><b>Feuer:</b> Drei Asse auf der Hand beenden die Runde sofort. Alle anderen verlieren ein Leben.</p>']
  ]
},

{
  id: 'speed', name: 'Speed', min: 2, max: 2, dauer: '5 Min.', art: 'Reaktionsspiel', deck: '52 Karten',
  kurz: 'Keiner wartet auf den anderen: Beide legen gleichzeitig so schnell wie möglich ab.',
  aussortieren: 'Ein ganzes Deck mit 52 Karten, ohne Joker.',
  zaehlerHinweis: 'Wer gewinnt, bekommt 1 Punkt.',
  abschnitte: [
    ['Ziel', '<p>Als Erstes alle eigenen Karten loswerden. Es gibt keine Reihenfolge, beide spielen gleichzeitig.</p>'],
    ['Vorbereitung', `<ul>
      <li>Jeder bekommt 20 Karten als verdeckten Nachziehstapel und nimmt davon 5 auf die Hand.</li>
      <li>In die Mitte kommen zwei verdeckte Ersatzstapel zu je 6 Karten und dazwischen zwei Plätze für offene Karten.</li>
      <li>Auf „Los“ dreht jeder gleichzeitig die oberste Karte eines Ersatzstapels auf einen der beiden Plätze.</li></ul>`],
    ['Ablauf', `<ul>
      <li>Man darf eine Karte auf einen der beiden offenen Stapel legen, wenn sie genau eins höher oder niedriger ist. Auf eine 8 passt also 7 oder 9.</li>
      <li>Das Ass passt an König und an 2. Die Farbe spielt keine Rolle.</li>
      <li>Man legt immer nur eine Karte auf einmal und füllt seine Hand aus dem eigenen Nachziehstapel wieder auf 5 auf.</li>
      <li>Kommen beide nicht weiter, drehen beide gleichzeitig wieder je eine Karte von den Ersatzstapeln auf.</li>
      <li>Sind die Ersatzstapel leer, werden die beiden offenen Stapel gemischt und neu als Ersatzstapel ausgelegt.</li></ul>`],
    ['Spielende', '<p>Wer keine Hand- und keine Nachziehkarten mehr hat, schlägt auf den Tisch und gewinnt.</p>']
  ]
},

{
  id: 'cribbage', name: 'Cribbage', min: 2, max: 2, dauer: '30 bis 45 Min.', art: 'Kombinationsspiel', deck: '52 Karten',
  kurz: 'Der englische Klassiker: Fünfzehner, Paare und Folgen zählen, bis einer 121 Punkte hat. Ideal für zwei.',
  aussortieren: 'Ein ganzes Deck mit 52 Karten, ohne Joker. Statt eines Cribbage-Bretts zählt der Punktezähler.',
  zaehlerHinweis: 'Punkte jeweils sofort eintragen, wenn sie entstehen. Wer zuerst 121 erreicht, gewinnt, auch mitten in der Runde.',
  abschnitte: [
    ['Ziel', '<p>Als Erstes 121 Punkte sammeln. Punkte gibt es während des Legens und beim Zählen der Hand.</p>'],
    ['Werte', '<p>Ass 1, Zahlen nach Augen, Bildkarten 10. Für Folgen gilt die Reihenfolge Ass, 2 bis 10, Bube, Dame, König.</p>'],
    ['Vorbereitung', `<ul>
      <li>Jeder bekommt 6 Karten und legt 2 davon verdeckt ab. Diese 4 Karten bilden die „Crib“, sie gehört dem Geber.</li>
      <li>Der Nicht-Geber hebt ab, der Geber deckt die oberste Karte des Stapels auf. Diese „Startkarte“ zählt später für alle Hände mit. Ist sie ein Bube, bekommt der Geber sofort 2 Punkte.</li></ul>`],
    ['Legen', `<p>Abwechselnd legt jeder eine Karte vor sich und nennt die laufende Summe beider Spieler. Die Summe darf 31 nicht überschreiten. Punkte gibt es für:</p>
      <ul><li>Summe genau 15: 2 Punkte. Summe genau 31: 2 Punkte.</li>
      <li>Gleicher Wert wie die Karte davor: Paar 2, Drilling 6, Vierling 12.</li>
      <li>Die letzten gelegten Karten bilden eine Folge (in beliebiger Reihenfolge): 1 Punkt pro Karte, ab 3 Karten.</li></ul>
      <p>Wer nicht legen kann, ohne über 31 zu kommen, sagt „Go“. Der andere legt weiter, solange er kann. Die letzte Karte bringt 1 Punkt. Dann beginnt die Summe wieder bei 0.</p>`],
    ['Zählen', `<p>Zuerst zählt der Nicht-Geber, dann der Geber seine Hand, dann der Geber die Crib. Zur Hand gehört immer die Startkarte dazu.</p>
      <ul><li>Jede Kombination mit der Summe 15: 2 Punkte</li>
      <li>Jedes Paar: 2 Punkte</li>
      <li>Jede Folge ab 3 Karten: 1 Punkt pro Karte</li>
      <li>4 Handkarten in einer Farbe: 4 Punkte, mit passender Startkarte 5. In der Crib zählt nur die volle Farbe mit 5.</li>
      <li>Bube in der Farbe der Startkarte: 1 Punkt</li></ul>
      <p class="meta">Beispiel: 5, 5, 10, König und Startkarte 5. Fünfzehner: 5+10 dreimal, 5+König dreimal, 5+5+5 einmal, ergibt 14 Punkte. Drilling: 6 Punkte. Zusammen 20.</p>`],
    ['Geben', '<p>Der Geber wechselt jede Runde.</p>']
  ]
},

{
  id: 'pik-ist-trumpf', name: 'Pik ist Trumpf', min: 3, max: 6, dauer: '45 bis 60 Min.', art: 'Stichspiel', deck: '32 oder 52 Karten',
  kurz: 'Jede Runde vorhersagen, wie viele Stiche man genau macht. Pik ist immer Trumpf.',
  aussortieren: 'Die Zahl der Karten richtet sich nach der Spielerzahl: Bei 3 oder 4 Spielern reichen 32 Karten (7 bis Ass), ab 5 Spielern alle 52. Ohne Joker.',
  zaehlerHinweis: 'Genau getroffen: 10 plus die Zahl der Stiche. Daneben: so viele Minuspunkte, wie man danebenliegt.',
  abschnitte: [
    ['Ziel', '<p>In jeder Runde genau so viele Stiche machen, wie man angesagt hat. Nicht mehr und nicht weniger.</p>'],
    ['Kartenreihenfolge', '<p>Pik ist immer Trumpf und schlägt jede andere Farbe. In jeder Farbe gilt von hoch nach niedrig: Ass, 10, König, Dame, Bube, 9, 8 und so weiter bis zur kleinsten Karte im Spiel.</p>'],
    ['Runden', '<p>In der ersten Runde bekommt jeder 1 Karte, in der zweiten 2, und so weiter, bis die Karten für eine weitere Runde nicht mehr reichen. Wer möchte, zählt danach wieder herunter bis 1.</p>'],
    ['Ansagen', '<p>Links vom Geber beginnend sagt jeder, wie viele Stiche er machen wird. Der Geber sagt zuletzt an. Er darf keine Zahl nennen, bei der die Summe aller Ansagen genau die Zahl der Stiche ergibt. So geht nie für alle die Rechnung auf.</p>'],
    ['Ablauf', `<ul>
      <li>Links vom Geber spielt aus.</li>
      <li>Bedienpflicht: Wer die ausgespielte Farbe hat, muss sie zugeben. Sonst darf man mit Pik stechen oder eine andere Karte abwerfen.</li>
      <li>Den Stich gewinnt das höchste Pik, sonst die höchste Karte der ausgespielten Farbe. Wer sticht, spielt aus.</li>
      <li>Der Geber wechselt jede Runde im Uhrzeigersinn.</li></ul>`],
    ['Wertung', `<ul>
      <li>Genau getroffen: 10 Punkte plus 1 Punkt je Stich. Wer 0 ansagt und keinen Stich macht, bekommt also 10.</li>
      <li>Daneben: 1 Punkt Abzug je Stich, um den man danebenliegt. Wer 3 ansagt und 1 Stich macht, bekommt also −2.</li></ul>`]
  ]
},

{
  id: 'poker', name: 'Poker', min: 2, max: 9, dauer: 'beliebig', art: 'Bluffspiel', deck: '52 Karten',
  kurz: 'Texas Hold’em: zwei eigene Karten, fünf gemeinsame, und die Frage, wer blufft.',
  aussortieren: 'Ein ganzes Deck mit 52 Karten, ohne Joker. Dazu Spielgeld, zum Beispiel Chips, Streichhölzer oder Gummibärchen.',
  zaehlerHinweis: 'Am Ende des Abends die Chips jedes Spielers eintragen oder pro gewonnener Partie 1 Punkt.',
  abschnitte: [
    ['Ziel', '<p>Den Einsatz in der Mitte gewinnen: mit der besten Hand am Schluss oder indem alle anderen vorher aussteigen.</p>'],
    ['Rangfolge der Hände', `<p>Gewertet werden die besten 5 Karten aus den 2 eigenen und den 5 gemeinsamen. Von hoch nach niedrig:</p>
      <ol><li>Royal Flush: Ass, König, Dame, Bube, 10 einer Farbe</li>
      <li>Straight Flush: 5 aufeinanderfolgende Karten einer Farbe</li>
      <li>Vierling: 4 gleiche Werte</li>
      <li>Full House: Drilling und Paar</li>
      <li>Flush: 5 Karten einer Farbe</li>
      <li>Straße: 5 aufeinanderfolgende Karten</li>
      <li>Drilling: 3 gleiche Werte</li>
      <li>Zwei Paare</li>
      <li>Ein Paar</li>
      <li>Höchste Karte</li></ol>`],
    ['Vorbereitung', '<p>Jeder bekommt gleich viel Spielgeld. Ein Spieler ist Geber, das wechselt jede Runde im Uhrzeigersinn. Links von ihm setzt einer den kleinen Pflichteinsatz (Small Blind, zum Beispiel 1), der Nächste den großen (Big Blind, zum Beispiel 2).</p>'],
    ['Ablauf einer Runde', `<ol>
      <li>Jeder bekommt 2 verdeckte Karten. Erste Setzrunde, links vom Big Blind beginnend.</li>
      <li><b>Flop:</b> 3 gemeinsame Karten offen in die Mitte. Setzrunde.</li>
      <li><b>Turn:</b> eine vierte Karte. Setzrunde.</li>
      <li><b>River:</b> eine fünfte Karte. Letzte Setzrunde.</li>
      <li><b>Showdown:</b> Wer noch dabei ist, deckt auf. Die beste Hand gewinnt den Pot, bei Gleichstand wird geteilt.</li></ol>`],
    ['In einer Setzrunde', `<ul>
      <li><b>Schieben (Check):</b> nichts setzen, solange noch niemand gesetzt hat.</li>
      <li><b>Setzen (Bet)</b> oder <b>Erhöhen (Raise)</b></li>
      <li><b>Mitgehen (Call):</b> den aktuellen Einsatz bezahlen.</li>
      <li><b>Aussteigen (Fold):</b> Karten weglegen, Gesetztes ist verloren.</li></ul>
      <p>Die Runde endet, wenn alle Verbliebenen gleich viel gesetzt haben.</p>`]
  ]
},

{
  id: 'siebzehn-und-vier', name: '17 und 4', min: 2, max: 7, dauer: 'beliebig', art: 'Glücksspiel', deck: '32 Karten',
  kurz: 'So nah wie möglich an 21 heran, ohne darüber zu kommen. Die deutsche Urform von Black Jack.',
  aussortieren: 'Aus einem Deck die 2 bis 6 und die Joker entfernen. Dazu Spielgeld, zum Beispiel Chips oder Gummibärchen.',
  zaehlerHinweis: 'Gewinn oder Verlust jeder Runde in Spielgeld eintragen, zum Beispiel 2 oder −2.',
  abschnitte: [
    ['Ziel', '<p>Mit seinen Karten näher an 21 Punkte kommen als die Bank, ohne 21 zu überschreiten.</p>'],
    ['Werte', '<p>Ass 11, König 4, Dame 3, Bube 2, Zahlen nach Augen. Zwei Asse zählen als 21.</p>'],
    ['Ablauf', `<ul>
      <li>Ein Spieler ist die Bank. Jeder andere setzt einen Einsatz und bekommt von der Bank eine Karte verdeckt.</li>
      <li>Jeder schaut sich seine Karte an, ohne sie den anderen zu zeigen. Die Karten bleiben bis zur Abrechnung geheim.</li>
      <li>Reihum entscheidet jeder, ob er noch eine Karte will („noch eine“) oder aufhört („genug“). Auch jede weitere Karte bekommt er verdeckt und schaut sie sich allein an. Er darf so lange nachfordern, wie er möchte.</li>
      <li>Wer über 21 kommt, deckt sofort auf und hat verloren.</li>
      <li>Wenn alle fertig sind, zieht die Bank für sich so lange, wie sie möchte.</li></ul>`],
    ['Abrechnung', `<ul>
      <li>Jetzt decken alle ihre Karten auf.</li>
      <li>Kommt die Bank über 21, zahlt sie allen, die noch im Spiel sind, ihren Einsatz.</li>
      <li>Sonst vergleicht sie mit jedem Spieler: Wer mehr hat, bekommt seinen Einsatz von der Bank. Bei Gleichstand oder weniger gewinnt die Bank.</li>
      <li>Danach wechselt die Bank reihum zum nächsten Spieler.</li></ul>`],
    ['Variante Black Jack', '<p>Mit 52 Karten: Bildkarten zählen 10, das Ass 1 oder 11. Jeder bekommt zwei Karten, die hier offen liegen, die Bank muss bis 16 ziehen und ab 17 stehen bleiben. Ein Ass und eine Karte mit Wert 10 (10, Bube, Dame, König) als erste zwei Karten sind ein Black Jack und werden 3 zu 2 ausgezahlt.</p>']
  ]
}

];
