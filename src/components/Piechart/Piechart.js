import React, { useEffect, useState, useRef } from 'react';
import { usePieChart } from './PiechartContext';

//import styles from './Piechart.module.css';

export const Piechart = props => {
    const [list, setList] = useState([]);
    const [listInfo, setListInfo] = useState([]);

    const circleRef = useRef();

    const { fruit, forms } = usePieChart();

    const handleHover = (e) => {
        // const cont = circleRef.current = e.target;
        // cont.classList.add('active');
        // console.log(cont.dataset.name);
    };
    const handleHoverLeave = (e) => {
        // const cont = circleRef.current = e.target;
        // cont.classList.remove('active');
        // console.log(cont.dataset.name);
    };

    useEffect(() => {
        let radius = 75;
        let circleLength = Math.PI * (radius * 2);
        let spaceLeft = circleLength;
        let totalCount = 0;

        totalCount = fruit.reduce((acc, curr, idx) => acc + curr.count, 0);

        const listCircle = fruit.map((el, idx) => {
            let circle = (
                <circle
                    ref={ circleRef }
                    onMouseOver={ handleHover }
                    onMouseLeave={ handleHoverLeave }
                    className="pie-chart-value"
                    data-name={ el.name }
                    key={ idx }
                    r={ radius }
                    cx="200"
                    cy="200"
                    strokeDasharray={ (spaceLeft).toFixed(3) + ' ' + circleLength.toFixed(3) } stroke={ el.color }
                />);
            spaceLeft -= (el.count / totalCount) * circleLength;
            return circle;
        });

        setList(listCircle);

        const listInfoCircle = fruit.map((el, idx) => {
            const percentage = ` (${ parseFloat((el.count /
                totalCount * 100).toFixed(1)) }%)`;
            return (
                <li
                    style={ { color: `${ el.color }` } }
                    key={ idx }
                    data-color={ el.color }>
                    { el.name + percentage }
                </li>
            );
        });
        setListInfo(listInfoCircle);

    }, [forms]);


    return (
        <div className={ 'wrapper' }>
            <svg id="pie-chart" width="400" height="400">
                { list }
            </svg>
            <ul className="pie-values">
                { listInfo }
            </ul>
        </div>
    );
};
