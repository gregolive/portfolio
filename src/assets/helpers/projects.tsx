import type { Project } from '../../types';
import bitblogHomeImg from '../img/bitblog/home.jpg';
import bitblogLoginImg from '../img/bitblog/login.jpg';
import bitblogDashboardImg from '../img/bitblog/dashboard.jpg';
import bitblogPostFormImg from '../img/bitblog/post-form.jpg';
import waldoDashboardImg from '../img/waldo/dashboard.jpg';
import waldoOuterSpaceImg from '../img/waldo/outer-space.jpg';
import waldoSkiSlopesImg from '../img/waldo/ski-slopes.jpg';
import waldoGameOverImg from '../img/waldo/game-over.jpg';
import tendiesTrackerDashboardImg from '../img/tendies-tracker/dashboard.jpg';
import tendiesTrackerDashboard2Img from '../img/tendies-tracker/dashboard2.jpg';
import tendiesTrackerPortfolioImg from '../img/tendies-tracker/portfolio.jpg';
import tendiesTrackerTransactionViewImg from '../img/tendies-tracker/transaction-view.jpg';
import tendiesTrackerTransactionsImg from '../img/tendies-tracker/transactions.jpg';
import battleshipLevelSelectImg from '../img/battleship/level-select.jpg';
import battleshipPlaceShipsImg from '../img/battleship/place-ships.jpg';
import battleshipPlayerBoardImg from '../img/battleship/player-board.jpg';
import battleshipEnemyBoardImg from '../img/battleship/enemy-board.jpg';
import odinHomeImg from '../img/odin/home.jpg';
import odinJavascriptImg from '../img/odin/javascript.jpg';
import odinOverviewImg from '../img/odin/overview.jpg';

const personalProjects: Project[] = [
  /*{
    title: 'Petbook',
    summary: `
      In development... Facebook for pets!
      A social media app with beautiful Framer Motion animations, Google and Facebook OAuth authentication, a React Typescript front-end, and more.
    `,
    tags: [
      {
        text: 'Express',
        icon: <i className='devicon-express-original'></i>,
      },
      {
        text: 'Framer Motion',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
      },
      {
        text: 'JavaScript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'MaterialUI',
        icon: <i className='devicon-materialui-plain colored'></i>,
      },
      {
        text: 'MongoDB',
        icon: <i className='devicon-mongodb-plain'></i>,
      },
      {
        text: 'Node.js',
        icon: <i className='devicon-nodejs-plain'></i>,
      },
      {
        text: 'React',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Styled Components',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'TypeScript',
        icon: <i className='devicon-typescript-plain'></i>,
      },
    ],
    images: [
      {
        src: require('../img/petbook/login.gif'),
        alt: 'petbook login animation',
      },
    ],
    color: '#069def',
    repo: 'https://github.com/gregolive/petbook',
    link: '',
  },*/
  {
    title: 'bitblog',
    summary: `
      A platform for creating and managing a blog, built using the MERN stack.
      User authentication is handled via a simple username & password strategy with password hashing and salting for secure storage.
      JSON Web Tokens ensure that users remain authenticated as they navigate the site.
      The responsive app features a TinyMCE rich text editor that allows for the creation of clean, properly formatted blog posts.
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'Express',
        icon: <i className='devicon-express-original'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
      },
      {
        text: 'JavaScript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'MongoDB',
        icon: <i className='devicon-mongodb-plain'></i>,
      },
      {
        text: 'Node.js',
        icon: <i className='devicon-nodejs-plain'></i>,
      },
      {
        text: 'React',
        icon: <i className='devicon-react-original'></i>,
      },
    ],
    images: [
      {
        src: bitblogHomeImg,
        alt: 'bitblog home screen',
      },
      {
        src: bitblogLoginImg,
        alt: 'bitblog login screen',
      },
      {
        src: bitblogDashboardImg,
        alt: 'bitblog dashboard',
      },
      {
        src: bitblogPostFormImg,
        alt: 'bitblog new post form',
      },
    ],
    color: '#fc573c',
    repo: 'https://github.com/gregolive/blog-platform',
    link: 'https://gregolive.github.io/blog-platform/',
  },
  {
    title: "Where's Waldo",
    summary: `
      Search for Waldo and friends in this online version of the classic books.
      This is a multi-technology app with a React frontend and a Ruby on Rails backend.
      The React client deployed with GitHub Pages makes calls to the Rails API deployed on Heroku where images, map data, and other assets are stored.
      On each of the 6 levels, users must find 4 Waldo characters hidden throughout the map and are presented with a form to submit their solve time.
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
      },
      {
        text: 'JavaScript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'PostgreSQL',
        icon: <i className='devicon-postgresql-plain'></i>,
      },
      {
        text: 'Rails',
        icon: <i className='devicon-rails-plain'></i>,
      },
      {
        text: 'React',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Ruby',
        icon: <i className='devicon-ruby-plain'></i>,
      },
    ],
    images: [
      {
        src: waldoDashboardImg,
        alt: 'waldo dashboard',
      },
      {
        src: waldoOuterSpaceImg,
        alt: 'waldo outer space level',
      },
      {
        src: waldoSkiSlopesImg,
        alt: 'waldo ski slopes level',
      },
      {
        src: waldoGameOverImg,
        alt: 'waldo game over form',
      },
    ],
    color: '#e71a0f',
    repo: 'https://github.com/gregolive/waldo',
    link: 'https://gregolive.github.io/waldo/',
  },
  {
    title: 'Tendies Tracker',
    summary: `
      A full-stack app to track your stock holdings, created with Express, MongoDB, and more.
      The platform provides real-time stock data from Finnhub to ensure that users stay up to date on their portfolio.
      Features secure user authentication with hashed and salted passwords, a dashboard that provides daily and all-time portfolio statistics, and a portfolio page with a full portfolio breakdown, down to each holding.
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'EJS',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'Express',
        icon: <i className='devicon-express-original'></i>,
      },
      {
        text: 'Heroku',
        icon: <i className='devicon-heroku-original'></i>,
      },
      {
        text: 'JavaScript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'MongoDB',
        icon: <i className='devicon-mongodb-plain'></i>,
      },
      {
        text: 'Node.js',
        icon: <i className='devicon-nodejs-plain'></i>,
      },
    ],
    images: [
      {
        src: tendiesTrackerDashboardImg,
        alt: 'tendies tracker dashboard',
      },
      {
        src: tendiesTrackerDashboard2Img,
        alt: 'tendies tracker dashboard 2',
      },
      {
        src: tendiesTrackerPortfolioImg,
        alt: 'tendies tracker portfolio view',
      },
      {
        src: tendiesTrackerTransactionViewImg,
        alt: 'tendies tracker transaction view',
      },
      {
        src: tendiesTrackerTransactionsImg,
        alt: 'tendies tracker all transactions',
      },
    ],
    color: '#deaf02',
    repo: 'https://github.com/gregolive/portfolio-tracker',
    link: 'https://tendies-trackr.herokuapp.com/',
  },
  {
    title: 'Retro Battleship',
    summary: `
      Take to the high seas and test your luck against the computer in the classic guessing game.
      This is a single-page application built in vanilla JavaScript using a test-driven development approach via the Jest testing framework.
      Users select a computer difficulty, place their ships and then take turns guessing locations on the opponent's board.
      Last one standing (or floating) wins!
    `,
    tags: [
      {
        text: 'CSS',
        icon: <i className='devicon-css3-plain'></i>,
      },
      {
        text: 'HTML',
        icon: <i className='devicon-html5-plain'></i>,
      },
      {
        text: 'JavaScript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'Jest',
        icon: <i className='devicon-jest-plain'></i>,
      },
      {
        text: 'npm',
        icon: <i className='devicon-npm-original-wordmark'></i>,
      },
      {
        text: 'Webpack',
        icon: <i className='devicon-webpack-plain'></i>,
      },
    ],
    images: [
      {
        src: battleshipLevelSelectImg,
        alt: 'retro battleship level select',
      },
      {
        src: battleshipPlaceShipsImg,
        alt: 'retro battleship place ships screen',
      },
      {
        src: battleshipPlayerBoardImg,
        alt: 'retro battleship player board',
      },
      {
        src: battleshipEnemyBoardImg,
        alt: 'retro battleship enemy board',
      },
    ],
    color: '#8a4fff',
    repo: 'https://github.com/gregolive/battleship',
    link: 'https://gregolive.github.io/battleship/',
  },
];

const openSourceProjects: Project[] = [
  {
    title: 'The Odin Project',
    summary: `
      A hands-on, open curriculum for learning web development with 3 learning paths: Foundations, Full Stack Ruby on Rails, and Full Stack Javascript.
      My contributions include updating curriculum Markdown files for typos and adding links to additional resources related to lesson topics.
      Contributing to The Odin Project has helped me to learn various aspects of Git workflow, such as opening and merging branches, creating pull requests, and opening new issues.
    `,
    images: [
      {
        src: odinHomeImg,
        alt: 'odin project home screen',
      },
      {
        src: odinJavascriptImg,
        alt: 'odin project javascript course',
      },
      {
        src: odinOverviewImg,
        alt: 'odin project overview',
      },
    ],
    color: '#D4AE63',
    repo: 'https://github.com/TheOdinProject/curriculum',
    link: 'https://www.theodinproject.com/',
  },
];

export { personalProjects, openSourceProjects };
