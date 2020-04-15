package br.com.empresa.microservice.empresa.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.empresa.microservice.empresa.model.Empresa;
import br.com.empresa.microservice.empresa.repository.EmpresaRepository;

@Service
public class EmpresaService {
	@Autowired
	private EmpresaRepository empresaRepository;

	public Empresa create(Empresa empresa) {
		return empresaRepository.save(empresa);
	}
}
