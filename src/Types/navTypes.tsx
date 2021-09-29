interface RouteItemType {
	path: string
	name: string
	component: React.FC
	exact: boolean
}

interface HeaderType {
	routes: RouteItemType[]
	children: React.Component
}

export { HeaderType, RouteItemType }
