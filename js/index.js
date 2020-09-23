// piedra = 0
// papel = 1
// tijeras = 2
function STONE() {
    var cantidad = Math.floor(Math.random()*3);
    console.log(cantidad);
    const rock = document.createElement('img');
    rock.setAttribute("src", "media/icons/rock-48.png");
    const containerJugador = document.getElementById('jugador');
    containerJugador.appendChild(rock)
    if (cantidad === 0) {
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/rock-48.png");
        const containerMaquina = document.getElementById('maquina');
        containerMaquina.appendChild(rock)

        var element = document.createElement('h1');
        element.innerText = 'Empate';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }else if (cantidad === 1){
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/archivo-64.png");
        const containerJugador = document.getElementById('maquina');
        containerJugador.appendChild(rock);

        var element = document.createElement('h1');
        element.innerText = 'Perdiste';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }else{
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/tijeras-48.png");
        const containerJugador = document.getElementById('maquina');
        containerJugador.appendChild(rock);

        var element = document.createElement('h1');
        element.innerText = 'Ganaste';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }
}
function PAPER() {
    var cantidad = Math.floor(Math.random()*3);
    console.log(cantidad);
    const rock = document.createElement('img');
    rock.setAttribute("src", "media/icons/archivo-64.png");
    const containerJugador = document.getElementById('jugador');
    containerJugador.appendChild(rock)
    if (cantidad === 0) {
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/rock-48.png");
        const containerMaquina = document.getElementById('maquina');
        containerMaquina.appendChild(rock)

        var element = document.createElement('h1');
        element.innerText = 'Ganaste';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }else if (cantidad === 1){
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/archivo-64.png");
        const containerJugador = document.getElementById('maquina');
        containerJugador.appendChild(rock);

        var element = document.createElement('h1');
        element.innerText = 'Empate';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }else{
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/tijeras-48.png");
        const containerJugador = document.getElementById('maquina');
        containerJugador.appendChild(rock);

        var element = document.createElement('h1');
        element.innerText = 'Perdiste';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }
}
function SCISSORS() {
    var cantidad = Math.floor(Math.random()*3);
    console.log(cantidad);
    const rock = document.createElement('img');
    rock.setAttribute("src", "media/icons/tijeras-left.png");
    const containerJugador = document.getElementById('jugador');
    containerJugador.appendChild(rock)
    if (cantidad === 0) {
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/rock-48.png");
        const containerMaquina = document.getElementById('maquina');
        containerMaquina.appendChild(rock)

        var element = document.createElement('h1');
        element.innerText = 'Perdiste';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }else if (cantidad === 1){
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/archivo-64.png");
        const containerJugador = document.getElementById('maquina');
        containerJugador.appendChild(rock);

        var element = document.createElement('h1');
        element.innerText = 'Ganaste';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }else{
        const rock = document.createElement('img');
        rock.setAttribute("src", "media/icons/tijeras-48.png");
        const containerJugador = document.getElementById('maquina');
        containerJugador.appendChild(rock);

        var element = document.createElement('h1');
        element.innerText = 'Empate';
        var container = document.getElementById('answer');
        container.appendChild(element)
    }
}
// function borrar(){
//     const rock = document.createElement('h1');
//     rock.innerText = 'hello, platzi badges';
//     const containerJugador = document.getElementById('jugador');
//     containerJugador.appendChild(rock)
// }