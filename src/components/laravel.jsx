import getIt from "../services/sendmail";

const Laravel = () => {
  const connect = () => {
    getIt("http://127.0.0.1:8000/api/sendmail");
  };
  return (
    <div>
      <h2 onClick={connect}>Hello Click Me!</h2>
    </div>
  );
};

export default Laravel;
