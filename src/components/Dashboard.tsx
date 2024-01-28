import "../App.css";
import ChartBox from "./ChartBox";

function Dashboard() {
  return <ChartBox name={"Order Book"} url={"/order-book"} />;
}

export default Dashboard;
