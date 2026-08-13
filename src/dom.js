export function createTitle(text) {
    const titleDiv = document.createElement("div");
    titleDiv.id = "pageTitle";

    const titleHeader = document.createElement("h1");
    titleHeader.id = "title";
    titleHeader.textContent = text;

    titleDiv.appendChild(titleHeader);
    return titleDiv;
}
