class TicTacToe {
    constructor() {
        this._currentPlayer = "x";
        this._winner = null;
        this._counter = 0;
        this._matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
        ]

    }

    getCurrentPlayerSymbol() {
        return this._currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if ( this._matrix[rowIndex][columnIndex] === null){
            this._matrix[rowIndex][columnIndex] = this._currentPlayer;
            this._counter++;
            this._currentPlayer = (this._currentPlayer == "x") ? "o" : "x";
        } else return;

        if(this._counter >= 5){
            let resultArray = [];
            resultArray[0] =  this._matrix[0][0] + this._matrix[0][1] + this._matrix[0][2];
            resultArray[1] =  this._matrix[1][0] + this._matrix[1][1] + this._matrix[1][2];
            resultArray[2] =  this._matrix[2][0] + this._matrix[2][1] + this._matrix[2][2];
            resultArray[3] =  this._matrix[0][0] + this._matrix[1][0] + this._matrix[2][0];
            resultArray[4] =  this._matrix[0][1] + this._matrix[1][1] + this._matrix[2][1];
            resultArray[5] =  this._matrix[0][2] + this._matrix[1][2] + this._matrix[2][2];
            resultArray[6] =  this._matrix[0][0] + this._matrix[1][1] + this._matrix[2][2];
            resultArray[7] =  this._matrix[0][2] + this._matrix[1][1] + this._matrix[2][0];  
            
            for (let i = 0; i < resultArray.length; i++){
                if( resultArray[i] === "xxx" || resultArray[i] === "ooo"){
                    this._winner = (resultArray[i] === "xxx") ? "x" : "o";
                    break;                   
                } 
            } 
        }

    }

    isFinished() {       
        return this.getWinner() !== null || this.isDraw() === true;
    }

    getWinner() {
        return this._winner;
    }

    noMoreTurns() {       
        return this._counter === 9;
    }

    isDraw() {       
        return this.noMoreTurns() === true && this.getWinner() === null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this._matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
