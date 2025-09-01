const AgencaLogo = ({ text = "CSI" }) => {
  return (
    <div className="text-white font-bold text-xl uppercase tracking-wide">
      {text.split("").map((letter, index) => {
        if (letter === "G") {
          return (
            <span key={index} className="relative inline-block">
           
            </span>
          )
        }
        return <span key={index}>{letter}</span>
      })}
    </div>
  )
}

export default function Footer({
  copyrightText = "© 2025 CSI. All Rights Reserved.",
  credits = "SJCEM",
}) {
  return (
    <footer className="bg-black w-full">
      <div className="container mx-auto px-6 pt-10 pb-5 ">

        {/* Divider */}
        <div className="w-full h-px bg-[#C5FF6D] mb-4 md:mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
          <p className="text-[#CCCCCC] text-xs md:text-sm text-center md:text-left">{copyrightText}</p>
          <p className="text-[#CCCCCC] text-xs md:text-sm text-center md:text-right">{credits}</p>
        </div>
      </div>
    </footer>
  )
}
