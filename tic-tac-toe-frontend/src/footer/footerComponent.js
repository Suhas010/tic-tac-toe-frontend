import React from 'react';
import './footer.css';
const Footer = () => {
  const handleNameChange = ({target}) => {
    console.log(target)
    localStorage.setItem("name", target.value);
  }
  return(
    <div className="footer">
      <div>
        <span className="fa fa-user"></span>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Player name"
          defaultValue={localStorage.getItem("name")}
        />
      </div>
    </div>
  );
}

export default Footer;