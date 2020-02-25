import items from "../pages/items";
import { observable, computed } from "mobx";

export default class ItemStore {
  @observable searchTerm = "";
  @computed
  get filteredItems() {
    let filtered = items.filter(item => {
      return (
        item.title.toLowerCase().includes(this.searchTerm) ||
        item.description.toLowerCase().includes(this.searchTerm)
      );
    });

    return filtered;
  }
}
