import "./globals.css";

export const metadata = {
  title: "Maczela's Pizza",
  description: "The best pizza shop in town",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
