/**
 * 
 * @copyright     (c) 2026 Gist Applications Inc.
 * @author        Greg Olive greg@gist-apps.com
 * @package       portfolio
 * 
 * /src/assets/helpers/projects.tsx
 * Created:       Wed Nov 11 2026
 * Modified By:   Greg Olive
 * Last Modified: Sat Nov 14 2026
 */

import type { Project } from '@/types';
import jwotdTodayImg from '@/assets/img/japanese-word/today-light.jpg';
import jwotdTodayDarkImg from '@/assets/img/japanese-word/today-dark.jpg';
import jwotdDefinitionImg from '@/assets/img/japanese-word/definition-light.jpg';
import jwotdDefinitionDarkImg from '@/assets/img/japanese-word/definition-dark.jpg';
import jwotdSentencesImg from '@/assets/img/japanese-word/sentences-light.jpg';
import jwotdSentencesDarkImg from '@/assets/img/japanese-word/sentences-dark.jpg';
import jwotdArchiveImg from '@/assets/img/japanese-word/archive-light.jpg';
import jwotdArchiveDarkImg from '@/assets/img/japanese-word/archive-dark.jpg';
import odinHomeImg from '@/assets/img/odin/home.jpg';
import odinJavascriptImg from '@/assets/img/odin/javascript.jpg';
import odinOverviewImg from '@/assets/img/odin/overview.jpg';

const recentProjects: Project[] = [
  {
    title: 'Japanese Word of the Day',
    badge: 'Written daily by Claude',
    summary: `
      A Japanese learning site that writes itself. Every morning a scheduled job picks the next word from the
      JMdict dictionary and uses the Claude API to write a simple-Japanese definition and example sentences at
      three skill levels. Code checks every sentence, a second Claude call reviews them, and the site redeploys,
      so a new word goes live each day with anybody touching it.
    `,
    pipeline: [
      {
        label: 'Schedule',
        detail: 'A GitHub Actions cron job runs daily, two days ahead, so every time zone has its word in time.',
      },
      {
        label: 'Generate',
        detail: 'Claude Haiku writes a definition and six example sentences as schema-validated structured output.',
      },
      {
        label: 'Check',
        detail: 'A Japanese tokenizer confirms each sentence really uses the word. Readings come from the dictionary, never the model.',
      },
      {
        label: 'Review',
        detail: 'A second Claude call grades accuracy and naturalness. After three failed tries the day falls back to dictionary-only content.',
      },
      {
        label: 'Publish',
        detail: 'The job commits the day\'s data, redeploys GitHub Pages and logs token usage, and opens an issue if anything fails.',
      },
    ],
    tags: [
      {
        text: 'Claude API',
        icon: <i className='devicon-claude-plain'></i>,
      },
      {
        text: 'Astro',
        icon: <i className='devicon-astro-plain'></i>,
      },
      {
        text: 'TypeScript',
        icon: <i className='devicon-typescript-plain'></i>,
      },
      {
        text: 'Tailwind CSS',
        icon: <i className='devicon-tailwindcss-plain'></i>,
      },
      {
        text: 'GitHub Actions',
        icon: <i className='devicon-githubactions-plain'></i>,
      },
      {
        text: 'Node.js',
        icon: <i className='devicon-nodejs-plain'></i>,
      },
      {
        text: 'Vitest',
        icon: <i className='devicon-vitest-plain'></i>,
      },
    ],
    images: [
      {
        src: jwotdTodayImg,
        darkSrc: jwotdTodayDarkImg,
        alt: 'Japanese Word of the Day home page showing the word 一緒 (いっしょ), its English meaning and a beginner example sentence',
        caption: "Today's word",
      },
      {
        src: jwotdDefinitionImg,
        darkSrc: jwotdDefinitionDarkImg,
        alt: 'The word 一緒 with a Claude-written definition in simple Japanese and furigana readings above the kanji',
        caption: 'Definition by Claude',
      },
      {
        src: jwotdSentencesImg,
        darkSrc: jwotdSentencesDarkImg,
        alt: 'Intermediate example sentences for 一緒 with furigana readings and English translations',
        caption: 'Sentences by Claude',
      },
      {
        src: jwotdArchiveImg,
        darkSrc: jwotdArchiveDarkImg,
        alt: 'Archive page listing earlier words by date with search and JLPT level filters',
        caption: 'Searchable archive',
      },
    ],
    color: '#b93a26',
    darkColor: '#f07a62',
    repo: 'https://github.com/gregolive/japanese-word-of-the-day',
    link: 'https://gregolive.github.io/japanese-word-of-the-day/',
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

export { recentProjects, openSourceProjects };
