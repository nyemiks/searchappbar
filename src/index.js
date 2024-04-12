import React from 'react'
import styles from './styles.module.css'
import SearchAppBar from './components/SearchAppBar';
import CustomizedAccordions from './components/CustomizedAccordions';

/**
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
*/
export const SearchAppComponent = () => { 
  return <SearchAppBar></SearchAppBar>;
}

export const CustomAccordion = () => {
  return <CustomizedAccordions></CustomizedAccordions>
}

/** 


export const SearchAppBar = () => 
{return <SearchAppBar></SearchAppBar>;
};
export const AccordionComp = () => {
  return (<Accordion></Accordion>)
}

export const AccordionDetailsComp = () => {
  return (<AccordionDetails></AccordionDetails>)
}

export const AccordionSummaryComp = () => {
  return (<AccordionSummary></AccordionSummary>)
}
*/
