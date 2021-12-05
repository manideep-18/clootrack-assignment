import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// import { useGraphConfig } from "./hooks/useGraphConfig";
import { CustomBar, CustomPie } from "./components";
import { fetchUsers } from "./redux/FetchData";

function App() {
  const data = useSelector((state) => state.usersData);
  const isLoading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();

  // TODO: using react query
  // const { data, status } = useGraphConfig(
  //   "graphData",
  //   "https://s3-ap-southeast-1.amazonaws.com/he-public-data/chart2986176.json"
  // );

  console.log(data, "data");

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const supportingValues = (length) => {
    let values = [];
    for (let i = 10; i < length + 10; i++) {
      const char = i.toString(36) + i;
      values.push(char);
    }
    return values;
  };

  const supportingPieBackgroundColors = (length) => {
    let values = [];
    for (let i = 0; i < length; i++) {
      const color =
        "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
      values.push(color);
    }
    return values;
  };

  return (
    <div>
      {error && <p>Error fetching data</p>}
      {isLoading && <p>Fetching data...</p>}
      {data && (
        <>
          {data.map((eachData) =>
            eachData.type === "Bar" ? (
              <CustomBar
                data={eachData.elements}
                labelValues={supportingValues(eachData.elements.length)}
              />
            ) : (
              <CustomPie
                data={eachData.elements}
                labelValues={supportingValues(eachData.elements.length)}
                backgroundColors={supportingPieBackgroundColors(
                  eachData.elements.length
                )}
              />
            )
          )}
        </>
      )}
    </div>
  );
}

export default App;
