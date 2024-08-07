import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',      // MySQL sunucu adresi
  user: 'root',     // Veritabanı kullanıcı adı
  password: '',       // Veritabanı şifresi
  database: 'ne_alsan_db' // Kullanılacak veritabanı adı
});


// Bağlantıyı başlat
db.connect((err: any) => {
  if (err) {
    throw err;
  }
  console.log('MySQL veritabanına bağlandı!');
});


export default db;