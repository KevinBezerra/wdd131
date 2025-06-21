document.addEventListener('DOMContentLoaded', () => {
    const createCivCard = (civ) => {
        const card = document.createElement('div');
        card.className = 'civ-card';
        card.innerHTML = `
            <img src="${civ.emblem}" alt="${civ.name} Emblem" loading="lazy">
            <h3>${civ.name}</h3>
            <p><strong>Focus:</strong> ${civ.focus}</p>
            <p><strong>Unique Unit:</strong> ${civ.unique_unit}</p>
        `;
        return card;
    };

    const handleMenu = () => {
        const menuButton = document.getElementById('menu-button');
        const nav = document.querySelector('header nav');
        if (menuButton && nav) {
            menuButton.addEventListener('click', () => {
                nav.classList.toggle('open');
                menuButton.textContent = nav.classList.contains('open') ? '✕' : '☰';
            });
        }
    };

    const updateFooter = () => {
        const yearSpan = document.getElementById('current-year');
        const modifiedSpan = document.getElementById('last-modified');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
        if (modifiedSpan) {
            modifiedSpan.textContent = document.lastModified;
        }
    };

    const getCivs = async () => {
        try {
            const response = await fetch('data/civilizations.json');
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            return await response.json();
        } catch (error) {
            console.error('Error fetching civilization data:', error);
            return [];
        }
    };

    const displayAllCivs = (civs) => {
        const gallery = document.getElementById('civ-gallery');
        if (!gallery) return;
        gallery.innerHTML = '';
        civs.forEach(civ => {
            gallery.appendChild(createCivCard(civ));
        });
    };

    const displayFeaturedCivs = (civs) => {
        const container = document.getElementById('featured-civs-container');
        if (!container) return;
        const shuffled = [...civs].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        container.innerHTML = '';
        selected.forEach(civ => {
            container.appendChild(createCivCard(civ));
        });
    };

    const setupFilters = (allCivs) => {
        const filterControls = document.getElementById('filter-controls');
        if (filterControls) {
            filterControls.addEventListener('click', (event) => {
                if (event.target.tagName === 'BUTTON') {
                    document.querySelector('#filter-controls button.active').classList.remove('active');
                    event.target.classList.add('active');
                    const filter = event.target.dataset.filter;
                    const filteredCivs = filter === 'all' ? allCivs : allCivs.filter(civ => civ.focus === filter);
                    displayAllCivs(filteredCivs);
                }
            });
        }
    };

    const handleVisitCounter = () => {
        const proPlayersSection = document.querySelector('.pro-players-section');
        if (!proPlayersSection) return;
        const visitCountElement = document.createElement('p');
        visitCountElement.className = 'visit-counter';
        let count = Number(localStorage.getItem('visitCount')) || 0;
        count++;
        localStorage.setItem('visitCount', count);
        visitCountElement.textContent = `You have visited this site ${count} times.`;
        proPlayersSection.appendChild(visitCountElement);
    };

    const page = window.location.pathname.split("/").pop() || "index.html";

    handleMenu();
    updateFooter();

    getCivs().then(allCivs => {
        if (allCivs.length === 0) return;
        if (page === "index.html") {
            displayFeaturedCivs(allCivs);
            handleVisitCounter();
        } else if (page === "civilizations.html") {
            displayAllCivs(allCivs);
            setupFilters(allCivs);
        }
    });
});