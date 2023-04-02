const StarIcon = ({ ...props }) => {
	return (
		<svg
			{...props}
			width="100%"
			height="100%"
			viewBox="0 0 120 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M60 0L65.4345 25.6877L78.541 2.93661L75.7716 29.0464L95.2671 11.459L84.5649 35.4351L108.541 24.7329L90.9536 44.2284L117.063 41.459L94.3123 54.5655L120 60L94.3123 65.4345L117.063 78.541L90.9536 75.7716L108.541 95.2671L84.5649 84.5649L95.2671 108.541L75.7716 90.9536L78.541 117.063L65.4345 94.3123L60 120L54.5655 94.3123L41.459 117.063L44.2284 90.9536L24.7329 108.541L35.4351 84.5649L11.459 95.2671L29.0464 75.7716L2.93661 78.541L25.6877 65.4345L0 60L25.6877 54.5655L2.93661 41.459L29.0464 44.2284L11.459 24.7329L35.4351 35.4351L24.7329 11.459L44.2284 29.0464L41.459 2.93661L54.5655 25.6877L60 0Z" />
		</svg>
	);
};

export default StarIcon;
