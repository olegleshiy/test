import React, { useRef, useEffect } from 'react';
import { drawPieSlice, getRandomColor } from '../../utils';
import { usePieChart } from './PiechartContext';

import styles from './Piechart.module.css';

export const Piechart = props => {

    const { fruit, colors } = usePieChart();
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 400;
        canvas.height = 400;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        //let color = getRandomColor();

        const draw = () => {

            let totalValue = 0;
            let colorIndex = 0;

            for (let category in fruit){
                const val = fruit[category];
                totalValue += val;
            }
            let startAngle = 0;

            for (let category in fruit){
                const val = fruit[category];

                const sliceAngle = 2 * Math.PI * val / totalValue;

                drawPieSlice(
                    ctx,
                    canvas.width / 2,
                    canvas.height / 2,
                    Math.min(canvas.width / 2, canvas.height / 2),
                    startAngle,
                    startAngle + sliceAngle,
                    colors[colorIndex%colors.length],
                );

                startAngle += sliceAngle;
                colorIndex++;
            }
            startAngle = 0;

            for (let category in fruit){
                const val = fruit[category];
                const sliceAngle = 2 * Math.PI * val / totalValue;
                const pieRadius = Math.min(canvas.width / 2, canvas.height / 2);
                const labelX = canvas.width / 2 + (pieRadius / 2) * Math.cos(startAngle + sliceAngle / 2);
                const labelY = canvas.height / 2 + (pieRadius / 2) * Math.sin(startAngle + sliceAngle / 2);
                const labelText = Math.round(100 * val / totalValue);

                ctx.fillStyle = "white";
                ctx.font = "bold 20px Arial";
                ctx.fillText(labelText+"%", labelX, labelY);
                startAngle += sliceAngle;
            }

            animationFrameId = window.requestAnimationFrame(draw);
        }
        draw();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        }
    }, [drawPieSlice]);

    return (
        <div className={'wrapper'}>
            <canvas ref={ canvasRef } {...props}/>
        </div>
    )
}
