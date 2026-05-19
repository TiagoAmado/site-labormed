# Labormed Sorocaba — Site Institucional

Site institucional do **Labormed Sorocaba**, laboratório de análises clínicas. Desenvolvido como site estático multi-página (HTML/CSS/JS puro), hospedado via GitHub Pages.

---

## Visão Geral

| Item | Detalhe |
|---|---|
| Tipo | Site estático (sem framework ou bundler) |
| Tecnologias | HTML5, CSS3, JavaScript vanilla |
| Hospedagem | GitHub Pages |
| URL pública | https://tiagoamado.github.io/site-labormed/ |
| Design | Navy (#0f172a) + Vermelho (#e84040) + Azul (#3b82f6) |

---

## Estrutura de Arquivos

```
site_labormed/
│
├── index.html               # Página principal (homepage)
├── parceiros.html           # Seja Nosso Parceiro
├── exames.html              # Catálogo de exames
├── contato.html             # Fale conosco
├── medicos-e-clinicas.html  # Portal de acesso para médicos
│
├── css/
│   └── style.css            # Folha de estilos global (todas as páginas)
│
├── js/
│   └── main.js              # Menu mobile, acordeão de exames, formulários
│
├── images/
│   └── logo_labormed_png.png  # Logo oficial da empresa
│
└── includes/
    └── header.html          # Fragmento de header (referência)
```

---

## Páginas

### `index.html` — Homepage
- Barra de acesso rápido a resultados de exames
- Navbar com logo, menu de navegação e botões de ação
- **Hero** com imagem de sexagem fetal e CTA de agendamento
- Seção de **Convênios** (SulAmérica, Fenix, Amil, Unimed, Porto Saúde, Ótica Saúde)
- **Nossas Unidades** — 3 unidades com endereço, horários e botão "Como chegar"
- **Sobre a Labormed Sorocaba** — descrição institucional com foto
- **Depoimentos** de pacientes
- **CTA de Equipe** — recrutamento
- **Nossos Serviços** — grid com 5 especialidades (Ultrassom, Cardiologia, Colposcopia, Exames Laboratoriais, Vacinação)
- **Coleta Domiciliar e Empresarial**
- Footer completo + botão flutuante WhatsApp

### `parceiros.html` — Seja Nosso Parceiro
- Hero com botões "Quero ser parceiro" e "Falar no WhatsApp"
- **Tabs de navegação** (sticky): Clínicas Médicas, Medicina Ocupacional, Empresas, Profissionais da Saúde, Fale Conosco
- **Faixa de números**: 200+ parceiros, 500+ exames, prazo 24h, 20+ anos
- **6 vantagens exclusivas** para parceiros em grid
- **4 seções detalhadas** de parceria, cada uma com imagem, badge, descrição, lista de benefícios e CTAs:
  - Clínicas Médicas
  - Medicina Ocupacional (NR-7 / PCMSO)
  - Empresas / RH
  - Profissionais da Saúde
- **Processo em 5 passos** (do contato à ativação)
- **6 diferenciais** em cards numerados
- **FAQ accordion** com 6 perguntas frequentes
- **Formulário de parceria** com fundo navy escuro

### `exames.html` — Catálogo de Exames
- Painel de atenção ao preparo
- Lista accordion com os principais exames e orientações de preparo:
  - Hemograma Completo, Glicemia de Jejum, Colesterol Total, Urina Tipo 1, Parasitológico de Fezes, TSH, Vitamina D, PCR

### `contato.html` — Fale Conosco
- Card com informações de contato reais:
  - Telefone: (15) 3031-3761
  - E-mail: contato@labormedsorocaba.com.br
  - Endereço: Rua Capitão Nascimento Filho, Nº 100 — Jd. Vergueiro, Sorocaba/SP
- Formulário de envio de mensagem

### `medicos-e-clinicas.html` — Portal Médico
- Página de acesso restrito para médicos e clínicas parceiras
- Card com descrição do portal e link para cadastro de parceria

---

## Estilo e Design

O arquivo `css/style.css` centraliza todos os estilos do site. Principais variáveis e decisões de design:

```css
--navy:      #0f172a   /* fundo escuro, header, rodapé */
--red:       #e84040   /* cor de destaque, CTAs principais */
--blue:      #3b82f6   /* links, badges, botões secundários */
--green:     #22c55e   /* WhatsApp, sucesso */
--white:     #ffffff
```

**Componentes globais definidos no CSS:**
- `.results-bar` — barra superior de acesso a resultados
- `.navbar` — header com logo, nav e botões de ação
- `.nav-parceiro` — link especial em vermelho no nav
- `.hero` / `.hero-inner` — seção hero full-width
- `.btn-comprar` / `.btn-login` — botões do header
- `.footer-grid` / `.footer-brand` / `.footer-col` — rodapé 4 colunas
- `.whatsapp-float` — botão flutuante fixo
- `.page-center` / `.page-header` — layouts internos de páginas secundárias

---

## JavaScript (`js/main.js`)

Funcionalidades implementadas:

| Função | Descrição |
|---|---|
| Menu mobile | Toggle do nav em telas menores com animação hambúrguer |
| Active nav | Detecta a página atual e marca o link ativo no menu |
| Accordion exames | Abre/fecha detalhes de cada exame em `exames.html` |
| FAQ parceiros | Accordion das perguntas frequentes em `parceiros.html` |
| Tab highlight | Destaca a tab de parceria conforme o scroll da página |
| Formulário contato | Animação de envio com feedback visual |
| Formulário parceria | Animação de envio com feedback visual |

---

## Como Rodar Localmente

Qualquer servidor HTTP estático funciona. Exemplos:

```bash
# Python
python -m http.server 3000

# Node (se tiver http-server instalado)
npx http-server -p 3000
```

Acesse `http://localhost:3000` no navegador.

---

## Deploy — GitHub Pages

O site é publicado automaticamente via GitHub Pages a partir da branch `main`.

```bash
# Publicar alterações
git add .
git commit -m "descrição das mudanças"
git push origin main
```

Configuração no repositório: **Settings → Pages → Branch: main → / (root)**

---

## Contato Real da Empresa

| Canal | Dado |
|---|---|
| Telefone | (15) 3031-3761 |
| WhatsApp | (15) 93031-3761 |
| E-mail geral | contato@labormedsorocaba.com.br |
| E-mail parcerias | parcerias@labormedsorocaba.com.br |
| Endereço | Rua Capitão Nascimento Filho, Nº 100, Jd. Vergueiro — Sorocaba/SP |
| Horário | Seg–Sex: 6h–18h \| Sáb: 6h–12h |

---

## Desenvolvimento

Desenvolvido por **Tiago Amado**, com assistência de IA (Claude Code / Anthropic).
