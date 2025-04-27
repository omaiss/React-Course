import TabButton from './TabButton';
import { useState } from "react";   //React Hooks start with use
import { EXAMPLES } from "../data";
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
  // React Hooks are called inside React componenets or custom Hooks

  const [selected_topic, setSelectedTopic] = useState();
  let tab_content = <p>Please select a topic using the buttons above.</p>;
  if (selected_topic) {
    tab_content =
      <div id='tab-content'>
        <h3>
          {EXAMPLES[selected_topic].title}
        </h3>
        <p>
          {EXAMPLES[selected_topic].description}
        </p>
        <pre>
          <code>
            {EXAMPLES[selected_topic].code}
          </code>
        </pre>
      </div>
  }

  let buttons_ = <><TabButton isSelected={selected_topic === 'components' ? true : false} onClick={() => click_fun('components')} > Components </TabButton>
  <TabButton isSelected={selected_topic === 'jsx' ? true : false} onClick={() => click_fun('jsx')}>  JSX </TabButton>
  <TabButton isSelected={selected_topic === 'props' ? true : false} onClick={() => click_fun('props')}>  Props </TabButton>
  <TabButton isSelected={selected_topic === 'state' ? true : false} onClick={() => click_fun('state')}>  State </TabButton> </>;

  // contains exactly two elements 
  // let tabContent = 'Please Click a button';
  function click_fun(selectedbutton) {
    // selectedbutton = 'components', 'jsx', 'props', 'state'
    // tabContent = selectedbutton;
    setSelectedTopic(selectedbutton);
  }

  return (
    <Section title={"Examples"} id="examples">
      <Tabs buttons={buttons_} ButtonsContainer="menu"> {tab_content} </Tabs>
      {/* can't use regular variable for dynamic content, you need to tell React to reevaluate the code 
          urself, it doesn't auto check {tabContent}*/}
      {/* {selected_topic} */}
    </Section>
  );
}
