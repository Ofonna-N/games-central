import React from "react";

type Props = {
  title: string;
  detail: (string | React.ReactNode)[];
};

const DefinitionList = ({ title, detail }: Props) => {
  return (
    <dl>
      <dt className="opacity-70 font-bold text-[2rem]">{title}</dt>
      {detail.map((data, i) => (
        <dd className="mb-3" key={i}>
          {data}
        </dd>
      ))}
    </dl>
  );
};

export default DefinitionList;
