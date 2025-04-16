const elements = {
  eenHardGelag: { elem: document.getElementById("eenHardGelag"), isSelected: false },
  wrijfMuziek: { elem: document.getElementById("wrijfMuziek"), isSelected: false },
  kapwerkzaamheden: { elem: document.getElementById("kapwerkzaamheden"), isSelected: false },
  zenderKamers: { elem: document.getElementById("zenderKamers"), isSelected: false },
  zender: { elem: document.getElementById("zender"), isSelected: false },
  juni2022: { elem: document.getElementById("juni2022"), isSelected: false },
  bladeren: { elem: document.getElementById("bladeren"), isSelected: false },
  tabaksdrone: { elem: document.getElementById("tabaksdrone"), isSelected: false },
  cirkels: { elem: document.getElementById("cirkels"), isSelected: false },
  aaa: { elem: document.getElementById("aaa"), isSelected: false },
  geluidNaarBeeldSynthese: { elem: document.getElementById("geluidNaarBeeldSynthese"), isSelected: false },
};
const iframe = document.getElementById("showcase");
const title = [
  " mickbroer.org",
  "m ickbroer.org",
  "mi ckbroer.org",
  "mic kbroer.org",
  "mick broer.org",
  "mickb roer.org",
  "mickbr oer.org",
  "mickbro er.org",
  "mickbroe r.org",
  "mickbroer .org",
  "mickbroer. org",
  "mickbroer.o rg",
  "mickbroer.or g",
  "mickbroer.org ",
  "mickbroer.org ",
  "mickbroer.or g",
  "mickbroer.o rg",
  "mickbroer. org",
  "mickbroer .org",
  "mickbroe r.org",
  "mickbro er.org",
  "mickbr oer.org",
  "mickb roer.org",
  "mick broer.org",
  "mic kbroer.org",
  "mi ckbroer.org",
  "m ickbroer.org",
  " mickbroer.org"
];
let index = 1;

function animateTitle() {
  index >= title.length - 1 ? (index = 0) : index++,
    (document.title = title[index]),
    setTimeout("animateTitle()", 600);
}

// Function to update the style of elements
function updateElementStyle(key, isSelected) {
  const element = elements[key].elem;
  if (isSelected) {
    element.style.color = "black";
    element.innerHTML = element.innerHTML.replace("[___]", "[ █ ]");
    elements[key].isSelected = true;
  } else {
    element.style.color = "rgb(132, 116, 116)";
    element.innerHTML = element.innerHTML.replace("[ █ ]", "[___]");
    elements[key].isSelected = false;
  }
}

// Function to reset all elements except the selected one
function resetElements(exceptKey) {
  Object.keys(elements).forEach(key => {
    if (key !== exceptKey && elements[key].isSelected) {
      updateElementStyle(key, false);
    }
  });
}

// Adding event listeners
Object.keys(elements).forEach(key => {
  const element = elements[key].elem;

  // Mouseover event
  element.addEventListener("mouseover", () => {
    if (!elements[key].isSelected) {
      element.style.color = "black";
    }
  });

  // Mouseout event
  element.addEventListener("mouseout", () => {
    if (!elements[key].isSelected) {
      element.style.color = "rgb(132, 116, 116)";
    }
  });

  // Click event
  element.addEventListener("click", () => {
    const isSelected = !elements[key].isSelected;
    resetElements(key); // Reset all elements except the current one
    updateElementStyle(key, isSelected); // Update the current element based on its new state
    iframe.src = isSelected ? `/${key}` : ""; // Update the iframe src only if the element is selected
  });
});

animateTitle();