import React, { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/lea-8/cdbf7b36665e5f22452126cf1eaf2c49/raw/f4ee0dad1f05858d9c614017956723c69d975505/UN_Population_2023.csv";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.Population = +d["Total"] * 1000; // wth is this notation?
      return d;
    };
    csv(csvUrl, row).then((data) => {
      setData(data.slice(0, 10));
    });
  }, []);

  return data;
}