import { DashboardLayout } from "@/components/DashboardLayout";
import {
  Users,
  Mail,
  MessageSquare,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Target,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const stats = [
  { label: "Total Leads", value: "2,847", change: "+12.5%", up: true, icon: Users },
  { label: "Emails Sent", value: "1,234", change: "+8.2%", up: true, icon: Mail },
  { label: "Replies", value: "186", change: "+23.1%", up: true, icon: MessageSquare },
  { label: "Conversion Rate", value: "15.1%", change: "-2.3%", up: false, icon: Target },
];

const chartData = [
  { name: "Mon", leads: 42, emails: 28, replies: 8 },
  { name: "Tue", leads: 53, emails: 35, replies: 12 },
  { name: "Wed", leads: 61, emails: 44, replies: 15 },
  { name: "Thu", leads: 47, emails: 38, replies: 11 },
  { name: "Fri", leads: 72, emails: 52, replies: 18 },
  { name: "Sat", leads: 31, emails: 19, replies: 6 },
  { name: "Sun", leads: 24, emails: 14, replies: 4 },
];

const pipelineData = [
  { stage: "New", count: 847 },
  { stage: "Contacted", count: 534 },
  { stage: "Replied", count: 186 },
  { stage: "Meeting", count: 72 },
  { stage: "Closed", count: 34 },
];

const recentLeads = [
  { name: "Acme Corp", email: "info@acme.co.ke", status: "new", source: "Google Maps" },
  { name: "TechVentures", email: "hello@techv.co.ke", status: "contacted", source: "Directory" },
  { name: "Safari Digital", email: "team@safari.co.ke", status: "replied", source: "Google Maps" },
  { name: "Nairobi Brands", email: "hi@nrbbr.co.ke", status: "meeting", source: "LinkedIn" },
  { name: "Coast Media", email: "info@coast.co.ke", status: "new", source: "Google Maps" },
];

const statusColors: Record<string, string> = {
  new: "bg-primary/20 text-primary",
  contacted: "bg-warning/20 text-warning",
  replied: "bg-success/20 text-success",
  meeting: "bg-[hsl(280,65%,60%)]/20 text-[hsl(280,65%,60%)]",
};

const Overview = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Your lead generation overview
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className="h-5 w-5 text-primary" />
                <span
                  className={`flex items-center gap-1 text-xs font-medium ${
                    stat.up ? "text-success" : "text-destructive"
                  }`}
                >
                  {stat.up ? (
                    <ArrowUpRight className="h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="h-3 w-3" />
                  )}
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 glass-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Weekly Activity</h3>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="leadGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(185, 100%, 45%)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="hsl(185, 100%, 45%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                <XAxis dataKey="name" stroke="hsl(215, 15%, 55%)" fontSize={12} />
                <YAxis stroke="hsl(215, 15%, 55%)" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 20%, 10%)",
                    border: "1px solid hsl(220, 15%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 20%, 95%)",
                    fontSize: "12px",
                  }}
                />
                <Area type="monotone" dataKey="leads" stroke="hsl(185, 100%, 45%)" fill="url(#leadGrad)" strokeWidth={2} />
                <Area type="monotone" dataKey="emails" stroke="hsl(152, 69%, 45%)" fill="transparent" strokeWidth={2} />
                <Area type="monotone" dataKey="replies" stroke="hsl(38, 92%, 50%)" fill="transparent" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-card p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Pipeline</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={pipelineData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 15%, 18%)" />
                <XAxis type="number" stroke="hsl(215, 15%, 55%)" fontSize={12} />
                <YAxis dataKey="stage" type="category" stroke="hsl(215, 15%, 55%)" fontSize={12} width={70} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(220, 20%, 10%)",
                    border: "1px solid hsl(220, 15%, 18%)",
                    borderRadius: "8px",
                    color: "hsl(210, 20%, 95%)",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="count" fill="hsl(185, 100%, 45%)" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-foreground">Recent Leads</h3>
            <a href="/leads" className="text-xs text-primary hover:underline">View all →</a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-2">Business</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-2">Email</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-2">Status</th>
                  <th className="text-left text-xs text-muted-foreground font-medium py-3 px-2">Source</th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead) => (
                  <tr key={lead.email} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                    <td className="py-3 px-2 text-sm font-medium text-foreground">{lead.name}</td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{lead.email}</td>
                    <td className="py-3 px-2">
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${statusColors[lead.status]}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-3 px-2 text-sm text-muted-foreground">{lead.source}</td>
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

export default Overview;
