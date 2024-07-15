import Sidebar from "../ui/sidebar/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-[1920px] px-3 md:px-8 2xl:px-16">
      <div className="py-4 lg:py-8 px-0 flex md:flex-row w-full">
        <div className="flex flex-col md:flex-row w-full">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
}
