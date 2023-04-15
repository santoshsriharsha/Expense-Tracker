import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = ({ dataPoints, totalAmount }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          totalAmount={totalAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
