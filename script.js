document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectBoxes = document.querySelectorAll(".project-box");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            projectBoxes.forEach(box => {
                if (filter === "all" || box.getAttribute("data-category") === filter) {
                    box.style.display = "block";
                } else {
                    box.style.display = "none";
                }
            });

            filterButtons.forEach(btn => btn.classList.remove("bg-blue-600", "text-white"));
            this.classList.add("bg-blue-600", "text-white");
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});

document.querySelectorAll(".project-box, .service-box").forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("scale-105", "shadow-lg");
    });

    box.addEventListener("mouseleave", () => {
        box.classList.remove("scale-105", "shadow-lg");
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".animate-on-scroll").forEach(element => {
    observer.observe(element);
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");
    const navbar = document.getElementById("navbar");

    // Efek hover tambahan
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });

        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });

                // Efek fade-in saat berpindah ke bagian baru
                targetElement.style.opacity = "0";
                setTimeout(() => {
                    targetElement.style.opacity = "1";
                    targetElement.style.transition = "opacity 0.8s ease-in-out";
                }, 300);
            }
        });
    });

    // Efek Blur + Shadow saat Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    // Efek Blur + Shadow saat Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
            navbar.style.backdropFilter = "blur(10px)"; // Tambahkan efek blur
            navbar.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)"; // Tambahkan shadow
        } else {
            navbar.classList.remove("scrolled");
            navbar.style.backdropFilter = "none";
            navbar.style.boxShadow = "none";
        }
    });

    // Smooth Scroll untuk Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });

                // Efek fade-in saat berpindah ke bagian baru
                targetElement.style.opacity = "0";
                setTimeout(() => {
                    targetElement.style.opacity = "1";
                    targetElement.style.transition = "opacity 0.8s ease-in-out";
                }, 300);
            }
        });
    });

    // Efek hover untuk navbar
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.3s ease-in-out";
        });

        link.addEventListener("mouseleave", () => {
            link.style.transform = "scale(1)";
        });
    });

    // Animasi Fade In saat Scroll
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadeIn");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".animate-on-scroll").forEach(element => {
        observer.observe(element);
    });
});
