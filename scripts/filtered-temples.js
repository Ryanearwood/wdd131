document.addEventListener('DOMContentLoaded', (event) => {
    const year = new Date().getFullYear();
    document.getElementById('currentyear').textContent = year;
    const lastModifiedDate = document.lastModified;
    document.getElementById('lastModified').textContent = lastModifiedDate;
  
    const menuButton = document.getElementById('menu');
    const navigationLinks = document.querySelectorAll('.navigation a');
    const container = document.querySelector('.container');
  
    menuButton.addEventListener('click', () => {
        menuButton.classList.toggle('open');
        navigationLinks.forEach(link => link.style.display = link.style.display === 'none' ? 'block' : 'none');
    });

  

  const temples = [
      {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
          templeName: "Salt Lake City Utah",
          location: "Salt Lake City, Utah, United States",
          dedicated: "1893, April, 6",
          area: 253015,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake/400x250/salt-lake-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Tokyo Japan",
          location: "Tokyo, Japan",
          dedicated: "1980, October, 27",
          area: 52000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"
      },
      {
          templeName: "Rome Italy",
          location: "Rome, Italy",
          dedicated: "2019, March, 10",
          area: 40000,
          imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-lds-273999-wallpaper.jpg"
      },
      {
          templeName: "Paris France",
          location: "Le Chesnay, France",
          dedicated: "2017, May, 21",
          area: 44000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple1.jpg"
      },
      {
          templeName: "Accra Ghana",
          location: "Accra, Ghana",
          dedicated: "2004, January, 11",
          area: 17000,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple1.jpg"
      },
      {
          templeName: "Hong Kong China",
          location: "Hong Kong, China",
          dedicated: "1996, May, 26",
          area: 21480,
          imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hong-kong-china-temple/hong-kong-china-temple1.jpg"
      }
  ];

  function createImageElement(src, alt) {
    const img = new Image();
    img.onload = function() {
        img.alt = alt;
        img.loading = "lazy";
    };
    img.src = src;
    return img;
}

const criteriaMapping = {
    'old': temple => new Date(temple.dedicated).getFullYear() < 1900,
    'new': temple => new Date(temple.dedicated).getFullYear() > 2000,
    'large': temple => temple.area > 90000,
    'small': temple => temple.area < 10000,
    'default': temple => true
};

function displayTemples(filteredTemples) {
    container.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.className = 'temple-card';
        templeCard.innerHTML = `
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} square feet</p>
        `;
        const img = createImageElement(temple.imageUrl, temple.templeName);
        templeCard.appendChild(img);
        container.appendChild(templeCard);
    });
}

function filterTemples(criteria) {
    const filterFunction = criteriaMapping[criteria] || criteriaMapping.default;
    const filteredTemples = temples.filter(filterFunction);
    displayTemples(filteredTemples);
}

navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const filter = link.getAttribute('data-filter');
        filterTemples(filter);
    });
});

displayTemples(temples);
});