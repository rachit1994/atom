import React from 'react';
import Dropdown from './components/dropdown/dropdown.js';

export class Common extends React.Component {
   render() {
   	var a = {
   		menu_content:[{text:"dropdownnnnn"},{icon:"glyphicon glyphicon-xbt"}]
   	};
      return ( 
         <Dropdown options={a}/>
      
      );
   }
}

export default Common;
