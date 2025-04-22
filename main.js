const pokemon_name = document.getElementById("name-pokemon");
const pokemon_url = document.getElementById("url-pokemon");
const add_pokemon = document.getElementById("add-pokemon");
const pokemon_card = document.getElementsByClassName("card");

add_pokemon.addEventListener("click", (e) => {
    e.preventDefault();
    if (pokemon_name.value === "" || pokemon_url.value === "") {
        alert("El nombre y la URL del guerrero son obligatorios");
        return;
    }
    let pokemon = document.createElement("div");
    pokemon.classList.add("card");
    pokemon.style.display = "inline-block";
    pokemon.innerHTML = `
        <img src="${pokemon_url.value}" alt="guerrero">
        <p>${pokemon_name.value}</p>
        <button class="button">
            <span class="X"></span>
            <span class="Y"></span>
          </button>
    `;

pokemon.addEventListener('dblclick', () => {
    let newUrl = prompt("Ingresa la nueva URL de la imagen del Pokémon");
    let img = pokemon.querySelector('img');
    if (newUrl) {
        img.src = newUrl;
    }
});

let close_button = pokemon.querySelector(".button");
close_button.addEventListener("click", () => {
    pokemon.remove(); 

});

document.body.appendChild(pokemon);
})



