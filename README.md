Perfecto 🚀, aquí tienes un **README.md** inicial para tu proyecto, documentando el stack que ya levantaste (Node.js + Express + Prisma + Postgres + pgAdmin + Docker).

---

```markdown
# Strata Wealth Backend

Backend del proyecto **Strata Wealth**, construido con **Node.js, Express, Prisma y PostgreSQL**.  
La aplicación expone una API para gestionar registros de clientes, conectándose a una base de datos Postgres que se maneja con Prisma ORM.

Además, el proyecto incluye integración con **Docker Compose** para levantar fácilmente los servicios de **Postgres** y **pgAdmin**.

---

## 🚀 Tecnologías

- [Node.js](https://nodejs.org/) v22
- [Express](https://expressjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
- [pgAdmin 4](https://www.pgadmin.org/)
- [Docker Compose](https://docs.docker.com/compose/)

---

## 📂 Estructura del proyecto
```

root
├── public/ # Archivos estáticos (formulario HTML, CSS, JS)
│ └── index.html
├── prisma/ # Archivos de Prisma ORM
│ ├── schema.prisma # Definición del modelo de base de datos
│ └── migrations/ # Migraciones generadas
├── src/ # Código fuente del backend
│ ├── app.js # Configuración principal de Express
│ └── routes/ # Rutas (ej. register.router.js)
├── docker-compose.yml # Configuración de Docker Compose (Postgres + pgAdmin)
├── .env # Variables de entorno
├── package.json
└── README.md

````

---

## ⚙️ Configuración

### 1. Variables de entorno (`.env`)

Crea un archivo `.env` en la raíz con el siguiente contenido (puedes ajustar credenciales):

```env
POSTGRES_USER=alex
POSTGRES_PASSWORD=secret123
POSTGRES_DB=form

PGADMIN_DEFAULT_EMAIL=admin@example.com
PGADMIN_DEFAULT_PASSWORD=admin123

DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}?schema=public
````

---

### 2. Levantar la base de datos con Docker

```bash
docker compose up -d
```

- PostgreSQL disponible en `localhost:5432`
- pgAdmin disponible en [http://localhost:5050](http://localhost:5050)

---

### 3. Prisma ORM

Generar cliente de Prisma:

```bash
npx prisma generate
```

Ejecutar migraciones:

```bash
npx prisma migrate dev --name init
```

Resetear base de datos:

```bash
npx prisma migrate reset
```

---

### 4. Correr el servidor

```bash
npm run dev
```

Servidor en:
👉 [http://localhost:3000](http://localhost:3000)

---

## 📝 Endpoints principales

- **GET** `/api/costumers/db` → Obtiene todos los clientes desde la base de datos
- **POST** `/api/costumers` → Agregar un cliente (desde formulario o JSON)
- **PUT** `/api/costumers/:id` → Editar cliente
- **DELETE** `/api/costumers/:id` → Eliminar cliente

---

## 🌐 Frontend

En `/public/index.html` se encuentra el **formulario de registro** que envía datos al backend.
El CSS y JS asociados permiten que sea **responsive** (web, tablet, móvil).

---

## 📊 pgAdmin

1. Entrar a [http://localhost:5050](http://localhost:5050)
2. Iniciar sesión con:

   - **Email:** `admin@example.com`
   - **Password:** `admin123`

3. Agregar un servidor con los siguientes datos:

   - **Host:** `db`
   - **Port:** `5432`
   - **User:** `${POSTGRES_USER}`
   - **Password:** `${POSTGRES_PASSWORD}`

---

## 📌 Notas

- El modelo de datos principal es `Customer`, definido en `schema.prisma`.
- Los campos opcionales en el modelo permiten valores `null` si no se completan.
- El proyecto incluye validaciones para transformar tipos (ejemplo: fechas y números).

---

## ✨ Comandos útiles (alias recomendados)

En `~/.bashrc` puedes agregar:

```bash
alias dcup="docker compose up -d"
alias dcdown="docker compose down"
alias dclogs="docker compose logs -f"
```

---

## 📜 Licencia

Proyecto privado. Uso interno de **Strata Wealth**.

```

---

¿Quieres que además te genere un **diagrama visual de la base de datos (ERD)** a partir del modelo de Prisma para incluirlo en este README?
```
