import React from 'react';
import PT from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
  let tabClass = ''; 
  if (props.tab === props.selectedTab) {
    tabClass = 'tab active-tab'
  } else {
    tabClass = 'tab'
  }

  const changeSelected2 = () => {
    props.selectTabHandler(props.tab);
  };

  return (
    <div
      className={tabClass}
      onClick={changeSelected2}
        /* Replace this dummy click handler function with your selectTabHandler function from props 
         you'll need to pass the `tab` in as an argument to this handler. */
      
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

// Make sure you include PropTypes on your props.

export default Tab;

Tab.propTypes = {
  selectTabHandler: PT.func,
  selectedTab: PT.string,
  tab: PT.string,
}