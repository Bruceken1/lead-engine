import { DashboardLayout } from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Plus, Copy, Edit, Trash2, Mail } from "lucide-react";

const templates = [
  {
    id: 1,
    name: "Cold Outreach - Services",
    subject: "Grow your {{business_name}} online presence",
    preview: "Hi {{name}}, I noticed {{business_name}} has a great reputation in {{location}}. I'd love to help you expand your digital footprint...",
    category: "Cold Outreach",
    usedIn: 3,
  },
  {
    id: 2,
    name: "Follow Up - No Reply",
    subject: "Quick follow-up for {{business_name}}",
    preview: "Hi {{name}}, I wanted to follow up on my previous email about helping {{business_name}} grow online...",
    category: "Follow Up",
    usedIn: 2,
  },
  {
    id: 3,
    name: "Meeting Request",
    subject: "15 minutes to discuss {{business_name}} growth?",
    preview: "Hi {{name}}, I've been researching businesses in {{industry}} and {{business_name}} stood out. Would you be open to a quick call?",
    category: "Meeting",
    usedIn: 1,
  },
  {
    id: 4,
    name: "Case Study Share",
    subject: "How we helped a business like {{business_name}}",
    preview: "Hi {{name}}, I wanted to share a quick case study of how we helped a similar {{industry}} business increase their leads by 300%...",
    category: "Value Add",
    usedIn: 2,
  },
];

const categoryColors: Record<string, string> = {
  "Cold Outreach": "bg-primary/20 text-primary",
  "Follow Up": "bg-warning/20 text-warning",
  "Meeting": "bg-success/20 text-success",
  "Value Add": "bg-[hsl(280,65%,60%)]/20 text-[hsl(280,65%,60%)]",
};

const Templates = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Email Templates</h1>
            <p className="text-sm text-muted-foreground mt-1">AI-powered email templates for outreach</p>
          </div>
          <Button size="sm" className="gap-2">
            <Plus className="h-4 w-4" /> New Template
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {templates.map((template) => (
            <div key={template.id} className="glass-card p-6 hover:border-primary/30 transition-all group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <h3 className="text-sm font-semibold text-foreground">{template.name}</h3>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[template.category]}`}>
                  {template.category}
                </span>
              </div>

              <p className="text-xs font-medium text-foreground/80 mb-2">
                Subject: {template.subject}
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                {template.preview}
              </p>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-border/50">
                <span className="text-xs text-muted-foreground">
                  Used in {template.usedIn} campaign{template.usedIn !== 1 ? "s" : ""}
                </span>
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 rounded hover:bg-muted transition-colors" title="Duplicate">
                    <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1.5 rounded hover:bg-muted transition-colors" title="Edit">
                    <Edit className="h-3.5 w-3.5 text-muted-foreground" />
                  </button>
                  <button className="p-1.5 rounded hover:bg-muted transition-colors" title="Delete">
                    <Trash2 className="h-3.5 w-3.5 text-destructive" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Templates;
