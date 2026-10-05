import { nunito, inter } from "@/lib/fonts"
import "./globals.css"
import { cn } from "@/lib/utils"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", nunito.variable, inter.variable, "font-sans")}
    >
      <body>{children}</body>
    </html>
  )
}
