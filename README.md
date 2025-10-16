# Assignment-1
Structure and construction of digital platforms (HTML, CSS, JavaScript connection)


Projekt med HTML, CSS & JavaScript. 
Fungerar ungefär såhär: 

Sidan laddas och visar en initial text med knapp. 
När knappen aktiveras "klickas" så hämtas en funktion som heter "button.addEventListener" som aktiveras med "click". 
Detta betydetr att när knappen aktiveras (klickas) så visas en prompt. 

Om sedan lösenordet är korrekt ifyllt (lösenordet definierades på rad 7 i koden) så triggas funktionen att visa en ny section som inte fanns tidigare. 
Alltså om lösenordet === korrekt så visas en ny sektion. 
Om lösenordet inte är korrekt (else) så visas en ny text i prompten. 


HTML, CSS & JS
Html - fungerar som sidans byggstenar, själva skelettet.
Css - Är all design, färg och form
JS - all funktionalitet. 

Initialt så kollade jag att sidan fungerade/ laddade so den skulle med en console log. 
Efter att den första informationen laddats upp på sidan, så inväntar JS att användaren klickar på knappen. När detta sker så körs den funktionen som ber om lösemnord och sedan kollar om lösenordet är korrekt eller inte. (Code flow) 
