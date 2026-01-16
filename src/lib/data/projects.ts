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
		title: 'Custom Cards',
		subtitle: 'A collection of custom playing cards',
		description: 'This project is a custom collection of playing cards, each digitally illustrated by hand to create a fully tailored deck. Every card was designed with consistency, detail, and character in mind, blending traditional playing card structure with a unique visual style. The result is a cohesive, original deck that showcases both illustration skill and thoughtful design.',
		category: 'visual-works',
		thumbnail: '/images/projects/illustration-cards.webp',
		images: [
			'/images/projects/digital-illustration.webp'
		],
		year: 2024,
		tags: ['Illustration', 'Digital Art'],
		link: '/visual-works/project-1'
	},
	{
		id: 'project-2',
		title: 'PAN Amsterdam',
		subtitle: 'Product and Promotional Photography',
		description: 'This project captures a promotional photography shoot for Heutink Ikonen during the PAN Amsterdam Art Expo. The focus was on highlighting the gallery\'s presence, artworks, and atmosphere within the dynamic setting of the fair. Through careful composition and lighting, the images were created to reflect both the refinement of the artworks and the energy of the exhibition environment.',
		category: 'visual-works',
		thumbnail: '/images/projects/traditional-painting.webp',
		images: [
			'/images/projects/traditional-painting.webp'
		],
		year: 2024,
		tags: ['Photography', 'Exposition'],
		link: '/visual-works/project-2'
	},
	{
		id: 'identifai',
		title: 'IdentifAI',
		subtitle: 'Mobile app designed to help people take control in the age of AI',
		description: 'Together with my project team, I developed a tool designed to help users identify AI-generated content by providing them with the insights they need to make informed judgments. Rather than simply presenting information, the project emphasizes user agency, placing decision-making power directly in the hands of the user. Our goal is to empower users and equip them to confidently navigate the evolving information landscape.',
		category: 'visual-works',
		thumbnail: '/images/projects/identifai-card.webp',
		images: [
			'/images/projects/identifai-card.webp'
		],
		year: 2024,
		tags: ['UI/UX', 'AI'],
		link: '/identifai'
	},
	{
		id: 'project-3',
		title: "Zion's Throne",
		subtitle: 'A visual exploration of creatures inspired by and developed from existing written game lore',
		description: "This project features a series of concept art pieces created for a game, developed through digitally hand-drawn illustrations. The work focuses on exploring visual themes, environments, and characters to help define the game's world and tone. Each piece was designed to support world-building and convey a clear artistic direction for the overall experience.",
		category: 'visual-works',
		thumbnail: '/images/projects/flying-demon.webp',
		images: [
			'/images/projects/flying-demon.webp'
		],
		year: 2024,
		tags: ['Game Design', 'Concept Art', 'Illustration'],
		link: '/visual-works/project-3'
	}
];

export function getProjectById(id: string): Project | undefined {
	return projects.find(p => p.id === id);
}

export function getProjectsByCategory(category: Project['category']): Project[] {
	return projects.filter(p => p.category === category);
}