"use client";
import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";

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

  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div className="relative">
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
          <tr>
            <th className="border border-gray-800 px-4 py-2" />
            <td className="px-4 py-2">
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-sm">
                Editar
              </button>
            </td>
            <td
              className="px-4 py-2 flex gap-2"
              onMouseEnter={() => setIsTooltipVisible(true)}
              onMouseLeave={() => setIsTooltipVisible(false)}
            >
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-sm">
                <FaArrowUp />
              </button>
              <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded-sm">
                <FaArrowDown />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isTooltipVisible && (
        <div className="absolute left-[525px] top-[220px] z-20 text-center font-bold w-[160px] bg-red-500 px-4 py-2">
          <small>Clique para alterar a ordem</small>
          <span className="absolute -left-[15px] top-[20px] -rotate-90 text-red-500">
            <IoTriangle />
          </span>
        </div>
      )}
    </div>
  );
};
