let indShipInd = document.querySelector(".ind-shipInd");
let indShipSec = document.querySelector(".individual_ships");
let ISTemp = document.querySelector(".example");

// let Hresolution,
//   Wresolution = height,
//   width;

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
