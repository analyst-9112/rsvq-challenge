import { useState } from "react";
import QuotesCard from "./components/QuotesCard";
import { RonQuotes } from "./data";

function App() {
  const [totalVotes, setTotalVotes] = useState(0);

  const incrementTotal = () => {
    setTotalVotes(totalVotes + 1);
  };

  const decrementTotal = () => {
    setTotalVotes(totalVotes + 1); //Made +1 instead of -1 in order to make total votes correct
  };

  return (
    <div className="App">
      <QuotesCard
        data={RonQuotes}
        total={totalVotes}
        add={incrementTotal}
        subtract={decrementTotal}
      />
    </div>
  );
}

export default App;
