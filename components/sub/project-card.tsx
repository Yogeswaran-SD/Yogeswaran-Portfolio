import Image from "next/image";
import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative overflow-hidden rounded-2xl bg-[#09051b]/80 backdrop-blur-xl border border-[#2A0E61]/60 hover:border-purple-500/80 shadow-lg hover:shadow-[0_0_35px_rgba(113,47,255,0.4)] transition-all duration-500 transform hover:-translate-y-2 flex flex-col w-full md:w-[32%]"
    >
      {/* Top Gradient Highlight Line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Image Container with Zoom & Overlay */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#030014]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={600}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
        />
        {/* Subtle Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09051b] via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
        
        {/* Floating View Project Badge */}
        <div className="absolute top-3 right-3 bg-[#030014]/80 backdrop-blur-md border border-purple-500/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 opacity-90 group-hover:opacity-100 group-hover:scale-105 group-hover:bg-purple-600/90 group-hover:border-purple-400 transition-all duration-300">
          <span>View Project</span>
          <RxExternalLink className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative p-5 flex flex-col flex-1 justify-between">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
            {title}
          </h1>
          <p className="mt-2.5 text-sm sm:text-base text-gray-300 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Bottom CTA Link text */}
        <div className="mt-4 pt-3 border-t border-purple-900/30 flex items-center text-xs font-semibold text-purple-400 group-hover:text-cyan-300 transition-colors duration-300">
          <span>Explore Details</span>
          <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </div>
    </Link>
  );
};
