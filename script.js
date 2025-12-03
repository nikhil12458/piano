let main = document.querySelector("main");

const keys = [
  {
    key: "1",
    src: "./sounds/A0.mp3",
    note: "A0",
    type: "white",
    whiteIndex: 0,
  },
  {
    key: "2",
    src: "./sounds/C1.mp3",
    note: "C1",
    type: "white",
    whiteIndex: 1,
  },
  {
    key: "3",
    src: "./sounds/Ds1.mp3",
    note: "Ds1",
    type: "black",
    whiteIndex: 1,
  },
  {
    key: "4",
    src: "./sounds/Fs1.mp3",
    note: "Fs1",
    type: "black",
    whiteIndex: 2,
  },
  {
    key: "5",
    src: "./sounds/A1.mp3",
    note: "A1",
    type: "white",
    whiteIndex: 2,
  },
  {
    key: "6",
    src: "./sounds/C2.mp3",
    note: "C2",
    type: "white",
    whiteIndex: 3,
  },
  {
    key: "7",
    src: "./sounds/Ds3.mp3",
    note: "Ds3",
    type: "black",
    whiteIndex: 3,
  },
  {
    key: "8",
    src: "./sounds/Fs2.mp3",
    note: "Fs2",
    type: "black",
    whiteIndex: 4,
  },
  {
    key: "9",
    src: "./sounds/A2.mp3",
    note: "A2",
    type: "white",
    whiteIndex: 4,
  },
  {
    key: "0",
    src: "./sounds/C3.mp3",
    note: "C3",
    type: "white",
    whiteIndex: 5,
  },
  {
    key: "Q",
    src: "./sounds/Ds2.mp3",
    note: "Ds2",
    type: "black",
    whiteIndex: 5,
  },
  {
    key: "W",
    src: "./sounds/Fs3.mp3",
    note: "Fs3",
    type: "black",
    whiteIndex: 6,
  },
  {
    key: "E",
    src: "./sounds/A3.mp3",
    note: "A3",
    type: "white",
    whiteIndex: 6,
  },
  {
    key: "R",
    src: "./sounds/C4.mp3",
    note: "C4",
    type: "white",
    whiteIndex: 7,
  },
  {
    key: "T",
    src: "./sounds/Ds3.mp3",
    note: "Ds3",
    type: "black",
    whiteIndex: 7,
  },
  {
    key: "Y",
    src: "./sounds/Fs4.mp3",
    note: "Fs4",
    type: "black",
    whiteIndex: 8,
  },
  {
    key: "U",
    src: "./sounds/A4.mp3",
    note: "A4",
    type: "white",
    whiteIndex: 8,
  },
  {
    key: "I",
    src: "./sounds/C5.mp3",
    note: "C5",
    type: "white",
    whiteIndex: 9,
  },
  {
    key: "O",
    src: "./sounds/Ds4.mp3",
    note: "Ds4",
    type: "black",
    whiteIndex: 9,
  },
  {
    key: "P",
    src: "./sounds/Fs5.mp3",
    note: "Fs5",
    type: "black",
    whiteIndex: 10,
  },
  {
    key: "A",
    src: "./sounds/A5.mp3",
    note: "A5",
    type: "white",
    whiteIndex: 10,
  },
  {
    key: "S",
    src: "./sounds/C6.mp3",
    note: "C6",
    type: "white",
    whiteIndex: 11,
  },
  {
    key: "D",
    src: "./sounds/Ds5.mp3",
    note: "Ds5",
    type: "black",
    whiteIndex: 11,
  },
  {
    key: "F",
    src: "./sounds/Fs6.mp3",
    note: "Fs6",
    type: "black",
    whiteIndex: 12,
  },
  {
    key: "G",
    src: "./sounds/A6.mp3",
    note: "A6",
    type: "white",
    whiteIndex: 12,
  },
  {
    key: "H",
    src: "./sounds/C7.mp3",
    note: "C7",
    type: "white",
    whiteIndex: 13,
  },
  {
    key: "J",
    src: "./sounds/Ds6.mp3",
    note: "Ds6",
    type: "black",
    whiteIndex: 13,
  },
  {
    key: "K",
    src: "./sounds/Fs7.mp3",
    note: "Fs7",
    type: "black",
    whiteIndex: 14,
  },
  {
    key: "L",
    src: "./sounds/A7.mp3",
    note: "A7",
    type: "white",
    whiteIndex: 14,
  },
  {
    key: "Z",
    src: "./sounds/C8.mp3",
    note: "C8",
    type: "white",
    whiteIndex: 15,
  },
  {
    key: "X",
    src: "./sounds/Ds7.mp3",
    note: "Ds7",
    type: "black",
    whiteIndex: 15,
  },
  {
    key: "C",
    src: "./sounds/Ds1.mp3",
    note: "Ds1",
    type: "black",
    whiteIndex: 1,
  },
  {
    key: "V",
    src: "./sounds/A0.mp3",
    note: "A0",
    type: "white",
    whiteIndex: 0,
  },
  {
    key: "B",
    src: "./sounds/Fs1.mp3",
    note: "Fs1",
    type: "black",
    whiteIndex: 2,
  },
  {
    key: "N",
    src: "./sounds/C5.mp3",
    note: "C5",
    type: "white",
    whiteIndex: 9,
  },
  {
    key: "M",
    src: "./sounds/A4.mp3",
    note: "A4",
    type: "white",
    whiteIndex: 8,
  },
];

let audio = new Audio();

let white = "";
let black = "";

keys.forEach((elem) => {
  if (elem.type === "white") {
    white += `<div class="note" data-key="${elem.key}" data-src="${elem.src}">
            <h3 class="note-text">${elem.key}</h3>
            <h4 class="key-note">${elem.note}</h4>
        </div>`;
  } else {
    black += `<div class="note accidentals" data-key="${elem.key}" data-src="${elem.src}" style="--i:${elem.whiteIndex}">
            <h3 class="note-text">${elem.key}</h3>
            <h4 class="key-note">${elem.note}</h4>
        </div>`;
  }
});
main.innerHTML = `
    <div class="keyboard">
      ${white}
      ${black}
    </div>
`;

let keyboard = document.querySelector(".keyboard");

let note = document.querySelectorAll(".note");
let noteText = document.querySelectorAll(".note-text");
let keyText = document.querySelectorAll(".key-note");

note.forEach((elem) => {
  elem.addEventListener("mousedown", () => {
    elem.style.backgroundColor = "#d5d5d5ff";
      elem.style.color = elem.classList.contains("accidentals")? "#000000" : "#ffffff";
    let sound = new Audio(elem.getAttribute("data-src"));
    sound.play();
  });
  elem.addEventListener("mouseup", () => {
    elem.style.backgroundColor = elem.classList.contains("accidentals")? "#000000" : "#ffffff";
  });

  elem.addEventListener("touchstart", ()=>{
    elem.style.backgroundColor = "#d5d5d5ff";
    elem.style.color = elem.classList.contains("accidentals")? "#000000" : "#ffffff";
    let sound = new Audio(elem.getAttribute("data-src"));
    sound.play();
  })

  elem.addEventListener("touchend", () => {
    elem.style.backgroundColor = elem.classList.contains("accidentals")? "#000000" : "#ffffff";
  })
});

document.body.addEventListener("keydown", (dets) => {
  if (dets.repeat) return;

  note.forEach((elem) => {
    if (elem.getAttribute("data-key") == dets.key) {
      elem.style.backgroundColor = "#d5d5d5ff";
      let sound = new Audio(elem.getAttribute("data-src"));
      sound.play();
    }
  });
});

document.body.addEventListener("keyup", (dets) => {
  note.forEach((elem) => {
    if (elem.getAttribute("data-key") == dets.key) {
      elem.style.backgroundColor = elem.classList.contains("accidentals")? "#000000" : "#ffffff";
    }
  });
});
