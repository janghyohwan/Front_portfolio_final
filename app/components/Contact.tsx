"use client";
import { contactInfo, socialLinks } from "@/data/ContactData";
import { ContactPageProps } from "@/types/ContactType";
import { FaInstagram, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <footer
      id="contact"
      className="min-h-[400px] px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16"
    >
      <div className="w-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
        <div className="border-b-2 border-white/30 pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            장효환
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mt-2">
            Frontend Developer
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-8">
          <div className="space-y-3 sm:space-y-4 text-white/90">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="font-semibold min-w-[80px] sm:min-w-[100px] text-base sm:text-lg md:text-[20px]">
                Email:
              </span>
              <span className="text-base sm:text-lg md:text-[20px] break-all">
                {contactInfo.email}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="font-semibold min-w-[80px] sm:min-w-[100px] text-base sm:text-lg md:text-[20px]">
                Phone:
              </span>
              <span className="text-base sm:text-lg md:text-[20px]">
                {contactInfo.phone}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="font-semibold min-w-[80px] sm:min-w-[100px] text-base sm:text-lg md:text-[20px]">
                Location:
              </span>
              <span className="text-base sm:text-lg md:text-[20px]">
                {contactInfo.location}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="font-semibold min-w-[80px] sm:min-w-[100px] text-base sm:text-lg md:text-[20px]">
                Github:
              </span>
              <span className="text-base sm:text-lg md:text-[20px] break-all">
                {contactInfo.github}
              </span>
            </div>
          </div>

          <div className="flex flex-row sm:flex-col justify-center sm:justify-start gap-3 sm:gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                {link.platform === "github" && (
                  <FaGithub className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                )}
                {link.platform === "instagram" && (
                  <FaInstagram className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                )}
                {link.platform === "facebook" && (
                  <FaFacebook className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                )}
                {link.platform === "google" && (
                  <FaGoogle className="w-6 h-6 sm:w-[30px] sm:h-[30px]" />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactPage;
