export interface NavItem {
  id: number
  name: string
  icon: string
  route: string
  iconColor: string
}

export const navList: NavItem[] = [
  {
    id: 1,
    name: 'Dashboard',
    icon: 'home',
    route: '/',
    iconColor: '#7889E8'
  },
  {
    id: 2,
    name: 'Colaboradores',
    icon: 'groups',
    route: '/partners',
    iconColor: '#FB6340'
  },
  {
    id: 3,
    name: 'Preguntas Personalizadas',
    icon: 'ballot',
    route: '/survey',
    iconColor: '#2DCE89'
  },
]