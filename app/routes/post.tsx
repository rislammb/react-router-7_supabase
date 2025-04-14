import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  const postId = params.postId;
  return { postId };
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return <div>Post ID: {loaderData.postId}</div>;
}
