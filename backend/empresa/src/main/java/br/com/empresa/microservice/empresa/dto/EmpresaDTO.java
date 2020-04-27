package br.com.empresa.microservice.empresa.dto;

import java.time.LocalDate;

import org.springframework.data.domain.Page;

import br.com.empresa.microservice.empresa.model.Empresa;

public class EmpresaDTO {

	private Long id;

	private String razaoSocial;

	private String nomeFantasia;

	private String cnpj;

	private String inscricaoEstadual;

	private String telefone;

	private String email;

	private String cep;

	private String logradouro;

	private String bairro;

	private String numero;

	private String complemento;

	private MunicipioDTO municipio;

	private String contador;

	private String cnaePrincipal;

	private String regimeTributario;

	private LocalDate dataAlteracao;

	private LocalDate dataCadastro;

	private String usuarioAlteracao;

	private String usuario;

	public EmpresaDTO(Empresa empresa) {
		this.id = empresa.getId();
		this.razaoSocial = empresa.getRazaoSocial();
		this.nomeFantasia = empresa.getNomeFantasia();
		this.cnpj = empresa.getCnpj();
		this.inscricaoEstadual = empresa.getInscricaoEstadual();
		this.telefone = empresa.getTelefone();
		this.email = empresa.getEmail();
		this.cep = empresa.getCep();
		this.logradouro = empresa.getLogradouro();
		this.bairro = empresa.getBairro();
		this.numero = empresa.getNumero();
		this.complemento = empresa.getComplemento();
		this.contador = empresa.getContador();
		this.cnaePrincipal = empresa.getCnaePrincipal();
		this.regimeTributario = empresa.getRegimeTributario();
		this.dataAlteracao = empresa.getDataAlteracao();
		this.dataCadastro = empresa.getDataCadastro();
		this.usuarioAlteracao = empresa.getUsuarioAlteracao();
		this.usuario = empresa.getUsuario();

		if (empresa.getMunicipio() != null) {
			this.municipio = new MunicipioDTO(empresa.getMunicipio().getId().intValue());
		}
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public MunicipioDTO getMunicipio() {
		return municipio;
	}

	public void setMunicipio(MunicipioDTO municipio) {
		this.municipio = municipio;
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

	public LocalDate getDataAlteracao() {
		return dataAlteracao;
	}

	public void setDataAlteracao(LocalDate dataAlteracao) {
		this.dataAlteracao = dataAlteracao;
	}

	public LocalDate getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(LocalDate dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public String getUsuarioAlteracao() {
		return usuarioAlteracao;
	}

	public void setUsuarioAlteracao(String usuarioAlteracao) {
		this.usuarioAlteracao = usuarioAlteracao;
	}

	public String getUsuario() {
		return usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public static Page<EmpresaDTO> converter(Page<Empresa> empresas) {
		return empresas.map(EmpresaDTO::new);
	}
}
