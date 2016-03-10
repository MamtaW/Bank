Items = new Mongo.Collection('itemList');
if (Meteor.isClient) {
 Template.itemList.helpers({
    'items': function(){
        return Items.find();
    }
  });

  Template.addItem.events({
  'submit form': function(e, b){
    var newItem = {
      Acc_Name: $('#accno').val(),
      Bank_Name: $('#bankname').val(),
      Branch: $('#branch').val(),
      Hol_Name1: $('#Name1').val(),
      Hol_Name2: $('#Name2').val(),
      
    };

    Items.insert(newItem);
 
    $('#addItemForm').find('input:text').val('');
    $('#itemStore').focus();
    return false;
  }
});

Template.item.events({
  'click .deleteItem': function(){
    Items.remove(this._id);
  }
});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
