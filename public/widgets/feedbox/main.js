define(['underscore', 'hbs!./feedbox'], function(_, feedboxTemplate) {

  return {
    
    type: 'Backbone',

    events: {
      'click .editorlink a':  function(e) {
        alert('edit');
      }
    },


    initialize: function() {
      this.render();
    },

    render: function() {
      var data = {
        name:'John Smith',
        facebook:'<a href="#">View FaceBook Details</a> ',
        google:'<a href="#">View Google Details</a> ',
        linkedin:'<a href="#">View LinkedIn Details</a> ',
        twitter:'<a href="#">View Twitter Details</a> '
      };
      this.html(feedboxTemplate(data));
    }



  }
});