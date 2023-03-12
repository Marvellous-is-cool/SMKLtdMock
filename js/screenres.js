let elem = [document.querySelector(".horizontal-nav")];

let screen_width = screen.width;

// ipad 3
const forIpad3 = () => {
  if (screen_width >= 1536 && screen_width <= 1600) {
    for (let i = 7; i <= 10; i++) {
      elem[0].children[i].classList.add("d-none");
    }

    const more_div = document.createElement("div");
    more_div.classList.add("othr_divs_2");
    more_div.classList.add("p-1");
    more_div.innerHTML = "more ";
    elem[0].appendChild(more_div);

    const arrow_right = document.createElement("i");
    arrow_right.classList.add("fa");
    arrow_right.classList.add("fa-chevron-right");
    arrow_right.classList.add("floatin");
    more_div.appendChild(arrow_right);

    // more_div.addEventListener("click", () => {
    //   if (more_div.innerHTML === "more ") {
    //     more_div.innerHTML = "<";
    //     for (let i = 1; i <= 6; i++) {
    //       elem[0].children[i].classList.add("d-none");
    //     }
    //     for (let i = 7; i <= 10; i++) {
    //       elem[0].children[i].classList.remove("d-none");
    //     }

    //     more_div.removeChild(arrow_right);
    //   } else if (more_div.innerHTML == "<") {
    //     more_div.innerHTML = "more ";
    //     for (let i = 1; i <= 6; i++) {
    //       elem[0].children[i].classList.remove("d-none");
    //     }
    //     return forIpad3();
    //   }
    // });
  } else if (screen_width >= 1650 && screen_width <= 2048) {
    for (let i = 0; i <= 10; i++) {
      elem[0].children[i].classList.remove("d-none");
    }
    elem[0].children[11].classList.add("d-none");
  }
};

forIpad3();

// for (let i = 0; i <= 10; i++) {
//   elem[0].children[i].classList.remove("d-none");
// }
