import { country } from "./constantText";

export function converseMoney(value, exchange) {
  let money = exchange ? value / country.rate : value;
  return money?.toLocaleString(country.value, {
    style: "currency",
    currency: country.label,
  });
}
