import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "./customCursor";
import './cursor.css';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const InterMed = localFont({
  src: "./fonts/InterDisplay-Medium.woff2",
  variable: "--font-inter-med",
  weight: "100 900",
});
export const metadata = {
  title: "Vansh Pandey",
  description: "Vansh Pandey",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CustomCursor/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${InterMed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
