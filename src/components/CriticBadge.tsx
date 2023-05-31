const CriticBadge = ({ criticNo }: { criticNo: number }) => {
  const color =
    criticNo > 75
      ? "text-green-600 ring-green-600/20"
      : criticNo > 60
      ? "text-green-600 ring-green-600/20"
      : "";
  return (
    <span
      className={`inline-flex text-[1.6rem] items-center rounded-md px-4 py-1 font-medium ${color} ring-1 ring-inset`}
    >
      {criticNo}
    </span>
  );
};

export default CriticBadge;
