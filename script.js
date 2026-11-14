// Micro‑SaaS Онлайн‑Курсы — JavaScript

const COURSES_DATA = [
    {
        id: 1,
        title: "Excel",
        description: "Создавайте таблицы, формулы и графики за 10 минут.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
        category: "Офис",
        rating: 4.8,
        students: 1240,
        duration: "45 мин",
        instructor: "Анна К."
    },
    {
        id: 2,
        title: "Photoshop",
        description: "Основы работы с Photoshop: слои, маски, фильтры.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=250&fit=crop",
        category: "Дизайн",
        rating: 4.9,
        students: 2100,
        duration: "1 ч 20 мин",
        instructor: "Дмитрий В."
    },
    {
        id: 3,
        title: "Python",
        description: "Pandas, NumPy, Matplotlib — всё для работы с данными.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop",
        category: "Программирование",
        rating: 4.9,
        students: 3200,
        duration: "2 ч 15 мин",
        instructor: "Игорь П."
    },
    {
        id: 4,
        title: "Финансы",
        description: "Основы финансовой грамотности, инвестиции, бюджет.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
        category: "Финансы",
        rating: 4.7,
        students: 1840,
        duration: "1 ч 40 мин",
        instructor: "Сергей К."
    },
    {
        id: 5,
        title: "Копирайтинг",
        description: "Научитесь писать тексты, которые продают: реклама, email, соцсети.",
        price: 17.99,
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop",
        category: "Маркетинг",
        rating: 4.6,
        students: 1320,
        duration: "2 ч 5 мин",
        instructor: "Ольга М."
    }
];

// 1. Рендеринг карточек курсов
function renderCourses() {
    const grid = document.getElementById('courses-grid');
    if (!grid) return;

    grid.innerHTML = COURSES_DATA.map(course => `
        <div class="course-card">
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-content">
                <span class="course-category">${course.category}</span>
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span class="course-rating">⭐ ${course.rating}</span>
                    <span class="course-duration">${course.duration}</span>
                </div>
                <div class="course-footer">
                    <span class="course-price">$${course.price}</span>
                    <a href="#" class="btn btn-primary btn-sm">Купить</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 2. Плавный скролл
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Close mobile menu if open
                const nav = document.getElementById('nav');
                if (nav) nav.classList.remove('active');
            }
        });
    });
}

// 3. FAQ аккордеон
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.parentElement;
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// 4. Бургер-меню
function initBurger() {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active');
    });
}

// 5. Header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderCourses();
    initSmoothScroll();
    initFAQ();
    initBurger();
    initHeaderScroll();
});