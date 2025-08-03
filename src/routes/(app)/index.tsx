import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(app)/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <title>Trang chủ</title>
      <meta name="author" content="Josh" />
      <link rel="author" href="https://twitter.com/joshcstory/" />
      <p>trang chủ</p>
    </div>
  );
}
