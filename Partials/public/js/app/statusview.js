App.StatusView = Backbone.View.extend({
  
  template: _.template(
    "<h1><%= status.text %></h1> \
    <ul class='status'> \
      <% $.each(status.comments, function(i, comment) { %> \
        <%= commentTemplate({text: comment}) %> \
      <% }); %> \
    </ul>"),

  commentTemplate: _.template(
    "<li><%= text %></li>"
  ),

  initialize: function(){
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {

    var html = this.template({
      status: this.model.get('status'),
      commentTemplate: this.commentTemplate
    });

    this.$el.html(html);
  }
});