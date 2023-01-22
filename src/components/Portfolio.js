import React from "react";
import dataimagePortfolio from "../img/dataImagePortfolio";
import ProjectList from "./ProjectList";
import Toolbar from "./Toolbar";

class Portfolio extends React.Component {
    state = {
        selected: 'All'
    };

    constructor(props) {
        super(props);
        this.handlerfilter = this.handlerfilter.bind(this);
        this.filters = ["All", "Websites", "Flayers", "Business Cards"];
        this.dataImage = dataimagePortfolio;
    }

    filter(selected) {
        this.dataImage = dataimagePortfolio.filter(item => item.category === selected);
    }

    handlerfilter(selected) {
        this.setState((state) => state.selected = selected);
        if (selected !== 'All') {
            this.filter(selected);
        } else {
            this.dataImage = dataimagePortfolio;
        }

    }

    render() {
        return (
            <>
                <Toolbar
                    filters={this.filters}
                    selected={this.state.selected}
                    onSelectFilter={this.handlerfilter}
                />
                <ProjectList
                    project={this.dataImage}
                />
            </>
        );

    }


}

export default Portfolio;