import './Home.css';
import Banner from './Banner';
import Bio from './Bio';
import Skills from './Skills';
import PersonalProjects from './PersonalProjects';
//import Skills from './Skills';

const Home = () => {
  return (
    <>
      <Banner />
      <main>
        <Bio />
        <Skills />
        <PersonalProjects />
      </main>
    </>
  );
};

export default Home;