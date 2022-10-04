let turn = 'x'; // for start only.
let title = document.querySelector('.title'); // for catuch this div.
let squres = []; // for create array contain all squres.

function checkSqures() // for condition all squres full. 
{
        if (squres[1] != '' &&  squres[2] != '' &&  squres[3] != '' 
        &&  squres[4] != '' &&  squres[5] != '' &&  squres[6] != '' 
        &&  squres[7] != '' &&  squres[8] != '' &&  squres[9] != '' && turn != 'win'){
        title.innerHTML= 'End game !! no Winner'  
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
        }
}


function end(num1,num2,num3) // for condition of any turn win.
{
    title.innerHTML=`${squres[num2]} winner`;
    for(let i = 1; i<10; i++){
        squres[i]= document.getElementById('item' + i).style.backgroundColor = '#750219';  
    }
        document.getElementById('item' + num1).style.backgroundColor = 'green';
        document.getElementById('item' + num2).style.backgroundColor = 'green';
        document.getElementById('item' + num3).style.backgroundColor = 'green';
        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000);
        turn = 'win'
        
}
function winner() // all possibilities when winner.
{
    for(let i = 1; i<10; i++){
        squres[i]= document.getElementById('item' + i).innerHTML;
        
    }


    if (squres[1] == squres[2] && squres[2] == squres[3] && squres[1] != '') {
        end(1,2,3);
    }
    else if (squres[4] == squres[5] && squres[5] == squres[6] && squres[6] != ''){
        end(4,5,6);
    }
    else if (squres[7] == squres[8] && squres[8] == squres[9] && squres[9] != ''){
        end(7,8,9);
    }


    else if (squres[1] == squres[4] && squres[4] == squres[7] && squres[7] != ''){
        end(1,4,7);
    }
    else if (squres[2] == squres[5] && squres[5] == squres[8] && squres[8] != ''){
        end(2,5,8);
    }
    else if (squres[3] == squres[6] && squres[6] == squres[9] && squres[9] != ''){
        end(3,6,9);
    }

    else if (squres[1] == squres[5] && squres[5] == squres[9] && squres[9] != ''){
        end(1,5,9);
    }
    else if (squres[3] == squres[5] && squres[5] == squres[7] && squres[7] != ''){
        end(3,5,7);
    }
}

function game(id) // for clicked.
{
    if(turn != 'win'){
    let element = document.getElementById(id);
    if (turn === 'x' && element.innerHTML == ''){
        element.innerHTML = 'x';
        turn = 'o';
        title.innerHTML= 'o';
    }
    else if (turn === 'o' && element.innerHTML == '') {
        element.innerHTML = '0';
        turn = 'x';
        title.innerHTML= 'x';

    }
    winner();
    checkSqures()
}

}

