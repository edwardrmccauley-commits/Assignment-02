/*
  Name: Edward McCauley
  Date: 09.28.2026
  CSC 372

  This file adds interactive event-saving features to the
  Campus Event Guide.
*/
function addSaveButtons() {
    let eventCards = document.querySelectorAll("#upcoming-events article");

    eventCards.forEach(function(card) {
        let saveButton = document.createElement("button");
        saveButton.textContent = "Save Event";

        card.appendChild(saveButton);
    });
}

addSaveButtons();
