import { useEffect } from "react";

const CursorEffects = () => {
  useEffect(() => {
    const container = document.createElement("div");
    container.id = "cursor-effects";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.pointerEvents = "none";
    container.style.width = "100%";
    container.style.height = "100%";
    document.body.appendChild(container);

    const createBubble = (x, y) => {
      const bubble = document.createElement("div");
      bubble.className = "bubble absolute rounded-full bg-indigo-400 opacity-50";
      bubble.style.left = `${x}px`;
      bubble.style.top = `${y}px`;
      bubble.style.width = "10px";
      bubble.style.height = "10px";
      bubble.style.animation = "fadeOut 1s forwards";
      container.appendChild(bubble);
      setTimeout(() => bubble.remove(), 1000);
    };

    const createStarBurst = (x, y) => {
      for (let i = 0; i < 8; i++) {
        const star = document.createElement("div");
        star.className = "star absolute bg-yellow-400";
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.width = "8px";
        star.style.height = "8px";
        star.style.clipPath =
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";

        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * 40 + 20;
        star.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
        star.style.animation = "explode 0.6s forwards";
        container.appendChild(star);
        setTimeout(() => star.remove(), 600);
      }
    };

    const handleMove = (e) => createBubble(e.clientX, e.clientY);
    const handleClick = (e) => createStarBurst(e.clientX, e.clientY);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("click", handleClick);
      document.body.removeChild(container);
    };
  }, []);

  return null;
};

export default CursorEffects;
