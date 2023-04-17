import React from 'react';


type AccordionPropsType = {
    titleValue: String;
    collapsed: Boolean;
  }
  function Accordion(props: AccordionPropsType) {
    console.log("Accordion is rendering.");
    if (props.collapsed) {
    return (
        <AccordionTitle title={props.titleValue} />
    );
    } else { 
      return (
        <div>
          <AccordionTitle title={props.titleValue} />
          <AccordionBody />
        </div>
      );
    }
  }
  
  
  type AccordionTitlePropsType = {
    title :String;
  
  }
  const AccordionTitle = (props: AccordionTitlePropsType) => {
    console.log("AccordionTitle is rendering.");
    return <h3>{props.title}</h3>;
  }
  
  const AccordionBody = () => {
    console.log("AccordionBody is rendering.");
    return (
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    );
  }
  
  
  export default Accordion;