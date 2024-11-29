export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="w-[160px] px-[16px] py-[24px] border-r border-b border-gray-200 dark:border-gray-600">
          Dias da Semana
        </th>
        <th
          colSpan={2}
          className="px-[16px] py-[24px] border-b border-gray-200 dark:border-gray-600"
        >
          Postos da Rede
        </th>
      </tr>
    </thead>
  );
};
