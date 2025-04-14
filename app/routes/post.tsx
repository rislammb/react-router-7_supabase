import { Form, redirect, useFetcher } from "react-router";
import type { Route } from "./+types/post";

export async function clientLoader({ params }: Route.LoaderArgs) {
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  return await posts.json();
}

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`, {
      method: "DELETE",
    });
    return { isDeleted: true };
  } catch {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const isDeleted = fetcher.data?.isDeleted;

  return (
    <div>
      {!isDeleted && (
        <>
          <h2>Title: {loaderData.title}</h2>
          <p>{loaderData.body}</p>
        </>
      )}

      <fetcher.Form method="delete">
        <button type="submit">Delete</button>
      </fetcher.Form>
    </div>
  );
}
