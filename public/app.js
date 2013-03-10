/**
 * Created with JetBrains WebStorm.
 * User: rohit
 * Date: 3/9/13
 * Time: 7:20 PM
 * To change this template use File | Settings | File Templates.
 */

define(['components/aura/lib/aura'], function(Aura) {
    Aura()
        .use('extensions/aura-awesome-extension')
        .use('extensions/aura-backbone')
        .use('extensions/aura-localstorage')
        .use('extensions/aura-handlebars')
        .start({ widgets: 'body' }).then(function() {
            console.warn('Aura started...');
        });
});