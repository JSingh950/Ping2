import { createFileRoute } from "@tanstack/react-router";
import { PingStorePage } from "@/components/PingStorePage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ping! — The Cinematic Matrix" },
      {
        name: "description",
        content:
          "Ping! by Ping Ring Inc. is an NFC identity ring for portfolios, links, and real-world connection.",
      },
      { property: "og:title", content: "Ping! — The Cinematic Matrix" },
      {
        property: "og:description",
        content:
          "A premium black-and-electric-green product page for the Ping! NFC identity ring.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <PingStorePage variant="matrix" />;
}
