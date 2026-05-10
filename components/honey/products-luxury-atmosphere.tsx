/**
 * طبقات زخرفية فقط — تُوضع داخل حاوية `relative overflow-hidden`
 * (خلفية التدرج تُطبَّق على العنصر الأب)
 */
export function ProductsLuxuryAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* وهج ذهبي علوي ناعم */}
      <div className="absolute -top-[18%] left-1/2 h-[52%] w-[min(110%,920px)] -translate-x-1/2 bg-[radial-gradient(ellipse_72%_58%_at_50%_0%,rgba(217,164,65,0.16),transparent_62%)] blur-2xl opacity-85 md:blur-3xl md:opacity-100" />
      {/* إضاءة عسلية دافئة — أسفل */}
      <div className="absolute inset-x-0 bottom-0 h-[44%] bg-[radial-gradient(ellipse_88%_78%_at_50%_100%,rgba(217,164,65,0.11),rgba(255,185,90,0.05)_45%,transparent_68%)] opacity-90" />
      {/* لمسات جانبية (تابلت+) */}
      <div className="absolute -left-[12%] top-[14%] hidden h-[46%] w-[46%] rounded-full bg-[radial-gradient(circle,rgba(217,164,65,0.11),transparent_68%)] blur-xl md:block md:blur-3xl" />
      <div className="absolute -right-[10%] bottom-[10%] hidden h-[50%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(255,200,110,0.07),transparent_66%)] blur-xl md:block md:blur-3xl" />
      {/* honeycomb خافت جداً */}
      <div className="hero-honeycomb-layer absolute inset-0 opacity-[0.04] mix-blend-soft-light md:opacity-[0.055]" />
      {/* عمق سينمائي: إظلام حواف ناعم */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_42%,transparent_30%,rgba(0,0,0,0.38)_100%)] opacity-55 md:opacity-70" />
      <div className="absolute inset-0 shadow-[inset_0_0_60px_24px_rgba(0,0,0,0.22)] md:shadow-[inset_0_0_80px_36px_rgba(0,0,0,0.28)]" />
    </div>
  );
}
