# GK Ribeiro Advocacia Trabalhista e Previdenciária

Site institucional estático para SEO local de GK Ribeiro Advocacia Trabalhista e Previdenciária, com foco em Direito Trabalhista e Direito Previdenciário em São Paulo - SP.

## Estrutura

- `index.html`: Home com proposta, áreas, atendimento local e blog.
- `trabalhista.html`: página SEO de Direito Trabalhista.
- `previdenciario.html`: página SEO de Direito Previdenciário.
- `localizacao.html`: locais de atendimento presencial em São Paulo - SP.
- `advogada-em-guaianases.html`: redirecionamento para a página de localização.
- `sobre.html`: apresentação de Greice Kelli Ribeiro, OAB/SP 387.933.
- `contato.html`: canais, endereço e mapa.
- `blog.html`: hub dos conteúdos.
- `blog/*.html`: artigos iniciais.
- `assets/css/styles.css`: estilo responsivo.
- `assets/js/main.js`: menu mobile, dark mode e ano automático.
- `assets/img/hero-gk-ribeiro.webp`: imagem principal do site.
- `assets/img/greice-ribeiro-retrato-novo.webp`: foto da advogada usada na página Sobre.
- `assets/logo/logo-gk-simples.svg`: símbolo da marca.
- `assets/logo/logo-gk-completa.svg`: assinatura completa usada no cabeçalho.
- `robots.txt` e `sitemap.xml`: base técnica para indexação.

## Como visualizar

Abra `index.html` no navegador ou rode um servidor estático local:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Domínio

O site já está configurado para o domínio `https://gkribeiro.adv.br/` em metas, Open Graph, schema, `robots.txt` e `sitemap.xml`.

Se o domínio mudar no futuro, substitua esse endereço em todos os arquivos `.html`, `robots.txt` e `sitemap.xml`.

## Google Analytics

O site usa a tag do Google Analytics / Google tag com o ID `G-6D54LRFTZN`.

Toda nova página pública deve incluir este bloco logo após a abertura de `<head>`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-6D54LRFTZN"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());

  gtag("config", "G-6D54LRFTZN");
</script>
```

O arquivo `assets/js/main.js` dispara o evento `click_whatsapp` sempre que o usuário clica em um link `wa.me/5511957314252`. Esse evento deve ser marcado como evento principal/conversão no Google Analytics e importado para o Google Ads.

## Diretriz ética usada no conteúdo

Os textos foram escritos em tom informativo, sóbrio e sem promessa de resultado, alinhados à lógica do Provimento 205/2021 do Conselho Federal da OAB sobre publicidade na advocacia.
