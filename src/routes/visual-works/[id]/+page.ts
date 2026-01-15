import { getProjectsByCategory } from '$lib/data/projects';

export function entries() {
	const projects = getProjectsByCategory('visual-works');
	return projects.map(p => ({ id: p.id }));
}
