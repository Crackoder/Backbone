$(function() {
  Backbone.emulateJSON = true;
  App.statusModel = new App.StatusModel({id: 1});
  App.statusView = new App.StatusView({ el: $("body"), model: App.statusModel });
  App.statusModel.fetch();
});