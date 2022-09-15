const STEPS = [
  {
    content: "This is the first step, click next to continue",
    element: document.getElementById("first"),
  },
  {
    content: "Size will be adjusted automatically",
    element: document.getElementById("quote"),
  },
  {
    content: "You can change the position of the modal",
    element: document.getElementById("on-right"),
    position: "left",
  },
  {
    content: "Just use like this, easy right?",
    element: document.getElementById("usage"),
    position: "top",
  },
]

const buttonStart = document.getElementById("start")

const ownIntro = new Ownintro(STEPS, {
  buttonBackText: "Back",
  buttonNextText: "Next",
  buttonFinishText: "Finish",
})

buttonStart.addEventListener("click", () => {
  ownIntro.start()
})
