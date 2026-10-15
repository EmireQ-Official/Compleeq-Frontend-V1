import styles from "./Chart.module.css";

// Simple wrapper that renders JSON config as a placeholder chart.
// In a real app you would replace this with a chart library such as Chart.js or Recharts.
const Chart = ({ config }) => (
  <div className={styles.chart}>
    {/* Placeholder: render the config for debugging */}
    <pre>{JSON.stringify(config, null, 2)}</pre>
  </div>
);

export default Chart;
