import React from 'react';

export interface RadioButtonProps {
  options: string[];
  selectedOption: string;
  onSelect: (option: string) => void;
  isVertical?: boolean;
}

const ERFRadioButton: React.FC<RadioButtonProps> = ({
  options,
  selectedOption,
  onSelect,
  isVertical = false,
}) => {
  return (
    <div className={`radio-button ${isVertical ? 'vertical' : 'horizontal'}`}>
      {options.map((option, index) => (
        <label key={index} className='radio-option'>
          <input
            type='radio'
            id={`radio-option-${index}`} // Add unique id for each input
            value={option}
            checked={option === selectedOption}
            onChange={() => onSelect(option)}
          />
          <label htmlFor={`radio-option-${index}`}>{option}</label>
        </label>
      ))}
    </div>
  );
};

export default ERFRadioButton;
