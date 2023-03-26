import TextLink from '@modules/common/components/TextLink';

import { APP_AUTHOR } from '@utils/const';
import { SOCIALS_LIST } from '@utils/data';

import s from './Footer.module.scss';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={s.container}>
			<p className={s.signature}>{`© 2020-${currentYear} — ${APP_AUTHOR}`}</p>
			<ul className={s.socials}>
				{SOCIALS_LIST.map((item) => (
					<li key={item.title}>
						<TextLink
							href={item.link}
							title={item.title}
							className={s[`socials-list`]}
						/>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
