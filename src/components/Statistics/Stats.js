import css from './stats.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

export const Statisctics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>Upload stats</h2>}
            <ul className={css.statList}>
                {stats.map((stat) => (
                    <li
                        key={stat.id}
                        className={css.item}
                        style={{ backgroundColor: getRandomHexColor() }}
                    >
                        <span className={css.label}>{stat.label}</span>
                        <span className={css.percentage}>
                            {stat.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statisctics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};
