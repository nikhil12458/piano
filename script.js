let main = document.querySelector("main");

let keys = [
  { key: "1", src: "./sounds/A0.mp3" },
  { key: "2", src: "./sounds/C1.mp3" },
  { key: "3", src: "./sounds/Ds1.mp3" },
  { key: "4", src: "./sounds/Fs1.mp3" },
  { key: "5", src: "./sounds/A1.mp3" },
  { key: "6", src: "./sounds/C2.mp3" },
  { key: "7", src: "./sounds/Ds3.mp3" },
  { key: "8", src: "./sounds/Fs2.mp3" },
  { key: "9", src: "./sounds/A2.mp3" },
  { key: "0", src: "./sounds/C3.mp3" },
  { key: "Q", src: "./sounds/Ds2.mp3" },
  { key: "W", src: "./sounds/Fs3.mp3" },
  { key: "E", src: "./sounds/A3.mp3" },
  { key: "R", src: "./sounds/C4.mp3" },
  { key: "T", src: "./sounds/Ds3.mp3" },
  { key: "Y", src: "./sounds/Fs4.mp3" },
  { key: "U", src: "./sounds/A4.mp3" },
  { key: "I", src: "./sounds/C5.mp3" },
  { key: "O", src: "./sounds/Ds4.mp3" },
  { key: "P", src: "./sounds/Fs5.mp3" },
  { key: "A", src: "./sounds/A5.mp3" },
  { key: "S", src: "./sounds/C6.mp3" },
  { key: "D", src: "./sounds/Ds5.mp3" },
  { key: "F", src: "./sounds/Fs6.mp3" },
  { key: "G", src: "./sounds/A6.mp3" },
  { key: "H", src: "./sounds/C7.mp3" },
  { key: "J", src: "./sounds/Ds6.mp3" },
  { key: "K", src: "./sounds/Fs7.mp3" },
  { key: "L", src: "./sounds/A7.mp3" },
  { key: "Z", src: "./sounds/C8.mp3" },
  { key: "X", src: "./sounds/Ds7.mp3" },
  { key: "C", src: "./sounds/Ds1.mp3" },
  { key: "V", src: "./sounds/A0.mp3" },
  { key: "B", src: "./sounds/Fs1.mp3" },
  { key: "N", src: "./sounds/C5.mp3" },
  { key: "M", src: "./sounds/A4.mp3" },
];

let audio = new Audio();

let cluster = "";

keys.forEach((elem) => {
  cluster += `<div class="note" data-src="${elem.src}">
            <h3 class="note-text">${elem.key}</h3>
        </div>`;
});
main.innerHTML = cluster;

let note = document.querySelectorAll(".note");
let noteText = document.querySelectorAll(".note-text");

note.forEach((elem) => {
  elem.addEventListener("mousedown", () => {
    elem.style.backgroundColor = "#d5d5d5ff";
    let sound = new Audio(elem.getAttribute("data-src"));
  sound.play();
  });
  elem.addEventListener("mouseup", () => {
    elem.style.backgroundColor = "#ffffff";
  });
});

document.body.addEventListener("keydown", (dets) => {
   if (dets.repeat) return;
  
  note.forEach((elem) => {
    if (elem.innerText == dets.key) {
      elem.style.backgroundColor = "#d5d5d5ff";
      let sound = new Audio(elem.getAttribute("data-src"));
  sound.play();
    }
  });
});

document.body.addEventListener("keyup", (dets) => {
  note.forEach((elem) => {
    if (elem.innerText == dets.key) {
      elem.style.backgroundColor = "#ffffff";
    }
  });
});
