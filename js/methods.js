/*
 * @Author: 180310245王吉海 
 * @Date: 2019-10-01 09:45:56 
 * @Last Modified by: 180310245王吉海
 * @Last Modified time: 2019-10-15 08:53:43
 */
// 棋盘内方块在游戏过程中的出现代码
let randomPieces = function (data, emptyGrids, isNew) {
    // let section = [2, 4]
    let len = emptyGrids.length
    let emptyLocal = Math.floor(Math.random() * len)
    let local = emptyGrids[emptyLocal]
    let row = Math.floor(local / 4)
    let col = local % 4
    let detail = 2 // section[Math.floor(Math.random() * 2)]
    data[row][col] = detail
    emptyGrids.splice(emptyLocal, 1)
    if (isNew)
        updateBoard(row, col, detail)
}

// 更新棋盘
let updateBoard = function (row, col, detail) {
    let pieceSet = document.getElementById('p' + row + col)
    pieceSet.innerHTML = detail
    pieceSet.className = 'pieces score' + detail
}