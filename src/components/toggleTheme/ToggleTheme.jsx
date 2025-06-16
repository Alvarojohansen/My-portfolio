import React, { useContext } from "react";

import { ThemeContext } from "../../services/theme/theme.context";

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" onClick={toggleTheme} />
      <div
        className="w-14 h-7 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 peer-checked:from-thirdty peer-checked:to-purple-800 transition-all duration-500
        after:content-['☀️'] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 
        after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-7 
        peer-checked:after:content-['🌙'] after:shadow-md after:text-sm"
      />
      <span className="ml-3 text-sm font-medium text-gray-900"></span>
    </label>
  );
};

export default ToggleTheme;
