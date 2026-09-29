/*
  Name: Edward McCauley
  Date: 09.28.2026
  CSC 372

  This file adds interactive event-saving features to the
  Campus Event Guide.
*/
/**
 * Adds a Save Event button to each upcoming event card.
 */
function addSaveButtons() {
    let eventCards = document.querySelectorAll("#upcoming-events article");

    eventCards.forEach(function(card) {
        let saveButton = document.createElement("button");
    saveButton.textContent = "Save Event";

    saveButton.addEventListener("click", function() {
            if (card.classList.contains("saved-event")) {
                card.classList.remove("saved-event");
                saveButton.textContent = "Save Event";
            } else {
                card.classList.add("saved-event");
                saveButton.textContent = "Remove Event";
            }
            updateSavedEvents();
        });

        card.appendChild(saveButton);
    });
}
/**
 * Creates the Saved Events section at the bottom of the page.
 */
function createSavedEventsSection() {
    let main = document.querySelector("main");

    let savedSection = document.createElement("section");
    savedSection.id = "saved-events";

    let heading = document.createElement("h2");
    heading.textContent = "Saved Events";

    let emptyMessage = document.createElement("p");
    emptyMessage.id = "no-saved-events";
    emptyMessage.textContent = "No events have been saved yet.";

    savedSection.appendChild(heading);
    savedSection.appendChild(emptyMessage);

    main.appendChild(savedSection);
}
/**
 * Updates the Saved Events section with the currently saved events.
 */
function updateSavedEvents() {
    let savedSection = document.querySelector("#saved-events");
    let oldList = document.querySelector("#saved-events-list");
    let emptyMessage = document.querySelector("#no-saved-events");

    if (oldList) {
        oldList.remove();
    }

    let savedCards = document.querySelectorAll(".saved-event");

    if (savedCards.length === 0) {
        emptyMessage.style.display = "block";
        return;
    }

    emptyMessage.style.display = "none";

    let savedList = document.createElement("ul");
    savedList.id = "saved-events-list";

    savedCards.forEach(function(card) {
        let eventName = card.querySelector("h3").textContent;
        let eventTime = card.querySelector("time").textContent;
        let paragraphs = card.querySelectorAll("p");
        let location = paragraphs[1].textContent;

        let listItem = document.createElement("li");
        listItem.textContent =
            eventName + " - " + eventTime + " - " + location;

        savedList.appendChild(listItem);
    });

    savedSection.appendChild(savedList);
}
createSavedEventsSection();
addSaveButtons();

