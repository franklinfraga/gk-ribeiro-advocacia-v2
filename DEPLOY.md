# Deploy Incremental — GK Ribeiro Advocacia

> ⚠️ **NUNCA suba o zip completo do projeto.** Suba apenas os arquivos
> modificados. Subir tudo pode prejudicar SEO (Google interpreta como
> "página modificada" e reavalia rankings estáveis).

---

## Identificar arquivos modificados

```bash
# Ver quais arquivos mudaram desde o último commit
git diff --name-only HEAD~1

# Exemplo de saída:
# index.html
# assets/css/forge.css
# assets/js/forge-compat.js
```

## Gerar zip incremental

```bash
# Zipar apenas os arquivos modificados listados
cd /caminho/do/projeto
zip /tmp/deploy-20260622.zip index.html assets/css/forge.css assets/js/forge-compat.js
```

## Subir na Hostinger

1. Acessar painel → Gerenciador de Arquivos
2. **Nunca apagar os arquivos existentes** antes de subir
3. Fazer upload do zip **por cima** dos arquivos atuais
4. Extrair — substitui apenas os arquivos do zip

---

## Regras de layout

| Item | Regra |
|------|-------|
| **CSS** | Usar `forge.css?v=DATA-VERSAO` |
| **JS** | Usar `forge-compat.js?v=DATA-VERSAO` |
| **Layout** | Forge: masthead + hero + chapter + colophon |
| **Header** | Masthead com SVG logo + nav 7 abas + theme-toggle |
| **Footer** | Colophon 3 colunas (GK / Endereços / Contato) |
| **Sem "Localização" no footer** | Não incluir link de Localização na seção "Contato" |
| **Cabeçalhos com acentos** | Início, Previdenciário, Localização, São Paulo |

## Nova página / novo blog post

Sempre usar o template Forge completo:
- Head com meta tags, OG, canonical, fonts, forge.css
- Masthead (SVG logo + 7 abas + theme-toggle + nav-mobile-toggle)
- Hero (eyebrow + título + descrição + ações)
- Chapter body (artigo com sidebar toc)
- Colophon footer
- WhatsApp float
- Script inline (theme toggle + progress line + faq + nav + year)

**Verificar no final:**
- [ ] forge.css?v=DATA-VERSAO (incrementar versão)
- [ ] forge-compat.js?v=DATA-VERSAO se houve mudança no JS
- [ ] Caminhos (../) corretos para blog/ e bairros/
- [ ] Canonical aponta para URL correta
- [ ] Sem links quebrados
- [ ] "Localização" removida da seção "Contato" no footer
- [ ] forge.css e forge-compat.js incluídos no zip (sempre!)

## ⚡ Cache da Hostinger/Cloudflare

A Hostinger usa LiteSpeed Cache agressivo. Mesmo com `?v=` novo, o cache pode
servir arquivos antigos por horas.

### Limpar cache após deploy:
1. hPanel → **Advanced** → **Cache Manager** → **Clear All Cache**
2. Ou hPanel → **Performance** → **LiteSpeed Cache** → **Purge All**
3. Ou no terminal: `curl -X PURGE https://gkribeiro.adv.br/assets/css/forge.css`

### Testar se o cache foi limpo:
```bash
curl -I https://gkribeiro.adv.br/assets/css/forge.css?v=20260622-4 | grep cf-cache-status
# Resultado esperado: MISS (nova versão)
```
