import { Boxes } from "../boxes";

Meteor.publish('boxes', () => {
  return Boxes.find();
});