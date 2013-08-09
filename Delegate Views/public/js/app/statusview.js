App.StatusView = Backbone.View.extend({
  
  template: _.template(
    "<h1><%= status.text %></h1>"),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({
      status: this.model.get('status'),
    });
    this.$el.html(html);
    this.commentsView = new App.CommentsView({ model:this.model.get('status').comments, el:this.$el });
    this.commentsView.printComments();
  }
});