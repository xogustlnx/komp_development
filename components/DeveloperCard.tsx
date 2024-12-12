"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface DeveloperCardProps {
  name: string;
  image: string;
  description: string[];
}

const DeveloperCard: React.FC<DeveloperCardProps> = ({
  name,
  image,
  description,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.6, duration: 0.4 } },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.8 + index * 0.2, duration: 0.4, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="relative flex flex-col items-center text-center bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow h-[520px] w-[380px] pt-12 p-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants} // 카드 전체 애니메이션
    >
      {/* 이미지 */}
      <motion.div
        className="relative w-36 h-36 rounded-full overflow-hidden shadow-md border-2"
        variants={nameVariants} // 이름과 동시에 나타남
      >
        <Image
          src={image}
          alt={name}
          width={144}
          height={144}
          className="absolute bottom-0"
        />
      </motion.div>

      {/* 이름 */}
      <motion.h3
        className="text-3xl font-header font-medium text-white mb-6 pt-10"
        variants={nameVariants} // 이름 애니메이션
      >
        {name}
      </motion.h3>

      {/* 디스크립션 */}
      <div className="flex flex-col space-y-2">
        {description.map((line, index) => (
          <motion.p
            key={index}
            className="text-gray-300 text-base leading-relaxed"
            custom={index}
            variants={descriptionVariants} // 디스크립션 애니메이션
            initial="hidden"
            animate={controls}
          >
            {line}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default DeveloperCard;
