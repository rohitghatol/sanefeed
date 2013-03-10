define(['underscore', 'hbs!./profile'], function(_, profileTemplate) {

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
        facebook:'View FaceBook Details',
        google:'View Google Details',
        linkedin:'View LinkedIn Details',
        twitter:'View Twitter Details'
      };
      this.html(profileTemplate(data));
    }



  }
});