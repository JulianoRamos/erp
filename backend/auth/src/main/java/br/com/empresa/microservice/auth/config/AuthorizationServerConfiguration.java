package br.com.empresa.microservice.auth.config;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.token.store.JdbcTokenStore;

@Configuration
public class AuthorizationServerConfiguration extends AuthorizationServerConfigurerAdapter {

	private static PasswordEncoder encoder;

	private String clientId = "erp";

	private String[] authorizedGrantTypes = { "password", "refresh_token" };

	private String[] scopes = { "web", "mobile" };

	private String secret = "!cos8D#3nd";

	private Integer accessTokenValiditySeconds = 1800;

	@Autowired
	DataSource dataSource;

	@Autowired
	@Qualifier("authenticationManagerBean")
	private AuthenticationManager authenticationManager;

	@Bean
	public JdbcTokenStore tokenStore() {
		return new JdbcTokenStore(dataSource);
	}

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints.authenticationManager(this.authenticationManager).tokenStore(tokenStore());
	}

	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory().withClient(clientId).secret(encoder.encode(secret))
				.authorizedGrantTypes(authorizedGrantTypes).scopes(scopes)
				.accessTokenValiditySeconds(accessTokenValiditySeconds);
	}

	@Bean
	public PasswordEncoder passwordEncoder() {
		if (encoder == null) {
			encoder = new BCryptPasswordEncoder();
		}
		return encoder;
	}
}