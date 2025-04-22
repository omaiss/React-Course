import { CORE_CONCEPTS } from "./data";
import { useState } from "react";   //React Hooks start with use
import { Header } from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";

export default function App() {
  //React Hooks are called inside React componenets or custom Hooks
  const [selected_topic, setSelectedTopic] = useState('Please Click a button');
 
  // contains exactly two elements 
  // let tabContent = 'Please Click a button';
  function click_fun(selectedbutton) {
    // selectedbutton = 'components', 'jsx', 'props', 'state'
    // tabContent = selectedbutton;
    setSelectedTopic(selectedbutton);
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
            <TabButton click={() => click_fun('components')}>  Components </TabButton>
            <TabButton click={() => click_fun('jsx')}>  JSX </TabButton>
            <TabButton click={() => click_fun('props')}>  Props </TabButton>
            <TabButton click={() => click_fun('state')}>  State </TabButton>
          </menu>
          {/* can't use regular variable for dynamic content, you need to tell React to reevaluate the code 
          urself, it doesn't auto check {tabContent}*/}
          {selected_topic}
        </section>
      </main>
    </div>
  );
}
