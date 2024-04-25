import { Dialog, DialogContent, DialogTrigger } from "#app/components/dialog";
import { motion } from "framer-motion";

export const siteConfig = {
  title: "STU48 3rd Draft",
  creator: "Shinano Soraha",
  bio: "兵庫県出身／剣道三段／#宙通信",
};

export const Profile = () => {
  return (
    <div className="flex flex-col justify-between py-6 xl:h-full xl:max-w-sm xl:py-10">
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <div className="h-[120px] w-[120px] cursor-pointer overflow-hidden rounded-full shadow-grid">
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
                src="https://image.routepia.com/soraha_stu48_qr.png"
                alt=""
              />
            </motion.div>
          </DialogContent>
        </Dialog>

        <div className="mt-6">
          <div className="text-sm font-medium text-slate-500">
            {siteConfig.title}
          </div>
          <h1 className="mb-2 mt-1 text-4xl font-bold text-slate-800">
            {siteConfig.creator}
          </h1>
          <p className="text-md text-slate-500">{siteConfig.bio}</p>
        </div>
      </div>
    </div>
  );
};
