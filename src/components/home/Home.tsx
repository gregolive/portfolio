import Banner from './banner/Banner';
import Bio from './Bio';
import Skills from './skills/Skills';
import Experience from './experience/Experience';
import Contact from './contact/Contact';
import TopBtn from './top-btn/TopBtn';

const Home = () => {
  return (
    <main>
      <Banner />
      <Bio />
      <Skills />
      <Experience />
      <Contact />
      <TopBtn />
    </main>
  );
};

export default Home;
