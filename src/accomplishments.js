import React from "react";
import { TitleDescription } from "./Title-description";
import { AddButton } from "./add-button";

const categories = ["Balanced Thinker", "Leadership", "Bias to Action"];

const AccompSection = () => (
  <TitleDescription categories={categories} titleLabel={"Accomplishment"} />
);

export const Accomplishments = () => {
  const [accompSections, setAccompSections] = React.useState([]);
  const addAccomp = () =>
    setAccompSections(accompSections.concat(<AccompSection />));

  React.useEffect(addAccomp, []);

  return (
    <fieldset
      style={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        marginTop: 16
      }}
    >
      <legend>{"Accomplishments"}</legend>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {accompSections.map(i => i)}
      </div>
      <AddButton
        onClick={addAccomp}
        label={"Add Accomplishment"}
        style={{ alignSelf: "end", width: 232 }}
      />
    </fieldset>
  );
};
