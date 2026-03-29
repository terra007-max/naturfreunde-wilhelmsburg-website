export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
      <iframe
        title="HUGO – Naturfreunde Wilhelmsburg, Stadtpark 3, 3150 Wilhelmsburg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.3!2d15.6069!3d48.1437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07b3a8e62d51%3A0x0!2sStadtpark+3%2C+3150+Wilhelmsburg%2C+Austria!5e0!3m2!1sde!2sat!4v1"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-4 bg-white dark:bg-gray-900 flex items-center justify-between">
        <div>
          <div className="font-bold text-gray-900 dark:text-white text-sm">HUGO – Vereinshaus</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Stadtpark 3, 3150 Wilhelmsburg</div>
        </div>
        <a
          href="https://maps.google.com/?q=Stadtpark+3,+3150+Wilhelmsburg,+Austria"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-green-600 hover:text-green-700 font-semibold"
        >
          In Google Maps öffnen →
        </a>
      </div>
    </div>
  );
}
