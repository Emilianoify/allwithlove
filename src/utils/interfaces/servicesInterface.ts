export interface serviceDetails {
	src: string;
	id: string;
	description?: string;
	name: string;
}

export interface serviceInterface {
	startedServices: serviceDetails[];
	allServices: serviceDetails[];
	serviceDetail: serviceDetails;
}
