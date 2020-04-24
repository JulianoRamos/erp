package br.com.empresa.microservice.empresa.form;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

import br.com.empresa.microservice.empresa.model.Empresa;
import br.com.empresa.microservice.empresa.service.EmpresaService;

public class UpdateEmpresaForm {

	@NotNull @NotEmpty @Length(max = 60)
	private String razaoSocial;

	@NotNull @NotEmpty @Length(max = 60)
	private String nomeFantasia;

	@Length(max = 14)
	private String cnpj;

	@Length(max = 14)
	private String inscricaoEstadual;
	
	private String telefone;

	private String email;

	private String cep;
	
	private String logradouro;

	private String bairro;

	private String numero;
	
	private String complemento;
	
	private String contador;

	private String cnaePrincipal;

	@NotNull @NotEmpty
	private String regimeTributario;

	public String getRazaoSocial() {
		return razaoSocial;
	}

	public void setRazaoSocial(String razaoSocial) {
		this.razaoSocial = razaoSocial;
	}

	public String getNomeFantasia() {
		return nomeFantasia;
	}

	public void setNomeFantasia(String nomeFantasia) {
		this.nomeFantasia = nomeFantasia;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getInscricaoEstadual() {
		return inscricaoEstadual;
	}

	public void setInscricaoEstadual(String inscricaoEstadual) {
		this.inscricaoEstadual = inscricaoEstadual;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCep() {
		return cep;
	}

	public void setCep(String cep) {
		this.cep = cep;
	}

	public String getLogradouro() {
		return logradouro;
	}

	public void setLogradouro(String logradouro) {
		this.logradouro = logradouro;
	}

	public String getBairro() {
		return bairro;
	}

	public void setBairro(String bairro) {
		this.bairro = bairro;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public String getComplemento() {
		return complemento;
	}

	public void setComplemento(String complemento) {
		this.complemento = complemento;
	}

	public String getContador() {
		return contador;
	}

	public void setContador(String contador) {
		this.contador = contador;
	}

	public String getCnaePrincipal() {
		return cnaePrincipal;
	}

	public void setCnaePrincipal(String cnaePrincipal) {
		this.cnaePrincipal = cnaePrincipal;
	}

	public String getRegimeTributario() {
		return regimeTributario;
	}

	public void setRegimeTributario(String regimeTributario) {
		this.regimeTributario = regimeTributario;
	}

	public Empresa update(Long id, EmpresaService empresaService) {
		Empresa empresa = empresaService.getOne(id);
		empresa.setRazaoSocial(razaoSocial);
		empresa.setNomeFantasia(nomeFantasia);
		empresa.setCnpj(cnpj);
		empresa.setInscricaoEstadual(inscricaoEstadual);
		empresa.setTelefone(telefone);
		empresa.setEmail(email);
		empresa.setCep(cep);
		empresa.setLogradouro(logradouro);
		empresa.setBairro(bairro);
		empresa.setNumero(numero);
		empresa.setComplemento(complemento);
		empresa.setContador(contador);
		empresa.setCnaePrincipal(cnaePrincipal);
		empresa.setRegimeTributario(regimeTributario);
		return empresa;
	}
}
