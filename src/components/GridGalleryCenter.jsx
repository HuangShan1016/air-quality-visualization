import React from 'react';
import { useInView } from 'react-intersection-observer';
import './GridGalleryCenter.css';

const paragraphs = [
  "温室效应，又称花房效应，是大气保温效应的俗称。太阳短波辐射能顺利透过大气抵达地面，使地面升温。而地面受热后释放的长波热辐射线，会被大气中的二氧化碳等温室气体大量吸收，进而让地表与低层大气温度逐步增高，因其作用类似栽培农作物的温室，故而得名。",
  "大气中的水汽（H₂O）、二氧化碳（CO₂）、甲烷（CH₄）、一氧化二氮（N₂O）等气体，统称温室气体。它们能吸收红外线并保存热量，改变大气热平衡。太阳辐射被地球表面吸收后，地表升温并发射红外辐射，这些热量因温室气体阻挡，大部分无法向外层空间发散，最终形成温室效应。",
  "工业革命以来，人类活动极大地影响了温室效应。工业生产大量燃烧煤炭、石油等矿物燃料，每年排放大量二氧化碳。同时，森林砍伐、农业活动（如牲畜养殖、水稻种植）、人口增长与城市化进程等，都在不同程度上增加了温室气体排放，加剧了温室效应。"
];

const GridGalleryCenter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <section
      ref={ref}
      className={`greenhouse-section${inView ? ' in-view' : ''}`}
    >
      <div className="greenhouse-content">
        {paragraphs.map((text, i) => (
          <p key={i} style={{ '--order': i + 1 }}>
            {text}
          </p>
        ))}
      </div>
      <div className="greenhouse-breath-line" />
    </section>
  );
};

export default GridGalleryCenter;