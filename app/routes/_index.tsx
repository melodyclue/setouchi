import { GridField } from "#app/components/grid-panel.js";
import { Profile } from "#app/components/profile.js";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "しなの そらは" },
    {
      name: "description",
      content: "STU48 ドラフト3期生 信濃宙花さんのプロフィール",
    },
    {
      property: "og:title",
      content: "しなの そらは",
    },
    {
      property: "og:description",
      content: "STU48 ドラフト3期生 信濃宙花さんのプロフィール",
    },
    {
      property: "og:image",
      content:
        "https://pub-a79cd0c59dcd43fcbf1a223d0657d4ed.r2.dev/soraha_miker.png",
    },
    {
      property: "og:url",
      content: "https://setouchi.pages.dev",
    },
    {
      property: "og:site_name",
      content: "しなの そらは",
    },
    {
      property: "twitter:card",
      content: "summary_large_image",
    },
    {
      property: "twitter:creator",
      content: "@soraha_stu48",
    },
    {
      property: "twitter:site",
      content: "@soraha_stu48",
    },
  ];
};

export default function Index() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      <div className="container relative z-20 flex flex-col w-full h-full px-4 sm:px-6 gap:6 xl:gap-16 xl:flex-row">
        <Profile />
        <GridField />
      </div>
    </main>
  );
}
