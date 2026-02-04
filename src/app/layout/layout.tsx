import "./globals.css";

export const metadata = {
  title: "HappyHomeByEnela",
  description: "Home styling • Organization • Photo digitizing in St. Louis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Cache prevention meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
