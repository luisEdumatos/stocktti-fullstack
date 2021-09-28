# Sistema StockTTi - Sistema de gerenciamento de inventário de Hardware 

### Teste o sistema: Acesse https://app-stocktti.herokuapp.com/

Você poderá criar uma conta ou, caso preferir, acesse com:

Login: admin

Senha: 123456

Como está hospedado no heroku, o primeiro acesso é mais lento devido ao fato de por padrão a api e o app ficarem "desligados". 

### Container Docker

A API foi adicionada a um container Docker. Caso queira executar o container da aplicação e estiver utilizando Linux utilize o seguinte comando: 

sudo docker container run -d -p 8080:8080 luisedumatos/api-stocktti:v1

## Sobre o sistema 📋

O projeto consiste em um sistema de gerenciamento de estações de trabalhos dos clientes para empresas de TI terceirizadas. 

As empresas de TI terceirizadas geralmente atendem diversos clientes e, para poder realizar um atendimento de qualidade, o controle de informações é essencial. 

O sistema StockTTI permite que o prestador de serviço de TI possa cadastrar seus clientes e o inventário de hardware de cada um deles, podendo assim gerenciar o inventário com várias informações importantes como por exemplo as condições da máquina, sistema operacional instalado, especificações, usuário que a utiliza, etc. 

Esse controle também facilitará o trabalho da equipe de suporte para saber as condições de uma estação e o usuário relacionado a ela, chegando a conclusões relacionadas a necessidade de substituição por lentidão ou até sobre o licenciamento dos principais softwares utilizados na máquina.

## Funcionamento do sistema ⚙️

O sistema utiliza uma APIRest construida com Java e Spring. 

A API construida permite a criação de dois tipos de entidades, a Client e a Hardware conforme imagem abaixo:

![image](https://user-images.githubusercontent.com/32941370/126188474-3628b241-68b3-47aa-9ef5-8b1da692bbda.png)

Conforme apresentado na imagem, a API permite a criação de Clientes e Hardwares no modelo um para muitos, ou seja, um Cliente pode ter nenhum ou vários Hardwares associados a ele, e um Hardware para existir precisa estar associado a um cliente. 

Quando um cliente é excluído, todos os Hardwares associados a ele são excluídos juntos. 

Esta API é consumida por um Frontend feito em Angular 12. Esta interface estará acessível em breve quando o projeto for colocado em deploy. 

- Banco de Dados

No banco de dados, são criadas apenas duas tabelas, uma para Clientes e outra para Hardwares. A relação é estabelecida a partir da tabela Hardware que possui um campo do tipo integer client_id, utilizado para representar qual é o cliente dono daquele equiapamento. 
Neste banco também existe uma tabela chamada users, que armazena o usuário de utilização do sistema. 

- Perfis de desenvolvimento

A API possui no caminho \src\main\resources 3 arquivos do tipo .properties que são responsáveis por definir perfis de desenvolvimento. O arquivo application-dev.properties define as configurações do banco local H2 que é utilizado no perfil de desenvolvimento. Para o perfil de produção, o arquivo application-prod.properties define as configurações do banco de dados PostgreSQL que será utilizado a partir da implantação do sistema completo. 

- Autenticação

A autenticação do sistema utiliza o JWT nos dois lados da aplicação. A senha criada pelos usuários é transformada em um token e armazenada no banco de dados, garantindo assim integridade e segurança. 

- Ideias futuras -

Este projeto ainda está em construção e alguns detalhes serão ajustados, como especificações de campos e layout. 

Vale ressaltar também que este projeto poderá crescer ainda mais para se tornar um sistema de gestão completo, com cadastro de usuários, fornecedores, equipamentos da infraestrutura, etc.

Aguarde novas atualizações e, em caso de dúvidas, contactar o responsável por este projeto. 
