---
layout: post
title: "JPA (Java Persistence API)"
description: "Conceito do JPA (Java Persistence API)"
image: "https://res.cloudinary.com/dxyyhadjr/image/upload/v1528070388/my/images_blog/jpa.jpg"
date: 2018-11-06 19:00:00
main-class: "blog"
twitter_text: "Conceito do JPA (Java Persistence API)"
introduction: "Conceito do JPA (Java Persistence API)"
category: ["java", "persistence", "api"]
tags: ["java", "persistence", "api"]
reviser: []
---

### Introdução à JPA (Java Persistence API)

JPA é uma <a href="#"> **framework** </a> fundamentado em POJOs (Plan Old Java Objects), e o que seria esse tal POJOs, para compreender isto devemos ter em mente que ao redor do mundo existem diversos desenvolvedores de <a href="#"> **software** </a> que estão a resolver problemas através de uma linguagem de programação e a cada dia que passa essas necessidade tem sido exigida com mais velocidade em um curto prazo.
Portanto, quando foi compreendido que essas necessidades de resolver os mesmos problemas eram recorrentes em todo o mundo, profissionais que utilizam linguagem que possui o conceito de <a href="#"> **orientação a objetos** </a> criaram os padrões de projeto e hoje são empregados em sistemas e exigidos por diversas empresas do ramo de TI (Tecnologia da Informação), pois já foram exaustivamente testados e aprovados.
O conceito ficou tão consolidado que acabou sendo utilizado para solucionar problemas que não provinham do ramo de TI.
Devido a existência de muitos padrões de projetos por muitas vezes fica a dúvida de qual usar, quando usar e qual a real diferença entre alguns deles. Por esse motivo necessitamos de compreender a diferença entre os padrões <a href="http://vgodoy.com.br/padroes-po-pojo-bo-dto-vo/" title="Compreendendo padrões PO, POJO, BO, DTO e o VO"> **PO (Persistent Object)** </a>, <a href="http://vgodoy.com.br/padroes-po-pojo-bo-dto-vo/" title="Compreendendo padrões PO, POJO, BO, DTO e o VO"> **POJO (Plain Old Java Object)** </a>, <a href="http://vgodoy.com.br/padroes-po-pojo-bo-dto-vo/" title="Compreendendo padrões PO, POJO, BO, DTO e o VO"> **BO (Business Object)** </a>, <a href="http://vgodoy.com.br/padroes-po-pojo-bo-dto-vo/" title="Compreendendo padrões PO, POJO, BO, DTO e o VO"> **DTO (Data Transfer Object)** </a> e o <a href="http://vgodoy.com.br/padroes-po-pojo-bo-dto-vo/" title="Compreendendo padrões PO, POJO, BO, DTO e o VO"> **VO (Value Object)** </a> para poder entender a base que está fundamentada o JPA.

Compreendendo os Padrões citados acima conseguimos entender a base do JPA podemos observar que não é um framework somente para Mapeamento Objeto-Realcional(ORM-Object-Relational Mapping) ele proporciona muitas outras funcionalidades e facilidades por isso podemos observar que quase todas as aplicações de grande porte utilizam o JPA para fazer a persistência de dados.

Falar de como o JPA surgiu, ou seja, um pouco da História, tudo começou por causa da complexidade que tinha-se para implementar uma aplicação Java, portanto quanto vamos analisar a especificação <a href="#"> **Java EE** </a> 5 é perceptível que o foco foi proporcionar uma facilidade para o desenvolvimento de aplicações JEE 5.
O <a href="#"> **EJB (Enterprise Java Bean)** </a> foi que iniciou esse processo ao permitir que ficasse mais fácil e mais produtivos de se usar e a solução adotada para a problemática de usabilidade foi removendo os requisitos de implementação mais onerosos dos <a href="#"> **Session Beans** </a> e <a href="#"> **Message-Drive Beans** </a> sendo assim os componentes permanecem como POJOS porem o maior problema era com o <a href="#"> **Entity Beans** </a>, portanto a única maneira foi começar do zero, deixando os Entity Beans separados e inclui um novo modelo de persistência e como sempre uma ferrameta surgi para resolver problemas e o JPA nasceu para resolver os problemas com persistência e sua construção foi através de desenvolvedores experientes que já haviam participado de outras implementações referente a persistência.
Foi então que os líderes de soluções de mapeamento objeto relacionais padronizaram seus produtos os primeiros a iniciar esse processo com o EJB foi <a href="#"> **Hibernate** </a> e <a href="#"> **TopLink** </a> o atual <a href="#"> **EclipseLink** </a> e não parou por ai na versão 2.0 do JPA é incluído o <a href="#"> **Java Persistence Query Language (JPQL)** </a>, a <a href="#"> **API Criteria** </a> que é utilizada para consultas dinâmicas, a capacidade adicional de mapeamento entre outras funcionalidades e continua a ser melhorada sempre.

Algumas das funcionalidades que se destacam no JPA são:

- **POJOS Persistentes:** são objetos simples que não existe a necessidade de herança de interfaces ou classes externas, um objeto que possua um construtor default pode ser persistido e além disto o ORM com JPA pode ser feito através de anotações ou um <a href="#"> **XML** </a> externo.

- **Consultas em Objetos:** as consultas podem ser feitas por JPQL que é derivado do <a href="#"> **EJB QL** </a> essas são transformadas em <a href="#"> **SQL** </a>.

- **Configuração simples:** O JPA oferece diversas caraterísticas que são totalmente configuráveis sendo através de anotações, XML ou ambas, as anotações são fáceis de usar e pelo fato do JPA já possuir valores pré-estabelecido é fácil de utilizar basta algumas anotações podemos pensar assim por sua facilidade isso no começo do projeto é tranquilo, porém com o passar do tempo e o crescimento do projeto podemos sofrer com alguns problemas ao longo do projeto, por isso a necessidade de estudar bem e saber como está utilizando e estruturar bem já pensando no crescimento para que não venhamos a sofrer mais na frente.

- **Integração e Teste:** Existem algumas dificuldades para testar as aplicações que estão rodando em um servidor de aplicação isto não é tão simples, portanto com uma API trabalhando fora do servidor de aplicação conseguimos fazer com que o JPA possa trabalhar sem um servidor de aplicação assim facilitando <a href="#"> **testes unitários** </a>.

Principais Anotações e Elementos do presistence.xml referente ao JPA.

| Anotação | Elemento | Atributos | Descrição
|---
| @Entity | Class | name = < nome*dado> (Opcional) | Identifica a classe como Entidade JPA.
| @Id | Propriedade | - | Identifica a propriedade como chave primaria.
| @GeneratedValue | Propriedade | strategy = < GenerationType> (estrategia_geracao_chave_primaria), generator = < nome_gerador_chave_primaria> (Opcional) | Geração de valores pelo Banco de Dados.
| @SequenceGenerator | Propriedade | name = < nome_dado> (Obrigatório), allocationSize = < quantidade_incrementada> (Opcional), catalog = < catalog_gerador_sequencia> (Opcional), initalValue = < valor_inicial_objeto_sequencia_comecar_gerar> (Opcional), schema = < esquema_gerador_sequencia> (Opcional), sequenceName = < nome_sequencia_banco> (Opcional) | Identifica a sequência utilizada na geração de valores do campo.
| @Enumerated | Propriedade | value = < tipo_enum> | Identifica a propriedade como Enum a ser guardado no banco.
| @Temporal | Propriedade | value = < tipo_usado_mapeamento> | Identifica a propriedade como tipo DATA, porém com a nova API de Data que saiu a partir do Java 8 não é necessário utiliza-la.  
| @ManyToOne | Propriedade | cascade = < operacoes_cascata_destino_associacao> (Opcional), fetch = < associacao_carregada_quando_buscada> (Opcional), optional = < associacao_optional> (Opcional), targetEntity = < classe_destino_associacao> (Opcional) | Tipo de relacionamento entre objetos. \_MappedBy* sinaliza relacionamento bidirecional. fetch=FetchType.EAGER FetchType.LAZY.
| @ManyToMany | Propriedade | cascade = < operacoes*cascata_destino_associacao> (Opcional), fetch = < associacao_carregada_quando_buscada> (Opcional), optional = < associacao_optional> (Opcional), targetEntity = < classe_destino_associacao> (Opcional) | Tipo de relacionamento entre objetos. \_MappedBy* sinaliza relacionamento bidirecional. fetch=FetchType.EAGER FetchType.LAZY.
| @OneToOne | Propriedade | cascade = < operacoes*cascata_destino_associacao> (Opcional), fetch = < associacao_carregada_quando_buscada> (Opcional), mappedBy=< campo_possui_relacionamento> (Opcional), optional = < associacao_optional> (Opcional), orphanRemoval = < remove_entidades> (Opcional), targetEntity = < classe_destino_associacao> (Opcional) | Tipo de relacionamento entre objetos. \_MappedBy* sinaliza relacionamento bidirecional. fetch=FetchType.EAGER FetchType.LAZY.
| @OneToMany | Propriedade | cascade = < operacoes*cascata_destino_associacao> (Opcional), fetch = < associacao_carregada_quando_buscada> (Opcional), mappedBy=< campo_possui_relacionamento> (Opcional), orphanRemoval = < remove_entidades> (Opcional), targetEntity = < classe_destino_associacao> (Opcional) | Tipo de relacionamento entre objetos. \_MappedBy* sinaliza relacionamento bidirecional. fetch=FetchType.EAGER FetchType.LAZY.
| @JoinColumn | Propriedade | columnDefinition = < fragmento_sql_gerador_ddl_coluna> (Opcional), insertable = < se_coluna_incluida_instrucoes_sql_insert> (Opcional), name = < nome_dado> (Opcional), nullable = < se_coluna_chave_estrangeira_anulavel> (Opcional), referencedColumnName = < nome_coluna_referenciada_por_coluna_chave_estrangeira> (Opcional), table = < nome_tabela_que_contem_a_coluna> (Opcional), unique = < se_propriedade_e_uma_chave_exclusiva> (Optional), updatable = < se_coluna_esta_incluida_instrucoes_sql_update> | Restrição de valor único com @OneToOne.
| @Column | Propriedade | name = < nome_coluna> (Opcional), columnDefinition = < fragmento_sql_gerador_ddl_coluna> (Opcional), unique = < se_propriedade_e_uma_chave_exclusiva> (Opcional), insertable = < se_coluna_incluida_instrucoes_sql_insert> (Opcional), length = < comprimento_coluna> (Opcional), nullable = < se_coluna_banco_dados_anulavel> (Opcional), precission = < precisao_coluna_decimal> (Opcional), scale = < ecala_coluna_decimal> (Opcional), table = < nome_tabela_que_contem_a_coluna> (Opcional), updatable = < se_coluna_esta_incluida_instrucoes_sql_update> (Opcional) | Restrição de valor único com @OneToOne.

| Strategy - estratégia de geração de ID
|---
| GeneationType.AUTO | Valor padrão, deixa cm o provedor de persistência a escolha da estratégia mais adequada de acordo com o bando de dados.
| GeneationType.IDENTITY | Informamos ao provedor de persistência que os valores a serem atribuídos ao identificador único serão gerados pela coluna de auto Incremento do banco de dados podem não suportar essa opção.
| GeneationType.SEQUENCE | Informamos ao provedor de persistência que os valores serão gerados a partir de uma sequence. Caso não seja especificado um nome para a sequence, será utilizada uma sequence padrão, a qual será global, para todas as entidades. Caso uma sequence seja especificada, o provedor passará a adotar essa sequence para criação das chaves primárias. Alguns bancos de dados podem não suportar essa opção.
| GeneationType.TABLE | Com a opção TABLE é necessário criar uma tabela para gerenciar as chaves primárias. Por causa da sobrecarga de consultas necessárias para manter a tabela atualizada, essa opção é pouco recomendada.

| Enumerated - enumerações
|---
| @Enumerated(EnumType.STRING) | Armazenará o valor com String.
| @Enumerated(EnumType.ORDINAL) | Armazenará com número, posição no Enum.

| Temporal – campo tipo Data
|---
| TemporalType DATE | Java.sql.Date
| TemporalType TIME | java.sql.Time
| TemporalType TIMESTAMP | java.sql.Timestamp

| persistence.xml
|---
| Persistence-unit name =”nome” | Raiz, identificar o nome.
| < provider>org.hibernate.jpa.HibernatePersistenceProvider< /provider> | Implementação do JPA.
| < class>br.com.exemplo.Produto< /class> | Entidades da aplicação. Informar para cada entidade.
| properties | Identificação das propriedades.
| < property name=”javax.persistence.jdbc.driver” value=”com.mysql.jdbc.Driver” /> | Driver de banco utilizado. Neste exemplo está sendo utilizado o banco de dados MySQL poderia ser o PostgreSQL por exemplo ou um outro de sua preferência porem o drive muda de um para o outro.
| < property name=”javax.persistence.url” value =”jdbc:mysql://localhosts/nome_do_banco” /> | URL do banco.
| < property name =”javax.persistence.user” value =”root” /> | Login.
| < property name =”javax.persistence.password” value =”admin” /> | Senha.
| < property name=”hibernate.dialect” value=”org.hibernate.dialect.MySQL5InnoDBDialect” /> | Dialeto utilizado. OBS: propriedade do Hibernate.
| < property name="hibernate.show_sql" value="true" /> | Log do SQL. OBS: propriedade do Hibernate.
| < property name="hibernate.format_sql" value="true" /> | Formatação do SQL gerado pelo Log do SQL. OBS: propriedade do Hibernate.
| < property name="hibernate.hbm2ddl.auto" value="update" /> | Sincronização do modelo com o banco de dados, podendo atualiza o banco, gera as tabelas se for preciso. São as opções disponíveis: validate: valida o schema, não faz mudanças no banco de dados. update: faz updade o schema. create: cria o schema, destruindo dados anteriores. create-drop: drop o schema quando ao terminar a sessão. none: desabilita. OBS: propriedade do Hibernate.

### Biografia

- MICROSYSTEMS, Sun. **Entity**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/Entity.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **Id**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/Id.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **GeneratedValue**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/GeneratedValue.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **SequenceGenerator**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/SequenceGenerator.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **Enumerated**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/Enumerated.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **Temporal**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/Temporal.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **ManyToOne**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/ManyToOne.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **ManyToMany**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/ManyToMany.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **OneToOne**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/OneToOne.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **OneToMany**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/OneToMany.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **JoinColumn**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/6/api/javax/persistence/JoinColumn.html>. Acesso em 06 de nov. de 2018.
- MICROSYSTEMS, Sun. **Column**. 2007, Oracle. Disponível em: <https://docs.oracle.com/javaee/5/api/javax/persistence/Column.html>. Acesso em 06 de nov. de 2018.
- CARLOS, Joao. **Principais Anotações - JPA**. 2018, Linkedin. Disponível em: <https://www.linkedin.com/pulse/principais-anota%C3%A7%C3%B5es-jpa-joao-carlos>. Acesso em 06 de nov. de 2018.
- MEDEIROS, Higor. **Introdução à JPA - Java Persistence API**. 2013, DevMedia. Disponível em: <https://www.devmedia.com.br/introducao-a-jpa-java-persistence-api/28173>. Acesso em 07 de nov. de 2018.
- DAS, Aditi. **Understanding JPA, Part 1: The object-oriented paradigm of data persistence**. 2017, JavaWorld. Disponível em: <https://www.javaworld.com/article/2077817/java-se/understanding-jpa-part-1-the-object-oriented-paradigm-of-data-persistence.html>. Acesso em 07 de nov. de 2018.
- MIHÁLYI, Ondro. **Figura JPA**. 2016, .Lost in Coding. Disponível em: <https://i2.wp.com/ondro.inginea.eu/wp-content/uploads/2016/02/java-persistence-api-jpa-step-by-step-4-728.jpg?w=596&ssl=1>. Acesso em 07 de nov. de 2018.
- MIHÁLYI, Ondro. **JPQL Enhancements in JPA 2.1 and JAVA EE7 - join on**. 2016, .Lost in Coding. Disponível em: <https://ondro.inginea.eu/index.php/jpql-enhancements-in-jpa-2-1-and-java-ee-7-part-1/>. Acesso em 07 de nov. de 2018.
- ORT; BISWAS, Ed; Rahul. **The Java Persistence API - A Simpler Programming Model for Entity Persistence**. 2006, Oracle. Disponível em: <https://www.oracle.com/technetwork/articles/javaee/jpa-137156.html>. Acesso em 07 de nov. de 2018.
- CONTEÚDO Oracle. **GlassFish Server Application Development Guide**. ORACLE. Disponível em: <https://docs.oracle.com/cd/E26576_01/doc.312/e24930/jpa.htm#GSDVG00138>. Acesso em 07 de nov. de 2018.
