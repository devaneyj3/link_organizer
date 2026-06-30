"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.scss";

export default function LinkGrid({ links }) {
	const [sortBy, setSortBy] = useState("default");

	const sortedLinks = useMemo(() => {
		if (sortBy === "tag") {
			return [...links].sort((a, b) => {
				const tagCompare = a.tag.localeCompare(b.tag);
				return tagCompare !== 0
					? tagCompare
					: a.title.localeCompare(b.title);
			});
		}
		return links;
	}, [links, sortBy]);

	return (
		<>
			<div className={styles.controls}>
				<label htmlFor="sort-by">Sort by</label>
				<select
					id="sort-by"
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className={styles.sortSelect}>
					<option value="default">Default</option>
					<option value="tag">Tag</option>
				</select>
			</div>

			<div className={styles.linkGrid}>
				{sortedLinks.map((link) => (
					<Link
						key={`${link.url}-${link.title}`}
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
		</>
	);
}
