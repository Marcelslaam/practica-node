const tarea = require('./tarea');

class Tareas {
    _listado = {
        'abc': 123
    };

    constructor(){
        this._listado = {};
    }
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    };
}

module.exports = Tareas;
