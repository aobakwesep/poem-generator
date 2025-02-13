function displayPoem(response) {
    console.log("poem generated")
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}

function generatePoem(event) {
    event.preventDefault();
let promptInput = document.querySelector("#prompt");


    let apiKey = "5c8e18035abacoef369tb23f0434da2c"
    let prompt = `User instructions: Generate a poem about ${promptInput.value}`;
    let context = "You are a romance poem expert and you love writing short poems. Your mission is to generate a 4 line poem in 'Poppins', sans-serif and seperate each line with a <br >. Make sure to follow the user instructions and write a poem that is relevant to the user's input. The user's input is the prompt. Sign the poem with'SheCodes AI' inside a <strong> element";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
   
console.log("Generating poem");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

axios.get(apiUrl).then(displayPoem);

}


let poemFormElement = document.querySelector("#prompt");
poemFormElement.addEventListener("submit", generatePoem);