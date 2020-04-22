package br.com.empresa.microservice.empresa.controller;

import java.net.URI;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.empresa.microservice.empresa.dto.EmpresaDTO;
import br.com.empresa.microservice.empresa.form.EmpresaForm;
import br.com.empresa.microservice.empresa.form.UpdateEmpresaForm;
import br.com.empresa.microservice.empresa.model.Empresa;
import br.com.empresa.microservice.empresa.service.EmpresaService;

@RestController
@RequestMapping("/")
public class EmpresaController {

	@Autowired
	private EmpresaService service;	
	
	@GetMapping
	public Page<EmpresaDTO> index(@PageableDefault(sort = "id", direction = Direction.ASC, page = 0, size = 9999) Pageable paginacao) {
		return service.findAll(paginacao);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<EmpresaDTO> findById(@PathVariable Long id) {
		Optional<Empresa> empresa = service.findById(id);
		if (empresa.isPresent()) {
			return ResponseEntity.ok(new EmpresaDTO(empresa.get()));
		}

		return ResponseEntity.notFound().build();
	}
	
	@PostMapping
	@Transactional
	public ResponseEntity<EmpresaDTO> save(@RequestBody @Valid EmpresaForm form, UriComponentsBuilder uriBuilder) {
		Empresa empresa = service.save(form);
		
		URI uri = uriBuilder.path("/{id}").buildAndExpand(empresa.getId()).toUri();
		return ResponseEntity.created(uri).body(new EmpresaDTO(empresa));
	}
	
	@PutMapping("/{id}")
	@Transactional
	public ResponseEntity<EmpresaDTO> update(@PathVariable Long id, @RequestBody @Valid UpdateEmpresaForm form) {
		Optional<Empresa> optional = service.findById(id);
		if (optional.isPresent()) {
			Empresa empresa = form.update(id, service);
			return ResponseEntity.ok(new EmpresaDTO(empresa));
		}

		return ResponseEntity.notFound().build();
	}

	@DeleteMapping("/{id}")
	@Transactional
	public ResponseEntity<Long> delete(@PathVariable Long id) {
		Optional<Empresa> optional = service.findById(id);
		if (optional.isPresent()) {
			service.deleteById(id);
			return ResponseEntity.ok(id);
		}

		return ResponseEntity.notFound().build();
	}
}
