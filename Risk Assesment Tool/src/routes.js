import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Strategy = React.lazy(() => import('./views/base/cards/Strategy/Strategy'))
const Communication = React.lazy(() => import('./views/base/cards/Strategy/Communication'))
const Governance = React.lazy(() => import('./views/base/cards/Strategy/Governance'))
const Major = React.lazy(() => import('./views/base/cards/Strategy/Major'))
const Market = React.lazy(() => import('./views/base/cards/Strategy/Market'))
const Merger = React.lazy(() => import('./views/base/cards/Strategy/Merger'))
const Research = React.lazy(() => import('./views/base/cards/Strategy/Research'))
const Resource = React.lazy(() => import('./views/base/cards/Strategy/Resource'))
const Compliance = React.lazy(() => import('./views/base/cards/Compliance/Compliance'))
const Code = React.lazy(() => import('./views/base/cards/Compliance/Code'))
const Legal = React.lazy(() => import('./views/base/cards/Compliance/Legal'))
const Regulatory = React.lazy(() => import('./views/base/cards/Compliance/Regulatory'))
const Financial = React.lazy(() => import('./views/base/cards/Financial/Financial'))
const Accounting = React.lazy(() => import('./views/base/cards/Financial/Accounting'))
const Capital = React.lazy(() => import('./views/base/cards/Financial/Capital'))
const Liquidity = React.lazy(() => import('./views/base/cards/Financial/Liquidity'))
const Markets = React.lazy(() => import('./views/base/cards/Financial/Markets'))
const Tax = React.lazy(() => import('./views/base/cards/Financial/Tax'))
const Operations = React.lazy(() => import('./views/base/cards/Operations/Operations'))
const Delivery = React.lazy(() => import('./views/base/cards/Operations/Delivery'))
const Hazards = React.lazy(() => import('./views/base/cards/Operations/Hazards'))
const Information = React.lazy(() => import('./views/base/cards/Operations/Information'))
const People = React.lazy(() => import('./views/base/cards/Operations/People'))
const Physical = React.lazy(() => import('./views/base/cards/Operations/Physical'))
const Robotics = React.lazy(() => import('./views/base/cards/Operations/Robotics'))
const Sales = React.lazy(() => import('./views/base/cards/Operations/Sales'))
const ThirdParty = React.lazy(() => import('./views/base/cards/Operations/ThirdParty'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Login', name: 'Login', element: Login },
  { path: '/Register', name: 'Register', element: Register },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: 'base', name: 'base ', element: Cards, exact: true },
  { path: '/strategy', name: 'Strategy', element: Strategy, exact: true },
  { path: '/Communication', name: 'Communication', element: Communication, exact: true },
  { path: '/Governance', name: 'Governance', element: Governance, exact: true },
  { path: '/Major', name: 'Major', element: Major, exact: true },
  { path: '/Market', name: 'Market', element: Market, exact: true },
  { path: '/Merger', name: 'Merger', element: Merger, exact: true },
  { path: '/Research', name: 'Research', element: Research, exact: true },
  { path: '/Resource', name: 'Resource', element: Resource, exact: true },
  { path: '/operations', name: 'Operations', element: Operations, exact: true },
  { path: '/Delivery', name: 'Delivery', element: Delivery, exact: true },
  { path: '/Hazards', name: 'Hazards', element: Hazards, exact: true },
  { path: '/Information', name: 'Information', element: Information, exact: true },
  { path: '/People', name: 'People', element: People, exact: true },
  { path: '/Physical', name: 'Physical', element: Physical, exact: true },
  { path: '/Robotics', name: 'Robotics', element: Robotics, exact: true },
  { path: '/Sales', name: 'Sales', element: Sales, exact: true },
  { path: '/ThirdParty', name: 'ThirdParty', element: ThirdParty, exact: true },
  { path: '/compliance', name: 'Compliance', element: Compliance, exact: true },
  { path: '/Code', name: 'Code', element: Code, exact: true },
  { path: '/Legal', name: 'Legal', element: Legal, exact: true },
  { path: '/Regulatory', name: 'Regulatory', element: Regulatory, exact: true },
  { path: '/financial', name: 'Financial', element: Financial, exact: true },
  { path: '/Accounting', name: 'Accounting', element: Accounting, exact: true },
  { path: '/Capital', name: 'Capital', element: Capital, exact: true },
  { path: '/Liquidity', name: 'Liquidity', element: Liquidity, exact: true },
  { path: '/Markets', name: 'Markets', element: Markets, exact: true },
  { path: '/Tax', name: 'Tax', element: Tax, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
