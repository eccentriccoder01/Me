// Menu Icon Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}

// Scroll Sections Active Link
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
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if(activeLink) {
                activeLink.classList.add('active');
            }
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    // Sticky Header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close menu on scroll
    if(menuIcon) {
        menuIcon.classList.remove('bx-x');
    }
    if(navbar) {
        navbar.classList.remove('active');
    }

    // Footer Animation
    let footer = document.querySelector('footer');
    if(footer) {
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    }
}

// Project Filtering System
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-item');
    const projectContainers = document.querySelectorAll('.project-container');

    if(filterButtons.length === 0 || projectContainers.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');

            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            // Filter project containers (not just posts)
            projectContainers.forEach(container => {
                const post = container.querySelector('.post');
                
                if (!post) return;

                if (filter === 'all') {
                    // Show all
                    container.style.display = 'flex';
                    post.style.display = 'flex';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transform = 'scale(1)';
                    }, 10);
                } else if (post.classList.contains(filter)) {
                    // Show matching
                    container.style.display = 'flex';
                    post.style.display = 'flex';
                    setTimeout(() => {
                        post.style.opacity = '1';
                        post.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Hide non-matching
                    post.style.opacity = '0';
                    post.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        post.style.display = 'none';
                        container.style.display = 'none'; // Hide container too
                    }, 300);
                }
            });

            // Scroll to projects section smoothly
            const portfolioSection = document.getElementById('portfolio');
            if(portfolioSection) {
                window.scrollTo({
                    top: portfolioSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Certifications Load More/Less System
function initCertifications() {
    const loadMoreBtn = document.getElementById('loadMoreCerts');
    const loadAllBtn = document.getElementById('loadAllCerts');
    const showLessBtn = document.getElementById('showLessCerts');
    const certificationCards = document.querySelectorAll('.certifications-container .certification-card');
    
    if(!certificationCards.length) return;

    const initialCertsToShow = 6;
    const certsPerLoad = 6;
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

        if(loadMoreBtn) loadMoreBtn.classList.toggle('hidden-cert', allVisible);
        if(loadAllBtn) loadAllBtn.classList.toggle('hidden-cert', allVisible);
        if(showLessBtn) showLessBtn.classList.toggle('hidden-cert', currentlyVisibleCerts === initialCertsToShow);
    }

    updateCertDisplay();

    if(loadMoreBtn) {
        loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentlyVisibleCerts += certsPerLoad;
            updateCertDisplay();
        });
    }

    if(loadAllBtn) {
        loadAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentlyVisibleCerts = certificationCards.length;
            updateCertDisplay();
        });
    }

    if(showLessBtn) {
        showLessBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentlyVisibleCerts = initialCertsToShow;
            updateCertDisplay();
            const section = document.getElementById('certifications');
            if(section) {
                window.scrollTo({ top: section.offsetTop - 100, behavior: 'smooth' });
            }
        });
    }
}

// Badge Gallery Load More System
function initBadgeGallery() {
    const loadMoreBadgesBtn = document.getElementById('loadMoreBadges');
    const showLessBadgesBtn = document.getElementById('showLessBadges');
    const badgeItems = document.querySelectorAll('.badge-gallery .badge-item');

    if(!badgeItems.length) return;

    const initialBadgesToShow = 10;
    let allBadgesVisible = false;
    badgeItems.forEach((badge, index) => {
        if(index >= initialBadgesToShow) {
            badge.classList.add('hidden-badge');
        }
    });

    if(loadMoreBadgesBtn) {
        loadMoreBadgesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if(!allBadgesVisible) {
                // Show all badges
                badgeItems.forEach(badge => {
                    badge.classList.remove('hidden-badge');
                });
                loadMoreBadgesBtn.innerHTML = '<i class="bx bx-chevron-up"></i> Show Less';
                if(showLessBadgesBtn) showLessBadgesBtn.classList.remove('hidden-badge');
                allBadgesVisible = true;
            } else {
                badgeItems.forEach((badge, index) => {
                    if(index >= initialBadgesToShow) {
                        badge.classList.add('hidden-badge');
                    }
                });
                loadMoreBadgesBtn.innerHTML = '<i class="bx bx-chevron-down"></i> View More Badges';
                if(showLessBadgesBtn) showLessBadgesBtn.classList.add('hidden-badge');
                allBadgesVisible = false;

                // Scroll to skills section
                const skillsSection = document.getElementById('skills');
                if(skillsSection) {
                    window.scrollTo({ top: skillsSection.offsetTop - 100, behavior: 'smooth' });
                }
            }
        });
    }

    if(showLessBadgesBtn) {
        showLessBadgesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            badgeItems.forEach((badge, index) => {
                if(index >= initialBadgesToShow) {
                    badge.classList.add('hidden-badge');
                }
            });
            
            if(loadMoreBadgesBtn) {
                loadMoreBadgesBtn.innerHTML = '<i class="bx bx-chevron-down"></i> View More Badges';
            }
            showLessBadgesBtn.classList.add('hidden-badge');
            allBadgesVisible = false;

            const skillsSection = document.getElementById('skills');
            if(skillsSection) {
                window.scrollTo({ top: skillsSection.offsetTop - 100, behavior: 'smooth' });
            }
        });
    }
}

// Toggle Media Gallery in Experience Section
function toggleMedia(button) {
    const content = button.closest('.content');
    if(!content) return;

    const mediaGallery = content.querySelector('.media-gallery');
    if(!mediaGallery) return;

    if(mediaGallery.classList.contains('hidden')) {
        mediaGallery.classList.remove('hidden');
        button.innerHTML = '<i class="bx bx-hide"></i> Hide Media';
    } else {
        mediaGallery.classList.add('hidden');
        button.innerHTML = '<i class="bx bx-image"></i> View Media';
    }
}

// Toggle Badge Collection in Events
function toggleBadgeCollection(header) {
    const badgesCollection = header.closest('.badges-collection');
    if(!badgesCollection) return;

    const hiddenRow = badgesCollection.querySelector('.hidden-badges-row');
    const toggleIcon = header.querySelector('.toggle-icon');

    if(hiddenRow) {
        if(hiddenRow.classList.contains('show')) {
            hiddenRow.classList.remove('show');
            if(toggleIcon) toggleIcon.style.transform = 'rotate(0deg)';
        } else {
            hiddenRow.classList.add('show');
            if(toggleIcon) toggleIcon.style.transform = 'rotate(180deg)';
        }
    }

    header.classList.toggle('active');
}

// Toggle All Badges in Events Badge Collection
function toggleAllBadges(button) {
    const badgesCollection = button.closest('.badges-collection');
    if(!badgesCollection) return;

    const hiddenRow = badgesCollection.querySelector('.hidden-badges-row');
    
    if(hiddenRow) {
        if(hiddenRow.classList.contains('show')) {
            hiddenRow.classList.remove('show');
            button.innerHTML = '<i class="bx bx-chevron-down"></i> View All Badges';
        } else {
            hiddenRow.classList.add('show');
            button.innerHTML = '<i class="bx bx-chevron-up"></i> Show Less Badges';
        }
    }
}

// Image Modal for Media Items (Click to enlarge)
function initImageModal() {
    const mediaItems = document.querySelectorAll('.media-item, .event-media-item');
    
    mediaItems.forEach(item => {
        item.addEventListener('click', function() {
            // Create modal
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                cursor: pointer;
            `;

            const img = document.createElement('img');
            img.src = this.src;
            img.alt = this.alt;
            img.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                object-fit: contain;
                border-radius: 1rem;
                box-shadow: 0 0 3rem rgba(173, 40, 49, 0.5);
            `;

            modal.appendChild(img);
            document.body.appendChild(modal);

            modal.addEventListener('click', () => {
                modal.remove();
            });
        });
    });
}

// Smooth Scroll for All Internal Links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if(href === '#' || href === '') return;

            e.preventDefault();
            const target = document.querySelector(href);
            
            if(target) {
                window.scrollTo({
                    top: target.offsetTop - 100,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                if(menuIcon) menuIcon.classList.remove('bx-x');
                if(navbar) navbar.classList.remove('active');
            }
        });
    });
}

// Initialize Scroll Animations
function initScrollAnimations() {
    let sections = document.querySelectorAll('section[id]');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 100;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => links.classList.remove('active'));
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                sec.classList.add('show-animate');
            } else {
                sec.classList.remove('show-animate');
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);

        let footer = document.querySelector('footer');
        footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
    };
}

initScrollAnimations();

// Load Section Function
function loadSection(file, targetId) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            const target = document.getElementById(targetId);
            if(target) {
                target.innerHTML = data;
                
                // Re-initialize all interactive features after loading
                setTimeout(() => {
                    initScrollAnimations();
                    initProjectFiltering();
                    initCertifications();
                    initBadgeGallery();
                    initImageModal();
                    window.dispatchEvent(new Event('scroll'));
                }, 100);
            }
        })
        .catch(error => console.error("Error loading content:", error));
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load modular sections
    loadSection("experience.html", "experience-section");
    loadSection("skills.html", "skills-section");
    loadSection("certifications.html", "certifications-section");
    loadSection("events.html", "events-section");
    loadSection("projects.html", "projects-section");

    // Initialize features after a delay to ensure sections are loaded
    setTimeout(() => {
        initScrollAnimations();
        initSmoothScroll();
        initProjectFiltering();
        initCertifications();
        initBadgeGallery();
        initImageModal();
        
        // Trigger scroll event to initialize section animations
        window.dispatchEvent(new Event('scroll'));
    }, 500);
});

// Add CSS transition for smooth project filtering
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = `
        .post {
            opacity: 1;
            transform: scale(1);
            transition: opacity 0.3s ease, transform 0.3s ease, display 0.3s ease;
        }
        
        .post.hide {
            opacity: 0;
            transform: scale(0.8);
        }
    `;
    document.head.appendChild(style);
});

// Global functions to be accessible from HTML onclick attributes
window.toggleMedia = toggleMedia;
window.toggleBadgeCollection = toggleBadgeCollection;
window.toggleAllBadges = toggleAllBadges;