export default function MapEmbed() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
      <iframe
        title="HUGO – Naturfreunde Wilhelmsburg, Stadtpark 3, 3150 Wilhelmsburg"
        src="https://maps.google.com/maps?q=48.14313,15.60405&t=&z=18&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="320"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className="p-4 bg-white flex items-center justify-between">
        <div>
          <div className="font-bold text-gray-900 text-sm">HUGO – Vereinshaus</div>
          <div className="text-xs text-gray-500">Stadtpark 3, 3150 Wilhelmsburg</div>
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
