import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contacts" className="relative w-full bg-gray-900/50 py-12 mt-20 md:py-12 md:mt-40">
      <div className="absolute -top-12 w-full h-12 bg-gradient-to-b from-dark-primary to-gray-900/50" />
      <div className="w-full max-w-7xl mx-auto px-5 md:px-8">
        <h2 className="font-semibold text-xl mb-4 text-yellow-primary">Contatos</h2>
        <span className="font-bold text-2xl  block mb-2">Entre em contato por:</span>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=deveronaralves@email.com" target="_blank">deveronaralves@gmail.com</a>

        <div className="flex items-center gap-4 mt-3 mb-16">
          <a href="https://www.linkedin.com/in/eronaralves/" target="_blank" className="w-[34px] h-[34px] flex items-center justify-center rounded overflow-hidden bg-white cursor-pointer">
            <FaLinkedin size={40} color="#0A66C2" />
          </a>
          <a href="https://www.github.com/eronaralves/" target="_blank">
            <FaGithub size={35} className="cursor-pointer" />
          </a>
        </div>

        <span className="text-sm text-gray-400">Copyright © {year}. Develop & Designed by Eronar Alves</span>
      </div>
    </footer>
  )
}