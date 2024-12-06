import { useHotkeys } from "react-hotkeys-hook";

export default function useNavigationHotkeys() {
  useHotkeys("p", () => {
    window.location.href = "/portfolio";
  });
  useHotkeys("a", () => {
    window.location.href = "/about";
  });
  useHotkeys("c", () => {
    window.location.href = "/contact";
  });
}
