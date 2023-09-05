import React from "react";
import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 10 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;
  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {" "}
      {text} ..summ
      <button onClick={() => setExpanded(!isExpanded)}>
        Show {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
};

export default ExpandableText;
