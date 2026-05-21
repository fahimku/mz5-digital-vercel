"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faClock,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { stats } from "@/lib/site";

const statIconMap: Record<(typeof stats)[number]["icon"], IconDefinition> = {
  users: faUsers,
  clock: faClock,
  star: faStar,
  bolt: faBolt,
};

export function HeroStats() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="hero-stats-bar"
      >
        <div className="hero-stats-bar-edge" aria-hidden />
        <div className="hero-stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.07 }}
              className={`hero-stats-cell ${i > 0 ? "hero-stats-cell--divider" : ""}`}
            >
              <div className="hero-stat-icon-wrap">
                <FontAwesomeIcon
                  icon={statIconMap[stat.icon]}
                  className="hero-stat-fa-icon"
                />
              </div>
              <div className="hero-stats-text">
                <p className="hero-stats-value">{stat.value}</p>
                <p className="hero-stats-label">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
