import { CarousalTabs } from '../Features/';
import { Container } from '../UI';
import './CarousalSection.scss';

function CarousalSection({ title, tabData, setEndPoint }) {
	function tabChangHandler(tab) {
		setEndPoint(tab === 'Day' ? 'day' : 'week');
	}

	return (
		<div className="carousal">
			<Container>
				<h3 className="carousal__title">{title}</h3>
				<CarousalTabs data={tabData} onTabChange={tabChangHandler} />
			</Container>
		</div>
	);
}

export default CarousalSection;
