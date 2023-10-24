const possible_squares = [
    "top-left", "top-middle", "top-right",
    "middle-left", "middle", "middle-right",
    "bottom-left", "bottom-middle", "bottom-right"
];

function moveViewTo(game_container, square) {
    possible_squares.forEach((square) => game_container.classList.remove(square));
    game_container.classList.add(square);
}

function resetView(game_container){
    possible_squares.forEach((square) => game_container.classList.remove(square));
}

document.addEventListener("DOMContentLoaded", () => {
    const game_container = document.getElementsByClassName('game-container')[0];
});