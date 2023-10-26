//Edge List (implematarea pe Margini)
const graph = [[0, 2], [2, 3], [2, 1], [1, 3]]

//Adjacent List (impementarea Adicaneta)

const graphAdj2 = [[2], [2, 3], [0, 1, 3], [2, 1]]
const graphAdj21 = { 0: [2], 1: [2, 3], 2: [0, 1, 3], 3: [2, 1] }

//Adjacent Matrix (implemtarea matricei adiacente)

const graphMatrix = [
    [0, 0, 1, 0],
    [0, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 0],
]

const graphMatrixObj = {
    0: [0, 0, 1, 0],
    1: [0, 0, 1, 1],
    2: [1, 1, 0, 1],
    3: [0, 1, 1, 0]
}