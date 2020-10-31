export * from "./Buttons/Button";
export * from "./Dropdown/Dropdown";
export * from "./Buttons/Button";

export function getDomain(url: string) {
  return url.replace(/^https?:\/\//i, "");
}
