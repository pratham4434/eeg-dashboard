import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import eegData from "../data/data-original.json";

const EEGChart = ({ channelName }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define margins
    const margin = { top: 15, right: 40, bottom: 20, left: 45 };

    // Get dimensions of the container
    const containerWidth = svgRef.current.parentElement.clientWidth;

    // Fixed height for the chart
    const height = 200 - margin.top - margin.bottom;

    // Calculate width excluding margins
    const width = containerWidth - margin.left - margin.right;

    // Extract data for the specified channel
    const channelData = eegData.map((d) => d[channelName]);
    const channelDataNumbers = channelData.map(parseFloat);

    // Create scales
    const xScale = d3
      .scaleLinear()
      .domain([0, channelDataNumbers.length - 1])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([d3.min(channelDataNumbers), d3.max(channelDataNumbers)])
      .range([height, 0]);

    // Create line generator
    const line = d3
      .line()
      .x((d, i) => xScale(i))
      .y((d) => yScale(d));

    // Append path element for line chart
    svg
      .append("path")
      .datum(channelDataNumbers)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.25)
      .attr("d", line)
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Add axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);
    const yAxis1 = d3.axisLeft(yScale)
      .tickValues([d3.min(channelDataNumbers), d3.max(channelDataNumbers)]);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top + height})`)
      // .call(xAxis);

    svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .call(yAxis1);

    // Create tooltip
    const tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

    // Add mouseover and mouseout event listeners
    svg
      .append("rect")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", `translate(${margin.left}, ${margin.top})`)
      .style("fill", "none")
      .style("pointer-events", "all")
      .on("mouseover", () => tooltip.style("opacity", 1))
      .on("mouseout", () => tooltip.style("opacity", 0))
      .on("mousemove", (event) => {
        const mouseX = d3.pointer(event)[0] - margin.left;
        const mouseY = d3.pointer(event)[1] - margin.top;
        const index = Math.round(xScale.invert(mouseX));
        const value = channelDataNumbers[index];
        tooltip
          .html(`Value: ${value}`)
          .style("left", (event.pageX + 10) + "px")
          .style("top", (event.pageY - 20) + "px")
          .style("position", "absolute") // Position the tooltip absolutely
          .style("background", "#fff") // Add background color
          .style("border", "1px solid #ddd") // Add border
          .style("padding", "5px"); // Add padding

        // Remove previous dot
        svg.selectAll(".dot").remove();

        // Append a new dot
        svg.append("circle")
          .attr("class", "dot")
          .attr("cx", xScale(index) + margin.left)
          .attr("cy", yScale(value) + margin.top)
          .attr("r", 4)
          .style("fill", "rgb(23 37 84)");
      });
  }, [channelName]);

  return (
    <div className="w-full max-w-full mx-auto">
      <svg
        ref={svgRef}
        className="w-full"
        width="100%"
        height={190}
      ></svg>
    </div>
  );
};

export default EEGChart;
