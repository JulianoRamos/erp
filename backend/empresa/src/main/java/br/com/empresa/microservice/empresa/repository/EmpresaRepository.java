package br.com.empresa.microservice.empresa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.empresa.microservice.empresa.model.Empresa;

public interface EmpresaRepository extends JpaRepository<Empresa, Long> {

}
