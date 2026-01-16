<script lang="ts">
	const workExperience = [
		{
			id: 'job-1',
			title: 'Sales Advisor',
			company: 'Coolblue',
			year: '2024 - Present',
			description: 'Providing expert product advice and personalized recommendations to customers, ensuring exceptional service experiences at one of the Netherlands\' leading electronics retailers.',
			tags: ['Sales', 'Customer Service']
		},
		{
			id: 'job-2',
			title: 'Tutoring Coach',
			company: 'StudyWorks',
			year: '2023 - 2024',
			description: 'Coached and mentored students across various academic subjects, developing tailored learning strategies and building confidence through engaging one-on-one sessions.',
			tags: ['Teaching', 'Public Speaking']
		},
		{
			id: 'job-3',
			title: 'Educational Assistant',
			company: 'Meander College',
			year: '2021',
			description: 'Supported teachers and students in the classroom environment, assisting with lesson preparation, student guidance, and administrative tasks.',
			tags: ['Management', 'Support']
		},
		{
			id: 'job-4',
			title: 'Warehouse Manager',
			company: 'Jumbo',
			year: '2019 - 2021',
			description: 'Managed warehouse operations including inventory control, stock organization, and logistics coordination to ensure efficient store supply chains.',
			tags: ['Inventory Management']
		}
	];

	const education = [
		{
			id: 'edu-1',
			title: 'BSc Communication & Multimedia Design',
			institution: 'NHL Stenden Leeuwarden',
			year: '2025 - Present',
			description: 'Studying the intersection of communication, design, and technology. Developing creative solutions through collaborative projects and hands-on design work.',
			tags: ['Design', 'Teamwork']
		},
		{
			id: 'edu-2',
			title: 'BSc Artificial Intelligence',
			institution: 'Rijksuniversiteit Groningen',
			year: '2021 - 2024',
			description: 'Comprehensive study of machine learning, neural networks, cognitive science, and programming. Developed strong analytical and problem-solving skills through research projects.',
			tags: ['Coding', 'Scientific Research', 'Psychology']
		},
		{
			id: 'edu-3',
			title: 'BSc Physics',
			institution: 'Rijksuniversiteit Groningen',
			year: '2020 - 2021',
			description: 'Foundation in theoretical and experimental physics, developing rigorous scientific methodology and mathematical modeling skills.',
			tags: ['Scientific Research']
		},
		{
			id: 'edu-4',
			title: 'VWO Gymnasium',
			institution: 'Gymnasium Celeanum',
			year: '2014 - 2020',
			description: 'Pre-university education with emphasis on classical languages (Latin & Greek), advanced mathematics, sciences, and humanities.',
			tags: ['STEM', 'Classical Languages', 'Social Studies']
		}
	];

	const certificates = [
		{
			id: 'cert-1',
			title: 'Cambridge English: Advanced (CAE)',
			institution: 'Cambridge English',
			year: '2017 - 2019',
			description: 'Achieved C2 proficiency level, demonstrating native-speaker equivalent command of written and spoken English.',
			tags: ['C2 proficiency', 'Native Speaker']
		},
		{
			id: 'cert-2',
			title: 'Cambridge English: First (FCE)',
			institution: 'Cambridge English',
			year: '2015 - 2017',
			description: 'Attained B2 upper-intermediate certification, proving confident communication skills in professional and academic contexts.',
			tags: ['B2 Upper-Intermediate', 'Confident Speaker']
		}
	];

	let selectedWorkId = $state('');
	let selectedEduId = $state('');
	let selectedCertId = $state('');

	function selectWork(id: string) {
		selectedWorkId = selectedWorkId === id ? '' : id;
	}

	function selectEdu(id: string) {
		selectedEduId = selectedEduId === id ? '' : id;
	}

	function selectCert(id: string) {
		selectedCertId = selectedCertId === id ? '' : id;
	}
</script>

<main class="resume-page">
	<!-- Header -->
	<div class="header">
		<a href="/" class="back-link">← Back</a>
		<h1 class="font-akony">RESUME</h1>
		<p class="subtitle">Professional experience and educational background.</p>
	</div>

	<!-- Work Experience Section -->
	<section class="section">
		<h2 class="section-title font-akony">WORK EXPERIENCE</h2>
		<div class="item-list">
			{#each workExperience as job, index}
				<button
					class="item-bar"
					class:expanded={selectedWorkId === job.id}
					onclick={() => selectWork(job.id)}
				>
					<div class="item-bar-header">
						<span class="item-number">{String(index + 1).padStart(2, '0')}</span>
						<div class="item-title-wrapper">
							<span class="item-title">{job.title.toUpperCase()}</span>
							<span class="item-mobile-info">{job.company} · {job.year}</span>
						</div>
						<span class="item-year">{job.year}</span>
						<span class="item-meta">{job.company}</span>
					</div>

					<div class="item-details-wrapper" class:open={selectedWorkId === job.id}>
						<div class="item-details">
							<p class="item-description">{job.description}</p>
							<div class="item-tags">
								{#each job.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</section>

	<!-- Education Section -->
	<section class="section">
		<h2 class="section-title font-akony">EDUCATION</h2>
		<div class="item-list">
			{#each education as edu, index}
				<button
					class="item-bar"
					class:expanded={selectedEduId === edu.id}
					onclick={() => selectEdu(edu.id)}
				>
					<div class="item-bar-header">
						<span class="item-number">{String(index + 1).padStart(2, '0')}</span>
						<div class="item-title-wrapper">
							<span class="item-title">{edu.title.toUpperCase()}</span>
							<span class="item-mobile-info">{edu.institution} · {edu.year}</span>
						</div>
						<span class="item-year">{edu.year}</span>
						<span class="item-meta">{edu.institution}</span>
					</div>

					<div class="item-details-wrapper" class:open={selectedEduId === edu.id}>
						<div class="item-details">
							<p class="item-description">{edu.description}</p>
							<div class="item-tags">
								{#each edu.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</section>

	<!-- Certificates Section -->
	<section class="section">
		<h2 class="section-title font-akony">ADDITIONAL CERTIFICATES</h2>
		<div class="item-list">
			{#each certificates as cert, index}
				<button
					class="item-bar"
					class:expanded={selectedCertId === cert.id}
					onclick={() => selectCert(cert.id)}
				>
					<div class="item-bar-header">
						<span class="item-number">{String(index + 1).padStart(2, '0')}</span>
						<div class="item-title-wrapper">
							<span class="item-title">{cert.title.toUpperCase()}</span>
							<span class="item-mobile-info">{cert.institution} · {cert.year}</span>
						</div>
						<span class="item-year">{cert.year}</span>
						<span class="item-meta">{cert.institution}</span>
					</div>

					<div class="item-details-wrapper" class:open={selectedCertId === cert.id}>
						<div class="item-details">
							<p class="item-description">{cert.description}</p>
							<div class="item-tags">
								{#each cert.tags as tag}
									<span class="tag">{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				</button>
			{/each}
		</div>
	</section>
</main>

<style>
	.resume-page {
		min-height: 100vh;
		width: 100vw;
		background-color: #1a1a1a;
		color: white;
		font-family: 'Montserrat', sans-serif;
	}

	/* Header */
	.header {
		padding: 2rem 3rem;
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
		margin-top: 1rem;
		font-size: 0.95rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.6);
	}

	/* Section */
	.section {
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
	}

	.section:last-child {
		border-bottom: none;
	}

	.section-title {
		padding: 2rem 3rem;
		font-size: 1rem;
		letter-spacing: 0.1em;
		color: #a855f7;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	/* Item List */
	.item-list {
		display: flex;
		flex-direction: column;
	}

	.item-bar {
		width: 100%;
		background: transparent;
		border: none;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		color: white;
		text-align: left;
		cursor: pointer;
		transition: background-color 0.3s ease;
		padding: 0;
	}

	.item-bar:last-child {
		border-bottom: none;
	}

	.item-bar:hover {
		background-color: rgba(255, 255, 255, 0.05);
	}

	.item-bar.expanded {
		background-color: rgba(139, 92, 246, 0.1);
	}

	.item-bar-header {
		display: grid;
		grid-template-columns: 60px 1fr 150px 1fr;
		align-items: center;
		padding: 2rem 3rem;
		gap: 2rem;
	}

	.item-number {
		font-size: 1rem;
		color: rgba(255, 255, 255, 0.5);
		font-family: monospace;
	}

	.item-title-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.item-title {
		font-size: 1.2rem;
		letter-spacing: 0.05em;
	}

	.item-mobile-info {
		display: none;
		font-size: 0.85rem;
		color: rgba(255, 255, 255, 0.5);
	}

	.item-year {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.5);
		text-align: center;
	}

	.item-meta {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.4);
		text-align: right;
	}

	.item-details-wrapper {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows 0.4s ease-out;
		overflow: hidden;
	}

	.item-details-wrapper.open {
		grid-template-rows: 1fr;
	}

	.item-details {
		min-height: 0;
		padding: 0 3rem;
		padding-left: calc(60px + 5rem);
		opacity: 0;
		transition: opacity 0.3s ease, padding 0.4s ease;
	}

	.item-details-wrapper.open .item-details {
		padding-bottom: 2rem;
		opacity: 1;
	}

	.item-description {
		font-size: 1rem;
		line-height: 1.6;
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 1.5rem;
		max-width: 600px;
	}

	.item-tags {
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

	/* Responsive - Tablet */
	@media (max-width: 900px) {
		.header {
			padding: 1.5rem 2rem;
		}

		h1 {
			font-size: 2rem;
		}

		.section-title {
			padding: 1.5rem 2rem;
		}

		.item-bar-header {
			grid-template-columns: 40px 1fr;
			gap: 1rem;
			padding: 1.5rem 2rem;
		}

		.item-year,
		.item-meta {
			display: none;
		}

		.item-mobile-info {
			display: block;
		}

		.item-details {
			padding-left: calc(40px + 3rem);
			padding-right: 2rem;
		}
	}

	/* Responsive - Mobile */
	@media (max-width: 600px) {
		.header {
			padding: 1.25rem 1rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		.subtitle {
			font-size: 0.85rem;
			margin-top: 0.75rem;
		}

		.section-title {
			padding: 1rem 1rem;
			font-size: 0.9rem;
		}

		.item-bar-header {
			grid-template-columns: 30px 1fr;
			gap: 0.75rem;
			padding: 1rem 1rem;
		}

		.item-number {
			font-size: 0.85rem;
		}

		.item-title {
			font-size: 0.95rem;
		}

		.item-details {
			padding-left: calc(30px + 1.75rem);
			padding-right: 1rem;
		}

		.item-description {
			font-size: 0.9rem;
			margin-bottom: 1rem;
		}

		.tag {
			padding: 0.3rem 0.75rem;
			font-size: 0.75rem;
		}
	}
</style>
