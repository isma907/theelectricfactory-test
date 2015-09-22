var formulario = $("#login");
nombre=$("#nombre");
asunto=$("#apellido");
email=$("#email");
juego=$("#juego");
btninicio=$("#btninicio");
btnjugar=$("#btnjugar");
usuario=$('#usertext');


// CELDAS
f1=$("#f1");
f1a=$("#f1a");
f1b=$("#f1b");

f2=$("#f2");
f2a=$("#f2a");
f2b=$("#f2b");

f3=$("#f3");
f3a=$("#f3a");
f3b=$("#f3b");


var turno= nombre.val();
juego.hide();


$(function(){


	formulario.submit(function(){

		var nombreF = nombre.val();
		var asuntoF = asunto.val();
		var emailF = email.val();

		$('#juego').show();
		$('#myModal').modal('hide');    
		$('#home').hide();
		btninicio.click(function() {
			location.reload();
		});
		btnjugar.hide();

		usuario.html( nombre.val())
		return false;

	});



});



(function () {

    var squares = [], 
        EMPTY = "\xA0",
        score,
        moves,
        turn = "X",
        oldOnload,

   
    wins = [7, 56, 448, 73, 146, 292, 273, 84],


    startNewGame = function () {
        var i;
        
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        for (i = 0; i < squares.length; i += 1) {
            squares[i].firstChild.nodeValue = EMPTY;
        }
    },

    
    win = function (score) {
        var i;
        for (i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },


    set = function () {
        if (this.firstChild.nodeValue !== EMPTY) {
            return;
        }
        this.firstChild.nodeValue = turn;
        moves += 1;
        score[turn] += this.indicator;
        if (win(score[turn])) {
            swal({   title: "Gano!",
            text: turn ,
            imageUrl: "images/like.jpg" });
            startNewGame();
        } else if (moves === 9) {
             swal({   title: "Empate!",
            text: "Ninguno se sacó ventaja",
            imageUrl: "images/like.jpg" });
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    },

  
    play = function () {
        var board = document.createElement("table"),
            indicator = 1,
            i, j,
            row, cell,
            parent;
        board.border = 1;
        for (i = 0; i < 3; i += 1) {
            row = document.createElement("tr");
            board.appendChild(row);
            for (j = 0; j < 3; j += 1) {
                cell = document.createElement("td");
                cell.width = cell.height = 200;
                cell.align = cell.valign = 'center';
                cell.indicator = indicator;
                cell.onclick = set;
                cell.appendChild(document.createTextNode(""));
                row.appendChild(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }


        parent = document.getElementById("tateti") || document.body;
        parent.appendChild(board);
        startNewGame();
    };


    if (typeof window.onload === "function") {
        oldOnLoad = window.onload;
        window.onload = function () {
            oldOnLoad(); 
            play();
        };
    } else {
        window.onload = play;
    }
}());

