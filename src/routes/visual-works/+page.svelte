<script lang="ts">
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import { projects } from '$lib/data/projects';
	import { onMount } from 'svelte';

	const visualWorksProjects = projects.filter(p => p.category === 'visual-works');

	// Default to first project, then check URL params on client
	let selectedProjectId = $state(visualWorksProjects[0]?.id || '');

	onMount(() => {
		// Check URL params only on the client side
		const urlProjectId = $page.url.searchParams.get('project');
		if (urlProjectId && visualWorksProjects.some(p => p.id === urlProjectId)) {
			selectedProjectId = urlProjectId;
		}
	});

	function selectProject(id: string) {
		selectedProjectId = id;
	}

	function getSelectedProject() {
		return visualWorksProjects.find(p => p.id === selectedProjectId);
	}
</script>

<main class="projects-page">
	<!-- Left Section (1/4) -->
	<div class="left-section">
		<div class="title-area">
			<a href="/" class="back-link">← Back</a>
			<h1 class="font-akony">VISUAL<br />WORKS</h1>
			<p class="subtitle">A curated collection of creative projects exploring visual storytelling, digital art, and artistic expression.</p>
		</div>
		<div class="image-area">
			{#if getSelectedProject()}
				{#key selectedProjectId}
					<img
						src={getSelectedProject()?.images[0]}
						alt={getSelectedProject()?.title}
						class="project-image"
					/>
				{/key}
			{/if}
		</div>
	</div>

	<!-- Right Section (3/4) - Project List -->
	<div class="right-section">
		<div class="project-list">
			{#each visualWorksProjects as project, index}
				<button
					class="project-bar"
					class:expanded={selectedProjectId === project.id}
					onclick={() => selectProject(project.id)}
				>
					<div class="project-bar-header">
						<span class="project-number">{String(index + 1).padStart(2, '0')}</span>
						<span class="project-title font-akony">{project.title.toUpperCase()}</span>
						<span class="project-year">{project.year}</span>
						<span class="project-tags">{project.tags.join(' / ')}</span>
					</div>

					<div class="project-details-wrapper" class:open={selectedProjectId === project.id}>
						<div class="project-details">
							<p class="project-subtitle">{project.subtitle}</p>
							<p class="project-description">{project.description}</p>
							<div class="project-tags-expanded">
								{#each project.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
							<img
								src={project.images[0]}
								alt={project.title}
								class="project-image-mobile"
							/>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</div>
</main>

<style>
	.projects-page {
		min-height: 100vh;
		width: 100vw;
		background-color: #1a1a1a;
		display: grid;
		grid-template-columns: 1fr 3fr;
		color: white;
		font-family: 'Montserrat', sans-serif;
	}

	/* Left Section */
	.left-section {
		display: flex;
		flex-direction: column;
		border-right: 1px solid rgba(255, 255, 255, 0.2);
	}

	.title-area {
		padding: 2rem;
		flex: 0 0 auto;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1rem;
		color: #a855f7;
		transition: color 0.2s;
		font-size: 0.9rem;
	}

	.back-link:hover {
		color: #c084fc;
	}

	h1 {
		font-size: 2.5rem;
		letter-spacing: 0.05em;
		line-height: 1.1;
	}

	.subtitle {
		margin-top: 1.5rem;
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.6);
	}

	.image-area {
		flex: 1;
		padding: 2rem;
		display: flex;
		align-items: flex-end;
	}

	.project-image {
		width: 100%;
		height: auto;
		max-height: 60vh;
		object-fit: cover;
		border-radius: 1rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		animation: fadeIn 0.4s ease;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(0.98);
		}
		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	/* Right Section */
	.right-section {
		display: flex;
		flex-direction: column;
		overflow-y: auto;
	}

	.project-list {
		display: flex;
		flex-direction: column;
	}

	.project-bar {
		width: 100%;
		background: transparent;
		border: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		color: white;
		text-align: left;
		cursor: pointer;
		transition: background-color 0.3s ease;
		padding: 0;
	}

	.project-bar:first-child {
		border-top: 1px solid rgba(255, 255, 255, 0.2);
	}

	.project-bar:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.project-bar.expanded {
		background-color: rgba(139, 92, 246, 0.1);
	}

	.project-bar-header {
		display: grid;
		grid-template-columns: 60px 1fr 100px 1fr;
		align-items: center;
		padding: 2.5rem 2rem;
		gap: 2rem;
	}

	.project-number {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.5);
		font-family: monospace;
	}

	.project-title {
		font-size: 1.2rem;
		letter-spacing: 0.05em;
	}

	.project-year {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.5);
		text-align: center;
	}

	.project-tags {
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.4);
		text-align: right;
	}

	.project-details-wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.4s ease-out;
		overflow: hidden;
	}

	.project-details-wrapper.open {
		grid-template-rows: 1fr;
	}

	.project-details {
		min-height: 0;
		padding: 0 2rem;
		padding-left: calc(60px + 4rem);
		opacity: 0;
		transition: opacity 0.3s ease, padding 0.4s ease;
	}

	.project-details-wrapper.open .project-details {
		padding-bottom: 2rem;
		opacity: 1;
	}

	.project-subtitle {
		font-size: 1.1rem;
		color: #a855f7;
		margin-bottom: 1rem;
	}

	.project-description {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
		max-width: 600px;
	}

	.project-tags-expanded {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.tag {
		padding: 0.4rem 1rem;
		background: rgba(139, 92, 246, 0.2);
		border: 1px solid rgba(139, 92, 246, 0.4);
		border-radius: 2rem;
		font-size: 0.85rem;
		color: #c084fc;
	}

	.project-image-mobile {
		display: none;
		width: 100%;
		height: auto;
		max-height: 50vh;
		object-fit: cover;
		border-radius: 1rem;
		border: 2px solid rgba(255, 255, 255, 0.3);
		margin-top: 1.5rem;
	}

	/* Responsive - Tablet */
	@media (max-width: 900px) {
		.projects-page {
			grid-template-columns: 1fr;
			grid-template-rows: auto 1fr;
		}

		.left-section {
			border-right: none;
			border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		}

		.image-area {
			display: none;
		}

		.project-bar-header {
			grid-template-columns: 40px 1fr;
			gap: 1rem;
			padding: 1.5rem 2rem;
		}

		.project-year,
		.project-tags {
			display: none;
		}

		.project-details {
			padding-left: calc(40px + 3rem);
			padding-right: 2rem;
		}

		.project-image-mobile {
			display: block;
		}
	}

	/* Responsive - Mobile */
	@media (max-width: 600px) {
		.title-area {
			padding: 1.25rem 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 0.85rem;
			margin-top: 1rem;
		}

		.project-bar-header {
			grid-template-columns: 30px 1fr;
			gap: 0.75rem;
			padding: 1rem 1rem;
		}

		.project-number {
			font-size: 0.85rem;
		}

		.project-title {
			font-size: 1rem;
		}

		.project-details {
			padding-left: calc(30px + 1.75rem);
			padding-right: 1rem;
		}

		.project-subtitle {
			font-size: 0.95rem;
		}

		.project-description {
			font-size: 0.9rem;
			margin-bottom: 1rem;
		}

		.tag {
			padding: 0.3rem 0.75rem;
			font-size: 0.75rem;
		}
	}
</style>
