"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faChartColumn,
  faCode,
  faDesktop,
  faMagnifyingGlass,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { growStaggerItem } from "@/components/motion/GrowReveal";
import { services } from "@/lib/site";

const serviceIconMap: Record<
  (typeof services)[number]["icon"],
  IconDefinition
> = {
  code: faCode,
  display: faDesktop,
  cart: faCartShopping,
  search: faMagnifyingGlass,
  chart: faChartColumn,
  palette: faPalette,
};

type ServiceCardProps = {
  title: string;
  description: string;
  tags: readonly string[];
  href: string;
  icon: (typeof services)[number]["icon"];
};

export function ServiceCard({
  title,
  description,
  tags,
  href,
  icon,
}: ServiceCardProps) {
  return (
    <motion.article variants={growStaggerItem} className="h-full">
      <div className="service-card-shell group/shell h-full">
        <div className="service-card-shine" aria-hidden />
        <div className="service-card-shine-orange" aria-hidden />
        <Link href={href} className="service-card service-card-surface block h-full p-5 sm:p-6">
          <div className="service-card-edge-hint" aria-hidden />
          <div className="service-card-glow" aria-hidden />

          <div className="relative mb-4 flex items-start gap-3.5">
            <div className="service-card-icon-wrap">
              <FontAwesomeIcon
                icon={serviceIconMap[icon]}
                className="service-card-fa-icon"
              />
            </div>
            <h3 className="pt-1.5 text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
              {title}
            </h3>
          </div>

          <p className="relative mb-5 text-sm leading-relaxed text-zinc-500">
            {description}
          </p>

          <div className="relative mb-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="service-card-tag">
                {tag}
              </span>
            ))}
          </div>

          <span className="relative inline-flex items-center gap-1.5 text-sm font-medium text-[#ff4d00] transition-all group-hover/shell:gap-2.5">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform group-hover/shell:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </motion.article>
  );
}
