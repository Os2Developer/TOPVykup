import { renderReviews } from '../components/ReviewsSection.js';
import { renderPurchasedCars } from '../components/RepurchasedCarsSection.js';

const reviewsData = [
  {
    date: '17.12.2022',
    name: 'Олег',
    review: `
    Знайшов компанію по запиту “Викуп авто після ДТП Львів”. У мене був Ford Focus 2014 року,
    під час дощу я не впорався з керуванням і мене занесло, були пошкоджені ліва частина, двері
    передні і задні, заднє ліве крило, тріснув бампер і ще купа дрібних пошкоджень. Подзвонив в
    Top Vykup пояснив все, ціну звичайно трохи скинули але я був до цього готовий в автовикупах
    так завжди, це всі знають. Ще збирався з дружиною на наступний день за кордон, хлопці увійшли
    у становище, приїхали вже через дві години після дзвінка. Ще годину зайняло оформлення, переказ
    грошей. Для тих кому як мені треба терміново – можу сміливо рекомендувати`
  },
  {
    date: '09.02.2021',
    name: 'Станіслав',
    review: ` 
    Считаю, что мне очень повезло, что во Львове есть представитель компании ТопВыкуп.
    Договорились быстро на взаимовыгодную цену. Оформление бумажек заняло от силы часа полтора.
    Никуда ехать не пришлось, приехали ко мне домой. Для сведения — продавал Шкоду Фабиа 20212,
    на ходу, не была в ДТП, не перекрашена`
  },
  {
    date: '25.02.2021',
    name: 'Віталій',
    review: `
    Сьогодні ТОПвикуп забрали мій автомобіль, і я хочу сказати дякую. Довго вагався,
    що з ним робити. Машина пежо 206 дісталась мені від батьків і хоча ще бігала, її
    мені було мало. Їздила лише Львовом та за місто, невеликий об’єм двигуна 1.4,
    ДТП невелике було. Тож вирішив міняти. В інтернеті довго висіла (перегляди були,
    а дзвінків ні), тому звернувся в ТОПвикуп. Якби знав, що все так просто, швидко,
    ще й за це дають нормальні гроші, одразу б так зробив.`
  },
  {
    date: '19.03.2021',
    name: 'Андрій',
    review: `
     Суперова компанія всім рекомендую! Викупили швидко і за нормальні гроші мою Фабію
      2009 року. Авто було загалом без нарікань, лише незначне ДТП, мінялось у Львові
      праве переднє крило років 5 тому. Ну і пробіг був немалий, але ж і машині не мало
      років. Продажем дуже довольний, бо все оперативно та за готівку – вирішив змінити
      машину і знайшов те, що треба. Тож швидко потрібні були кошти на нову. Дякую,
      Топвикуп, дуже виручили`
  }
];

const repurchasedCarsData = [
  {
    title: 'Тойота Королла 2019',
    description: 'Викуплений за 10500$',
    image: '../img/lviv-repurchased-cars-1-image.jpg'
  },
  {
    title: 'Хонда Акорд 1997',
    description: 'Викуплений за 2 000$',
    image: '../img/lviv-repurchased-cars-2-image.jpg'
  },
  {
    title: 'Рено Канго 2010',
    description: 'Викуплений за 5 000$',
    image: '../img/lviv-repurchased-cars-3-image.jpg'
  },
  {
    title: 'Фольваг пасат б6 2007',
    description: 'Викуплений за 1 700$',
    image: '../img/lviv-repurchased-cars-4-image.jpg'
  },
  {
    title: 'Шкода Октавія 2008',
    description: 'Викуплений за 3 000$',
    image: '../img/lviv-repurchased-cars-5-image.jpg'
  },
  {
    title: 'Фольцваген пасат 2008',
    description: 'Викуплений за 3 000$',
    image: '../img/lviv-repurchased-cars-6-image.jpg'
  }, // 2
  {
    title: 'Рено Канго 2010',
    description: 'Викуплений за 5 000$',
    image: '../img/lviv-repurchased-cars-3-image.jpg'
  },
  {
    title: 'Хонда Акорд 1997',
    description: 'Викуплений за 2 000$',
    image: '../img/lviv-repurchased-cars-2-image.jpg'
  },
  {
    title: 'Тойота Королла 2019',
    description: 'Викуплений за 10500$',
    image: '../img/lviv-repurchased-cars-1-image.jpg'
  },
  {
    title: 'Фольваг пасат б6 2007',
    description: 'Викуплений за 1 700$',
    image: '../img/lviv-repurchased-cars-4-image.jpg'
  },
  {
    title: 'Шкода Октавія 2008',
    description: 'Викуплений за 3 000$',
    image: '../img/lviv-repurchased-cars-5-image.jpg'
  },
  {
    title: 'Фольцваген пасат 2008',
    description: 'Викуплений за 3 000$',
    image: '../img/lviv-repurchased-cars-6-image.jpg'
  }, // 3
  {
    title: 'Шкода Октавія 2008',
    description: 'Викуплений за 3 000$',
    image: '../img/lviv-repurchased-cars-5-image.jpg'
  },
  {
    title: 'Хонда Акорд 1997',
    description: 'Викуплений за 2 000$',
    image: '../img/lviv-repurchased-cars-2-image.jpg'
  },
  {
    title: 'Тойота Королла 2019',
    description: 'Викуплений за 10500$',
    image: '../img/lviv-repurchased-cars-1-image.jpg'
  },
  {
    title: 'Фольваг пасат б6 2007',
    description: 'Викуплений за 1 700$',
    image: '../img/lviv-repurchased-cars-4-image.jpg'
  },
  {
    title: 'Рено Канго 2010',
    description: 'Викуплений за 5 000$',
    image: '../img/lviv-repurchased-cars-3-image.jpg'
  },
  {
    title: 'Фольцваген пасат 2008',
    description: 'Викуплений за 3 000$',
    image: '../img/lviv-repurchased-cars-6-image.jpg'
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

const updateStep4Text = () => {
  const step4Span = document.querySelector('.step-4 .step-card span');
  if (step4Span) {
    if (window.innerWidth <= 768) {
      step4Span.textContent = 'Оформлення документів';
    } else {
      step4Span.textContent = 'Оформлення документів, швидкий розрахунок';
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  renderReviews(reviewsData, 'reviews-placeholder');
  renderPurchasedCars(repurchasedCarsData, 'repurchased-cars-container');
  initFAQ();
  updateStep4Text();
});
