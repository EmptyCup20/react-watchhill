var article = require('../../mongo/model/article');

let query = article.find();
query.skip(13);
query.exec((err,docs) => {
  for(let doc of docs) {
      doc.remove();
  }
  console.log('Init article model db data successed!');
});







