import { Link } from "@remix-run/react";

export const CelebrateBanner = () => {
  return (
    <Link
      to="https://sp.stu48.com/news/detail/17793"
      className="z-20 mb-8 flex h-full w-full flex-col xl:hidden"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="overflow-hidden rounded-3xl bg-white/40 shadow-grid">
        <div className="px-6 py-3 text-slate-800 md:px-10">
          <div className="items-streach flex">
            <div className="text-sm">
              <h1>祝MiKERリーダー就任おめでとう🎉</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
