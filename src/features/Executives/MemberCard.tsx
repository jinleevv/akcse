import { useState } from "react";
import { LiaGithub, LiaInstagram, LiaLinkedin } from "react-icons/lia";
import { MemberModal } from "./MemberModal";

interface MemberInfo {
  major: string;
  mbti: string;
  intro: string;
  instagram: string;
  linkedin: string;
  github?: string;
}

interface MemberCardProps {
  name: string;
  roleIcon: string;
  roleLabel: string;
  info: MemberInfo;
  images: string[];
}

export function MemberCard({
  name,
  roleIcon,
  roleLabel,
  info,
  images,
}: MemberCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Use the first image as the avatar if available
  const avatarImage = images.length > 0 ? images[0] : null;

  return (
    <>
      <div 
        className="group relative flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer h-full"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Avatar */}
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100 ring-2 ring-transparent group-hover:ring-orange-700/20 transition-all duration-300">
            {avatarImage ? (
              <img 
                src={avatarImage} 
                alt={name} 
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                <span className="text-2xl">{name.charAt(0)}</span>
              </div>
            )}
          </div>
          {/* Role Icon Badge */}
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-lg shadow-sm" title={roleLabel}>
            {roleIcon}
          </div>
        </div>

        {/* Name & Role */}
        <h3 className="text-lg font-bold text-gray-800 text-center mb-1">{name}</h3>
        <p className="text-sm font-medium text-orange-700 text-center mb-4">{roleLabel}</p>

        {/* Info Stats/Details */}
        <div className="w-full grid grid-cols-2 gap-2 mb-4 text-center">
             <div className="flex flex-col p-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-500 uppercase font-semibold">MBTI</span>
                <span className="text-sm font-bold text-gray-700">{info.mbti || "-"}</span>
             </div>
             <div className="flex flex-col p-2 bg-gray-50 rounded-lg">
                <span className="text-xs text-gray-500 font-semibold">Major</span>
                <span className="text-xs font-bold text-gray-700 leading-tight line-clamp-2 pt-0.5">{info.major}</span>
             </div>
        </div>

        {/* Description */}
        <div className="w-full flex-grow overflow-y-auto max-h-32 mb-6 text-center scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
             <p className="text-sm text-gray-600 leading-relaxed px-1">
               {info.intro}
             </p>
        </div>

        {/* Divider */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mb-6 group-hover:bg-blue-500 transition-colors duration-300"></div>

        {/* Social Actions */}
        <div className="flex gap-4 items-center justify-center mt-auto" onClick={(e) => e.stopPropagation()}>
          {info.instagram && (
            <a
              href={info.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-pink-600 transition-colors p-2 hover:bg-pink-50 rounded-full"
              title="Instagram"
            >
              <LiaInstagram size={22} />
            </a>
          )}
          {info.linkedin && (
            <a
              href={info.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-700 transition-colors p-2 hover:bg-blue-50 rounded-full"
              title="LinkedIn"
            >
              <LiaLinkedin size={22} />
            </a>
          )}
          {info.github && (
            <a
              href={info.github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
              title="GitHub"
            >
              <LiaGithub size={22} />
            </a>
          )}
        </div>
      </div>

      <MemberModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        name={name}
        images={images}
      />
    </>
  );
}
