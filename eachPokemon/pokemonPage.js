const body = document.querySelector('body');
let pokemonId = document.location.search;
pokemonId = pokemonId.substring(1);

const atributos = [];

// Div-log
const divLogo = document.createElement('div');
divLogo.className = 'div-logo';
body.appendChild(divLogo);

// Logo Pokemon
const logo = document.createElement('img');
logo.src = "./Pokemon-Logo-removebg-preview.png";
logo.style.width = '200px'
divLogo.appendChild(logo);


// FETCH
fetch(`https://prof-poke-api.herokuapp.com/api/pokemon/${pokemonId}`)
.then(result => {
    result.json().then(e => {
        showPokemon(e)
    })
})

//Botão voltar
function createBackBtn() {
    const a = document.createElement('a');
    a.href = '../principal.html'
    const backButton = document.createElement('button');
    backButton.className = 'back-btn';
    backButton.innerText = 'Voltar';
    a.appendChild(backButton);
    body.appendChild(a);
}

function showPokemon(e) {
    const pokemonContainer = document.createElement('div');
        pokemonContainer.className = 'pokemon-container';
        const divNome = document.createElement('div');
        divNome.className = 'div-nome';
        const nome = document.createElement('h3');
        nome.innerText = e.name.toUpperCase();
        
        const icone = document.createElement('img');
        icone.className = 'icone-pokemon';
        icone.src = e.url_icon;
        icone.onerror = function(){
            icone.src = e.url_icon_2;
        }
        
        atributos.push({nome: 'Ataque', atributo: e.atk})
        atributos.push({nome: 'Ataque Especial', atributo: e.atks})
        atributos.push({nome: 'Defesa', atributo: e.def})
        atributos.push({nome: 'Defesa Especial', atributo: e.defs})
        
        
        divNome.appendChild(nome);
        divNome.appendChild(icone);
        pokemonContainer.appendChild(divNome);
        
        showPower(pokemonContainer, divNome);
        createBackBtn();
}



function showPower(pokemonContainer, divNome) {
    // Criando uma Tabela
    const table = document.createElement('table');
    // setTimeout(() => {
        atributos.forEach(e => {
            const linha = document.createElement('tr');
            const head = document.createElement('th');
            head.innerText = e.nome;
            const atributo = document.createElement('td');
            atributo.innerText = e.atributo;
    
            linha.appendChild(head);
            linha.appendChild(atributo);
            table.appendChild(linha);
        })
        
        divNome.appendChild(table);
        body.appendChild(pokemonContainer);
        console.log(atributos);
    // }, 600);
}