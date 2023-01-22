import React from "react";

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <nav>
            {filters.map((item) => {
                return (
                    <ul
                        className={item === selected ? "active" : ""}
                        key={item}
                        onClick={() => onSelectFilter(item)}
                    >
                        {item}
                    </ul>
                );
            })}
        </nav>
    );
}

export default Toolbar;
