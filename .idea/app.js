

// Hämtar knappen
const button = document.getElementById("showMessageBtn");

// Lösenord - sätter ett löswenord
const password = "hej";

// Lägg till en händelse
button.addEventListener("click", () => {

    // Fråga efter lösenord
    const userInput = prompt("Ange lösenord för att visa meddelandet:");

    if (userInput === password) {
        console.log("Rätt lösenord");

        // Ändra texten i meddelandet / första texten finns i html, men när rätt lösenord använts så
        // ändras text till nya textContent 
        const message = document.getElementById("message");
        message.textContent = "Yay! Här är ditt meddelande:";

        // Lägg till nytt element för att visa upp nya texten.
        const section = document.getElementById("section");
        const newElement = document.createElement("p");
        newElement.textContent = "Du har låst upp det hemliga meddelandet! 🎉";
        section.appendChild(newElement);

        // Om lösenordet är fel visas denna texten.
    } else {
        alert("Fel lösenord! Prova hej.");
    }
});

