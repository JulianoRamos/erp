package br.com.empresa.microservice.empresa.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.empresa.microservice.empresa.dto.EmpresaDTO;
import br.com.empresa.microservice.empresa.service.EmpresaService;

@RestController
@RequestMapping("/empresa")
public class EmpresaController {

	@Autowired
	private EmpresaService service;
	
	@PostMapping
	public EmpresaDTO create(@RequestBody EmpresaDTO empresaDTO) {
		return null;
	}
	
	@GetMapping
	public ResponseEntity<String> index() {
		return ResponseEntity.ok("teste");
	}
}
