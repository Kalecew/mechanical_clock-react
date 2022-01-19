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
		const h = hours % 12 * 30 + 6 * minutes / 60
		return(
			<div className="clock">
				<div className="clock__face">
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(0deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(6deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(12deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(18deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(24deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(30deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(36deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(42deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(48deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(54deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(60deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(66deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(72deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(78deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(84deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(90deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(96deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(102deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(108deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(114deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(120deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(126deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(132deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(138deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(144deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(150deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(156deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(162deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(168deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(174deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(180deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(186deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(192deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(198deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(204deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(210deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(216deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(222deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(228deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(234deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(240deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(246deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(252deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(258deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(264deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(270deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(276deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(282deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(288deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(294deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(300deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(306deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(312deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(318deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(324deg)'}}></div>

					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(330deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(336deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(342deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(348deg)'}}></div>
					<div className="clock__mark" style={{transform: 'translateX(-50%) rotate(354deg)'}}></div>
				</div>
				<div className="clock__hours" style={{transform: 'translate(-50%, 50%) rotate(' + h + 'deg)'}}></div>
				<div className="clock__minutes" style={{transform: 'translate(-50%, 50%) rotate(' + m + 'deg)'}}></div>
				<div className="clock__seconds" style={{transform: 'translate(-50%, 50%) rotate(' + s + 'deg)'}}></div>
			</div>
		)
	}
}

export { Clock }