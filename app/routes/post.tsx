import { Form, redirect } from "react-router";
import type { Route } from "./+types/post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  return await posts.json();
}

export async function clientAction({ params }: Route.LoaderArgs) {
  await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
    method: "DELETE",
  });

  return redirect("/");
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h2>Title: {loaderData.title}</h2>
      <p>{loaderData.body}</p>

      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
    </div>
  );
}
