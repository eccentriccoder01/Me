let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let sections = document.querySelectorAll('section[id]');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}

const filterButtons = document.querySelectorAll('.filter-item');
const posts = document.querySelectorAll('.post');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        posts.forEach(post => {
        if (filter === 'all' || post.classList.contains(filter)) {
            post.style.removeProperty('display');
        } else {
            post.style.display = 'none';
        }
        });

        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const loadMoreBtn = document.getElementById('loadMoreCerts');
    const loadAllBtn = document.getElementById('loadAllCerts');
    const showLessBtn = document.getElementById('showLessCerts');
    const certificationCards = document.querySelectorAll('.certifications-container .certification-card');
    const initialCertsToShow = 5;
    const certsPerLoad = 5;
    let currentlyVisibleCerts = initialCertsToShow;
    function updateCertDisplay() {
        certificationCards.forEach((card, index) => {
            if (index < currentlyVisibleCerts) {
                card.classList.remove('hidden-cert');
            } else {
                card.classList.add('hidden-cert');
            }
        });

        const totalCerts = certificationCards.length;
        const allVisible = currentlyVisibleCerts >= totalCerts;
        const partiallyExpanded = currentlyVisibleCerts > initialCertsToShow && !allVisible;
        loadMoreBtn.classList.toggle('hidden-cert', allVisible);
        loadAllBtn.classList.toggle('hidden-cert', allVisible);
        showLessBtn.classList.toggle('hidden-cert', currentlyVisibleCerts === initialCertsToShow);
    }

    updateCertDisplay();
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentlyVisibleCerts += certsPerLoad;
        updateCertDisplay();
    });

    loadAllBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentlyVisibleCerts = certificationCards.length;
        updateCertDisplay();
    });

    showLessBtn.addEventListener('click', (e) => {
        e.preventDefault();
        currentlyVisibleCerts = initialCertsToShow;
        updateCertDisplay();
        const section = document.getElementById('certifications');
        window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' });
    });
});