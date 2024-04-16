import { Link } from "@remix-run/react";

export const CelebrateBanner = () => {
  return (
    <Link
      to="https://sp.stu48.com/news/detail/17793"
      className="z-20 flex flex-col w-full h-full mb-8"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="shadow-grid bg-white/40 overflow-hidden rounded-3xl">
        <div className="text-slate-800 px-6 md:px-10 py-3">
          <div className="flex items-streach">
            <div className="text-sm">
              <h1>祝MiKERリーダー就任おめでとう🎉</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
