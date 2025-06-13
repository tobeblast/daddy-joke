const jokeEl = document.getElementById("joke");
const btnEl = document.getElementById("btn");

const apiKey = "dQdwT42Uy9Zsrb5tBB+rbA==G8uZyeVO5gioIy7p";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes";

async function getJoke() {
  try {
    joke.innerText = "Updating....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiUrl, options);
    const data = await response.json();

    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = "An error occured, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
  }
}

btnEl.addEventListener("click", getJoke);
