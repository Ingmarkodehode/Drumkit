// mappen med lydfiler:
const soundFolder = "sounds/"

// array med lydfiler:
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

const drumkitContainer = document.getElementById("drums")

function drum(folder, fileInfo){

  const button = document.createElement("button")
  button.textContent = fileInfo.fileName

  const sound = new Audio(folder + fileInfo.fileName)

  button.addEventListener("click", () => playSound(sound))

  return button
}

const drumkitElements = soundList.map((soundInfo) => drum(soundFolder, soundInfo))

drumkitContainer.append(...drumkitElements)

window.addEventListener("keydown", (event) => {
  
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key)

  if (!soundFile) return

  const sound = new Audio(soundFolder + soundFile.fileName)
  playSound(sound)

})

function playSound(AudioElement) {
  AudioElement.currentTime = 0
  AudioElement.play()
}