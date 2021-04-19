// Импорт сторонних библиотек


// Импортируем другие js-файлы

/* MODALS */
const portfolio = [
    {
        id: 1,
        src: './img/moqups/alma.jpg',
        alt: 'Альма-Парк',
        title: 'Альма-Парк',
        desc:
            '<p>Alma Park Resort — это закрытый курортный комплекс премиум-класса с развитой инфраструктурой и собственным пляжем.</p><p>Альма-Парк - проект, реализованый с нуля, в последвствии верстка натягивалась на cms Bitrix</p><p>Здесь есть необычный дизайн, интересные решения дизайнера, а также работа с gsap.</p><h4>Что было сделано</h4><ul><li>Оптимизация дизайн-макета перед версткой — нарезка изображений, экспорт иконок в SVG и пр.</li><li>Верстка макета с использованием Bootstrap 4 и Flexbox.</li><li>Проработка интересных CSS3 анимаций.</li><li>Подключение плгаинов (jquery,swiper,gsap, и др.).</li><li>Добавление анимации с помощью gsap.</li></ul><p>После сдачи проекта сайтом не занимаюсь</p>',
        href:
            '<a target="_blank" href="https://alma-park.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 2,
        src: './img/moqups/caketown.jpg',
        alt: 'Caketown',
        title: 'Caketown',
        desc:
            '<p>Caketown - это учебный интернет-магазин, который полностью создан на основе React + Redux, в последвстии был направлен на облачную платформу Heroku.</p><p>Здесь есть фильтрация товаров, сортировка, корзина, и многое другое.</p>',
        href:
            '<a target="_blank" href="https://caketown-react-redux.herokuapp.com/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 3,
        src: './img/moqups/pol360.jpg',
        alt: 'Pol360',
        title: 'Pol360',
        desc:
            '<p><p>Pol360 - Дискаунтер напольных покрытий "Пол вокруг"</p><p>Проект разрабатывался для агенства Relevant</p><p>К проделанным мною работы относится верстка по макету</p><p>Описание кейса можно посмотреть <a target="_blank" href="https://relevant.ru/portfolio/razrabotka/internet-magaziny/redizayn-internet-magazina-napolnykh-pokrytiy-pol-vokrug/">здесь</a></p>',
        href:
            '<a target="_blank" href="https://www.pol360.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 4,
        src: './img/moqups/stekko.jpg',
        alt: 'Stekko',
        title: 'Stekko',
        desc:
            '<p>Разработка корпоративного сайта ООО «Завод Стекко»</p><p>Проект разрабатывался для агенства Relevant</p><p>К проделанным мною работы относится верстка по макету</p><p>Описание кейса можно посмотреть <a target="_blank" href="https://relevant.ru/portfolio/razrabotka/korporativnye-sayty/zavod-stekko/">здесь</a></p>',
        href:
            '<a target="_blank" href="https://stekko.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 5,
        src: './img/moqups/cashpoint.jpg',
        alt: 'Cashpoint',
        title: 'Cashpoint',
        desc:
            '<p>CashPoint — это Сервис срочного выкупа недвижимости и кредитования</p><h4>Что было сделано</h4><ul><li>Оптимизация дизайн-макета перед версткой — нарезка изображений, экспорт иконок в Icomoon и пр.</li><li>Верстка макета с использованием Bootstrap 4 и Flexbox.</li><li>Размещение информации на сайте, оптимизация контента.</li><p>После сдачи проекта сайтом не занимаюсь</p></ul>',
        href:
            '<a target="_blank" href="https://cash-point.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 6,
        src: './img/moqups/myata.jpg',
        alt: 'ТЦ Мята',
        title: 'ТЦ Мята',
        desc:
            '<p>«Мята» - это новый, современный, комфортный торговый центр в самом центре Белгорода. Это сочетание оригинальной современной архитектуры, продуманных планировочных решений и доступности для жителей г. Белгород.</p><h4>Что было сделано</h4><ul><li>Оптимизация дизайн-макета перед версткой — нарезка изображений, экспорт иконок в Icomoon и пр.</li><li>Верстка макета с использованием Bootstrap 4 и Flexbox.</li><li>Размещение информации на сайте, оптимизация контента</li></ul><p>Проект был натянут на cms Bitrix</p><p>После сдачи проекта сайтом не занимаюсь</p>',
        href: '<a target="_blank" href="https://dev.mint.com.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 7,
        src: './img/moqups/s-tech.jpg',
        alt: 'S-Technologi',
        title: 'S-Technologi',
        desc:
            '<p>Компания С-Технолоджи открыла свои двери уже более 10 лет назад, у нас работают только опытные специалисты, каждый топ мастер в своем деле. Мы делаем ремонт под ключ и решаем полностью все ваши заботы, например с выносом мусора после ремонта. Работы по ремонту закончим точно в сроки, а после предоставим Вам гарантию на все выполненные работы, у нас продуманно все до мелочей. Индивидуальный подход к каждому клиенту, любые ваши пожелания будут выполнены. Покупка всех строительных материалов со скидками. Надеемся, что Вы сделаете правильный выбор и обратитесь в нашу компанию.</p><h4>Что было сделано</h4><ul><li>Оптимизация дизайн-макета перед версткой — нарезка изображений, экспорт иконок в Icomoon и пр.</li><li>Верстка макета с использованием Bootstrap 4 и Flexbox.</li><li>Проработка интересных CSS3 анимаций</li><li>Подключение плгаинов (jquery,swiper,и др.)</li></ul><p>После сдачи проекта сайтом не занимаюсь</p>',
        href:
            '<a target="_blank" href="https://s-technolodgi.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 8,
        src: './img/moqups/unidez.jpg',
        alt: 'Унидез500',
        title: 'Унидез500',
        desc:
            '<p>Унидез500 - лендинг сверстан для компании Relevant</p><h4>Что было сделано</h4><ul><li>Оптимизация дизайн-макета перед версткой — нарезка изображений, экспорт иконок в Icomoon и пр.</li><li>Верстка макета с использованием Bootstrap 4 и Flexbox.</li><li>Размещение информации на сайте, оптимизация контента</li><li>Добавление метрик</li></ul>',
        href:
            '<a target="_blank" href="https://dez500.ru/" class="btn">Перейти на сайт</a>',
    },
    {
        id: 9,
        src: './img/moqups/saiganovy.jpg',
        alt: 'Адвокатское бюро «Сайгановы и партнёры»',
        title: 'Адвокатское бюро «Сайгановы и партнёры»',
        desc:
            '<p>Адвокатское бюро «Сайгановы и партнёры» - Корпоративный сайт</p><h4>Что было сделано</h4><ul><li>Оптимизация дизайн-макета перед версткой — нарезка изображений, экспорт иконок в Icomoon и пр.</li><li>Верстка макета с использованием Bootstrap 4 и Flexbox.</li><li>Подключение плгаинов (jquery,slick-slider, и др.)</li><li>Размещение информации на сайте, оптимизация контента</li></ul><p>После сдачи проекта сайтом не занимаюсь</p>',
        href:
            '<a target="_blank" href="https://absaiganov.ru/" class="btn">Перейти на сайт</a>',
    },
]
document.addEventListener('DOMContentLoaded', () => {
    const buttonLink = [...document.querySelectorAll('button.works__fade')]
    const buttonDataId = buttonLink.map((item) => +item.getAttribute('data-id'))
    const modalOverlay = document.querySelector('.modal-overlay')
    buttonLink.forEach((item, i) => {
        item.addEventListener('click', () => {
            const { id, src, alt, title, desc, href } = portfolio[i]
            if (buttonDataId[i] === id) {
                document.body.classList.add('modal-active')
                modalOverlay.innerHTML = `
                <div class="modal__inner">
                    <div class="modal">
                        <div data-close class="modal-close"></div>
                        <div class="modal__image">
                            <img src="${src}" alt="Мокап ${alt}">
                        </div>
                        <div class="modal__content">
                            <h3 class="modal__title">${title}</h3>
                            <div class="modal__text">
                                ${desc}
                            </div>
                            ${href}
                        </div>
                    </div>
                </div>
                `
            }
        })
    })
    modalOverlay.addEventListener('click', (e) => {
        if (
            e.target === modalOverlay.children[0] ||
            e.target.getAttribute('data-close') == ''
        )
            document.body.classList.remove('modal-active')
    })
    const anchors = document.querySelectorAll('.anchor')

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
})