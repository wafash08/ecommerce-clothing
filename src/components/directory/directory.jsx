import React from "react";
import MenuItem from "../menu-item/menu-item";
import SECTIONS_DATA from "../../assets/sections.data";

import "./directory.scss";

export default class Directory extends React.Component {
  state = {
    sections: SECTIONS_DATA,
  };

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}
