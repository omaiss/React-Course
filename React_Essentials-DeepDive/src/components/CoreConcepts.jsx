import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";
import Section from "./Section";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((concepItem) =>
          <CoreConcept key={concepItem.title} {...concepItem} />)}
        {/* <CoreConcepts {...CORE_CONCEPTS[0]} />
                <CoreConcepts {...CORE_CONCEPTS[1]} />
                <CoreConcepts {...CORE_CONCEPTS[2]} />
                <CoreConcepts
                  title={CORE_CONCEPTS[3].title}
                  description={CORE_CONCEPTS[3].description}
                  image={CORE_CONCEPTS[3].image}
                ></CoreConcepts> */}
      </ul>
    </Section>
  );
}