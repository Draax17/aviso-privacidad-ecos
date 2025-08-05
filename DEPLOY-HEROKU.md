# 🚀 Despliegue en Heroku - Aviso de Privacidad

## 📋 Requisitos Previos

1. **Cuenta de Heroku**: Regístrate en [heroku.com](https://heroku.com)
2. **Git instalado**: Para control de versiones
3. **Node.js**: Versión 18 o superior
4. **Heroku CLI**: Para gestionar tu aplicación

## 🔧 Instalación de Heroku CLI

### Windows:
```bash
# Descarga e instala desde: https://devcenter.heroku.com/articles/heroku-cli
```

### macOS:
```bash
brew tap heroku/brew && brew install heroku
```

### Linux:
```bash
curl https://cli-assets.heroku.com/install.sh | sh
```

## 📦 Preparación del Proyecto

### 1. Inicializar Git (si no está inicializado)
```bash
git init
git add .
git commit -m "Primera versión del aviso de privacidad"
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Probar localmente
```bash
npm start
```
Visita: http://localhost:3000

## 🚀 Despliegue en Heroku

### Paso 1: Login en Heroku
```bash
heroku login
```

### Paso 2: Crear aplicación en Heroku
```bash
heroku create tu-app-aviso-privacidad
```
*Nota: Reemplaza "tu-app-aviso-privacidad" con un nombre único*

### Paso 3: Configurar variables de entorno (opcional)
```bash
heroku config:set NODE_ENV=production
```

### Paso 4: Desplegar la aplicación
```bash
git push heroku main
```

### Paso 5: Abrir la aplicación
```bash
heroku open
```

## 🔗 URLs de tu Aplicación

Una vez desplegada, tu aplicación estará disponible en:
- **URL principal**: `https://tu-app-aviso-privacidad.herokuapp.com`
- **URL del aviso**: `https://tu-app-aviso-privacidad.herokuapp.com/aviso-privacidad`

## 📱 Actualizar Mensaje de WhatsApp

Reemplaza `[LIGA_A_TU_PAGINA_WEB]` en tu mensaje de WhatsApp con:
```
https://tu-app-aviso-privacidad.herokuapp.com
```

## 🔄 Actualizaciones Futuras

Para actualizar tu aplicación:

1. **Hacer cambios en los archivos**
2. **Commit de los cambios**:
   ```bash
   git add .
   git commit -m "Actualización del aviso de privacidad"
   ```
3. **Desplegar cambios**:
   ```bash
   git push heroku main
   ```

## 📊 Monitoreo

### Ver logs en tiempo real:
```bash
heroku logs --tail
```

### Ver información de la app:
```bash
heroku info
```

### Ver métricas:
```bash
heroku ps
```

## 🛠️ Comandos Útiles

### Reiniciar la aplicación:
```bash
heroku restart
```

### Ver variables de entorno:
```bash
heroku config
```

### Abrir consola de la app:
```bash
heroku run bash
```

### Ver logs:
```bash
heroku logs
```

## 🔧 Solución de Problemas

### Error: "App not found"
- Verifica que estés logueado: `heroku auth:whoami`
- Verifica que la app existe: `heroku apps`

### Error: "Build failed"
- Verifica que `package.json` esté correcto
- Revisa los logs: `heroku logs --tail`

### Error: "Application error"
- Verifica que el servidor esté funcionando
- Revisa los logs para más detalles

## 💰 Planes de Heroku

- **Free Plan**: Ya no está disponible
- **Eco Dyno**: $5/mes (recomendado para empezar)
- **Basic Dyno**: $7/mes

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs: `heroku logs --tail`
2. Consulta la documentación de Heroku
3. Contacta al soporte de Heroku

---

**¡Tu página de aviso de privacidad estará lista en minutos! 🎉** 