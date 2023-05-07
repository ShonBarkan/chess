import {Square,king,Queen,Rook,Bishop,knight,Pawn} from './constructors'

export function makeAbord(){
    let board = []
    for(let i=0;i<=7;i++){
        board[i]=[]
        for(let j=0;j<=7;j++){
            let color='rgb(229, 140, 24)'
            if ((j%2==0 && i%2!=0) || (j%2!=0 && i%2==0) ){
                color='rgb(188, 173, 154)'
            }

            board[i][j]= new Square(String.fromCharCode(97+j)+(i+1),color)

        // white pieces 
            if(i==0 && j==0 || i==0 && j==7) board[i][j].SetOnMe(new Rook('white'))
            if(i==0 && j==1 || i==0 && j==6) board[i][j].SetOnMe(new knight('white'))
            if(i==0 && j==2 || i==0 && j==5) board[i][j].SetOnMe(new Bishop('white'))
            if(i==0 && j==3) board[i][j].SetOnMe(new Queen('white'))
            if(i==0 && j==4) board[i][j].SetOnMe(new king('white'))
            if(i==1) board[i][j].SetOnMe(new Pawn('white'))
        
        // black pieces 
            if(i==7 && j==0 || i==7 && j==7) board[i][j].SetOnMe(new Rook('black'))
            if(i==7 && j==1 || i==7 && j==6) board[i][j].SetOnMe(new knight('black'))
            if(i==7 && j==2 || i==7 && j==5) board[i][j].SetOnMe(new Bishop('black'))
            if(i==7 && j==3) board[i][j].SetOnMe(new Queen('black'))
            if(i==7 && j==4) board[i][j].SetOnMe(new king('black'))
            if(i==6) board[i][j].SetOnMe(new Pawn('black'))

        }
    }
    return board.reverse()
}




