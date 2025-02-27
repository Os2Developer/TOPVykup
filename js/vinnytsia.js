import { renderReviews } from '../components/ReviewsSection.js';
import { renderPurchasedCars } from '../components/RepurchasedCarsSection.js';

const reviewsData = [
  {
    date: '15.11.2022',
    name: 'Андрій',
    review: 'Хочу продать свою машину опель кадет 300₴. Не на ходу.'
  },
];

const repurchasedCarsData = [
  {
    title: 'Нісан жук 2012',
    description: 'Викуплений за 9 500$',
    image: '../img/vinnytsia-repurchased-cars-1-image.png'
  },
  {
    title: 'Део Ланос 2007',
    description: 'Викуплений за 1 400$',
    image: '../img/vinnytsia-repurchased-cars-2-image.png'
  },
  {
    title: 'Renge Rover 2011 бенз',
    description: 'Викуплений за 22 500$',
    image: '../img/vinnytsia-repurchased-cars-3-image.png'
  },
  {
    title: 'Renge Rover 2011 бенз',
    description: 'Викуплений за 22 500$',
    image: '../img/vinnytsia-repurchased-cars-4-image.png'
  },
  {
    title: 'Мазда 6 2010',
    description: 'Викуплений за 4 500$',
    image: '../img/vinnytsia-repurchased-cars-5-image.png'
  },
  {
    title: 'Ауді А6 2001',
    description: 'Викуплений за 2 500$',
    image: '../img/vinnytsia-repurchased-cars-6-image.png'
  }, // 2
  {
    title: 'Renge Rover 2011 бенз',
    description: 'Викуплений за 22 500$',
    image: '../img/vinnytsia-repurchased-cars-3-image.png'
  },
  {
    title: 'Део Ланос 2007',
    description: 'Викуплений за 1 400$',
    image: '../img/vinnytsia-repurchased-cars-2-image.png'
  },
  {
    title: 'Нісан жук 2012',
    description: 'Викуплений за 9 500$',
    image: '../img/vinnytsia-repurchased-cars-1-image.png'
  },
  {
    title: 'Renge Rover 2011 бенз',
    description: 'Викуплений за 22 500$',
    image: '../img/vinnytsia-repurchased-cars-4-image.png'
  },
  {
    title: 'Мазда 6 2010',
    description: 'Викуплений за 4 500$',
    image: '../img/vinnytsia-repurchased-cars-5-image.png'
  },
  {
    title: 'Ауді А6 2001',
    description: 'Викуплений за 2 500$',
    image: '../img/vinnytsia-repurchased-cars-6-image.png'
  }, // 3
  {
    title: 'Мазда 6 2010',
    description: 'Викуплений за 4 500$',
    image: '../img/vinnytsia-repurchased-cars-5-image.png'
  },
  {
    title: 'Део Ланос 2007',
    description: 'Викуплений за 1 400$',
    image: '../img/vinnytsia-repurchased-cars-2-image.png'
  },
  {
    title: 'Нісан жук 2012',
    description: 'Викуплений за 9 500$',
    image: '../img/vinnytsia-repurchased-cars-1-image.png'
  },
  {
    title: 'Renge Rover 2011 бенз',
    description: 'Викуплений за 22 500$',
    image: '../img/vinnytsia-repurchased-cars-4-image.png'
  },
  {
    title: 'Renge Rover 2011 бенз',
    description: 'Викуплений за 22 500$',
    image: '../img/vinnytsia-repurchased-cars-3-image.png'
  },
  {
    title: 'Ауді А6 2001',
    description: 'Викуплений за 2 500$',
    image: '../img/vinnytsia-repurchased-cars-6-image.png'
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

document.addEventListener('DOMContentLoaded', () => {
  renderReviews(reviewsData, 'reviews-placeholder');
  renderPurchasedCars(repurchasedCarsData, 'repurchased-cars-container');
  initFAQ();
});
