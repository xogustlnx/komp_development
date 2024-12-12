"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface AdvantageCardProps {
  title: string;
  description: string[];
  icon: string;
}

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-gray-850 to-black rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden w-full h-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* 원형 아이콘 */}
      <div className="relative z-10 w-20 h-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-md mb-4">
        <Image src={icon} alt={title} width={48} height={48} />
      </div>

      {/* 타이틀 */}
      <h3 className="mt-2 text-xl font-bold text-white text-center">{title}</h3>

      {/* 디스크립션 */}
      <div className="mt-4 text-sm text-gray-300 space-y-2 text-center">
        {description.map((line, index) => (
          <p key={index} className="leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
};

export default AdvantageCard;
