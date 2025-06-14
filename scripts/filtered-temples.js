document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {
        menuButton.addEventListener("click", () => {
            navMenu.classList.toggle("open");
            menuButton.innerHTML = navMenu.classList.contains("open") ? "&times;" : "&#9776;";
        });
    }

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }

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
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
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
            templeName: "Fortaleza Brazil",
            location: "Fortaleza, Ceará, Brazil",
            dedicated: "2019, June, 2",
            area: 36000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-11029.jpg"
        },
        {
            templeName: "Rome Italy",
            location: "Rome, Italy",
            dedicated: "2019, March, 10",
            area: 40000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-43513.jpg"
        },
        {
            templeName: "Provo City Center",
            location: "Provo, Utah, United States",
            dedicated: "2016, March, 20",
            area: 85084,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-11074.jpg"
        }
    ];

    const albumContainer = document.querySelector(".album");
    const pageTitle = document.querySelector(".page-title");

    function createTempleCard(temple) {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = "lazy"; // Native lazy loading 

        const figcaption = document.createElement("figcaption");
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        `;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        albumContainer.appendChild(figure);
    }

    function displayTemples(filteredTemples) {
        albumContainer.innerHTML = "";
        filteredTemples.forEach(createTempleCard);
    }

    // Navigation event listeners
    document.getElementById("home").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Home";
        displayTemples(temples);
    });

    document.getElementById("old").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Old Temples (before 1900)";
        displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
    });

    document.getElementById("new").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "New Temples (after 2000)";
        displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
    });

    document.getElementById("large").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Large Temples (> 90,000 sq ft)";
        displayTemples(temples.filter(temple => temple.area > 90000));
    });

    document.getElementById("small").addEventListener("click", (e) => {
        e.preventDefault();
        pageTitle.textContent = "Small Temples (< 10,000 sq ft)";
        displayTemples(temples.filter(temple => temple.area < 10000));
    });

    // Initially display all temples
    displayTemples(temples);
});