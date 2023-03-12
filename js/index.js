const clones = (cloneFrom, cloneTo, hasNoChildren, access_name) => {
  const cloneTemp = cloneFrom.cloneNode(true);
  cloneTo.appendChild(cloneTemp);
  if (
    hasNoChildren === false ||
    hasNoChildren === undefined ||
    hasNoChildren === null ||
    hasNoChildren === " " ||
    hasNoChildren === ""
  ) {
    cloneTemp.children[1].innerHTML = access_name;
  } else if (hasNoChildren === true) {
    cloneTemp.innerHTML = access_name;
  }
};

// top hr nav clones
const top_hr = () => {
  let hr_nav = document.querySelector(".horizontal-nav");
  let others = document.querySelector(".othr_divs");

  const hr_navs_names = [
    "Breakdown",
    "Daily Reports",
    "Cargo Operation",
    "Bunker",
    "Time Loss",
    "Port Turn Out",
    "Ballast Tank",
    "Demarrage & Despatch",
    "Voyage Summary",
  ];

  for (let i = 0; i <= hr_navs_names.length - 1; i++) {
    clones(others, hr_nav, true, hr_navs_names[i]);
  }
};

// const SmallScreenSizes = () => {
//   indShipInd.classList.remove("d-none");
//   indShipSec.classList.add("d-none");
// };

// if (screen.width <= 480) {
//   SmallScreenSizes;
// }

const inDcl = () => {
  // individual ship names clones
  let indShipInd = document.querySelector(".ind-shipInd");
  let indShipSec = document.querySelector(".individual_ships");
  let ISTemp = document.querySelector(".example");

  const names = ["Niaz Hossain", "Mortaza", "F.M. Zukov"];

  for (let i = 0; i <= names.length - 1; i++) {
    clones(ISTemp, indShipSec, names[i]);
  }
};

// arrows configs
const arr_config = [
  document.querySelector(".arrow_configActive"),
  document.querySelector(".arrow_config"),
];

const toggleChevron = () => {
  arr_config[1].addEventListener("click", () => {
    if (arr_config[1].src == "img/Vector 175.png") {
      arr_config[1].src = "img/up_arrow.png";
    } else {
      arr_config[1].src = "img/Vector 175.png";
    }
  });

  arr_config[0].addEventListener("click", () => {
    const Elemchild = document.querySelector(".child");
    if (arr_config[0].src == "img/Vector 175.png") {
      arr_config[0].src = "img/up_arrow.png";
      Elemchild.classList.remove("d-none");
    } else {
      arr_config[0].src = "img/Vector 175.png";
      Elemchild.classList.add("d-none");
    }
  });
};

top_hr();
inDcl();
toggleChevron();
