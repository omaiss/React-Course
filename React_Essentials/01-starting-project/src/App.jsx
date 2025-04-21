import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

export default function App() {
  function click() {
    console.log('click');
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            ></CoreConcepts>
          </ul>
        </section>
        <section>
          <h2>
            Examples
          </h2>
          <menu>
            {/* can also use label for the button */}
            <TabButton click={click}>  Components </TabButton>
            <TabButton click={click}>  JSX </TabButton>
            <TabButton click={click}>  Props </TabButton>
            <TabButton click={click}>  State </TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}
