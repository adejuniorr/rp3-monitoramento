/**
 * 
 * @param day number of the day of the week starting from 0 (Sunday) to 4 (Friday)
 * @returns `true` if `day` is the current day, `false` otherwise
 */
export function isCurrentDay(day: number): boolean {
  const now = new Date();

  const offset = -3;
  const basiliaDate = new Date(now.getTime() + offset * 60 * 60 * 1000);

  const today = basiliaDate.getDay();

  const currentDay =
    today === 0 ? 0 : // Domingo ajustado para segunda (0)
    today === 6 ? 4 : // Sábado ajustado para sexta (4)
    today - 1;        // Ajuste para o índice de segunda a sexta

  return currentDay === day;
}