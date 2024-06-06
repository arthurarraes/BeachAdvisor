var comentarios = [];		
		
function AdicionarComentario(){
	var usuario = '';
	var comentario = {};
	usuario = document.getElementById('txtUsuario').value;
		
	const data = Date.now();
	const today = new Date(data);
		
	comentario.comentario = document.getElementById('txtComentario').value;
	comentario.usuario = usuario;
	comentario.data = today.toLocaleString('pt-BR');

	if(comentario.comentario == ''){
		alert('Escreva um comentário');
		return false;
	}
	if(comentario.usuario == ''){
		alert('Digite um usuário');
		return false;
	}
		
	var div_comentarios = document.getElementById('comentarios');
		
	comentarios.push(comentario);
		
	var html_final = '';
		
	comentarios.forEach(x=>{
		html_final += `<div class="comentario"><p>Usuário: ${x.usuario}</p><p>Comentário: ${x.comentario}</p><p>Data: ${x.data}</p></div>`; 
	});
		
	document.getElementById('txtComentario').value = '';
	document.getElementById('txtComentario').focus();
		
	div_comentarios.innerHTML = html_final;		
}