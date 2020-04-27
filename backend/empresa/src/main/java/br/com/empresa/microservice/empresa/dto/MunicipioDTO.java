package br.com.empresa.microservice.empresa.dto;

import java.util.List;
import java.util.stream.Collectors;

import br.com.empresa.microservice.empresa.model.Municipio;

public class MunicipioDTO {

	private Integer id;
	private Integer ibge;
	private String nome;
	private String uf;
	private EstadoDTO estado;

	public MunicipioDTO() {
	}

	public MunicipioDTO(Municipio municipio) {
		this.id = municipio.getId().intValue();
		this.ibge = municipio.getIbge().intValue();
		this.nome = municipio.getNome();
		this.uf = municipio.getUf();
		this.estado = new EstadoDTO(municipio.getEstado());
	}

	public MunicipioDTO(Integer id) {
		this.id = id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getIbge() {
		return ibge;
	}

	public void setIbge(Integer ibge) {
		this.ibge = ibge;
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

	public EstadoDTO getEstado() {
		return estado;
	}

	public void setEstado(EstadoDTO estado) {
		this.estado = estado;
	}

	public static List<MunicipioDTO> converter(List<Municipio> municipios) {
		return municipios.stream().map(MunicipioDTO::new).collect(Collectors.toList());
	}
}
