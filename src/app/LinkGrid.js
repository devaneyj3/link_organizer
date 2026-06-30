"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import styles from "./page.module.scss";

export default function LinkGrid({ links }) {
	const [sortBy, setSortBy] = useState("default");
	const [filterTag, setFilterTag] = useState("all");

	const tags = useMemo(
		() => [...new Set(links.map((link) => link.tag))].sort(),
		[links],
	);

	const displayedLinks = useMemo(() => {
		const filtered =
			filterTag === "all"
				? links
				: links.filter((link) => link.tag === filterTag);

		if (sortBy === "tag") {
			return [...filtered].sort((a, b) => {
				const tagCompare = a.tag.localeCompare(b.tag);
				return tagCompare !== 0
					? tagCompare
					: a.title.localeCompare(b.title);
			});
		}
		return filtered;
	}, [links, sortBy, filterTag]);

	return (
		<>
			<div className={styles.controls}>
				<label htmlFor="filter-tag">Filter by tag</label>
				<select
					id="filter-tag"
					value={filterTag}
					onChange={(e) => setFilterTag(e.target.value)}
					className={styles.controlSelect}>
					<option value="all">All tags</option>
					{tags.map((tag) => (
						<option key={tag} value={tag}>
							{tag}
						</option>
					))}
				</select>

				<label htmlFor="sort-by">Sort by</label>
				<select
					id="sort-by"
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
					className={styles.controlSelect}>
					<option value="default">Default</option>
					<option value="tag">Tag</option>
				</select>
			</div>

			{displayedLinks.length === 0 ? (
				<p className={styles.emptyState}>No links match this tag.</p>
			) : (
				<div className={styles.linkGrid}>
					{displayedLinks.map((link) => (
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
			)}
		</>
	);
}
