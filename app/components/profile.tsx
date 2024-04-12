import { Dialog, DialogContent, DialogTrigger } from "#app/components/dialog";
import { motion } from "framer-motion";

export const siteConfig = {
  title: "STU48 3rd Draft",
  creator: "Shinano Soraha",
  bio: "兵庫県出身／剣道三段／#宙通信／#宙花カメラ 🍜",
};

export const Profile = () => {
  return (
    <div className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="rounded-full w-[120px] h-[120px] overflow-hidden shadow-grid cursor-pointer">
              <img
                loading="eager"
                alt="avatar"
                src="/soraha_miker.png"
                width={120}
                height={120}
              />
            </div>
          </DialogTrigger>
          <DialogContent asChild>
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            >
              <img
                src="https://pub-a79cd0c59dcd43fcbf1a223d0657d4ed.r2.dev/soraha_stu48_qr.png"
                alt=""
              />
            </motion.div>
          </DialogContent>
        </Dialog>

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
