const nomePoke =document.querySelector('.NomePokemon');
const numeroPoke =document.querySelector('.numeroPokemon');
const imgPoke =document.querySelector('.imgPokemon');

const form =document.querySelector('.form');
const input =document.querySelector('.busca');

const BotaoPrev =document.querySelector('.prev')
const BotaoNext =document.querySelector('.next')

let BuscaPoke= 1;

const fetchPokemon = async (pokemon) =>{
  const ApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (ApiResponse.status===200) {
    const data = await ApiResponse.json();
    return data;
  }

  
}

const renderPokemon = async (pokemon) =>{
    nomePoke.innerHTML="Loading"
    numeroPoke.innerHTML=''
    const data= await fetchPokemon(pokemon);
    

    if (data){
      nomePoke.innerHTML = data.name;
      numeroPoke.innerHTML = data.id;
      imgPoke.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
      input.value = '';
      BuscaPoke=data.id;
   }

   else{
    nomePoke.innerHTML='Not fund'
    numeroPoke.innerHTML=':('
   }

}

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
});

BotaoNext.addEventListener('click',()=>{
    BuscaPoke +=1;
    renderPokemon(BuscaPoke)
    
});

BotaoPrev.addEventListener('click',()=>{
    if (BuscaPoke>1){
        BuscaPoke -=1;
        renderPokemon(BuscaPoke)
    }
    
});

renderPokemon(BuscaPoke)



