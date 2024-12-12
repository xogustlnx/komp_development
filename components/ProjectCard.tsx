"use client";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  achievements: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  description,
  achievements,
  slug,
}) => {
  return (
    <div className=" relative group bg-gradient-to-b from-gray-900 to-black rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
      {/* 카드 전체 링크 */}
      <Link
        href={`/portfolio/${slug}`}
        className="absolute inset-0 z-10"
        aria-label={`${title}로 이동`}
      ></Link>

      {/* 이미지 */}
      <div className="relative h-60 overflow-hidden">
        {title === "음파음파" ? (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="scale-[1.0] absolute bottom-0 transition-transform duration-500 group-hover:scale-[1.2]"
          />
        ) : (
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="contain"
            className="scale-[1.5] transition-transform duration-500 group-hover:scale-[1.7]"
          />
        )}
      </div>

      {/* 내용 */}
      <div className="p-6 text-white relative z-20">
        <h3 className="text-2xl font-header font-bold mb-3">{title}</h3>

        <p className="text-base font-bold text-transparent bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 bg-clip-text mb-4 leading-relaxed">
          {achievements}
        </p>

        <p className="text-xs text-gray-400 italic mb-6">{description}</p>
      </div>

      {/* 버튼 - 컨테이너에서 분리 */}
      <div className="p-6 text-center relative z-20">
        <Link
          href={`/portfolio/${slug}`}
          className="inline-block px-6 py-2 text-sm bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow hover:bg-orange-600 transition"
        >
          자세히 보기
        </Link>
      </div>

      {/* 화려한 오버레이 효과 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default ProjectCard;
