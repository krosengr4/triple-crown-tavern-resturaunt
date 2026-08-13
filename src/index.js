import "./style.css";
import { loadHomepage } from "./pages/homepage.js";
import { loadMenupage } from "./pages/menupage.js";
import { loadContactPage } from "./pages/contactpage.js";
import { renderNav } from "./nav.js";

const contentDiv = document.querySelector("#content");
contentDiv.replaceChildren(loadHomepage());

renderNav(
    [
        { id: "homeButton", label: "Home", render: loadHomepage() },
        { id: "menuButton", label: "Menu", render: loadMenupage() },
        { id: "contactBtn", label: "Contact", render: loadContactPage() },
    ],
    document.querySelector("#navButtons"),
    document.querySelector("#content"),
);

loadHomepage();

// const homeBtn = document.querySelector("#homeButton");
// const menuBtn = document.querySelector("#menuButton");
// const contactBtn = document.querySelector("#contactButton");
//
// function loadMenu() {
//     contentDiv.replaceChildren(loadMenupage());
// }
//
// function loadContact() {
//     contentDiv.replaceChildren(loadContactPage());
// }

// homeBtn.addEventListener("click", loadHome);
// menuBtn.addEventListener("click", loadMenu);
// contactBtn.addEventListener("click", loadContact);

// contentDiv.replaceChildren(loadHomepage());
