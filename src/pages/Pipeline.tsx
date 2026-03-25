import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, MoreHorizontal, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Lead {
  id: number;
  name: string;
  company: string;
  value: string;
}

const stages = [
  {
    name: "New Lead",
    color: "border-primary",
    leads: [
      { id: 1, name: "John Mwangi", company: "Acme Corp", value: "KES 150K" },
      { id: 2, name: "Sarah Otieno", company: "Coast Media", value: "KES 80K" },
      { id: 3, name: "Peter Kamau", company: "Alpine Tours", value: "KES 200K" },
    ],
  },
  {
    name: "Email Sent",
    color: "border-warning",
    leads: [
      { id: 4, name: "Grace Njeri", company: "TechVentures", value: "KES 120K" },
      { id: 5, name: "David Ochieng", company: "Urban Design", value: "KES 95K" },
    ],
  },
  {
    name: "Replied",
    color: "border-success",
    leads: [
      { id: 6, name: "Faith Wambui", company: "Safari Digital", value: "KES 180K" },
      { id: 7, name: "James Kiprop", company: "Peak Marketing", value: "KES 250K" },
    ],
  },
  {
    name: "Meeting Booked",
    color: "border-[hsl(280,65%,60%)]",
    leads: [
      { id: 8, name: "Lucy Akinyi", company: "Nairobi Brands", value: "KES 300K" },
    ],
  },
  {
    name: "Closed",
    color: "border-muted-foreground",
    leads: [
      { id: 9, name: "Michael Wafula", company: "Greenfield Agri", value: "KES 220K" },
    ],
  },
];

const Pipeline = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">CRM Pipeline</h1>
            <p className="text-sm text-muted-foreground mt-1">Track leads through your sales funnel</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" /> Add Deal
          </Button>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => (
            <div key={stage.name} className="min-w-[280px] flex-shrink-0">
              <div className={`border-t-2 ${stage.color} glass-card rounded-t-none`}>
                <div className="flex items-center justify-between p-4 border-b border-border/50">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-foreground">{stage.name}</h3>
                    <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">
                      {stage.leads.length}
                    </span>
                  </div>
                  <button className="p-1 rounded hover:bg-muted transition-colors">
                    <Plus className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>

                <div className="p-3 space-y-2">
                  {stage.leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-muted/50 rounded-lg p-3 hover:bg-muted/80 transition-colors cursor-pointer group"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm font-medium text-foreground">{lead.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">{lead.company}</p>
                        </div>
                        <button className="p-1 rounded hover:bg-muted opacity-0 group-hover:opacity-100 transition-opacity">
                          <MoreHorizontal className="h-3.5 w-3.5 text-muted-foreground" />
                        </button>
                      </div>
                      <p className="text-xs font-semibold text-primary mt-2">{lead.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pipeline;
