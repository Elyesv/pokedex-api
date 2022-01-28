let offset = 0
let url = `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${offset}`
const root = document.getElementsByClassName('pokemon')[0]

//Page down
document.getElementsByClassName('prev')[0].addEventListener('click',  () =>{
    if(offset !== 0){
        offset -= 27
        url = `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${offset}`
        root.innerHTML = ''
        getAllPoke(url)
    }
})

//Page up
document.getElementsByClassName('next')[0].addEventListener('click',  () =>{
    offset += 27
    url = `https://pokeapi.co/api/v2/pokemon?limit=27&offset=${offset}`
    root.innerHTML = ''
    getAllPoke(url)
})

//Get 27 Pokemon
let getAllPoke = (url) =>{
    fetch(url)
        .then(resp => resp.json())
        .then(function(data){
            getSinglePoke(data.results)
        })
}

getAllPoke(url)

//Get the info for one pokemon
function getSinglePoke(allPoke){
    allPoke.forEach((el) =>{
        fetch(el.url)
            .then(resp => resp.json())
            .then(function(data){
                addPoke(data)
            })
    })
}

//Get the entire list of pokemon and add it to a datalist for search bar
setTimeout(function (){
    for(let i = 1; i < 899; i++){
        fetch("https://pokeapi.co/api/v2/pokemon/" + i)
            .then(resp => resp.json())
            .then(function(data){
                let datalist = document.getElementById('pokemon')
                      let opt = document.createElement('option')
                      opt.value = data.name
                      datalist.appendChild(opt)
                  })
        }
}, 1000)


let showPokeOfType = (typeBox) =>{
    let type = typeBox.innerHTML.replace(/\s/g, '')
    if(type === "normal"){
        fetch("https://pokeapi.co/api/v2/type/1")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "fighting"){
        fetch("https://pokeapi.co/api/v2/type/2")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "flying"){
        fetch("https://pokeapi.co/api/v2/type/3")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "poison"){
        fetch("https://pokeapi.co/api/v2/type/4")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "ground"){
        fetch("https://pokeapi.co/api/v2/type/5")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "rock"){
        fetch("https://pokeapi.co/api/v2/type/6")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "bug"){
        fetch("https://pokeapi.co/api/v2/type/7")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "ghost"){
        fetch("https://pokeapi.co/api/v2/type/8")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "steel"){
        fetch("https://pokeapi.co/api/v2/type/9")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "fire"){
        fetch("https://pokeapi.co/api/v2/type/10")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "water"){
        fetch("https://pokeapi.co/api/v2/type/11")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "grass"){
        fetch("https://pokeapi.co/api/v2/type/12")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "electric"){
        fetch("https://pokeapi.co/api/v2/type/13")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "ice"){
        fetch("https://pokeapi.co/api/v2/type/15")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "dragon"){
        fetch("https://pokeapi.co/api/v2/type/16")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "dark"){
        fetch("https://pokeapi.co/api/v2/type/17")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
    if(type === "fairy"){
        fetch("https://pokeapi.co/api/v2/type/18")
            .then(resp => resp.json())
            .then(function(data){
                removeCard()
                displayPokeOfType(data)
            })
    }
}

let displayPokeOfType = (data) =>{
    data.pokemon.forEach(el =>{
        fetch("https://pokeapi.co/api/v2/pokemon/" + el.pokemon.name)
            .then(resp => resp.json())
            .then(function(data){
                console.log(data)
                let newDiv = document.createElement('div')
                newDiv.classList.add('pokemon-single')
                let card = `
                    <img src="${data.sprites.front_default}" alt="${data.name}" class="pokemon-single-sprite">
                    <p class="pokemon-single-id"> N° ${data.id}</p>
                    <p class="pokemon-single-name">${data.name}</p>
                    <div class="pokemon-single-types">
                        <div class="pokemon-single-types-alone" onclick="showPokeOfType(this)">${data.types.map((type) => type.type.name).join(' </div> <div class="pokemon-single-types-alone" onclick="showPokeOfType(this)"> ')}</div>
                    </div>
            `
                newDiv.innerHTML = card
                root.appendChild(newDiv)

                document.getElementsByClassName('prev')[0].style.display = 'none'
                document.getElementsByClassName('next')[0].style.display = 'none'

                fixTypeName()
                document.querySelectorAll('.pokemon-single').forEach(el =>{
                    el.addEventListener('click', ()=>{
                        let name = el.children[2].innerHTML
                        getPokeInfo(name)
                    })
                })
            })
    })
}

let removeCard = () =>{
    document.getElementsByClassName('pokemon')[0].innerHTML = ''
}

//Add a pokemon on the page
let arr = []
let addPoke = (Poke) =>{
    arr.push(Poke)
    arr.sort((a, b) => a.id > b.id ? 1 : -1)
    if(arr.length == 27){
        arr.forEach((el) =>{
            let newDiv = document.createElement('div')
            newDiv.classList.add('pokemon-single')

            let card = `
                    <img src="${el.sprites.front_default}" alt="${el.name}" class="pokemon-single-sprite">
                    <p class="pokemon-single-id"> N° ${el.id}</p>
                    <p class="pokemon-single-name">${el.name}</p>
                    <div class="pokemon-single-types">
                        <div class="pokemon-single-types-alone" onclick="showPokeOfType(this)">${el.types.map((type) => type.type.name).join(' </div> <div class="pokemon-single-types-alone" onclick="showPokeOfType(this)"> ')}</div>
                    </div>
            `
            newDiv.innerHTML = card
            root.appendChild(newDiv)

            fixTypeName()

        })
        arr = []
        }
    document.querySelectorAll('.pokemon-single').forEach(el =>{
        el.addEventListener('click', ()=>{
            let name = el.children[2].innerHTML
            getPokeInfo(name)
        })
    })
}

//Update every type box to show the good color and the good string
let fixTypeName = () =>{
    let types = document.getElementsByClassName('pokemon-single-types-alone')
    types = Array.from(types)
    if (types.length >= 9){
        types.forEach(el =>{
            let type = el.innerHTML.replace(/\s/g, '')
            el.classList.add(type)
        })
    }
}

//Search Bar
document.getElementsByTagName('form')[0].addEventListener('submit', (e)=>{
    if(document.body.classList.item(0) === "onSingle"){
        e.preventDefault()
        let pokemon = document.getElementById("pokeName").value
        document.getElementsByClassName('single-info-evolution')[0].innerHTML = ""
        document.getElementsByClassName('single-info-moves')[0].innerHTML = ""
        getAllMoves(pokemon)
        getEvolutions(pokemon)
    }
    else{
        e.preventDefault()
        getPokeInfo(document.getElementById("pokeName").value)
    }
})


//Show info about a pokemon on the left
let getPokeInfo = (name) =>{
    if(name === ''){
        return []
    }else{
        fetch('https://pokeapi.co/api/v2/pokemon/' + name)
            .then(resp => resp.json())
            .then(function(data){
                let pokeInfo = `
                <div class="info-pokemon-sprite">
                    <img class="info-pokemon-sprite-image" src="${data.sprites.front_default}" alt="${data.name}">
                    <img class="info-pokemon-sprite-image" src="${data.sprites.back_default}" alt="${data.name}">
                    <img class="info-pokemon-sprite-image" src="${data.sprites.front_shiny}" alt="${data.name}">
                    <img class="info-pokemon-sprite-image" src="${data.sprites.back_shiny}" alt="${data.name}">
                </div>
                <p class="info-pokemon-id">N° ${data.id}</p>
                <p class="info-pokemon-name" onclick="getMoreInfo(this)">${data.name}</p>
                <div class="info-pokemon-types">
                    <div class="pokemon-single-types-alone" onclick="showPokeOfType(this)">${data.types.map((type) => type.type.name).join(' </div> <div class="pokemon-single-types-alone" onclick="showPokeOfType(this)"> ')}</div>
                </div>
                <p class="info-pokemon-abilities">Abilities</p>
                <div class="info-pokemon-abilities-box">
                    <div class="info-pokemon-abilities-box-single">${data.abilities.map((ability) => ability.ability.name).join(' </div> <div class="info-pokemon-abilities-box-single hidden"> ')}</div>
                </div>
                <div class="info-pokemon-primary-stats">
                    <div class="info-pokemon-primary-stats-box">
                        <p class="info-pokemon-primary-stats-box-title">Height</p>
                        <p class="info-pokemon-primary-stats-box-value">${data.height}</p>
                    </div>
                    <div class="info-pokemon-primary-stats-box">
                        <p class="info-pokemon-primary-stats-box-title">Weight</p>
                        <p class="info-pokemon-primary-stats-box-value">${data.weight}</p>
                    </div>
                    <div class="info-pokemon-primary-stats-box">
                        <p class="info-pokemon-primary-stats-box-title">Base Exp</p>
                        <p class="info-pokemon-primary-stats-box-value">${data.base_experience}</p>
                    </div>
                </div>
                <div class="info-pokemon-stats">
                    <p class="info-pokemon-stats-title">Stats</p>
                    <img src="" id="img" alt="Generating graph ...">
                </div>
            `

                document.getElementsByClassName('info-pokemon')[0].classList.remove('center')
                document.getElementsByClassName('info-pokemon')[0].innerHTML = pokeInfo
                fixTypeName()
                getGraph(data)
            })
    }
}

//Get the graph of stat for pokemon
let getGraph = (data) =>{
    let urlGraph = `https://quickchart.io/chart?c={type:'bar',data:{labels:['Attack','Defense','Spe. Attack','Spe. Defense','Speed'], datasets:[{label:'${data.name}',data:[${data.stats[1].base_stat},${data.stats[2].base_stat},${data.stats[3].base_stat}, ${data.stats[4].base_stat},${data.stats[5].base_stat}]}]}}`
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(urlGraph, requestOptions)
        .then(res=>{return res.blob()})
        .then(blob=>{
            let img = URL.createObjectURL(blob)
            document.getElementById('img').setAttribute('src', img);
        })
        .catch(error => console.log('error', error));
}

//Display the evolution chain and all the move of a pokemon
let getMoreInfo = (name) =>{
    let pokemon = name.innerHTML
    let searchbar = document.getElementsByClassName('searchbar')[0]
    document.body.classList.add('onSingle')
    document.body.innerHTML = `
        <div class="single">
            <div class="single-nav">
                <button onclick="window.location.reload()">Home</button>
            </div>
            <div class="single-info">
                <div class="single-info-evolution">
                </div>
                <div class="single-info-moves">
                </div>
            </div>
        </div>
    `
    document.getElementsByClassName('single-nav')[0].appendChild(searchbar)
    getAllMoves(pokemon)
    getEvolutions(pokemon)
}

//Get all moves a pokemon can learn and display it
let getAllMoves = (pokemon) =>{
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
        .then(resp => resp.json())
        .then(function(data){
            data.moves.forEach(el=>{
                let newDiv = document.createElement('div')
                newDiv.classList.add('single-info-moves-single')
                newDiv.innerHTML = el.move.name
                document.getElementsByClassName('single-info-moves')[0].appendChild(newDiv)
            })
        })
}


//Get the evolution chain
let evoChain = [];
let getEvolutions = (pokemon) =>{
    fetch('https://pokeapi.co/api/v2/pokemon-species/' + pokemon)
        .then(resp => resp.json())
        .then(function(data){
            fetch(data.evolution_chain.url)
                .then(resp => resp.json())
                .then(function(data){
                    let evoData = data.chain
                    do {
                        let evoDetails = evoData['evolution_details'][0]
                        evoChain.push({
                            "species_name": evoData.species.name,
                            "min_level": !evoDetails ? 1 : evoDetails.min_level,
                            "trigger_name": !evoDetails ? null : evoDetails.trigger.name
                        })
                        evoData = evoData['evolves_to'][0];
                    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));

                    sortFetchPoke(evoChain)
                    evoChain = [];
                })
        })
}

//sort the evolution chain so we can display it in order
async function sortFetchPoke(evoChain){
    for (let i = 0; i < evoChain.length; i++){
        const req = await fetch('https://pokeapi.co/api/v2/pokemon/' + evoChain[i].species_name)
        const pokemon = await req.json()
        addPokeSingle(pokemon)
    }
}

//display the pokemon of the evolution chain
let addPokeSingle = (pokemon) =>{
    let newDiv = document.createElement('div')
    newDiv.classList.add('single-info-evolution-stage')

    let stageInfo = `
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p class="single-info-evolution-stage-id">N° ${pokemon.id}</p>
        <p class="single-info-evolution-stage-name">${pokemon.name}</p>
    `

    newDiv.innerHTML = stageInfo
    document.getElementsByClassName('single-info-evolution')[0].appendChild(newDiv)
}
