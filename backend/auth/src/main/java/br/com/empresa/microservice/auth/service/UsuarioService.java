package br.com.empresa.microservice.auth.service;

import java.util.Arrays;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import br.com.empresa.microservice.auth.controller.dto.UsuarioDTO;
import br.com.empresa.microservice.auth.enumeration.Authorities;
import br.com.empresa.microservice.auth.model.Authority;
import br.com.empresa.microservice.auth.model.Usuario;
import br.com.empresa.microservice.auth.repository.UsuarioRepository;

@Service
public class UsuarioService {

	@Autowired
	private UsuarioRepository usuarioRepository;

	@Autowired
	PasswordEncoder passwordEncoder;

	public Usuario register(UsuarioDTO user) {
		Usuario usuario = new Usuario();
		usuario.setUsername(user.getUsername());
		usuario.setPassword(passwordEncoder.encode(user.getPassword()));
		usuario.setNomeCompleto(user.getNomeCompleto());
		usuario.setActivated(true);

		Authority authority = new Authority();
		authority.setName(Authorities.ROLE_USER.name());

		usuario.setAuthorities(Arrays.asList(authority));
		usuarioRepository.save(usuario);
		return usuario;
	}

	public Optional<Usuario> findByUsername(String username) {
		return usuarioRepository.findByUsername(username);
	}

	public Boolean hasUsuario(String username) {
		Optional<Usuario> usuario = usuarioRepository.findByUsername(username);
		return usuario.isPresent();
	}
}
