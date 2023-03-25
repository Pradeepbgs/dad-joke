const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

btnEl.addEventListener('click', getJoke);
const apikey = "Br2WLieqWK/IhFfcXja4ow==2Mb9zNGhvom51CUl";

const options = {
        method: "GET",
        headers:{
                "X-Api-Key" : apikey,
        }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit= 1";

 async function getJoke(){

        try {
                jokeEl.innerText = 'updating...';
                btnEl.disabled = true;
                btnEl.innerText = 'loading...';
        
                const response = await fetch(apiURL,options);
                const data = await response.json();
                btnEl.disabled = false;
                btnEl.innerText = 'Tell me a joke';
                const showJoke = data[0].joke;
                document.getElementById('joke').innerHTML = showJoke; 
        } catch (error) {
                document.getElementById('joke').innerHTML = 'An error happened, try again later!';
                btnEl.disabled = false;
                btnEl.innerText = 'Tell me a joke';
                
        }

        
//        
}