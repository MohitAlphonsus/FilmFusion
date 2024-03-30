import { CarousalTabs } from '../Features/';
import { Container } from '../UI';
import './CarousalSection.scss';

function CarousalSection({ title, tabData, onTabChange }) {
	return (
		<div className="carousal-section">
			<Container>
				<h3 className="carousal-section__title">{title}</h3>
				<CarousalTabs data={tabData} onTabChange={onTabChange} />
			</Container>
		</div>
	);
}

export default CarousalSection;
