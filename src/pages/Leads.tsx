import { DashboardLayout } from "@/components/DashboardLayout";
import { Search, Filter, Download, Plus, MoreHorizontal, Globe, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const mockLeads = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: [
    "Acme Corp", "TechVentures", "Safari Digital", "Nairobi Brands", "Coast Media",
    "KenyaBiz Solutions", "Savanna Tech", "Urban Design Co", "Peak Marketing", "Rift Valley Imports",
    "Mombasa Logistics", "Greenfield Agri", "Crystal Clear Water", "Serene Spa", "Alpine Tours",
    "Bright Future Academy", "Royal Furniture", "Nile Insurance", "Metro Auto", "Skyline Properties"
  ][i],
  email: `info@company${i + 1}.co.ke`,
  phone: `+254 7${String(Math.floor(Math.random() * 100000000)).padStart(8, '0')}`,
  website: `https://company${i + 1}.co.ke`,
  address: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"][i % 5] + ", Kenya",
  status: ["new", "contacted", "replied", "meeting", "closed"][i % 5] as string,
  source: ["Google Maps", "Directory", "LinkedIn"][i % 3],
  addedAt: new Date(Date.now() - Math.random() * 7 * 86400000).toLocaleDateString(),
}));

const statusColors: Record<string, string> = {
  new: "bg-primary/20 text-primary",
  contacted: "bg-warning/20 text-warning",
  replied: "bg-success/20 text-success",
  meeting: "bg-[hsl(280,65%,60%)]/20 text-[hsl(280,65%,60%)]",
  closed: "bg-muted text-muted-foreground",
};

const Leads = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filtered = mockLeads.filter((lead) => {
    const matchSearch = lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchStatus = statusFilter === "all" || lead.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Lead Database</h1>
            <p className="text-sm text-muted-foreground mt-1">{mockLeads.length} leads found</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" /> Export
            </Button>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" /> Add Lead
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by name or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-muted/50 border-border/50"
            />
          </div>
          <div className="flex gap-2">
            {["all", "new", "contacted", "replied", "meeting", "closed"].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-2 rounded-md text-xs font-medium transition-colors ${
                  statusFilter === s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border bg-muted/30">
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">Business</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">Contact</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">Location</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">Status</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">Source</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4">Added</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((lead) => (
                  <tr key={lead.id} className="border-b border-border/30 hover:bg-muted/20 transition-colors">
                    <td className="py-3 px-4">
                      <p className="text-sm font-medium text-foreground">{lead.name}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Globe className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-primary">{lead.website}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-muted-foreground">{lead.email}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Phone className="h-3 w-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{lead.phone}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">{lead.address}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{lead.source}</td>
                    <td className="py-3 px-4 text-sm text-muted-foreground">{lead.addedAt}</td>
                    <td className="py-3 px-4">
                      <button className="p-1 rounded hover:bg-muted transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Leads;
