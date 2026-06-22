# Como hospedar o site na Hostinger

Este projeto é um site estático em HTML, CSS e JavaScript. Não precisa de WordPress nem do construtor de sites.

## Na tela inicial da Hostinger

Na tela que pergunta "Você quer criar ou migrar um site?", clique primeiro em `Crie um novo site`.

Na etapa seguinte:

1. Se aparecer a opção para criar site em branco, site vazio, PHP/HTML ou custom code, escolha essa opção.
2. Evite criar com WordPress ou Hostinger Website Builder, porque este projeto já está pronto em HTML.
3. Se a tela insistir em WordPress/construtor e não mostrar opção de site em branco, finalize o onboarding da forma mais simples possível e depois use o `Gerenciador de Arquivos` para substituir os arquivos padrão dentro de `public_html`.
4. A opção `Eu contratei uma pessoa para me auxiliar no meu site` costuma fazer sentido quando você quer dar acesso a outra pessoa. Para este caso, não é necessária se você mesmo for subir o ZIP.

## Subir os arquivos

1. No hPanel, vá em `Websites`.
2. Abra o painel do domínio `gkribeiro.adv.br`.
3. Entre em `File Manager` ou `Gerenciador de Arquivos`.
4. Abra a pasta `public_html`.
5. Apague arquivos padrão de instalação, se existirem, como `index.html` temporário da Hostinger.
6. Faça upload do arquivo `gk-ribeiro-site.zip`.
7. Extraia o ZIP dentro de `public_html`.
8. Confira se `index.html` ficou diretamente dentro de `public_html`, e não dentro de uma subpasta.

Estrutura correta:

```text
public_html/
  index.html
  trabalhista.html
  previdenciario.html
  localizacao.html
  advogada-em-guaianases.html
  sobre.html
  contato.html
  blog.html
  robots.txt
  sitemap.xml
  assets/
  blog/
```

Estrutura errada:

```text
public_html/
  gk-ribeiro-site/
    index.html
```

Se ficar assim, mova os arquivos de dentro da subpasta para `public_html`.

## Conectar o domínio

Se o domínio foi comprado dentro da própria Hostinger, normalmente a conexão é automática ou aparece um assistente no hPanel.

Se o domínio estiver no Registro.br ou em outro provedor:

1. No hPanel, abra `Websites`.
2. Encontre o site do domínio.
3. Clique em `Check guide` ou no aviso de domínio não conectado.
4. Copie os nameservers indicados pela Hostinger.
5. No provedor do domínio, troque os servidores DNS pelos nameservers indicados.

A Hostinger informa que, para domínio registrado nela, não costuma ser necessário alterar manualmente os nameservers. Para domínio em outro provedor, ela recomenda usar os nameservers mostrados no assistente do hPanel.

## Depois de publicar

1. Acesse `https://gkribeiro.adv.br`.
2. Teste o menu, WhatsApp, blog e páginas internas.
3. Acesse `https://gkribeiro.adv.br/sitemap.xml`.
4. Quando estiver tudo certo, envie o sitemap no Google Search Console.

## Referências oficiais úteis

- Hostinger: como acessar o File Manager no hPanel.
- Hostinger: como apontar um domínio para a Hostinger.
- Hostinger: como apontar domínio do Registro.br para a Hostinger.
