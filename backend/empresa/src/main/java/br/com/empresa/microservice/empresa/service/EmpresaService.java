package br.com.empresa.microservice.empresa.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import br.com.empresa.microservice.empresa.dto.EmpresaDTO;
import br.com.empresa.microservice.empresa.form.EmpresaForm;
import br.com.empresa.microservice.empresa.model.Empresa;
import br.com.empresa.microservice.empresa.repository.EmpresaRepository;
import br.com.empresa.microservice.empresa.repository.MunicipioRepository;

@Service
public class EmpresaService {

	@Autowired
	private EmpresaRepository empresaRepository;

	@Autowired
	private MunicipioRepository municipioRepository;

	public Page<EmpresaDTO> findAll(Pageable paginacao) {
		Page<Empresa> empresas = empresaRepository.findAll(paginacao);
		Page<EmpresaDTO> empresasDTO = EmpresaDTO.converter(empresas);
		return empresasDTO;
	}

	public Empresa save(EmpresaForm form) {
		return empresaRepository.save(form.converter(municipioRepository));
	}

	public Optional<Empresa> findById(Long id) {
		return empresaRepository.findById(id);
	}

	public Empresa getOne(Long id) {
		return empresaRepository.getOne(id);
	}

	public void deleteById(Long id) {
		empresaRepository.deleteById(id);
	}
}
