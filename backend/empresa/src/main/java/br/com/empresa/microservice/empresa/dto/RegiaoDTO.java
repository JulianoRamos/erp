package br.com.empresa.microservice.empresa.dto;

import br.com.empresa.microservice.empresa.model.Regiao;

public class RegiaoDTO {

	private Integer id;
	private String nome;

	public RegiaoDTO() {
	}

	public RegiaoDTO(Regiao regiao) {
		this.id = regiao.getId().intValue();
		this.nome = regiao.getNome();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}
}
