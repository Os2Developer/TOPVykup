import { renderBlog } from '../components/BlogSection.js';

const blogData = {
  sectionName: 'ОСТАННІ СТАТТІ БЛОГУ',
  articles: [
    {
      carImage: '../img/blog-articles-1-image.jpg',
      date: '01.11.2024',
      question: 'Кому та скільки платити податків за продаж авто?',
      answer: 'Продаж автомобіля може здатися простою справою, але варто пам’ятати про податки...'
    },
    {
      carImage: '../img/blog-articles-2-image.jpg',
      date: '27.08.2024',
      question: 'Де найдешевші автомобілі в Європі',
      answer: 'Якщо ви задаєтесь питанням, де найдешевші авто в Європі, варто розглянути кілька країн'
    },
    {
      carImage: '../img/blog-articles-3-image.jpg',
      date: '05.06.2024',
      question: 'Як обрати найкращий автомобіль для сім’ї?',
      answer: 'Вибір авто для сім’ї залежить від багатьох факторів, таких як безпека...'
    }
  ]
};

// DOM Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  renderBlog(blogData, 'blog-articles-placeholder');

  const isMobile = window.innerWidth <= 767;

  const scrollToTarget = (target) => {
    if (target) {
      const headerHeight = isMobile ? 85 : 100;
      const targetRect = target.getBoundingClientRect();
      const scrollTop = window.scrollY || window.pageYOffset;
      const targetTop = targetRect.top + scrollTop - headerHeight;

      window.scrollTo({
        top: targetTop,
        behavior: 'smooth'
      });
    }
  };

  const navItems = document.querySelectorAll('.content-nav-item span[data-target]');

  navItems.forEach(navItem => {
    navItem.addEventListener('click', (e) => {
      e.preventDefault();

      const targetId = navItem.getAttribute('data-target');

      const targetElement = document.getElementById(targetId);
      scrollToTarget(targetElement);
    });
  });

});
