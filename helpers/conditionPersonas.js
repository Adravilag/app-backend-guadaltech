const compareSalario = (salario) => {

    return salario === 13000 ||
        salario === 15000 ||
        salario === 18000 ||
        salario === 20000 ||
        salario === 22000 ||
        salario === 23000 ||
        salario === 25000;
}

const compareHorario = (horario) => {
    return horario === 'Jornada completa' ||
        horario === 'Tiempo parcial 1' ||
        horario === 'Tiempo parcial 2';
}

const comparePuesto = (puesto) => {
    return puesto === 'Administrativ@' ||
        puesto === 'Diseñador/a' ||
        puesto === 'Desarrollador/a' ||
        puesto === 'Front-End Developer' ||
        puesto === 'Back-End Developer' ||
        puesto === 'Full-Stack Developer'
};

module.exports = { compareSalario, compareHorario, comparePuesto };