import React from "react";

const arcCharacters = document.querySelectorAll(".arc-text");

setInterval(() => {
  arcCharacters.forEach((character, index) => {
    applyTransition(character, 0.5, index);
  });
}, (arcCharacters.length / 2) * 1000);

const applyTransition = (char: Element, interval: number, index: number) => {
  setTimeout(() => {
    char.setAttribute("style", `transform: translateY(-1rem)`);
  }, interval * index);
};
