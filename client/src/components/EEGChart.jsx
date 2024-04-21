import eegData from "../data/data-original.json";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
// import eegData from './data.json';

const EEGChart = () => {
  const svgRef = useRef();
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define margins
    // const width = 928;
    // const height = 100;
    // const marginTop = 30;
    // const marginRight = 30;
    // const marginBottom = 30;
    // const marginLeft = 40;
    // const margin = { top: 30, right: 30, bottom: 30, left: 40 };
    // const width = 928;
    // const height = 100 ;




    // Define margins
  const margin = { top: 30, right: 30, bottom: 30, left: 40 };
  const width = 1900;
  const height = 200;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

    // Extract data for the "Fp1" channel
    const fp1Data = eegData.map((d) => d["Fp1"]);
    console.log(fp1Data);

    // Convert fp1Data values from strings to numbers
    const fp1DataNumbers = fp1Data.map(parseFloat);
    console.log(fp1DataNumbers);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, fp1DataNumbers.length-1])
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(fp1DataNumbers), d3.max(fp1DataNumbers)])
      .range([innerHeight, 0]);

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
      .attr("stroke-width", 2)
      .attr("d", line)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top + innerHeight})`)
      .call(xAxis);
    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis);
  }, []);
  return <svg className="w-full max-w-full self-center" ref={svgRef} width={1900} height={200}></svg>;

//   return <svg className="w-full max-w-full self-center" ref={svgRef} width={1920} height={200}></svg>;
};

export default EEGChart;
