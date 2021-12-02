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

//Criando a tabela de pokemons;
const table = document.createElement('table');
const divTable = document.createElement('div');
divTable.className = 'div-table';
divTable.appendChild(table);

//-----FETCH------ Buscando Icone e nome dos pokemons
fetch('https://prof-poke-api.herokuapp.com/api/pokedex/')
.then(function(result){

    result.json().then(function(array){

        array.forEach(pokemon => {
            const linha = document.createElement('tr');

            const dataImg = document.createElement('th');
            const dataNome = document.createElement('td');
            const dataBtn = document.createElement('td');

            

            // const linha = document.createElement('li');
            // //Criando o botão para cada pokemon
            const verPokemon = document.createElement('button');
            verPokemon.innerText = 'Analisar Pokemon';
            verPokemon.className = 'ver-pokemon';
            //Criando o link para cada pokemon
            const linkPokemon = document.createElement('a');
            linkPokemon.href = `./eachPokemon/pokemonPage.html?${pokemon.id}`
            linkPokemon.appendChild(verPokemon);

            dataNome.innerText = pokemon.name;
            dataNome.innerText = dataNome.innerText.toUpperCase();
            dataBtn.appendChild(linkPokemon);

            // const divPokemon = document.createElement('div');
            // divPokemon.className = 'div-pokemon';

            const icon = document.createElement('img');

            icon.src = pokemon.url_icon;
            icon.className = 'pokemon-icon';
            icon.onerror = function () {
                icon.src = pokemon.url_icon;
            }
            dataImg.appendChild(icon);

            // const nome = document.createElement('p');
            // nome.innerText = pokemon.name;

            // divPokemon.appendChild(icon);
            // divPokemon.appendChild(nome);
            // divPokemon.appendChild(linkPokemon);
            // linha.appendChild(divPokemon);
            // orderedList.appendChild(linha);

            // console.log(pokemon);
            pokemonNames.push({name: pokemon.name});
            
            linha.appendChild(dataImg);
            linha.appendChild(dataNome);
            linha.appendChild(dataBtn);
           table.appendChild(linha);
        });
    })
    
}).catch(function(error){
    console.log(error);
})

body.appendChild(divTable);


let tabela, tr, i, txtValue, td;

    tabela = document.getElementsByTagName("table");
    tr = tabela[0].rows;

btnBuscar.addEventListener('click', function() {
    
        for (i = 0; i < tr.length; i++) {
            txtValue = pokemonNames[i].name.toUpperCase();
            if (txtValue.indexOf(inputFilter.value.toUpperCase()) > -1) {
                // console.log(i);
                tr[i].style.display = "";
            } else {
                // console.log(i);
                tr[i].style.display = "none";
            }
        }
});



