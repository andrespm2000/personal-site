// Timeline.jsx
import React from "react";

const timelineStyles = `
.cd-timeline {
  overflow: hidden;
  padding: 2em 0;
  color: #d1d5db; /* zinc-300 */
  background-color: #18181b; /* zinc-900 */
  font-family: 'Droid Serif', serif;
}
.cd-timeline h2 {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #f4f4f5; /* zinc-100 */
}
.cd-timeline__container {
  position: relative;
  padding: 1.25em 0;
}
.cd-timeline__container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #27272a; /* zinc-800 */
}
@media (min-width: 64rem) {
  .cd-timeline__container::before {
    left: 50%;
    transform: translateX(-50%);
  }
  .cd-timeline__block:nth-child(even) {
    flex-direction: row-reverse;
  }
  .cd-timeline__img {
    width: 60px;
    height: 60px;
    order: 1;
    margin-left: calc(5% - 30px);
    will-change: transform;
  }
  .cd-timeline__block:nth-child(even) .cd-timeline__img {
    margin-right: calc(5% - 30px);
  }
  .cd-timeline__content {
    width: 45%;
    flex-grow: 0;
    will-change: transform;
    margin: 0;
    font-size: 0.8em;
    --line-height-multiplier: 1.2;
  }
  .cd-timeline__content::before {
    top: 24px;
  }
  .cd-timeline__block:nth-child(odd) .cd-timeline__content::before {
    right: auto;
    left: 100%;
    border-left-color: #27272a; /* zinc-800 */
    border-right-color: transparent;
  }
  .cd-timeline__date {
    position: absolute;
    width: 100%;
    left: 105%;
    top: 20px;
  }
  .cd-timeline__block:nth-child(even) .cd-timeline__date {
    left: auto;
    right: 120%;
    text-align: right;
  }
}
.cd-timeline__block {
  display: flex;
  position: relative;
  z-index: 1;
  margin-bottom: 2em;
}
.cd-timeline__block:last-child {
  margin-bottom: 0;
}
.cd-timeline__img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 0 4px #18181b, inset 0 2px 0 rgba(0,0,0,0.18), 0 3px 0 4px rgba(0,0,0,0.15);
  background-color: #27272a; /* zinc-800 */
}
.cd-timeline__img img {
  width: 24px;
  height: 24px;
}
.cd-timeline__img--picture {
  background-color: #ffffff; /* lime-600 */
}
.cd-timeline__img--movie {
  background-color: #ffffff; /* rose-700 */
}
.cd-timeline__img--location {
  background-color: #ca8a04; /* yellow-600 */
}
.cd-timeline__content {
  flex-grow: 1;
  position: relative;
  margin-left: 1.25em;
  background: #27272a; /* zinc-800 */
  border-radius: 0.25em;
  padding: 1.25em;
  box-shadow: 0 3px 0 #18181b;
}
.cd-timeline__content::before {
  content: '';
  position: absolute;
  top: 16px;
  right: 100%;
  width: 0;
  height: 0;
  border: 7px solid transparent;
  border-right-color: #27272a; /* zinc-800 */
}
.cd-timeline__content h2 {
  color: #f4f4f5; /* zinc-100 */
}
.cd-timeline__date {
  color: #ffffff; /* zinc-400 */
}
`;

// Timeline item shape
export function TimelineItem({
  icon,
  iconBg,
  title,
  date,
  children,
}) {
  return (
    <div className="cd-timeline__block">
      {/* Ícono */}
      <div className={`cd-timeline__img ${iconBg}`}>
        {typeof icon === "string" ? (
          <img src={icon} alt={title} />
        ) : (
          icon
        )}
      </div>
      {/* Contenido */}
      <div className="cd-timeline__content text-component">
        <h2>{date} - {title}</h2>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
}

// Main Timeline component
export default function Timeline({ items, containerClass }) {
  return (
    <section className="cd-timeline js-cd-timeline">
      <style>{timelineStyles}</style>
      <div className={`container max-width-lg cd-timeline__container ${containerClass}`}>
        {items.map((item, idx) => (
          <TimelineItem key={idx} {...item} />
        ))}
      </div>
    </section>
  );
}