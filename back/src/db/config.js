const mysql      = require('mysql');
// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다.
const connection = mysql.createConnection({
    host     : '',
    port     : '',
    user     : '',
    password : '',
    database : ''
});

connection.connect();

connection.query('SELECT * FROM REST_API_01', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results);
});

connection.end();