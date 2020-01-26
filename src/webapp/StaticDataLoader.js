import { matchPath } from 'react-router-dom';

const registredLoaders = [];

export const addPreloadedRoute = (routeProps, loadAction) => registredLoaders.push({
    routeProps,
    loadAction,
});

export const getPreloadFunctions = (path) => registredLoaders
    .filter((loader) => matchPath(path, loader.routeProps))
    .map((loader) => loader.loadAction);
