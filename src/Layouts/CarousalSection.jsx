import { CarousalTabs } from '../Features/';
import { Container } from '../UI';
import './CarousalSection.scss';

function CarousalSection() {
	function tabChangHandler(tab) {}

	return (
		<div className="carousal">
			<Container>
				<h3 className="carousal__title">Trending</h3>
				<CarousalTabs data={['Day', 'Week']} onTabChange={tabChangHandler} />
			</Container>
		</div>
	);
}

export default CarousalSection;
