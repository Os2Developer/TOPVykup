const blogArticles = [
  {
    page: 1,
    articles: [
      {
        image: '../img/blog-page-1-article.png',
        date: '01.11.2024',
        title: 'Кому та скільки платити податків за продаж авто?',
        info: 'Продаж автомобіля може здатися простою справою, але варто пам’ятати про податки, які можуть бути зобов’язані сплатити продавець чи покупець. З 2024 року в Україні діють певні правила оподаткування продажу транспортних засобів, тому важливо розуміти, хто, скільки і за яких умов…'
      },
      {
        image: '../img/blog-page-2-article.png',
        date: '27.08.2024',
        title: 'Де найдешевші автомобілі в Європі',
        info: 'Якщо ви задаєтесь питанням, де найдешевші авто в Європі, варто розглянути кілька країн, які пропонують найвигідніші умови для покупки як нових, так і вживаних автомобілів. Звісно, вартість авто залежить від багатьох факторів, таких як стан ринку, податки, мита та навіть…'
      },
      {
        image: '../img/blog-page-3-article.png',
        date: '05.06.2024',
        title: 'Нові китайські авто: як у них з безпекою?',
        info: 'Останнім часом китайські автомобілі стали популярними на світовому ринку. Вони приваблюють покупців своєю доступністю, сучасним дизайном та широким спектром функцій. Але важливим питанням залишається безпека цих транспортних засобів...'
      },
      {
        image: '../img/blog-page-4-article.png',
        date: '02.06.2024',
        title: 'Підготовка авто до літнього сезону',
        info: 'З настанням теплого сезону, автомобіль потребує особливої уваги та догляду. Підготовка авто до літа допоможе забезпечити його безперебійну роботу, підвищити комфорт та безпеку під час поїздок. У цій статті ми розглянемо основні кроки, які потрібно виконати, щоб підготувати автомобіль до…'
      },
      {
        image: '../img/blog-page-5-article.png',
        date: '03.05.2024',
        title: 'Який ремонт авто найдорожчий?',
        info: 'Найдорожчий ремонт авто зазвичай пов’язаний з пошкодженнями, що зачіпають ключові компоненти або системи. Необхідність проводити такий ремонт може бути викликана ДТП або зносом певних частин. Вартість залежить і від марки авто. Одні марки і моделі можна полагодити легко і недорого,…'
      },
      {
        image: '../img/blog-page-6-article.png',
        date: '09.02.2024',
        title: 'Неякісний ремонт авто що робити?',
        info: 'Більшість автомобілістів вважають за краще мати справу з машинами без технічних несправностей і зовнішніх дефектів. Тому якщо авто постраждало в ДТП або отримало інші технічні або зовнішні пошкодження, власники прагнуть їх оперативно усувати. Але при цьому непоодинокі випадки, коли автосервіс…'
      },
    ]
  },
  {
    page: 2,
    articles: [
      {
        image: '../img/blog-page-5-article.png',
        date: '03.05.2024',
        title: 'Який ремонт авто найдорожчий?',
        info: 'Найдорожчий ремонт авто зазвичай пов’язаний з пошкодженнями, що зачіпають ключові компоненти або системи. Необхідність проводити такий ремонт може бути викликана ДТП або зносом певних частин. Вартість залежить і від марки авто. Одні марки і моделі можна полагодити легко і недорого,…'
      },
      {
        image: '../img/blog-page-6-article.png',
        date: '09.02.2024',
        title: 'Неякісний ремонт авто що робити?',
        info: 'Більшість автомобілістів вважають за краще мати справу з машинами без технічних несправностей і зовнішніх дефектів. Тому якщо авто постраждало в ДТП або отримало інші технічні або зовнішні пошкодження, власники прагнуть їх оперативно усувати. Але при цьому непоодинокі випадки, коли автосервіс…'
      },
      {
        image: '../img/blog-page-1-article.png',
        date: '01.11.2024',
        title: 'Кому та скільки платити податків за продаж авто?',
        info: 'Продаж автомобіля може здатися простою справою, але варто пам’ятати про податки, які можуть бути зобов’язані сплатити продавець чи покупець. З 2024 року в Україні діють певні правила оподаткування продажу транспортних засобів, тому важливо розуміти, хто, скільки і за яких умов…'
      },
      {
        image: '../img/blog-page-2-article.png',
        date: '27.08.2024',
        title: 'Де найдешевші автомобілі в Європі',
        info: 'Якщо ви задаєтесь питанням, де найдешевші авто в Європі, варто розглянути кілька країн, які пропонують найвигідніші умови для покупки як нових, так і вживаних автомобілів. Звісно, вартість авто залежить від багатьох факторів, таких як стан ринку, податки, мита та навіть…'
      },
      {
        image: '../img/blog-page-3-article.png',
        date: '05.06.2024',
        title: 'Нові китайські авто: як у них з безпекою?',
        info: 'Останнім часом китайські автомобілі стали популярними на світовому ринку. Вони приваблюють покупців своєю доступністю, сучасним дизайном та широким спектром функцій. Але важливим питанням залишається безпека цих транспортних засобів...'
      },
      {
        image: '../img/blog-page-4-article.png',
        date: '02.06.2024',
        title: 'Підготовка авто до літнього сезону',
        info: 'З настанням теплого сезону, автомобіль потребує особливої уваги та догляду. Підготовка авто до літа допоможе забезпечити його безперебійну роботу, підвищити комфорт та безпеку під час поїздок. У цій статті ми розглянемо основні кроки, які потрібно виконати, щоб підготувати автомобіль до…'
      }
    ]
  },
  {
    page: 3,
    articles: [
      {
        image: '../img/blog-page-1-article.png',
        date: '03.05.2024',
        title: 'Який ремонт авто найдорожчий?',
        info: 'Найдорожчий ремонт авто зазвичай пов’язаний з пошкодженнями, що зачіпають ключові компоненти або системи. Необхідність проводити такий ремонт може бути викликана ДТП або зносом певних частин. Вартість залежить і від марки авто. Одні марки і моделі можна полагодити легко і недорого,…'
      },
      {
        image: '../img/blog-page-2-article.png',
        date: '09.02.2024',
        title: 'Неякісний ремонт авто що робити?',
        info: 'Більшість автомобілістів вважають за краще мати справу з машинами без технічних несправностей і зовнішніх дефектів. Тому якщо авто постраждало в ДТП або отримало інші технічні або зовнішні пошкодження, власники прагнуть їх оперативно усувати. Але при цьому непоодинокі випадки, коли автосервіс…'
      },
      {
        image: '../img/blog-page-1-article.png',
        date: '01.11.2024',
        title: 'Кому та скільки платити податків за продаж авто?',
        info: 'Продаж автомобіля може здатися простою справою, але варто пам’ятати про податки, які можуть бути зобов’язані сплатити продавець чи покупець. З 2024 року в Україні діють певні правила оподаткування продажу транспортних засобів, тому важливо розуміти, хто, скільки і за яких умов…'
      },
      {
        image: '../img/blog-page-2-article.png',
        date: '27.08.2024',
        title: 'Де найдешевші автомобілі в Європі',
        info: 'Якщо ви задаєтесь питанням, де найдешевші авто в Європі, варто розглянути кілька країн, які пропонують найвигідніші умови для покупки як нових, так і вживаних автомобілів. Звісно, вартість авто залежить від багатьох факторів, таких як стан ринку, податки, мита та навіть…'
      },
      {
        image: '../img/blog-page-3-article.png',
        date: '05.06.2024',
        title: 'Нові китайські авто: як у них з безпекою?',
        info: 'Останнім часом китайські автомобілі стали популярними на світовому ринку. Вони приваблюють покупців своєю доступністю, сучасним дизайном та широким спектром функцій. Але важливим питанням залишається безпека цих транспортних засобів...'
      },
      {
        image: '../img/blog-page-4-article.png',
        date: '02.06.2024',
        title: 'Підготовка авто до літнього сезону',
        info: 'З настанням теплого сезону, автомобіль потребує особливої уваги та догляду. Підготовка авто до літа допоможе забезпечити його безперебійну роботу, підвищити комфорт та безпеку під час поїздок. У цій статті ми розглянемо основні кроки, які потрібно виконати, щоб підготувати автомобіль до…'
      }
    ]
  },
  {
    page: 4,
    articles: [
      {
        image: '../img/blog-page-3-article.png',
        date: '03.05.2024',
        title: 'Який ремонт авто найдорожчий?',
        info: 'Найдорожчий ремонт авто зазвичай пов’язаний з пошкодженнями, що зачіпають ключові компоненти або системи. Необхідність проводити такий ремонт може бути викликана ДТП або зносом певних частин. Вартість залежить і від марки авто. Одні марки і моделі можна полагодити легко і недорого,…'
      },
      {
        image: '../img/blog-page-4-article.png',
        date: '09.02.2024',
        title: 'Неякісний ремонт авто що робити?',
        info: 'Більшість автомобілістів вважають за краще мати справу з машинами без технічних несправностей і зовнішніх дефектів. Тому якщо авто постраждало в ДТП або отримало інші технічні або зовнішні пошкодження, власники прагнуть їх оперативно усувати. Але при цьому непоодинокі випадки, коли автосервіс…'
      },
      {
        image: '../img/blog-page-1-article.png',
        date: '01.11.2024',
        title: 'Кому та скільки платити податків за продаж авто?',
        info: 'Продаж автомобіля може здатися простою справою, але варто пам’ятати про податки, які можуть бути зобов’язані сплатити продавець чи покупець. З 2024 року в Україні діють певні правила оподаткування продажу транспортних засобів, тому важливо розуміти, хто, скільки і за яких умов…'
      },
      {
        image: '../img/blog-page-2-article.png',
        date: '27.08.2024',
        title: 'Де найдешевші автомобілі в Європі',
        info: 'Якщо ви задаєтесь питанням, де найдешевші авто в Європі, варто розглянути кілька країн, які пропонують найвигідніші умови для покупки як нових, так і вживаних автомобілів. Звісно, вартість авто залежить від багатьох факторів, таких як стан ринку, податки, мита та навіть…'
      },
      {
        image: '../img/blog-page-3-article.png',
        date: '05.06.2024',
        title: 'Нові китайські авто: як у них з безпекою?',
        info: 'Останнім часом китайські автомобілі стали популярними на світовому ринку. Вони приваблюють покупців своєю доступністю, сучасним дизайном та широким спектром функцій. Але важливим питанням залишається безпека цих транспортних засобів...'
      },
      {
        image: '../img/blog-page-4-article.png',
        date: '02.06.2024',
        title: 'Підготовка авто до літнього сезону',
        info: 'З настанням теплого сезону, автомобіль потребує особливої уваги та догляду. Підготовка авто до літа допоможе забезпечити його безперебійну роботу, підвищити комфорт та безпеку під час поїздок. У цій статті ми розглянемо основні кроки, які потрібно виконати, щоб підготувати автомобіль до…'
      }
    ]
  },
];

const updatePagination = (currentSlide) => {
  document.querySelectorAll('.blog-articles-page').forEach((page) => {
    const index = Number(page.dataset.index);
    page.classList.toggle('active', index === currentSlide);
  });
};

const renderPageItems = () => {
  const slider = document.querySelector('.blog-articles-slider');
  if (slider) {
    slider.innerHTML = ''; // Clear existing page items
    blogArticles.forEach((page) => {
      const pageItems = document.createElement('div');
      pageItems.className = 'blog-articles-page-items';
      pageItems.dataset.page = page.page; // Set data-page dynamically
      slider.appendChild(pageItems);
    });
  }
};

const renderBlogItems = (pageIndex = null) => {
  if (pageIndex === null) {
    // Render all pages for desktop
    blogArticles.forEach((page, index) => {
      const pageItems = document.querySelector(`.blog-articles-page-items[data-page="${page.page}"]`);
      if (pageItems) {
        pageItems.innerHTML = ''; // Clear existing items for this page
        page.articles.forEach((article) => {
          const blogItem = document.createElement('blog-item');
          blogItem.setAttribute('image', article.image);
          blogItem.setAttribute('date', article.date);
          blogItem.setAttribute('title', article.title);
          blogItem.setAttribute('info', article.info);
          pageItems.appendChild(blogItem);
        });
      }
    });
  } else {
    // Render a specific page for mobile/tablet
    const pageItems = document.querySelector(`.blog-articles-page-items[data-page="${pageIndex + 1}"]`);
    if (pageItems) {
      pageItems.innerHTML = ''; // Clear existing items for this page
      const articles = blogArticles[pageIndex]?.articles || [];
      articles.forEach((article) => {
        const blogItem = document.createElement('blog-item');
        blogItem.setAttribute('image', article.image);
        blogItem.setAttribute('date', article.date);
        blogItem.setAttribute('title', article.title);
        blogItem.setAttribute('info', article.info);
        pageItems.appendChild(blogItem);
      });
    }
  }
};

const renderPagination = () => {
  const pagination = document.querySelector('.blog-articles-pagination');
  if (pagination) {
    pagination.innerHTML = ''; // Clear existing pagination
    blogArticles.forEach((page, index) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'blog-articles-page';
      pageDiv.dataset.index = index;
      pageDiv.innerHTML = `<p>${page.page}</p>`;
      pagination.appendChild(pageDiv);

      pageDiv.addEventListener('click', () => {
        $('.blog-articles-slider').slick('slickGoTo', index);
      });
    });
  }
};

const handleShowMore = () => {
  const showMoreButton = document.getElementById('blog-show-more-button');
  if (!showMoreButton) return;

  let currentPage = 0;
  const isMobileOrTablet = window.innerWidth <= 1023;

  const updateShowMore = () => {
    if (isMobileOrTablet) {
      const scrollPosition = window.scrollY || window.pageYOffset;

      currentPage++;
      if (currentPage < blogArticles.length) {
        renderBlogItems(currentPage);
        if (currentPage === blogArticles.length - 1) {
          showMoreButton.remove();
        }
      } else {
        showMoreButton.remove();
      }

      // Restore scroll position after rendering
      requestAnimationFrame(() => {
        window.scrollTo(0, scrollPosition);

        // Smoothly scroll to the newly added page items
        // const newPageItems = document.querySelector(`.blog-articles-page-items[data-page="${currentPage + 1}"]`);
        // if (newPageItems) {
        //   newPageItems.scrollIntoView({
        //     behavior: 'smooth',
        //     block: 'start',
        //     inline: 'nearest'
        //   });
        // }
      });
    }
  };

  showMoreButton.addEventListener('click', (e) => {
    e.preventDefault();
    updateShowMore();
  });

  if (isMobileOrTablet) {
    renderBlogItems(0);
  }
};

const initSliders = () => {
  const isMobileOrTablet = window.innerWidth <= 1023;

  renderPageItems();

  if (!isMobileOrTablet) {
    renderBlogItems(); // Render all pages for desktop
    renderPagination();

    $('.blog-articles-slider').slick({
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: document.querySelector('.slick-prev'),
      nextArrow: document.querySelector('.slick-next'),
      infinite: false,
      centerMode: false,
      dots: false,
    }).on('init afterChange', (event, slick, currentSlide = 0) => {
      const totalSlides = slick.$slides.length;
      const nextImg = document.querySelector('.slick-next img');
      const prevImg = document.querySelector('.slick-prev img');
      const nextBtn = document.querySelector('.slick-next');
      const prevBtn = document.querySelector('.slick-prev');

      nextImg.src = currentSlide === totalSlides - 1 
        ? '../img/slider-forward-icon-disabled.svg' 
        : '../img/slider-forward-icon.svg';
      nextBtn.classList.toggle('disabled', currentSlide === totalSlides - 1);

      prevImg.src = currentSlide === 0 
        ? '../img/slider-back-icon-disabled.svg' 
        : '../img/slider-back-icon.svg';
      prevBtn.classList.toggle('disabled', currentSlide === 0);

      updatePagination(currentSlide);
    });

    document.querySelectorAll('.blog-articles-page').forEach(page => {
      page.addEventListener('click', () => {
        const index = Number(page.dataset.index);
        $('.blog-articles-slider').slick('slickGoTo', index);
      });
    });
  } else {
    renderBlogItems(0); // Show only the first page on mobile/tablet
    handleShowMore();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initSliders();
  updatePagination(0);
});