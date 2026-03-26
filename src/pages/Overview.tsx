import { DashboardLayout } from "@/components/DashboardLayout";
import { Users, Mail, MessageSquare, Target, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api";

const weeklyData = [
  { name: "Mon", leads: 42, emails: 28, replies: 8 },
  { name: "Tue", leads: 53, emails: 35, replies: 12 },
  { name: "Wed", leads: 61, emails: 44, replies: 15 },
  { name: "Thu", leads: 47, emails: 38, replies: 11 },
  { name: "Fri", leads: 72, emails: 52, replies: 18 },
  { name: "Sat", leads: 31, emails: 19, replies: 6 },
  { name: "Sun", leads: 24, emails: 14, replies: 4 },
];

const Overview = () => {
  const { data: stats = {} } = useQuery({ queryKey: ["stats"], queryFn: api.stats });
  const { data: pipeline = [] } = useQuery({ queryKey: ["pipeline"], queryFn: api.pipeline });
  const { data: recentLeads = [] } = useQuery({ queryKey: ["recentLeads"], queryFn: api.recentLeads });

  const statCards = [
    { label: "Total Leads", value: stats.totalLeads?.toString() || "0", change: "+12.5%", up: true, icon: Users },
    { label: "Emails Sent", value: stats.emailsSent?.toString() || "1,234", change: "+8.2%", up: true, icon: Mail },
    { label: "Replies", value: stats.replies?.toString() || "186", change: "+23.1%", up: true, icon: MessageSquare },
    { label: "Conversion Rate", value: `${stats.conversionRate || 15.1}%`, change: "-2.3%", up: false, icon: Target },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 p-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
          <p className="text-muted-foreground">Your lead generation performance at a glance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {statCards.map((stat, i) => (
            <div key={i} className="glass-card p-6 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-5 w-5 text-primary" />
                <span className={`flex items-center gap-1 text-xs ${stat.up ? "text-green-500" : "text-red-500"}`}>
                  {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly Chart */}
          <div className="lg:col-span-2 glass-card p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Weekly Activity</h3>
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip />
                <Area type="monotone" dataKey="leads" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.25} />
                <Area type="monotone" dataKey="emails" stroke="#4ade80" fill="transparent" />
                <Area type="monotone" dataKey="replies" stroke="#fbbf24" fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Pipeline Chart */}
          <div className="glass-card p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Pipeline by Status</h3>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={pipeline} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis type="number" stroke="#666" />
                <YAxis dataKey="status" type="category" stroke="#666" width={90} />
                <Tooltip />
                <Bar dataKey="count" fill="#22d3ee" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Leads */}
        <div className="glass-card p-6 rounded-xl">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Leads</h3>
            <a href="/leads" className="text-sm text-primary hover:underline">View all →</a>
          </div>
          <div className="space-y-4">
            {recentLeads.length > 0 ? (
              recentLeads.map((lead: any, i: number) => (
                <div key={i} className="flex justify-between items-center border-b pb-4 last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium">{lead.name}</p>
                    <p className="text-sm text-muted-foreground">{lead.email}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs px-3 py-1 rounded-full bg-muted">{lead.status}</span>
                    <p className="text-xs text-muted-foreground mt-1">{lead.source}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center py-8 text-muted-foreground">No recent leads yet. Add some leads to get started.</p>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;