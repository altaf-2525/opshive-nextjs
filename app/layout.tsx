import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import "./globals.css";

export const metadata = {
  title: "Opshive",
  description: "Cloud Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
