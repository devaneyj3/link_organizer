import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
	const links = [
		{
			title: "GitHub",
			url: "https://github.com/devaneyj3?tab=repositories",
			description: "My code repositories and projects",
			icon: "💻",
			tag: "Repo",
		},
		{
			title: "LinkedIn",
			url: "https://www.linkedin.com/in/jordandevaney/",
			description: "Professional profile and experience",
			icon: "👔",
			tag: "Social",
		},
		{
			title: "Udemy",
			url: "https://www.udemy.com/home/my-courses/lists/",
			tag: "Education",
			description: "My Udemy profile",
			icon: "🐦",
		},
		{
			title: "Everdollar",
			url: "https://www.everydollar.com/app/budget",
			tag: "Finance",
			description: "My Everdollar profile",
			icon: "💰",
		},
		{
			title: "Clearcheckbook",
			url: "https://www.clearcheckbook.com/account",
			tag: "Finance",
			description: "My Clearcheckbook profile",
			icon: "📊",
		},
		{
			title: "ChatGPT",
			url: "https://chatgpt.com/",
			tag: "AI",
			description: "My ChatGPT profile",
			icon: "🤖",
		},
		{
			title: "Gemini",
			url: "https://gemini.google.com/",
			tag: "AI",
			description: "My Gemini profile",
			icon: "✨",
		},
		{
			title: "My Portfolio",
			url: "https://jordandevaney.com/",
			tag: "Portfolio",
			description: "My Portfolio",
			icon: "🎨",
		},
		{
			title: "Vercel",
			url: "https://vercel.com/devaneyj3s-projects",
			tag: "Hosting",
			description: "My Vercel projects",
			icon: "🚀",
		},
		{
			title: "Create Invoices",
			url: "https://create-invoices-alpha.vercel.app/",
			tag: "Pay",
			description: "Create Invoices for AG-USA",
			icon: "📝",
		},
		{
			title: "AI Prompt Database",
			url: "https://brightpool.notion.site/fe947b16fe894c3e8a8a19a6b81aec2c?v=9b1d189283d54b6bba80882239ecbb1a",
			tag: "AI",
			description: "Collection of useful AI prompts and templates",
			icon: "🧠",
		},
		// Add more links as needed
	];

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Welcome to My Page</h1>
				<p>A collection of my important links and resources</p>
			</header>

			<div className={styles.linkGrid}>
				{links.map((link, index) => (
					<Link
						key={index}
						href={link.url}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.linkCard}>
						<div className={styles.linkContent}>
							<span className={styles.icon}>{link.icon}</span>
							<div className={styles.linkInfo}>
								<h2>{link.title}</h2>
								<p>{link.description}</p>
							</div>
							<span className={styles.tag}>{link.tag}</span>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
}
