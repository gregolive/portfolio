// Placeholder content, replace with real company details, logo and screenshots
const experience = [
  {
    company: 'Gist Applications',
    logo: require('../img/experience/gist-apps-logo.jpeg'),
    link: 'https://gist-apps.com/',
    location: 'Victoria, BC, Canada',
    color: '#202e37',
    roles: [
      {
        title: 'Full-Stack Developer',
        start: 'Sept 2022',
        end: 'Present',
      },
    ],
    summary: `
      Gist Applications is a software company that builds applications for the Shopify ecosystem that helps businesses sell better, and more, online.
      As part of the team at Gist, I am responsible for delivering scalable, high-value-added features across the tech-stack that enhance the functionality and user experience of thousands of online stores worldwide and their millions of customers.
    `,
    responsibilities: [
      'Build customer-facing widgets that integrate seamlessly with different Shopify storefronts and improve merchant shopping experience and sales, while being mindful of accessibility and responsive design',
      'Interface with the Shopify GraphQL and REST APIs to query and update store data, alongside handling real-time webhooks to trigger actions and execute back-end business logic following events such as order creation',
      "Create merchant-facing admin dashboards following Shopify's design systems and provide merchants with intuitive interfaces to manage the app's features, view analytics, and integrate with 3rd party services",
    ],
    tags: [
      {
        text: 'React',
        icon: <i className='devicon-react-original'></i>,
      },
      {
        text: 'Typescript',
        icon: <i className='devicon-typescript-plain'></i>,
      },
      {
        text: 'Javascript',
        icon: <i className='devicon-javascript-plain'></i>,
      },
      {
        text: 'PHP',
        icon: <i className='devicon-php-plain'></i>,
      },
      {
        text: 'Symfony',
        icon: <i className='devicon-symfony-original'></i>,
      },
      {
        text: 'SQL',
        icon: <i class="devicon-azuresqldatabase-plain"></i>,
      },
      {
        text: 'GraphQL',
        icon: <i class="devicon-graphql-plain"></i>,
      },
      {
        text: 'AWS',
        icon: <i className='devicon-amazonwebservices-plain'></i>,
      },
      {
        text: 'Cloudflare',
        icon: <i className='devicon-cloudflare-plain'></i>,
      },
      {
        text: 'Yarn',
        icon: <i className='devicon-yarn-plain'></i>,
      },
      {
        text: 'Storybook',
        icon: <i className='devicon-storybook-plain'></i>,
      },
    ],
    highlights: [
      {
        title: 'Template Builder',
        summary: `
          A schema-based, highly customizable template builder for the configuration of app features that includes an intuitive user interface. Implemented as a standalone npm package.
        `,
        impact: [
          "Drag and drop feature 'blocks' with near-infinite nesting of blocks and a live preview of resulting configuration",
          'Schema-based configuration allows for high flexibility and reusability across multiple apps and features',
          'Example use cases: Email templates, customer-facing forms, order invoice PDF templates',
        ],
        tags: [
          {
            text: 'React',
            icon: <i className='devicon-react-original'></i>,
          },
          {
            text: 'Typescript',
            icon: <i className='devicon-typescript-plain'></i>
          },
          {
            text: 'Storybook',
            icon: <i className='devicon-storybook-plain'></i>,
          },
          {
            text: 'npm',
            icon: <i className='devicon-npm-original-wordmark'></i>,
          },
        ],
        images: [
          {
            src: require('../img/experience/gist-template-1.jpg'),
            alt: 'template builder checkout',
          },
          {
            src: require('../img/experience/gist-template-2.jpg'),
            alt: 'template builder order printer',
          },
        ],
      },
      {
        title: 'Bulk Spreadsheet Order System',
        summary: `
          A spreadsheet-based order creation system that allows for merchants or their customer's to efficiently create a large number of orders at the same time.
        `,
        impact: [
          'High-value feature for both merchants who save time and for our company, as merchants are charged per order created',
          'Loads real time merchant shipping rates and customization features to ensure that created orders are consistent with merchant requirements and store settings',
          'Features geographic validation, row virtualization, and safe copy/paste JSON handling',
        ],
        tags: [
          {
            text: 'React',
            icon: <i className='devicon-react-original'></i>,
          },
          {
            text: 'Typescript',
            icon: <i className='devicon-typescript-plain'></i>
          },
          {
            text: 'PHP',
            icon: <i className='devicon-php-plain'></i>,
          },
          {
            text: 'Symfony',
            icon: <i className='devicon-symfony-original'></i>,
          },
        ],
        images: [
          {
            src: require('../img/experience/gist-ordering.jpg'),
            alt: 'feature two screenshot 1',
          },
        ],
      },
      {
        title: 'User Interfaces',
        summary: `
          A collection of various customer and merchant-facing user interfaces implemented across different features and applications.
        `,
        impact: [
          'Multiple address cart cart layout',
          'Rules configuration interface',
        ],
        tags: [],
        images: [
          {
            src: require('../img/experience/gist-cart.jpg'),
            alt: 'cart layout',
          },
          {
            src: require('../img/experience/gist-rules.jpg'),
            alt: 'rules layout',
          },
        ],
      },
    ],
  },
];

export { experience };
