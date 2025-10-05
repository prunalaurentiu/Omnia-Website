import { motion } from 'motion/react';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  lift?: boolean;
}

export function HoverCard({ children, className = '', scale = 1.02, lift = true }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: scale,
        y: lift ? -8 : 0,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      whileTap={{ scale: 0.98 }}
      className={`transition-shadow duration-200 hover:shadow-xl ${className}`}
    >
      {children}
    </motion.div>
  );
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function AnimatedButton({ children, className = '', onClick, variant = 'primary' }: AnimatedButtonProps) {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold relative overflow-hidden";
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <motion.div
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {children}
      </motion.div>
    </motion.button>
  );
}

export function HoverGlow({ children, glowColor = "blue" }: { children: React.ReactNode; glowColor?: string }) {
  return (
    <motion.div
      whileHover={{
        boxShadow: `0 0 30px rgba(59, 130, 246, 0.5)`,
        transition: { duration: 0.3 }
      }}
      className="rounded-lg"
    >
      {children}
    </motion.div>
  );
}