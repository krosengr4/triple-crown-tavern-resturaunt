import { CONTACTS } from "../data/contacts.js";
import { createTitle } from "../dom.js";

export function loadContactPage() {
    const page = document.createElement("div");
    page.id = "content";

    const title = createTitle("Contact Us");
    const content = createContactCards();

    page.appendChild(title);
    page.appendChild(content);

    return page;
}

function createContactCards() {
    const cardsDiv = document.createElement("div");
    cardsDiv.id = "nameContent";

    const leftCards = document.createElement("div");
    leftCards.id = "leftNames";
    const rightCards = document.createElement("div");
    rightCards.id = "rightNames";

    for (let i = 0; i < CONTACTS.length; i++) {
        const contactCard = document.createElement("div");
        contactCard.id = "nameCard";

        const name = document.createElement("h2");
        name.id = "name";
        name.textContent = `${CONTACTS[i].name}`;

        const title = document.createElement("p");
        title.id = "info";
        title.classList = "contactTitle";
        title.textContent = `${CONTACTS[i].title}`;

        const phone = document.createElement("p");
        phone.id = "info";
        phone.textContent = `${CONTACTS[i].phone}`;

        const email = document.createElement("p");
        email.id = "info";
        email.textContent = `${CONTACTS[i].email}`;

        //adgfsdafg
        contactCard.appendChild(name);
        contactCard.appendChild(title);
        contactCard.appendChild(phone);
        contactCard.appendChild(email);

        if (i % 2 === 0) {
            leftCards.appendChild(contactCard);
        } else {
            rightCards.appendChild(contactCard);
        }
    }

    cardsDiv.appendChild(leftCards);
    cardsDiv.appendChild(rightCards);
    return cardsDiv;
}
