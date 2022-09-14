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
    content: "Work also with elements that are in safe areas",
    element: document.getElementById("on-right"),
  }
]

const ownIntro = new Ownintro(STEPS, {
  buttonBackText: "Back",
  buttonNextText: "Next",
  buttonFinishText: "Finish",
  hideOnClickOutside: true,
})
ownIntro.start()