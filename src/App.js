import './App.css';
import { useState } from 'react';
const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" },
];

function App() {
  const [tableData, setTableData] = useState(data);
  const [sortRev, setSortingRev] = useState(true);

  const sortByDate = () => {
    if (sortRev === true) {
      const sortedData = [...tableData].sort((a, b) => {
        return a.date.localeCompare(b.date);
      });
      setTableData(sortedData);
      setSortingRev((prev) => !prev);
    } else {
      const sortedData = [...tableData].sort((a, b) => {
        return b.date.localeCompare(a.date);
      });
      setTableData(sortedData);
      setSortingRev((prev) => !prev);
    }
  };

  const sortByViews = () => {
    if (sortRev === true) {
      const sortedData = [...tableData].sort((a, b) => {
        return a.views - b.views;
      });
      setTableData(sortedData);
      setSortingRev((prev) => !prev);
    } else {
      const sortedData = [...tableData].sort((a, b) => {
        return b.views - a.views;
      });
      setTableData(sortedData);
      setSortingRev((prev) => !prev);
    }
  };

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Articles</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((ele, index) => (
            <tr key={index}>
              <td>{ele.date}</td>
              <td>{ele.views}</td>
              <td>{ele.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
