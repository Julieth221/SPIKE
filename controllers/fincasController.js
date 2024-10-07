const Finca = require('../models/fincaModel');

exports.getAllFincas = async (req, res) => {
  try {
    const fincas = await Finca.getAll();
    res.json(fincas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createFinca = async (req, res) => {
  // Implementar lógica para crear una finca
};

exports.updateFinca = async (req, res) => {
  // Implementar lógica para actualizar una finca
};

exports.deleteFinca = async (req, res) => {
  // Implementar lógica para eliminar una finca
};