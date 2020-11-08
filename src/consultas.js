//Quiero buscar los productos que cumplan que hay el mismo número en existencia en la tienda y para ello uso $eq, que significa igual.
db.productos.find( { qty: { $eq: 10 } } )
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
{ "_id" : 9, "item" : "crema de calabaza", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "D" }
//Quiero buscar los productos que cumplan que haya mas de 20 en la tienda para reponer los que no resulten y para ello uso $gt,que significa mayor.
db.productos.find( { qty: { $gt: 20 } } )
{ "_id" : 5, "item" : "papel", "qty" : 30, "tamaño" : { "h" : 15, "w" : 2 }, "tipo" : "C" }
{ "_id" : 8, "item" : "cinta adhesiva", "qty" : 25, "tamaño" : { "h" : 8, "w" : 10 }, "tipo" : "C" }
{ "_id" : 10, "item" : "tomate", "qty" : 25, "tamaño" : { "h" : 10, "w" : 10 }, "tipo" : "D" }
{ "_id" : 11, "item" : "chicle", "qty" : 50, "tamaño" : { "h" : 2, "w" : 2 }, "tipo" : "D" }
//Quiero buscar los productos que hayan 15 unidades o más y para eso usaré $gte, que significa mayor o igual.
db.productos.find( { qty: { $gte: 15 } } )
{ "_id" : 5, "item" : "papel", "qty" : 30, "tamaño" : { "h" : 15, "w" : 2 }, "tipo" : "C" }
{ "_id" : 6, "item" : "aloe vera", "qty" : 15, "tamaño" : { "h" : 12, "w" : 15 }, "tipo" : "B" }
{ "_id" : 7, "item" : "cartulina", "qty" : 20, "tamaño" : { "h" : 25, "w" : 20 }, "tipo" : "C" }
{ "_id" : 8, "item" : "cinta adhesiva", "qty" : 25, "tamaño" : { "h" : 8, "w" : 10 }, "tipo" : "C" }
{ "_id" : 10, "item" : "tomate", "qty" : 25, "tamaño" : { "h" : 10, "w" : 10 }, "tipo" : "D" }
{ "_id" : 11, "item" : "chicle", "qty" : 50, "tamaño" : { "h" : 2, "w" : 2 }, "tipo" : "D" }
//Quiero saber cuántos tipos de productos del tipo comida (D) hay en la tienda. Para ello usaremos $in, ya que selecciona los documentos que tienen el mismo valor que otro valor del lugar especificado.
db.productos.find( { tipo: { $in: ["D"] } } )
{ "_id" : 9, "item" : "crema de calabaza", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "D" }
{ "_id" : 10, "item" : "tomate", "qty" : 25, "tamaño" : { "h" : 10, "w" : 10 }, "tipo" : "D" }
{ "_id" : 11, "item" : "chicle", "qty" : 50, "tamaño" : { "h" : 2, "w" : 2 }, "tipo" : "D" }
//Quiero saber qué productos hay que reponer y esto lo encuentro buscando que la cantidad de los productos sea menos que 10. Para ello utilizo $lt, que significa menor.
db.productos.find( { qty: { $lt: 10 } } )
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
{ "_id" : 4, "item" : "mascarilla", "qty" : 5, "tamaño" : { "h" : 5, "w" : 5 }, "tipo" : "A" }
{ "_id" : 12, "item" : "colorete", "qty" : 5, "tamaño" : { "h" : 2, "w" : 8 }, "tipo" : "A" }
//Quiero saber qué cantidad de productos es igual o menos a 10 y para ello usaré $lte, que significa menor o igual.
db.productos.find( { qty: { $lte: 10 } } )
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
{ "_id" : 4, "item" : "mascarilla", "qty" : 5, "tamaño" : { "h" : 5, "w" : 5 }, "tipo" : "A" }
{ "_id" : 9, "item" : "crema de calabaza", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "D" }
{ "_id" : 12, "item" : "colorete", "qty" : 5, "tamaño" : { "h" : 2, "w" : 8 }, "tipo" : "A" }
//Quiero saber qué productos no pertenecen al tipo comida (D) y para ello uso $ne, que significa que no es igual.
db.productos.find( { tipo: { $ne: [ "D" ] } } )
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
{ "_id" : 4, "item" : "mascarilla", "qty" : 5, "tamaño" : { "h" : 5, "w" : 5 }, "tipo" : "A" }
{ "_id" : 5, "item" : "papel", "qty" : 30, "tamaño" : { "h" : 15, "w" : 2 }, "tipo" : "C" }
{ "_id" : 6, "item" : "aloe vera", "qty" : 15, "tamaño" : { "h" : 12, "w" : 15 }, "tipo" : "B" }
{ "_id" : 7, "item" : "cartulina", "qty" : 20, "tamaño" : { "h" : 25, "w" : 20 }, "tipo" : "C" }
{ "_id" : 8, "item" : "cinta adhesiva", "qty" : 25, "tamaño" : { "h" : 8, "w" : 10 }, "tipo" : "C" }
{ "_id" : 12, "item" : "colorete", "qty" : 5, "tamaño" : { "h" : 2, "w" : 8 }, "tipo" : "A" }
//Para hallar los productos que no pertenecen al tipo D voy a utilizar $nin, que no selecciona los documentos que tienen el mismo valor que otro valor del lugar especificado.
db.productos.find( { tipo: { $nin: [ "D" ] } } )
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
{ "_id" : 4, "item" : "mascarilla", "qty" : 5, "tamaño" : { "h" : 5, "w" : 5 }, "tipo" : "A" }
{ "_id" : 5, "item" : "papel", "qty" : 30, "tamaño" : { "h" : 15, "w" : 2 }, "tipo" : "C" }
{ "_id" : 6, "item" : "aloe vera", "qty" : 15, "tamaño" : { "h" : 12, "w" : 15 }, "tipo" : "B" }
{ "_id" : 7, "item" : "cartulina", "qty" : 20, "tamaño" : { "h" : 25, "w" : 20 }, "tipo" : "C" }
{ "_id" : 8, "item" : "cinta adhesiva", "qty" : 25, "tamaño" : { "h" : 8, "w" : 10 }, "tipo" : "C" }
{ "_id" : 12, "item" : "colorete", "qty" : 5, "tamaño" : { "h" : 2, "w" : 8 }, "tipo" : "A" }
//Quiero saber qué productos son de tipo B y hay 10 unidades en existencia, para ello uso $and, que selecciona los documentos que cumplen todos los valores demandados.
db.productos.find( { $and: [ { qty: 10}, { tipo: "B" } ] } )
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
//Quiero hallar todos los productos que no sean más grandes que h:20 y w:15, para ello uso $not,  que no selecciona los documentos que cumplen los valores demandados.
db.productos.find( { "tamaño.h": { $not: { $gte: 20 } },  "tamaño.w": { $not: { $gte:15 } } } )
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
{ "_id" : 4, "item" : "mascarilla", "qty" : 5, "tamaño" : { "h" : 5, "w" : 5 }, "tipo" : "A" }
{ "_id" : 5, "item" : "papel", "qty" : 30, "tamaño" : { "h" : 15, "w" : 2 }, "tipo" : "C" }
{ "_id" : 8, "item" : "cinta adhesiva", "qty" : 25, "tamaño" : { "h" : 8, "w" : 10 }, "tipo" : "C" }
{ "_id" : 10, "item" : "tomate", "qty" : 25, "tamaño" : { "h" : 10, "w" : 10 }, "tipo" : "D" }
{ "_id" : 11, "item" : "chicle", "qty" : 50, "tamaño" : { "h" : 2, "w" : 2 }, "tipo" : "D" }
{ "_id" : 12, "item" : "colorete", "qty" : 5, "tamaño" : { "h" : 2, "w" : 8 }, "tipo" : "A" }
//Quiero encontrar los productos que no cumplan que saen del tipo A, B o C para obtener los del tipo D. Para ello usaré $nor, que no selecciona ningún documento que cumpla algún valor de los demandados en la consulta.
db.productos.find( { $nor: [ { tipo: "A" }, { tipo: "B" }, { tipo: "C" } ] } )
{ "_id" : 9, "item" : "crema de calabaza", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "D" }
{ "_id" : 10, "item" : "tomate", "qty" : 25, "tamaño" : { "h" : 10, "w" : 10 }, "tipo" : "D" }
{ "_id" : 11, "item" : "chicle", "qty" : 50, "tamaño" : { "h" : 2, "w" : 2 }, "tipo" : "D" }
//Quiero crear una sección con los productos de tipo maquillaje (A) o los productos de tipo protección de la piel (B). Para ello uso $or, que selecciona los documento que cumplan algun valor de los demandados en la consulta.
db.productos.find( { $or: [ { tipo: "A" }, { tipo: "B" } ] } )  
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
{ "_id" : 4, "item" : "mascarilla", "qty" : 5, "tamaño" : { "h" : 5, "w" : 5 }, "tipo" : "A" }
{ "_id" : 6, "item" : "aloe vera", "qty" : 15, "tamaño" : { "h" : 12, "w" : 15 }, "tipo" : "B" }
{ "_id" : 12, "item" : "colorete", "qty" : 5, "tamaño" : { "h" : 2, "w" : 8 }, "tipo" : "A" }
//Quiero saber qué tipos de cremas existen en la tienda. Para ello uso $regex, que proporciona posibles cadenas de coincidencias de patrones en consultas.
db.productos.find( { item: { $regex: /^crema/} } )
{ "_id" : 2, "item" : "crema solar", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "B" }
{ "_id" : 3, "item" : "crema hidratante", "qty" : 10, "tamaño" : { "h" : 10, "w" : 17 }, "tipo" : "B" }
{ "_id" : 9, "item" : "crema de calabaza", "qty" : 10, "tamaño" : { "h" : 10, "w" : 15 }, "tipo" : "D" }
//Quiero saber qué productos acaban por la letra s.
db.productos.find( { item: { $regex: /s$/} } )
{ "_id" : 1, "item" : "pintalabios", "qty" : 5, "tamaño" : { "h" : 5, "w" : 7 }, "tipo" : "A" }
//Quiero saber qué tipo de cinta hay en la tienda.
db.productos.find( { item: { $regex: /cinta*/} } )
{ "_id" : 8, "item" : "cinta adhesiva", "qty" : 25, "tamaño" : { "h" : 8, "w" : 10 }, "tipo" : "C" }
//Quiero saber si aloe vera se escribe con v o con b.
db.productos.find( { item: { $regex: /aloe .era/} } )
{ "_id" : 6, "item" : "aloe vera", "qty" : 15, "tamaño" : { "h" : 12, "w" : 15 }, "tipo" : "B" }