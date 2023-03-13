let elem = [
  document.querySelector(".horizontal-nav"),
  document.querySelector(".top_nav"),
  document.querySelector("body"),
  document.querySelector(".first_row"),
  document.querySelector(".dashboard"),
  document.querySelector(".homeInit"),
];

const MediaExec = (pixel, pixel2) => {
  // small devices
  const smallDev = (wdt) => {
    const site_nameDIV = document.createElement("div");
    site_nameDIV.classList.add("col-sm-3");
    site_nameDIV.classList.add("s_nDIV");
    site_nameDIV.classList.add("p-4");
    site_nameDIV.classList.add("position-fixed");
    site_nameDIV.classList.add("align-items-start");

    const site_nameH = document.createElement("h5");
    site_nameH.innerHTML = "SMK LTD.";
    site_nameH.classList.add("h5");

    //  <div class="col img_div">
    // <img src="img/Vector.png" alt="" class="" />
    // </div>

    const site_left_nav_img = document.createElement("img");
    site_left_nav_img.classList.add("mr-3");
    site_left_nav_img.src = "..img\\Vector.png";

    if (wdt.matches) {
      // If media query matches
      site_nameDIV.appendChild(site_nameH);
      elem[3].insertBefore(site_nameDIV, elem[5]);

      elem[5].classList.remove("position-absolute");
      elem[5].classList.add("col-sm-3");
      elem[5].classList.add("p-5");
    } else {
      site_nameDIV.remove();
    }
  };

  let width = window.matchMedia(
    `(min-width: ${pixel}px) and (max-width: ${pixel2}px)`
  );
  smallDev(width);
  width.addListener(smallDev);
};

MediaExec(320, 480);

// // ipad 3
// const forIpad3 = () => {
//   if (screen_width >= 1536 && screen_width <= 1600) {
//     for (let i = 7; i <= 10; i++) {
//       elem[0].children[i].classList.add("d-none");
//     }

//     const more_div = document.createElement("div");
//     more_div.classList.add("othr_divs_2");
//     more_div.classList.add("p-1");
//     more_div.innerHTML = "more ";
//     elem[0].appendChild(more_div);

//     const arrow_right = document.createElement("i");
//     arrow_right.classList.add("fa");
//     arrow_right.classList.add("fa-chevron-right");
//     arrow_right.classList.add("floatin");
//     more_div.appendChild(arrow_right);

//     // more_div.addEventListener("click", () => {
//     //   if (more_div.innerHTML === "more ") {
//     //     more_div.innerHTML = "<";
//     //     for (let i = 1; i <= 6; i++) {
//     //       elem[0].children[i].classList.add("d-none");
//     //     }
//     //     for (let i = 7; i <= 10; i++) {
//     //       elem[0].children[i].classList.remove("d-none");
//     //     }

//     //     more_div.removeChild(arrow_right);
//     //   } else if (more_div.innerHTML == "<") {
//     //     more_div.innerHTML = "more ";
//     //     for (let i = 1; i <= 6; i++) {
//     //       elem[0].children[i].classList.remove("d-none");
//     //     }
//     //     return forIpad3();
//     //   }
//     // });
//   } else if (screen_width >= 1650 && screen_width <= 2048) {
//     for (let i = 0; i <= 10; i++) {
//       elem[0].children[i].classList.remove("d-none");
//     }
//     elem[0].children[11].classList.add("d-none");
//   }
// };

// forIpad3();

// // for (let i = 0; i <= 10; i++) {
// //   elem[0].children[i].classList.remove("d-none");
// // }
