import { home } from "./home.mjs";
import { landingRoutes } from "./landing.mjs";
import { infoRoutes } from "./info.mjs";

export const routes = [home, ...landingRoutes, ...infoRoutes];
