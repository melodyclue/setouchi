export const siteConfig = {
  title: "STU48 Draft 3rd",
  creator: "Shinano Soraha",
  bio: "兵庫県出身／剣道三段／#宙通信／#宙花カメラ 🍜",
};

export const Profile = () => {
  return (
    <div
      key="left-panel"
      className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full"
    >
      <div>
        <div className="rounded-full w-[120px] h-[120px] overflow-hidden">
          <img
            loading="eager"
            alt="avatar"
            src="/soraha_miker.png"
            width={120}
            height={120}
          />
        </div>

        <div className="mt-6">
          <div className="text-sm font-medium text-slate-500">
            {siteConfig.title}
          </div>
          <h1 className="mt-1 mb-2 text-4xl font-bold text-slate-800">
            {siteConfig.creator}
          </h1>
          <p className="text-md font-light text-slate-500">{siteConfig.bio}</p>
        </div>
      </div>
    </div>
  );
};
