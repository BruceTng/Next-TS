export const metadado = {
  title: 'To-do Next TS',
  description: 'Intro Next.js + Typescript',
};

export default function RootLayout({
  children,
}:{
  children:React.ReactNode;
}) {
  return(
    <html lang='pt-BR'>
      <body className="min-h-dvh bg-red-100">
        <div className="mx-auto max-w-xl p-6">{children}</div>
      </body>
    </html>
  )
}