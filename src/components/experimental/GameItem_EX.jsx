import windowsIcon from "../../assets/images/icon_windows.svg"
import BrowserIcon from "../../assets/images/icon_browser.svg"
import GenericLink from "../buttons/GenericLink.jsx";
import style from "../experimental/GameItem_EX.module.scss";
import FilterTag from "../FilterTag";

const GameItem_EX = (props) => {
    const description = props.description ? (<p>{props.description}</p>) : "";

    return (
        <section className={style.gameCard}>
            <img src={props.img} alt={props.title} />
            <article className={style.gameCardContent}>
                <h3>{props.title}</h3>
                {description}
                <GenericLink onClick={() => {
                    window.scroll(0, 0);
                }} to={`/game/${props.id}`} className={style.buttonReadMore}>READ MORE</GenericLink>
                <div className={style.bottomLine}></div>
            </article>
            <article className={style.filterTagContent}>
                <FilterTag img={props.platform === "Web Browser" ? BrowserIcon : windowsIcon} />
                <FilterTag text={props.genre} />
            </article>
        </section>
    );
}

export default GameItem_EX;