import React from 'react'
import styled from 'styled-components'
import { BarChart } from 'react-chartkick'

const Button = styled.button`
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border-radius: 3px;
	color: mediumseagreen;
	background: white;
	border: 2px solid mediumseagreen;
`

export default ({
	left
	, right
	, leftAction
	, rightAction
	, resetAction
}) => (
	<div>
		<BarChart data={[['Left', left], ['Right', right]]}/>
		<Button onClick={leftAction}>Left Button</Button>
		<Button onClick={rightAction}>Right Button</Button>
		<br/>
		<Button onClick={resetAction}>Reset List</Button>
	</div>
)