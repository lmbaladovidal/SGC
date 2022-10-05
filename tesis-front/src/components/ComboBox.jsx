import React from 'react'
import { useState } from "react";
import ComboBox from 'react-responsive-combo-box'
import 'react-responsive-combo-box/dist/index.css'

const ComboBoxComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [highlightedOption, setHighlightedOption] = useState("");
  const options = [
    "BDF",
    "Carrefour",
    "Libertad",
    "Nivea",
    "Rinin",
    "Rexona",
    "Spadol",    
  ];
  return (      
        <ComboBox
          options={options}
          placeholder="Cliente"
          defaultIndex={4}
          optionsListMaxHeight={300}
          style={{
            width: "350px",
            margin: "0 auto",
            marginTop: "50px",
            color:'black'
          }}
          focusColor="#B91D73"
          renderOptions={(option) => (
            <div className="comboBoxOption">{option}</div>
          )}
          onSelect={(option) => setSelectedOption(option)}
          onChange={(event) => console.log(event.target.value)}
          enableAutocomplete
          onOptionsChange={(option) => setHighlightedOption(option)}
        />)
}

export default ComboBoxComponent;