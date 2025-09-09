import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('routes/components/overlay.tsx', [
        route('/', 'routes/components/main/main.tsx'),
    ]),
] satisfies RouteConfig;
