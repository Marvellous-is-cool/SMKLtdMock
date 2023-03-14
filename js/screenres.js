let elem = [
  document.querySelector(".horizontal-nav"),
  document.querySelector(".top_nav"),
  document.querySelector("body"),
  document.querySelector(".first_row"),
  document.querySelector(".dashboard"),
  document.querySelector(".homeInit"),
  document.querySelector(".close-indc"),
  document.querySelector(".DDIm"),
  document.querySelector(".dropDown"),
  document.querySelector(".close_DDIm"),
];

const MediaExec = (pixel, pixel2) => {
  // small devices
  const smallDev = (wdt) => {
    alert("small device only");
    const site_nameDIV = document.createElement("div");
    site_nameDIV.classList.add("col-sm-3");
    site_nameDIV.classList.add("s_nDIV");
    site_nameDIV.classList.add("p-4");
    site_nameDIV.classList.add("position-fixed");
    site_nameDIV.classList.add("animate__animated");

    const site_nameDivRow = document.createElement("div");
    site_nameDivRow.classList.add("row");

    const site_nameH = document.createElement("h5");
    site_nameH.innerHTML = "SMK LTD.";
    site_nameH.classList.add("h5");
    site_nameH.classList.add("col-sm-3");

    const site_left_nav = document.createElement("div");
    site_left_nav.classList.add("pr-3");
    site_left_nav.classList.add("col-sm-3");

    const site_left_nav_img = document.createElement("img");
    site_left_nav_img.src = "..\\img\\Vector.png";

    if (wdt.matches) {
      // If media query matches
      site_nameDIV.appendChild(site_nameDivRow);
      site_nameDivRow.appendChild(site_nameH);

      site_left_nav.appendChild(site_left_nav_img);
      site_nameDivRow.appendChild(site_left_nav);

      elem[3].insertBefore(site_nameDIV, elem[5]);

      elem[5].classList.remove("position-absolute");
      elem[5].classList.add("col-sm-3");
      elem[5].classList.add("p-5");

      // show left navigation
      site_left_nav.addEventListener("click", () => {
        site_nameDIV.classList.add("animate__fadeOutUp");
        site_nameDIV.classList.remove("animate__fadeInDown");
        elem[6].classList.toggle("d-none");
        elem[1].style.display = "block";
        elem[1].classList.add("animate__fadeInLeft");
        elem[1].classList.remove("animate__fadeOutLeft");
        elem[5].classList.remove("p-5");
        elem[5].classList.add("position-absolute");
        elem[5].style.marginLeft = "21em";
        elem[2].style.overflow = "hidden";
        elem[5].scrollTop = 0;
      });

      elem[6].addEventListener("click", () => {
        site_nameDIV.classList.add("animate__fadeInDown");
        site_nameDIV.classList.remove("animate__fadeOutUp");
        elem[6].classList.toggle("d-none");
        elem[1].style.display = "none";
        elem[1].classList.remove("animate__fadeInLeft");
        elem[1].classList.add("animate__fadeOutLeft");
        elem[5].classList.add("p-5");
        elem[5].classList.remove("position-absolute");
        elem[5].style.marginLeft = "auto";
        elem[2].style.overflowY = "scroll";
      });

      elem[7].addEventListener("click", () => {
        elem[8].classList.remove("d-none");
        elem[9].classList.remove("d-none");
        elem[7].classList.add("d-none");
        elem[7].classList.add("animate__fadeOut");
        elem[8].classList.add("animate__fadeIn");
        elem[9].classList.add("animate__fadeIn");

        elem[7].classList.remove("animate__fadeIn");
        elem[8].classList.remove("animate__fadeOut");
        elem[9].classList.remove("animate__fadeOut");
      });
      elem[9].addEventListener("click", () => {
        elem[8].classList.add("d-none");
        elem[9].classList.add("d-none");
        elem[7].classList.remove("d-none");

        elem[7].classList.remove("animate__fadeOut");
        elem[7].classList.add("animate__fadeIn");

        elem[8].classList.remove("animate__fadeIn");
        elem[8].classList.add("animate__fadeOut");

        elem[9].classList.remove("animate__fadeIn");
        elem[9].classList.add("animate__fadeOut");
      });
    } else {
      site_nameDIV.remove();
    }
  };
  // small devices
  const medDev = (wdt) => {
    alert("medium device only");
    elem[4].style.width = "32em";
    const site_nameDIV = document.createElement("div");
    site_nameDIV.classList.add("col-sm-3");
    site_nameDIV.classList.add("s_nDIV");
    site_nameDIV.classList.add("p-4");
    site_nameDIV.classList.add("position-fixed");
    site_nameDIV.classList.add("animate__animated");

    const site_nameDivRow = document.createElement("div");
    site_nameDivRow.classList.add("row");

    const site_nameH = document.createElement("h5");
    site_nameH.innerHTML = "SMK LTD.";
    site_nameH.classList.add("h5");
    site_nameH.classList.add("col-sm-3");

    const site_left_nav = document.createElement("div");
    site_left_nav.classList.add("pr-3");
    site_left_nav.classList.add("col-sm-3");

    const site_left_nav_img = document.createElement("img");
    site_left_nav_img.src = "..\\img\\Vector.png";

    if (wdt.matches) {
      // If media query matches
      site_nameDIV.appendChild(site_nameDivRow);
      site_nameDivRow.appendChild(site_nameH);

      site_left_nav.appendChild(site_left_nav_img);
      site_nameDivRow.appendChild(site_left_nav);

      elem[3].insertBefore(site_nameDIV, elem[5]);

      elem[5].classList.remove("position-absolute");
      elem[5].classList.add("col-sm-3");
      elem[5].classList.add("p-5");

      // show left navigation
      site_left_nav.addEventListener("click", () => {
        site_nameDIV.classList.add("animate__fadeOutUp");
        site_nameDIV.classList.remove("animate__fadeInDown");
        elem[6].classList.toggle("d-none");
        elem[1].style.display = "block";
        elem[1].classList.add("animate__fadeInLeft");
        elem[1].classList.remove("animate__fadeOutLeft");
        elem[5].classList.remove("p-5");
        elem[5].classList.add("position-absolute");
        elem[5].style.marginLeft = "21em";
        elem[4].style.overflowX = "hidden";
        elem[4].style.overflowY = "hidden";
        elem[4].scrollTop = 0;
      });

      elem[6].addEventListener("click", () => {
        site_nameDIV.classList.add("animate__fadeInDown");
        site_nameDIV.classList.remove("animate__fadeOutUp");
        elem[6].classList.toggle("d-none");
        elem[1].style.display = "none";
        elem[1].classList.remove("animate__fadeInLeft");
        elem[1].classList.add("animate__fadeOutLeft");
        elem[5].classList.add("p-5");
        elem[5].classList.remove("position-absolute");
        elem[5].style.marginLeft = "auto";
        elem[4].style.overflowX = "hidden";
        elem[4].style.overflowY = "scroll";
        elem[4].scrollTop = 0;
      });

      // show up bar
      elem[7].addEventListener("click", () => {
        elem[8].classList.remove("d-none");
        elem[9].classList.remove("d-none");
        elem[7].classList.add("d-none");
        elem[7].classList.add("animate__fadeOut");
        elem[8].classList.add("animate__fadeIn");
        elem[9].classList.add("animate__fadeIn");

        elem[7].classList.remove("animate__fadeIn");
        elem[8].classList.remove("animate__fadeOut");
        elem[9].classList.remove("animate__fadeOut");
        elem[4].classList.add("dashb");
        elem[4].classList.remove("dasha");
        elem[4].scrollTop = 0;
      });

      const hide_nav = (numba) => {
        elem[8].classList.add("d-none");
        elem[numba].classList.add("d-none");
        elem[7].classList.remove("d-none");

        elem[7].classList.remove("animate__fadeOut");
        elem[7].classList.add("animate__fadeIn");

        elem[8].classList.remove("animate__fadeIn");
        elem[8].classList.add("animate__fadeOut");

        elem[numba].classList.remove("animate__fadeIn");
        elem[numba].classList.add("animate__fadeOut");
        elem[4].classList.add("dasha");
        elem[4].classList.remove("dashb");
        elem[4].scrollTop = 0;
      };

      elem[9].addEventListener("click", () => {
        hide_nav(9);
      });
    } else {
      site_nameDIV.remove();
    }
  };
  let width = window.matchMedia(
    `(min-width: ${pixel}px) and (max-width: ${pixel2}px)`
  );

  if (pixel == 320 && pixel2 == 480) {
    smallDev(width);
    width.addListener(smallDev);
  } else if (pixel == 481 && pixel2 == 576) {
    medDev(width);
    width.addListener(medDev);
  }
};

MediaExec(320, 480);
MediaExec(481, 576);
// MediaExec(575, 767);

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
