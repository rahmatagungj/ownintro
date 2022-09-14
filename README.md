# OwnIntro
Library for Onboarding and Intro

## Installation
```html 
<script src="./ownintro.min.js"></script>
```

## Usage
```javascript
const STEPS = [
  {
    content: "This is the first step, click next to continue",
    element: document.getElementById("first"),
  }
]

const ownIntro = new Ownintro(STEPS)
ownIntro.start()
```

## Options
```javascript
const STEPS = [
  {
    content: "This is the first step, click next to continue",
    element: document.getElementById("first"),
  }
]

const ownIntro = new Ownintro(STEPS, {
  buttonBackText: "Back",
  buttonNextText: "Next",
  buttonFinishText: "Finish",
  hideOnClickOutside: true,
  smoothMove: true,
})
ownIntro.start()
```