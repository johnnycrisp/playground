import React from "react";

const SectionVertical = ({ title }) => {
  return (
    <section className="section">
      <div className="section__card">
        <h1 className="section__title">{title}</h1>
      </div>
    </section>
  );
};

export default SectionVertical;
