import AboutMe from '@modules/home/components/AboutMe';
import Contacts from '@modules/home/components/Contacts';
import Experience from '@modules/home/components/Experience';
import Introduce from '@modules/home/components/Introduce';
import Projects from '@modules/home/components/Projects';
import Skills from '@modules/home/components/Skills';

const Home = () => {
	return (
		<>
			<Introduce />
			<AboutMe />
			<Skills />
			<Experience />
			<Projects />
			<Contacts />
		</>
	);
};

export default Home;
