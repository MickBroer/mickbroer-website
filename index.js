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

const fadeInDuration = 5000;

const showcase = document.getElementById("showcase");

const projects = {
  eenHardGelag: {
    title: "Een hard gelag",
    year: "2025",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=1949121158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  wrijfMuziek: {
    title: "Wrijf Muziek",
    year: "2024",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=517112095/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  kapwerkzaamheden: {
    title: "Kapwerkzaamheden",
    year: "2023",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=3152483374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  zenderKamers: {
    title: "ZENDER:KAMERS",
    year: "2023",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=4249100957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  zender: {
    title: "ZENDER",
    year: "2022",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=3289086899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  juni2022: {
    title: "juni 2022",
    year: "2022",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=3585803705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  bladeren: {
    title: "bladeren",
    year: "2020",
    description: "",
    iframe: `<iframe src="https://bandcamp.com/EmbeddedPlayer/album=2873350715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  tabaksdrone: {
    title: "tabaksdrone",
    year: "2025",
    description: "",
    iframe: `<iframe src="/assets/pdf/MickBroer-Tabaksdrone.pdf#toolbar=0"></iframe>`
  },
  cirkels: {
    title: "cirkels",
    year: "2024",
    description: "",
    iframe: `<iframe src="/assets/pdf/MickBroer-Cirkels_en_Hoeken.pdf#toolbar=0"></iframe>`
  },
  aaa: {
    title: "aaa",
    year: "2023",
    description: "",
    iframe: `<iframe src="/assets/pdf/MickBroer-a_a_a.pdf#toolbar=0"></iframe>`
  },
  geluidNaarBeeldSynthese: {
    title: "geluidNaarBeeldSynthese",
    year: "2023",
    description: "",
    iframe: `<iframe src="/assets/pdf/Geluid_naar_beeld_synthese_in_de_webbrowser.pdf#toolbar=0"></iframe>`
  },
};

const title = [
  " mickbroer.org", "m ickbroer.org", "mi ckbroer.org", "mic kbroer.org",
  "mick broer.org", "mickb roer.org", "mickbr oer.org", "mickbro er.org",
  "mickbroe r.org", "mickbroer .org", "mickbroer. org", "mickbroer.o rg",
  "mickbroer.or g", "mickbroer.org ", "mickbroer.org ", "mickbroer.or g",
  "mickbroer.o rg", "mickbroer. org", "mickbroer .org", "mickbroe r.org",
  "mickbro er.org", "mickbr oer.org", "mickb roer.org", "mick broer.org",
  "mic kbroer.org", "mi ckbroer.org", "m ickbroer.org", " mickbroer.org"
];
let index = 1;

function animateTitle() {
  index = (index + 1) % title.length;
  document.title = title[index];
  setTimeout(animateTitle, 600);
}

function updateElementStyle(key, isSelected) {
  const el = elements[key].elem;
  if (isSelected) {
    el.style.color = "black";
    el.innerHTML = el.innerHTML.replace("[___]", "[ █ ]");
    elements[key].isSelected = true;
  } else {
    el.style.color = "rgb(132, 116, 116)";
    el.innerHTML = el.innerHTML.replace("[ █ ]", "[___]");
    elements[key].isSelected = false;
  }
}

function resetElements(exceptKey) {
  Object.keys(elements).forEach(key => {
    if (key !== exceptKey && elements[key].isSelected) {
      updateElementStyle(key, false);
    }
  });
}

function renderProject(key) {
  const project = projects[key];
  if (project) {
    showcase.innerHTML = `
      <div class="project fade">
        <p class="text fade">${project.description}</p>
        ${project.iframe}
      </div>
    `;
  } else {
    showcase.innerHTML = `<p class="text fade">[ project niet gevonden ]</p>`;
  }
}

Object.keys(elements).forEach(key => {
  const el = elements[key].elem;

  el.addEventListener("mouseover", () => {
    if (!elements[key].isSelected) {
      el.style.color = "black";
    }
  });

  el.addEventListener("mouseout", () => {
    if (!elements[key].isSelected) {
      el.style.color = "rgb(132, 116, 116)";
    }
  });

  el.addEventListener("click", () => {
    const isSelected = !elements[key].isSelected;
    resetElements(key);
    updateElementStyle(key, isSelected);
    if (isSelected) {
      renderProject(key);
    } else {
      showcase.innerHTML = "";
    }
  });
});

animateTitle();