import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  ...prefix("pedro", [
    route("about", "about.tsx"),
    route("post/:postId", "routes/post.tsx"),
  ]),

  layout("routes/dashboard.tsx", [
    route("finances", "routes/finances.tsx"),
    route("personal-info", "routes/personal-info.tsx"),
  ]),
] satisfies RouteConfig;
