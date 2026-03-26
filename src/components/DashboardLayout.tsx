import { ReactNode } from "react";
import { Home, Users, Target, Settings, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const navItems = [
  { icon: Home, label: "Overview", href: "/" },
  { icon: Users, label: "Leads", href: "/leads" },
  { icon: BarChart3, label: "Campaigns", href: "/campaigns" },
  { icon: Target, label: "Pipeline", href: "/pipeline" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function DashboardLayout({ children }: Props) {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 border-r bg-card flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold tracking-tight text-primary">Lead Engine</h2>
          <p className="text-xs text-muted-foreground mt-1">Sales Automation</p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t text-xs text-muted-foreground">
          Powered by Cloudflare + Supabase
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto bg-background">
        {children}
      </div>
    </div>
  );
}