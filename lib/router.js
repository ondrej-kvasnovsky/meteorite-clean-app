Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});
Router.map(function () {
    this.route('welcome', {path: '/'});
    this.route('itemsList', {
        path: '/items',
        waitOn: function () {
            return Meteor.subscribe('items');
        },
        data: function () {
            return Items.find();
        }
    });
});
