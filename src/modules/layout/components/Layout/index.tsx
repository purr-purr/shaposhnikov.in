import Cursor from '@modules/common/components/Cursor';
import ScrollProgress from '@modules/common/components/ScrollProgress';
import AppContextProvider from '@modules/layout/components/AppContextProvider';
import Footer from '@modules/layout/components/Footer';
import Header from '@modules/layout/components/Header';

import { ILayoutProps } from '@modules/layout/types';

import s from './Layout.module.scss';

const Layout = ({ children }: ILayoutProps) => {
	return (
		<AppContextProvider>
			<main className={s.container} id="main">
				<Header />
				<section className={s.inner}>
					{children}
					<Footer />
				</section>
				<ScrollProgress />
				<Cursor />
			</main>
		</AppContextProvider>
	);
};

export default Layout;
