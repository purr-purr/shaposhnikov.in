import { SOCIALS_LIST} from "@utils/data";
import s from "./Footer.module.scss";
import {APP_AUTHOR} from "@utils/const";


const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p>{`> 2020-${currentYear} — ${APP_AUTHOR}`}</p>
			<ul className={s.socials}>
				{SOCIALS_LIST.map((item) => (
					<li key={item.title}>
						<a href={`#${item.link}`} className={s[`socials-list`]}>{item.title}</a>
					</li>
				))}
			</ul>
		</footer>
	);
};

export default Footer;
