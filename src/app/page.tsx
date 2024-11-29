import { ThemeSwitch } from "@/components/buttons/ThemeSwitch";
import { MonitoringSchedule } from "@/components/monitoring-schedule/MonitoringSchedule";
import { StationsProvider } from "@/contexts/StationsContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

export default function Home() {
  return (
    <ThemeProvider>
      <main className="w-screen h-screen flex flex-col items-center justify-center gap-6">
        <StationsProvider>
          <MonitoringSchedule />
        </StationsProvider>
        <ThemeSwitch />
      </main>
    </ThemeProvider>
  );
}
