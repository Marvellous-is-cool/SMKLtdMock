let indShipInd = document.querySelector(".ind-shipInd");
let indShipSec = document.querySelector(".individual_ships");
let ISTemp = document.querySelector(".example");

const cloneIndShips = (access_name) => {
  const cloneTemp = ISTemp.cloneNode(true);
  indShipSec.appendChild(cloneTemp);
  cloneTemp.children[1].innerHTML = access_name;
  console.log(cloneTemp.children[0].children[1]);
};

const SmallScreenSizes = () => {
  indShipInd.classList.remove("d-none");
  indShipSec.classList.add("d-none");
};

if (screen.width <= 480) {
  SmallScreenSizes;
}

const names = ["Niaz Hossain", "Mortaza", "F.M. Zukov"];

for (let i = 0; i <= names.length - 1; i++) {
  cloneIndShips(names[i]);
}

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

toggleChevron();
