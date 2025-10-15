

// Hämta knappen
const button = document.getElementById("showMessageBtn");

// Lösenord
const correctPassword = "hej";

// Lägg till en händelse
button.addEventListener("click", () => {

    // Fråga efter lösenord
    const userInput = prompt("Ange lösenord för att visa meddelandet:");

    if (userInput === correctPassword) {
        console.log("Rätt lösenord");

        // Ändra texten i meddelandet
        const message = document.getElementById("message");
        message.textContent = "Yay! Här är ditt meddelande:";

        // Lägg till nytt element
        const section = document.getElementById("section");
        const newElement = document.createElement("p");
        newElement.textContent = "Du har låst upp det hemliga meddelandet! 🎉";
        section.appendChild(newElement);
    } else {
        alert("Fel lösenord! Prova hej.");
    }
});

