// Simulacion para la tabla de fincas 
let fincas = [
    { id: 1, nombre: "Finca A", ubicacion: "XYZ", tamano: 800, parcelas: 3 },
    { id: 2, nombre: "Finca B", ubicacion: "ABC", tamano: 700, parcelas: 2 },
    { id: 3, nombre: "Finca C", ubicacion: "AXY", tamano: 1200, parcelas: 4 },
    { id: 4, nombre: "Finca D", ubicacion: "BXZ", tamano: 600, parcelas: 1 },
    { id: 5, nombre: "Finca E", ubicacion: "SDX", tamano: 1000, parcelas: 3 },
    { id: 6, nombre: "Finca F", ubicacion: "AZY", tamano: 900, parcelas: 2 },
    { id: 7, nombre: "Finca G", ubicacion: "YZA", tamano: 400, parcelas: 1 }
  ];
  
  class Finca {
    static async getAll() {
      return fincas;
    }
  
    static async create(finca) {
      const newFinca = { id: fincas.length + 1, ...finca };
      fincas.push(newFinca);
      return newFinca;
    }
  
    static async update(id, finca) {
      const index = fincas.findIndex(f => f.id === id);
      if (index !== -1) {
        fincas[index] = { ...fincas[index], ...finca };
        return fincas[index];
      }
      return null;
    }
  
    static async delete(id) {
      const index = fincas.findIndex(f => f.id === id);
      if (index !== -1) {
        const deletedFinca = fincas[index];
        fincas.splice(index, 1);
        return deletedFinca;
      }
      return null;
    }
  }
  
  module.exports = Finca;


  /* Modelo real para conectarse a la DB
const db = require('../config/database');

class Finca {
  static async getAll() {
    const result = await db.query('SELECT * FROM fincas');
    return result.rows;
  }

  // Implementar métodos para crear, actualizar y eliminar fincas
}

module.exports = Finca;*/