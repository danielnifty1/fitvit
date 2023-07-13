import { cipher, decipher } from "./enc";

function storeItem(key: string, item: any) {
  console.log(key, item);
  const itemString = JSON.stringify(item);

  const encripted = cipher(itemString);
console.log("ncrypted")
  sessionStorage.setItem(key, encripted);
}

function getItem(key: string): any {
  if (sessionStorage.getItem(key)) {
    const deciper: string | null = sessionStorage.getItem(key);

    const data = decipher(deciper as string);

    const parsed = JSON.parse(data);

    return parsed;
  }

  return "";
}

export { getItem, storeItem };
