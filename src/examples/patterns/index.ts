export type Examples = Record<string, { id: string; name: string; icon: string; added: string }>;

export const Examples: Examples = {
	singleton: {
		id: 'singleton',
		name: 'Singleton',
		icon: 'icon-park-outline:one',
		added: '05-23-2023'
	},
	factory: {
		id: 'factory',
		name: 'Factory',
		icon: 'material-symbols:factory-outline',
		added: '05-25-2023'
	},
	abstractFactory: {
		id: 'abstractFactory',
		name: 'Abstract Factory',
		icon: 'material-symbols:draw-abstract-outline',
		added: '06-02-2023'
	},
	builder: {
		id: 'builder',
		name: 'Builder',
		icon: 'fluent-mdl2:build-definition',
		added: '06-14-2023'
	},
	decorator: {
		id: 'decorator',
		name: 'Decorator',
		icon: 'material-symbols:layers-outline-rounded',
		added: '08-05-2023'
	},
	facade: {
		id: 'facade',
		name: 'Facade',
		icon: 'material-symbols:garage-home-outline',
		added: '08-05-2023'
	},
	mediator: {
		id: 'mediator',
		name: 'Mediator',
		icon: 'material-symbols:interactive-space-outline-sharp',
		added: '08-05-2023'
	},
	observable: {
		id: 'observable',
		name: 'Observable',
		icon: 'ph:binoculars',
		added: '08-18-2023'
	},
	visitor: {
		id: 'visitor',
		name: 'Visitor',
		icon: 'material-symbols:nest-doorbell-visitor-outline-rounded',
		added: '08-19-2023'
	},
	chainOfResponsibility: {
		id: 'chainOfResponsibility',
		name: 'Chain of Responsibility',
		icon: 'system-uicons:chain',
		added: '08-26-2023'
	},
	proxy: {
		id: 'proxy',
		name: 'Proxy',
		icon: 'eos-icons:proxy-outlined',
		added: '09-02-2023'
	},
	currying: {
		id: 'currying',
		name: 'Currying',
		icon: 'mdi:map-marker-path',
		added: '09-09-2023'
	},
	composite: {
		id: 'composite',
		name: 'Composite',
		icon: 'icomoon-free:tree',
		added: '02-24-2024'
	},
	prototype: {
		id: 'prototype',
		name: 'Prototype',
		icon: 'fe:prototype',
		added: '02-24-2024'
	},
	bridge: {
		id: 'bridge',
		name: 'Bridge',
		icon: 'mdi:bridge',
		added: '03-02-2024'
	},
	flyweight: {
		id: 'flyweight',
		name: 'Flyweight',
		icon: 'bi:feather',
		added: '03-17-2024'
	},
	hashFunction: {
		id: 'hashFunction',
		name: 'Hash Function',
		icon: 'icon-park-outline:file-hash-one',
		added: '04-08-2024'
	},
	bubbleSorting: {
		id: 'bubbleSorting',
		name: 'Bubble sorting',
		icon: 'icons8:generic-sorting-2',
		added: '04-10-2024'
	},
	insertionSorting: {
		id: 'insertionSorting',
		name: 'Insertion sorting',
		icon: 'icons8:generic-sorting-2',
		added: '04-15-2024'
	},
	bucketSorting: {
		id: 'bucketSorting',
		name: 'Bucket sorting',
		icon: 'icons8:generic-sorting-2',
		added: '04-15-2024'
	}
};
