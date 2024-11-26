import { MonitoringSchedule } from "@/components/MonitoringSchedule";
import { ScheduleProvider } from "@/contexts/ScheduleContext";

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center justify-center">
      <ScheduleProvider>
        <MonitoringSchedule />
      </ScheduleProvider>
    </main>
  );
}
