import React, { Component } from 'react';
import Day from '../day/day';
import './month.css';

class Month extends Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
		<div>
			Month Component
			<Day/>
		</div>
		);
	}
}

export default Month;