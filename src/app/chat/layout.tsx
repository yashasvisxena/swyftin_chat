import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-screen h-screen flex flex-col">
        <div className="flex flex-col flex-1 w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
