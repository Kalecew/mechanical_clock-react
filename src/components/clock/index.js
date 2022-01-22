import { Component } from 'react'
import './style.css'

class Clock extends Component {
	state = {
		seconds: 0,
		minutes: 0,
		hours: 0
	}

	tick = () => {
		const date = new Date()
		this.setState({
			seconds: date.getSeconds(),
			minutes: date.getMinutes(),
			hours: date.getHours()
		})
	}

	componentDidMount(){
		this.timerID = setInterval(() => this.tick(), 1000)
	}
	componentWillUnmount(){
		clearInterval(this.timerID)
	}

	render(){
		const {seconds,minutes,hours} = this.state
		const s = seconds * 6
		const m = minutes * 6 + 6 * seconds / 60
		const h = hours % 12 * 30 + minutes / 2
		let marks = []
		let degMarks = 0
		for (var i = 0; i < 60; i++) {
			marks.push(<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(' + degMarks + 'deg)'}}></div>)
			degMarks+=6
		}
		return(
			<div className="clock">
				<div className="clock__face">{marks}</div>
				<div className="clock__hours" style={{transform: 'translate(-50%, 50%) rotate(' + h + 'deg)'}}></div>
				<div className="clock__minutes" style={{transform: 'translate(-50%, 50%) rotate(' + m + 'deg)'}}></div>
				<div className="clock__seconds" style={{transform: 'translate(-50%, 50%) rotate(' + s + 'deg)'}}></div>
			</div>
		)
	}
}

export { Clock }