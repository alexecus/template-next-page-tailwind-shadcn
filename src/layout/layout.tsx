import Header from "@/components/common/header";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="Layout relative z-1">
      <div className="Background absolute -z-10 h-full w-full animate-pulse bg-gray-200"></div>

      <div className="mx-auto flex max-h-screen min-h-screen flex-col lg:max-w-[1400px] xl:max-w-[1600px]">
        <Header />
        <main className="mx-4 flex min-h-0 flex-1 flex-col px-4 lg:mx-12 lg:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
