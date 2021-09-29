interface RouteItemType {
	path: string
	name: string
	component: React.FC
	exact: boolean
}

interface HeaderType {
	title: string
	routes: RouteItemType[]
}

export { HeaderType, RouteItemType }
