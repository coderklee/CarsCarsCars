import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Inventory from "../pages/Inventory";

interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string
}

const routes: RouteType[] = [
    {
        path: '',
        component: Home,
        name: 'Home Screen',
    },
    {
        path: '/about',
        component: About,
        name: 'About',
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'Dashboard',
    },
    {
        path: '/inventory',
        component: Inventory,
        name: 'Inventory',
    }
];

export default routes