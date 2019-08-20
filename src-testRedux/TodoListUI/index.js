import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'

class TodoListUI extends Component {
	render() {
		return (
			<Fragment>
				<div style={{margin: '10px'}}>
					<Input
						value={this.props.inputValue}
						placeholder='请输入内容'
						style={{width: '300px', marginRight: '10px'}}
						onChange={this.props.handleInputChange}
					/>
					<Button
						id='btn'
						type='primary'
						onClick={this.props.handleBtnClick}
					>提交</Button>
				</div>
				<List
				  style={{width: '300px', marginLeft: '10px'}}
			      bordered
			      dataSource={this.props.list}
			      renderItem={(item, index) => (<List.Item onClick={() => {this.props.handleLiClick(index)}}>{item}</List.Item>)}
			    />
			</Fragment>
		)
	}
}

export default TodoListUI