let comentarios = [];		

function AdicionarComentario(){
	let usuario = '';
	let comentario = {};
	usuario = document.getElementById('txtUsuario').value;	
	const data = Date.now();
	const today = new Date(data);
		
	comentario.comentario = document.getElementById('txtComentario').value;
	comentario.usuario = usuario;
	comentario.data = today.toLocaleString('pt-BR');

	if(comentario.usuario == ''){
		alert('Digite um usuário');
		return false;
	}
	if(comentario.comentario == ''){
		alert('Escreva um comentário');
		return false;
	}
		
	let div_comentarios = document.getElementById('comentarios');
		
	comentarios.push(comentario);
		
	let html_final = '';
		
	comentarios.forEach(x=>{
		html_final += `<div class="comentario"><p><span>Usuário:</span> ${x.usuario}</p><p><span>Comentário:</span> ${x.comentario}</p><p><span>Data:</span> ${x.data}</p></div>`; 
	});
		
	document.getElementById('txtComentario').value = '';
	document.getElementById('txtUsuario').value = '';
	document.getElementById('txtUsuario').focus();
		
	div_comentarios.innerHTML += html_final;		
}
