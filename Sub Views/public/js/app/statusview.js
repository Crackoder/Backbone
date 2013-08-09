App.StatusView = Backbone.View.extend({
  
  template: _.template(
    "<h1><%= status.text %></h1> \
    <div id='comments'> \
    </div>"),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({
      status: this.model.get('status'),
    });
    this.$el.html(html);
    this.commentsView = new App.CommentsView({ model:this.model.get('status').comments, el:$("#comments") });
    this.commentsView.render();
  }
});