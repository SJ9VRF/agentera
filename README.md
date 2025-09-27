# Agentera Website (GitHub Pages)

A static website for **Agentera** with three products:

- `AI Virtual Company`
- `AI for Law Firms`
- `CertiFy — Information Verifier`

Built with **Astro + Tailwind** and deployed to **GitHub Pages** via GitHub Actions.

---

## 1) Create the GitHub repo

```bash
# locally
git init agentera
cd agentera
# copy these files into this folder, then:
git add .
git commit -m "feat: bootstrap Agentera website"
git branch -M main
git remote add origin git@github.com:sj9vrf/agentera.git
git push -u origin main
```

On GitHub:
- Create a new repo named `agentera`
- Push the code (see above)

## 2) Update config

Edit `astro.config.mjs` and set:
```js
site: 'https://sj9vrf.github.io/agentera'
```

Commit the change:
```bash
git add astro.config.mjs
git commit -m "chore: set site URL"
git push
```

## 3) Enable GitHub Pages

- Go to **Settings → Pages**
- Set **Source** to **GitHub Actions**
- The included workflow `.github/workflows/deploy.yml` will publish on push to `main`

## 4) Run locally

```bash
npm i
npm run dev
```

Open http://localhost:4321

## 5) Branching model (suggested)

- `main`: production (auto-deploys)
- feature branches: `feat/law-firms-draft`, `feat/certify-api-docs`
- Use conventional commits: `feat:`, `fix:`, `docs:`, `chore:`

## 6) Add product content

Edit:
- `src/pages/products/ai_virtual_company.astro`
- `src/pages/products/ai_for_law_firms.astro`
- `src/pages/products/ai_information_verifier.astro`

## 7) Custom domain (optional)

- Buy a domain (e.g., `agentera.ai`)
- In repo root, add a file `CNAME` containing:
```
agentera.ai
```
- Point DNS `A` and `AAAA`/`CNAME` records to GitHub Pages per GitHub docs.

## 8) Next steps

- Add analytics (Plausible)
- Add contact form (Formspark or static form handler)
- Add blog/docs via markdown in `src/pages/blog/*`

---

### Common git commands

```bash
git status                 # what's changed
git add .                  # stage all
git commit -m "message"    # commit
git pull --rebase origin main
git push origin HEAD       # push current branch
git log --oneline --graph  # nice history
```

---

MIT License © Agentera