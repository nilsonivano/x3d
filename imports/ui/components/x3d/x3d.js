import './x3d.html';
import { Boxes } from "../../../api/boxes/boxes";

Template.x3d.onCreated(function () {
  this.subscribe('boxes');
});

Template.x3d.helpers({
  boxes() {
    return Boxes.find()
  },
  boxesCount() {
    return Boxes.find().count();
  }
});

Template.x3d.events({
  'mouseup shape'(event, templateInstance) {
    if (event.button === 1) {
      const colors = ["#EDFFEC", "#61E786", "#5A5766", "#48435C", "#9792E3"];
      const boxesLength = Boxes.find().count();
      const colorIndex = boxesLength % colors.length;
      const x = Math.floor(event.worldX + event.normalX / 2) + 0.5;
      const y = Math.floor(event.worldY + event.normalY / 2) + 0.5;
      const z = Math.floor(event.worldZ + event.normalZ / 2) + 0.5;
      Meteor.call('addBox', { color: colors[colorIndex], x, y, z })
    } else if (event.button === 2) {
      Meteor.call('removeBox', { _id: event.currentTarget.id });
    }
  },
});
