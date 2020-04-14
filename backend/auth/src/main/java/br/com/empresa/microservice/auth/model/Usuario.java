package br.com.empresa.microservice.auth.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

@Entity
public class Usuario implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(updatable = false, nullable = false)
	private String username;

	private String password;

	private String nomeCompleto;

	private boolean activated;

	@Column(name = "activationkey")
	private String activationKey;

	@Column(name = "resetpasswordkey")
	private String resetPasswordKey;

	@ManyToMany
	@JoinTable(name = "usuario_authority", joinColumns = @JoinColumn(name = "username"), inverseJoinColumns = @JoinColumn(name = "authority"))
	private List<Authority> authorities;

	public Usuario() {
	}

	public Usuario(String username, String password, boolean activated, String nomeCompleto, String activationKey,
			String resetPasswordKey, List<Authority> authorities) {
		this.username = username;
		this.password = password;
		this.nomeCompleto = nomeCompleto;
		this.activated = activated;
		this.activationKey = activationKey;
		this.resetPasswordKey = resetPasswordKey;
		this.authorities = authorities;
	}

	public Usuario(Usuario usuario) {
		this.username = usuario.getUsername();
		this.password = usuario.getPassword();
		this.nomeCompleto = usuario.getNomeCompleto();
		this.activated = usuario.isActivated();
		this.activationKey = usuario.getActivationKey();
		this.resetPasswordKey = usuario.getResetPasswordKey();
		this.authorities = usuario.getAuthorities();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getNomeCompleto() {
		return nomeCompleto;
	}

	public void setNomeCompleto(String nomeCompleto) {
		this.nomeCompleto = nomeCompleto;
	}

	public boolean isActivated() {
		return activated;
	}

	public void setActivated(boolean activated) {
		this.activated = activated;
	}

	public String getActivationKey() {
		return activationKey;
	}

	public void setActivationKey(String activationKey) {
		this.activationKey = activationKey;
	}

	public String getResetPasswordKey() {
		return resetPasswordKey;
	}

	public void setResetPasswordKey(String resetPasswordKey) {
		this.resetPasswordKey = resetPasswordKey;
	}

	public List<Authority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<Authority> authorities) {
		this.authorities = authorities;
	}
}