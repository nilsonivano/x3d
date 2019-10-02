import './x3d.html';

const Boxes = new Mongo.Collection(null);

Template.x3d.helpers({
  boxes() {
    return Boxes.find()
  },
});

Template.x3d.events({
  'mouseup shape'(event, templateInstance) {
    console.log(event);
    if (event.button === 1) {
      const colors = ["#EDFFEC", "#61E786", "#5A5766", "#48435C", "#9792E3"];
      const boxesLength = Boxes.find().count();
      const colorIndex = boxesLength % colors.length;
      console.log(colorIndex);
      Boxes.insert({
        color: colors[colorIndex],
        x: Math.floor(event.worldX + event.normalX / 2) + 0.5,
        y: Math.floor(event.worldY + event.normalY / 2) + 0.5,
        z: Math.floor(event.worldZ + event.normalZ / 2) + 0.5,
      });
    } else if (event.button === 2) {
      Boxes.remove({ _id: event.currentTarget.id });
    }
  },
});
