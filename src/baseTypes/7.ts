/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Weekday {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY
}
function isWeekend(day: Weekday): boolean {
  return day === Weekday.SATURDAY || day === Weekday.SUNDAY;
} 

console.log(isWeekend(Weekday.SATURDAY));