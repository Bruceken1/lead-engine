import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Zap, Clock, Target, Mail, Globe, Save } from "lucide-react";

const Automation = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-3xl">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Automation Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">Configure your automated lead generation pipeline</p>
        </div>

        {/* Scraping Settings */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Globe className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Lead Scraping</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground">Enable Auto-Scraping</p>
              <p className="text-xs text-muted-foreground">Automatically scrape new leads daily</p>
            </div>
            <Switch />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Keywords</label>
              <Input placeholder="restaurants, hotels, agencies..." className="bg-muted/50 border-border/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Location</label>
              <Input placeholder="Nairobi, Kenya" className="bg-muted/50 border-border/50" />
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Max leads per day</label>
            <Input type="number" placeholder="50" className="bg-muted/50 border-border/50 w-32" />
          </div>
        </div>

        {/* Email Settings */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Email Outreach</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground">Auto-Send Emails</p>
              <p className="text-xs text-muted-foreground">Automatically send AI-generated emails to new leads</p>
            </div>
            <Switch />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Daily email limit</label>
              <Input type="number" placeholder="30" className="bg-muted/50 border-border/50" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Delay between emails (min)</label>
              <Input type="number" placeholder="5" className="bg-muted/50 border-border/50" />
            </div>
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Sender email</label>
            <Input placeholder="outreach@dime-solutions.co.ke" className="bg-muted/50 border-border/50" />
          </div>
        </div>

        {/* Schedule */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">Schedule</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground">Run automation daily</p>
              <p className="text-xs text-muted-foreground">Scrape → Filter → Email pipeline runs at scheduled time</p>
            </div>
            <Switch />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Preferred time (EAT)</label>
            <Input type="time" defaultValue="09:00" className="bg-muted/50 border-border/50 w-40" />
          </div>
        </div>

        {/* AI Settings */}
        <div className="glass-card p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="h-5 w-5 text-primary" />
            <h2 className="text-base font-semibold text-foreground">AI Email Generation</h2>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground">Use AI for personalization</p>
              <p className="text-xs text-muted-foreground">Generate personalized emails using LLM based on lead data</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">AI tone</label>
            <div className="flex gap-2">
              {["Professional", "Friendly", "Direct"].map((tone) => (
                <button
                  key={tone}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    tone === "Professional"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tone}
                </button>
              ))}
            </div>
          </div>
        </div>

        <Button className="gap-2">
          <Save className="h-4 w-4" /> Save Settings
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Automation;
