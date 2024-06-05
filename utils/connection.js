const mysql = require('mysql')

    const conn = {
        host: '127.0.0.1',
        port: 3306,
        user: 'm1',
        password: 'qwer1234',
        database: 'hansei'
    };

    const db = mysql.createConnection(conn);
    
    db.connect((err) => {
        if (err) {
            console.error('Database connection failed:', err);
            return; // 연결 실패 시 함수 종료
        }
        console.log('Database connection successful');
    });

module.exports = db;
