function generatePoem(event) {
    event.preventDefault();

    alert("Generating poem...");

   
new Typewriter("#poem", {
  strings: "Roses are red, violets are blue, I'm a poet, and I know it!",
  autoStart: true,
  delay: 1,
  cursor: "",
});
    

}


let poemFormElement = document.querySelector("#form");
poemFormElement.addEventListener("submit", generatePoem);