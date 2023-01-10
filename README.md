# Projeto clone da Digital Innovation One

#### Resumo:

        Os últimos quatro códigos que você me enviou representam quatro páginas diferentes de uma aplicação web, cada uma tem sua finalidade específica e importa diferentes componentes e estilos de outros arquivos.

    O primeiro código representa uma página inicial da aplicação, contém um botão que redireciona o usuário para a página de login.

    O segundo código representa uma página de login, onde o usuário pode inserir suas credenciais para entrar na aplicação. Ele valida os campos do formulário antes de enviar os dados, também tem um botão para redirecionar para página de cadastro.

    O terceiro código representa uma página de cadastro, onde o usuário pode criar uma conta preenchendo os campos necessários. Ele também valida os campos do formulário antes de enviar os dados e tem um botão para redirecionar para página feed.

    O quarto código representa uma página de feed, onde o usuário pode ver os dados de seu feed, como lista de cards e ranking de usuários.


##  Página Home 

![home](https://user-images.githubusercontent.com/98711190/211641253-f6773b9d-a031-4f34-9ba0-389d5f5b55d7.png)


Esse código é uma função React que representa uma página inicial de uma aplicação web. Ele importa alguns componentes de outros arquivos, como o Header e o Button, e também uma imagem (bannerImage).

A função Home usa o hook useNavigate do pacote react-router-dom para acessar uma função que permite navegar entre as páginas da aplicação. Ele define uma função chamada handleClickSignIn que é chamada quando o botão "Começar agora" é clicado e usa essa função de navegação para redirecionar o usuário para a página de login.

Dentro do return, O componente mostra os componentes importados como <Header/>, <Container> que é um container que envolve as outras tags e dentro dele mostra um <div> contendo <Title>, <TextContent> e <Button>. Há também outro <div> que mostra uma <img> que é a imagem importada no código anterior.

Os componentes <Title>, <TextContent> e <Button> são estilizados através de um arquivo de estilo importado e o <Container> também tem um estilo próprio.

##  Página de Login
           
![login](https://user-images.githubusercontent.com/98711190/211641905-0f9379f7-b1f7-4274-a71b-64ec5bf1146c.png)

        
Esse código também é uma função React que representa uma página de login de uma aplicação web. Ele importa alguns componentes de outros arquivos, como o Header, Input e Button, além de alguns ícones (MdEmail, MdLock) do pacote react-icons/md e outros pacotes de terceiros useForm, yupResolver, yup

A função Login usa o hook useNavigate do pacote react-router-dom para acessar uma função que permite navegar entre as páginas da aplicação. Também usa o hook useForm para gerenciar o estado do formulário de login e validações. Ele define uma função chamada handleClickSignUp que é chamada quando o texto "Criar Conta" é clicado e usa essa função de navegação para redirecionar o usuário para a página de cadastro.

Dentro do return, é mostrado o componente <Header/> e um <Container> que envolve duas colunas <Column> que contém alguns elementos como <Wrapper>, <Title>, <TitleLogin>, <SubtitleLogin>, <Range> que são estilizados através de um arquivo de estilo importado.

Há uma forma onde é utilizado o handleSubmit(onSubmit) para coletar os dados do formulário, nele são usado o componente <Input> que contém dois inputs, um para o email e outro para a senha, ele contém uma validação de email e a senha deve ter no mínimo 3 caracteres. Após é mostrado um botão com "Entrar" e um texto "Esqueci minha senha" e um texto "Criar Conta" que se clicado redireciona para a tela de cadastro.

## Página de Cadastro

![cadastro](https://user-images.githubusercontent.com/98711190/211641655-afdd7cf7-92bb-4691-85b8-a81bc5404693.png)

Esse código também é uma função React que representa uma página de cadastro de uma aplicação web. Ele importa alguns componentes de outros arquivos, como o Header, Input e Button, além de alguns ícones (MdEmail, MdLock, MdPerson, MdSettingsCell) do pacote react-icons/md e outros pacotes de terceiros useForm, yupResolver, yup

A função Cadastro usa o hook useNavigate do pacote react-router-dom para acessar uma função que permite navegar entre as páginas da aplicação. Também usa o hook useForm para gerenciar o estado do formulário de cadastro e validações. Ele define uma função chamada handleClickSignIn que é chamada quando o botão "CRIAR MINHA CONTA GRÁTIS" é clicado e usa essa função de navegação para redirecionar o usuário para a página de feed.

Dentro do return, é mostrado o componente <Header/> e um <Container> que envolve duas colunas <Column> que contém alguns elementos como <Wrapper>, <Title>, <TitleLogin>, <SubtitleLogin>, <Range> que são estilizados através de um arquivo de estilo importado.

Há uma forma onde é utilizado o handleSubmit(onSubmit) para coletar os dados do formulário, nele são usado o componente <Input> que contém 4 inputs, um para o nome, um para o email, outro para o celular e outro para a senha, O input de email possui uma validação de email e a senha deve ter no mínimo 3 caracteres. Após é mostrado um botão com "CRIAR MINHA CONTA GRÁTIS" e um texto "Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO." e um outro texto "Já tenho conta. Fazer login." que se clicado redireciona para a tela de login.

## Página do Feed
   ![feed](https://user-images.githubusercontent.com/98711190/211641967-7b6f5fe5-f891-4286-ac0e-e1238a126950.png)


Esse código também é uma função React que representa uma página de feed de uma aplicação web. Ele importa alguns componentes de outros arquivos, como o Header, Card e UserInfo, além de estilos importados de um arquivo "styles.js"

A função Feed rendereiza o componente <Header /> passando a propriedade autenticado={true}, o que significa que o usuário está autenticado e pode ver essa página. Também é mostrado um <Container> que envolve duas colunas <Column> que contém alguns elementos como <Title>, <TitleHighlight> e os componentes <Card> e <UserInfo> que são estilizados através do arquivo de estilo importado.

O <Column> flex={4} mostra uma lista de Cards e <Column> flex={1} mostra uma lista dos 5 usuários com maiores percentuais, usando o componente <UserInfo> que mostra uma imagem, nome e percentual de cada usuário.

# Tecnologias Usadas:

   * React: Todos os códigos são escritos em React, que é uma biblioteca JavaScript para criar interfaces de usuário.
   * React Router: Usado para navegação de rotas na aplicação.
   * React Hook Form : Utilizado para controlar e validar os formulários dos codigos 2 e 3
   *  Yup: Biblioteca utilizada junto com React Hook Form para validar os campos dos formulários com regras de validação.
   * Styles Modules : Usado para criar estilos locais para os componentes.
