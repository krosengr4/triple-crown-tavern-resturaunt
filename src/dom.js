export function createTitle(text) {
    const titleDiv = document.createElement("div");
    titleDiv.id = "pageTitle";

    const titleHeader = document.createElement("h1");
    titleHeader.id = "title";
    titleHeader.textContent = text;

    titleDiv.appendChild(titleHeader);
    return titleDiv;
}

export function createSection(headingText, children, headerId) {
    const section = document.createElement("div");

    const header = document.createElement("h2");
    header.header = headerId;
    header.className = "sectionTitle";
    header.textContent = headingText;
    section.appendChild(header);

    children.forEach((child) => section.appendChild(child));
    return section;
}
