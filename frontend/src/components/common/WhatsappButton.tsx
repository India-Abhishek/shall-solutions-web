export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/919931483382"
      target="_blank"
      className="
        fixed
        bottom-5
        right-5
        md:bottom-6
        md:right-6
        bg-green-600
        text-white
        px-5
        py-3
        rounded-full
        shadow-lg
        z-50
        hover:shadow-2xl
        hover:scale-110
      "
    >
      WhatsApp
    </a>
  );
}