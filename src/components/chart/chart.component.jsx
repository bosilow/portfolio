import "./chart.styles.scss";

import React, { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";
import ABOUT_DATA from "../../database/ABOUT_DATA";
import chartImg from "../../assets/images/bosi-circle.jpg";

const data = ABOUT_DATA;

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fieldInfo,
}) => {
  const RADIAN = Math.PI / 180;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill="#cc7a00"
      />

      <text
        x={ex + (cos >= 0 ? 1 : -1)}
        y={ey}
        // x={1000}
        // y={200}
        dy={10}
        textAnchor={textAnchor}
        fill="#999"
      >
        {fieldInfo}
      </text>
    </g>
  );
};

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  fieldName,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      className="field-text-info"
      x={x}
      y={y}
      fill="#fff"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {fieldName}
    </text>
  );
};

const ActiveChart = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="pie-chart-container">
      <img src={chartImg} alt="Chart Profile" className="chart-img" />
      <div className="pie-chart">
        <PieChart width={1400} height={600}>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={data}
            innerRadius={113}
            outerRadius={215}
            fill="#00061a"
            dataKey="value"
            label={renderCustomizedLabel}
            onMouseEnter={onPieEnter}
          />
        </PieChart>
      </div>
    </div>
  );
};

export default ActiveChart;
