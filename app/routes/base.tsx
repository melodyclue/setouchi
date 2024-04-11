import { GridField } from "#app/components/grid-panel.js";
import { Profile } from "#app/components/profile.js";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "ドレミファ そらは" },
    {
      name: "description",
      content: "STU48 ドラフト3期生 信濃宙花さんのプロフィール",
    },
  ];
};

export default function Index() {
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full">
      <div className="container relative z-20 flex flex-col w-full h-full px-6 gap:6 xl:gap-16 xl:flex-row">
        <Profile />
        <GridField />
      </div>
    </main>
  );
}
