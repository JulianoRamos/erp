package br.com.empresa.microservice.empresa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.empresa.microservice.empresa.form.MunicipioSearch;
import br.com.empresa.microservice.empresa.model.Municipio;
import br.com.empresa.microservice.empresa.repository.MunicipioRepository;

@Service
public class MunicipioService {

	@Autowired
	private MunicipioRepository municipioRepository;

	public Municipio getOne(Long id) {
		return municipioRepository.getOne(id);
	}

	public List<MunicipioSearch> findAll() {
		List<Municipio> municipios = municipioRepository.findAll();
		List<MunicipioSearch> municipiosSearch = MunicipioSearch.converter(municipios);
		return municipiosSearch;
	}
}
