import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Redirect preview root to the static site for accurate visualization
    if (typeof window !== "undefined") {
      window.location.replace("/site/index.html");
    }
  }, []);
  return null;
}
