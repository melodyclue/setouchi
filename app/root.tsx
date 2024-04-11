import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "#app/styles/globals.css?url";

export const links = () => {
  return [
    { rel: "stylesheet", href: "https://rsms.me/inter/inter.css" },
    { rel: "stylesheet", href: styles },
    {
      rel: "alternate icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png",
    },
    { rel: "apple-touch-icon", href: "/favicons/apple-touch-icon.png" },
    {
      rel: "manifest",
      href: "/site.webmanifest",
      crossOrigin: "use-credentials",
    } as const,
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col min-h-min bg-gradient-to-r from-emerald-100/20 to-rose-200/30">
          {children}
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
