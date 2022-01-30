import React from "react";
type RandomNumber = {
  value: number;
};
type isPositiveProps = RandomNumber & {
  isPositive: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};
type isNegativeProps = RandomNumber & {
  isPositive?: boolean;
  isNegative: boolean;
  isZero?: boolean;
};
type isZero = RandomNumber & {
  isPositive?: boolean;
  isNegative?: boolean;
  isZero: boolean;
};
type RandomNumberProps = isPositiveProps | isNegativeProps | isZero;
const Resctricted = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value}
      {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

export default Resctricted;
