<script lang="ts">
	import { page } from '$app/stores';
	import { getProjectById, getProjectsByCategory } from '$lib/data/projects';

	const project = $derived(getProjectById($page.params.id));
	const allProjects = getProjectsByCategory('visual-works');
</script>

<main class="project-page">
	<div class="header">
		<a href="/visual-works" class="back-link">← Back to Visual Works</a>
	</div>

	{#if project}
		<div class="project-content">
			<div class="project-info">
				<h1 class="font-akony">{project.title.toUpperCase()}</h1>
				{#if project.subtitle}
					<p class="subtitle">{project.subtitle}</p>
				{/if}
				<p class="description">{project.description}</p>
				<div class="meta">
					<span class="year">{project.year}</span>
					<div class="tags">
						{#each project.tags as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</div>
			</div>
			<div class="project-images">
				{#each project.images as image, i}
					<img src={image} alt="{project.title} - Image {i + 1}" class="project-image" />
				{/each}
			</div>
		</div>
	{:else}
		<p>Project not found.</p>
	{/if}
</main>

<style>
	.project-page {
		min-height: 100vh;
		background-color: #1a1a1a;
		color: white;
		padding: 2rem;
	}

	.header {
		margin-bottom: 2rem;
	}

	.back-link {
		color: #a855f7;
		transition: color 0.2s;
		font-size: 0.9rem;
	}

	.back-link:hover {
		color: #c084fc;
	}

	.project-content {
		max-width: 1200px;
		margin: 0 auto;
	}

	.project-info {
		margin-bottom: 3rem;
	}

	h1 {
		font-size: 3rem;
		letter-spacing: 0.05em;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #a855f7;
		margin-bottom: 1.5rem;
	}

	.description {
		font-size: 1.1rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.8);
		max-width: 700px;
		margin-bottom: 2rem;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 2rem;
		flex-wrap: wrap;
	}

	.year {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.tags {
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

	.project-images {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.project-image {
		width: 100%;
		max-width: 900px;
		height: auto;
		border-radius: 1rem;
		border: 2px solid rgba(255, 255, 255, 0.2);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2rem;
		}

		.project-page {
			padding: 1rem;
		}
	}
</style>
