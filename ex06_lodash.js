const _ = require("lodash")

const alunos = [
    {
        nome: "Gabriel",
        nota: 7
    },
    {
        nome: "Maria",
        nota: 9.5
    },
    {
        nome: "Lucas",
        nota: 5
    }
]

const media = _.sumBy(alunos, "nota") / alunos.length
console.log(media)