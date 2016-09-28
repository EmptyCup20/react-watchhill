import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import statusMsg from '../../mongo/statusMsg';


//文件上传
export function uploaderImg(req, res, next) {
    var form = formidable.IncomingForm(),
        imgUrl;
    form.encoding = 'utf-8';
    //文件后缀名
    form.keepExtensions = true;
    //多文件上传
    // form.multiples = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        //临时目录
        var fileName = files.imgUrl ? files.imgUrl.name : files.articleFile.name;
        var filePath = files.imgUrl ? files.imgUrl.path : files.articleFile.path;
        imgUrl = path.resolve('public/images', req.session.loginUser.author, 'article', fields.articleId, fileName);
        //读取文件
        fs.writeFile(imgUrl, fs.readFileSync(filePath), (err) => {
            if (err) {
                res.send(err);
                return;
            }
            statusMsg.successMsg.data = {
                    imgUrl: imgUrl
                }
                //返回成功信息
            res.send(statusMsg.successMsg);
        });
    });
};

//上传头像与二维码
export function userImg(req, res, next) {
    var form = formidable.IncomingForm(),
        imgUrl;

    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.log(err);
            res.send(err);
            return;
        }
        imgUrl = path.resolve('public/images', req.session.loginUser.author, 'userInfo', files.imgUrl.name);
        fs.writeFile(imgUrl, fs.readFileSync(files.imgUrl.path), (err) => {
            if (err) {
                res.send(err);
                return;
            }
            statusMsg.successMsg.data = {
                imgUrl: imgUrl
            };
            //返回成功信息
            res.send(statusMsg.successMsg);
        });
    });
}
