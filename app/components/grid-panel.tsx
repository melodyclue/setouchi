"use client";

import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { SocialGrid } from "./grid-items/grid-social";
import { GridItem, SizeVariant } from "./grid-item";
import { ImageGrid } from "./grid-items/grid-image";
import { MusicGrid } from "./grid-items/grid-music";
import { TagGrid } from "./grid-items/grid-tag";

export const GridField = () => {
  const [scope, animate] = useAnimate();
  const staggerGridItems = stagger(0.02, {
    startDelay: 0.2,
  });

  useEffect(() => {
    if (scope.current) {
      animate(
        "div",
        {
          scale: 1,
          y: 0,
          opacity: 1,
        },
        {
          type: "spring",
          stiffness: 330,
          damping: 35,
          delay: staggerGridItems,
        }
      );
    }
  }, [animate, scope, staggerGridItems]);

  return (
    <div
      ref={scope}
      className="container mx-auto grid grid-cols-4 md:grid-cols-8 xl:grid-cols-12
     grid-rows-8 md:grid-rows-4 xl:grid-rows-3 gap-4 md:gap-6 xl:gap-6
     mb-8 md:min-h-[50rem] lg:min-h-[50rem] lg:mb-10 xl:min-h-[50rem] xl:pt-8 "
    >
      {items.map(({ component, key, size }, index) => (
        <GridItem key={key} size={size}>
          {component}
        </GridItem>
      ))}
    </div>
  );
};

type ItemProps = {
  size: SizeVariant;
  component: JSX.Element;
  key: string;
};

const items: ItemProps[] = [
  {
    size: "2x1",
    key: "twitter",
    component: (
      <SocialGrid
        className="h-full flex flex-col gap-2 bg-twitter/5"
        item={{
          title: "Twitter",
          icon: "twitter",
          link: "https://twitter.com/soraha_stu48",
          username: "@soraha_stu48",
          buttonTitle: "Follower",
          buttonSecondaryText: "1.8万",
          color: "#55ACEE",
          iconColor: "bg-twitter",
          description: "兵庫県出身 ／ 剣道三段 ／ #宙通信 ／ #宙花カメラ 🍜",
        }}
      />
    ),
  },

  {
    size: "2x1",
    key: "instagram",
    component: (
      <SocialGrid
        className="h-full flex flex-col gap-2 bg-instagram/5"
        item={{
          title: "Instagram",
          icon: "instagram",
          link: "https://www.instagram.com/soraha_stu48",
          username: "@soraha_stu48",
          buttonTitle: "Follower",
          buttonSecondaryText: "1260",
          color: "#FF6D60",
          iconColor:
            "bg-gradient-to-br from-[#b455f3] via-[#ff3b3b] to-[#fcb045]",
          description: "瀬戸内のグルメ情報、瀬戸内の魅力を発信",
        }}
      />
    ),
  },
  {
    size: "4x3",
    key: "image",
    component: (
      <ImageGrid
        className="h-full flex flex-col gap-2"
        item={{
          image:
            "https://pub-a79cd0c59dcd43fcbf1a223d0657d4ed.r2.dev/soraha.jpeg",
          link: "https://x.com/soraha_stu48/status/1777652720398188979",
        }}
      />
    ),
  },
  {
    size: "2x1",
    key: "tag",
    component: (
      <TagGrid
        className="h-full w-full p-6"
        item={{
          title: "信濃 宙花（しなの そらは）",
          icon: "magic-wnad",
          color: "#99DBF5",
          tags: [
            {
              title: "#そらは",
              color: "#FF6868",
            },
            {
              title: "#2003年8月9日生まれ",
              color: "#FF6868",
            },
            {
              title: "#獅子座",
              color: "#FF6868",
            },
            {
              title: "#A型",
              color: "#FF6868",
            },
            {
              title: "#赤×緑",
              color: "#FF6868",
            },
            {
              title: "#カメラ",
              color: "#FF6868",
            },
            {
              title: "#ラーメン",
              color: "#FF6868",
            },
            {
              title: "#名探偵コナン",
              color: "#FF6868",
            },
          ],
        }}
      />
    ),
  },
  {
    size: "2x1",
    key: "showroom",
    component: (
      <SocialGrid
        className="h-full flex flex-col gap-2"
        item={{
          title: "SHOWROOM",
          icon: "paper-plane",
          link: "https://www.showroom-live.com/r/48_SHINANO_SORAHA",
          username: "@soraha_stu48",
          buttonTitle: "Follower",
          buttonSecondaryText: "14k",
          color: "#9ED2BE",
          description:
            "#まったり配信 ／ #カラオケ配信 ／#料理配信 ／ #購入したもの紹介配信",
        }}
      />
    ),
  },
  {
    size: "2x1",
    key: "music",
    component: (
      <MusicGrid
        className="h-full flex flex-col gap-2"
        item={{
          layout: "2x1",
          title: "Music",
          icon: "play",
          link: "https://open.spotify.com/playlist/4FMc7sIHoH04kAanmQaUCe?si=84b1fe019f44474e",
          color: "#7AA2E3",
          songs: [
            {
              title: "#やがて菜の花が咲く頃",
              link: "https://music.apple.com/jp/album/%E3%82%84%E3%81%8C%E3%81%A6-%E8%8F%9C%E3%81%AE%E8%8A%B1%E3%81%8C%E5%92%B2%E3%81%8F%E9%A0%83/1451565449?i=1451565452",
              color: "#FFD700",
            },
            {
              title: "#船から降りた僕たちは",
              link: "https://music.apple.com/jp/album/%E8%88%B9%E3%81%8B%E3%82%89%E9%99%8D%E3%82%8A%E3%81%9F%E5%83%95%E3%81%9F%E3%81%A1%E3%81%AF/1616820916?i=1616820935",
              color: "#2E8B57",
            },
            {
              title: "#自然淘汰主義",
              link: "https://music.apple.com/jp/album/%E8%87%AA%E7%84%B6%E6%B7%98%E6%B1%B0%E4%B8%BB%E7%BE%A9/1675294316?i=1675294318",
              color: "#006400",
            },
            {
              title: "#君は何を後悔するのか",
              link: "https://music.apple.com/jp/album/%E5%90%9B%E3%81%AF%E4%BD%95%E3%82%92%E5%BE%8C%E6%82%94%E3%81%99%E3%82%8B%E3%81%AE%E3%81%8B/1714585003?i=1714585004",
              color: "#4682B4",
            },
          ],
        }}
      />
    ),
  },
];
