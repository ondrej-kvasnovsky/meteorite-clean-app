// Fixture data 
if (Items.find().count() === 0) {
    var now = new Date().getTime();
    // create two users
    var tomId = Meteor.users.insert({
        profile: { name: 'Tom Coleman' }
    });
    var tom = Meteor.users.findOne(tomId);

    var itemId1 = Items.insert({
        title: 'Item title 1',
        userId: tom._id,
        author: tom.profile.name,
        created: now
    });
    var itemId1 = Items.insert({
        title: 'Item title 2',
        userId: tom._id,
        author: tom.profile.name,
        created: now
    });

}