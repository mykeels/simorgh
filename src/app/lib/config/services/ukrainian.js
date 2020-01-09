import { C_POSTBOX, C_WHITE } from '@bbc/psammead-styles/colours';
import { cyrillicAndLatin } from '@bbc/gel-foundations/scripts';
import { ukrainian as brandSVG } from '@bbc/psammead-assets/svgs';
import '@bbc/moment-timezone-include/tz/GMT';
import '@bbc/psammead-locales/moment/uk';
import withContext from '../../../contexts/utils/withContext';

export const service = {
  default: {
    lang: `uk`,
    articleAuthor: `http://www.facebook.com/bbcnews`,
    articleTimestampPrefix: 'Оновлення даних: ',
    atiAnalyticsAppName: 'news-ukrainian',
    atiAnalyticsProducerId: '94',
    brandName: 'BBC News Україна',
    product: 'BBC News',
    serviceLocalizedName: 'Україна',
    defaultImage: 'https://news.files.bbci.co.uk/ws/img/logos/og/ukrainian.png',
    defaultImageAltText: 'BBC News Україна',
    dir: `ltr`,
    externalLinkText: ', зовнішнє посилання',
    imageCaptionOffscreenText: 'Підпис до фото, ',
    videoCaptionOffscreenText: 'Підпис до відео, ',
    audioCaptionOffscreenText: 'Підпис до аудіо',
    defaultCaptionOffscreenText: 'Підпис, ',
    imageCopyrightOffscreenText: 'Автор фото, ',
    locale: `uk-UA`,
    datetimeLocale: `uk`,
    service: 'ukrainian',
    serviceName: 'Ukrainian',
    themeColor: `${C_POSTBOX}`,
    twitterCreator: '@BBC_ua',
    twitterSite: '@BBC_ua',
    noBylinesPolicy: 'https://www.bbc.com/news/help-41670342#authorexpertise',
    publishingPrinciples: 'https://www.bbc.com/news/help-41670342',
    isTrustProjectParticipant: true,
    script: cyrillicAndLatin,
    manifestPath: '/manifest.json',
    swPath: '/sw.js',
    frontPageTitle: 'Новини',
    theming: {
      brandBackgroundColour: `${C_POSTBOX}`,
      brandLogoColour: `${C_WHITE}`,
    },
    translations: {
      seeAll: 'Подивитись все',
      home: 'Головна',
      currentPage: 'Поточна сторінка',
      skipLinkText: 'Перейти до змісту',
      relatedContent: 'Статті на цю ж тему',
      mediaAssetPage: {
        mediaPlayer: 'Медіаплеєр',
        audioPlayer: 'Аудіоплеєр',
        videoPlayer: 'Відеоплеєр',
      },
      error: {
        404: {
          statusCode: '404',
          title: 'Сторінку не знайдено',
          message:
            'Вибачте, ми не знайшли сторінку, яку ви шукали. Спробуйте це:',
          solutions: [
            'Перевірте ще раз адресу посилання',
            'Натисніть на кнопку "оновити" в браузері',
            'Шукати сторінку в пошуковому вікні ВВС',
          ],
          callToActionFirst: 'Спробуйте зайти на головну сторінку ',
          callToActionLinkText: 'ВВС News Україна',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/ukrainian',
        },
        500: {
          statusCode: '500',
          title: 'Помилка серверу',
          message:
            'Вибачте, ми не змогли знайти сторінку, яку ви шукали. Спробуйте:',
          solutions: [
            'Натиснути кнопку "оновити" у вашому браузері',
            'Спробуйте пізніше',
          ],
          callToActionFirst: 'Спробуйте зайти на головну сторінку ',
          callToActionLinkText: 'Повернутися на головну',
          callToActionLast: '',
          callToActionLinkUrl: 'https://www.bbc.com/ukrainian',
        },
      },
      consentBanner: {
        privacy: {
          title:
            'Ми оновили наші правила використання особистих даних і cookies',
          description: {
            uk: {
              first:
                'Ми змінили правила використання особистих даних і cookies і хотіли б повідомити вам, що це означає для вас і ваших особистих даних.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
            international: {
              first:
                'Ми змінили правила використання особистих даних і cookies і хотіли б повідомити вам, що це означає для вас і ваших особистих даних.',
              linkText: null,
              last: null,
              linkUrl: null,
            },
          },
          accept: 'ОК',
          reject: 'Подивитися, що змінилося',
          rejectUrl: 'https://www.bbc.co.uk/usingthebbc/your-data-matters',
        },
        cookie: {
          title: 'Повідомити, що ви погоджуєтесь з використанням cookies',
          description: {
            uk: {
              first: 'Ми використовуємо ',
              linkText: 'cookies',
              last:
                ' щоб вам було зручно користуватися сайтом. Повідомте нам, що ви погоджуєтесь з використанням цих cookies.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
            international: {
              first:
                'Ми разом з нашими партнерами використовуємо технології, такі як ',
              linkText: 'cookies',
              last:
                ', а також збираємо дані, щоб вам було зручно користуватися сайтом і щоб контент і реклама, яку ви бачите, відповідали вашим запитам. Будь ласка, повідомте, чи ви згодні.',
              linkUrl:
                'https://www.bbc.co.uk/usingthebbc/cookies/what-do-i-need-to-know-about-cookies/',
            },
          },
          accept: 'Так, згоден',
          reject: 'Ні, мені потрібно переглянути налаштування',
          rejectUrl:
            'https://www.bbc.co.uk/usingthebbc/cookies/how-can-i-change-my-bbc-cookie-settings/',
        },
      },
      media: {
        audio: 'Аудіо',
        photogallery: 'Фотогалерея',
        video: 'Відео',
        bbc_ukrainian_tv: {
          title: 'Випуск новин',
          subtitle:
            'ВВС News Україна розповідає про головні події дня на Громадському і на сайті bbc.ua',
        },
        listen: 'Listen',
        watch: 'Watch',
        liveLabel: 'LIVE',
        previousRadioShow: 'Previous radio show',
        nextRadioShow: 'Next radio show',
        duration: 'Duration',
      },
    },
    brandSVG,
    mostRead: {
      header: 'Найпопулярніше',
      lastUpdated: 'Останнє оновлення: ',
    },
    footer: {
      trustProjectLink: {
        href: 'https://www.bbc.com/news/help-41670342',
        text: 'Чому BBC заслуговує на довіру',
      },
      externalLink: {
        href: 'https://www.bbc.co.uk/help/web/links/',
        text: 'Ознайомтеся з нашими правилами зовнішніх посилань.',
      },
      links: [
        {
          href: 'https://www.bbc.com/ukrainian/institutional-38144387',
          text: 'Правила користування',
        },
        {
          href: 'https://www.bbc.com/ukrainian/institutional-38144827',
          text: 'Особисті дані',
        },
        {
          href: 'https://www.bbc.com/usingthebbc/cookies/',
          text: 'Cookies',
        },
        {
          href: 'https://www.bbc.com/ukrainian/institutional-38146278',
          text: "Зв'язатися з BBC",
        },
      ],
      copyrightText:
        'BBC. ВВС на несе відповідальності за контент інших сайтів.',
    },
    fonts: [],
    timezone: 'GMT',
    navigation: [
      {
        title: 'Головна',
        url: '/ukrainian',
      },
      {
        title: 'Новини',
        url: '/ukrainian/news',
      },
      {
        title: 'Україна',
        url: '/ukrainian/topics/ee8750ed-a7fb-453f-bfca-2aa8b3fb064c',
      },
      {
        title: 'Політика',
        url: '/ukrainian/topics/75612fa6-147c-4a43-97fa-fcf70d9cced3',
      },
      {
        title: 'Економіка',
        url: '/ukrainian/topics/ca170ae3-99c1-48db-9b67-2866f85e7342',
      },
      {
        title: 'Суспільство',
        url: '/ukrainian/topics/5307a8d9-f620-40f5-92d4-f99c919a6ffa',
      },
      {
        title: 'Наука',
        url: '/ukrainian/topics/0f469e6a-d4a6-46f2-b727-2bd039cb6b53',
      },
      {
        title: 'Технології',
        url: '/ukrainian/topics/31684f19-84d6-41f6-b033-7ae08098572a',
      },
      {
        title: 'Здоров’я',
        url: '/ukrainian/topics/c4794229-7f87-43ce-ac0a-6cfcd6d3cef2',
      },
      {
        title: 'Спорт',
        url: '/ukrainian/sport',
      },
      {
        title: 'РУС',
        url: '/ukrainian/ukraine_in_russian',
      },
      {
        title: 'BBC Журнал',
        url: '/ukrainian/magazine',
      },
      {
        title: 'Блоги',
        url: '/ukrainian/blogs',
      },
      {
        title: 'Також у новинах',
        url: '/ukrainian/other_news',
      },
      {
        title: 'Спецпроекти',
        url: '/ukrainian/in_depth',
      },
      {
        title: 'Фото',
        url: '/ukrainian/media/photogalleries',
      },
      {
        title: 'Відео',
        url: '/ukrainian/media/video',
      },
      {
        title: 'Learning English',
        url: '/ukrainian/learning_english',
      },
    ],
    navigationSection: 'Розділи',
  },
};

export default withContext(service);
