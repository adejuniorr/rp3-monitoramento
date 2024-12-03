import { render, screen } from "@testing-library/react";
import { MonitoringSchedule } from "./MonitoringSchedule";
import { StationsProvider } from '@/contexts/StationsContext';
import { isCurrentDay } from "@/functions/isCurrentDay";
import { log } from "console";

describe("MonitoringSchedule", () => {
  beforeEach(() => {
    render(
      <StationsProvider>
        <MonitoringSchedule />
      </StationsProvider>
    );
  });

  it("Deve renderizar o cabeçalho do cronograma", () => {
    const tableHeader = screen.getByTestId("table-header");

    expect(tableHeader).toBeInTheDocument();
  });

  it("Deve renderizar as linhas da tabela", () => {
    const tableRows = screen.getAllByRole("row");
    const expectedDays = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];

    expectedDays.forEach((day, index) => {
      expect(tableRows[index + 1]).toHaveTextContent(day);
    });
  });

  it("Deve destacar a linha correspondente ao dia da semana atual", () => {
    const tableRows = screen.getAllByRole("row");
    const expectedDays = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];

    expectedDays.forEach((day, index) => {
      const matchCurrentDay = isCurrentDay(index);

      if (matchCurrentDay) {
        log("[Dia atual]:", day);

        expect(tableRows[index + 1]).toHaveClass("bg-rp3-blue text-rp3-yellow font-bold");
      } else {
        expect(tableRows[index + 1]).not.toHaveClass("");
      }
    });
  });
});