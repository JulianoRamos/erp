package br.com.empresa.microservice.empresa.dto;

import br.com.empresa.microservice.empresa.model.Estado;

public class EstadoDTO {

	private Integer id;
	private Integer idUf;
	private String nome;
	private String uf;
	private RegiaoDTO regiao;

	public EstadoDTO() {
	}

	public EstadoDTO(Estado estado) {
		this.id = estado.getId().intValue();
		this.idUf = estado.getIdUf().intValue();
		this.nome = estado.getNome();
		this.uf = estado.getUf();
		this.regiao = new RegiaoDTO(estado.getRegiao());
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getIdUf() {
		return idUf;
	}

	public void setIdUf(Integer idUf) {
		this.idUf = idUf;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getUf() {
		return uf;
	}

	public void setUf(String uf) {
		this.uf = uf;
	}

	public RegiaoDTO getRegiao() {
		return regiao;
	}

	public void setRegiao(RegiaoDTO regiao) {
		this.regiao = regiao;
	}
}
