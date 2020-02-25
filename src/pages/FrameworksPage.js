import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Segment, Input, Label } from "semantic-ui-react";

@inject("itemStore")
@observer
class FrameworksPage extends Component {
  handleChange = event => {
    this.props.itemStore.searchTerm = event.target.value.toLowerCase();
  };
  render() {
    let { searchTerm, filteredItems } = this.props.itemStore;
    let itemsListComponent = (
      <Segment textAlign="center">No Results Found !!!</Segment>
    );

    if (filteredItems.length > 0) {
      itemsListComponent = filteredItems.map((item, index) => {
        return (
          <Segment key={index}>
            <Label attached="top left">{item.title}</Label>
            <p>{item.description}</p>
          </Segment>
        );
      });
    }

    return (
      <div>
        <Segment textAlign="center">
          <Input
            type="text"
            placeholder="Type to filter"
            value={searchTerm}
            onChange={this.handleChange}
          />
        </Segment>
        {itemsListComponent}
      </div>
    );
  }
}

export default FrameworksPage;
