package br.com.empresa.microservice.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.empresa.microservice.auth.model.Authority;

public interface AuthorityRepository extends JpaRepository<Authority, String> {

	Authority findByName(String name);

}