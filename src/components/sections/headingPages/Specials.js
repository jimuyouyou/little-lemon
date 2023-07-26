import Carousel from './SpecialsCarousel';
import GreekSalad from '../../../assets/food/greek-salad.webp';
import Bruschetta from '../../../assets/food/bruschetta.jpeg';
import LemonDessert from '../../../assets/food/lemon-dessert.webp';
import SpecialCard from './CardInfo/SpecialCard';

export default function Specials() {
    return (
        <section className="specials">
            <article className="specials-topbar">
                <h1>Trends in This Month</h1>
                <a className="action-button" href={require('../../../assets/menu.jpg')} target="_blank" rel="noreferrer">Your Menu</a>
            </article>

            <section className="specials-cards">
                <SpecialCard image={LemonDessert} name="Dessert" price="$9.49" description="The course consists of sweet foods, such as candy, and possibly a beverage such as dessert wine and liqueur."/>
                <SpecialCard image={Bruschetta}name="Classic Bruschetta" price="$14.77" description="Toasted bread, topped with tomato, prosciutto, and cheese. Seasoned with
                 salt and olive oilBruschetta is a classic Italian appetizer that features grilled bread topped with fresh ingredients."/>
                <SpecialCard image={GreekSalad} name="Refreshing Salad" price="$11.88" description="Refreshing Salad is a dish that consists of raw or cooked vegetables, fruits, grains, nuts, cheese, meat, or other ingredients, usually tossed with a dressing."/>
            </section>

            <section className="specials-carousel">
                <Carousel showThumbs={false} />
            </section>
        </section>
    );
}