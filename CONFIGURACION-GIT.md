# 🔧 Configuración de Git para Draax17

## ✅ Configuración Actual

Tu computadora ya está configurada con:

- **Usuario Git:** Draax17
- **Email:** dgfglez@gmail.com
- **Credential Helper:** manager-core

## 🚀 Para futuros proyectos

### Configuración automática (ya aplicada):
```bash
git config --global user.name "Draax17"
git config --global user.email "dgfglez@gmail.com"
git config --global credential.helper manager-core
```

### Para nuevos repositorios:

#### 1. Clonar repositorios:
```bash
git clone https://github.com/Draax17/nombre-del-repo.git
```

#### 2. Crear nuevos repositorios:
```bash
# Inicializar repositorio
git init

# Agregar archivos
git add .

# Primer commit
git commit -m "Primera versión"

# Agregar remoto (reemplaza con tu repositorio)
git remote add origin https://github.com/Draax17/nombre-del-repo.git

# Subir código
git push -u origin main
```

#### 3. Para repositorios donde eres colaborador:
```bash
# Clonar repositorio
git clone https://github.com/usuario-propietario/nombre-del-repo.git

# Hacer cambios y commit
git add .
git commit -m "Descripción de los cambios"

# Subir cambios
git push origin main
```

## 🔑 Autenticación

### Opción 1: Token de Acceso Personal (Recomendado)
1. Ve a: https://github.com/settings/tokens
2. "Generate new token (classic)"
3. Selecciona permisos: `repo`, `workflow`
4. Copia el token y úsalo como contraseña

### Opción 2: GitHub CLI
```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Login
gh auth login

# Crear repositorio
gh repo create nombre-del-repo --public --source=. --push
```

## 🛠️ Comandos Útiles

### Ver configuración actual:
```bash
git config --global user.name
git config --global user.email
git config --global credential.helper
```

### Ver remotos:
```bash
git remote -v
```

### Cambiar credenciales:
```bash
git config --global user.name "Nuevo-Nombre"
git config --global user.email "nuevo@email.com"
```

### Limpiar credenciales almacenadas:
```bash
git config --global --unset credential.helper
git config --global credential.helper manager-core
```

## 📋 Flujo de trabajo típico

```bash
# 1. Hacer cambios en tu código

# 2. Agregar cambios
git add .

# 3. Commit con mensaje descriptivo
git commit -m "Descripción de los cambios"

# 4. Subir a GitHub
git push origin main

# 5. Si es proyecto con Heroku
git push heroku main
```

## 🎯 Repositorios importantes

### Aviso de Privacidad:
- **GitHub:** https://github.com/Draax17/aviso-privacidad-ecos
- **Heroku:** https://aviso-privacidad-ecos-b6b7ad47fe00.herokuapp.com/

### Para futuros proyectos:
- Crea repositorios en: https://github.com/Draax17
- Usa el mismo flujo de trabajo
- Mantén documentación en README.md

---

**¡Tu computadora está configurada correctamente para trabajar con Git y GitHub! 🚀** 