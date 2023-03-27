# AllkabotBlog
Teste para Dev Front-End Alkabot - Front-End test to Dev

**Linhas Gerais**

Esta apllicação buscou atender da forma mais simples e objetiva o que foi solicitado para o Cenário-1.
Em termos visuais, buscou-se criar um layout com pouca distração, poucos elementos,
para que o usuário possa concentrar-se na leitura do texto dos posts.

**Recursos Utilizados**

Framework de desenvolvimento: Angular 14
Linguagem de Marcação: HTML
Linguagens de Programação: TypeScript e Javascript
Estilização: CSS
Biblioteca de Estilos: Bootstrap

**Instalação e Inicialização (local e via Internet)**

Para instalar os arquivos necessários para executar a aplicação, seguir os passos de instalação do
AngularCLI, conforme o link abaixo, em sua IDE. Originalmente a aplicação foi desenvolvida usando o
Visual Studio Code.

[Instalação do AngularCLI (em inglês)](https://angular.io/guide/setup-local)

A biblioteca Bootstrap não precisa ser instalada pois ela é acessada pela página index.html através
dos links CDN já pré-inseridos no código da página.

Para executar localmente basta clonar ou fazer um fork deste repositório para uma pasta local.
Abra esta pasta com sua IDE e pela linha de comando navegue até o diretório alkabot-blog/alkabot-blog.
Execute o comando `ng serve -o` neste local. A aplicação deverá ser executada no endereço `http://localhost:4200`.

Também é possivel executar a aplicação pela internet através da URL [https://alkabot-blog.vercel.app/](https://alkabot-blog.vercel.app/).


**Utilização**

Ao acessar a URL da aplicação, é exibida a lista de posts, mostrando nome do autor, id do post e id
do usuário.

No topo, um botão "Menu do AlkabotBlog" dá acesso a um menu "offcanvas" que se sobrepõe à lista de
posts, permitindo acesso a outras opções como por exemplo cadastrar um novo usuário (**esta opção não
está implementada, constando apenas como exemplo**). Para fechar o menu e retornar à lista de posts
basta clicar no "X" à direita do menu.

O botão "Comentários" permite o acesso aos comentários - exibidos em um modal - referentes àquele post específico, onde são
listdos o id do comentário e o id do autor do comentário, bem como o seu email. Para fechar o modal, basta ir ao final da
listagem de comentários e clicar no botão vermelho "Fechar Comentários".
