////// square
export class Square {
    constructor(name , color, onMe=null ) {
            this.name = name;
            this.color = color;
            this.onMe= onMe;
            this.SetOnMe = function(piece){
                this.onMe=piece
            }
    }
}

////// pieces
export class king {
    constructor(color) {
        this.pic= color=='white'?'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465791/chess/White_king_ofnxlt.png':'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465792/chess/Black_king_lagt5s.png';
        this.color = color;
        this.isFirstMove = true;
        this.name = 'king'
        this.showValidMoves = function (from, board) {
            let validMoves=[
                {i:from.i+1,j:from.j+1},
                {i:from.i+1,j:from.j},
                {i:from.i+1,j:from.j-1},
                {i:from.i,j:from.j+1},
                {i:from.i,j:from.j-1},
                {i:from.i-1,j:from.j+1},
                {i:from.i-1,j:from.j},
                {i:from.i-1,j:from.j-1}
            ]
            validMoves=validMoves.filter(move=>{
                if(this.color=='white'){
                    if( 0 <= move.j && move.j < 8 && 0 <= move.i && move.i<8 )
                       return board[move.i][move.j]?.onMe==null || board[move.i][move.j]?.onMe.color=='black'
                }
                if(this.color=='black'){
                    if( 0 <= move.j && move.j < 8 && 0 <= move.i && move.i<8 )
                       return board[move.i][move.j]?.onMe==null || board[move.i][move.j]?.onMe.color=='white'
                }
            })
            return validMoves
        };
        this.isMyKingWillBeSafe =function(){
            return true
        }
    }
}
export class Queen {
    constructor(color) {
        this.pic= color=='white'?'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465792/chess/White_queen_bwpmgg.png':'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465791/chess/Black_queen_y7k2wx.png'
        this.color = color;
        this.name = 'Queen'
        this.value = 9
        this.showValidMoves = function (from, board) {
            let validMoves=[]
            let k=1
            while(from.i+k<8){
                if(board[from.i+k][from.j].onMe==null){
                    validMoves.push({i:from.i+k, j:from.j})
                }else{
                    if(this.color=='white' && board[from.i+k][from.j].onMe.color=='black'){
                        validMoves.push({i:from.i+k, j:from.j})
                    }
                    if(this.color=='black' && board[from.i+k][from.j].onMe.color=='white'){
                        validMoves.push({i:from.i+k, j:from.j})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i-k>=0){
                if(board[from.i-k][from.j].onMe==null){
                    validMoves.push({i:from.i-k, j:from.j})
                }else{
                    if(this.color=='white' && board[from.i-k][from.j].onMe.color=='black'){
                        validMoves.push({i:from.i-k, j:from.j})
                    }
                    if(this.color=='black' && board[from.i-k][from.j].onMe.color=='white'){
                        validMoves.push({i:from.i-k, j:from.j})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.j+k<8){
                if(board[from.i][from.j+k].onMe==null){
                    validMoves.push({i:from.i, j:from.j+k})
                }else{
                    if(this.color=='white' && board[from.i][from.j+k].onMe.color=='black'){
                        validMoves.push({i:from.i, j:from.j+k})
                    }
                    if(this.color=='black' && board[from.i][from.j+k].onMe.color=='white'){
                        validMoves.push({i:from.i, j:from.j+k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.j-k>=0){
                if(board[from.i][from.j-k].onMe==null){
                    validMoves.push({i:from.i, j:from.j-k})
                }else{
                    if(this.color=='white' && board[from.i][from.j-k].onMe.color=='black'){
                        validMoves.push({i:from.i, j:from.j-k})
                    }
                    if(this.color=='black' && board[from.i][from.j-k].onMe.color=='white'){
                        validMoves.push({i:from.i, j:from.j-k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i+k<8 && from.j+k<8){
                if(board[from.i+k][from.j+k].onMe==null){
                    validMoves.push({i:from.i+k, j:from.j+k})
                }else{
                    if(this.color=='white' && board[from.i+k][from.j+k].onMe.color=='black'){
                        validMoves.push({i:from.i+k, j:from.j+k})
                    }
                    if(this.color=='black' && board[from.i+k][from.j+k].onMe.color=='white'){
                        validMoves.push({i:from.i+k, j:from.j+k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i+k<8 && from.j-k>=0){
                if(board[from.i+k][from.j-k].onMe==null){
                    validMoves.push({i:from.i+k, j:from.j-k})
                }else{
                    if(this.color=='white' && board[from.i+k][from.j-k].onMe.color=='black'){
                        validMoves.push({i:from.i+k, j:from.j-k})
                    }
                    if(this.color=='black' && board[from.i+k][from.j-k].onMe.color=='white'){
                        validMoves.push({i:from.i+k, j:from.j-k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i-k>=0 && from.j+k<8){
                if(board[from.i-k][from.j+k].onMe==null){
                     validMoves.push({i:from.i-k, j:from.j+k})
                }else{
                    if(this.color=='white' && board[from.i-k][from.j+k].onMe.color=='black'){
                        validMoves.push({i:from.i-k, j:from.j+k})
                    }
                    if(this.color=='black' && board[from.i-k][from.j+k].onMe.color=='white'){
                        validMoves.push({i:from.i-k, j:from.j+k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i-k>=0 && from.j-k>=0){
                if(board[from.i-k][from.j-k].onMe==null) {
                    validMoves.push({i:from.i-k, j:from.j-k})
                }else{
                    if(this.color=='white' && board[from.i-k][from.j-k].onMe.color=='black'){
                        validMoves.push({i:from.i-k, j:from.j-k})
                    }
                    if(this.color=='black' && board[from.i-k][from.j-k].onMe.color=='white'){
                        validMoves.push({i:from.i-k, j:from.j-k})
                    }
                    k+=100
                }
                k++
            }
            return validMoves
        };
        this.isMyKingWillBeSafe =function(){
            return true
        }
    }
}
export class Rook {
    constructor(color) {
        this.pic= color=='white'? 'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465792/chess/White_rook_l1f8kt.png':'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465791/chess/Black_Rook_xsroaq.png';
        this.color = color;
        this.isFirstMove = true;
        this.name = 'Rook'
        this.value = 5
        this.showValidMoves = function (from, board) {
            let validMoves=[]
            let k=1
            while(from.i+k<8){
                if(board[from.i+k][from.j].onMe==null){
                    validMoves.push({i:from.i+k, j:from.j})
                }else{
                    if(this.color=='white' && board[from.i+k][from.j].onMe.color=='black'){
                        validMoves.push({i:from.i+k, j:from.j})
                    }
                    if(this.color=='black' && board[from.i+k][from.j].onMe.color=='white'){
                        validMoves.push({i:from.i+k, j:from.j})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i-k>=0){
                if(board[from.i-k][from.j].onMe==null){
                    validMoves.push({i:from.i-k, j:from.j})
                }else{
                    if(this.color=='white' && board[from.i-k][from.j].onMe.color=='black'){
                        validMoves.push({i:from.i-k, j:from.j})
                    }
                    if(this.color=='black' && board[from.i-k][from.j].onMe.color=='white'){
                        validMoves.push({i:from.i-k, j:from.j})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.j+k<8){
                if(board[from.i][from.j+k].onMe==null){
                    validMoves.push({i:from.i, j:from.j+k})
                }else{
                    if(this.color=='white' && board[from.i][from.j+k].onMe.color=='black'){
                        validMoves.push({i:from.i, j:from.j+k})
                    }
                    if(this.color=='black' && board[from.i][from.j+k].onMe.color=='white'){
                        validMoves.push({i:from.i, j:from.j+k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.j-k>=0){
                if(board[from.i][from.j-k].onMe==null){
                    validMoves.push({i:from.i, j:from.j-k})
                }else{
                    if(this.color=='white' && board[from.i][from.j-k].onMe.color=='black'){
                        validMoves.push({i:from.i, j:from.j-k})
                    }
                    if(this.color=='black' && board[from.i][from.j-k].onMe.color=='white'){
                        validMoves.push({i:from.i, j:from.j-k})
                    }
                    k+=100
                }
                k++
            }
            return validMoves
        };
        this.isMyKingWillBeSafe =function(){
            return true
        }
    }
}
export class Bishop {
    constructor(color) {
        this.pic= color=='white'?'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465791/chess/White_bishop_vcra0i.png':'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465791/chess/Black_bishop_tqkcgm.png';
        this.color = color;
        this.name = 'Bishop'
        this.value = 3
        this.showValidMoves = function (from, board) {
            let validMoves=[]
            let k=1
            while(from.i+k<8 && from.j+k<8){
                if(board[from.i+k][from.j+k].onMe==null){
                    validMoves.push({i:from.i+k, j:from.j+k})
                }else{
                    if(this.color=='white' && board[from.i+k][from.j+k].onMe.color=='black'){
                        validMoves.push({i:from.i+k, j:from.j+k})
                    }
                    if(this.color=='black' && board[from.i+k][from.j+k].onMe.color=='white'){
                        validMoves.push({i:from.i+k, j:from.j+k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i+k<8 && from.j-k>=0){
                if(board[from.i+k][from.j-k].onMe==null){
                    validMoves.push({i:from.i+k, j:from.j-k})
                }else{
                    if(this.color=='white' && board[from.i+k][from.j-k].onMe.color=='black'){
                        validMoves.push({i:from.i+k, j:from.j-k})
                    }
                    if(this.color=='black' && board[from.i+k][from.j-k].onMe.color=='white'){
                        validMoves.push({i:from.i+k, j:from.j-k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i-k>=0 && from.j+k<8){
                if(board[from.i-k][from.j+k].onMe==null){
                     validMoves.push({i:from.i-k, j:from.j+k})
                }else{
                    if(this.color=='white' && board[from.i-k][from.j+k].onMe.color=='black'){
                        validMoves.push({i:from.i-k, j:from.j+k})
                    }
                    if(this.color=='black' && board[from.i-k][from.j+k].onMe.color=='white'){
                        validMoves.push({i:from.i-k, j:from.j+k})
                    }
                    k+=100
                }
                k++
            }
            k=1
            while(from.i-k>=0 && from.j-k>=0){
                if(board[from.i-k][from.j-k].onMe==null) {
                    validMoves.push({i:from.i-k, j:from.j-k})
                }else{
                    if(this.color=='white' && board[from.i-k][from.j-k].onMe.color=='black'){
                        validMoves.push({i:from.i-k, j:from.j-k})
                    }
                    if(this.color=='black' && board[from.i-k][from.j-k].onMe.color=='white'){
                        validMoves.push({i:from.i-k, j:from.j-k})
                    }
                    k+=100
                }
                k++
            }
            return validMoves
        };
        this.isMyKingWillBeSafe =function(){
            return true
        }
    }
}
export class knight {
    constructor(color) {
        this.pic= color=='white'?'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465791/chess/White_horseman_mfvkl2.png':'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465792/chess/Black_horseman_zzazo1.png';
        this.color = color;
        this.name = 'knight'
        this.value = 3
        this.showValidMoves = function (from, board) {
            let validMoves=[
                {i:from.i-2,j:from.j-1},
                {i:from.i-2,j:from.j+1},
                {i:from.i-1,j:from.j-2},
                {i:from.i-1,j:from.j+2},
                {i:from.i+2,j:from.j-1},
                {i:from.i+2,j:from.j+1},
                {i:from.i+1,j:from.j-2},
                {i:from.i+1,j:from.j+2}
            ]
            validMoves=validMoves.filter(move=>{
                if(this.color=='white'){
                    if( 0 <= move.j && move.j < 8 && 0 <= move.i && move.i<8 )
                       return board[move.i][move.j]?.onMe==null || board[move.i][move.j]?.onMe.color=='black'
                }
                if(this.color=='black'){
                    if( 0 <= move.j && move.j < 8 && 0 <= move.i && move.i<8 )
                       return board[move.i][move.j]?.onMe==null || board[move.i][move.j]?.onMe.color=='white'
                }
            })
            return validMoves
        };
        this.isMyKingWillBeSafe =function(){
            return true
        }
    }
}
export class Pawn {
    constructor(color) {
        this.pic= color=='white'?'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465792/chess/White_pawn_uopduj.png':'https://res.cloudinary.com/dyzpajqfj/image/upload/v1683465792/chess/Black_pawn_voytrl.png';
        this.color = color;
        this.whereIsMyKing={j:4,i:this.color=='white'?7:0}
        this.isFirstMove = true;
        this.name = 'Pawn'
        this.value = 1
        this.showValidMoves = function (from, board){
            let validMoves=[]
            if(this.color=='white'){
                if(board[from.i-1][from.j].onMe==null){
                    validMoves.push({i:from.i-1,j:from.j})
                    if(this.isFirstMove){
                        if(board[from.i-2][from.j].onMe==null){
                            validMoves.push({i:from.i-2,j:from.j})
                        }
                    }
                }
                if(board[from.i-1][from.j-1]?.onMe?.color=='black'){
                    validMoves.push({i:from.i-1,j:from.j-1})
                }
                if(board[from.i-1][from.j+1]?.onMe?.color=='black'){
                    validMoves.push({i:from.i-1,j:from.j+1})
                }
            }
            if(this.color=='black'){
                if(board[from.i+1][from.j].onMe==null){
                    validMoves.push({i:from.i+1,j:from.j})
                    if(this.isFirstMove){
                        if(board[from.i+2][from.j].onMe==null){
                            validMoves.push({i:from.i+2,j:from.j})
                        }
                    }
                }
                if(board[from.i+1][from.j-1]?.onMe?.color=='white'){
                    validMoves.push({i:from.i+1,j:from.j-1})
                }
                if(board[from.i+1][from.j+1]?.onMe?.color=='white'){
                    validMoves.push({i:from.i+1,j:from.j+1})
                }
            } 
            return validMoves
        }
        this.isMyKingWillBeSafe = function (from ,to, board){
            
            let enemys=[]
            let safe= true;

            let teampSquare= new Square()
            teampSquare.SetOnMe(board[to.i][to.j].onMe)
            board[to.i][to.j].SetOnMe(board[from.i][from.j].onMe)
            board[from.i][from.j].SetOnMe(null)

            if(this.color=='white'){
                for(let i=0;i<=7;i++){
                    enemys=[...enemys,...board[i].filter(square=> square.onMe==null? false : square.onMe.color=='black')]
                }
            }
            if(this.color=='black'){
                for(let i=0;i<=7;i++){
                    enemys=[...enemys,...board[i].filter(square=> square.onMe==null? false : square.onMe.color=='white')]
                } 
            }

            enemys.forEach( enemy=> {
                let danger=enemy.onMe.showValidMoves({i:8-parseInt(enemy.name[1]),j:enemy.name.charCodeAt(0)-97},board).filter(move=> move.i===this.whereIsMyKing.i && move.j===this.whereIsMyKing.j)
                if(danger.length>0) {
                    safe=false
                }
            })
            
            board[from.i][from.j].SetOnMe(board[to.i][to.j].onMe)
            board[to.i][to.j].SetOnMe(teampSquare.onMe)
            return safe
        }
    }
}

