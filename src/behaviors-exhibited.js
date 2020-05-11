import React from "react";
import { TitleDescription } from "./Title-description";
import { AddButton } from "./add-button";

const categories = ["Balanced Thinker", "Leadership", "Bias to Action"];

const BehaviorSection = () => (
  <TitleDescription categories={categories} titleLabel={"Behavior"} />
);

export const BehaviorsExhitbited = () => {
  const [behaviorSections, setBehaviorSections] = React.useState([]);
  const addBehavior = () =>
    setBehaviorSections(behaviorSections.concat(<BehaviorSection />));

  React.useEffect(addBehavior, []);

  return (
    <fieldset
      style={{
        display: "flex",
        flexDirection: "column",
        width: "auto",
        marginTop: 16
      }}
    >
      <legend>{"Behaviors Exhibited"}</legend>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {behaviorSections.map(i => i)}
      </div>
      <AddButton
        onClick={addBehavior}
        label={"Add Behavior"}
        style={{ alignSelf: "end", width: 188 }}
      />
    </fieldset>
  );
};
