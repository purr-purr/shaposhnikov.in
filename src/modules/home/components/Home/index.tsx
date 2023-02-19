import Contacts from '@modules/home/components/Contacts';
import Experience from '@modules/home/components/Experience';
import Projects from '@modules/home/components/Projects';
import Skills from '@modules/home/components/Skills';

const Home = () => {
	return (
		<>
			<Skills />
			<Experience />
			<Projects />
			<Contacts />
		</>
	);
};

export default Home;
