export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full max-w-screen-xl container-px min-h-screen">
      <div className="pt-[56px]">{children}</div>
    </main>
  );
}
