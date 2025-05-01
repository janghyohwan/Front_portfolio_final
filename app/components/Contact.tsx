"use client";
import { contactInfo, socialLinks } from "@/data/ContactData";
import { ContactPageProps } from "@/types/ContactType";
import { FaInstagram, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";

const ContactPage: React.FC<ContactPageProps> = () => {
  return (
    <footer id="contact" className="h-[400px] px-20 py-16">
      <div className="w-full bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-8 shadow-xl">
        <div className="border-b-2 border-white/30 pb-4 mb-6">
          <h1 className="text-4xl font-bold text-white">장효환</h1>
          <p className="text-xl text-white/80 mt-2">Frontend Developer</p>
        </div>

        <div className="flex justify-between">
          <div className="space-y-4 text-white/90">
            <div className="flex items-center gap-4">
              <span className="font-semibold min-w-[100px] text-[20px]">
                Email:
              </span>
              <span className="text-[20px]">{contactInfo.email}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold min-w-[100px] text-[20px]">
                Phone:
              </span>
              <span className="text-[20px]">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold min-w-[100px] text-[20px]">
                Location:
              </span>
              <span className="text-[20px]">{contactInfo.location}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold min-w-[100px] text-[20px]">
                Github:
              </span>
              <span className="text-[20px]">{contactInfo.github}</span>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 hover:text-white transition-colors"
              >
                {link.platform === "github" && (
                  <FaGithub className="w-[30px] h-[30px]" />
                )}
                {link.platform === "instagram" && (
                  <FaInstagram className="w-[30px] h-[30px]" />
                )}
                {link.platform === "facebook" && (
                  <FaFacebook className="w-[30px] h-[30px]" />
                )}
                {link.platform === "google" && (
                  <FaGoogle className="w-[30px] h-[30px]" />
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
