import { Boxes } from "./boxes";

Meteor.methods({
  addBox({ color, x, y, z }) {
    return Boxes.insert({ color, x, y, z });
  },
  removeBox({ _id }) {
    return Boxes.remove({ _id });
  }
});