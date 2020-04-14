package br.com.empresa.microservice.auth.controller.dto;

import br.com.empresa.microservice.auth.model.Usuario;

public class UsuarioDTO {

	private String username;

	private String password;

	private String nomeCompleto;
	
	public UsuarioDTO(String username, String password, String nomeCompleto) {
		this.username = username;
		this.password = password;
		this.nomeCompleto = nomeCompleto;
	}

	public UsuarioDTO(Usuario usuario) {
		this.username = usuario.getUsername();		
		this.nomeCompleto = usuario.getNomeCompleto();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}
}
