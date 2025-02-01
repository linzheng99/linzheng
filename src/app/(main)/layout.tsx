export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full max-w-screen-xl container-px min-h-[100dvh] flex flex-col">
      <div className="pt-[56px] flex-1">{children}</div>
    </main>
  );
}
