import DashboardCard from "@/components/dashboard/DashboardCard";
import PostsTable from "@/components/posts/PostsTable";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import { Folder, MessageCircle, Newspaper, User, Users } from "lucide-react";
import ClientTable from "@/components/clients/ClientTable";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center gap-5 mb-5 ">
        <DashboardCard
          title="Clients"
          count={80}
          icon={<Users className="text-slate-500" size={72} />}
        />
      </div>
      <AnalyticsChart />
      <ClientTable title="Latest Clients" limit={5} />
    </>
  );
}
