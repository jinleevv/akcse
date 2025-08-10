import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-center py-8 px-4 border-t">
      <div className="text-sm font-medium text-gray-700">
        <p>AKCSE McGill | AKCSE YG Chapter</p>
        <p>© All Rights Reserved | Website By AKCSE 2024 Executives</p>
      </div>
      <div className="flex justify-center mt-4 gap-6">
        <a
          href="https://www.instagram.com/akcse_mcgill/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-2xl text-gray-700 hover:text-gray-900" />
        </a>
        <a
          href="https://www.linkedin.com/showcase/akcse-mcgill/about/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-2xl text-gray-700 hover:text-gray-900" />
        </a>
      </div>
    </footer>
  );
}
