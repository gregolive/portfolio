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
      B2B e-commerce SaaS startup in the Shopify ecosystem that helps thousands of businesses sell better online. 
    `,
    responsibilities: [
      'Build customer-facing widgets that integrate seamlessly with different e-commerce storefronts and improve merchant shopping experience and sales, while being mindful of accessibility and responsive design',
      'Develop merchant-facing admin dashboards following Shopify design systems, providing intuitive interfaces for feature management and customization, analytics, and third-party service integrations',
      'Iterate rapidly on frontend user interfaces based on user feedback and analytics, ensuring high-performing and reliable product experiences while taking ownership of feature delivery from design to implementation',
      'Create robust back-end workflows that interface with the Shopify GraphQL and REST APIs alongside real-time webhooks to process core business logic and handle high-volume event triggers',
      'Deploy and manage application infrastructure on AWS and Cloudflare Workers, ensuring up-to-date API integrations, maintaining version control, and debugging production issues via back-end logs',
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
          A few examples of customer- and merchant-facing user interfaces implemented across different features and applications.
        `,
        impact: [
          'Bundle builder flow chart UI',
          'Multiple address cart cart layout',
          'Rules configuration interface',
        ],
        tags: [],
        images: [
          {
            src: require('../img/experience/gist-flow.jpeg'),
            alt: 'bundle flow',
          },
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
