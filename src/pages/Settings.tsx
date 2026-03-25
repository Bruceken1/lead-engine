import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Save, User, Key, CreditCard, Bell } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Manage your account and preferences</p>
        </div>

        {/* Profile */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <User className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Profile</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Full Name</label>
              <Input defaultValue="Dime Solutions" className="bg-muted/50 border-border/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
              <Input defaultValue="admin@dime-solutions.co.ke" className="bg-muted/50 border-border/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Company</label>
              <Input defaultValue="Dime Solutions" className="bg-muted/50 border-border/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Phone</label>
              <Input defaultValue="+254 700 000 000" className="bg-muted/50 border-border/50" />
            </div>
          </div>
        </div>

        {/* API Keys */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Key className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">API Keys</h2>
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">LLM API Key</label>
            <Input type="password" placeholder="sk-..." className="bg-muted/50 border-border/50" />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Email Provider API Key</label>
            <Input type="password" placeholder="Enter API key..." className="bg-muted/50 border-border/50" />
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Notifications</h2>
          </div>
          <div className="space-y-3">
            {[
              { label: "Email when lead replies", desc: "Get notified when a lead responds" },
              { label: "Daily summary", desc: "Receive a daily automation report" },
              { label: "Campaign completion", desc: "Get notified when campaigns finish" },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-foreground">{item.label}</p>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                <Switch defaultChecked />
              </div>
            ))}
          </div>
        </div>

        {/* Subscription */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <CreditCard className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Subscription</h2>
          </div>
          <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
            <div>
              <p className="text-sm font-medium text-foreground">Free Plan</p>
              <p className="text-xs text-muted-foreground">50 leads/month · 30 emails/day</p>
            </div>
            <Button size="sm">Upgrade to Pro</Button>
          </div>
        </div>

        <Button className="gap-2">
          <Save className="h-4 w-4" /> Save Changes
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
