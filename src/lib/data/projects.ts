export interface Project {
	id: string;
	title: string;
	subtitle?: string;
	description: string;
	category: 'visual-works' | 'identifai' | 'create';
	thumbnail: string;
	images: string[];
	year: number;
	tags: string[];
	link?: string;
}

export const projects: Project[] = [
	{
		id: 'project-1',
		title: 'Project One',
		subtitle: 'Subtitle here',
		description: 'A detailed description of the first project. Explain the concept, process, and outcome.',
		category: 'visual-works',
		thumbnail: '/images/projects/Zero_Two_Melvin.png',
		images: [
			'/images/projects/Zero_Two_Melvin.png'
		],
		year: 2024,
		tags: ['Illustration', 'Digital Art'],
		link: '/visual-works/project-1'
	},
	{
		id: 'project-2',
		title: 'Project Two',
		subtitle: 'Subtitle here',
		description: 'A detailed description of the second project. Explain the concept, process, and outcome.',
		category: 'visual-works',
		thumbnail: '/images/projects/IMG_1433.jpg',
		images: [
			'/images/projects/IMG_1433.jpg'
		],
		year: 2024,
		tags: ['Painting', 'Traditional Art'],
		link: '/visual-works/project-2'
	},
	{
		id: 'identifai',
		title: 'IdentifAI',
		subtitle: 'AI-Powered Recognition',
		description: 'A detailed description of the IdentifAI project. Explain the technology, purpose, and impact.',
		category: 'identifai',
		thumbnail: '/images/projects/identifyai_card.png',
		images: [
			'/images/projects/identifyai_card.png'
		],
		year: 2024,
		tags: ['AI', 'Machine Learning', 'Technology'],
		link: '/identifai'
	},
	{
		id: 'project-3',
		title: 'Project Three',
		subtitle: 'Subtitle here',
		description: 'A detailed description of the third project. Explain the concept, process, and outcome.',
		category: 'visual-works',
		thumbnail: '/images/projects/Idea_2_trial_3.png',
		images: [
			'/images/projects/Idea_2_trial_3.png'
		],
		year: 2024,
		tags: ['Sculpture', '3D Art'],
		link: '/visual-works/project-3'
	},
	{
		id: 'project-4',
		title: 'Project Four',
		subtitle: 'Subtitle here',
		description: 'A detailed description of the fourth project. Explain the concept, process, and outcome.',
		category: 'visual-works',
		thumbnail: 'https://picsum.photos/seed/abstract/400/300',
		images: [
			'https://picsum.photos/seed/abstract/800/600',
			'https://picsum.photos/seed/abstract2/800/600'
		],
		year: 2023,
		tags: ['Abstract', 'Mixed Media'],
		link: '/visual-works/project-4'
	},
	{
		id: 'project-5',
		title: 'Project Five',
		subtitle: 'Subtitle here',
		description: 'A detailed description of the fifth project. Explain the concept, process, and outcome.',
		category: 'visual-works',
		thumbnail: 'https://picsum.photos/seed/portrait/400/300',
		images: [
			'https://picsum.photos/seed/portrait/800/600',
			'https://picsum.photos/seed/portrait2/800/600'
		],
		year: 2023,
		tags: ['Portrait', 'Photography'],
		link: '/visual-works/project-5'
	},
	{
		id: 'project-6',
		title: 'Project Six',
		subtitle: 'Subtitle here',
		description: 'A detailed description of the sixth project. Explain the concept, process, and outcome.',
		category: 'visual-works',
		thumbnail: 'https://picsum.photos/seed/landscape/400/300',
		images: [
			'https://picsum.photos/seed/landscape/800/600',
			'https://picsum.photos/seed/landscape2/800/600'
		],
		year: 2023,
		tags: ['Landscape', 'Digital Art'],
		link: '/visual-works/project-6'
	}
];

export function getProjectById(id: string): Project | undefined {
	return projects.find(p => p.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
	return projects.filter(p => p.category === category);
}