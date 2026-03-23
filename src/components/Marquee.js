export default function Marquee() {
  const items = [
    "اقْرَأْ بِاسْمِ رَبِّكَ",
    "Live Interactive Classes",
    "طَلَبُ الْعِلْمِ فَرِيضَةٌ",
    "Authentic Knowledge",
    "مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ",
    "Online · India and GULF",
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="marquee-wrap" aria-hidden="true" role="presentation">
      <div className="marquee-track">
        {allItems.map((text, i) => (
          <span className="marquee-item" key={i}>
            {text}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
