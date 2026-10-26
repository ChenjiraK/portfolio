import React from 'react';

const SectionHeading: React.FC<{ id: string; number: string; title: string; caption: string }> = ({ id, number, title, caption }) => (
  <div data-reveal className="mb-10 flex items-end justify-between gap-4 md:mb-14">
    <div>
      <p className="mb-3 text-xs uppercase tracking-[0.2em] !text-green-2B5F44">{caption}</p>
      <h2 id={id} className="!text-4xl !font-medium !leading-tight tracking-[-0.04em] md:!text-6xl">{title}</h2>
    </div>
    <span aria-hidden="true" className="text-5xl font-light tracking-tighter !text-black/15 md:text-7xl">{number}</span>
  </div>
);

export default SectionHeading;
