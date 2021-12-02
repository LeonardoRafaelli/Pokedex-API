const body = document.querySelector('body');
const pokemonNames = [];

// Div-log
const divLogo = document.createElement('div');
divLogo.className = 'div-logo';

body.appendChild(divLogo);

// Logo Pokemon
const logo = document.createElement('img');
logo.src = "./eachPokemon/Pokemon-Logo-removebg-preview.png";
logo.style.width = '200px'
divLogo.appendChild(logo);

// Input para a pesquisa dos pokemons
const inputFilter = document.createElement('input');
inputFilter.className = 'input-filter';

// Div do input e botão
const divFilter = document.createElement('div');
divFilter.className = 'div-filter'
divFilter.appendChild(inputFilter);

// Botão para a pesquisa
const btnBuscar = document.createElement('button');
btnBuscar.className = 'btn-buscar'
btnBuscar.innerText = 'Buscar Pokemon';
divFilter.appendChild(btnBuscar);
body.appendChild(divFilter);





//Lista dos pokemons
const orderedList = document.createElement('ol');
body.appendChild(orderedList);

//-----FETCH------ Buscando Icone e nome dos pokemons
fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
.then(function(result){

    result.json().then(function(array){

        array.forEach(pokemon => {
            const linha = document.createElement('li');
            //Criando o botão para cada pokemon
            const verPokemon = document.createElement('button');
            verPokemon.innerText = 'Analisar Pokemon';
            verPokemon.className = 'ver-pokemon';
            //Criando o link para cada pokemon
            const linkPokemon = document.createElement('a');
            linkPokemon.href = `./eachPokemon/pokemonPage.html?${pokemon.id}`
            linkPokemon.appendChild(verPokemon);

            const divPokemon = document.createElement('div');
            divPokemon.className = 'div-pokemon';

            const icon = document.createElement('img');

            icon.src = pokemon.url_icon;
            icon.className = 'pokemon-icon';
            icon.onerror = function () {
                icon.src = pokemon.url_icon;
            }

            const nome = document.createElement('p');
            nome.innerText = pokemon.name;

            divPokemon.appendChild(icon);
            divPokemon.appendChild(nome);
            divPokemon.appendChild(linkPokemon);
            linha.appendChild(divPokemon);
            orderedList.appendChild(linha);

            // console.log(pokemon);
            pokemonNames.push({name: pokemon.name});
        });
    })
    
}).catch(function(error){
    console.log(error);
})



let ol, li, i, txtValue;

    ol = document.querySelector('ol');
    li = ol.getElementsByTagName('li');

btnBuscar.addEventListener('click', function() {
    
        for (i = 0; i < li.length; i++) {
            txtValue = pokemonNames[i].name.toUpperCase();
            if (txtValue.indexOf(inputFilter.value.toUpperCase()) > -1) {
                // console.log(i);
                li[i].style.display = "";
            } else {
                // console.log(i);
                li[i].style.display = "none";
            }
        }
});



