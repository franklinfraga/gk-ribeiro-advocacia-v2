# Resumo do projeto - GK Ribeiro Advocacia

Este repositório contém o site institucional da **GK Ribeiro Advocacia Trabalhista e Previdenciária**, criado como uma landing page/site estático com foco em **SEO local**, presença profissional no Google e captação de contatos qualificados via WhatsApp.

O projeto foi desenvolvido para apoiar a presença digital da Dra. Greice Kelli Ribeiro em São Paulo - SP, com destaque para atuação em Direito Trabalhista e Direito Previdenciário, atendimento presencial e online, páginas otimizadas por área de atuação e estrutura preparada para Google Analytics, Google Ads, Search Console e Google Perfil da Empresa.

## Objetivo

- Construir uma presença local para buscas relacionadas a advocacia trabalhista e previdenciária em São Paulo - SP.
- Reforçar a autoridade da marca **GK Ribeiro Advocacia Trabalhista e Previdenciária**.
- Direcionar visitantes para contato pelo WhatsApp.
- Organizar as principais informações de localização, áreas de atuação, perfil profissional e conteúdos de blog.
- Manter uma base simples para futuras páginas e artigos otimizados para SEO.

## Dados principais

- Site: `https://gkribeiro.adv.br`
- Nome da marca: GK Ribeiro Advocacia Trabalhista e Previdenciária
- Advogada responsável: Dra. Greice Kelli Ribeiro
- OAB: OAB/SP 387.933
- WhatsApp: `(11) 95731-4252`
- E-mail: `gkribeiro.adv@gmail.com`
- Instagram: `@gkribeiro.adv`
- Atendimento: presencial em São Paulo - SP e online

## Localização

O site trabalha com dois pontos de referência:

- Endereço usado como referência do Google Perfil da Empresa:
  Rua Inácio Monteiro, 2220, Jardim São Paulo, São Paulo - SP

- Atendimento presencial no Centro:
  Edifício Meridional, Rua Líbero Badaró, 101, Centro, São Paulo - SP

## Estrutura do site

Páginas principais:

- `index.html`: página inicial, apresentação da marca e chamadas para contato.
- `trabalhista.html`: página focada em Direito Trabalhista para trabalhadores, empresas e gestores.
- `previdenciario.html`: página focada em Direito Previdenciário e demandas do INSS.
- `localizacao.html`: locais de atendimento e referências geográficas.
- `sobre.html`: apresentação da Dra. Greice Kelli Ribeiro.
- `contato.html`: canais de contato e WhatsApp.
- `blog.html`: listagem de artigos.

Artigos iniciais:

- `blog/inss-negou-beneficio.html`
- `blog/fui-demitido-direitos.html`
- `blog/bpc-loas.html`
- `blog/trabalhei-sem-registro.html`

Arquivos de apoio:

- `assets/css/styles.css`: estilos principais, responsividade e dark mode.
- `assets/js/main.js`: menu mobile, dark mode e rastreamento de cliques no WhatsApp.
- `assets/logo/`: logos finais do projeto.
- `assets/img/`: imagens otimizadas usadas no site.
- `robots.txt`: instruções para mecanismos de busca.
- `sitemap.xml`: mapa do site.

## SEO local

O site foi pensado para buscas locais e de intenção prática, como:

- advogado trabalhista em São Paulo
- advogada trabalhista na Zona Leste
- advogado trabalhista em Guaianases
- advogado trabalhista em Cidade Tiradentes
- advogado previdenciário em São Paulo
- benefício negado pelo INSS
- verbas rescisórias, FGTS, vínculo empregatício e demais demandas trabalhistas

Elementos já considerados:

- Títulos e descrições individuais por página.
- URLs simples e estáticas.
- Conteúdo por área de atuação.
- Dados estruturados com `LegalService`, `Person`, `Organization`, `Article`, `FAQPage` e breadcrumbs quando aplicável.
- Sitemap e robots configurados.
- NAP consistente entre site e Google Perfil da Empresa.
- Conteúdo informativo sem promessas de resultado.

## Analytics e conversões

O site usa Google Analytics 4:

```text
G-6D54LRFTZN
```

O evento principal de conversão é:

```text
click_whatsapp
```

Esse evento é disparado por `assets/js/main.js` quando o usuário clica em links de WhatsApp para:

```text
wa.me/5511957314252
```

No Google Ads, a recomendação é usar `click_whatsapp` como ação de conversão principal dentro da meta **Contatos**. Conversões genéricas, chamadas telefônicas ou visualizações de página devem ficar como secundárias ou fora da otimização da campanha.

## Google Ads

Para campanhas com orçamento inicial baixo, a estratégia recomendada é começar com foco local e intenção direta:

- advogado trabalhista guaianases
- advogada trabalhista guaianases
- advogado trabalhista cidade tiradentes
- advogada trabalhista cidade tiradentes
- advogado trabalhista zona leste
- advogada trabalhista zona leste

Configurações recomendadas:

- Página final principal: `https://gkribeiro.adv.br/trabalhista.html`
- Meta de conversão: Contatos
- Ação principal: `click_whatsapp`
- Lances: maximizar conversões
- Localização: pessoas em ou que frequentam a área segmentada
- Evitar expansão ampla de URL final em campanhas de baixo orçamento

Palavras negativas úteis:

- gratis
- gratuito
- modelo
- pdf
- curso
- faculdade
- concurso
- vaga
- emprego
- salario
- manual
- apostila
- tcc
- jurisprudencia
- peticao pronta

## Google Perfil da Empresa

Dados sugeridos para manter consistência:

- Nome: GK Ribeiro Advocacia Trabalhista e Previdenciária
- Categoria: advogado / escritório de advocacia
- Telefone: `(11) 95731-4252`
- Site: `https://gkribeiro.adv.br`
- Endereço de referência: Rua Inácio Monteiro, 2220, Jardim São Paulo, São Paulo - SP
- Atendimento presencial em São Paulo - SP e online

Descrição sugerida:

> GK Ribeiro Advocacia Trabalhista e Previdenciária atua em Direito Trabalhista e Direito Previdenciário, com atendimento presencial em São Paulo - SP e atendimento online. O escritório oferece orientação jurídica individualizada para análise de documentos, direitos trabalhistas, benefícios do INSS, aposentadorias, BPC/LOAS, rescisões e demais demandas relacionadas às áreas de atuação.

Evitar termos como "melhor", "garantimos", "ganhe sua causa", "resultado garantido" ou qualquer promessa de êxito.

## Publicação

O site é estático e pode ser hospedado diretamente na Hostinger dentro de `public_html`.

O arquivo de publicação usado no projeto é:

```text
gk-ribeiro-site.zip
```

Ao enviar uma nova versão, o ideal é substituir os arquivos antigos do site antes de extrair o ZIP, evitando mistura de versões antigas e novas.

## Checklist de manutenção

Antes de publicar novas alterações:

- Conferir links internos.
- Conferir todos os links de WhatsApp.
- Conferir se o OAB/SP 387.933 aparece no rodapé e nos dados estruturados.
- Conferir domínio em canonical, Open Graph, sitemap e schema.
- Validar `sitemap.xml`.
- Validar dados estruturados no Rich Results Test.
- Testar mobile, tablet e desktop.
- Testar dark mode.
- Conferir se `click_whatsapp` continua aparecendo no GA4.

Ao criar novas páginas públicas:

- Incluir a tag do Google Analytics logo após `<head>`.
- Usar title e meta description próprios.
- Adicionar canonical.
- Adicionar links internos.
- Incluir CTA discreto para WhatsApp.
- Atualizar `sitemap.xml`.
- Manter linguagem informativa e compatível com publicidade na advocacia.

## Próximos conteúdos sugeridos

- Quando procurar uma advogada previdenciária?
- Empresa não pagou rescisão: quais caminhos existem?
- Benefício por incapacidade: documentos importantes para análise
- Como pedir aposentadoria por idade?
- Pensão por morte: documentos para o pedido no INSS
- Assédio moral no trabalho: o que observar?

Cada artigo deve ter título claro, meta description, breadcrumb, CTA para WhatsApp, links internos e schema `Article`. Quando houver perguntas frequentes, incluir também schema `FAQPage`.
