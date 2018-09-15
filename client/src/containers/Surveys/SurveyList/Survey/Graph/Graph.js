import React from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { axisBottom } from 'd3-axis'
import { max } from 'd3-array'
import { select } from 'd3-selection'
import ResponsiveWrapper from '../ResponsiveGraph/ResponsiveGraph'
import './Graph.css'

const Graph = props => {
    // data for graph from props
    const chartData = [{
        "name": "yes",
        "value": props.yes
    }, {
        "name": "no",
        "value": props.no
    }]

    // margins for svg
    const margins = {
        top: 50,
        left: 50,
        right: 50,
        bottom: 50
    }
    const width = Math.max(props.parentWidth, 250) - margins.left - margins.right
    const height = 340 - margins.top - margins.bottom

    // define x scale of graph
    const xScale = scaleBand()
        .domain(chartData.map(d => d.name))
        .rangeRound([0, width])
        .padding(0.5)

    // define y scale of graph
    const yScale = scaleLinear()
        .domain([0, max(chartData, d => d.value)])
        .rangeRound([height, 0])

    return (
        <svg
            width={width + margins.left + margins.right}
            height={height + margins.top + margins.bottom}>
            <g transform={`translate(${margins.left}, ${margins.top})`}>
                <g
                    className="axis axis-x"
                    transform={`translate(0, ${height})`}
                    ref={node => select(node).call(axisBottom(xScale))} />

                {/* rendering bars in chart */}
                {chartData.map(d => (
                    <rect
                        key={d.name}
                        x={xScale(d.name)}
                        y={yScale(d.value)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.value)}
                    />
                ))}

                {/* rendering text tooltip above bars */}
                {chartData.map(d => (
                    <text
                        className="label"
                        x={xScale(d.name) + xScale.bandwidth() / 2}
                        y={yScale(d.value) - 5}>
                        {d.value}
                    </text>
                ))}
            </g>
        </svg>
    )
}

export default ResponsiveWrapper(Graph)