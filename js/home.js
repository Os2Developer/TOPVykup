import { renderBlog } from '../components/BlogSection.js';
import { renderReviews } from '../components/ReviewsSection.js';
import { renderPurchasedCars } from '../components/RepurchasedCarsSection.js';

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

const reviewsData = [
  {
    date: '15.11.2022',
    name: 'Андрій',
    review: 'Скористався викупом авто після ДТП, бо сам не місцевий, був проїздом в Києві. Дякую що допомгли з оформленням документів.'
  },
  {
    date: '19.02.2021',
    name: 'Тарас',
    review: 'Дякую, що викупили моє авто з місця ДТП. Повністю задоволений сервісом: машину евакуювали, провели оцінку та допомогли з оформленням документів.'
  }
];

const repurchasedCarsData = [
  {
    title: 'Ауді Q3 2019',
    description: 'Викуплений за 13 700$',
    image: '../img/repurchased-cars-1-image.jpg'
  },
  {
    title: 'Фіат тіпо ДТП 2018',
    description: 'Викуплений за 7 300$',
    image: '../img/repurchased-cars-2-image.jpg'
  },
  {
    title: 'Фольцвагені гольф 2013',
    description: 'Викуплений за 6 500$',
    image: '../img/repurchased-cars-3-image.jpg'
  },
  {
    title: 'Тойота Камрі 50 2012',
    description: 'Викуплений за 7 000$',
    image: '../img/repurchased-cars-4-image.jpg'
  },
  {
    title: 'Опель Астра 2015',
    description: 'Викуплений за 4 700$',
    image: '../img/repurchased-cars-5-image.jpg'
  },
  {
    title: 'Тойота рав4 2010',
    description: 'Викуплений за 7 500$',
    image: '../img/repurchased-cars-6-image.jpg'
  }, // 2
  {
    title: 'Фольцвагені гольф 2013',
    description: 'Викуплений за 6 500$',
    image: '../img/repurchased-cars-3-image.jpg'
  },
  {
    title: 'Фіат тіпо ДТП 2018',
    description: 'Викуплений за 7 300$',
    image: '../img/repurchased-cars-2-image.jpg'
  },
  {
    title: 'Ауді Q3 2019',
    description: 'Викуплений за 13 700$',
    image: '../img/repurchased-cars-1-image.jpg'
  },
  {
    title: 'Тойота Камрі 50 2012',
    description: 'Викуплений за 7 000$',
    image: '../img/repurchased-cars-4-image.jpg'
  },
  {
    title: 'Опель Астра 2015',
    description: 'Викуплений за 4 700$',
    image: '../img/repurchased-cars-5-image.jpg'
  },
  {
    title: 'Тойота рав4 2010',
    description: 'Викуплений за 7 500$',
    image: '../img/repurchased-cars-6-image.jpg'
  }, // 3
  {
    title: 'Опель Астра 2015',
    description: 'Викуплений за 4 700$',
    image: '../img/repurchased-cars-5-image.jpg'
  },
  {
    title: 'Фіат тіпо ДТП 2018',
    description: 'Викуплений за 7 300$',
    image: '../img/repurchased-cars-2-image.jpg'
  },
  {
    title: 'Ауді Q3 2019',
    description: 'Викуплений за 13 700$',
    image: '../img/repurchased-cars-1-image.jpg'
  },
  {
    title: 'Тойота Камрі 50 2012',
    description: 'Викуплений за 7 000$',
    image: '../img/repurchased-cars-4-image.jpg'
  },
  {
    title: 'Фольцвагені гольф 2013',
    description: 'Викуплений за 6 500$',
    image: '../img/repurchased-cars-3-image.jpg'
  },
  {
    title: 'Тойота рав4 2010',
    description: 'Викуплений за 7 500$',
    image: '../img/repurchased-cars-6-image.jpg'
  },
];

// FAQ
const initFAQ = () => {
  document.querySelectorAll('.common-questions-list-item .common-questions-question-container').forEach(container => {
    container.addEventListener('click', () => {
      const listItem = container.parentElement;
      const answer = listItem.querySelector('.common-questions-answer-container');
      const icon = container.querySelector('img');
      const isOpen = answer.style.maxHeight && answer.style.maxHeight !== '0px';

      icon.style.opacity = '0';
      setTimeout(() => {
        icon.src = isOpen ? "../img/common-questions-list-icon-blue.svg" : "../img/common-questions-list-icon-white.svg";
        icon.style.opacity = '1';
      }, 200);

      answer.style.maxHeight = isOpen ? '0' : `${answer.scrollHeight}px`;
    });
  });
};

// DOM Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  renderReviews(reviewsData, 'reviews-placeholder');
  renderBlog(blogData, 'blog-articles-placeholder');
  renderPurchasedCars(repurchasedCarsData, 'repurchased-cars-container');
  initFAQ();
});
