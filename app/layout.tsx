import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Juliana Herrera | Frontend Developer",
  description: "Portafolio de Juliana Herrera",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return( 
    <html lang="es" className="dark">
      <body className="bg-bg text-text">
        <Navbar />
        {children}
      </body>
    </html>

  );
}   