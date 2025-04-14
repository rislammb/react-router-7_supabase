import type { Route } from "./+types/post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  return await posts.json();
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h2>Title: {loaderData.title}</h2>
      <p>{loaderData.body}</p>
    </div>
  );
}
