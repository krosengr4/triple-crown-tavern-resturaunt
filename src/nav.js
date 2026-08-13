export function renderNav(routes, navContainer, contentContainer) {
    routes.forEach((route) => {
        const btn = document.createElement("button");
        btn.className = "navBtn";
        btn.textContent = route.label;
        btn.addEventListener("click", () => {
            contentContainer.replaceChildren(route.render);
        });

        navContainer.appendChild(btn);
    });

    contentContainer.replaceChildren(routes[0].render());
}
