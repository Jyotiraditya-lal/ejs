const db=require('../util/database')

module.exports = class Product {
  constructor(title, imageUrl, description, price,id) {
    this.id=id
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    console.log(this)
   return db.execute('INSERT INTO products(title, price, description,imageUrl) VALUES (?,?,?,?)',
   [this.title,this.price,this.description,this.imageUrl])
  }

  static fetchAll(cb) {
    return db.execute('SELECT * FROM products')
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id= ?', [id])
  }

  static Delete(id) {
   return db.execute('DELETE FROM products WHERE products.id = ?',[id])
  }
};
