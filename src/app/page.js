import LinkGrid from "./LinkGrid";
import { links } from "@/data/links";
import styles from "./page.module.scss";

export default function Home() {
	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Welcome to My Page</h1>
				<p>A collection of my important links and resources</p>
			</header>

			<LinkGrid links={links} />
		</div>
	);
}
