/* =========================================================
   PERSONAL PORTFOLIO INTERACTION LOGIC
   Author: Vincent Hagan
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Mobile Navigation Toggle ---
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links");

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener("click", () => {
            navLinks.classList.toggle("active");
            const icon = mobileMenuBtn.querySelector("i");
            if (icon) {
                icon.classList.toggle("fa-bars");
                icon.classList.toggle("fa-xmark");
            }
        });

        // Close navigation menu when clicking an anchor link
        navLinks.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
                const icon = mobileMenuBtn.querySelector("i");
                if (icon) {
                    icon.classList.add("fa-bars");
                    icon.classList.remove("fa-xmark");
                }
            });
        });
    }

    // --- 2. Dark/Light Theme Switcher with LocalStorage ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
        document.documentElement.setAttribute("data-theme", storedTheme);
        updateThemeIcon(storedTheme);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", () => {
            const currentTheme = document.documentElement.getAttribute("data-theme");
            const newTheme = currentTheme === "dark" ? "light" : "dark";

            document.documentElement.setAttribute("data-theme", newTheme);
            localStorage.setItem("theme", newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeToggleBtn) return;
        const icon = themeToggleBtn.querySelector("i");
        if (icon) {
            if (theme === "dark") {
                icon.className = "fa-solid fa-sun";
            } else {
                icon.className = "fa-solid fa-moon";
            }
        }
    }

    // --- 3. Scroll Progress Bar & Active Section Highlighting ---
    const progressBar = document.getElementById("scroll-progress");
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-links a");

    window.addEventListener("scroll", () => {
        // Calculate scroll progress percentage
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        if (progressBar) {
            progressBar.style.width = `${scrollPercent}%`;
        }

        // Highlight active section link
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(item => {
            item.classList.remove("active");
            if (item.getAttribute("href") === `#${currentSectionId}`) {
                item.classList.add("active");
            }
        });
    });

    // --- 4. Project Preview Modal Window ---
    const modal = document.getElementById("project-modal");
    const modalClose = document.getElementById("modal-close");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-desc");
    const modalTags = document.getElementById("modal-tags");

    document.querySelectorAll(".modal-trigger").forEach(button => {
        button.
        addEventListener("click", (e) => {
            e.preventDefault();
            const title = button.getAttribute("data-title");
            const desc = button.getAttribute("data-desc");
            const tags = button.getAttribute("data-tags").split(",");

            if (modalTitle) modalTitle.textContent = title;
            if (modalDesc) modalDesc.textContent = desc;

            if (modalTags) {
                modalTags.innerHTML = "";
                tags.forEach(tag => {
                    const tagSpan = document.createElement("span");
                    tagSpan.textContent = tag.trim();
                    modalTags.appendChild(tagSpan);
                });
            }

            if (modal) {
                modal.classList.add("active");
                modal.setAttribute("aria-hidden", "false");
            }
        });
    });

    if (modalClose && modal) {
        modalClose.addEventListener("click", closeModal);
        modal.addEventListener("click", (e) => {
            if (e.target === modal) closeModal();
        });
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove("active");
            modal.setAttribute("aria-hidden", "true");
        }
    }
});