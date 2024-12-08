import { useHotkeys } from "react-hotkeys-hook";

export default function useNavigationHotkeys() {
  useHotkeys("ctrl+1", () => {
    window.location.href = "/portfolio";
  });
  useHotkeys("ctrl+2", () => {
    window.location.href = "/about";
  });
  useHotkeys("ctrl+3", () => {
    window.location.href = "/contact";
  });
}
