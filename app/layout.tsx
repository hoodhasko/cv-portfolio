import "./globals.css";
import { NavBar } from "@/components/NavBar";

export const metadata = {
  title: "CV Portfolio",
  description: "React Native developer portfolio and CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-gray-50 text-gray-900">
        <NavBar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
