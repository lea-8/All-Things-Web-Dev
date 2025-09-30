export const Marks = ({
  data,
  xScale,
  yScale,
  xValue,
  yValue,
  tooltipFormat,
  // circleRadius
}) =>
  data.map(d => (
    <circle
      className="mark"
      cx={xScale(xValue(d))}
      cy={yScale(yValue(d))}
      r={10}
    >
      <title>{tooltipFormat(xValue(d))}</title>
    </circle>
  ));
