import { LevelContext } from "./LevelContext";
import { useContext } from "react";
function Section({ children }) {
  const level = useContext(LevelContext);
  return (
    <div className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </div>
  );
}
export default Section;
