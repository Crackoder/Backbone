App.CommentsView = Backbone.View.extend({
  
  template: _.template(
    "<ul> \
      <% $.each(comments, function(i, comment) { %> \
        <li><%= comment %></li> \
      <% }); %> \
    </ul>"),

  printComments: function() {
    var html = this.template({
      comments: this.model,
    });

    this.$el.append(html);
  }
});