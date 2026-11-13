import type { Job } from '../../types';
import experienceGistAppsLogoImg from '../img/experience/gist-apps-logo.jpeg';
import experienceGistTemplate1Img from '../img/experience/gist-template-1.jpg';
import experienceGistTemplate2Img from '../img/experience/gist-template-2.jpg';
import experienceGistOrderingImg from '../img/experience/gist-ordering.jpg';
import experienceGistFlowImg from '../img/experience/gist-flow.jpeg';
import experienceGistCartImg from '../img/experience/gist-cart.jpg';
import experienceGistRulesImg from '../img/experience/gist-rules.jpg';

const experience: Job[] = [
  {
    company: 'Gist Applications',
    logo: experienceGistAppsLogoImg,
    link: 'https://gist-apps.com/',
    location: 'Victoria, BC, Canada',
    color: '#202e37',
    darkColor: '#1fbfa3', // teal from the Gist logo, readable on the dark background
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
        text: 'TypeScript',
        icon: <i className='devicon-typescript-plain'></i>,
      },
      {
        text: 'JavaScript',
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
        icon: <i className='devicon-azuresqldatabase-plain'></i>,
      },
      {
        text: 'GraphQL',
        icon: <i className='devicon-graphql-plain'></i>,
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
            text: 'TypeScript',
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
            src: experienceGistTemplate1Img,
            alt: 'Template builder editing a textarea field on a checkout form, beside a live order summary preview',
            caption: 'Checkout form fields editor',
          },
          {
            src: experienceGistTemplate2Img,
            alt: 'Template builder with a nested tree of rows, columns and blocks beside a live packing slip preview',
            caption: 'Packing slip template',
          },
        ],
      },
      {
        title: 'Bulk Spreadsheet Order System',
        summary: `
          A spreadsheet-based order creation system that allows merchants or their customers to efficiently create a large number of orders at the same time.
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
            text: 'TypeScript',
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
            src: experienceGistOrderingImg,
            alt: 'Spreadsheet for creating a multi-address order, with products, gift messages and a shipping address on each row',
            caption: 'Multi-address order spreadsheet',
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
          'Multiple address cart layout',
          'Rules configuration interface',
        ],
        tags: [],
        images: [
          {
            src: experienceGistFlowImg,
            alt: 'Bundle builder flow chart of product, form, condition and collection steps branching on true or false',
            caption: 'Bundle builder flow chart',
          },
          {
            src: experienceGistCartImg,
            alt: 'Cart shipping two products to different saved addresses',
            caption: 'Multiple address cart',
          },
          {
            src: experienceGistRulesImg,
            alt: 'Rule editor that hides the Standard delivery method when the delivery-method attribute equals express',
            caption: 'Rules configuration',
          },
        ],
      },
    ],
  },
];

export { experience };
