
    // Función para calcular años y meses entre dos fechas (formato: "Mes Año")
    function calcularDuracion(fechaInicio, fechaFin) {
        const meses = [
            "enero", "febrero", "marzo", "abril", "mayo", "junio",
            "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
        ];

        function parseFecha(fecha) {
            if (fecha.toLowerCase().includes("actualmente") || fecha.toLowerCase().includes("actual")) {
                return new Date();
            }
            const [mes, año] = fecha.split(" ");
            return new Date(parseInt(año), meses.indexOf(mes.toLowerCase()));
        }

        const inicio = parseFecha(fechaInicio);
        const fin = parseFecha(fechaFin);

        let años = fin.getFullYear() - inicio.getFullYear();
        let mesesDif = fin.getMonth() - inicio.getMonth();

        if (mesesDif < 0) {
            años--;
            mesesDif += 12;
        }

        let resultado = "";
        if (años > 0) resultado += años + (años === 1 ? " año" : " años");
        if (mesesDif > 0) {
            if (resultado) resultado += " y ";
            resultado += mesesDif + (mesesDif === 1 ? " mes" : " meses");
        }
        return resultado || "menos de un mes";
    }

    // Busca todos los elementos con la clase 'duracion-laboral' y calcula la duración
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('[data-inicio][data-fin]').forEach(function(el) {
            const inicio = el.getAttribute('data-inicio');
            const fin = el.getAttribute('data-fin');
            el.textContent = calcularDuracion(inicio, fin);
        });
    });
