<script lang="ts">
	import { projects } from '$lib/data/projects';

	const thumbnailProjects = projects;
</script>

<main class="homepage">
	<div class="bento-grid">
		<!-- Main Hero Card -->
		<a href="/visual-works" class="card hero-card">
			<img src="/images/homepage/hero-portrait.webp" alt="Luka Liefers - Peace Seeker" class="hero-bg" />
			<div class="hero-overlay">
				<h1 class="font-akony">LUKA<br />LIEFERS</h1>
				<div class="hero-text">
					<p>A collection of</p>
					<p class="highlight">VISUAL WORKS</p>
				</div>
			</div>
		</a>

		<!-- Connect Button -->
		<a href="https://www.linkedin.com/in/luka-liefers-112451247/" target="_blank" rel="noopener noreferrer" class="card connect-card">
			<span class="connect-text font-akony">CONNECT</span>
			<span class="connect-link">linkedin.com/luka-liefers</span>
		</a>

		<!-- Portfolio Thumbnails -->
		<a href="/visual-works" class="card thumb-card thumb-1">
			<span class="thumb-title font-akony">{thumbnailProjects[0].title.toUpperCase()}</span>
			<img src={thumbnailProjects[0].thumbnail} alt={thumbnailProjects[0].title} class="thumb-image" />
		</a>

		<a href="/visual-works" class="card thumb-card thumb-2">
			<span class="thumb-title font-akony">{thumbnailProjects[1].title.toUpperCase()}</span>
			<img src={thumbnailProjects[1].thumbnail} alt={thumbnailProjects[1].title} class="thumb-image" />
		</a>

		<a href="/visual-works" class="card thumb-card identifai-card">
			<span class="thumb-title font-akony">{thumbnailProjects[2].title.toUpperCase()}</span>
			<img src={thumbnailProjects[2].thumbnail} alt={thumbnailProjects[2].title} class="thumb-image" />
		</a>

		<a href="/visual-works" class="card thumb-card thumb-3">
			<span class="thumb-title font-akony">{thumbnailProjects[3].title.toUpperCase()}</span>
			<img src={thumbnailProjects[3].thumbnail} alt={thumbnailProjects[3].title} class="thumb-image" />
		</a>

		<!-- Create Card -->
		<a href="/visual-works" class="card create-card">
			<img src="/images/homepage/create-background.webp" alt="Create" class="create-bg" />
		</a>

		<!-- Resume Card -->
		<a href="/resume" class="card resume-card">
			<span class="font-akony resume-text">
				<span class="letter" role="presentation" onmouseenter={(e) => {
					const el = e.currentTarget;
					const x = (Math.random() - 0.5) * 20;
					const y = (Math.random() - 0.5) * 20;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}} onmouseleave={(e) => {
					e.currentTarget.style.transform = 'translate(0, 0)';
				}}>R</span><span class="letter" role="presentation" onmouseenter={(e) => {
					const el = e.currentTarget;
					const x = (Math.random() - 0.5) * 20;
					const y = (Math.random() - 0.5) * 20;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}} onmouseleave={(e) => {
					e.currentTarget.style.transform = 'translate(0, 0)';
				}}>E</span><span class="letter" role="presentation" onmouseenter={(e) => {
					const el = e.currentTarget;
					const x = (Math.random() - 0.5) * 20;
					const y = (Math.random() - 0.5) * 20;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}} onmouseleave={(e) => {
					e.currentTarget.style.transform = 'translate(0, 0)';
				}}>S</span><br /><span class="letter" role="presentation" onmouseenter={(e) => {
					const el = e.currentTarget;
					const x = (Math.random() - 0.5) * 20;
					const y = (Math.random() - 0.5) * 20;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}} onmouseleave={(e) => {
					e.currentTarget.style.transform = 'translate(0, 0)';
				}}>U</span><span class="letter" role="presentation" onmouseenter={(e) => {
					const el = e.currentTarget;
					const x = (Math.random() - 0.5) * 20;
					const y = (Math.random() - 0.5) * 20;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}} onmouseleave={(e) => {
					e.currentTarget.style.transform = 'translate(0, 0)';
				}}>M</span><span class="letter" role="presentation" onmouseenter={(e) => {
					const el = e.currentTarget;
					const x = (Math.random() - 0.5) * 20;
					const y = (Math.random() - 0.5) * 20;
					el.style.transform = `translate(${x}px, ${y}px)`;
				}} onmouseleave={(e) => {
					e.currentTarget.style.transform = 'translate(0, 0)';
				}}>E</span>
			</span>
		</a>
	</div>
</main>

<style>
	.homepage {
		height: 100vh;
		width: 100vw;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #1a1a1a;
		overflow: hidden;
	}

	.bento-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(8, 1fr);
		gap: 1.5rem;
		width: 100%;
		height: 100%;
	}

	.card {
		border-radius: 1.5rem;
		overflow: hidden;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		border: 3px solid rgba(255, 255, 255, 0.8);
		background: #2a2a2a;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow: 0 10px 40px rgba(139, 92, 246, 0.2);
	}

	/* Hero Card */
	.hero-card {
		grid-column: 1 / 6;
		grid-row: 1 / 8;
		position: relative;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center top;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		padding: 1.5rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, transparent 30%, transparent 70%, rgba(0, 0, 0, 0.6) 100%);
	}

	.hero-overlay h1 {
		font-size: 2.5rem;
		line-height: 1;
		letter-spacing: 0.05em;
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
	}

	.hero-text {
		color: white;
	}

	.hero-text p {
		font-size: 1.4rem;
		margin: 0;
		text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
	}

	.hero-text .highlight {
		font-size: 2rem;
		font-weight: 700;
		margin-left: 2rem;
	}

	/* Connect Button */
	.connect-card {
		grid-column: 1 / 6;
		grid-row: 8 / 9;
		background: linear-gradient(135deg, #e8e1f8, #c4b4e8, #a5a5d4);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.connect-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(2px 2px at 20px 30px, white, transparent),
			radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
			radial-gradient(1px 1px at 90px 40px, white, transparent),
			radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.9), transparent),
			radial-gradient(1px 1px at 160px 20px, white, transparent),
			radial-gradient(2px 2px at 200px 60px, rgba(255,255,255,0.7), transparent),
			radial-gradient(1px 1px at 50px 100px, white, transparent),
			radial-gradient(2px 2px at 100px 120px, rgba(255,255,255,0.8), transparent),
			radial-gradient(1px 1px at 180px 110px, white, transparent),
			radial-gradient(2px 2px at 70px 150px, rgba(255,255,255,0.9), transparent);
		background-size: 250px 200px;
		animation: fallingStars 8s linear infinite;
		z-index: 0;
	}

	.connect-text,
	.connect-link {
		font-size: 1.5rem;
		font-weight: 600;
		color: #2a2a2a;
		position: absolute;
		transition: opacity 0.3s ease, transform 0.3s ease;
		z-index: 1;
	}

	.connect-link {
		opacity: 0;
		transform: translateY(10px);
		text-decoration: none;
	}

	.connect-card:hover .connect-text {
		opacity: 0;
		transform: translateY(-10px);
	}

	.connect-card:hover .connect-link {
		opacity: 1;
		transform: translateY(0);
	}

	/* Thumbnail Cards */
	.thumb-card {
		border-radius: 1.5rem;
		overflow: hidden;
		position: relative;
		background: linear-gradient(135deg, #e8e1f8, #c4b4e8, #a5a5d4);
	}

	.thumb-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(2px 2px at 20px 30px, white, transparent),
			radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
			radial-gradient(1px 1px at 90px 40px, white, transparent),
			radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.9), transparent),
			radial-gradient(1px 1px at 160px 20px, white, transparent),
			radial-gradient(2px 2px at 200px 60px, rgba(255,255,255,0.7), transparent),
			radial-gradient(1px 1px at 50px 100px, white, transparent),
			radial-gradient(2px 2px at 100px 120px, rgba(255,255,255,0.8), transparent),
			radial-gradient(1px 1px at 180px 110px, white, transparent),
			radial-gradient(2px 2px at 70px 150px, rgba(255,255,255,0.9), transparent);
		background-size: 250px 200px;
		animation: fallingStars 8s linear infinite;
		z-index: 0;
	}

	@keyframes fallingStars {
		0% {
			background-position: 0 -200px;
		}
		100% {
			background-position: 100px 200px;
		}
	}

	.thumb-image {
		position: absolute;
		bottom: 0;
		right: 0;
		width: 95%;
		height: 92%;
		object-fit: cover;
		border-radius: 1rem;
		transition: transform 0.4s ease;
		z-index: 1;
		border: 3px solid rgba(255, 255, 255, 0.8);
	}

	.thumb-card:hover .thumb-image {
		transform: rotate(-10deg) translate(5%, 30%);
	}

	.thumb-title {
		position: absolute;
		top: 1.5rem;
		left: 1.5rem;
		font-size: 1.2rem;
		font-weight: 400;
		color: #2a2a2a;
		text-align: left;
		z-index: 0;
	}

	.thumb-1 {
		grid-column: 6 / 9;
		grid-row: 1 / 3;
	}

	.thumb-2 {
		grid-column: 6 / 9;
		grid-row: 3 / 5;
	}

	.identifai-card {
		grid-column: 6 / 9;
		grid-row: 5 / 7;
	}

	.thumb-3 {
		grid-column: 6 / 9;
		grid-row: 7 / 9;
	}

	/* Create Card */
	.create-card {
		grid-column: 9 / 13;
		grid-row: 1 / 6;
		background: linear-gradient(180deg, #8b4513 0%, #4a2512 50%, #2a2a2a 100%);
		position: relative;
		overflow: hidden;
	}

	.create-bg {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.create-card::before {
		content: 'CREATE';
		position: absolute;
		right: 1rem;
		top: 55%;
		transform: translateY(-50%) rotate(0deg);
		writing-mode: vertical-rl;
		font-size: 3rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.6);
		letter-spacing: 0.3em;
		z-index: 1;
	}

	/* Resume Card */
	.resume-card {
		grid-column: 9 / 13;
		grid-row: 6 / 9;
		background: linear-gradient(135deg, #1a1a2e, #16213e);
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		overflow: hidden;
	}

	.resume-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			radial-gradient(2px 2px at 20px 30px, white, transparent),
			radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent),
			radial-gradient(1px 1px at 90px 40px, white, transparent),
			radial-gradient(2px 2px at 130px 80px, rgba(255,255,255,0.9), transparent),
			radial-gradient(1px 1px at 160px 20px, white, transparent),
			radial-gradient(2px 2px at 200px 60px, rgba(255,255,255,0.7), transparent),
			radial-gradient(1px 1px at 50px 100px, white, transparent),
			radial-gradient(2px 2px at 100px 120px, rgba(255,255,255,0.8), transparent),
			radial-gradient(1px 1px at 180px 110px, white, transparent),
			radial-gradient(2px 2px at 70px 150px, rgba(255,255,255,0.9), transparent);
		background-size: 250px 200px;
		animation: fallingStars 8s linear infinite;
		z-index: 0;
	}


	.resume-card .resume-text {
		font-size: clamp(3rem, 8vw, 6rem);
		color: white;
		z-index: 2;
		letter-spacing: 0.05em;
		line-height: 0.85;
		text-align: center;
		transform: scaleY(1.7) translateY(5%);
	}

	.resume-card .letter {
		display: inline-block;
		transition: transform 0.3s ease;
		cursor: default;
	}

	/* Responsive */
	@media (max-width: 900px) {
		.bento-grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
			gap: 1rem;
		}

		.hero-card {
			grid-column: 1 / -1;
			grid-row: auto;
			min-height: 400px;
		}

		.connect-card,
		.thumb-1,
		.thumb-2,
		.thumb-3,
		.identifai-card,
		.create-card,
		.resume-card {
			grid-column: span 1;
			grid-row: auto;
			min-height: 100px;
		}

		.create-card {
			min-height: 200px;
		}
	}
</style>
