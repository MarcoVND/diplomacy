# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

🚀 Guía de Git y Flujo de Trabajo (React Native)

Este documento define el estándar de trabajo en equipo para el desarrollo de esta aplicación móvil. Utilizamos una versión optimizada de Gitflow para garantizar que la rama de producción sea siempre estable y que el desarrollo de nuevas funciones no interfiera entre compañeros.

🌳 1. Estructura de Ramas

🔴 main (Producción)

Propósito: Contiene el código que está actualmente en las tiendas (App Store / Play Store).

Regla de Oro: NUNCA se hace commit directo aquí. Solo recibe cambios de develop (a través de una rama release/*) o de hotfix/*.

Estabilidad: Debe ser 100% funcional y testeada.

🟡 develop (Desarrollo)

Propósito: Es la rama principal de integración. Aquí vive el código más reciente que ya ha sido probado pero que aún no se lanza a producción.

Uso: Es la rama base de donde salen todas las feature/*.

🔵 feature/* (Funcionalidades)

Nomenclatura: feature/nombre-de-la-tarea (ej. feature/login-google).

Propósito: Desarrollo de nuevas pantallas, componentes o lógica.

Origen: Siempre se crea a partir de develop.

Finalización: Se integra de vuelta a develop mediante un Pull Request (PR).

🟠 hotfix/* (Correcciones Urgentes)

Nomenclatura: hotfix/descripcion-error (ej. hotfix/crash-pago).

Propósito: Corregir errores críticos encontrados en la rama main que no pueden esperar al siguiente ciclo de desarrollo.

Origen: Se crea desde main.

Finalización: Se integra tanto en main como en develop.

🔄 2. Ciclo de Trabajo Diario

Paso 1: Sincronizar y Crear Rama

Antes de tocar el código, asegúrate de tener lo último del equipo.

git checkout develop
git pull origin develop
git checkout -b feature/nombre-de-tu-tarea


Paso 2: Desarrollo y Commits

Realiza cambios pequeños. En React Native, verifica que los cambios en archivos nativos (ios/ o android/) sean intencionales.

git add .
git commit -m "feat: agregar validación de formulario de registro"


Usa prefijos en tus mensajes: feat: para funciones, fix: para errores, docs: para documentación.

Paso 3: Mantenerse Actualizado

Si un compañero subió cambios a develop mientras trabajabas, tráelos a tu rama para resolver conflictos localmente:

git fetch origin
git merge origin/develop


Paso 4: Pull Request (PR)

Sube tu rama y abre un PR en la plataforma (GitHub/GitLab):

git push origin feature/nombre-de-tu-tarea


Requisito: Al menos un compañero debe revisar el código y dar el "Approve" antes de hacer el merge a develop.

📱 3. Consideraciones de React Native

Para evitar conflictos en dependencias y archivos generados:

Dependencias: Si cambias el package.json, asegúrate de que tus compañeros corran npm install o yarn.

iOS Pods: Si agregas una librería con código nativo, debes incluir los cambios en ios/Podfile.lock. Los demás deberán ejecutar:

cd ios && pod install && cd ..


Ignorar Archivos: Nunca subas carpetas de compilación. Verifica que el .gitignore incluya:

node_modules/

ios/build/

android/app/build/

.env (datos sensibles)

🚑 4. Gestión de Errores y "Limpieza"

¿Algo salió mal en tu rama local?

Si quieres descartar todos tus cambios y volver al último commit:

git reset --hard HEAD


¿Necesitas borrar una rama ya integrada?

git branch -d feature/nombre-tarea        # Local
git push origin --delete feature/nombre-tarea # Remoto


¿El merge a develop rompió la build?

Usa revert para deshacer el cambio de forma segura sin borrar el historial:

git revert <ID_DEL_COMMIT_DEL_MERGE>
git push origin develop


🤝 5. Reglas de Convivencia

No fuerces el push: git push --force está prohibido en main y develop.

PRs pequeños: Es mejor revisar 3 PRs pequeños que uno de 50 archivos.

Test local: Antes de abrir un PR, asegúrate de que la app compila tanto en Android como en iOS.

📱 Arquitectura del Proyecto React Native (Expo - Estructura Plana)

Bienvenido al repositorio. Este documento detalla la estructura de carpetas y patrones de diseño para asegurar un proyecto escalable, respetando la estructura plana nativa de Expo.

Nota: En este enfoque, no utilizamos una carpeta src. Todas las carpetas de funcionalidad viven en la raíz del proyecto, facilitando el acceso y reduciendo la anidación.

📂 Estructura de Directorios

El código fuente se organiza directamente en la raíz.

root/
├── assets/                 # Assets nativos de Expo (icon.png, splash.png) y fuentes
├── components/             # Componentes UI reutilizables (Dumb Components)
├── config/                 # Configuración global (Env vars)
├── constants/              # Valores constantes (Theme, Colores, Strings)
├── hooks/                  # Custom Hooks (Lógica de negocio reutilizable)
├── services/               # Comunicación con APIs externas (Axios)
├── store/                  # Estado Global (Zustand)
├── types/                  # Definiciones globales de TypeScript
├── utils/                  # Funciones auxiliares puras
├── app/                    # Punto de entrada de la aplicación y desarrollo de pantallas


🌟 Filosofía

Nuestra arquitectura se basa en la convención sobre configuración:

Mantenemos la simplicidad de Expo evitando sub-niveles innecesarios.

Separamos claramente la UI (components), las Vistas (screens) y la Lógica (hooks, services).

📖 Detalle de Carpetas

1. components/ (UI Reutilizable)

Componentes visuales puros.

Regla: No deben contener llamadas directas a la API.

Organización: Usa carpetas internas para componentes complejos (components/Card/index.ts).

2. services/ & store/

services/: Contiene tu instancia de apiClient.ts (Axios) y funciones de petición.

store/: Contiene tus stores de Zustand (ej: useAuthStore.ts).

🚀 Guías de Desarrollo

1. Importaciones (Alias vs Relativas)

Al usar una estructura plana, las importaciones relativas suelen ser más cortas.
Sin embargo, se recomienda configurar el tsconfig.json para soportar importaciones absolutas desde la raíz.

Configuración recomendada (tsconfig.json):

{
  "compilerOptions": {
    "baseUrl": "./"
  }
}


Uso:

Sin Alias: import { Button } from '../components/Button';

Con BaseUrl: import { Button } from 'components/Button'; (Más limpio)

2. Barrel Files (index.ts)

Aún en estructura plana, se recomienda usar archivos index.ts dentro de las carpetas (components/index.ts, hooks/index.ts) para agrupar exportaciones.

Ejemplo components/index.ts:

export * from './Button';
export * from './Header';


3. Flujo de Trabajo

Instalación: npx create-expo-app mi-app -t blank-typescript

Creación: Crea las carpetas screens, services, store, etc., en la raíz.

Desarrollo: Mantén App.tsx limpio y delega la lógica a las carpetas correspondientes.#   d i p l o m a c y  
 