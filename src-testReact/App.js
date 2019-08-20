import React, { Component, Fragment} from 'react'
import './app.css'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class App extends Component{

	constructor(props) {
		super(props)
		this.state = {
			show: true,
			list: []
		}
		this.handleToggole = this.handleToggole.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
	}

	render() {
		return (
			<Fragment>
				{/*<CSSTransition
					in={this.state.show}
					timeout={1000}
					classNames="fade"
					unmountOnExit
					onEntered={(el) => {el.style.color='blue'}}
					appear={true}
				>
					<div>hello</div>
				</CSSTransition>
				<button onClick={this.handleToggole}>toggle</button>*/}
				<TransitionGroup>
					{
						this.state.list.map((item,index)=>{
							return (
								<CSSTransition
									timeout={1000}
									classNames="fade"
									unmountOnExit
									onEntered={(el) => {el.style.color='blue'}}
									appear={true}
									key={index}
								>
									<div>item</div>
									</CSSTransition>
							)
						})
					}
				</TransitionGroup>
				<button onClick={this.handleAdd}>toggle</button>
			</Fragment>
		);
	}

	handleToggole() {
		this.setState((prevState)=>({
			show: prevState.show ? false : true
		}))
	}

	handleAdd() {
		this.setState((prevState) => ({
			list: [...prevState.list, 'item'],
			inputVal: ''
		}))
	}
}

export default App