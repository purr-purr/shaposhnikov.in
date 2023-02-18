import { FC } from 'react';

const Heading: FC<{
	text: string;
}> = ({ text }) => {
	return <h2>{text}</h2>;
};

export default Heading;
