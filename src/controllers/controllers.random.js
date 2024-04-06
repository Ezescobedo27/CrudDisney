// * LLAMAMOS AL MODELO PARA PODER EDITARLO
import personajesDisney from "../models/models.random.js";

// * OBTENEMOS TODOS LOS PERSONAJES
export async function getCharacters(req, res) {
  try {
    const verTodos = await personajesDisney.findAll();
    res.send(verTodos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function getCharacter(req, res) {
  const { id } = req.params;
  try {
    const buscarPersonaje = await personajesDisney.findByPk(id);
    res.send(buscarPersonaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function createCharacter(req, res) {
  const { name, age, description } = req.body;
  try {
    const nuevoPersonaje = await personajesDisney.create({
      name,
      age,
      description,
    });
    res.send(nuevoPersonaje);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export async function updateCharacter(req, res) {
  const { id } = req.params;
  const { name, age, description } = req.body;
  try {
    const actualizarPersonaje = await personajesDisney.findByPk(id);
    actualizarPersonaje.name = name;
    actualizarPersonaje.age = age;
    actualizarPersonaje.description = description;
    await actualizarPersonaje.save();
    res.send(actualizarPersonaje);
  } catch (error) {}
}

// * DESTRUIMOS EL PERSONAJE DE LA TABLA
export async function deleteCharacter(req, res) {
  const { id } = req.params;
  try {
    await personajesDisney.destroy({
      where: {
        id,
      },
    });
    res.send("Personaje eliminado de manera exitosa");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
