package br.com.empresa.microservice.auth.controller;

import java.net.URI;
import java.security.Principal;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.empresa.microservice.auth.controller.dto.UsuarioDTO;
import br.com.empresa.microservice.auth.model.Usuario;
import br.com.empresa.microservice.auth.service.UsuarioService;

@RestController
@RequestMapping("/usuario")
public class UsuarioController {

	@Autowired
	private UsuarioService usuarioService;

	@GetMapping
	public Principal getCurrentLoggedInUser(Principal user) {
		return user;
	}

	@PostMapping
	@Transactional
	public ResponseEntity<UsuarioDTO> create(@RequestBody UsuarioDTO usuario, UriComponentsBuilder uriBuilder) {
		try {
			Boolean hasUsuario = usuarioService.hasUsuario(usuario.getUsername());
			if (!hasUsuario) {
				usuarioService.register(usuario);
				URI uri = uriBuilder.path("auth/usuario/{username}").buildAndExpand(usuario.getUsername()).toUri();
				return ResponseEntity.created(uri).body(usuario);
			}
			return ResponseEntity.status(HttpStatus.CONFLICT).build();
		} catch (Exception e) {
			return ResponseEntity.badRequest().build();
		}
	}

	@GetMapping("/{username}")
	public ResponseEntity<UsuarioDTO> getUsuario(@PathVariable String username) {
		Optional<Usuario> usuario = usuarioService.findByUsername(username);
		if (usuario.isPresent()) {
			return ResponseEntity.ok(new UsuarioDTO(usuario.get()));
		}

		return ResponseEntity.notFound().build();
	}
}