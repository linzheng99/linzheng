export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto w-full max-w-screen-2xl px-4">
      <div className="min-h-screen pt-[56px]">{children}</div>
    </main>
  );
}
