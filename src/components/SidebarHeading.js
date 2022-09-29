import React from "react";

export default class SidebarHeading extends React.Component {
    handleClick = (event) => {
        const { createNewListCallback} = this.props;
        createNewListCallback();
    };
    render() {
        const {currentList, listIsLoaded, isModalOpen} = this.props;
        let addListClass = "toolbar-button";
        if(listIsLoaded) addListClass += " disabled";
        if(currentList) addListClass += " disabled";
        if(isModalOpen) addListClass += " disabled";

        return (
            <div id="sidebar-heading">
                <input 
                    type="button" 
                    id="add-list-button" 
                    className={addListClass}
                    onClick={this.handleClick}
                    value="+" />
                Your Playlists
            </div>
        );
    }
}