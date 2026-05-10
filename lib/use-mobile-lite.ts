"use client";

import { useEffect, useState } from "react";

/** يطابق `max-md` في Tailwind (<768px): تفعيل الوضع الخفيف للأداء على الهاتف */
export function useMobileLite() {
  const [isMobileLite, setIsMobileLite] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobileLite(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isMobileLite;
}
