import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import WeatherSummary from '../WeatherSummary';

class Home extends Component {
	state = {
		temperature: 0
	};

	componentDidMount() {
		axios.get('https://api.openweathermap.org/data/2.5/weather?zip=19380,us&appid=0d5ff4b61c875e0e85ee8b9ee0df2ab3&units=imperial')
			.then(res => {
				this.setState({
					temp: res.data.main.temp
				})
			})
	}

	render() {
		return (
			<Container>
				<Row>
					<Col>
						<WeatherSummary temp={this.state.temp} />
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Home;
