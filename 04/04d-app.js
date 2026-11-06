
import framework from './04d-framework.js';
import {writeFile, readFile, unlink, rmdir} from "node:fs";

const app = framework();
const port = 3000;

app.get('sum', function (request, response) {
    let items = request.url.split("/");

    response.writeHead(200);
    response.write((Number(items[2]) + Number(items[3])).toString());
    response.end();
});

app.get('readfile', function (request, response) {
    let file = request.url.split("/");

    readFile(file[2], function(errr, data) {

        if (errr) {
            console.log("err", errr);

            response.writeHead(500);
            response.write("read file fail");
            response.end();

            return;
        }

        console.log("readfile successfully");

        response.writeHead(200);
        response.write(data);
        response.end();
    });
});

app.get('creatfile', function (request, response) {
    let file = request.url.split("/");

    writeFile(file[2], file[3], function(errr) {

        if (errr) {
            console.log("err", errr);

            response.writeHead(500);
            response.write("created file fail");
            response.end();

            return;
        }

        console.log("created file successfully");

        response.writeHead(200);
        response.write("created file successfully");
        response.end();
    });
});

app.get('unlink', function (request, response) {
    let file = request.url.split("/");

    unlink(file[2], function(errr) {

        if (errr) {
            console.log("err", errr);

            response.writeHead(500);
            response.write("delete file fail");
            response.end();

            return;
        }

        response.writeHead(200);
        response.write("delete file successfully");
        response.end();
    });
});

app.get('delete', function (request, response) {
    let file = request.url.split("/");

    rmdir(file[2], function(errr) {

        if (errr) {
            console.log("err", errr);

            response.writeHead(500);
            response.write("delete directory fail");
            response.end();

            return;
        }

        response.writeHead(200);
        response.write("delete successfully");
        response.end();
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
