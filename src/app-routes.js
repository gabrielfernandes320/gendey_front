import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage, TasksPage, ProfilePage } from "./pages";

const routes = [
  {
    path: "/tasks",
    component: TasksPage,
    roles: ["Admin"],
  },
  {
    path: "/profile",
    component: ProfilePage,
    roles: ["Client"],
  },
  {
    path: "/home",
    component: HomePage,
  },
];

export default routes.map((route) => {
  return {
    ...route,
    component: withNavigationWatcher(route.component),
  };
});
