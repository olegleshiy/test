import React, { useState, useContext } from 'react';

const PieChartContext = React.createContext();

export const usePieChart = () => {
    return useContext(PieChartContext);
}

export const PieChartProvider = ({ children })  => {
    const [fruit, setFruit] = useState({
        "Classical music": 10,
        "Alternative rock": 14,
        "Pop": 2,
        "Jazz": 12,
        "Apple": 22
    });

    const [colors, setColors] = useState(["#fde23e", "#f16e23", "#57d9ff", "#937e88", "#ff0000"]);

    return (
        <PieChartContext.Provider value={{
            fruit,
            colors,
        }}>
            { children }
        </PieChartContext.Provider>
    )
}
