# Drumkit Lekse


`const soundFolder = "sounds/"` setter soundFolder til den lokale mappen sounds/ hvor alle lydfilene ligger


```js
const soundList = [
  {key: "q", fileName: "clap.wav"},
  {key: "w", fileName: "hihat.wav"},
  {key: "e", fileName: "kick.wav"},
  {key: "r", fileName: "openhat.wav"},
  {key: "a", fileName: "ride.wav"},
  {key: "s", fileName: "snare.wav"},
  {key: "d", fileName: "tink.wav"},
  {key: "f", fileName: "tom.wav"},
]
```
her legger vi til soundList som legger til ett key element og fileName for hver fil. Hvor vi senere vil bruke eks `{key: "q", fileName: "clap.wav"},` fileName: clap.wav til og bli knyttet til key: q


`const drumkitContainer = document.getElementById("drums")` setter drumkitContainer til ett element med iden "drums"

```js
function drum(folder, fileInfo){

  const button = document.createElement("button")
  button.textContent = fileInfo.fileName

  const sound = new Audio(folder + fileInfo.fileName)

  button.addEventListener("click", () => playSound(sound))

  return button
}
```
her setter vi en function til og lage knappene med en eventlistener for og lage funksjonen av at når knappen blir trykt på så skal den spille av den lyden



`const drumkitElements = soundList.map((soundInfo) => drum(soundFolder, soundInfo))` her looper vi igjennom arrayet og retunerer ett nytt array med en knapp, en lydfil og med en eventlistener som kommer ifra drum function



`drumkitContainer.append(...drumkitElements)` pakker ut arrayet til en string

```js
window.addEventListener("keydown", (event) => {
  
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key)

  if (!soundFile) return

  const sound = new Audio(soundFolder + soundFile.fileName)
  playSound(sound)

})
```
legger til en eventListener som ser etter keypress og om keypress matcher key: så spiller den av lyd

```js
function playSound(AudioElement) {
  AudioElement.currentTime = 0
  AudioElement.play()
}
```
setter playtime på filen til 0 så spiller av lydfilen.


---

# Ekstra ting eg vil gjøre senere

fargeendring på siste trykte knapp.
 