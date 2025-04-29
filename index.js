const elements = {
  eenHardGelag: { elem: document.getElementById("eenHardGelag"), isSelected: false },
  tabaksdrone: { elem: document.getElementById("tabaksdrone"), isSelected: false },
  wrijfMuziek: { elem: document.getElementById("wrijfMuziek"), isSelected: false },
  kapwerkzaamheden: { elem: document.getElementById("kapwerkzaamheden"), isSelected: false },
  zenderKamers: { elem: document.getElementById("zenderKamers"), isSelected: false },
  zender: { elem: document.getElementById("zender"), isSelected: false },
  juni2022: { elem: document.getElementById("juni2022"), isSelected: false },
  bladeren: { elem: document.getElementById("bladeren"), isSelected: false },

};
const fadeInDuration = 5000;

const showcase = document.getElementById("showcase");
const items = document.getElementById("items");
const projects = {
  eenHardGelag: {
    title: "Een hard gelag",
    year: "2025",
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=1949121158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  
  },
  tabaksdrone: {
    title: "Tabaksdrone",
    year: "2025",
    content: `
    <p style="padding-top: 3%; font-family: sans-serif; font-size: small;">
      Compositie voor <i>ademgebaseerde</i> instrumenten (aerofonen), elektronica en sigaretten. Uitvoerenden: Joris van de Sande (sopraan-saxofoon), Lucas van den Berg (Trombone), Daniel Jansen (blokfluit), Mariam Baldé (zang), Marie Wuselwesen (zang), Mick Broer (zang).
    </p>
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mickbroer/video/7477932044257889558" data-video-id="7477932044257889558" style="max-width: 325px;min-width: 325px;" > <section> <a target="_blank" title="@mickbroer" href="https://www.tiktok.com/@mickbroer?refer=embed">@mickbroer</a> <p>Registratie van ‘Tabaksdrone’</p> <a target="_blank" title="♬ original sound - Mick Broer" href="https://www.tiktok.com/music/original-sound-7477932382334454550?refer=embed">♬ original sound - Mick Broer</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    <p style="font-family: sans-serif; font-size: small;">
      Elke uitvoerende krijgt één of meerdere sigaretten. Iedere toon uit de reeks wordt zo lang als mogelijk aangehouden, totdat de uitvoerende
      adem wil halen. Iedere toon begint en eindigt fluisterend. De uitvoerende neemt een hijs van de toegedeelde sigaret. De volgende toon wordt
      ingezet. Wanneer de hele reeks doorlopen is, begint hij of zij opnieuw bij de eerste noot. Elke individuele uitvoerende blijft deze instructies
      doorlopen totdat de sigaret is opgerookt. Mocht de uitvoerende de neiging krijgen om te hoesten, dan wordt dit niet verhuld of onderdrukt.
    </p>
    <img src="/assets/images/tabaksdrone.png" style="width: 100%; max-width: 600px; display: block; margin: auto;" />     
    `
  },
  wrijfMuziek: {
    title: "Wrijf Muziek",
    year: "2024",
    content:`<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=517112095/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  kapwerkzaamheden: {
    title: "Kapwerkzaamheden",
    year: "2023",
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=3152483374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  zenderKamers: {
    title: "ZENDER:KAMERS",
    year: "2023",
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=4249100957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  zender: {
    title: "ZENDER",
    year: "2022",
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=3289086899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  juni2022: {
    title: "juni 2022",
    year: "2022",
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=3585803705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  bladeren: {
    title: "bladeren",
    year: "2020",
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=2873350715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  }
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

  // Altijd eerst oude images weg
  removeRandomImages();

  if (project) {
    showcase.innerHTML = `
      <div class="project fade">
        ${project.content}
      </div>
    `;

    if (key === "tabaksdrone") {
      // TikTok script opnieuw laden
      const existingScript = document.querySelector('script[src*="/assets/libraries/embed.js"]');
      if (existingScript) existingScript.remove();

      const script = document.createElement("script");
      script.src = "/assets/libraries/embed.js";
      script.async = true;
      document.body.appendChild(script);

      placeRandomImages();
    }

  } else {
    showcase.innerHTML = `<p class="text fade">[ project niet gevonden ]</p>`;
  }
}

function removeRandomImages() {
  const images = document.querySelectorAll('.tabaksdrone-image');
  images.forEach(img => {
    img.style.opacity = '0'; // fade out
    setTimeout(() => img.remove(), 5000); // remove after 5s
})
};

function placeRandomImages() {
  const images = ['/assets/images/reactie1.png', '/assets/images/reactie2.png', '/assets/images/reactie3.png',
  '/assets/images/reactie4.png', '/assets/images/reactie5.png', '/assets/images/reactie6.png', '/assets/images/reactie7.png'
];
  const showcaseRect = showcase.getBoundingClientRect();
  const itemsRect = items.getBoundingClientRect();

  images.forEach(src => {
    let img = document.createElement('img');
    img.src = src;
    img.classList.add('random-image', 'tabaksdrone-image');

    img.style.position = "absolute";
    img.style.width = "150px";
    img.style.opacity = "0";
    img.style.transition = "opacity 2s ease";
    img.style.pointerEvents = "none";
    img.style.zIndex = "1000";

    let x, y;
    let maxAttempts = 100;
    let attempt = 0;

    do {
      x = Math.random() * window.innerWidth;
      y = Math.random() * window.innerHeight;
      attempt++;
    } while (
      x > showcaseRect.left - 100 &&
      x < showcaseRect.right - 200 &&
      y > showcaseRect.top - 100 &&
      y < showcaseRect.bottom &&

      x > itemsRect.left + 100 &&
      x < itemsRect.right &&
      y > itemsRect.top - 100 &&
      y < itemsRect.bottom - 60 &&
      attempt < maxAttempts
    );

    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    document.body.appendChild(img);

    // Trigger fade-in
    setTimeout(() => {
      img.style.opacity = "0.8";
    }, 1000);
  });
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