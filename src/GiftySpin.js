import { useState } from "react";
import { motion } from "framer-motion";

const gifts = [
  "🎁 Обычный подарок",
  "🎉 Редкий подарок",
  "💎 Легендарный подарок",
  "🧩 Уникальный аксессуар",
  "🎫 Купон на скидку",
  "🕹️ Виртуальный бонус"
];

export default function GiftySpin() {
  const [result, setResult] = useState("");
  const [spinning, setSpinning] = useState(false);

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult("");

    setTimeout(() => {
      const gift = gifts[Math.floor(Math.random() * gifts.length)];
      setResult(gift);
      setSpinning(false);
    }, 3000);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh"
    }}>
      <h1>Добро пожаловать в GiftySpin!</h1>
      <motion.div
        animate={{ rotate: spinning ? 720 : 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "#eee",
          fontSize: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px"
        }}
      >
        🎡
      </motion.div>
      <button onClick={spin} disabled={spinning}>
        {spinning ? "Крутится..." : "Крутить рулетку"}
      </button>
      {result && (
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          🎉 {result}
        </div>
      )}
    </div>
  );
}