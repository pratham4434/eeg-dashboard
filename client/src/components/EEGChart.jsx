import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import eegData from "../data/data-original.json";

const EEGChart = ({channelName}) => {
  const svgRef = useRef();
  
  useEffect(() => {
    const svg = d3.select(svgRef.current);
    // console.log(channelName)

    // Define margins
    const margin = { top: 30, right: 40, bottom: 30, left: 45 };

    // Get dimensions of the container
    const containerWidth = svgRef.current.parentElement.clientWidth;

    // Fixed height for the chart
    const height = 200 - margin.top - margin.bottom;

    // Calculate width excluding margins
    const width = containerWidth - margin.left - margin.right;

    // Extract data for the "Fp1" channel
    const fp1Data = eegData.map((d) => d[channelName]);
    // const fp1Data = eegData.map((d) => d["Fp1"]);

    // Convert fp1Data values from strings to numbers
    const fp1DataNumbers = fp1Data.map(parseFloat);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, fp1DataNumbers.length/4])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(fp1DataNumbers), d3.max(fp1DataNumbers)])
      .range([height, 0]);

    // Create line generator
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    // Append path element for line chart
    svg
      .append("path")
      .datum(fp1DataNumbers)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.25)
      .attr("d", line)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top + height})`)
      .call(xAxis);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);
  }, [channelName]);

  return (
    <div className="w-full max-w-full mx-auto">
      <svg
        ref={svgRef}
        className="w-full"
        width="100%"
        height={200}
        // style={{ overflow: "visible" }}
      ></svg>
    </div>
  );
};

export default EEGChart;
