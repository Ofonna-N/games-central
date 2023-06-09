import { useState } from "react";

type Props = {
  text: string;
};

const ExpandableText = ({ text }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (!text) return null;

  const aboveLimit = text.length > limit;

  const summary = aboveLimit && !expanded ? text.slice(0, limit) + "..." : text;

  return (
    <p>
      {summary}{" "}
      {aboveLimit && (
        <button
          className="bg-green-600 px-3 py-1 rounded-md ml-2"
          onClick={() => setExpanded((prev) => !prev)}
        >
          {expanded ? "show less" : "show more"}
        </button>
      )}
    </p>
  );
};

export default ExpandableText;
