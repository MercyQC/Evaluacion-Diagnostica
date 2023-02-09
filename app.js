const contenedorPrincipal = document.querySelector (".contenedor-principal")
const graciasContenedor = document.querySelector (".thank-you")
const submitButton = document.getElementById ("submit")
const rateAgain = document.getElementById ("rate-again")

submitButton.addEventListener("click", () => {
    contenedorPrincipal.style.display = "none"
    graciasContenedor.classList.remove("hidden")
  
    ratings.forEach((rating) => {
      rating.addEventListener("click", () => {
        actualRating.innerHTML = rating.innerHTML
      })
    })
  })
  
  rateAgain.addEventListener("click", () => {
    contenedorPrincipal.style.display = "block"
    graciasContenedor.classList.add("hidden")
  })
