import { renderBlog } from '../components/BlogSection.js';

const blogData = {
  sectionName: 'ОСТАННІ СТАТТІ СЕРГІЯ БОНДАРА',
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

// Run the initialization when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  renderBlog(blogData, 'blog-articles-placeholder');
});