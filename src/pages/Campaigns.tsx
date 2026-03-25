import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Play, Pause, MoreHorizontal, Mail, Users, MessageSquare } from "lucide-react";

const campaigns = [
  {
    id: 1,
    name: "Nairobi Restaurants Q1",
    status: "active",
    leads: 342,
    sent: 280,
    opened: 187,
    replied: 34,
    startDate: "2026-03-01",
  },
  {
    id: 2,
    name: "Mombasa Hotels Outreach",
    status: "active",
    leads: 156,
    sent: 120,
    opened: 89,
    replied: 18,
    startDate: "2026-03-10",
  },
  {
    id: 3,
    name: "Tech Startups Nairobi",
    status: "paused",
    leads: 523,
    sent: 410,
    opened: 298,
    replied: 67,
    startDate: "2026-02-15",
  },
  {
    id: 4,
    name: "Real Estate Agents",
    status: "draft",
    leads: 89,
    sent: 0,
    opened: 0,
    replied: 0,
    startDate: "2026-03-20",
  },
];

const statusStyles: Record<string, string> = {
  active: "bg-success/20 text-success",
  paused: "bg-warning/20 text-warning",
  draft: "bg-muted text-muted-foreground",
};

const Campaigns = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Campaigns</h1>
            <p className="text-sm text-muted-foreground mt-1">Manage your outreach campaigns</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" /> New Campaign
          </Button>
        </div>

        <div className="grid gap-4">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="glass-card p-6 hover:border-primary/30 transition-all">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-foreground">{campaign.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusStyles[campaign.status]}`}>
                      {campaign.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">Started {campaign.startDate}</p>
                </div>
                <div className="flex items-center gap-2">
                  {campaign.status === "active" ? (
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Pause className="h-3.5 w-3.5" /> Pause
                    </Button>
                  ) : campaign.status === "paused" ? (
                    <Button variant="outline" size="sm" className="gap-1.5">
                      <Play className="h-3.5 w-3.5" /> Resume
                    </Button>
                  ) : (
                    <Button size="sm" className="gap-1.5">
                      <Play className="h-3.5 w-3.5" /> Launch
                    </Button>
                  )}
                  <button className="p-2 rounded hover:bg-muted transition-colors">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-lg font-bold text-foreground">{campaign.leads}</p>
                    <p className="text-xs text-muted-foreground">Leads</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <div>
                    <p className="text-lg font-bold text-foreground">{campaign.sent}</p>
                    <p className="text-xs text-muted-foreground">Sent</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-success" />
                  <div>
                    <p className="text-lg font-bold text-foreground">{campaign.opened}</p>
                    <p className="text-xs text-muted-foreground">Opened</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-warning" />
                  <div>
                    <p className="text-lg font-bold text-foreground">{campaign.replied}</p>
                    <p className="text-xs text-muted-foreground">Replied</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
