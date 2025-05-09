const elements = {
  eenHardGelag: { isSelected: false },
  tabaksdrone: { isSelected: false },
  wrijfMuziek: { isSelected: false },
  kapwerkzaamheden: { isSelected: false },
  zenderKamers: { isSelected: false },
  zender: { isSelected: false },
  juni2022: { isSelected: false },
  exile: { isSelected: false },
  overhoop: { isSelected: false },
  parra: { isSelected: false },
  bladeren: { isSelected: false },
  event160624: { isSelected: false }
};

const fadeInDuration = 5000;
const reusableImages = [];
const showcase = document.getElementById("showcase");
const items = document.getElementById("items");

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

const projects = {
  event160624: {
    content: `<iframe style="padding-top: 6%" src="https://www.denijverheid.org/agenda/3966-modulation-2" seamless></iframe>`
  },
  eenHardGelag: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=1949121158/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  tabaksdrone: {
    content: `
    <p class="text">
      Compositie voor <i>ademgebaseerde</i> instrumenten (aerofonen), elektronica en sigaretten. Uitvoerenden: Joris van de Sande (sopraan-saxofoon), Lucas van den Berg (Trombone), Daniel Jansen (blokfluit), Mariam Baldé (zang), Marie Wuselwesen (zang), Mick Broer (zang).
    </p>
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@mickbroer/video/7477932044257889558" data-video-id="7477932044257889558" style="max-width: 325px;min-width: 325px;" > <section> <a target="_blank" title="@mickbroer" href="https://www.tiktok.com/@mickbroer?refer=embed">@mickbroer</a> <p>Registratie van ‘Tabaksdrone’</p> <a target="_blank" title="♬ original sound - Mick Broer" href="https://www.tiktok.com/music/original-sound-7477932382334454550?refer=embed">♬ original sound - Mick Broer</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    <p class="text">
      Elke uitvoerende krijgt één of meerdere sigaretten. Iedere toon uit de reeks wordt zo lang als mogelijk aangehouden, totdat de uitvoerende
      adem wil halen. Iedere toon begint en eindigt fluisterend. De uitvoerende neemt een hijs van de toegedeelde sigaret. De volgende toon wordt
      ingezet. Wanneer de hele reeks doorlopen is, begint hij of zij opnieuw bij de eerste noot. Elke individuele uitvoerende blijft deze instructies
      doorlopen totdat de sigaret is opgerookt. Mocht de uitvoerende de neiging krijgen om te hoesten, dan wordt dit niet verhuld of onderdrukt.
    </p>
    <img src="/assets/images/tabaksdrone.png" style="width: 100%; max-width: 600px; display: block; margin: auto;" />     
    `
  },
  wrijfMuziek: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=517112095/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  kapwerkzaamheden: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=3152483374/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  zenderKamers: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=4249100957/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  zender: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=3289086899/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  juni2022: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=3585803705/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  },
  exile: {
    content: `
    <p class="text">
    De filminstallatie <i>Exile is a Jealous State</i>, van Noor Boiten, stelt de relatie tussen kijker en onderwerp ter discussie, in een narratief dat het complexe personage Alexander onderzoekt een jongeman die gedwongen is in afzondering te leven. De film behandelt thema’s als uitsluiting en anders-zijn, en toont Alexanders zoektocht naar een vrijheid waarin het dierlijke en het bovennationale soeverein zijn. 
    De kijker stuurt zijn of haar individuele interpretatie van het verhaal via de ruimtelijke spreiding van de schermen.
    </p>
    <iframe class="youtube" src="https://www.youtube.com/embed/tO6bkIg1nr0?color=white&modestbranding=1&controls=1&rel=0" ...></iframe>
    <p class="text">
    Onderdeel van de groepstentoonstelling <i>STROOM</i> op 2 juni 2022.
    </p>`  },
  overhoop: {
    content: `<iframe style="padding-top: 6%" src="https://ita.nl/en/shows/overhoop/1656268/" seamless></iframe>`
  },
  parra: {
    content: `<iframe style="padding-top: 6%" src="https://ita.nl/en/shows/parra-jr/1655916/" seamless></iframe>`
  },
  bladeren: {
    content: `<iframe style="padding-top: 6%" src="https://bandcamp.com/EmbeddedPlayer/album=2873350715/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless></iframe>`
  }
};

function animateTitle() {
  index = (index + 1) % title.length;
  document.title = title[index];
  setTimeout(animateTitle, 600);
}

function updateElementStyle(key, isSelected) {
  const el = document.getElementById(key); // dynamically fetch element
  if (!el) return;
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
  removeRandomImages();

  if (project) {
    showcase.innerHTML = `
      <div class="project fade">
        ${project.content}
      </div>
    `;

    if (key === "tabaksdrone") {
      if (!document.querySelector('script[src*="assets/libraries/embed.js"]')) {
        const script = document.createElement("script");
        script.src = "https://www.tiktok.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }

      placeRandomImages();
    }
  } else {
    showcase.innerHTML = `<p class="text fade">[ project niet gevonden ]</p>`;
  }
}

function removeRandomImages() {
  reusableImages.forEach(img => {
    img.style.opacity = '0';
    setTimeout(() => {
      img.style.display = 'none';
    }, 2000);
  });
}

function placeRandomImages() {
  if (window.innerWidth <= 767) return;

  const imageSources = [
    '/assets/images/reactie1.png', '/assets/images/reactie2.png', '/assets/images/reactie3.png',
    '/assets/images/reactie4.png', '/assets/images/reactie5.png', '/assets/images/reactie6.png',
    '/assets/images/reactie7.png'
  ];

  const showcaseRect = showcase.getBoundingClientRect();
  const itemsRect = items.getBoundingClientRect();

  imageSources.forEach((src, i) => {
    let img = reusableImages[i];

    if (!img) {
      img = document.createElement('img');
      img.src = src;
      img.classList.add('random-image', 'tabaksdrone-image');

      img.style.position = "absolute";
      img.style.width = "150px";
      img.style.opacity = "0";
      img.style.transition = "opacity 2s ease";
      img.style.pointerEvents = "none";
      img.style.zIndex = "1000";

      document.body.appendChild(img);
      reusableImages.push(img);
    }

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
    img.style.display = "block";

    setTimeout(() => {
      img.style.opacity = "0.8";
    }, 10);
  });
}

function bindItemEvents() {
  Object.keys(elements).forEach(key => {
    const el = document.getElementById(key);
    if (!el) return;

    el.onmouseover = () => {
      if (!elements[key].isSelected) el.style.color = "black";
    };

    el.onmouseout = () => {
      if (!elements[key].isSelected) el.style.color = "rgb(132, 116, 116)";
    };

    el.onclick = () => {
      const isSelected = !elements[key].isSelected;
      resetElements(key);
      updateElementStyle(key, isSelected);
      if (isSelected) {
        renderProject(key);
      } else {
        showcase.innerHTML = "";
      }
    };
  });
}

const categoryTabs = document.querySelectorAll('.category');
const categoryGroups = document.querySelectorAll('.category-group');

categoryTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selected = tab.dataset.category;

    categoryTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    categoryGroups.forEach(group => {
      if (group.dataset.category === selected) {
        group.classList.remove('fade-out');
        group.style.display = 'block';
        requestAnimationFrame(() => {
          group.classList.add('visible');
        });
      } else if (group.classList.contains('visible')) {
        group.classList.add('fade-out');
        group.classList.remove('visible');
    
        setTimeout(() => {
          group.style.display = 'none';
          group.classList.remove('fade-out');
        }, 100);
      } else {
        group.style.display = 'none';
        group.classList.remove('visible');
        group.classList.remove('fade-out');
      }
    });

    showcase.innerHTML = "";
    Object.keys(elements).forEach(key => {
      if (elements[key].isSelected) {
        updateElementStyle(key, false);
      }
    });

    bindItemEvents(); // <- crucial: rebind after visibility changes
  });
});

animateTitle();
bindItemEvents();

const initialCategory = "werk";
document.querySelector(`.category[data-category="${initialCategory}"]`)?.classList.add('active');
document.querySelector(`.category-group[data-category="${initialCategory}"]`)?.classList.add('visible');
// document.querySelector(`.category-group[data-category="${initialCategory}"]`)?.style.display = 'block';