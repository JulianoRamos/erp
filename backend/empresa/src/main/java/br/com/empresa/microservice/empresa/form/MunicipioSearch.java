package br.com.empresa.microservice.empresa.form;

import java.util.ArrayList;
import java.util.List;

import br.com.empresa.microservice.empresa.model.Municipio;

public class MunicipioSearch {

	private Long id;

	private String nome;

	public MunicipioSearch(Long id, String nome) {
		super();
		this.id = id;
		this.nome = nome;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public static List<MunicipioSearch> converter(List<Municipio> municipios) {
		List<MunicipioSearch> municipiosSearch = new ArrayList<MunicipioSearch>();
		for (Municipio municipio : municipios) {
			String nome = municipio.getNome() + ", " + municipio.getUf();
			municipiosSearch.add(new MunicipioSearch(municipio.getId(), nome));
		}
		return municipiosSearch;
	}
}
