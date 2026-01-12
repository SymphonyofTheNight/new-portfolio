import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout('routes/components/overlay.tsx', [
        route('/', 'routes/main/main.tsx', [
            route("about", "routes/components/Aside/About.tsx"),
            route("archives", "routes/components/Aside/Archives.tsx")
        ]),
    ]),
] satisfies RouteConfig;
