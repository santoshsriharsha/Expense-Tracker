import "./ChartBar.css";

const ChartBar = ({ label, value, totalAmount }) => {
  let barHeight = "0%";
  if (totalAmount !== 0) {
    barHeight = `${(value / totalAmount) * 100}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
