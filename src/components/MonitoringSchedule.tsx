"use client";
import { useState } from "react";

export type GasStation = {
  id: number;
  name: string;
};

export const MonitoringSchedule = () => {
  const days = ["Segunda", "Terca", "Quarta", "Quinta", "Sexta"];
  const [stations, setStations] = useState<GasStation[]>([
    {
      id: 1,
      name: "Elefantinho",
    },
    {
      id: 2,
      name: "Querubim",
    },
    /* {
      id: 3,
      name: "Rei Davi",
    },
    {
      id: 1,
      name: "Rosa Flor",
    },
    {
      id: 2,
      name: "Valente",
    }, */
    {
      id: 6,
      name: "XPRES",
    },
  ]);

  /**
   * Alguns postos apresentam sistema de câmeras que permite
   * um download rápido o bastante para ser monitorado ao fim
   * do dia. Por isso terão prioridade de monitoramento no
   * cronograma.
   */
  const [priorityStations, setPriorityStations] = useState<GasStation[]>([
    {
      id: 1,
      name: "Rosa Flor",
    },
    {
      id: 2,
      name: "Valente",
    },
  ]);

  return (
    <table className="border-collapse border-2 border-gray-100 shadow-md shadow-gray-50 w-[600px] rounded-md overflow-hidden text-sm text-left">
      <thead className="bg-gray-700">
        <tr>
          <th className="border border-gray-800 px-4 py-2">Dias da Semana</th>
          <th colSpan={2} className="border border-gray-800 px-4 py-2">
            Postos da Rede
          </th>
        </tr>
      </thead>
      <tbody>
        {days.map((day, dayIndex) => (
          <tr key={day}>
            <th className="border border-gray-800 px-4 py-2">{day}</th>
            <td className="border border-gray-800 px-4 py-2">
              {stations[dayIndex % stations.length]?.name}
            </td>
            <td className="border border-gray-800 px-4 py-2">
              {priorityStations[dayIndex % priorityStations.length].name}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
