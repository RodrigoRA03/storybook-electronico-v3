import { useEffect, useState } from "react";

const TabsOptions = ({ optionSelected, option, handleChangeTabOption }) => {
  return (
    <li
      className={`${
        optionSelected === option.value ? "activeTab" : "notActiveTab"
      }`}
      onClick={() => handleChangeTabOption(option.value)}
    >
      <label htmlFor="tab">{option.label}</label>
    </li>
  );
};

export const CustomTabs = ({ children, initialValue, options, onChange }) => {
  const [optionSelected, setOptionSelected] = useState(initialValue || 1);

  const handleChangeTabOption = (value) => {
    setOptionSelected(value);
  };

  useEffect(() => {
    return onChange && onChange(optionSelected);
  }, [optionSelected]);

  return (
    <div className="pc-tab">
      <nav>
        <ul>
          {options.map((option) => (
            <TabsOptions
              key={option.value}
              optionSelected={optionSelected}
              option={option}
              handleChangeTabOption={handleChangeTabOption}
            />
          ))}
        </ul>
      </nav>
      <section>
        <div className="tab animate__animated animate__zoomIn animate__animated animate__zoomIn">
          {children}
        </div>
      </section>
    </div>
  );
};
