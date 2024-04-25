import { Work_Sans } from "next/font/google";

import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";

import Room from "./Room";

import GreetingComponent from "@/components/SigninButton";
import Providers from "@/components/Providers";
import Appbar from "@/components/Appbar";

export const metadata = {
  title: "Figma Clone",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={`${workSans.className} bg-primary-grey-200`}>
      <Room>

        <Providers>
          <Appbar />
          <TooltipProvider>
            {children}
          </TooltipProvider>
        </Providers>
      </Room>
    </body>
  </html>
);

export default RootLayout;
