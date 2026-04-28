"use client";

import Image from "next/image";

import { useTheme } from "@/components/contexts/theme-provider";

interface ScreenshotProps {
  srcLight: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export default function Screenshot({
  srcLight,
  srcDark,
  alt,
  width,
  height,
  className,
}: ScreenshotProps) {
  const { resolvedTheme } = useTheme();
  const src = resolvedTheme === "light" ? srcLight : (srcDark ?? srcLight);
  const isSvg = src.endsWith(".svg");

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized={isSvg}
    />
  );
}
