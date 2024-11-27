import { ThemeSwitch } from "@/components/buttons/ThemeSwitch";
import { MonitoringSchedule } from "@/components/MonitoringSchedule";
import { ScheduleProvider } from "@/contexts/ScheduleContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="w-screen h-screen flex flex-col items-center justify-center gap-6">
        <ScheduleProvider>
          <MonitoringSchedule />
        </ScheduleProvider>
        <ThemeSwitch />
      </main>
    </ThemeProvider>
  );
}
