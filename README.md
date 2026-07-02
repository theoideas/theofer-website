# 🏗️ THEOFER - Documentación Oficial del Proyecto

Este documento proporciona una guía completa sobre la arquitectura, las tecnologías, las rutas y la configuración del sitio web de **THEOFER**. Está diseñado para que cualquier desarrollador humano o Agente de Inteligencia Artificial pueda entender rápidamente el proyecto, ubicar cada pieza de código y continuar con su desarrollo y mantenimiento de forma eficiente.

---

## 🛠️ 1. Stack Tecnológico (Tecnologías Utilizadas)

El proyecto está construido bajo una arquitectura moderna de **Full-Stack Serverless** enfocada en el rendimiento, el SEO y la escalabilidad.

### Frontend
- **Next.js (App Router) v14/15:** Framework de React. Se usa por su capacidad de Server-Side Rendering (SSR) y Static Site Generation (SSG), lo que garantiza tiempos de carga ultrarrápidos y excelente SEO.
- **TypeScript:** Añade tipado estático estricto a JavaScript, lo que previene errores en tiempo de desarrollo.
- **Tailwind CSS:** Framework de CSS utilitario.
- **Framer Motion:** Librería de animación para React (fade-in, transiciones).
- **Vercel Analytics & Speed Insights:** Módulos integrados para rastrear el tráfico de usuarios reales y la métrica de rendimiento (Core Web Vitals) en tiempo real.
- **React Leaflet:** Integración con Leaflet.js para mostrar mapas interactivos (Master Plan de lotes).

### Backend y Analíticas
- **Supabase (PostgreSQL):** Base de datos relacional protegida por Row Level Security (RLS). Almacena los leads de contacto.
- **Resend:** API para el envío de correos transaccionales (reportes y alertas).
- **Vercel Cron Jobs:** Tareas programadas en el servidor (`vercel.json`) que se ejecutan automáticamente para enviar reportes (diarios, semanales, mensuales).
- **Next.js Route Handlers (`app/api/*`):** Funciones sin servidor (Serverless Functions) para el procesamiento de back-end.

---

## 🗂️ 2. Estructura de Directorios y Rutas

### Rutas (Frontend)
- **`/` (Home):** `app/page.tsx`
- **`/inversiones`:** `app/inversiones/page.tsx`
- **`/proyectos`:** `app/proyectos/page.tsx`
- **`/contacto`:** `app/contacto/page.tsx`
- **`/privacy-policy`:** `app/privacy-policy/page.tsx`

### Rutas (Backend API)
- **`POST /api/contact`:** `app/api/contact/route.ts` 
  - Recibe los datos del formulario, los inserta en Supabase (usando `ANON_KEY`) y envía la alerta por correo.
- **`GET /api/cron/summary`:** `app/api/cron/summary/route.ts`
  - Genera reportes estadísticos y lee la base de datos (usando `SERVICE_ROLE_KEY` para saltar el RLS). Protegida por el token `CRON_SECRET`.

---

## 🚀 3. Guía de Instalación y Variables de Entorno

Para clonar y poner a funcionar este proyecto en un ambiente local, o desplegarlo en Vercel, necesitas configurar las siguientes variables de entorno (`.env.local` o en Vercel Settings):

```env
# 1. Base de Datos (Supabase)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
# Llave pública (Permite Insertar)
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...
# Llave Maestra (Permite Leer/Modificar saltándose RLS - ¡USAR SOLO EN BACKEND!)
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6...

# 2. Correos (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=correo@destino.com

# 3. Seguridad de Cron Jobs
# Contraseña generada por ti (o por Vercel) para evitar que extraños ejecuten los reportes
CRON_SECRET=TuContraseñaSecretaSuperSegura
```

### Configuración SQL (Supabase)
Si se monta desde cero, se debe crear la tabla y configurar las políticas de seguridad:
```sql
create table public.leads (
  id uuid default gen_random_uuid() primary key,
  nombre text not null,
  email text not null,
  rama text,
  tipo_proyecto text,
  tipo_inversion text,
  mensaje text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  fecha_creacion timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.leads enable row level security;

create policy "Allow public inserts" 
on public.leads for insert 
to anon 
with check (true);
```
