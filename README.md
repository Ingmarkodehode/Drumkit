# Drumkit Lekse

### javascript

`const soundFolder = "sounds/"` setter soundFolder til den lokale mappen sounds/ hvor alle lydfilene ligger

<details>
    <summary>code</summary>

```js
const soundList = [
  { key: "q", fileName: "clap.wav" },
  { key: "w", fileName: "hihat.wav" },
  { key: "e", fileName: "kick.wav" },
  { key: "r", fileName: "openhat.wav" },
  { key: "a", fileName: "ride.wav" },
  { key: "s", fileName: "snare.wav" },
  { key: "d", fileName: "tink.wav" },
  { key: "f", fileName: "tom.wav" },
];
```

</details>

her legger vi til soundList som legger til ett key element og fileName for hver fil. Hvor vi senere vil bruke eks `{key: "q", fileName: "clap.wav"},` fileName: clap.wav til og bli knyttet til key: q

`const drumkitContainer = document.getElementById("drums")` setter drumkitContainer til ett element med iden "drums"

<details>
    <summary>code</summary>

```js
function drum(folder, fileInfo) {
  const button = document.createElement("button");
  button.textContent = fileInfo.fileName;

  const sound = new Audio(folder + fileInfo.fileName);

  button.addEventListener("click", () => playSound(sound));

  return button;
}
```

</details>
her setter vi en function til og lage knappene med en eventlistener for og lage funksjonen av at når knappen blir trykt på så skal den spille av den lyden

`const drumkitElements = soundList.map((soundInfo) => drum(soundFolder, soundInfo))` her looper vi igjennom arrayet og retunerer ett nytt array med en knapp, en lydfil og med en eventlistener som kommer ifra drum function

`drumkitContainer.append(...drumkitElements)` pakker ut arrayet til en string

<details>
    <summary>code</summary>

```js
window.addEventListener("keydown", (event) => {
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);

  if (!soundFile) return;

  const sound = new Audio(soundFolder + soundFile.fileName);
  playSound(sound);
});
```

</details>

legger til en eventListener som ser etter keypress og om keypress matcher key: så spiller den av lyd

<details>
    <summary>code</summary>

```js
function playSound(AudioElement) {
  AudioElement.currentTime = 0;
  AudioElement.play();
}
```

</details>

setter playtime på filen til 0 så spiller av lydfilen.

---

# Ekstra ting eg vil gjøre senere

fargeendring på siste trykte knapp.

# updated med hjelp ifra chatGPT

laget ett css class med navn highlight som setter background-color: red;

---

`const soundFolder = "sounds/"` setter soundfolder

<details>
    <summary>code</summary>

```js
const soundList = [
  { key: "q", fileName: "clap.wav" },
  { key: "w", fileName: "hihat.wav" },
  { key: "e", fileName: "kick.wav" },
  { key: "r", fileName: "openhat.wav" },
  { key: "a", fileName: "ride.wav" },
  { key: "s", fileName: "snare.wav" },
  { key: "d", fileName: "tink.wav" },
  { key: "f", fileName: "tom.wav" },
];
```

</details>

her setter vi opp ett array hvor vi binder en tast til en lydfil eks q er blitt knyttet opp mot clap.wav via key: "q", fileName: "clap.wav"

`let lastPressedButton = null;`
deklarerer lastPressedButton og setter den til null

`const drumkitContainer = document.getElementById("drums")`
drumkitContainer er nå linket til elementet med id drums

---

<details>
    <summary>code</summary>

```js
function drum(folder, fileInfo) {
  const button = document.createElement("button");
  button.textContent = fileInfo.fileName;
  button.setAttribute("data-key", fileInfo.key);

  const sound = new Audio(folder + fileInfo.fileName);

  button.addEventListener("click", () => {
    playSound(sound);
    highlightButton(button);
  });
  return button;
}
```

</details>

`function drum(folder, fileInfo){`
lager en function som heter drum som tarr inn 2 parametere som er folder og fileInfo

`const button = document.createElement("button")`
constanterer at button elementet skal lage en button

`button.textContent = fileInfo.fileName`
sier at teksten inni knappen skal være det samme som fileInfo og fileName

`button.setAttribute("data-key", fileInfo.key)`
setter data-key attribute på knappen til den samme tasten som kommer ifra soundList, dette bruker vi senere

`const sound = new Audio(folder + fileInfo.fileName)`
her setter vi sound til og være en ny lydfil (som kan spilles av) med attributes folder og fileInfo.fileName

`button.addEventListener("click", () => {`
her legger vi til en eventlistener til button på trykk av knappen

`playSound(sound)`
spiller av lyden når knappen blir trykt

`highlightButton(button)`
setter opp at button skal bli highlighted

`return button`
retunerer knappen

---

<details>
    <summary>code</summary>

```js
function highlightButton(button) {
  if (lastPressedButton) {
    lastPressedButton.classList.remove("highlight");
  }
  button.classList.add("highlight");
  lastPressedButton = button;
}
```

</details>

`function highlightButton(button) {`
setter opp en highlightButton function

`if (lastPressedButton) {`
if statement med attribute lastPressedButton

`lastPressedButton.classList.remove("highlight");`
fjerner classList highlight når en knapp er trykt

`button.classList.add("highlight");`
Legger til classList highlight på knappen som er trykt

`lastPressedButton = button;`
setter button til det samme som lastPressedButton

`const drumkitElements = soundList.map((soundInfo) => drum(soundFolder, soundInfo))`
her looper vi igjennom arrayet og retunerer ett nytt array med en knapp, en lydfil og med en eventlistener som kommer ifra drum function

`drumkitContainer.append(...drumkitElements)`
pakker ut arrayet til en string

---

<details>
    <summary>code</summary>

```js
window.addEventListener("keydown", (event) => {
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);

  if (!soundFile) return;

  const sound = new Audio(soundFolder + soundFile.fileName);
  playSound(sound);

  const button = drumkitContainer.querySelector(
    `button[data-key="${event.key}"]`
  );
  highlightButton(button);
});
```

</details>

`window.addEventListener("keydown", (event) => {`

`const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);`

`if (!soundFile) return;`

`const sound = new Audio(soundFolder + soundFile.fileName);`

`playSound(sound);`

`` const button = drumkitContainer.querySelector(`button[data-key="${event.key}"]`); ``

`highlightButton(button);`

---

<details>
    <summary>code</summary>

```js
function playSound(AudioElement) {
  AudioElement.currentTime = 0;
  AudioElement.play();
}
```

</details>

`function playSound(AudioElement) {`

`AudioElement.currentTime = 0;`

`AudioElement.play();}`

---

# full code

### HTML

<details>
    <summary>HTML</summary>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="#" />
    <script src="index.js" defer></script>
    <link rel="stylesheet" href="style.css" />
    <title>Drumkit-Lekse</title>
  </head>
  <body>
    <div id="drums"></div>
  </body>
</html>
```

</details>

### CSS

<details>
    <summary>CSS</summary>

```css
* {
  padding: 0px;
  margin: 0px;
}

.highlight {
  background-color: red;
}
```

</details>

### Javascript

<details>
    <summary>Javascript</summary>

```js
const soundFolder = "sounds/";

const soundList = [
  { key: "q", fileName: "clap.wav" },
  { key: "w", fileName: "hihat.wav" },
  { key: "e", fileName: "kick.wav" },
  { key: "r", fileName: "openhat.wav" },
  { key: "a", fileName: "ride.wav" },
  { key: "s", fileName: "snare.wav" },
  { key: "d", fileName: "tink.wav" },
  { key: "f", fileName: "tom.wav" },
];

let lastPressedButton = null;

const drumkitContainer = document.getElementById("drums");

function drum(folder, fileInfo) {
  const button = document.createElement("button");
  button.textContent = fileInfo.fileName;
  button.setAttribute("data-key", fileInfo.key);

  const sound = new Audio(folder + fileInfo.fileName);

  button.addEventListener("click", () => {
    playSound(sound);
    highlightButton(button);
  });
  return button;
}

function highlightButton(button) {
  if (lastPressedButton) {
    lastPressedButton.classList.remove("highlight");
  }
  button.classList.add("highlight");
  lastPressedButton = button;
}

const drumkitElements = soundList.map((soundInfo) =>
  drum(soundFolder, soundInfo)
);

drumkitContainer.append(...drumkitElements);

window.addEventListener("keydown", (event) => {
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);

  if (!soundFile) return;

  const sound = new Audio(soundFolder + soundFile.fileName);
  playSound(sound);

  const button = drumkitContainer.querySelector(
    `button[data-key="${event.key}"]`
  );
  highlightButton(button);
});

function playSound(AudioElement) {
  AudioElement.currentTime = 0;
  AudioElement.play();
}
```

</details>

# ChatGPT svar

<details>
    <summary>ChatGPT med syntax highlighting</summary>

Certainly! Let's go through the modifications in more detail:

CSS class for highlighting the button:
css
Copy code

```css
.highlight {
  background-color: yellow;
}
```

We define a CSS class named "highlight" that sets the background color to yellow. This class will be added to the button element to visually indicate that it is the last pressed button.

Variable to keep track of the last pressed button:
javascript
Copy code

```js
let lastPressedButton = null;
```

We declare a variable named `lastPressedButton` and initialize it with a value of null. This variable will store a reference to the last button that was pressed or clicked.

Modifying the `drum()` function:
javascript
Copy code

```js
function drum(folder, fileInfo) {
  const button = document.createElement("button");
  button.textContent = fileInfo.fileName;
  button.setAttribute("data-key", fileInfo.key);

  const sound = new Audio(folder + fileInfo.fileName);

  button.addEventListener("click", () => {
    playSound(sound);
    highlightButton(button);
  });

  return button;
}
```

```js
function highlightButton(button) {
  if (lastPressedButton) {
    lastPressedButton.classList.remove("highlight");
  }
  button.classList.add("highlight");
  lastPressedButton = button;
}
```

We made changes to the `drum()` function to add the data-key attribute to each button element and to handle the highlighting logic.

`button.setAttribute("data-key", fileInfo.key)` sets the data-key attribute on the button element to the corresponding key value from soundList. This will allow us to select the button based on the key value later.

Inside the `button.addEventListener("click", ...)` callback, we call the `highlightButton()` function, passing the button element as an argument. This will add the highlight class to the button when it is clicked.

The `highlightButton()` function checks if `lastPressedButton` exists (i.e., is not null). If it does, we remove the highlight class from the previously pressed button. Then, we add the highlight class to the current button and update `lastPressedButton` to reference the current button.

Updating the keydown event listener:
javascript
Copy code

```js
window.addEventListener("keydown", (event) => {
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);
  if (!soundFile) return;

  const sound = new Audio(soundFolder + soundFile.fileName);
  playSound(sound);

  const button = drumkitContainer.querySelector(
    `button[data-key="${event.key}"]`
  );
  highlightButton(button);
});
```

We modify the event listener for the keydown event to highlight the corresponding button when a key is pressed.

We use the `soundList.find()` method to find the sound file object that matches the pressed key. If there is no match, we return early and do nothing.

We create a new audio element with the corresponding sound file and play it using the `playSound()` function.

Next, we use the `drumkitContainer.querySelector()` method to select the button element with a data-key attribute that matches the pressed key. This allows us to find the corresponding button element in the drum kit.

Finally, we call the `highlightButton()` function, passing the selected button element as an argument. This will add the highlight class to the button, indicating that it is the last pressed button.

By incorporating these modifications into your existing code, the last pressed button will be visually highlighted both when clicked and when the corresponding key is pressed.

note! teksten er redigert for syntax highlighting

</details>

### raw copypaste ifra chatGPT

<details>
    <summary>ChatGPT raw copy</summary>

Certainly! Let's go through the modifications in more detail:

CSS class for highlighting the button:
css
Copy code
.highlight {
background-color: yellow;
}
We define a CSS class named "highlight" that sets the background color to yellow. This class will be added to the button element to visually indicate that it is the last pressed button.

Variable to keep track of the last pressed button:
javascript
Copy code
let lastPressedButton = null;
We declare a variable named lastPressedButton and initialize it with a value of null. This variable will store a reference to the last button that was pressed or clicked.

Modifying the drum() function:
javascript
Copy code
function drum(folder, fileInfo) {
const button = document.createElement("button");
button.textContent = fileInfo.fileName;
button.setAttribute("data-key", fileInfo.key);

const sound = new Audio(folder + fileInfo.fileName);

button.addEventListener("click", () => {
playSound(sound);
highlightButton(button);
});

return button;
}

function highlightButton(button) {
if (lastPressedButton) {
lastPressedButton.classList.remove("highlight");
}
button.classList.add("highlight");
lastPressedButton = button;
}
We made changes to the drum() function to add the data-key attribute to each button element and to handle the highlighting logic.

button.setAttribute("data-key", fileInfo.key) sets the data-key attribute on the button element to the corresponding key value from soundList. This will allow us to select the button based on the key value later.

Inside the button.addEventListener("click", ...) callback, we call the highlightButton() function, passing the button element as an argument. This will add the highlight class to the button when it is clicked.

The highlightButton() function checks if lastPressedButton exists (i.e., is not null). If it does, we remove the highlight class from the previously pressed button. Then, we add the highlight class to the current button and update lastPressedButton to reference the current button.

Updating the keydown event listener:
javascript
Copy code
window.addEventListener("keydown", (event) => {
const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);
if (!soundFile) return;

const sound = new Audio(soundFolder + soundFile.fileName);
playSound(sound);

const button = drumkitContainer.querySelector(`button[data-key="${event.key}"]`);
highlightButton(button);
});
We modify the event listener for the keydown event to highlight the corresponding button when a key is pressed.

We use the soundList.find() method to find the sound file object that matches the pressed key. If there is no match, we return early and do nothing.

We create a new audio element with the corresponding sound file and play it using the playSound() function.

Next, we use the drumkitContainer.querySelector() method to select the button element with a data-key attribute that matches the pressed key. This allows us to find the corresponding button element in the drum kit.

Finally, we call the highlightButton() function, passing the selected button element as an argument. This will add the highlight class to the button, indicating that it is the last pressed button.

By incorporating these modifications into your existing code, the last pressed button will be visually highlighted both when clicked and when the corresponding key is pressed.

</details>
