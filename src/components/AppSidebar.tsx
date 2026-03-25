import {
  LayoutDashboard,
  Users,
  Mail,
  FileText,
  Kanban,
  Settings,
  Zap,
  Search,
  ChevronLeft,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Overview", url: "/", icon: LayoutDashboard },
  { title: "Leads", url: "/leads", icon: Users },
  { title: "Campaigns", url: "/campaigns", icon: Mail },
  { title: "Email Templates", url: "/templates", icon: FileText },
  { title: "CRM Pipeline", url: "/pipeline", icon: Kanban },
  { title: "Automation", url: "/automation", icon: Zap },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const collapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 border-b border-sidebar-border">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div className="flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              <div>
                <h1 className="text-sm font-bold text-foreground tracking-tight">LeadEngine</h1>
                <p className="text-[10px] text-muted-foreground">by Dime Solutions</p>
              </div>
            </div>
          )}
          {collapsed && <Zap className="h-6 w-6 text-primary mx-auto" />}
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="flex items-center gap-3 px-3 py-2 rounded-md text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                      activeClassName="bg-primary/10 text-primary border-l-2 border-primary"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span className="text-sm">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        {!collapsed && (
          <div className="glass-card p-3 text-center">
            <p className="text-xs text-muted-foreground">Free Plan</p>
            <p className="text-xs text-primary font-medium mt-1">Upgrade to Pro →</p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
