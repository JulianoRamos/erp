package br.com.empresa.microservice.empresa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.empresa.microservice.empresa.model.Municipio;

public interface MunicipioRepository extends JpaRepository<Municipio, Long> {

}
