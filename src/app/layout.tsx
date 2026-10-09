import "./globals.css";
export const metadata = { title: "TotoShine Nursery - Iganga", description: "Where Little Stars Begin to Shine" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><head><link href="https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Poppins:wght@400;600&display=swap" rel="stylesheet" /></head><body className="antialiased">{children}</body></html>;
}