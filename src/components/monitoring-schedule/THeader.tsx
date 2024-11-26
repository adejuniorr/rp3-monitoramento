export const THeader = () => {
  return (
    <thead>
      <tr>
        <th className="w-[160px] px-[16px] py-[24px] border-r border-b border-foreground">
          Dias da Semana
        </th>
        <th
          colSpan={2}
          className="px-[16px] py-[24px] border-b border-foreground"
        >
          Postos da Rede
        </th>
      </tr>
    </thead>
  );
};
