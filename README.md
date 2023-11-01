# NowAle Ecommerce Admin

Esse repositório contém a parte do <b>admin</b> da loja. Para acessar a parte da <b>loja</b> clique <a href="https://github.com/caiolacerdamt/nowale-ecommerce-front">aqui</b>

Este projeto é um Ecommerce que consiste em uma Loja Online e uma parte de Administração. Na Loja, os usuários podem interagir, avaliar produtos, adicionar e excluir itens do carrinho, e realizar o checkout de pagamento usando a integração com a Stripe. A parte de Administração permite ao Administrador adicionar produtos, criar categorias, configurar informações como frete e políticas de privacidade, e escolher o produto em destaque. Todas as modificações feitas pelo administrador afetam diretamente a loja.

<br> <br>

## 💻 Tecnologias Utilizadas

<div align="center">
 <img align="center" alt="React" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" >
  <img align="center" alt="NextJs" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" >
  <img align="center" alt="TailwindCSS" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
  <img align="center" alt="MongoDB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" />
  <br> <br> <br>
  * As tecnologias React, Next.js, Tailwind CSS e MongoDB foram escolhidas por suas características específicas. O React é uma biblioteca JavaScript para construção de interfaces de usuário. O Next.js adiciona recursos avançados ao React, como renderização do lado do servidor. O Tailwind CSS permite estilizar rapidamente componentes e elementos HTML. O MongoDB é um banco de dados NoSQL orientado a documentos. Essas tecnologias foram escolhidas por sua eficiência, escalabilidade e facilidade de uso no desenvolvimento de aplicações web modernas.
</div>

<br> <br>

## 🔧 Como Rodar o Projeto

1- Clonar o projeto em sua máquina
```bash
https://github.com/caiolacerdamt/nowale-ecommerce-admin.git
```

2- Inicializá-lo no editor de texto e instalar as dependências no terminal
```bash
npm install
```

* Para que o projeto rode com suas variáveis de ambiente, você deve usar o <a href="https://github.com/caiolacerdamt/nowale-ecommerce-admin/blob/master/.env.example">.env.example</a> como base para que você construa as suas API Keys
  
3- São necessárias as seguintes API Keys
```bash
GOOGLE_ID=
GOOGLE_SECRET=
MONGODB_URI=
S3_ACCESS_KEY=
S3_SECRET_ACCESS_KEY=
```
A <b>"GOOGLE_ID"</b>e a <b>"GOOGLE_SECRET"</b> São as APIs do Google Cloud para que o NextAuth funcione corretamente. 

A <b>"MONGODB_URI"</b> é a própria URI do seu Banco MongoDB.

A <b>"S3_ACCESS_KEY"</b> e a <b>"S3_SECRET_ACCESS_KEY"</b> são as API Keys do seu Bucket na AWS para que as imagens sejam enviadas corretamente para serem armazenadas na nuvem.

4- Rode o projeto como desenvolvedor no terminal do editor de texto
```bash
npm run dev
```

5- Acessar o localhost:3000 no seu navegador
```bash
localhost:3000
```
<br> <br>

## 💼 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE.md).

<br> <br> 


## 🎇 Desafios do Projeto e Aprendizado

* Com esse projeto, pude aprender muito sobre comunicação entre <b>Cliente x Servidor</b>.

* Aprendi também sobre a integração do <b>Banco de Dados</b> na minha aplicação. Por ser o meu primeiro projeto onde utilizei um Banco de Dados, foi um enorme desafio aprender a fazer o tal do <b>CRUD</b> nas chamadas da API e como interagir com ele para que as informações do Banco pudessem ser acessadas na tela.

* Consegui ver sobre o <b>NextAuth</b>, que permite a autenticação dos usuários com o Google, Apple entre outros e como essa autenticação ajuda na resolução de problemas.

* Pude ver mais também sobre a comunicação do <b>Back-end e do Front-end</b>, por ser um projeto <b>Fullstack</b>, tive que aprender um pouco das duas partes.

<br> <br>

## 🤝 Contribuição no Projeto

Para contribuir com o projeto, siga estas etapas:

1- Faça um fork do repositório e clone-o em sua máquina local.

2- Crie uma nova branch para suas alterações: ```bash git checkout -b minha-contribuicao```.

3- Faça as alterações desejadas e teste-as.

4- Commit suas alterações: ```bash git commit -m "Minha contribuição"```.

5- Envie suas alterações para o repositório remoto: ```bash git push origin minha-contribuicao```.

6- Abra um pull request no GitHub, descrevendo suas alterações e explicando o motivo da contribuição.

<br> <br>

## 📸 Algumas Fotos do Projeto no Mobile
<div align="center">
    <img alt="Página Principal" width="200" height="400" src="https://caiolmt-next-ecommerce.s3.us-east-1.amazonaws.com/mobile%20%283%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQCcn17%2BnQCws5uup%2BoQ4WzlRIU9BV5mnKKFT8fi%2FiAbRAIgKJ1sIzG3%2FaInRPM1A4yNdW3lfVEYbi61Eu7NoiKgcOAq7QII%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzU2ODIyMzgwNTIiDEHJrZAjnoRvtKz82CrBAoOjRcEsA6lDTGLf%2BPahSe9Nd%2FkPmJUgp6qbtYcomNsXcFWqjDdfznrRA0r1dmQPCLGgAyW4ovTG8DzZljFP9PCCGTyfxXav19ShP6JC8Qoe7aST6sgpuLthYTYwN%2B5Y0p9SI6g1vXcpbQcoelNhW8KApEHw3VjBK8vWYziPR%2BHlL17mtaj9O5IAyXFylfTxBJo%2FQgPnuv%2FUE9zH3ar6GmxM8bVoCpNE6zayurMSWiePcy7XgCvokjOy4TzgCuNkYKAAJvluN5nXRLnQ%2FSSjhHiAZv%2B3iIr8Vqbq4iTOT2m%2BIU7fx9ehYuPcOgyjQGrssim9Li5E1GUaA4yXaLmLP3HM8FdaIBUyjN0SAfKSta%2FjCZsRYK%2FieG1Vwt8YjXdKjmWILx1EnKtfEOacO2XbN6wPMzxsJAIEPKH9jle1yZqcRDDWzoaqBjqzApEaYSd5Ha8iVlNgHVMMoCG735yyVkWi%2Bdgs5vbkX8558JGDqaVnrlP2UhrRB6iJCLYdTmq6cTPuqkIqNnNLFLl4VfPWL8pt8epPfyBARHGdHmfti70VbRNf9UBCRA4elDD6FXTAxdD2LkjMN8nMkrAu5TTgawuwOyRr6jz9pBeLR9w2MWTq5%2BhmY0dpTTZt7LjEVSRrceg%2B8tyALL5rQJw7yOVQxJc0l8RtTzakjctUXVJ6yrLsokydIlFpo9DbtH647MUdyR6mGHRYr9rF2%2BegpWiCqhX9t3QfuMjJ0SoVE%2FKHiSpsmMVdE3D6uCJrR6377cb45Jsa%2BsN8q%2BgRQoFYbaL9W4qiu67o8XpOvi%2B95z%2Bg2ZgGPX4czElqOuCmYn3RryGpQBsAqH1r6PPflmycnaI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231101T012918Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5QG65ZSHO2NBXF6%2F20231101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=112ab3f7607395999370a3a276d4222524a6fd0e14a6598ac5a5368e140bd7ab">

  <img alt="Página dos Produtos" width="200" height="400" src="https://caiolmt-next-ecommerce.s3.us-east-1.amazonaws.com/mobile%20%284%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQCcn17%2BnQCws5uup%2BoQ4WzlRIU9BV5mnKKFT8fi%2FiAbRAIgKJ1sIzG3%2FaInRPM1A4yNdW3lfVEYbi61Eu7NoiKgcOAq7QII%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzU2ODIyMzgwNTIiDEHJrZAjnoRvtKz82CrBAoOjRcEsA6lDTGLf%2BPahSe9Nd%2FkPmJUgp6qbtYcomNsXcFWqjDdfznrRA0r1dmQPCLGgAyW4ovTG8DzZljFP9PCCGTyfxXav19ShP6JC8Qoe7aST6sgpuLthYTYwN%2B5Y0p9SI6g1vXcpbQcoelNhW8KApEHw3VjBK8vWYziPR%2BHlL17mtaj9O5IAyXFylfTxBJo%2FQgPnuv%2FUE9zH3ar6GmxM8bVoCpNE6zayurMSWiePcy7XgCvokjOy4TzgCuNkYKAAJvluN5nXRLnQ%2FSSjhHiAZv%2B3iIr8Vqbq4iTOT2m%2BIU7fx9ehYuPcOgyjQGrssim9Li5E1GUaA4yXaLmLP3HM8FdaIBUyjN0SAfKSta%2FjCZsRYK%2FieG1Vwt8YjXdKjmWILx1EnKtfEOacO2XbN6wPMzxsJAIEPKH9jle1yZqcRDDWzoaqBjqzApEaYSd5Ha8iVlNgHVMMoCG735yyVkWi%2Bdgs5vbkX8558JGDqaVnrlP2UhrRB6iJCLYdTmq6cTPuqkIqNnNLFLl4VfPWL8pt8epPfyBARHGdHmfti70VbRNf9UBCRA4elDD6FXTAxdD2LkjMN8nMkrAu5TTgawuwOyRr6jz9pBeLR9w2MWTq5%2BhmY0dpTTZt7LjEVSRrceg%2B8tyALL5rQJw7yOVQxJc0l8RtTzakjctUXVJ6yrLsokydIlFpo9DbtH647MUdyR6mGHRYr9rF2%2BegpWiCqhX9t3QfuMjJ0SoVE%2FKHiSpsmMVdE3D6uCJrR6377cb45Jsa%2BsN8q%2BgRQoFYbaL9W4qiu67o8XpOvi%2B95z%2Bg2ZgGPX4czElqOuCmYn3RryGpQBsAqH1r6PPflmycnaI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231101T012959Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5QG65ZSHO2NBXF6%2F20231101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6940334312fc7024a0f105949cfb28f727346d9c756c9f8f682570c15881917d">

  <img alt="Formulário de Criação dos Produtos" width="200" height="400" src="https://caiolmt-next-ecommerce.s3.us-east-1.amazonaws.com/mobile%20%285%29.png?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXNhLWVhc3QtMSJHMEUCIQCcn17%2BnQCws5uup%2BoQ4WzlRIU9BV5mnKKFT8fi%2FiAbRAIgKJ1sIzG3%2FaInRPM1A4yNdW3lfVEYbi61Eu7NoiKgcOAq7QII%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw0NzU2ODIyMzgwNTIiDEHJrZAjnoRvtKz82CrBAoOjRcEsA6lDTGLf%2BPahSe9Nd%2FkPmJUgp6qbtYcomNsXcFWqjDdfznrRA0r1dmQPCLGgAyW4ovTG8DzZljFP9PCCGTyfxXav19ShP6JC8Qoe7aST6sgpuLthYTYwN%2B5Y0p9SI6g1vXcpbQcoelNhW8KApEHw3VjBK8vWYziPR%2BHlL17mtaj9O5IAyXFylfTxBJo%2FQgPnuv%2FUE9zH3ar6GmxM8bVoCpNE6zayurMSWiePcy7XgCvokjOy4TzgCuNkYKAAJvluN5nXRLnQ%2FSSjhHiAZv%2B3iIr8Vqbq4iTOT2m%2BIU7fx9ehYuPcOgyjQGrssim9Li5E1GUaA4yXaLmLP3HM8FdaIBUyjN0SAfKSta%2FjCZsRYK%2FieG1Vwt8YjXdKjmWILx1EnKtfEOacO2XbN6wPMzxsJAIEPKH9jle1yZqcRDDWzoaqBjqzApEaYSd5Ha8iVlNgHVMMoCG735yyVkWi%2Bdgs5vbkX8558JGDqaVnrlP2UhrRB6iJCLYdTmq6cTPuqkIqNnNLFLl4VfPWL8pt8epPfyBARHGdHmfti70VbRNf9UBCRA4elDD6FXTAxdD2LkjMN8nMkrAu5TTgawuwOyRr6jz9pBeLR9w2MWTq5%2BhmY0dpTTZt7LjEVSRrceg%2B8tyALL5rQJw7yOVQxJc0l8RtTzakjctUXVJ6yrLsokydIlFpo9DbtH647MUdyR6mGHRYr9rF2%2BegpWiCqhX9t3QfuMjJ0SoVE%2FKHiSpsmMVdE3D6uCJrR6377cb45Jsa%2BsN8q%2BgRQoFYbaL9W4qiu67o8XpOvi%2B95z%2Bg2ZgGPX4czElqOuCmYn3RryGpQBsAqH1r6PPflmycnaI%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231101T013117Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAW5QG65ZSHO2NBXF6%2F20231101%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e893d3af3855474bbf05cec65d59e9795e25016785bbb77982252e2a04cc0af6">
</div>

<br> <br>

 <div align="center">
  <h2> 🖋 Assinatura: </h2>
  <a href="https://github.com/caiolacerdamt"><img align="center" alt="CaioPNG" width="140" src="https://user-images.githubusercontent.com/122616615/225480551-032ab453-4f73-4978-b666-9432ba0e68ba.jpeg"><br><sub align="center">Caio Lacerda</sub>
  </a><br><br>
  <a href="https://github.com/caiolacerdamt"><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
  </div>
  
  <div align="center">
    <h2> Você também pode me achar: </h2>
<a href= https://www.linkedin.com/in/caiolacerdamt/><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>
 <a href="https://instagram.com/caiolmt" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
</div>
  


