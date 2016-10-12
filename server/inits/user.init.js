var user = require('../../mongo/model/user');

let query = user.find();
query.skip(6);
query.exec((err,docs) => {
    for(let doc of docs) {
        doc.remove();
    }
    console.log('Init user model db data successed!');
});







