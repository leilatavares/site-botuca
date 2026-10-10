# Instruções de Atualização e Deploy do Site (SSH)

Este documento contém o passo a passo e as credenciais para atualizar o site oficial do **Convênio UNESP / SME Botucatu**.

---

## 🌐 Dados do Servidor

- **Host SSH:** `hospeda.fc.unesp.br` (Porta: `22`)
- **Usuário:** `vera.capellini`
- **Caminho no Servidor:** `/home/vera.capellini/public_html/convenio-botucatu/`
- **URL no Ar:** [https://www2.fc.unesp.br/convenio-botucatu/](https://www2.fc.unesp.br/convenio-botucatu/)
- **Repositório GitHub:** `git@github.com:leilatavares/site-botuca.git` (Branch: `main`)

---

## 🚀 Comandos Rápidos de Deploy

Abra o terminal na pasta `Site_pronto_convenio_botucatu` e execute:

### 1. Enviar arquivos para o servidor:
```powershell
scp -r index.html styles.css script.js assets icones_site vera.capellini@hospeda.fc.unesp.br:/home/vera.capellini/public_html/convenio-botucatu/
```

### 2. Configurar permissões de leitura no servidor:
```powershell
ssh vera.capellini@hospeda.fc.unesp.br "chmod -R 755 /home/vera.capellini/public_html/convenio-botucatu && find /home/vera.capellini/public_html/convenio-botucatu -type f -exec chmod 644 {} +"
```

### 3. Verificar se o site está respondendo:
```powershell
curl.exe -I https://www2.fc.unesp.br/convenio-botucatu/
```

### 4. Salvar alterações no GitHub:
```powershell
git add .
git commit -m "Atualizacoes do site"
git push origin main
```
