package br.com.empresa.microservice.empresa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.empresa.microservice.empresa.form.MunicipioSearch;
import br.com.empresa.microservice.empresa.service.MunicipioService;

@RestController
@RequestMapping("/municipio")
public class MunicipioController {

	@Autowired
	private MunicipioService municipioService;

	@GetMapping
	public List<MunicipioSearch> findAll() {
		return municipioService.findAll();
	}
}
