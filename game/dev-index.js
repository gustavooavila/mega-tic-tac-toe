document.addEventListener("DOMContentLoaded", () => {
    const game_container = document.getElementsByClassName('game-container')[0];
    const dev_container = document.getElementById("dev-container");

    const dev_buttons = possible_squares.reduce((acc, square) => {
        const but = document.createElement("button");
        but.innerText = square;
        but.onclick= () => moveViewTo(game_container, square);
        acc.appendChild(but);
        return acc;
    }, document.createDocumentFragment());

    reset_but = document.createElement("button");
    reset_but.innerText = "Reset Camera";
    reset_but.onclick = () => resetView(game_container);
    dev_buttons.appendChild(reset_but);

    dev_container.appendChild(dev_buttons);
});