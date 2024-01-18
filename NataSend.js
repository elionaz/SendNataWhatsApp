async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)

	if(!textarea) throw new Error("Não há uma conversa aberta")

	for(const line of lines){
		console.log(line)

		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));

		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);

		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}

	return lines.length;
}

enviarScript(`
Muchos no saben que los elementos del polka y folclórica fueron introducidos a México por europeos en el 1830.
El sonido de la guitarra y el acordeón fueron adaptados por gente del pueblo, adquiriéndose como música propia.
Artistas como **Narciso Martines** recuerdan haber escuchado la polka cuando eran tan solo niños.
Sin embargo, algunos artistas reemplazaron los instrumentos de latón con otros sonidos.
También comenzaron a contar sus propias historias y uso de las letras para dar noticia durante la revolución.
Estas canciones se conocerían como boleros mexicanos, una base para los géneros que vendrían.
Con el tiempo, la música norteña tocada en tierras rurales comenzaría a fusionarse con los clásicos del bolero.
Esto dio luz a una nueva forma de interpretar la música, conocida popularmente como la música ranchera, canciones de la tierra.
Décadas más tarde, artistas como **Pedro Infante** llevaron la música ranchera a su centro de atención.
Sus baladas románticas se hicieron reconocer en todo el mundo como música propia de México.
Luego vinieron **Los Tigres del Norte** y todo cambió.
En los años 70, **Los Tigres del Norte** popularizaron una canción ficticia sobre el narcotráfico llamada "Contrato y Traición".
Ese corrido fue exitoso y controversial.
Esto dio comienzo al género "Narcocorrido".
**Los Tigres del Norte** fueron unos de los pioneros en el género del "Narcocorrido" y, aunque el apetito por su música era feroz, México prohibió el género, empujando a los músicos a las ciudades fronterizas y, finalmente, a Estados Unidos.
Luego vino **Chalino Sánchez**, un granjero con un gran corazón de acero y un amor por el "Narcocorrido".
Él trajo la música de estilo Bandas de Sinaloa.
**Sánchez** escribió canciones "hechas a medida" para inmortalizar a los narcotraficantes.
Justo en esa época, la ciudad de Los Ángeles estaba presenciando un nuevo movimiento de "Gangsta Rap".
Los mexicoamericanos y los afroamericanos compartieron varios espacios en el centro de la ciudad, observando las culturas y los estilos musicales de los demás.
Al igual que el movimiento de "Gangsta Rap", **Sánchez** cantaba sobre la violencia, las drogas y los carteles mexicanos.
**Chalino Sánchez** sería coronado como el "Rey" de los narcocorridos, mientras los corridos se congelaron en el tiempo.
"Gangsta Rap" se generalizó y empezó a ser respaldado por las principales discográficas, convirtiéndose en sinónimo de pop.
Hasta que se introdujo la música trap, atrajo a los jóvenes artistas mexicanos, repasando las influencias fundamentales de los ritmos urbanos, la sensibilidad del hip-hop y la superposición de las letras de los corridos, lo desglosaron y lo recrearon a lo que ahora llamamos "Corridos Tumbados".
`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)
