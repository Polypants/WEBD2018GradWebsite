//

import React, { Component}  from 'react';
import '../stylesheets/title.css'
import { RSVP } from "./RSVP"

export class Event extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			

		}

		// this.lala = this.lala.bind(this)
	}


	componentDidMount(){
	
	}

	componentDidUpdate(prevProps, prevState){
	
	}

	render() {
		return (
			
			<div className="introWrapper">
				<div className="eventTitle">
					<h1>Rise</h1>
					<h1>Above the</h1>
					<h1>Ordinary</h1>
				</div>
				<div className="eventDetail">
					<p>Humber College</p>
					<p>Web design & interactive media</p>
					<p>Class of 2018 grad show</p>
					<RSVP />
				</div>
			</div>
			)
	}
	

}

