import React from 'react'
import { scaleLinear, scaleBand } from 'd3-scale'
import { axisBottom } from 'd3-axis'
import { max } from 'd3-array'
import { select } from 'd3-selection'

const Graph = props => {
    const chartData = [{
        "name": "yes",
        "value": props.yes
    }, {
        "name": "no",
        "value": props.no
    }]

    const margins = {
        top: 80,
        left: 50,
        right: 50,
        bottom: 50
    }
    const width = 600 - margins.left - margins.right
    const height = 400 - margins.top - margins.bottom

    const xScale = scaleBand()
        .domain(chartData.map(d => d.name))
        .rangeRound([0, width])
        .padding(0.5)

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

                {chartData.map(d => (
                    <rect 
                        key={d.name}
                        x={xScale(d.name)}
                        y={yScale(d.value)}
                        width={xScale.bandwidth()}
                        height={height - yScale(d.value)}
                    />
                ))}
            </g>
        </svg>
    )
}

export default Graph